const { PrismaClient } = require("@prisma/client");
const router = require("express").Router();
const prisma = new PrismaClient();
router.get("/list", async (req, res, next) => {
  try {
    const list = await prisma.list.findMany({});
    res.json(list);
  } catch (error) {
    next(error);
  }
});

router.get("/list/:id", async (req, res, next) => {
  try {
    const query = Number(req.params.id);
    const listText = await prisma.list.findUnique({
      where: {
        id: query,
      },
    });
    res.json(listText);
  } catch (error) {
    next(error);
  }
});

router.post("/list", async (req, res, next) => {
  try {
    const newText = await prisma.list.create({
      data: req.body,
    });
    res.json(newText);
  } catch (error) {
    next(error);
  }
});

router.delete("/list/:id", async (req, res, next) => {
  try {
    const query = Number(req.params.id);
    const deletedText = await prisma.list.delete({
      where: {
        id: query,
      },
    });
    res.json(deletedText);
  } catch (error) {
    next(error);
  }
});

router.patch("/list/:id", async (req, res, next) => {
  console.log(req.body);
  try {
    const query = Number(req.params.id);
    const updatedText = await prisma.list.update({
      where: {
        id: query,
      },
      data: req.body,
    });

    res.json(updatedText);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

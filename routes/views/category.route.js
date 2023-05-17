const express = require("express");
const CategoryList = require("../../Components/CategoryList");
const SpisokList = require("../../Components/SpisokList");
const router = express.Router();
const { Category, Spisok } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({});
    // console.log(categories)
    res
      .status(200)
      .renderComponent(CategoryList, { title: "Аренда", categories });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:idCategory", async (req, res) => {
  const { idCategory } = req.params;
  try {
    const spisokList = await Spisok.findAll({
      where: { idCategory },
      });
    console.log(spisokList);
    res.status(200)
      .renderComponent(SpisokList, { title: "Аренда", spisokList });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

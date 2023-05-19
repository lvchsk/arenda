const router = require("express").Router();
const AddHousingBtn = require("../../components/housings/AddHousingBtn");
const HousingAbout = require("../../components/housings/HousingAbout");
const Housings = require("../../components/housings/Housings");
const FormAddHousing = require("../../components/housings/FormAddHousing");
const FormUpdateHousing = require("../../components/housings/FormUpdateHousing");
const MyHousingItem = require("../../components/housings/MyHousingItem");
const MyHousingItemDelMee = require("../../components/housings/MyHousingItemDelMee");
const MyHousings = require("../../components/housings/MyHousings");
const { Housing } = require("../../db/models");
const { User } = require("../../db/models");
const { Comment } = require("../../db/models");
const { Like } = require("../../db/models");
const { Favorite } = require("../../db/models");
const createHtml = require("../../middleware/createHtml");

router.route("/").post(async (req, res) => {
  const { name, info, image, address, type } = req.body;
  const { user } = req.session;

  if (!name || !info || !image || !address) {
    res.json({ message: "заполните все поля!" });
    return;
  }
  if (user) {
    try {
      const newHousing = await Housing.create({
        name,
        info,
        image,
        type,
        address,
        user_id: user.id,
      });
      const housing = await Housing.findOne({
        where: { id: newHousing.id },
        include: [{ model: User }, { model: Comment }, { model: Like }],
      });

      const htmlHousing = createHtml(MyHousingItemDelMee, { housing });
      const btn = createHtml(AddHousingBtn);
      res.json({ message: "ok", htmlHousing, btn });
    } catch (err) {
      res.json({ message: err.message });
    }
  }
});

router
  .route("/housing/:id")
  .delete(async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;
    if (user) {
      try {
        const housing = await Housing.findOne({ where: { id } });
        if (housing && housing.user_id === user.id) {
          await Comment.destroy({ where: { housing_id: housing.id } });
          await Like.destroy({ where: { housing_id: housing.id } });
          await Favorite.destroy({ where: { housing_id: housing.id } });
          await housing.destroy();
          res.json({ message: "ok" });
        } else {
          res.json({ message: "что-то пошло не так!" });
        }
      } catch (err) {
        res.json({ message: err.message });
      }
    } else {
      res.json({ message: "fig-vam!" });
    }
  })
  .put(async (req, res) => {
    const { user } = req.session;
    const { name, info, image, type, address } = req.body;
    const { id } = req.params;
    if (!name || !info || !image || !address) {
      res.json({ message: "заполните все поля!" });
      return;
    }
    if (user) {
      try {
        const housing = await Housing.findOne({
          where: { id },
          include: [{ model: User }, { model: Comment }, { model: Like }],
        });
        if (housing.user_id === user.id) {
          housing.name = name;
          housing.info = info;
          housing.image = image;
          housing.type = type;
          housing.address = address;
          await housing.save();
          const html = createHtml(MyHousingItem, { housing });
          res.json({ message: "ok", html });
        } else {
          res.json({ message: "fig-vam!" });
        }
      } catch (err) {
        res.json({ message: err.message });
      }
    } else {
      res.json({ message: "fig-vam!" });
    }
  });

router.route("/housing/formUpdate/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const housing = await Housing.findOne({ where: { id }, raw: true });
    const html = createHtml(FormUpdateHousing, { housing });
    res.json({ message: html });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.route("/housing/add/form").get((req, res) => {
  const html = createHtml(FormAddHousing);
  res.json({ html });
});

module.exports = router;

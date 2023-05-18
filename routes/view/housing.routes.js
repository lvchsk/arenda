 const router = require('express').Router();
 const AddHousingBtn = require('../../components/housings/AddHousingBtn');
 const HousingAbout = require('../../components/housings/HousingAbout');
 const Housings = require('../../components/housings/Housings');
 const FormAddHousing = require('../../components/housings/FormAddHousing');
 const FormUpdateHousing = require('../../components/housings/FormUpdateHousing');
 const MyHousingItem = require('../../components/housings/MyHousingItem');
 const MyHousingItemDelMee = require('../../components/housings/MyHousingItemDelMee');
 const MyHousings = require('../../components/housings/MyHousings');
 const { Housing } = require('../../db/models');
 const { User } = require('../../db/models');
 const { Comment } = require('../../db/models');
 const { Like } = require('../../db/models');
 const { Favorite } = require('../../db/models');
 const createHtml = require('../../middleware/createHtml');

router.route('/my/housings')
.get( async (req, res) => {
    try {
        const {id} = req.session.user;
        const housings = await Housing.findAll({where: {user_id: id},
             include: [{model: User}, {model: Comment}, {model: Like}]
            });
            housings.sort((a, b) => b.id - a.id);
     res.renderComponent(MyHousings, {title: 'my housings', user: req.session.user, housings});   
    } catch (err) {
        res.json({message: err.message});
    }
})

router.route('/housing/:id')
.get( async (req, res) => {
    try {
      const { id } = req.params;
      const housing = await Housing.findOne({where: {id},
         include: [{model: User}, {model: Comment}, {model: Like}]
        }); 
        housing.Comments.sort((a, b) => b.id - a.id);
      const {Comments} = housing;
     res.renderComponent(HousingAbout, {
        title: 'about housing',
         user: req.session.user,
          housing,
          comments: Comments
        });
    } catch (err) {
        res.json({message: err.message});
    }
})









router.route('/:page')
.get( async (req, res) => {
    try {
        const {page} = req.params;
        const dataHousings = await Housing.findAll({
            include: [{model: User}, {model: Comment}, {model: Like}, {model: Favorite}]
        });
        dataHousings.sort((a, b) => b.id - a.id);
        const nums = Math.ceil(dataHousings.length / 3);
        const startHousing = (page - 1) * 3;
        const housings = dataHousings.slice(startHousing, startHousing + 3);
        const pages = [];
        for(let i = 1; i <= nums; i += 1){
            pages.push({active: false, num: i});
        }
        pages[page - 1].active = true;
        res.renderComponent(Housings, {title: 'Housings', housings, pages, user: req.session.user});
    } catch (err) {
        res.json({message: err.message});
    } 
})

module.exports = router;
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

router.route('/:id')
.post(async (req, res) => {
    const { id } = req.body;
    const { user } =req.session;
    if(user){
        try {
            const newLike = await Like.create({user_id: user.id, housing_id: id});
    
            if(newLike){
                res.json({message: 'ok'});
            }
            else{
                res.json({message: 'fig!'});
            }
        } catch (err) {
            res.json({message: err.message});
        }
    }
})

module.exports = router;
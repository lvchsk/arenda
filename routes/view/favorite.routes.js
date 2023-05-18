const router = require('express').Router();
const HousingAbout = require('../../components/housings/HousingAbout');
const Housings = require('../../components/housings/Housings');
const MyHousings = require('../../components/housings/MyHousings');
const CommentAddBtn = require('../../components/comments/CommentAddBtn');
const CommentItem = require('../../components/comments/CommentItem');
const CommentItemDelMee = require('../../components/comments/CommentItemDelMee');
const FormAddComment = require('../../components/comments/formAddComment');
const FormUpdateComment = require('../../components/comments/FormUpdataComment');
const Favorites = require('../../components/favorites/Favorites');
const { Housing } = require('../../db/models');
const { User } = require('../../db/models');
const { Favorite } = require('../../db/models');
const { Comment } = require('../../db/models');
const createHtml = require('../../middleware/createHtml');

router.route('/')
.get( async (req, res) => {
    try {
        const { user } = req.session;
        const favorites = await Favorite.findAll({where: {user_id: user.id}, include: [
            {model: User},
            {model: Housing}
        ]});
         res.renderComponent(Favorites, {favorites, user, title: 'favorites'});
    } catch (err) {
        res.json({message: err.messaage});
    }
})

module.exports = router;
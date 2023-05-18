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
const { Like } = require('../../db/models');
const createHtml = require('../../middleware/createHtml');
const Selects = require('../../components/selected/Selects');


router.route('/:type')
.get( async (req, res) => {
    try {
        const { type } = req.params;
        const housings = await Housing.findAll({ where: {type},
            include: [{model: User}, {model: Comment}, {model: Like}, {model: Favorite}]
        }); 
        const html = createHtml(Selects, { housings, user: req.session.user})
        res.json({html, title: `${type}`})

    } catch (err) {
        res.json({message: err.message});
    }
})

module.exports = router;
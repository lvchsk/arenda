const router = require('express').Router();
const HousingAbout = require('../../components/housings/HousingAbout');
const Housings = require('../../components/housings/Housings');
const MyHousings = require('../../components/housings/MyHousings');
const CommentAddBtn = require('../../components/comments/CommentAddBtn');
const CommentItem = require('../../components/comments/CommentItem');
const CommentItemDelMee = require('../../components/comments/CommentItemDelMee');
const FormAddComment = require('../../components/comments/formAddComment');
const FormUpdateComment = require('../../components/comments/FormUpdataComment');
const { Housing } = require('../../db/models');
const { User } = require('../../db/models');
const { Comment } = require('../../db/models');
const createHtml = require('../../middleware/createHtml');


router.route('/add/comment/:housingId')
.post( async (req, res) => {
  const { user } = req.session;
  const {housingId} = req.params;
  const { text } = req.body;
  if(!text){res.json({message: 'напишите что-нибудь!'}); return};
  if(user){
  try {
    const newComment = await Comment.create({
      user_id: Number(user.id),
       text,
        housing_id: Number(housingId),
         user_name: user.name,
         date: new Date().toLocaleDateString()
        });
        const html = createHtml(CommentItemDelMee, {user, comment: newComment});
        const btn = createHtml(CommentAddBtn, {housing: {id: housingId}});
    res.json({message: 'ok', html, btn})
  } catch (err) {
    res.json({message: err.message});
  } 
}
else{
  res.json({message: 'fig-vam'});
}
})

router.route('/get/add/form')
.get((req, res) => {
const html = createHtml(FormAddComment);
res.json({html});
})

router.route('/:id')
.get( async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({where: {id}});
  const html = createHtml(FormUpdateComment, {comment});
  res.json({html});
})
.put( async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  if(!text) {res.json({message: 'length'}); return;}
 try {
  const { user } = req.session;
  if(user) {
  const comment = await Comment.findOne({where: {id}, include: [
    {model: User}
  ]});
  if(user.id === comment.user_id) {
    comment.text = text;
    await comment.save();
    const html = createHtml(CommentItem, {user, comment});
    res.json({message: 'ok', html});
  }
  else{
    res.json({message: 'fig-vam!'});
  } 
  }
  else{
    res.json({message: 'fig-vam!'});
  }
 } catch (err) {
  res.json({message: err.message});
 }
})
.delete( async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;
   
    if(user){
try {
  const comment = await Comment.destroy({where: {id}});
  if(comment){
    res.json({message: 'ok'});
  }
  else{
    res.json({message: 'не получилось!'});
  }
} catch (err) {
   res.json({message: err.message}); 
}
    }
    else{
        res.json({message: 'fig-vam!'});
    }
})

module.exports = router;
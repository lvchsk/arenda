const commentsBox = document.querySelector('.comments-box');
const commentAddBtn = document.querySelector('.comment-add-btn');
const aboutHousing = document.querySelector('.about-housing');

if(aboutHousing){
  aboutHousing.addEventListener('submit', (e) => {
    if(e.target.classList.contains('form-add-comment')){
    e.preventDefault();
    const { text } = e.target;
    const housingId = e.target.closest('.about-housing').dataset.id;
    addFetch(`/comments/add/comment/${housingId}`, 'POST', {text: text.value})
    .then(data => {
      if(data.message === 'ok') {
        const commentBox = document.querySelector('.comments-box');
       commentBox.insertAdjacentHTML('afterbegin', data.html);
       const box = e.target.closest('.del-mee');
       box.firstChild.remove();
       box.insertAdjacentHTML('afterbegin', data.btn);
      }
      else{
        e.target.text.value = data.message
      }
    })
  }
  });

aboutHousing.addEventListener('click', (e) => {
  if(e.target.classList.contains('comment-add-btn')) {
      const id = e.target.dataset.id;
      addFetch('/comments/get/add/form')
      .then(data => {
        const box = e.target.closest('.del-mee');
        box.firstChild.remove();
        box.insertAdjacentHTML('afterbegin', data.html);
      })
    

  }
})

 

}




if(commentsBox) {
    commentsBox.addEventListener('click', (e) => {
     if(e.target.classList.contains('delete-comment')){
       const box = e.target.closest('.del-mee');
       addFetch(`/comments/${box.firstChild.dataset.id}`, 'DELETE')
       .then(data => {
       if(data.message === 'ok'){
        box.remove();
       }
       })
      .catch(err => console.log(err.message))
     };
     if(e.target.classList.contains('update-comment')){

      addFetch(`/comments/${e.target.closest('.comment').dataset.id}`)
      .then(data => {
        const box = e.target.closest('.del-mee');
        box.firstChild.remove();
        box.insertAdjacentHTML('beforeEnd', data.html);
      })
   }
    });

commentsBox.addEventListener('submit', (e) => {
  if(e.target.classList.contains('form-update-comment')) {
  e.preventDefault();
  addFetch(`/comments/${e.target.dataset.id}`, 'PUT', {text: e.target.text.value})
  .then(data => {
    if(data.message === 'ok'){
      const box = e.target.closest('.comment').closest('.del-mee');
      box.firstChild.remove();
      box.insertAdjacentHTML('afterbegin', data.html);
    }
    else if (data.message === 'length') {
          e.target.text.value = 'напишите что-нибудь!';
    }
    else {
      e.target.text.value = data.message;
    }
  })
  }

});
}
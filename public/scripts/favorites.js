if(baseContent){
baseContent.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-favorite')) {
       const { id } = e.target.closest('.housing-box').dataset;
       addFetch(`/favorite`, 'POST', {id})
       .then(data => {
      if(data.message === 'ok') {
        e.target.remove();
      }
       })
    }

if(e.target.classList.contains('favorite-delete')){
    const id = e.target.closest('.favorite').dataset.id;
    addFetch(`/favorite/${id}`, 'DELETE')
    .then(data => {
        if(data.message === 'ok'){
            e.target.closest('.favorite').remove();
        }
        else{
            console.log(data.message)
        }
    })
}

})

}
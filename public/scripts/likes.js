if(baseContent){
    baseContent.addEventListener('click', (e) => {
        if(e.target.classList.contains('add-like')) {
            const id = e.target.closest('.housing-box').dataset.id;
            addFetch(`/likes/${id}`, 'POST', {id})
            .then(data => {
               if(data.message === 'ok') {
             const box = e.target.closest('.like-box');
            // console.log(box.firstChild.lastChild.innerText)
            box.firstChild.lastChild.innerText = +box.firstChild.lastChild.innerText + 1
             e.target.remove();
               }
               else{
                console.log(data.message);
               }
            })
        }
    })
}
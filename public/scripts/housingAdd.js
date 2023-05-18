const formAddHousingBox = document.querySelector('.form-add-housing-box');

if(formAddHousingBox) {
   formAddHousingBox.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-housing')) {
       addFetch('/housings/housing/add/form')
       .then(data => {
        const box = e.target.closest('.del-mee');
        box.firstChild.remove();
        box.insertAdjacentHTML('afterbegin', data.html);
       })
    }
   })

formAddHousingBox.addEventListener('submit', (e) => {
    if(e.target.classList.contains('form-add-housing')) {
        e.preventDefault();
//console.log(e.target.firstChild.lastChild.value)
        const type = e.target.firstChild.lastChild.value;
        const {name, info, image, address} = e.target;
       addFetch('/housings', 'POST', {
        name: name.value,
        info: info.value,
        image: image.value,
        address: address.value,
        type
       })
       .then(data => {
       if(data.message === 'ok'){
        const box = e.target.closest('.del-mee');
       box.firstChild.remove();
       box.insertAdjacentHTML('beforeEnd', data.btn);
       baseContent.insertAdjacentHTML('afterbegin', data.htmlHousing)
       }else {
         e.target.lastChild.innerText = data.message;
       }

       })
       
    }
})

}
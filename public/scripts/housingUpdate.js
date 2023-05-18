const baseContent = document.getElementById('base-content');

if(baseContent) {
    baseContent.addEventListener('click', (e) => {
if(e.target.classList.contains('updateHousing')) {
const div = e.target.closest('.del-mee');
//console.log(div.closest('.housing-box').closest('.del-mee'))
//console.log(div.closest('.housing-box').dataset.id)
addFetch(`/housings/housing/formUpdate/${div.closest('.housing-box').dataset.id}`)
.then(data => {
 div.firstChild.remove();
 div.insertAdjacentHTML('afterbegin', data.message);
})
}
    });

baseContent.addEventListener('submit', (e) => {
    if(e.target.classList.contains('form-housing-update')) {
        e.preventDefault();
        const {name, info, image, address} = e.target;
        const type = e.target.firstChild.lastChild.value;
        const id = e.target.dataset.id;
        addFetch(`/housings/housing/${id}`, 'PUT', {
            name: name.value,
            info: info.value,
            image: image.value,
            address: address.value,
            type
            })
        .then(data => {
            const div = e.target.closest('.del-mee');
            if(data.message === 'ok'){
                const box = div.closest('.housing-box').closest('.del-mee');
                box.firstChild.remove();
                box.insertAdjacentHTML('beforeEnd', data.html);
            }
            else{
                e.target.children[1].innerText = data.message;
            }
        })
        
    }
});

}
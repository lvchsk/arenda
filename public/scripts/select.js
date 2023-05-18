const navBar = document.getElementById('nav-bar');

navBar.addEventListener('change', (e) => {
    if(e.target.classList.contains('select')) {
  
       addFetch(`/select/${e.target.value}`)
       .then(data => {
       const addFormHousingBox = document.querySelector('.form-add-housing-box');
       const title = document.getElementsByTagName('title');
      // const {0: newTitle} = title
      // newTitle.innerText = data.title;
      title[0].innerText = data.title;
       addFormHousingBox && addFormHousingBox.remove();
        while(baseContent.firstChild){baseContent.firstChild.remove()};
        baseContent.insertAdjacentHTML('afterbegin', data.html);
       })
       .catch(err => console.log(err.message))
    }
});
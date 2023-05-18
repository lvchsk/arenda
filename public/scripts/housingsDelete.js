
function addFetch (way, method, body) {
    if(!method || method === 'GET'){
        return fetch(way).then(res => res.json());
    };
    return fetch (way, {
        method,
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    }).then(res => res.json());
}


//const baseContent = document.getElementById('base-content');

if(baseContent) {
    baseContent.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete-housing-btn')) {
            e.preventDefault();
            const box = e.target.closest('.del-mee');
            addFetch(`/housings/housing/${box.firstChild.dataset.id}`, 'DELETE')
            .then(data => {
                if(data.message === 'ok'){
            box.remove();
                }
                else {
                  box.firstChild.lastChild.innerText = data.message;
                }
            })
        }
    })
}
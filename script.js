const Http = new XMLHttpRequest();

function getComicData(id) {
    const url = `https://fwd.innopolis.university/api/comic?id=${id}`;
    fetch(url, {
        method: 'GET',
      }).then(response => {
            if(response.ok){
                return response.json();  
            }
            throw new Error('Request failed!');
      }, networkError => {
            console.log(networkError.message);
      }).then(data => {
            //document.getElementById('comicTitle').innerHTML = data['safe_title'];
            //console.log(data['alt'])
            //console.log(data['img'])
            document.getElementById('comicTitle').innerHTML = data['safe_title'];

            var dateNow = new Date();
            document.getElementById('comicDate').innerHTML = dateNow.toLocaleDateString();

            document.querySelector('#comicImg').src = data['img'];
            document.querySelector('#comicImg').alt = data['alt'];

      })
}

function setupComic() {
    const url='https://fwd.innopolis.university/api/hw2?email=a.shinbaeyeva@innopolis.university';
    fetch(url, {
    method: 'GET',
    }).then(response => {
        if(response.ok){
            return response.text();  
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    }).then(id => {
        console.log(id);
        getComicData(id);
    })
}

setupComic()
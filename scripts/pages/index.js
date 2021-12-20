    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
       fetch('https://raw.githubusercontent.com/NotMGA/Front-End-Fisheye/main/data/photographers.json')    
       .then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            const photographers = data.photographers;
            
            return Promise.resolve(photographers)
            
          }).catch(err => {
            // Do something for an error here
          });
          // var photographers = data.photographers;
          // console.log(photographers);
        // const photographers = [
        //     {
        //         "name": "Ma data test",
        //         "id": 1,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Ceci est ma data test",
        //         "price": 400,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Autre data test",
        //         "id": 2,
        //         "city": "Londres",
        //         "country": "UK",
        //         "tagline": "Ceci est ma data test 2",
        //         "price": 500,
        //         "portrait": "account.png"
        //     },
        // ]
        // const photographersjson = [data.photographers];
        // const photographers = photographersjson[1];
        // console.log(photographers);
        // et bien retourner le tableau photographers seulement une fois
        // return ({
        //     photographers: [...photographers, ...photographers, ...photographers]})

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    
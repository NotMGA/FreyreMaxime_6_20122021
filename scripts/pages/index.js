         async function getPhotographers() {
        let response = await fetch('https://raw.githubusercontent.com/NotMGA/Front-End-Fisheye/main/data/photographers.json') 
        const photographers = await response.json();
        console.log(photographers);
        return photographers; 
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
        // user_information(photographers);
    };
    // export const photographerssss = "test" ;
    
    init();
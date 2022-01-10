// Mettre le code JavaScript lié à la page photographer.html
const photographe_id_url = (new URL(document.location)).searchParams.get('id') ;
info_photographe (photographe_id_url);

// const photographe_url = new URL(document.location);
// const photographe_id_url =photographe_url.searchParams.get('id');
async function getPhotographers() {
    let response = await fetch('https://raw.githubusercontent.com/NotMGA/Front-End-Fisheye/main/data/photographers.json') 
    const photographers = await response.json();
    console.log(photographers);
    return photographers; 
}

 async function info_photographe (id_photographe){
const photographer_data =await getPhotographers();
const photographer_profil =photographer_data.photographers;
const photographer_media =photographer_data.media;
console.log(photographer_data);
function filtermedia (obj){
    if (obj.photographerId == id_photographe ){
        return true ;
    }
    else {
        return false ;
    }
}
const mediat = photographer_media.filter(filtermedia);
console.log(mediat);

for (photographe of photographer_profil){
    if (photographe.id == id_photographe){
        const info_du_photographe = photographer_profil.find( info => info.id == id_photographe);
        document.getElementById("nom_photographe").innerHTML = info_du_photographe.name ;
        document.getElementById("lieux_photographe").innerHTML = info_du_photographe.city +","+info_du_photographe.country ;
        document.getElementById("phrase_photographe").innerHTML = info_du_photographe.tagline ;
        document.getElementById('image_photographe').src ="assets/photographers/Photographers ID Photos/"+ info_du_photographe.portrait;
        document.getElementById("contact").innerHTML ="Contactez-moi <br>"+info_du_photographe.name;
        document.getElementById('prix').innerHTML=info_du_photographe.price +"/jours";
        

        displaymedia(mediat);

        
        const inc = document.querySelectorAll(" article > div >button");
// console.log(inc);
inc.forEach((btn)=>
    btn.addEventListener("click",fonc_inc)

)
function fonc_inc(e){
    
    const target_parent = e.target.parentElement;
    const target_label = target_parent.querySelector('label');
    console.log(target_label);
    // console.log(media_like);
    nb_media_like = parseInt(target_label.textContent)+1;
    target_label.innerHTML = nb_media_like ;
    total_like();
    
};
function total_like (){
    like_total= document.querySelectorAll('article > div > label');
        let likes = 0;
        // console.log(test.length)
        for (let i=0 ; i < like_total.length;i++ ){
            likes = likes + parseInt( like_total[i].textContent);
            document.getElementById('total_like').innerHTML = likes;
            
        }
}
        
        

    }
}
total_like();

}



async function displaymedia(media){
    const mediaSection = document.querySelector(".media_section");
    media.forEach(media_id => {
        const mediaModel = mediafactory(media_id);
        const mediaCardDOM = mediaModel.GetUserMedia();
        mediaSection.appendChild(mediaCardDOM);

    });
}

function select(){
    const btn = document.querySelector('select');
    console.log(btn)
    // btn.forEach((cur_option)=>
    btn.addEventListener("change",trie)
    // )
    function trie(e){
console.log(e);
    } 
}
select();




window.onload = () =>{
    const lightbox = document.querySelector(".lightbox");
    const fermer = document.querySelector(".lightbox_fermer");
    const lien_media =document.querySelectorAll("article a");
    const suivant = document.querySelector(".lightbox_suivant")
    const prec = document.querySelector(".lightbox_precedent")
    const param = new URLSearchParams(document.location.search);
    const id_photographe = param.get("id");
    // console.log(lien_media);

    for (let media of lien_media){
        media.addEventListener("click", function(e){
            e.preventDefault();
            const image = lightbox.querySelector(".lightbox_media img");
            image.src =this.href;
            lightbox.classList.add("show");
        });
    }
    fermer.addEventListener("click",function(){
        lightbox.classList.remove("show");
    });

    suivant.addEventListener("click",function(){
        
        const image = lightbox.querySelector(".lightbox_media img");
        const image_actuel = image.src.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
        
        
        // console.log( image.src.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/",""))
        for (let i =0 ;i< lien_media.length; i++ ){
            const image_reduit = lien_media[i].href.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
            // console.log (image_reduit)
            // console.log (image_actuel)
            if (image_reduit == image_actuel ){
                i++;
                // const photo_suivante = lien_media[i].href.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
                // console.log(photo_suivante)
                image.src = lien_media[i].href ;
            }
        }
        // let i  = lien_media.findIndex(image => image === this.url)
        // const image = lightbox.querySelector(".lightbox_media img");
        // image.src =this.href;

    })
    prec.addEventListener("click",function(){
        
        const image = lightbox.querySelector(".lightbox_media img");
        const image_actuel = image.src.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
        
        
        // console.log( image.src.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/",""))
        for (let i =0 ;i< lien_media.length; i++ ){
            const image_reduit = lien_media[i].href.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
            // console.log (image_reduit)
            // console.log (image_actuel)
            if (image_reduit == image_actuel ){
                i++;
                // const photo_suivante = lien_media[i].href.replace("http://127.0.0.1:5500/assets/photographers/"+id_photographe+"/","");
                // console.log(photo_suivante)
                // console.log(lien_media[i].href);
                image.src = lien_media[i-2].href ;
            }
        }
        // let i  = lien_media.findIndex(image => image === this.url)
        // const image = lightbox.querySelector(".lightbox_media img");
        // image.src =this.href;

    })
}




// array.sort(function(a,b){
//     return new Date(b.date) - new Date(a.date);
//   });
  
// window.onload = () =>{
    // window.onload = lighbox_t ;
    function lighbox_t(){
    const lightbox = document.querySelector(".lightbox");
    const fermer = document.querySelector("#lightbox_fermer");
    const lien_media =document.querySelectorAll("article a");
    const suivant = document.querySelector(".lightbox_suivant")
    const prec = document.querySelector(".lightbox_precedent")
    const param = new URLSearchParams(document.location.search);
    const video = lightbox.querySelector(".lightbox_media video");
    const image = lightbox.querySelector(".lightbox_media img");
    // const titre_medias =document.querySelectorAll("h3"); 
    const txt_lightbox = document.querySelector(".lightbox_txt")
    const id_photographe = param.get("id");
    console.log("fin load");
    

    for (let media of lien_media){
        media.addEventListener("click", function(e){
            e.preventDefault();
           let video_image = this.href;
           
            if( video_image.includes(".mp4") == true){
                
                video.src =this.href;
                lightbox.classList.add("show");
                document.getElementById("lightbox_fermer").focus();
                video.style.display="initial";
                image.style.display ="none";
                document.querySelector(".lightbox_suivant").style.display ="initial";
                document.querySelector(".lightbox_precedent").style.display ="initial";
                let txt_lightbox_video = this.href;
                txt_lightbox_video = txt_lightbox_video.replace('.mp4','');
                txt_lightbox_video = txt_lightbox_video.replace("https://notmga.github.io/FreyreMaxime_6_20122021/assets/photographers/"+id_photographe+"/","");
                txt_lightbox_video = txt_lightbox_video.replaceAll('_',' ');
                txt_lightbox.innerHTML = txt_lightbox_video;
               
                
            }
            else{
                
                image.src =this.href;
                lightbox.classList.add("show");
                document.getElementById("lightbox_fermer").focus();
                image.style.display="initial";
                video.style.display ="none";
                document.querySelector(".lightbox_suivant").style.display ="initial";
                document.querySelector(".lightbox_precedent").style.display ="initial";
                let txt_media = this.querySelector("img").alt;
                txt_lightbox.innerHTML =txt_media;
            }
           
            
            
           
            
            
            
            
        });
    }
    fermer.addEventListener("click",function(){
        lightbox.classList.remove("show");
        
    });

    suivant.addEventListener("click",media_suivant)
        function media_suivant(){

        const lien_media =document.querySelectorAll("article a");
        const video = lightbox.querySelector(".lightbox_media video");
        const image = lightbox.querySelector(".lightbox_media img");
        // const txt = lightbox.querySelectorAll(".lightbox_media img").alt;
        const image_actuel = image.src.replace("../assets/photographers/"+id_photographe+"/","");
        document.getElementById("lightbox_fermer").focus();
        
        
        for (let i =0 ;i< lien_media.length; i++ ){
            const image_reduit = lien_media[i].href.replace("../assets/photographers/"+id_photographe+"/","");
            


            if (image_reduit == image_actuel ){
                i++;
                const video_image = lien_media[i].href;
                
                if( video_image.includes(".mp4") == true){
                
                    video.src =lien_media[i].href;
                    video.style.display="initial";
                    image.style.display ="none";
                    image.src =lien_media[i].href;
                    let txt_lightbox_video = lien_media[i].querySelector("source").src ;
                    txt_lightbox_video = txt_lightbox_video.replace('.mp4','');
                    txt_lightbox_video = txt_lightbox_video.replace("https://notmga.github.io/FreyreMaxime_6_20122021/assets/photographers/"+id_photographe+"/","");
                    txt_lightbox_video = txt_lightbox_video.replaceAll('_',' ');
                    txt_lightbox.innerHTML = txt_lightbox_video;
                   
                    
                }
                else{
                    txt_lightbox.innerHTML =lien_media[i].querySelector("img").alt;
                    image.src =lien_media[i].href;
                    image.style.display="initial";
                    video.style.display ="none";
                }
                if (i==lien_media.length -1)
                {
                    document.querySelector(".lightbox_suivant").style.display ="none";
                }
                else
                {
                    document.querySelector(".lightbox_suivant").style.display ="initial";
                    document.querySelector(".lightbox_precedent").style.display ="initial";
                }


            }
        }


    }
    prec.addEventListener("click",media_prec);
        function media_prec(){
            const lien_media =document.querySelectorAll("article a");
        const image = lightbox.querySelector(".lightbox_media img");
        const video = lightbox.querySelector(".lightbox_media video");
        const image_actuel = image.src.replace("../assets/photographers/"+id_photographe+"/","");
        
        
        for (let i =0 ;i< lien_media.length; i++ ){
            const image_reduit = lien_media[i].href.replace("../assets/photographers/"+id_photographe+"/","");

            if (image_reduit == image_actuel ){
                i-1;
                const video_image = lien_media[i-1].href;
                document.getElementById("lightbox_fermer").focus();
                if( video_image.includes(".mp4") == true){
                
                    video.src =lien_media[i-1].href;
                    video.style.display="initial";
                    image.style.display ="none";
                    image.src =lien_media[i-1].href;
                    let txt_lightbox_video = lien_media[i-1].querySelector("source").src ;
                    txt_lightbox_video = txt_lightbox_video.replace('.mp4','');
                    txt_lightbox_video = txt_lightbox_video.replace("https://notmga.github.io/FreyreMaxime_6_20122021/assets/photographers/"+id_photographe+"/","");
                    txt_lightbox_video = txt_lightbox_video.replaceAll('_',' ');
                    txt_lightbox.innerHTML = txt_lightbox_video;

                   
                    
                }
                else{
                    
                    image.src =lien_media[i-1].href;
                    image.style.display="initial";
                    video.style.display ="none";
                    txt_lightbox.innerHTML =lien_media[i-1].querySelector("img").alt;
                }
                if (i==1)
                {
                    document.querySelector(".lightbox_precedent").style.display ="none";
                }
                else
                {
                    document.querySelector(".lightbox_suivant").style.display ="initial";
                    document.querySelector(".lightbox_precedent").style.display ="initial";
                }

            }
        }


    }
    window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) {
          return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
        }
      
        switch (event.key) {
          case "ArrowLeft":
              media_prec();
            // Faire quelque chose pour la touche "left arrow" pressée.
            break;
          case "ArrowRight":
              media_suivant();
            // Faire quelque chose pour la touche "right arrow" pressée.
            break;
          case "Escape":
            lightbox.classList.remove("show");
            // Faire quelque chose pour la touche "esc" pressée.
            break;
          default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
      
        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault();
      }, true);
    }





// array.sort(function(a,b){
//     return new Date(b.date) - new Date(a.date);
//   });
  
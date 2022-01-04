function mediafactory (data){
    const {image , photographerId , video , title} = data ;
    const picture = `assets/photographers/${photographerId}/${image}`;
    const movie = `assets/photographers/${photographerId}/${video}`;
    function GetUserMedia (){
        const article = document.createElement( 'article' );
        if (image == undefined)
        {
            const video = document.createElement ('video') ;
            const source = document.createElement('source');
            const a = document.createElement('a');
            a.href = "";

            video.setAttribute("controls","true");
            source.setAttribute("src",movie);
            source.setAttribute("type","video/mp4");
            a.appendChild(video)
            video.appendChild(source);
            article.appendChild(a);
            
        }
        else 
        {
            const img = document.createElement( 'img' ) ;
            const a = document.createElement('a');
            a.href = picture;
            img.setAttribute("src", picture)
            a.appendChild(img)
            article.appendChild(a);
        }
        const h3 = document.createElement('h3');
        h3.textContent = title ;
        article.appendChild(h3);

        return article;
    }
    return {GetUserMedia} ;
}
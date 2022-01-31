function mediafactory (data){
    // recuperation des informations 
    const {image , photographerId , video , title ,likes} = data ;
    // lien src images / videos
    const picture = `assets/photographers/${photographerId}/${image}`;
    const movie = `assets/photographers/${photographerId}/${video}`;
    function GetUserMedia (){
        const article = document.createElement( 'article' );
        // si c'est une video 
        if (image == undefined)
        {
            const video = document.createElement ('video') ;
            const source = document.createElement('source');
            const a = document.createElement('a');
            a.setAttribute("aria-label",title);
            a.href = movie;

            video.setAttribute("controls","true");
            source.setAttribute("src",movie);
            source.setAttribute("type","video/mp4");
            
            a.appendChild(video)
            video.appendChild(source);
            article.appendChild(a);
            
        }
        // si c'est une image 
        else 
        {
            const img = document.createElement( 'img' ) ;
            const a = document.createElement('a');
            a.setAttribute("aria-label",title);
            a.href = picture;
            img.setAttribute("src", picture);
            img.setAttribute("alt",title);
            a.appendChild(img);
            article.appendChild(a);
        }
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const button = document.createElement('button');
        button.setAttribute("aria-label",likes+"like");
        const like = document.createElement ('label');
        button.classList.add('like');
        like.textContent = likes ;
        h3.textContent = title ;
        article.appendChild(div);
        div.appendChild(h3);
        div.appendChild(like);
        div.appendChild(button);

    
        return article;
    }
    return {GetUserMedia} ;
}
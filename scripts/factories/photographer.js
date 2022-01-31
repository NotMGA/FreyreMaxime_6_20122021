function photographerFactory(data) {
    // recuperation des inforamtions
    const { name, portrait , city , country , tagline , price ,id } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const idphotographe = id;
        const a = document.createElement('a');
        a.setAttribute("aria-label",name +country + tagline + price );
        a.href = "/Front-End-Fisheye/photographer.html?id="+ idphotographe; 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const text = document.createElement( 'text' );
        text.textContent = city+","+country ;
        const text_tagline = document.createElement ('tagline');
        text_tagline.textContent = tagline;
        const prix = document.createElement ('prix');
        prix.textContent = price+ "/Jours";
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(text);
        article.appendChild(text_tagline); 
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, city , getUserCardDOM }
}
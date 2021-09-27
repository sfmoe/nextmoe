const fetchImages = (hero)=>{
    if(typeof hero == "undefined") { return false; }
    const url="/assets/portfolio/homepage/homepage.json";
    fetch(url).then(response=>response.json()).then(data=>{
        loadImages(data, hero);
        rotateImages(data, hero);
    });
};

const loadImages = (data, hero)=>{
    hero = document.querySelector(hero);
    console.log(hero)

    let images = data.images;
        images = images.filter(item=>{
            if(window.matchMedia("(max-width: 480px)").matches){
                if(item.orientation =="portrait"){
                    return item;
                }  
            }else{
                if(item.orientation =="landscape"){
                    return item;
                } 
            }

        });
   
    let location = data.location;
    let random = Math.floor(Math.random() * images.length);
    let randomImage = images[random];
    
    // creating a clone of the hero element and loading it behind the original
    // with a z-index of -2 and then deleting the original hero after a 3 second timeout
    // doing this to avoid the "blinking" when the images is loading.

    let clonehero = hero.cloneNode(true);
    
    //don't use clone if this is the first time
    if(hero.style.backgroundImage == ""){
        hero.style.backgroundImage = `url(${location}${randomImage.file})`;
    }else{
        clonehero.style.backgroundImage = `url(${location}${randomImage.file})`;
        clonehero.style.zIndex = "-2"
        document.querySelector(".home-hero-container").insertBefore(clonehero, hero);
        setTimeout(()=>{ hero.remove(); clonehero.style.zIndex = "-1" }, 3000)
    }
    
    
  
};

const rotateImages = (data, hero)=>{
    setInterval(()=>loadImages(data, hero), 15000);
}

window.addEventListener("load", (e)=>{
    console.log(e)
    fetchImages(".home-hero");
});
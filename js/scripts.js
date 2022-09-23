///////////////////////slider/////////////////////////////
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



////////////////////navigation////////////////////////////////////

{
const nav = ["home", "about", "gallery", "contact", "register"];
const navlinks = ["index.html", "about.html", "gallery.html", "contact.html", "register.html"];
let navsigrdze = nav.length;


let navtext = '<ul>';
for(let i=0; i<navsigrdze; i++){
    navtext += '<li><a href="' + navlinks[i] + '">' + nav[i] + "</a></li>";
    console.log(navtext);
}

navtext += "</ul>";
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;

}

/////////////////////////////chatbox///////////////////////////////////////

let show = () => {
    document.getElementById("messagebox").style.display = "block";
    document.getElementById("messagebutton").style.display = "none";
}

let hide = () => {
    document.getElementById("messagebox").style.display = "none";
    document.getElementById("messagebutton").style.display = "block";
}





// 🌸 A Beautiful Beginning - Main JavaScript


// Typing animation

const nameText = "Prudence Rehema";
let letter = 0;

function typeName(){

    const nameElement = document.getElementById("name");

    if(nameElement && letter < nameText.length){

        nameElement.innerHTML += nameText.charAt(letter);

        letter++;

        setTimeout(typeName,120);

    }

}



// 🌸 Start effects when page loads

window.addEventListener("load",()=>{

    typeName();

    createParticles();

    showQuote();

});





// 🌸 Enter My World button

function enterWorld(){

    const music = document.getElementById("siteMusic");


    if(music){

        music.volume = 0.4;

        music.play().catch(()=>{});

    }



    const welcome = document.querySelector(".welcome");


    if(welcome){

        welcome.style.transition="1s";

        welcome.style.opacity="0";

        welcome.style.transform="scale(0.9)";

    }



    setTimeout(()=>{

        window.location.href="about.html";

    },1000);


}







// ✨ Floating hearts, flowers and sparkles

function createParticles(){


    const container=document.querySelector(".particles");


    if(!container) return;



    const symbols=[

        "❤️",
        "✨",
        "🌸",
        "🦋",
        "⭐",
        "💗",
        "🌷"

    ];



    setInterval(()=>{


        const particle=document.createElement("span");


        particle.innerHTML =
        symbols[Math.floor(Math.random()*symbols.length)];



        particle.style.left =
        Math.random()*100+"%";



        particle.style.fontSize =
        (15 + Math.random()*25)+"px";



        particle.style.animationDuration =
        (5 + Math.random()*7)+"s";



        container.appendChild(particle);



        setTimeout(()=>{

            particle.remove();

        },12000);



    },500);


}







// 🌈 Random daily reminder


function showQuote(){


const quoteBox=document.getElementById("quote");


if(!quoteBox) return;



const quotes=[


"✨ You are capable of amazing things.",


"🌸 Your dreams are worth chasing.",


"💖 Keep becoming the best version of yourself.",


"🌱 Small steps create beautiful journeys.",


"⭐ Believe in your future.",


"🦋 Growth takes time, but you are blooming.",


"🌈 Your story is only beginning."


];



const randomQuote =
quotes[Math.floor(Math.random()*quotes.length)];



quoteBox.innerHTML=randomQuote;


}







// 🎵 Music control helper


function playMusic(){


const music=document.getElementById("backgroundMusic");


if(music){

music.play();

}


}





// 🌙 Smooth page transition


const links=document.querySelectorAll("a");


links.forEach(link=>{


link.addEventListener("click",(event)=>{


const destination=link.href;


if(destination.includes(".html")){


event.preventDefault();



document.body.style.opacity="0";


setTimeout(()=>{


window.location.href=destination;



},500);



}



});


});







// 🎉 Goal completion effect


function celebrate(){


const celebration=[

"🎉",
"✨",
"💖",
"🌸",
"⭐"

];


for(let i=0;i<30;i++){


let item=document.createElement("span");


item.innerHTML=
celebration[Math.floor(Math.random()*celebration.length)];



item.style.position="fixed";

item.style.left=Math.random()*100+"vw";

item.style.top="50vh";

item.style.fontSize="25px";

item.style.animation="float 2s";



document.body.appendChild(item);



setTimeout(()=>{

item.remove();

},2000);



}



}
function openSecret(){

    const correctPassword = "Forever"; 
    // Change this to your own password

    const enteredPassword = document.getElementById("password").value;

    const secret = document.getElementById("secretContent");
    const lock = document.getElementById("lock");
    const message = document.getElementById("message");


    if(enteredPassword === correctPassword){

        lock.style.display="none";
        secret.style.display="block";

    }

    else{

        message.innerHTML="❌ Wrong password. Try again.";

    }

}

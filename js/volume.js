let stuff = document.getElementById("audio");

function volHalf(){
    stuff.volume = 0.5;
    console.log("vol set to 0.5");
}

function getVolume(){
    alert(stuff.volume);
    alert(stuff.src);
}

function fallenLeaves(){
    stuff.src="https://files.catbox.moe/6udkye.mp3";
    stuff.autoplay=true;
}

function redFlag(){
    stuff.src="https://files.catbox.moe/6attm8.mp3";
    stuff.autoplay=true;
}


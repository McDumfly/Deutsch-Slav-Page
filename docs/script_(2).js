var m01 = new Audio('music/01.mp3');
var m02 = new Audio('music/02.mp3');
var m03 = new Audio('music/03.mp3');
var m04 = new Audio('music/04.mp3');
var m05 = new Audio('music/05.mp3');
var m06 = new Audio('music/06.mp3');
var m07 = new Audio('music/07.mp3');
var m08 = new Audio('music/08.mp3');
var m09 = new Audio('music/09.mp3');
var m10 = new Audio('music/10.mp3');
var m11 = new Audio('music/11.mp3');

var musics = new Array("m01","m02","m03","m04","m05","m06","m07","m08","m09","m10","m11");

var randomMusicNum;

randomMusicNum = Math.floor(Math.random() * musics.length);

var musicName;

var musicDisplayName;

if (randomMusicNum === 0) {
    musicName = m01;
} else if (randomMusicNum === 1) {
    musicName = m02;
} else if (randomMusicNum === 2) {
    musicName = m03;
} else if (randomMusicNum === 3) {
    musicName = m04;
} else if (randomMusicNum === 4) {
    musicName = m05;
} else if (randomMusicNum === 5) {
    musicName = m06;
} else if (randomMusicNum === 6) {
    musicName = m07;
} else if (randomMusicNum === 7) {
    musicName = m08;
} else if (randomMusicNum === 8) {
    musicName = m09;
} else if (randomMusicNum === 9) {
    musicName = m10;
} else if (randomMusicNum === 10) {
    musicName = m11;
} 


function SetVolume(val) {
    musicName.volume = val / 100;
}

function playMusic() {
    musicName.play();
}

function pauseMusic() {
    musicName.pause();
}

function setMusicTo(searchMusicName) {
    if (searchMusicName === "Life of Boris - Generation Hardbass") {
        musicName = m01;
        playMusic();
    } else if (searchMusicName === "DJ Blyatman - Babushka") {
        musicName = m02;
        playMusic();
    } else if (searchMusicName === "DJ Blyatman - Gopnik") {
        musicName = m03;
        playMusic();
    } else if (searchMusicName === "Life of Boris - No ruski pop") {
        musicName = m04;
        playMusic();
    } else if (searchMusicName === "Life of Boris - Slav king") {
        musicName = m05;
        playMusic();
    } else if (searchMusicName === "DJ Blyatman - Vice city") {
        musicName = m06;
        playMusic();
    } else if (searchMusicName === "DJ Blyatman - Kalashnikov") {
        musicName = m07;
        playMusic();
    } else if (searchMusicName === "DJ Blyatman - Kamaz") {
        musicName = m08;
        playMusic();
    } else if (searchMusicName === "Life of Boris - Lada") {
        musicName = m09;
        playMusic();
    } else if (searchMusicName === "Life of Boris - Parking lot") {
        musicName = m10;
        playMusic();
    } else if (searchMusicName === "Life of Boris - Red roubles") {
        musicName = m11;
        playMusic();
    } 
}

function gotoMenu() {
    var addHtml = `
    <h2>Please choose the theme!</h2>
    <button onclick="alert('YOU ARE USING IT NOW, DEBIL!')">Slav theme</button>
    <button onclick="alert('YOU ARE USING IT NOW, DEBIL!')">Slav theme</button>
    <button onclick="alert('YOU ARE USING IT NOW, DEBIL!')">Slav theme</button>
    <br><br>
    <button onclick="window.close()">Back</button>
    `;
    document.getElementById("starter").innerHTML = addHtml;
}

function playm01() {
    musicName = m01;
    document.getElementById("musicSearch").value = "Life Of Boris - Generation Hardbass";
    musicName.play();
}
function playm02() {
    musicName = m02;
    document.getElementById("musicSearch").value = "DJ Blyatman - Babushka";
    musicName.play();
}
function playm03() {
    musicName = m03;
    document.getElementById("musicSearch").value = "DJ Blyatman - Gopnik";
    musicName.play();
}
function playm04() {
    musicName = m04;
    document.getElementById("musicSearch").value = "Life Of Boris - No Ruski Pop";
    musicName.play();
}
function playm05() {
    musicName = m05;
    document.getElementById("musicSearch").value = "Life Of Boris - Slav King";
    musicName.play();
}
function playm06() {
    musicName = m06;
    document.getElementById("musicSearch").value = "DJ Blyatman - Vice City";
    musicName.play();
}
function playm07() {
    musicName = m07;
    document.getElementById("musicSearch").value = "DJ Blyatman - Kalashnikov";
    musicName.play();
}
function playm08() {
    musicName = m08;
    document.getElementById("musicSearch").value = "DJ Blyatman - Kamaz";
    musicName.play();
}
function playm09() {
    musicName = m09;
    document.getElementById("musicSearch").value = "Life Of Boris - Lada";
    musicName.play();
}
function playm10() {
    musicName = m10;
    document.getElementById("musicSearch").value = "Life Of Boris - Parking lot";
    musicName.play();
}
function playm11() {
    musicName = m11;
    document.getElementById("musicSearch").value = "Life Of Boris - Red Roubles";
    musicName.play();
}



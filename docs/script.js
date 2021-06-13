let isMinimizedSelected = false;

function startchaos() {
    let bg = document.getElementById("bg").innerHTML
    const chaos = document.write("Du bist blöd");
    while (true) {
        bg == chaos;
    }
}

function startNummerSpiele() {
    function guess(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let number = guess(1, 100);
    
    let guessedNumber = prompt("1-100! Was number?");
    
    let end = true;
    let guessing = 0;
    
    
    while (end) {
        if (guessing > 10) {
            alert("Spiele ende! Blöd! Du bist keine blinmacher!!!")
            end = false;
        } else {
            if (number == guessedNumber) {
                alert("Super! Gehe zu blinmacher!!!");
                guessing = guessing + 1;
                alert("Weil " + guessing + " !")
                end = false;
            } else if (guessedNumber < number) {
                alert("Klein!");
                guessing = guessing + 1;
                guessedNumber = prompt("Nein!");
            } else if (guessedNumber > number) {
                alert("Groß!");
                guessing = guessing + 1;
                guessedNumber = prompt("Nein!");
            } else if (guessedNumber == "ULTIMATE_GOPNIK_CHEAT!!!") {
                document.title = "CHEATER!!! - " + number;
                // console.log(number);
                guessedNumber = prompt("Nein!");
                guessing = guessing + 1;
            } else if (guessedNumber == "exit") {
                end = false;
            } else {
                guessedNumber = prompt("Nein (Blöd)!");
                guessing = guessing + 1;
            }
        }
    }
}

function testTerminal() {
    const terminal = document.getElementById("terminal").value;
    if (terminal === "steht.text") {
        const newTitleName = prompt("Was ist das?")
        document.title = newTitleName;
    } else if (terminal === "bitte.kodeliste") {
        const codelist = `
            bitte-
                -kodeliste = Bitte kodeliste
                
            start-
                -spielen = Start spielen
                -blöd = Start blöd`;
        alert(codelist);
    } else if (terminal === "Ich bin das Admin") {
        const username = prompt("Schlecht kode!");
        if (username === "McDumfly") {
            const adminCodelist = `
            steht-
                -text = Neu text.
                
            bitte-
                -kodeliste = Bitte kodeliste
                
            start-
                -spielen = Start spielen
                -blöd = Start blöd`;
        alert(adminCodelist);
        } else {
            alert("Schlecht kode!")
        }
    } else if (terminal === "start.spielen") {
        const gameNumber = prompt("Welche nummer? (0-)");
        if (gameNumber === "0") {
            startNummerSpiele();
        } else if (gameNumber === "1") {
            slavpage();
        } else {
            alert("Schlecht kode!");
        }
    } else if (terminal === "start.blöd") {
        const stupidNumber = prompt("Welche nummer? (0-)");
        if (stupidNumber === "0") {
            startchaos();
        } else {
            alert("Schlecht kode!");
        }
    } else {
        alert("Schlecht kode!");
    }

    /*
    switch (terminal) {
        case terminal === "steht.text":
            const newTitleName = prompt("Was ist das?")
            document.title = newTitleName;
            break;
        case terminal === "bitte.kodeliste":
            const codelist = `
            bitte-
                -kodeliste = Bitte kodeliste
                
            start-
                -spielen = Start spielen
                -blöd = Start blöd`
            alert(codelist)
            break;
        case terminal === "start.spielen":
            const gameNumber = prompt("Welche nummer? (0-)")
            if (gameNumber === "0") {
                startNummerSpiele()
            } else {
                alert("Schlecht kode!")
            }
            break;
        case terminal === "start.blöd":
            const stupidNumber = prompt("Welche nummer? (0-)")
            if (stupidNumber === "0") {
                startchaos()
            } else {
                alert("Schlecht kode!")
            }
            break;
        default:
            alert("Schlecht kode!");
            break;
    }
    */
}

function setSelected() {
    isMinimizedSelected = ! isMinimizedSelected
}

function slavpage() {
    if (isMinimizedSelected === true) {
        let slavPage = window.open("Slav Page", "Slav Page", "width=634, height=742");
        const spHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Slav Page</title>
            <script src="script_(2).js"></script>
            <script src="function.ts"></script>
            <link rel="stylesheet" href="style_(2).css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="stylePlus.scss">
            <link rel="shortcut icon" href="slavPageLogo.ico" type="image/x-icon">
        </head>
        <body class="slavicBackground" id="starter">
            <div class="menu" id="menu" onclick="gotoMenu()"></div>
            <div class="menu" id="menu" onclick="gotoMenu()"></div>
            <div class="menu" id="menu" onclick="gotoMenu()"></div>
            <h1>Welcome, the slav page, blin!</h1>
            <hr>
            <br>
            <br>
            <h2>NOT Blinmaker!</h2>
            <br>
            <p>Is Ultimate Slav Hardbass Player!!!</p>
            <br>
            <!-- <div class="musicPlayerBox" id="displayMusicName">Hardbass</div> -->
            <input class="musicSearch" id="musicSearch" type="search" onchange="setMusicTo(this.value)">
            <br>
            <button onclick="playMusic()">Play</button>
            <button onclick="pauseMusic()">Pause</button>
            <!-- <button onclick="musicRoot()">Play more</button> -->
            <input id="vol-control" type="range" min="0" max="100" step="1" oninput="SetVolume(this.value)" onchange="SetVolume(this.value)"></input>
            <br>
            <br>
            <h2>The list of the Hardbass musics:</h2>
            <br>
            <ul class="musicList">
                <li onclick="playm01()">Life of Boris - Generation Hardbass</li>
                <li onclick="playm02()">DJ Blyatman - Babushka</li>
                <li onclick="playm03()">DJ Blyatman - Gopnik</li>
                <li onclick="playm04()">Life of Boris - No ruski pop</li>
                <li onclick="playm05()">Life of Boris - Slav king</li>
                <li onclick="playm06()">DJ Blyatman - Vice city</li>
                <li onclick="playm07()">DJ Blyatman - Kalashnikov</li>
                <li onclick="playm08()">DJ Blyatman - Kamaz</li>
                <li onclick="playm09()">Life of Boris - Lada</li>
                <li onclick="playm10()">Life of Boris - Parking lot</li>
                <li onclick="playm11()">Life of Boris - Red roubles</li>
            </ul>
            <br>
            <button onclick="window.close()">Exit</button>
        </body>
        </html>
        `;
        slavPage.document.write(spHTML);
    } else if (isMinimizedSelected === false) {
        window.location.href = "index_(2).html";
    }
    
}
let themeSwitch = document.getElementById("theme");
let switchIcon = document.getElementById("switch");

let darkMode = false;

function enterSwitch() {
    if (!darkMode) {
        themeSwitch.innerHTML = "Change to Dark Mode";
        switchIcon.innerHTML = "🌙";
    } else {
        themeSwitch.innerHTML = "Change to Light Mode";
        switchIcon.innerHTML = "☀️";
    }
}

function exitSwitch() {
    if (!darkMode) {
        themeSwitch.innerHTML = "It's Light Mode";
        switchIcon.innerHTML = "☀️";
    } else {
        themeSwitch.innerHTML = "It's Dark Mode";
        switchIcon.innerHTML = "🌙";
    }
}

function applySwitch() {
    darkMode = !darkMode;

    let body = document.body;
    let jumbotron = document.getElementById("home");
    let navbar = document.getElementsByTagName("nav")[0];
    let footer = document.getElementsByTagName("footer")[0];
    let anchors = document.getElementsByTagName("a");
    let cards = document.getElementsByClassName("card");

    if (darkMode) {
        body.style.backgroundColor = "#18191A";
        body.style.color = "white";

        jumbotron.style.backgroundColor = "#242526";
        navbar.style.backgroundColor = "#121212";

        footer.style.backgroundColor = "#242526";
        footer.style.color = "white";

        for (let i = 0; i < anchors.length; i++) {
            anchors[i].style.color = "white";
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.boxShadow =
                "0 4px 8px rgba(255,255,255,0.2)";
        }

        themeSwitch.innerHTML = "It's Dark Mode";
        switchIcon.innerHTML = "🌙";

    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        jumbotron.style.backgroundColor = "#44b45e";
        navbar.style.backgroundColor = "#358e49";

        footer.style.backgroundColor = "#44b45e";
        footer.style.color = "black";

        for (let i = 0; i < anchors.length; i++) {
            anchors[i].style.color = "black";
        }

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.boxShadow =
                "0 4px 8px rgba(0,0,0,0.2)";
        }

        themeSwitch.innerHTML = "It's Light Mode";
        switchIcon.innerHTML = "☀️";
    }
}
var x = 0;
const intervalID = setInterval(refreshclock, 10);
let s = 0;
//const dateObjectName = new Date([parameters]);
let fullscreen_toggle = false;
const root = document.documentElement;
let fontsize = localStorage.getItem("fontsize");
if (fontsize == null) {
    fontsize = 25;
}
let color = localStorage.getItem("color");
if (color == null) {
    color = 0;
}

    document.getElementById("setting,1").value = fontsize;
    document.getElementById("setting,2").value = color;

    apply_settings();
//let fontsize = document.getElementById("setting,1").value;

/*document.getElementById("setting,2").addEventListener("input", changefontsize);

const slider = document.getElementById("setting,2");

slider.addEventListener("input", () => {
    changefontsize();
});
*/

function apply_settings() {
    //alert("ha");
    let fontsize = document.getElementById("setting,1").value;
    document.getElementById("time").style.fontSize = fontsize + "vh";

    let fontsize2 = fontsize / 4;
    document.getElementById("date").style.fontSize = fontsize2 + "vh";
    localStorage.setItem("fontsize", fontsize);
    //alert("ha");
    let color = document.getElementById("setting,2").value;
    root.style.setProperty("--md-sys-color-primary", "hsl(" + document.getElementById("setting,2").value + ", 34.43%, 47.84%)");
    root.style.setProperty("--md-sys-color-surface", "hsl(" + document.getElementById("setting,2").value + ", 100%, 98.43%)");
    localStorage.setItem("color", document.getElementById("setting,2").value);
}

function fullscreen() {

    //alert("ha")
    //let  a = dateObjectName
    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
        fullscreen_button.innerHTML = "fullscreen_exit"
        document.getElementById("tabs").style.display = "none";
    } else {
        document.exitFullscreen();
        fullscreen_button.innerHTML = "fullscreen"
        document.getElementById("tabs").style.display = null;
    }
}

function refreshclock() {
    let now = new Date();
    let HH = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    mm = String(mm);
    ss = String(ss);
    //ms = String(ms);
    mm = mm.padStart(2, "0");
    ss = ss.padStart(2, "0");
    let activetab = document.getElementById("tabs").activeindex;
    time.innerHTML = HH + ":" + mm + ":" + ss;
    //time.innerHTML = activetab;
    date.innerHTML = now.toLocaleDateString('ja-JP');

    if (document.fullscreenElement) {

        fullscreen_button.innerHTML = "fullscreen_exit"
        document.getElementById("tabs").style.display = "none";
    } else {
        fullscreen_button.innerHTML = "fullscreen"
        document.getElementById("tabs").style.display = null;
    }
}

/*function aa(color) {
    colorElemnt.style.setProperty("--md-sys-color-surface", color);
}*/

function home_tab() {
    hideAll();
    document.getElementById("home").style.display = null;
}

function stopwatch_tab() {
    hideAll();
    document.getElementById("stopwatch").style.display = null;
}

function settings_tab() {
    hideAll();
    document.getElementById("settings").style.display = null;
}

function hideAll() {
    document.getElementById("home").style.display = "none";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("settings").style.display = "none";
}

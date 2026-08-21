var x = 0;
const intervalID = setInterval(refreshclock, 1000);
let s = 0;
let start_time;
let stopwatch_intervalID;
let stopwatch_time_ms;
let stopwatch_time_ss;
let stopwatch_time_raw = 0;
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
        fullscreen_button.textContent = "fullscreen_exit"
        document.getElementById("tabs").style.display = "none";
    } else {
        document.exitFullscreen();
        fullscreen_button.textContent = "fullscreen"
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
    document.getElementById("time").textContent = HH + ":" + mm + ":" + ss;
    //time.textContent = activetab;
    document.getElementById("date").textContent = now.toLocaleDateString('ja-JP');

    if (document.fullscreenElement) {

        fullscreen_button.textContent = "fullscreen_exit"
        document.getElementById("tabs").style.display = "none";
    } else {
        fullscreen_button.textContent = "fullscreen"
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

function start_stop_stopwatch() {
    if (stopwatch_intervalID) {
        stop_stopwatch();
    } else {
        start_stopwatch();
    }
}

function start_stopwatch() {
    let now = new Date();
    start_time = now - stopwatch_time_raw;
    stopwatch_intervalID = setInterval(refresh_stopwatch, 10);
    document.getElementById("play-button-text").textContent = "一時停止";
    document.getElementById("play-button").textContent = "pause";
}

function stop_stopwatch() {
    clearInterval(stopwatch_intervalID);
    stopwatch_intervalID = null;
    document.getElementById("play-button-text").textContent = "再開";
    document.getElementById("play-button").textContent = "play_arrow";
}

function refresh_stopwatch() {
    stopwatch_time_raw = new Date() - start_time;

    stopwatch_time_ss = Math.floor(stopwatch_time_raw / 1000);
    stopwatch_time_ss = stopwatch_time_ss % 60;
    stopwatch_time_ss = String(stopwatch_time_ss);
    stopwatch_time_ss = stopwatch_time_ss.padStart(2, "0");

    stopwatch_time_mm = Math.floor(stopwatch_time_raw / 60000);
    stopwatch_time_mm = String(stopwatch_time_mm);

    stopwatch_time_ms = Math.floor(stopwatch_time_raw / 10);
    stopwatch_time_ms = stopwatch_time_ms % 100;
    stopwatch_time_ms = String(stopwatch_time_ms);
    stopwatch_time_ms = stopwatch_time_ms.padStart(2, "0");

    document.getElementById("stopwatch_time").textContent = stopwatch_time_mm + ":" + stopwatch_time_ss;
    document.getElementById("stopwatch_ms").textContent = "." + stopwatch_time_ms;
}

function reset_stopwatch() {
    stopwatch_time_raw = 0;
    stop_stopwatch();
    document.getElementById("play-button-text").textContent = "開始";
    document.getElementById("stopwatch_time").textContent = "0:00";
    document.getElementById("stopwatch_ms").textContent = ".00";
}
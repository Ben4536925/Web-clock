var x = 0
const intervalID = setInterval(refreshclock, 10)
let s = 0
const dateObjectName = new Date([parameters]);

function fullscreen() {

    //alert("ha")
    //let  a = dateObjectName
    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
        fullscreen_button.innerHTML = "fullscreen_exit"
    } else {
        document.exitFullscreen();
        fullscreen_button.innerHTML = "fullscreen"
    }
}
function refreshclock() {
    const now = new Date();
    let HH = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    mm = String(mm);

    ss = String(ss);
    if (mm.length === 1) {
        mm = "0" + mm
    };
    if (ss.length === 1) {
        ss = "0" + ss
    };
    if (s != ss) {
        time.innerHTML = HH + ":" + mm + ":" + ss;
        date.innerHTML = now.toLocaleDateString('ja-JP');
        s = ss
    }
}

function a() {
    aa("#ff0000")
}

/*function aa(color) {
    colorElemnt.style.setProperty("--md-sys-color-surface", color);
}*/

function home_tab() {
    hideAll();
    document.getElementById("home").style.display = null;
}

function alarm_tab() {
    /*alert("It's works!");*/
    hideAll();
}

function hideAll() {
    document.getElementById("home").style.display = "none";
    /*document.getElementById("alarm").style.display = "none";*/
}
/*tabs.addEventListener('change', (event: Event) => {
  if (event.target.activeTabIndex === 2) {
    // ... perform logic only if index of selected item is 2.
    alert("ha")
  }
});
*/
/*window.addEventListener('load', function () {
    document.getElementById("content1").addEventListener('click', logPosition);
});
 
function logPosition(event) {
    console.log("clientX: " + event.clientX);
    console.log("clientY: " + event.clientY);
}  */


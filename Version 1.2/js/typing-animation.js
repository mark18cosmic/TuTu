var i = 0
var text = 'Welcome to TuTu';
type()
function type() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100)
    }
}
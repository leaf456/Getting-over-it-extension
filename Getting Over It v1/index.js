var isdown = false
document.getElementById("bod").addEventListener("keydown", custom)
function custom(key) {
	if (key.code == "KeyF") {
		if (isdown) {
			document.webkitExitFullscreen();
			isdown = false
		} else {
			document.documentElement.webkitRequestFullscreen();
			isdown = true
		}
	}
}
console.log("Why are you looking at the console?")
console.log("like are you trying to hack this game?")
console.log("If you're trying to hack this, then why are you even playing it?")
console.log("alright, why don't you stop reading this and just play the game.")
document.getElementById("smolio").addEventListener("click", myFunction);
//res.concat(",top=20,left=".concat(window.screen.width))))
    function myFunction(){
		var windowbarsize = 0
		var res = "width=515,height="
		res = res.concat(windowbarsize + 413)
		res = res.concat(",top=0,left=")
		res = res.concat(window.screen.width)
		window.open("big.html", "getting over it", res);
		window.close();
   }
   
document.getElementById("meduim").addEventListener("click", myFunction2);

//res.concat(",top=20,left=".concat(window.screen.width))))
    function myFunction2(){
		var windowbarsize = 0
		var res = "width=765,height="
		res = res.concat(windowbarsize + 601)
		res = res.concat(",top=0,left=")
		res = res.concat(window.screen.width)
		window.open("big.html", "getting over it", res);
		window.close();
   }
document.getElementById("large").addEventListener("click", myFunction3);

//res.concat(",top=20,left=".concat(window.screen.width))))
    function myFunction3(){
		var res = "width=".concat(window.screen.width)
		res = res.concat(",height=")
		res = res.concat(window.screen.height)
		res = res.concat(",top=0,left=0")
		window.open("big.html", "getting over it", res);
		window.close();
   }
document.getElementById("custombutton").addEventListener("click", custom)
function custom() {
	var x = document.getElementById("inx").value
	var y = document.getElementById("iny").value
	var res = "width=".concat(x)
	res = res.concat(",height=")
	res = res.concat(y)
	res = res.concat(",top=0,left=0")
	window.open("big.html", "getting over it", res);
	window.close();
}
document.getElementById("creds").addEventListener("click", credits)
function credits() {
	var res = "width=".concat(838)
	res = res.concat(",height=")
	res = res.concat(150)
	res = res.concat(",top=0,left=0")
	window.open("Credits.html", "Credits", res);
}
var tips = ["tip: Press p to pause/unpause the game!", "tip: Press f to fullscreen the game!", "tip: Hammer clutches are hard. Practise!", 
"tip: If you beat your high score, it'll show!", "tip: the tacos are hard to navigate...",
"tip: Look at the news panel for news!", "tip: Look at the change log for updates!", "tip: Look at the tips for tips!",
 "tip: The original Game is pretty cool!", "What's your high score? mine is 2 minutes 45 seconds.",
 "tip: it's not a good idea to smash your computer in rage...", "tip: Why don't you stop looking at tips and play the game?", 
 "Product is NOT tested on animals.", "tip: Don't shake your mouse!", "Tip: the links work now!",
 "You should check out my website!", "Made with ❤, js and html."]
document.getElementById("tips").innerHTML = tips[Math.floor(Math.random() * tips.length)]
if (Math.floor(Math.random() * 100) == 59) {document.getElementById("back").style.backgroundImage = "url('eastereggs.png')";
document.getElementById("tips").innerHTML = "You got the 1 in 100 chance easter egg!";}
function link2() {window.open("https://ourplatformer.000webhostapp.com/")}
document.getElementById("link2").addEventListener("click", link2)
function link1() {window.open("https://scratch.mit.edu/users/griffpatch/")}
document.getElementById("link1").addEventListener("click", link1)
function xmlrequest(url, onfinish, onerrorfunction) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (onfinish != null) {
				onfinish(this.responseText)
			}
		}
	}
	request.onerror = function() {
		console.log("Error!")
		if (onerrorfunction != null) {
			onerrorfunction()
		}
	}
	request.open("GET", url, true);
	request.send();
}
function loadlastrequest(errortext) {
	if	(typeof(Storage) !== "undefined") {
		if (localStorage.getItem("lastnewsrequest") != null) {
			var h3el = document.createElement("h3")
			h3el.innerHTML = errortext + localStorage.getItem("lastnewsrequest")
			document.getElementById("news").innerHTML = ""
			document.getElementById("news").appendChild(h3el)
		} else {
			var h3el = document.createElement("h3")
			h3el.innerHTML = "No cache available"
			document.getElementById("news").innerHTML = ""
			document.getElementById("news").appendChild(h3el)
		}
	} else {
		var h3el = document.createElement("h3")
		h3el.innerHTML = "Your browser doesn't support localStorage. :["
		document.getElementById("news").innerHTML = ""
		document.getElementById("news").appendChild(h3el)
	}
}
function dorequest() {
	xmlrequest("https://ourplatformer.000webhostapp.com/extensionnews.txt", function(result) {
		if (result.indexOf("<for getting over it>") != -1) {
			news = result.replace(/<for getting over it>/g, "")
			if (typeof(Storage) !== "undefined") {
				localStorage.setItem("lastnewsrequest", news)
				localStorage.setItem("lastnewsrefreshtime", Math.floor(Date.now()))
			}
			var h3el = document.createElement("h3")
			h3el.innerHTML = news
			document.getElementById("news").innerHTML = ""
			document.getElementById("news").appendChild(h3el)
		} else {loadlastrequest("Couldn't verify the request. Last refresh: <br>")}
	}, function() {
		loadlastrequest("Couldn't connect to server. Last refresh: <br>")
	})
}
if (window.navigator.onLine) {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem("lastnewsrefreshtime") != null) {
			if ((Date.now() / 1000) > (localStorage.getItem("lastnewsrefreshtime") / 1000) + 500) {
				dorequest()
			} else {
				loadlastrequest("")
			}
		} else {
			dorequest()
		}
		if (localStorage.getItem("lastnewsrefreshtime") != null) {
			var iel = document.createElement("i")
			iel.innerText = "Last refreshed: " + String(Math.floor(Date.now() - localStorage.getItem("lastnewsrefreshtime")) / 1000) + " seconds ago"
			document.getElementById("news").appendChild(iel)
		}
	} else {
		loadlastrequest("")
	}
} else {
	loadlastrequest("No internet avaible. Last refresh: <br>")
}
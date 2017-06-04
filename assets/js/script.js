var lastScrollTop = 0;
window.addEventListener("scroll", function() {
	var currentScroll = window.pageYOffset || document.body.scrollTop;
	if (currentScroll > lastScrollTop) {
		document.getElementById("navigation").classList.remove("no-bg");
		document.getElementById("signUpBtn").classList.remove("hidden-btn");
	} else {
		document.getElementById("navigation").classList.add("no-bg");
		if ( currentScroll <= 2 ) {
			document.getElementById("navigation").classList.add("no-bg");
			document.getElementById("signUpBtn").classList.add("hidden-btn");
		}
	}
	lastScrollTop = currentScroll;
}, false);
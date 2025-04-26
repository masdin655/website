const includeNavbar = () => {
	fetch("static/navbar.html")
		.then((t) => t.text())
		.then((t) => (document.querySelector(".navbar").innerHTML = t))
		.catch(
			(_) =>
				(document.querySelector(".navbar").textContent =
					"unable to load, wompity womp")
		)
}
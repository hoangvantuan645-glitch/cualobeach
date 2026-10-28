const menu = document.querySelector("#navbarNav");

menu?.addEventListener("click", (event) => {
	if (event.target.closest(".nav-link") && menu.classList.contains("show")) {
		bootstrap.Collapse.getOrCreateInstance(menu).hide();
	}
});

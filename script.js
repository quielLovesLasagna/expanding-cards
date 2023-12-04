"use strict";

// Element/s
const panelsContainer = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

// Function/s
function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}

// Evemt Handler/s
panelsContainer.addEventListener("click", function (e) {
	const clickedPanel = e.target.closest(".panel");
	if (!clickedPanel) return;

	removeActiveClasses();

	clickedPanel.classList.add("active");
});

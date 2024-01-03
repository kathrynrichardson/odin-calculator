document.addEventListener('DOMContentLoaded', function() {
	const gridElements = document.querySelectorAll('.grid-item');

	gridElements.forEach(function (item) {
		if (item.id !== "displayItem") {
			if (item.id == "clearItem") {
				item.textContent = "CLEAR";
			} else if (item.id == "deleteItem") {
				item.textContent = "DELETE";
			} else {
				item.textContent = item.id;
			}
		}
	});
});

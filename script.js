(function() {
	const hexNumber = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
	const hexBtn = document.querySelector('.hex-btn');
	const hexSpan = document.querySelector('.hex');
	const copy = document.querySelector('.copy');

	hexBtn.addEventListener('click', getHex);
	function getHex() {
		let hexColor = '#';

		for (let i = 0; i < 6; i++) {
			let randomIndex = Math.floor(Math.random() * hexNumber.length);
			hexColor += hexNumber[randomIndex];
		}
		hexSpan.innerHTML = hexColor;
		document.body.style.background = hexColor;
	}
})();

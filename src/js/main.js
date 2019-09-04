document.addEventListener('DOMContentLoaded', () => {
	document.body.dataset.theme = localStorage.getItem('tr_theme') || 'light';
});

document.querySelector('.header-settings-theme').addEventListener('click', (event) => {
	const {target} = event;
	if (target.classList.contains('enable-theme')) {
		document.body.dataset.theme = target.dataset.theme;

		localStorage.setItem('tr_theme', target.dataset.theme);
	}
});

document.getElementById('calc').addEventListener('click', () => {
	const expr = document.getElementById('expression').value;

	const output = document.getElementById('output');
	output.innerHTML = Math.sqrt(eval(expr)).toFixed(2);
	document.querySelector('.content-calculator-output').style.display = 'block';
});

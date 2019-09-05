document.addEventListener('DOMContentLoaded', () => {
	document.body.dataset.theme = localStorage.getItem('tr_theme') || 'light';
});

const root = (expression) => {
	let result = 'Ваше выражение имеет ошибку или в данный момент мы не можем его решить';
	try {
		const evaluate = math.evaluate(expression);
		// Извлекаем корень и округляем
		result = math.round(math.sqrt(evaluate), 3).toString();

		if (!math.hasNumericValue(result) && /i/.test(result)) {
			result = '+-(' + result + ')';
		}
	} catch (e) {
		console.error(e.message);
	}

	return result;
};

document.querySelector('.header-settings-theme').addEventListener('click', (event) => {
	const {target} = event;
	if (target.classList.contains('enable-theme')) {
		document.body.dataset.theme = target.dataset.theme;

		localStorage.setItem('tr_theme', target.dataset.theme);
	}
});

document.getElementById('calc').addEventListener('click', () => {
	const expr = document.getElementById('expression').value;
	const result = root(expr);

	const output = document.getElementById('output');
	output.innerHTML = result;
	document.querySelector('.content-calculator-output').style.display = 'block';
});

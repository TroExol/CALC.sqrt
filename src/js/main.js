// Переводы
const languages = {
	ru: {
		title: 'Извлечение корня',
		expression_label: 'Введите выражение...',
		round_label: 'Точность',
		round_btn: 'Извлечь',
		output_label: 'Корень введенного выражения равен:',
		person_title: 'Наши разработчики',
		klochkovskiy: 'Клочковский Иван',
		ilkaev: 'Илькаев Артур',
		otroshenko: 'Отрощенко Владимир',
		contact_title: 'Связь с нами',
		documentation_title: 'Функционал',
		main_title: 'Главная',
		error: 'Ваше выражение имеет ошибку или в данный момент мы не можем его решить'
	},
	en: {
		title: 'Root extraction',
		expression_label: 'Enter an expression...',
		round_label: 'Accuracy',
		round_btn: 'Root',
		output_label: 'The root of the entered expression is:',
		person_title: 'Our developers',
		klochkovskiy: 'Klochkovskiy Ivan',
		ilkaev: 'Ilkaev Arthur',
		otroshenko: 'Otroshenko Vladimir',
		contact_title: 'Contact with us',
		documentation_title: 'Functional',
		main_title: 'Main',
		error: 'Your expression has an error or we cannot solve it at the moment'
	},
	zh: {
		title: '根拔除',
		expression_label: '輸入表達式...',
		round_label: '準確性',
		round_btn: '提取',
		output_label: '輸入表達式的根是:',
		person_title: '我們的開發者',
		klochkovskiy: 'Klochkovskiy Ivan',
		ilkaev: 'Ilkaev Arthur',
		otroshenko: 'Otroshenko Vladimir',
		contact_title: '聯繫我們',
		documentation_title: '實用',
		main_title: '主',
		error: '您的表達式有錯誤，或者我們目前無法解決'
	},
	es: {
		title: 'Extracción de raíces',
		expression_label: 'Ingrese una expresión...',
		round_label: 'Precisión',
		round_btn: 'Expulsar',
		output_label: 'La raíz de la expresión ingresada es:',
		person_title: 'Nuestros desarrolladores',
		klochkovskiy: 'Klochkovskiy Ivan',
		ilkaev: 'Ilkaev Arthur',
		otroshenko: 'Otroshenko Vladimir',
		contact_title: 'Contacta con nosotros',
		documentation_title: 'Funcional',
		main_title: 'Inicio',
		error: 'Su expresión tiene un error o no podemos resolverlo en este momento'
	}
};
// Имя текущего файла
const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

/**
 * Меняет язык сайта
 * @param {string} lang Язык, на который нужно перевести
 */
const changeLanguage = (lang) => {
	/**
	 * Присваивание переведенного текста элементу
	 * @param {string} selector
	 * @param {string} prop Свойство DOM элемента
	 * @param {string} section Секция из language объекта
	 */
	const assign = (selector, prop, section) => {
		document.querySelector(selector)[prop] = languages[lang][section];
	};

	assign('title', 'innerText', 'title');
	assign('.header__title', 'innerText', 'expression_label');
	assign('.footer-team__title', 'innerText', 'person_title');
	assign(
		'.footer-team-cards-person[data-person="klochkovskiy"] .footer-team-cards-person__name',
		'innerText',
		'klochkovskiy'
	);
	assign('.footer-team-cards-person[data-person="ilkaev"] .footer-team-cards-person__name', 'innerText', 'ilkaev');
	assign(
		'.footer-team-cards-person[data-person="otroshenko"] .footer-team-cards-person__name',
		'innerText',
		'otroshenko'
	);
	assign('.footer-contact__title', 'innerText', 'contact_title');
	switch (path) {
		// Главная страница
		case 'index.html':
		case '':
			assign('.header__action[data-url="documentation"]', 'innerText', 'documentation_title');
			assign('#expression', 'placeholder', 'expression_label');
			assign('.content-calculator__label', 'innerText', 'round_label');
			assign('.content-calculator__calc', 'innerText', 'round_btn');
			assign('.content-calculator-output__label', 'innerText', 'output_label');

			if (/[\D]{6,}/.test(document.querySelector('.content-calculator-output__result').innerText)) {
				assign('.content-calculator-output__result', 'innerText', 'error');
			}
			break;
		// Страница с пользовательским руководством
		case 'documentation.html':
			assign('.header__action[data-url="main"]', 'innerText', 'main_title');
			break;
	}
};

// Отображение темы, перевод страницы после полной загрузки контента
document.addEventListener('DOMContentLoaded', () => {
	document.body.dataset.theme = localStorage.getItem('tr_theme') || 'dark';
	const lang = localStorage.getItem('tr_lang') || 'ru';
	document.documentElement.lang = lang;
	changeLanguage(lang);
});

/**
 * Извлекает корень
 * @param {string|number} expression Выражение, из которого необходимо извлечь корень
 * @param {number} round Точность округления
 * @returns {string}
 */
const root = (expression, round = 3) => {
	let result = languages[document.documentElement.lang].error;
	try {
		// Приводим все буквы к нижнему регистру
		if (/[A-Za-z]/.test(expression)) {
			expression = expression.toLowerCase();
		}

		// Извлекаем корень
		const sqrt = math
			.chain(expression)
			.evaluate()
			.sqrt()
			.done();
		if (!math.isNaN(sqrt)) {
			// Округляем
			result = math.round(sqrt, round).toString();

			if (!math.isZero(sqrt)) {
				// Добавляем 2 варианта
				result = '+-(' + result + ')';
			}
		}
	} catch (e) {
		console.error(e.message);
	}

	return result;
};

if (path === 'index.html' || path === '') {
	// Присваиваем слушатель на кнопку извлечения корня
	document.getElementById('calc').addEventListener('click', () => {
		let round = document.getElementById('round').value;
		// Если введенное значение точности не является числом, присвоить 3
		round = /[^\d.]/.test(round) ? 3 : Math.round(round);
		if (round > 15) {
			round = 15;
		} else if (round < 0) {
			round = 0;
		}
		document.getElementById('round').value = round;

		const expr = document.getElementById('expression').value;

		document.getElementById('output').innerHTML = root(expr, round);
		document.querySelector('.content-calculator-output').style.display = 'block';
	});
}

document.querySelector('.header-settings-theme').addEventListener('click', (event) => {
	const {target} = event;
	if (target.classList.contains('enable-theme')) {
		document.body.dataset.theme = target.dataset.theme;

		localStorage.setItem('tr_theme', target.dataset.theme);
	}
});

document.querySelector('.header-settings-language').addEventListener('click', (event) => {
	const {target} = event;
	if (target.classList.contains('enable-lang')) {
		document.documentElement.lang = target.dataset.lang;
		changeLanguage(target.dataset.lang);

		localStorage.setItem('tr_lang', target.dataset.lang);
	}
});

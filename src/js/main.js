const languages = {
	ru: {
		title: 'Извлечение корня',
		round_label: 'Цифр после запятой',
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
		round_label: 'Decimal Numbers',
		round_btn: 'Extract',
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
		round_label: '十進制數',
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
		round_label: 'Números decimales',
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
const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
document.addEventListener('DOMContentLoaded', () => {
	document.body.dataset.theme = localStorage.getItem('tr_theme') || 'dark';
	const lang = localStorage.getItem('tr_lang') || 'ru';
	document.documentElement.lang = lang;
	changeLanguage(lang);
});

const root = (expression, round = 3) => {
	let result = languages[document.documentElement.lang].error;
	try {
		const evaluate = math.evaluate(expression);
		// Извлекаем корень и округляем
		result = math.round(math.sqrt(evaluate), round).toString();
		// Добавляем 2 варианта для выражений с мнимой единицей
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

const changeLanguage = (lang) => {
	document.querySelector('title').innerText = languages[lang].title;
	document.querySelector('.header__title').innerText = languages[lang].title;
	switch (path) {
		case 'index.html':
			document.querySelector('.header__action[data-url="documentation"]').innerText =
				languages[lang].documentation_title;
			document.querySelector('.content-calculator__label').innerText = languages[lang].round_label;
			document.querySelector('.content-calculator__calc').innerText = languages[lang].round_btn;
			document.querySelector('.content-calculator-output__label').innerText = languages[lang].output_label;

			if (/[\D]{6,}/.test(document.querySelector('.content-calculator-output__result').innerText)) {
				document.querySelector('.content-calculator-output__result').innerText = languages[lang].error;
			}
			break;
		case 'documentation.html':
			document.querySelector('.header__action[data-url="main"]').innerText = languages[lang].main_title;
			break;
	}
	if (path === 'index.html') {
		document.getElementById('calc').addEventListener('click', () => {
			let round = document.getElementById('round').value;
			if (/\D/.test(round)) {
				document.getElementById('round').value = 3;
				round = 3;
			}
			const expr = document.getElementById('expression').value;

			document.getElementById('output').innerHTML = root(expr, round);
			document.querySelector('.content-calculator-output').style.display = 'block';
		});
	}
	document.querySelector('.footer-team__title').innerText = languages[lang].person_title;
	document.querySelector('.footer-team-cards-person[data-person="klochkovskiy"] .footer-team-cards-person__img').alt =
		languages[lang].klochkovskiy;
	document.querySelector(
		'.footer-team-cards-person[data-person="klochkovskiy"] .footer-team-cards-person__name'
	).innerText = languages[lang].klochkovskiy;
	document.querySelector('.footer-team-cards-person[data-person="ilkaev"] .footer-team-cards-person__img').alt =
		languages[lang].ilkaev;
	document.querySelector('.footer-team-cards-person[data-person="ilkaev"] .footer-team-cards-person__name').innerText =
		languages[lang].ilkaev;
	document.querySelector('.footer-team-cards-person[data-person="otroshenko"] .footer-team-cards-person__img').alt =
		languages[lang].otroshenko;
	document.querySelector(
		'.footer-team-cards-person[data-person="otroshenko"] .footer-team-cards-person__name'
	).innerText = languages[lang].otroshenko;
	document.querySelector('.footer-contact__title').innerText = languages[lang].contact_title;
};

document.querySelector('.header-settings-language').addEventListener('click', (event) => {
	const {target} = event;
	if (target.classList.contains('enable-lang')) {
		document.documentElement.lang = target.dataset.lang;
		changeLanguage(target.dataset.lang);

		localStorage.setItem('tr_lang', target.dataset.lang);
	}
});

const languages = {
	ru: {
		title: 'Извлечение корня',
		round_label: 'Чисел после запятой',
		round_btn: 'Извлечь',
		output_label: 'Корень введенного выражения равен:',
		person_title: 'Наши разработчики',
		klochkovskiy: 'Клочковский Иван',
		ilkaev: 'Илькаев Артур',
		otroshenko: 'Отрощенко Владимир',
		contact_title: 'Связь с нами'
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
		contact_title: 'Contact with us'
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
		contact_title: '聯繫我們'
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
		contact_title: 'Contacta con nosotros'
	}
};

document.addEventListener('DOMContentLoaded', () => {
	document.body.dataset.theme = localStorage.getItem('tr_theme') || 'dark';
	const lang = localStorage.getItem('tr_lang') || 'ru';
	document.documentElement.lang = lang;
	changeLanguage(lang);
});

const root = (expression, round = 3) => {
	let result = 'Ваше выражение имеет ошибку или в данный момент мы не можем его решить';
	try {
		const evaluate = math.evaluate(expression);
		// Извлекаем корень и округляем
		result = math.round(math.sqrt(evaluate), round).toString();
		// Добавляем 2 варианта для комплексных чисел
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
	document.querySelector('.content-calculator__label').innerText = languages[lang].round_label;
	document.querySelector('.content-calculator__calc').innerText = languages[lang].round_btn;
	document.querySelector('.content-calculator-output__label').innerText = languages[lang].output_label;
	document.querySelector('.footer-team__title').innerText = languages[lang].person_title;
	document.querySelector('.footer-team-cards-person[data-person="klochkovskiy"] .footer-team-cards-person__img').alt =
		languages[lang].klochkovskiy;
	document.querySelector(
		'.footer-team-cards-person[data-person="klochkovskiy"] .footer-team-cards-person__name'
	).innerText = languages[lang].klochkovskiy;
	document.querySelector('.footer-team-cards-person[data-person="ilkaev"] .footer-team-cards-person__img').alt =
		languages[lang].ilkaev;
	document.querySelector(
		'.footer-team-cards-person[data-person="ilkaev"] .footer-team-cards-person__name'
	).innerText = languages[lang].ilkaev;
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

document.getElementById('calc').addEventListener('click', () => {
	let round = document.getElementById('round').value;
	round = /^\d$/.test(round) ? round : 3;
	const expr = document.getElementById('expression').value;
	const result = root(expr, round);

	const output = document.getElementById('output');
	output.innerHTML = result;
	document.querySelector('.content-calculator-output').style.display = 'block';
});

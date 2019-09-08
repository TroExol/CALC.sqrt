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
		im: 'Комплексные числа',
		natural: 'Натуральные числа',
		negative: 'Отрицательные числа',
		fractional: 'Дробные числа',
		plus: 'Сложение',
		minus: 'Вычитание',
		multi: 'Умножение',
		div: 'Деление',
		sin: 'Синус числа x',
		cos: 'Косинус числа x',
		tag: 'Тангенс числа x',
		cot: 'Котангенс числа x',
		asin: 'Арксинус числа x',
		acos: 'Арккосинус числа x',
		atan: 'Арктангенс числа x',
		acot: 'Арккотангенс числа x',
		exp: 'Экспонента числа x',
		sqrt: 'Корень числа x',
		pow: 'Возведение числа x в степень a',
		log10: 'Десятичный логарифм числа x',
		log2: 'Двоичный логарифм числа x',
		abs: 'Модуль числа x',
		nested: 'Вложенные функции',
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
		im: 'Complex numbers',
		natural: 'Natural numbers',
		negative: 'Division',
		fractional: 'Fractional numbers',
		plus: 'Addition',
		minus: 'Subtraction',
		multi: 'Умножение',
		div: 'Multiplication',
		sin: 'Sine of x',
		cos: 'Cosine of x',
		tag: 'The tangent of x',
		cot: 'Cotangent of x',
		asin: 'The arcsine of x',
		acos: 'Arccosine of x',
		atan: 'Arc tangent of x',
		acot: 'Arcotangent of x',
		exp: 'Exponent of x',
		sqrt: 'Root of x',
		pow: 'Raising the number x to the power of a',
		log10: 'The decimal logarithm of x',
		log2: 'The binary logarithm of x',
		abs: 'The modulus of x',
		nested: 'Nested Functions',
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
		im: '複數',
		natural: '自然數',
		negative: '負數',
		fractional: '分數',
		plus: '加法',
		minus: '減法',
		multi: '乘法',
		div: '師',
		sin: 'x的正弦',
		cos: 'x的餘弦',
		tag: 'x的正切',
		cot: 'x的餘切',
		asin: 'x的反正弦',
		acos: 'x的反餘弦',
		atan: 'x的反正切',
		acot: 'x的鈍化',
		exp: 'x的指數',
		sqrt: '提取x的根',
		pow: '將數字x增加到a的冪',
		log10: 'x的十進制對數',
		log2: 'x的二進制對數',
		abs: 'x的模數',
		nested: '嵌套函數',
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
		im: 'Números complejos',
		natural: 'Números naturales',
		negative: 'Números negativos',
		fractional: 'Números fraccionales',
		plus: 'Además',
		minus: 'Resta',
		multi: 'Multiplicación',
		div: 'División',
		sin: 'Seno de x',
		cos: 'Coseno de x',
		tag: 'La tangente de x',
		cot: 'Cotangente de x',
		asin: 'El arcoseno de x',
		acos: 'Arccosina de x',
		atan: 'Arco tangente de x',
		acot: 'Arcotangente de x',
		exp: 'Exponente de x',
		sqrt: 'Raíz X',
		pow: 'Elevar el número x a la potencia de un',
		log10: 'El logaritmo decimal de x',
		log2: 'El logaritmo binario de x',
		abs: 'El módulo de x',
		nested: 'Funciones anidadas',
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
	assign('.header__title', 'innerText', 'title');
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
			assign('.documentation__title', 'innerText', 'documentation_title');
			assign('td[data-func="im"]', 'innerText', 'im');
			assign('td[data-func="natural"]', 'innerText', 'natural');
			assign('td[data-func="negative"]', 'innerText', 'negative');
			assign('td[data-func="fractional"]', 'innerText', 'fractional');
			assign('td[data-func="plus"]', 'innerText', 'plus');
			assign('td[data-func="minus"]', 'innerText', 'minus');
			assign('td[data-func="multi"]', 'innerText', 'multi');
			assign('td[data-func="div"]', 'innerText', 'div');
			assign('td[data-func="sin"]', 'innerText', 'sin');
			assign('td[data-func="cos"]', 'innerText', 'cos');
			assign('td[data-func="tag"]', 'innerText', 'tag');
			assign('td[data-func="cot"]', 'innerText', 'cot');
			assign('td[data-func="asin"]', 'innerText', 'asin');
			assign('td[data-func="acos"]', 'innerText', 'acos');
			assign('td[data-func="atan"]', 'innerText', 'atan');
			assign('td[data-func="acot"]', 'innerText', 'acot');
			assign('td[data-func="exp"]', 'innerText', 'exp');
			assign('td[data-func="sqrt"]', 'innerText', 'sqrt');
			assign('td[data-func="pow"]', 'innerText', 'pow');
			assign('td[data-func="log10"]', 'innerText', 'log10');
			assign('td[data-func="log2"]', 'innerText', 'log2');
			assign('td[data-func="abs"]', 'innerText', 'abs');
			assign('td[data-func="nested"]', 'innerText', 'nested');
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

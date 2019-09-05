const assert = chai.assert;
const round = 3;

describe('root', () => {
	const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	const countTests = 5;

	describe('Извлекает квадратный корень из натурального числа', () => {
		const makeTest = (int) => {
			const expected = math.round(Math.sqrt(int), round);
			it(`Входное ${int} ожидаемое выходное ${expected}`, () => {
				assert.equal(root(int), expected);
			});
		};

		for (let i = 1; i <= countTests; i++) {
			makeTest(randomInt(1, 10001));
		}
	});

	describe('Извлекает квадратный корень из отрицательного числа', () => {
		it(`Входное -1 ожидаемое выходное +-(i)`, () => {
			assert.equal(root(-1), '+-(i)');
		});

		const makeTest = (int) => {
			const expected = '+-(' + math.round(Math.sqrt(-int), round) + 'i)';
			it(`Входное ${int} ожидаемое выходное ${expected}`, () => {
				assert.equal(root(int), expected);
			});
		};

		for (let i = 1; i <= countTests; i++) {
			makeTest(randomInt(-10001, -1));
		}
	});

	describe('Извлекает квадратный корень из нуля', () => {
		it(`Входное 0 ожидаемое выходное 0`, () => {
			assert.equal(root(0), 0);
		});
	});

	describe('Извлекает квадратный корень из функций', () => {
		it(`Входное tan(2+2) ожидаемое выходное ${math.round(Math.sqrt(Math.tan(4)), round)}`, () => {
			assert.equal(root('tan(2+2)'), math.round(Math.sqrt(Math.tan(4)), round));
		});
		it(`Входное atan(2+2) ожидаемое выходное ${math.round(Math.sqrt(Math.atan(4)), round)}`, () => {
			assert.equal(root('atan(2+2)'), math.round(Math.sqrt(Math.atan(4)), round));
		});
		it(`Входное cot(2+2) ожидаемое выходное ${math.round(Math.sqrt(1 / Math.tan(4)), round)}`, () => {
			assert.equal(root('cot(2+2)'), math.round(Math.sqrt(1 / Math.tan(4)), round));
		});
		it(`Входное 2^2 ожидаемое выходное ${math.round(Math.sqrt(Math.pow(2, 2)), round)}`, () => {
			assert.equal(root('2^2'), math.round(Math.sqrt(Math.pow(2, 2)), round));
		});
		it(`Входное sqrt(2+2) ожидаемое выходное ${math.round(Math.sqrt(Math.sqrt(4)), round)}`, () => {
			assert.equal(root('sqrt(2+2)'), math.round(Math.sqrt(Math.sqrt(4)), round));
		});
		it(`Входное acos(1) ожидаемое выходное ${math.round(Math.sqrt(Math.acos(1)), round)}`, () => {
			assert.equal(root('acos(1)'), math.round(Math.sqrt(Math.acos(1)), round));
		});
		it(`Входное asin(1) ожидаемое выходное ${math.round(Math.sqrt(Math.asin(1)), round)}`, () => {
			assert.equal(root('asin(1)'), math.round(Math.sqrt(Math.asin(1)), round));
		});
		it(`Входное exp(2+2) ожидаемое выходное ${math.round(Math.sqrt(Math.exp(4)), round)}`, () => {
			assert.equal(root('exp(2+2)'), math.round(Math.sqrt(Math.exp(4)), round));
		});
	});

	describe('Извлекает квадратный корень из вложенных функций', () => {
		it(`Входное tan(cos(1)) ожидаемое выходное ${math.round(Math.sqrt(Math.tan(Math.cos(1))), round)}`, () => {
			assert.equal(root('tan(cos(1))'), math.round(Math.sqrt(Math.tan(Math.cos(1))), round));
		});
		it(`Входное sin(tan(cos(1))) ожидаемое выходное ${math.round(Math.sqrt(Math.sin(Math.tan(Math.cos(1)))), round)}`, () => {
			assert.equal(root('sin(tan(cos(1)))'), math.round(Math.sqrt(Math.sin(Math.tan(Math.cos(1)))), round));
		});
		it(`Входное tan(2-2i) ожидаемое выходное +-(0.706 - 0.725i)`, () => {
			assert.equal(root('tan(2-2i)'), '+-(0.706 - 0.725i)');
		});
	});

	describe('Извлекает квадратный корень из комплексного числа', () => {
		it(`Входное 4-5i ожидаемое выходное +-(2.281 - 1.096i)`, () => {
			assert.equal(root('4-5i'), '+-(2.281 - 1.096i)');
		});
		it(`Входное 2-2i ожидаемое выходное +-(1.554 - 0.644i)`, () => {
			assert.equal(root('2-2i'), '+-(1.554 - 0.644i)');
		});
		it(`Входное 2-2i*4i ожидаемое выходное 3.162`, () => {
			assert.equal(root('2-2i*4i'), 3.162);
		});
	});

	describe('При неподдерживаемом выражении возвращать ошибку', () => {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const expected = 'Ваше выражение имеет ошибку или в данный момент мы не можем его решить';
		const makeTest = (int) => {
			const randomStr = letters[int] + letters[int] + int;

			it(`Входное ${randomStr} ожидаемое выходное ${expected}`, () => {
				assert.equal(root(randomStr), expected);
			});
		};

		for (let i = 1; i <= countTests; i++) {
			makeTest(randomInt(0, letters.length - 1));
		}

		it(`Входное Asin(Im(2+2)) ожидаемое выходное ${expected}`, () => {
			assert.equal(root(('Asin(Im(2+2))')), expected);
		});
		it(`Входное Im(Asin(2+2)) ожидаемое выходное ${expected}`, () => {
			assert.equal(root(('Im(Asin(2+2))')), expected);
		});
		it(`Входное Asin(2+2) ожидаемое выходное ${expected}`, () => {
			assert.equal(root(('Asin(2+2)')), expected);
		});
		it(`Входное Tag(2+2) ожидаемое выходное ${expected}`, () => {
			assert.equal(root('Tag(2+2)'), expected);
		});
	});
});

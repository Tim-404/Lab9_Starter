window.addEventListener('DOMContentLoaded', init);

function init() {
    const section = document.getElementById('error-btns');
    const btns = section.querySelectorAll('button');

    // console log
    btns[0].addEventListener('click', () => {
        console.log('Console Log Demo');
    });

    // console error
    btns[1].addEventListener('click', () => {
        console.error('Console Error Demo');
    });

    // console count
    btns[2].addEventListener('click', () => {
        console.count();
    });

    // console warn
    btns[3].addEventListener('click', () => {
        console.warn('Console Warn Demo');
    });

    // console assert
    btns[4].addEventListener('click', () => {
        const number = 2;
        const errorMsg = 'The number does not equal 3';
        console.assert(number === 3, {number, errorMsg});
    });

    // console clear
    btns[5].addEventListener('click', () => {
        console.clear();
    });

    // console dir
    btns[6].addEventListener('click', () => {
        console.dir(btns[6]);
    });

    // console dirxml
    btns[7].addEventListener('click', () => {
        console.dirxml(btns[7]);
    });

    // console group start
    btns[8].addEventListener('click', () => {
        console.group('console.group');
    });

    // console group end
    btns[9].addEventListener('click', () => {
        console.groupEnd('console.group');
    });

    // console table
    btns[10].addEventListener('click', () => {
        const languages = [
            {
                language: 'C',
                speed: 'fast',
                usability: 'eh'
            },
            {
                language: 'Python',
                speed: 'yikes',
                usability: 'yay'
            },
            {
                language: 'JS',
                speed: 'eh',
                usability: 'no'
            }
        ];
        console.table(languages);
    });

    // start timer
    btns[11].addEventListener('click', () => {
        console.time('Timer');
    });

    // end timer
    btns[12].addEventListener('click', () => {
        console.timeEnd('Timer');
    });

    // console trace
    btns[13].addEventListener('click', () => {
        const lvl1 = () => lvl2();
        const lvl2 = () => lvl3();
        const lvl3 = () => console.trace();

        lvl1();
    });

    // trigger a global error
    btns[14].addEventListener('click', () => {
        btns[15].addEventListener('click', () => {
            console.info("this shouldn't work");
        });
    });

    // trying try/catch
    const calc = document.getElementById('calculate');
    calc.addEventListener('click', () => {
        try {
            const num1 = Number(document.getElementById('first-num').innerText);
            const num2 = Number(document.getElementById('second-num').innerText);
            const out = document.querySelector('output');
            const opOpt = document.getElementById('operator');
            const op = opOpt[opOpt.selectedIndex];

            if (op.innerText == '/' && num2 == 0) {
                throw new DivByZeroError();
            }

            switch (op) {
                case '+':
                    out.innerText = num1 + num2;
                    break;
                case '-':
                    out.innerText = num1 - num2;
                    break;
                case '*':
                    out.innerText = num1 * num2;
                    break;
                case '/':
                    out.innerText = num1 / num2;
                    break;
            }
        } catch (err) {
            if (err instanceof DivByZeroError) {
                console.error('bruh');
                console.error(err);
            }
        } finally {
            console.info('Completed calculation');
        }
    });
}
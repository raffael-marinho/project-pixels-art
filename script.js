// o 1 ta feito
const bodyPai = document.querySelector('body');

const addH1 = document.createElement('h1');

addH1.id = 'title';

addH1.innerText = 'Paleta de Cores';

bodyPai.appendChild(addH1);

// o  2 sera feito
const paletCor = document.createElement('div');

paletCor.id = 'color-palette';

bodyPai.appendChild(paletCor);

const addClassCor1 = document.createElement('div');
addClassCor1.classList.add('color');
const addClassCor2 = document.createElement('div');
addClassCor2.classList.add('color');
const addClassCor3 = document.createElement('div');
addClassCor3.classList.add('color');
const addClassCor4 = document.createElement('div');
addClassCor4.classList.add('color');

paletCor.appendChild(addClassCor1);
paletCor.appendChild(addClassCor2);
paletCor.appendChild(addClassCor3);
paletCor.appendChild(addClassCor4);

const border = '1px solid black';

addClassCor4.style.backgroundColor = 'blue';
addClassCor4.style.width = '100px';
addClassCor4.style.height = '100px';
addClassCor4.style.border = border;
addClassCor3.style.backgroundColor = 'red';
addClassCor3.style.width = '100px';
addClassCor3.style.height = '100px';
addClassCor3.style.border = border;
addClassCor2.style.backgroundColor = 'green';
addClassCor2.style.width = '100px';
addClassCor2.style.height = '100px';
addClassCor2.style.border = border;
addClassCor1.style.backgroundColor = 'black';
addClassCor1.style.width = '100px';
addClassCor1.style.height = '100px';
addClassCor1.style.border = border;

paletCor.style.display = 'flex';

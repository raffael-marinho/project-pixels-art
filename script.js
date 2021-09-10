// o 1 ta feito
let bodyPai = document.querySelector('body');

let addH1 = document.createElement('h1');

addH1.id = 'title';

addH1.innerText = 'Paleta de Cores';

bodyPai.appendChild(addH1);

// o  2 sera feito
let paletCor = document.createElement('div');

paletCor.id = 'color-palette';

bodyPai.appendChild(paletCor);

let addClassCor1 = document.createElement('div');
addClassCor1.classList.add('color');
let addClassCor2 = document.createElement('div');
addClassCor2.classList.add('color');
let addClassCor3 = document.createElement('div');
addClassCor3.classList.add('color');
let addClassCor4 = document.createElement('div');
addClassCor4.classList.add('color');

paletCor.appendChild(addClassCor1);
paletCor.appendChild(addClassCor2);
paletCor.appendChild(addClassCor3);
paletCor.appendChild(addClassCor4);

addClassCor4.style.backgroundColor = 'blue';
addClassCor4.style.width = '100px';
addClassCor4.style.height = '100px';
addClassCor4.style.border = '1px solid black';
addClassCor3.style.backgroundColor = 'red';
addClassCor3.style.width = '100px';
addClassCor3.style.height = '100px';
addClassCor3.style.border = '1px solid black';
addClassCor2.style.backgroundColor = 'green';
addClassCor2.style.width = '100px';
addClassCor2.style.height = '100px';
addClassCor2.style.border = '1px solid black';
addClassCor1.style.backgroundColor = 'black';
addClassCor1.style.width = '100px';
addClassCor1.style.height = '100px';
addClassCor1.style.border = '1px solid black';

paletCor.style.display = 'flex';

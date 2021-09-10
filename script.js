// o 1 ta feito
const bodyPai = document.querySelector('body');

const addH1 = document.createElement('h1');

addH1.id = 'title';

addH1.innerText = 'Paleta de Cores';

bodyPai.appendChild(addH1);

// o 2 e o 3 foram feitos
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

// o 4 sera feito

const tabela = document.createElement('div');

tabela.id = 'pixel-board';

bodyPai.appendChild(tabela);

const addClasstabela1 = document.createElement('div');
addClasstabela1.classList.add('casaPixels');
const addClasstabela2 = document.createElement('div');
addClasstabela2.classList.add('casaPixels');
const addClasstabela3 = document.createElement('div');
addClasstabela3.classList.add('casaPixels');
const addClasstabela4 = document.createElement('div');
addClasstabela4.classList.add('casaPixels');
const addClasstabela5 = document.createElement('div');
addClasstabela4.classList.add('casaPixels');

tabela.appendChild(addClasstabela1);
tabela.appendChild(addClasstabela2);
tabela.appendChild(addClasstabela3);
tabela.appendChild(addClasstabela4);
tabela.appendChild(addClasstabela5);

addClasstabela5.style.backgroundColor = 'white';
addClasstabela5.style.width = '500px';
addClasstabela5.style.height = '100px';
addClasstabela5.style.border = border;
addClasstabela4.style.backgroundColor = 'white';
addClasstabela4.style.width = '500px';
addClasstabela4.style.height = '100px';
addClasstabela4.style.border = border;
addClasstabela3.style.backgroundColor = 'white';
addClasstabela3.style.width = '500px';
addClasstabela3.style.height = '100px';
addClasstabela3.style.border = border;
addClasstabela2.style.backgroundColor = 'white';
addClasstabela2.style.width = '500px';
addClasstabela2.style.height = '100px';
addClasstabela2.style.border = border;
addClasstabela1.style.backgroundColor = 'white';
addClasstabela1.style.width = '500px';
addClasstabela1.style.height = '100px';
addClasstabela1.style.border = border;

// separaçao da parte 4
const complement = document.createElement('div');
complement.classList.add('pixel');
complement.style.width = '100px';
complement.style.height = '100px';
complement.style.border = border;
complement.style.backgroundColor = "white";
function criar() {
  const arr = [
    addClasstabela1,
    addClasstabela2,
    addClasstabela3,
    addClasstabela4,
    addClasstabela5,
  ];
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = 'flex';
    arr[i].appendChild(complement.cloneNode());
    arr[i].appendChild(complement.cloneNode());
    arr[i].appendChild(complement.cloneNode());
    arr[i].appendChild(complement.cloneNode());
    arr[i].appendChild(complement.cloneNode());
  }
}

criar();

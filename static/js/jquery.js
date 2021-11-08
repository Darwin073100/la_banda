var imagenes = [
    'static/img/amb.jpg',
    'static/img/integrantes/edwin.jpg',
    'static/img/integrantes/erika.jpg',
    'static/img/integrantes/isaias.jpg',
    'static/img/integrantes/oscar.jpg',
    'static/img/integrantes/rubi.jpg'
];

var num1 = 0;
var num2 = 1;
var num3 = 2;
/* Colocar las imagenes como al principio*/
function prev(){
    let slider1 = document.getElementById('slider1');
    let slider2 = document.getElementById('slider2');
    let slider3 = document.getElementById('slider3');
    num1++;
    if(num1 => imagenes.length){
        num1 = 0;
        num2 = 1;
        num3 = 2;
    }
    slider1.src = imagenes[num1];
    slider2.src = imagenes[num2];
    slider3.src = imagenes[num3];
}

/* desender las imagenes en el slider*/
function atras(){
    let slider1 = document.getElementById('slider1');
    let slider2 = document.getElementById('slider2');
    let slider3 = document.getElementById('slider3');
    if(num1 >= 0){
        if(num1 == 0){
            num1 = 1;
            num2 = 2;
            num3 = 3;
        }
        num1--;
        num2--;
        num3--;
        slider1.src = imagenes[num1];
        slider2.src = imagenes[num2];
        slider3.src = imagenes[num3];
    }
}

/*Ascender en el slider*/
function next(){
    let slider1 = document.getElementById('slider1');
    let slider2 = document.getElementById('slider2');
    let slider3 = document.getElementById('slider3');
    if(num3 <= 5){
        if(num3 == 5){
            num1 = 2;
            num2 = 3;
            num3 = 4;
        }
        num1++;
        num2++;
        num3++;
        slider1.src = imagenes[num1];
        slider2.src = imagenes[num2];
        slider3.src = imagenes[num3];
    }
}
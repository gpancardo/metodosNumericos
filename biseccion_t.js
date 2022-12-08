//Traemos math.js para evaluar las ecuaciones
const math = require("mathjs");
//En x vamos a guardar el número que se esté evaluando en el momento
let x;
//Cada ecuación va a ser una lista anidada
let gradoEcuacion;
//El primer elemento es la potencia, la segunda es el número por el que se multiplica y el tercero el signo***
let x1=[1];
let x2=[2];
let x3=[3];
let x4=[4];
let x5=[5];
let x6=[6];
let x7=[7];
let x8=[8];
let x9=[9];
let x10=[10];
let ecuacion=[x1,x2,x3,x4,x5,x6,x7,x8,x9,x10];
let ecuacionTrabajo=[];
//Tolerancia máxima
let tolerancia=0.0000001;

//Recoggemos los datos de los términos
let cx1= document.getElementById("grado1").value;
let cx2= document.getElementById("grado2").value;
let cx3= document.getElementById("grado3").value;
let cx4= document.getElementById("grado4").value;
let cx5= document.getElementById("grado5").value;
let cx6= document.getElementById("grado6").value;
let cx7= document.getElementById("grado7").value;
let cx8= document.getElementById("grado8").value;
let cx9= document.getElementById("grado9").value;
let cx10= document.getElementById("grado10").value;

//Agregamos los datos acada uno de los términos
x1.push(cx1);
x2.push(cx2);
x3.push(cx3);
x4.push(cx4);
x5.push(cx5);
x6.push(cx6);
x7.push(cx7);
x8.push(cx8);
x9.push(cx9);
x10.push(cx10);

//Vamos a recibir los Xi y Xs
let xi= document.getElementById("xi").value;
let xs= document.getElementById("xs").value;

//variable trabajo para contar el resultado
let total;

//Vamos a formatear la ecuación
let ecuacionFormateada=ecuacion[0][1]+"x"+ecuacion[0][0]+" + "+ecuacion[1][1]+"x"+ecuacion[1][0]+"x"+ecuacion[2][1]+"x"+ecuacion[2][0]+"x"+ecuacion[3][1]+"x"+ecuacion[3][0]+"x"+ecuacion[4][1]+"x"+ecuacion[4][0]+"x"+ecuacion[5][1]+"x"+ecuacion[5][0]+ecuacion[6][1]+"x"+ecuacion[6][0]+ecuacion[7][1]+"x"+ecuacion[7][0]+ecuacion[8][1]+"x"+ecuacion[8][0]+ecuacion[9][1]+"x"+ecuacion[9][0]+"x"+ecuacion[10][1]+"x"+ecuacion[10][0];
console.log(ecuacionFormateada)
total=math.eval(ecuacionFormateada);

/*function biseccion(){
    //Aquí recogemos los valores para Xa, Xb y e que ingrese el usuario
    let xa=getElementById("xa").value;
    let xb=getElementById("xb").value;
    let e=getElementById("e").value;

    //Placeholders para las variables cuando sepamos qué va
    let xr=0;
    let xl=0;
    let xu=0;
    let ea=0;
    let es=0;
    let imax=0;
    let iter=0;

    //Generar formato para derivadas


    //Imprimimos 
    document.getElementById("Xa").innerHTML=xa;
    document.getElementById("Xb").innerHTML=xb;
    document.getElementById("E").innerHTML=e;

    //
    while((es < ea) || (iter<imax)){
        let anterior_xr=xr;
        xr=(xl+xu)/2;
        iter++;
        if (xr!=0){
            ea=(((xr-anterior_xr)/xr)*100)
        }
        let test =fl*fr;
        if ( test < 0){
            xu=xr;
        }
        else if (test==0){
            ea=0;
        }
        else{
            xl=xr;
            fl=fr;
        }
        Biseccion=xr;
    }
    debugger;
}
biseccion(); 
*/


let gradoEcuacion;
let x1;
let x2;
let x3;
let x4;
let x5;
let x6;
let x7;
let x8;
let x9;
let x10;

//Va a tener cada término como otra lista que contenga las veces que se multiplica y las que se potencia
let ecuacion={}; 
let ecuacionEvaluada;

function recogerGrado(){
    let gradoUsuario= document.getElementById("ingresarGrado").value;
    gradoUsuario=parseInt(gradoUsuario);
    //+ Encontrar forma de sólo mostrar los campos que se van a usar sin React

}
/*
function recogerDatos(){
    switch(gradoUsuario){
        case 1:
            x1= document.getElementById("grado1").value;
            break;
        case 2:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            break;
        case 3:
            x1=document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
        case 4:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            break;
        case 5:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            break;
        case 6:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            x6= document.getElementById("grado6").value;
            break;
        case 7:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            x6= document.getElementById("grado6").value;
            x7= document.getElementById("grado7").value;
            break;
        case 8:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            x6= document.getElementById("grado6").value;
            x7= document.getElementById("grado7").value;
            x8= document.getElementById("grado8").value;
            break;
        case 9:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            x6= document.getElementById("grado6").value;
            x7= document.getElementById("grado7").value;
            x8= document.getElementById("grado8").value;
            x9= document.getElementById("grado9").value;
            break;
        case 10:
            x1= document.getElementById("grado1").value;
            x2= document.getElementById("grado2").value;
            x3= document.getElementById("grado3").value;
            x4= document.getElementById("grado4").value;
            x5= document.getElementById("grado5").value;
            x6= document.getElementById("grado6").value;
            x7= document.getElementById("grado7").value;
            x8= document.getElementById("grado8").value;
            x9= document.getElementById("grado9").value;
            x10= document.getElementById("grado10").value;
            break;
    }*/
    for (let i = 0; i < gradoUsuario; i++){

    }
}


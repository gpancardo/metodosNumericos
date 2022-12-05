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
    parseInt(gradoUsuario);
    
}

function recogerDatos():
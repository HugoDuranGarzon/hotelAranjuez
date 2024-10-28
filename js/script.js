function funcion1(){
    var lunes;
    var martes; 
    var miercoles;
    var jueves;
    var viernes;
    var compra1;
    var compra2;
    var compra3;
    var compra4;
    var compra5;
    var resultado;

    lunes= prompt("Indique su compra del lunes: ");
    compra1=prompt("Indique su gasto del dia: ");
    
    martes= prompt("Indique su compra del martes: ");
    compra2=prompt("Indique su gasto del dia: ");
    
    miercoles= prompt("Indique su compra del miercoles: ");
    compra3=prompt("Indique su gasto del dia: ");
    
    jueves= prompt("Indique su compra del jueves: ");
    compra4=prompt("Indique su gasto del dia: ");
    
    viernes= prompt("Indique su compra del viernes: ");
    compra5=prompt("Indique su gasto del dia: ");

    document.getElementById("demo1").innerHTML = lunes;
    document.getElementById("demo2").innerHTML = martes;
    document.getElementById("demo3").innerHTML = miercoles;
    document.getElementById("demo4").innerHTML = jueves;
    document.getElementById("demo5").innerHTML = viernes;

    document.getElementById("demo6").innerHTML = compra1;
    document.getElementById("demo7").innerHTML = compra2;
    document.getElementById("demo8").innerHTML = compra3;
    document.getElementById("demo9").innerHTML = compra4;
    document.getElementById("demo10").innerHTML = compra5;

    resultado = (Number(compra1)+Number(compra2)+Number(compra3)+Number(compra4)+Number(compra5));

    document.getElementById("answer").innerHTML = resultado;

}
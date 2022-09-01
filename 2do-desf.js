
alert ("Hola Bienvenido aqui podras cotizar tu dinero a las distintas variantes de Dolar que predominan en el mercado actualmente");

let option = prompt(`Elija el nro con el tipo de cotización que desea realizar:
1: Oficial
2: Blue
3: Solidario
`);

let x = Number(prompt("  Ingrese un monto entre 100 y 100000 pesos Argentinos "));

switch (option) {

    case "1":
        if(x >= 100 && x <= 100000){
            function convertir(){
                let resultado = 0;
                let Oficial = 145; 
                return x / Oficial;
            } 
            const resultado = convertir();
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "Oficial"`); 
            
        } else {
        alert("el monto Ingresado no corresponde. Por favor ingrese un nuevo monto")    
        }
        break;
        
    case "2":
        if(x >= 100 && x <= 100000){
            function convertir(){
                let resultado = 0;
                let Blue = 290; 
                return x / Blue;
            } 
            const resultado = convertir();
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "Blue"`); 
            
        } else {
        alert("el monto Ingresado no corresponde. Por favor ingrese un nuevo monto");

        }
        break;

    case "3":
        if(x >= 100 && x <= 100000){
            // let solidario = Oficial * 0,3
            function convertir(){
                let resultado = 0;
                let Solidario = 279; 
                return x / Solidario;
            } 
            const resultado = convertir();
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "Solidario"`); 
            
        } else {
        alert("el monto Ingresado no corresponde. Por favor ingrese un nuevo monto")    
        }
        break;
    default:
        alert(`Opcion no valida, vuelva a probar`);
        break;
}

alert ("Gracias por usar nuestra apps... Vuelva pronto");


/*
if(x >= 100 && x <= 100000){
    function convertir(){
        let resultado = 0;
        let Oficial = 200; 
        return x / Oficial;
    } 
    const resultado = convertir();
    alert(`el cambio de "${x} + pesos" a dolares es: ${resultado} Dolares "Oficial"`); 
    
} else {
alert("el monto Ingresado no corresponde. Por favor ingrese un nuevo monto")    
}
*/







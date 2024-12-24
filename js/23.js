// Switch
const metodoPago = 'tarjeta';

switch (metodoPago){
    case 'tarjeta':
        console.log('Pagaste con tarjeta')
        break;
    case "cheque":
        console.log("El usuario va a pagar con cheque, revisaremos los fondos primeros");
        break;
    case 'efectivo':
        console.log("El usuario pagara con efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}
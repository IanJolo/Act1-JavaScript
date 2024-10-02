/* ACTIVIDAD 1
const Pastelito ={
    idPastelito:1,
    sabor:"Chocolate",
    precio: 1000,
    disponible: true,
    marca: "Felfort"
}
console.log(`Pastel nro: 1`)
for(const propiedad in Pastelito){
     console.log(`${propiedad} :  ${Pastelito[propiedad]}`)
}
     */

// ACTIVIDAD 2
const cuentas = [
    {
        nombre:"Ivan Y",
        apellido:"Vienen",
        cbu:"01702046600000087865",
        saldo:64983
    },
    {
        nombre:"Ianchu",
        apellido:"Genio",
        cbu:"01466777700874444865",
        saldo:1000000
    },
    {
        nombre:"Abril",
        apellido:"Enojada",
        cbu:"01266775700873333895",
        saldo:0.00000001
    }
];
//A
let suma=0;
for(const cuenta of cuentas){
    suma= suma + cuenta.saldo;
}
suma=suma/cuentas.length;
console.log(suma);
//B
const cuentasConDinero = cuentas.filter(cuenta => cuenta.saldo > 10000);
for(const cuenta of cuentasConDinero){
    console.log(cuenta.cbu);
}
//C
let cbuSoli = prompt("Decime un cbu porfi");
const cuentaSoli = cuentas.find(cuenta => cuenta.cbu === cbuSoli);

if (cuentaSoli) {
    console.log(`El titular de la cuenta es: ${cuentaSoli.nombre} ${cuentaSoli.apellido} y tiene un saldo de: ${cuentaSoli.saldo}`);
} else {
    console.log("No existe ese CBU.");
}
//D
let cbuAEliminar = prompt("Decime un cbu porfi");
const cuentaEliminar = cuentas.find(cuenta => cuenta.cbu === cbuAEliminar);

if (cuentaEliminar) {
    cuentas.splice(cuentas.indexOf(cuentaEliminar), 1);
    console.log("Cuenta eliminada");
    console.log(cuentas);
} else {
    console.log("No existe ese CBU.");
}

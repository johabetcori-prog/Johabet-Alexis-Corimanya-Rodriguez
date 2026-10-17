// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 07
// Calculadora de propina
// Declara const montoTexto="80.50", const porcentajeTexto="10". Convierte ambos a Number; calcula propina y totalConPropina (monto + propina).

const montoTexto="80.50";
const porcentajeTexto="10";

montoTexto=Number(montoTexto);
porcentajeTexto=Number(porcentajeTexto);

propina=montoTexto*porcentajeTexto;
totalConPropina=montoTexto+propina;

export function validarNumeroDeTelefono(telefono) {
  const pattern = /^[0-9]{10}$/;
  const telefonoValido = pattern.test(telefono);
  if (!telefonoValido) {
    alert('Por favor agregue un numero de teléfono valido');
    return;
  }
}

export function validarNumeroDeIdentificacion(numero) {
  const numeroValido = Number(numero);
  if (isNaN(numeroValido) || numeroValido < 1 || numeroValido > 9999999999) {
    alert('Por favor agregue un numero de documento correcto');
    return;
  }
}

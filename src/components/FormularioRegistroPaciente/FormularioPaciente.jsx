import React, { useState } from 'react';
import {
  validarNumeroDeIdentificacion,
  validarNumeroDeTelefono,
} from '../../helpers/helpersValidation';

const pacienteInicial = {
  nombre: '',
  tipoDeDocumento: '',
  numeroDeDocumento: '',
  fechaNacimiento: '',
  correoElectronico: '',
  telefono: '',
  direccion: '',
};

const FormularioPaciente = () => {
  const [paciente, setPaciente] = useState(pacienteInicial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({
      ...paciente,
      [name]: value,
    });
  };
  console.log(paciente);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando formato de numero de teléfono
    validarNumeroDeTelefono(paciente.telefono);
    //Validando numero de identificación
    validarNumeroDeIdentificacion(paciente.numeroDeDocumento);

    console.log('Formulario enviado');
    console.log(paciente);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="formulario-container"
      name="Formulario"
      aria-label="Formulario de registro de pacientes"
    >
      <input
        type="text"
        name="nombre"
        value={paciente.nombre}
        onChange={handleChange}
        placeholder="Escribe tu nombre completo"
        required
        className="formulario-container__input-nombre"
        aria-label="campo para nombre completo"
      />
      <select
        name="tipoDeDocumento"
        value={paciente.tipoDeDocumento}
        onChange={handleChange}
        required
        className="formulario-container__select-documento"
        aria-label="Campo de tipo de documento"
      >
        <option value="">Tipo de Documento</option>
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="CE">Cédula de Extranjería</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="RC">Registro Civil</option>
      </select>

      <input
        type="number"
        name="numeroDeDocumento"
        value={paciente.numeroDeDocumento}
        onChange={handleChange}
        placeholder="Agregue su numero de identidad"
        required
        className="formulario-container__input-numero-documento"
        aria-label="Campo numero de documento de identidad"
        min={1}
        max={9999999999}
      />
      <input
        type="date"
        name="fechaNacimiento"
        value={paciente.fechaNacimiento}
        onChange={handleChange}
        required
        className="formulario-container__input-fechaNacimiento"
        aria-label="Campo fecha de nacimiento"
        min="1900-01-01"
        max="2099-12-31"
      />
      <input
        type="email"
        name="correoElectronico"
        value={paciente.correoElectronico}
        onChange={handleChange}
        placeholder="correo@correo.com"
        required
        className="formulario-container__input-email"
        aria-label="Campo de correo electrónico"
      />
      <input
        type="tel"
        name="telefono"
        value={paciente.telefono}
        onChange={handleChange}
        placeholder="formato= xxx-xxx-xx-xx"
        required
        pattern="[0-9]{10}"
        title="Ingrese un número de teléfono válido (10 dígitos)"
        className="formulario-container__input-telefono"
        aria-label="Campo de teléfono"
      />
      <input
        type="text"
        name="direccion"
        value={paciente.direccion}
        onChange={handleChange}
        placeholder="Escribe tu direccion completa"
        required
        className="formulario-container__input-nombre"
        aria-label="campo para nombre completo"
      />
      <button
        type="submit"
        className="formulario-container__botonsubmit"
        aria-label="Botón para enviar formulario"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioPaciente;

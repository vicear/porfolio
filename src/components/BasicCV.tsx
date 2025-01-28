import React from 'react';

const BasicCV = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Victor Cepeda</h1>
        <p className="text-gray-600">Desarrollador Web</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Información de Contacto</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Email: 05victor.cepeda2@gmail.com</li>
          <li>Teléfono: +34 622222175</li>
          <li>Ubicación: Barcelona, España</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Experiencia Laboral</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800">Desarrollador Frontend - MrBogart</h3>
          <p className="text-gray-600">Enero 2024 - Presente</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Desarrollo de aplicaciones web</li>
            <li>Implementación de diseños responsive y accesibles</li>
            <li>Colaboración en equipo utilizando metodologías ágiles</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Educación</h2>
        <div>
          <h3 className="text-lg font-medium text-gray-800">Grado Superior de Informática DAW</h3>
          <p className="text-gray-600">Instituto Monlau</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Habilidades</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>JavaScript / TypeScript</li>
          <li>React</li>
          <li>HTML / CSS</li>
          
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
};

export default BasicCV;


import React, { useState } from 'react';

export default function DynamicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'El nombre es obligatorio';
    if (!formData.email) formErrors.email = 'El email es obligatorio';
    if (!formData.message) formErrors.message = 'El mensaje es obligatorio';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Formulario enviado:', formData);
      setFormSubmitted(true);
    } else {
      setErrors(formErrors);
    }
  };

  if (formSubmitted) {
    return <p className="text-green-500">¡Formulario enviado con éxito!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Mensaje</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Enviar
      </button>
    </form>
  );
}

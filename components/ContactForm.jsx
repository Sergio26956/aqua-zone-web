import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Nombre</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Teléfono</label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Mensaje</label>
        <textarea
          {...register("message", { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {submitting ? "Enviando..." : "Enviar"}
      </button>
      {success && (
        <p className="mt-4 text-green-500">¡Mensaje enviado con éxito!</p>
      )}
    </form>
  );
}

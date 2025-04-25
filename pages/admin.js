export default function Admin() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>
          <p className="text-gray-600">
            <strong>Email:</strong> sergiolopezantequera@hotmail.com  
            <br />
            <strong>Tel:</strong> +34 649 002 658
          </p>
        </div>
      </div>
    </div>
  );
}

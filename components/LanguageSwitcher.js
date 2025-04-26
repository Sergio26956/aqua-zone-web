export default function LanguageSwitcher() {
  // Idiomas disponibles
  const languages = ['Español', 'Portugués', 'Inglés'];

  return (
    <div className="flex space-x-2">
      {languages.map((language, index) => (
        <button
          key={index}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          {language}
        </button>
      ))}
    </div>
  );
}

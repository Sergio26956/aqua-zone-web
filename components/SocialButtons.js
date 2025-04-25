export default function SocialButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
      <a href="https://www.facebook.com/share/18ZGYW6vqA/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700">
        <span className="text-white font-bold">Facebook</span>
      </a>
      <a href="https://www.instagram.com/aquazone_waterpark" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 rounded-full shadow-lg hover:opacity-90">
        <span className="text-white font-bold">Instagram</span>
      </a>
      <a href="tel:+34649002658" className="bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700">
        <span className="text-white font-bold">Llamar</span>
      </a>
    </div>
  );
}

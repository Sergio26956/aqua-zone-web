export default function VideoBackground() {
  return (
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src="/videos/fondo.mp4"
      >
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

import Link from "next/link";
import Parque3D from "../components/Parque3D";

export default function Terrestres() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Parques Terrestres</h1>
        <div className="grid grid-cols-2 gap-8">
          <Link href="/terrestres/kamikaze">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold">Kamikaze Jump</h3>
              <Parque3D modelPath="/assets/kamikaze.glb" />
            </div>
          </Link>
          <Link href="/terrestres/urbano">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold">Parque Urbano Móvil</h3>
              <Parque3D modelPath="/assets/urbano.glb" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

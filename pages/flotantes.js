import Link from "next/link";
import Parque3D from "../components/Parque3D";

export default function Flotantes() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Parques Flotantes</h1>
        <div className="grid grid-cols-2 gap-8">
          <Link href="/flotantes/playa">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold">Playa Artificial</h3>
              <Parque3D modelPath="/assets/playa.glb" />
            </div>
          </Link>
          <Link href="/flotantes/piscinas">
            <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer">
              <h3 className="text-2xl font-bold">Piscinas Flotantes</h3>
              <Parque3D modelPath="/assets/piscinas.glb" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

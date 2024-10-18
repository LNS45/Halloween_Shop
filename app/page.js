import fondo from "../app/images/BG.png"
import "../app/globals.css"
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative z-10 flex flex-col h-screen gap-4 p-10">
      <h1 className="relative z-10 text-6xl text-center mt-14 text-naranja-halloween drop-shadow-lg md:text-7xl md:text-left md:w-3/4">¡Bienvenido a Rincón Espeluznante!</h1>
      <h2 className="relative z-10 text-2xl text-center text-white drop-shadow-lg md:text-4xl md:text-left md:w-3/4">¡Haz que este Halloween sea inolvidable!</h2>
      <Image src={fondo} fill={true} priority={true} className="absolute z-0 object-cover" alt="Fondo"/>
    </section>
  );
}

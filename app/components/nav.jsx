import Image from "next/image"
import "../globals.css"
import logo from "../images/logo.png"

export default function Nav(){
    return (
        <nav className="fixed z-20 flex flex-row items-center justify-between w-screen h-20 p-10 bg-negro-transparente">
            <Image src={logo} width={80} height={50}/>
            <ul className="flex flex-row gap-5 text-white">
                <li><a href="https://google.com">Inicio</a></li>
                <li><a href="https://google.com">Catálogo</a></li>
                <li><a href="https://google.com">Sobre Nosotros</a></li>
                <li><a href="https://google.com">Contacto Carrito</a></li>
                <li><a href="https://google.com">Carrito</a></li>
            </ul>
        </nav>
    )
}
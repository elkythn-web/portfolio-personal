import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" bg-slate-800 sticky bottom-0 ">
      <div className="flex flex-col items-center justify-center py-4 text-white">
        <p className="text-sm">© 2023 - Todos los derechos reservados</p>
        <p className="text-sm">Desarrollado por <Link to="/" className="text-amber-500">Elkin Portillo</Link></p>
      </div>
    </footer>
  )
}

export default Footer
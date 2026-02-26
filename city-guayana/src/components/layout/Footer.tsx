type Props = {};

const articl = [
  {
    title: "Programas",
    programas: [
      "Marketing Digital",
      "Finanzas de Negocio",
      "Oficios Industriales",
      "Ventas Avanzadas",
    ],
  },
  {
    title: "Comunidad",
    comunidad: [
      "Historias de Éxito",
      "Blog de Negocios",
      "Eventos & Pitch",
      "Alumni Network",
    ],
  },
];

const ubicacion = {
  title: "Ubicación",
  text: "Ciudad Guayana, Estado Bolívar, Venezuela.",
  logoU: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-primary"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
    </svg>
  ),
  logoInstagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="w-7 h-7 text-gray-400"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5v.01" />
    </svg>
  ),
};

function Footer({}: Props) {
  return (
    <footer className="overflow-hidden px-10 py-10 md:py-20 bg-slate-900 ">
      <section className=" flex flex-col md:flex-row items-center gap-6 md:gap-4 md:justify-between md:items-start  text-gray-500 text-sm">
        <div className="flex flex-col w-full md:w-1/4 gap-3  justify-center">
          <h2 className="text-center text-white font-semibold font-poppins uppercase">
            logo
          </h2>
          <p className="text-center md:text-start">
            Forjando el futuro empresarial de la región Guayana con formación
            técnica y estratégica de vanguardia.
          </p>
        </div>
        {articl.map((item) => (
          <div className="flex flex-col w-full md:w-1/4 gap-3 justify-center items-center">
            <h2 className="text-center text-white font-semibold font-poppins uppercase">
              {item.title}
            </h2>
            {item.programas
              ? item.programas.map((item) => (
                  <a className="hover:text-primary" href="#">
                    {item}
                  </a>
                ))
              : item.comunidad.map((item) => (
                  <a className="hover:text-primary" href="#">
                    {item}
                  </a>
                ))}
          </div>
        ))}

        <div className="flex flex-col w-full md:w-1/4 gap-3 justify-center ">
          <h2 className="text-center text-white font-semibold font-poppins uppercase">
            {ubicacion.title}
          </h2>
          <div className="flex md:justify-between items-center gap-2 max-md:text-center max-md:justify-center">
            {ubicacion.logoU}
            <p>{ubicacion.text}</p>
          </div>
          <div className="flex justify-center items-center ">
            <a
              className="bg-gray-700 p-1 rounded-lg block hover:bg-gray-800"
              href="#"
            >
              {ubicacion.logoInstagram}
            </a>
          </div>
        </div>
      </section>
      <hr className="my-10 border-gray-600/40 " />
      <div className="flex justify-center text-center">
        <small className="text-gray-500">
          © 2026 Escuela de Emprendedores City Guayana. Todos los derechos
          reservados.
        </small>
      </div>
    </footer>
  );
}

export default Footer;

import hero from "../assets/media/Hero/image.png";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="w-full min-h-[85vh]  flex justify-center items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div
          className="w-full h-full bg-cover bg-center opacity-70"
          data-alt="Modern architecture of Puerto Ordaz bridge with industrial skyline"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>
      </div>
      <div className="max-w-2xl m-auto text-start flex flex-col gap-5 px-4 sm:px-6 lg:px-6 py-20">
        <h1
          style={{ textTransform: "uppercase" }}
          className="relative z-10 text-white text-5xl md:text-7xl font-poppins font-bold "
        >
          Convierte tu idea en{" "}
          <span className="italic text-[#eaff00]">empresa</span> en Guayana
        </h1>
        <p className="relative z-10 text-white  font-poppins text-xl">
          Formación práctica con{" "}
          <span className="text-[#eaff00] ">sello industrial</span> para los
          emprendedores del mañana. Únete a la comunidad líder en el estado
          Bolívar.
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row justify-star items-center gap-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 max-sm:w-full font-bold bg-primary hover:bg-blue-700 text-white rounded-lg flex gap-2 justify-center items-end"
          >
            Explorar cursos{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className=" max-sm:w-full text-center text-white rounded-lg bg-white/10 hover:bg-white/20 p-4 border backdrop-blur-md border-white/20  font-bold "
          >
            Ver Historias
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

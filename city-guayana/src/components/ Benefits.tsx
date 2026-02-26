import CheckIcon from "../assets/verified-badge.svg?react";
import GroupIcon from "../assets/group.svg?react";
import PersonCheck from "../assets/person_check.svg?react";
import imgProfesor from "../assets/media/image-profesor.png";

type Props = {};

const articles = [
  {
    icon: <CheckIcon className="w-6 h-6 text-primary" />,
    tittle: "Certificación Oficial",
    text: "Avalado por expertos y organizaciones industriales de alto nivel en el estado Bolívar.",
  },
  {
    icon: <GroupIcon className="w-6 h-6 text-primary" />,
    tittle: "Networking Estratégico",
    text: " Conecta con la red de negocios más activa de la zona y genera alianzas duraderas.",
  },
  {
    icon: <PersonCheck className="w-6 h-6 text-primary" />,
    tittle: "Docentes Mentores",
    text: "  Aprende directamente de empresarios que están operando y facturando actualmente.",
  },
];

function Benefits({}: Props) {
  return (
    <section className=" bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4"></div>
      <section className="md:mx-10 py-20 flex flex-col md:flex-row justify-between max-w-7xl mx-auto md:gap-8 gap-5 text-white relative z-10">
        <div className="flex flex-col justify-center items-start gap-4 md:w-1/2 px-4 md:px-6">
          <h3 className="max-md:text-sm uppercase font-bold font-poppins text-[#eaff00]">
            La diferncia en EDE
          </h3>
          <h1 className="uppercase font-bold font-poppins text-3xl md:text-2xl lg:text-5xl ">
            ¿Por qué formarte con nosotros?
          </h1>
          {articles.map((articl) => (
            <article
              key={articl.tittle}
              className="flex justify-between gap-4 items-center"
            >
              <div className="border border-primary rounded-full p-2 flex justify-center items-center">
                {articl.icon}
              </div>

              <div className="text-sm md:text-xs lg:text-base space-y-2 ">
                <h2 className="font-bold text-xl font-poppins">
                  {articl.tittle}
                </h2>
                <p className="text-gray-400">{articl.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className=" md:w-1/2 w-full flex justify-center items-center px-4 md:px-6">
          <img
            src={imgProfesor}
            alt="Profesor"
            className="rounded-2xl border-2 border-gray-600 w-full object-cover"
          />
        </div>
      </section>
    </section>
  );
}

export default Benefits;

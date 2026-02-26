import image1 from "../assets/media/graduates/image1.png";
import image2 from "../assets/media/graduates/image2.png";
import image3 from "../assets/media/graduates/image3.png";
import image4 from "../assets/media/graduates/image4.png";

type Props = {};

const styles =
  "w-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-500";

const images = [
  {
    id: 0,
    photo: <img className={styles} src={image1} alt="graduados" />,
    text: "Graduaćion",
  },
  {
    id: 1,
    photo: <img className={styles} src={image2} alt="teacher" />,
    text: "Mentoría personalizada",
  },
  {
    id: 2,
    photo: <img className={styles} src={image3} alt="conference" />,
    text: "Conferencias",
  },
  {
    id: 3,
    photo: <img className={styles} src={image4} alt="table" />,
    text: "Coworking",
  },
];

function Graduates({}: Props) {
  return (
    <section className="overflow-hidden py-20">
      <header className="w-full px-4 pb-20 flex gap-4 justify-center items-center text-4xl font-bold font-poppins uppercase text-slate-900 text-center">
        <h1>Nuestros Alumnos en acción </h1>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-w-4xl mx-auto gap-8 px-4 pb-20">
        {images.map((img) => (
          <div className=" w-full group relative rounded-xl overflow-hidden shadow-xl">
            <div className="relative">{img.photo}</div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="absolute bottom-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity uppercase text-white font-bold font-poppins ">
                {img.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <footer className=" px-10  ">
        <div className="flex flex-col justify-center items-center py-10 gap-6 bg-primary rounded-3xl p-4 text-center overflow-hidden">
          <h1 className="text-white  text-3xl md:text-5xl font-bold uppercase font-poppins max-w-2xl">
            ¿Listo para dar el siguiente paso?
          </h1>
          <p className="text-gray-300 md:text-xl max-w-3xl">
            Únete a la próxima cohorte y transforma tu visión en una realidad
            empresarial tangible en Ciudad Guayana.
          </p>
          <div className="flex gap-4 pt-7 ">
            <a
              className="text-primary text-lg uppercase font-bold font-poppins py-4 px-2 bg-white rounded-xl text-center shadow-xl w-full md:w-50 block hover:bg-white/90 "
              href="#"
            >
              Empezar ahora
            </a>

            <a
              className="text-white text-lg uppercase font-bold font-poppins py-4 px-2 bg-slate-900 rounded-xl text-center shadow-xl w-full md:w-50 block hover:bg-slate-950"
              href="#"
            >
              Información
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Graduates;

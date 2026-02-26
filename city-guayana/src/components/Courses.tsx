type Props = {};

function Courses({}: Props) {
  const card = [
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-scissors"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.6 8.6l10.4 10.4" />
          <path d="M8.6 15.4l10.4 -10.4" />
        </svg>
      ),
      course: "Peluquería Integral",
      descirption:
        "Domina técnicas de peluquería, estilismo, colorimetría para que puedas desarrollarte en este mundo desde cero.",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-physotherapist"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
          <path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M12 17v-7" />
          <path d="M8 20h7l1 -4l4 -2" />
          <path d="M18 20h3" />
        </svg>
      ),
      course: "Maderoterapia",
      descirption:
        "Técnica milenaria de masaje con madera para moldear y reafirmar la silueta.",
    },
    {
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-massage"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M4 22l4 -2v-3h12" />
          <path d="M11 20h9" />
          <path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
        </svg>
      ),
      course: "Drenaje Linfático",
      descirption:
        "Especialízate en masajes terapéuticos para eliminar toxinas y mejorar la circulación.",
    },
    {
      logo: (
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-sparkles-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 7a9.3 9.3 0 0 0 1.516 -.546c.911 -.438 1.494 -1.015 1.937 -1.932c.207 -.428 .382 -.928 .547 -1.522c.165 .595 .34 1.095 .547 1.521c.443 .918 1.026 1.495 1.937 1.933c.426 .205 .925 .38 1.516 .546a9.3 9.3 0 0 0 -1.516 .547c-.911 .438 -1.494 1.015 -1.937 1.932a9 9 0 0 0 -.547 1.521c-.165 -.594 -.34 -1.095 -.547 -1.521c-.443 -.918 -1.026 -1.494 -1.937 -1.932a9 9 0 0 0 -1.516 -.547" />
          <path d="M3 14a21 21 0 0 0 1.652 -.532c2.542 -.953 3.853 -2.238 4.816 -4.806a20 20 0 0 0 .532 -1.662a20 20 0 0 0 .532 1.662c.963 2.567 2.275 3.853 4.816 4.806q .75 .28 1.652 .532a21 21 0 0 0 -1.652 .532c-2.542 .953 -3.854 2.238 -4.816 4.806a20 20 0 0 0 -.532 1.662a20 20 0 0 0 -.532 -1.662c-.963 -2.568 -2.275 -3.853 -4.816 -4.806a21 21 0 0 0 -1.652 -.532" />
        </svg>
      ),
      course: "Alisados Orgánicos",
      descirption:
        "Aprende a recuperar la salud capilar con tratamientos 100% libres de químicos agresivos.",
    },
    {
      logo: (
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-mood-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 12a9 9 0 1 0 -8.012 8.946" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M9.5 15a3.59 3.59 0 0 0 2.774 .99" />
          <path d="M18.994 21.5l2.518 -2.58a1.74 1.74 0 0 0 .004 -2.413a1.627 1.627 0 0 0 -2.346 -.005l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 -.004a1.74 1.74 0 0 0 -.004 2.412l2.51 2.59" />
        </svg>
      ),
      course: "Cosmetología + Aparatología",
      descirption:
        "El balance perfecto entre cuidado de la piel y el uso de tecnología estética avanzada.",
    },
    {
      logo: (
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-droplet"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />
        </svg>
      ),
      course: "Hidralips",
      descirption:
        "Logra labios más suaves, con acabado glossy o pigmentado, según cada necesidad",
    },
  ];

  return (
    <section className="mx-10 py-20  overflow-hidden">
      <section className="flex flex-col md:flex-row gap-6 items-start md:justify-between md:items-end">
        <div className="max-w-2xl">
          <h3 className="font-bold text-primary text-xl uppercase font-poppins mb-4">
            Nuestra Oferta Académica
          </h3>

          <h1 className="text-4xl font-bold text-slate-900 font-poppins uppercase">
            Programas de Alto Rendimiento
          </h1>
        </div>

        <p className="font-medium md:max-w-sm text-slate-600">
          Diseñados para la realidad económica de nuestra región, enfocados en
          resultados.
        </p>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 mt-16 items-start">
        {card.map((item) => (
          <article
            key={item.course}
            className="flex flex-col w-full h-full bg-[#f6f6f8] justify-start items-start gap-4 p-6 rounded-lg"
          >
            <div className="size-14 bg-primary rounded-xl flex justify-center items-center text-white [&_svg]:size-8 ">
              {item.logo}
            </div>
            <h1 className="text-2xl font-bold uppercase text-slate-900">
              {item.course}
            </h1>
            <p className=" text-slate-600">{item.descirption}</p>
            <a
              href="#"
              className="font-bold text-primary flex gap-1 items-center"
            >
              Saber más{" "}
              <span>
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                  <path d="M11 13l9 -9" />
                  <path d="M15 4h5v5" />
                </svg>
              </span>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Courses;

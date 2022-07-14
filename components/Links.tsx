import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/Home.module.css";

export const Links = () => {
  return (
    <div className={``}>
      <section className={`max-w-7xl mx-auto md:px-8 py-60`}>
        <div className="p-4 md:p-8 pb-16 text-3xl text-center decoration-yellow-500">
          do not hesitate to contact me :))
        </div>
        <div className="max-w-max text-lg md:text-xl mx-auto">
          <div className="flex flex-col md:flex-row content-center items-center p-4">
            <a
              href="https://linkedin.com/in/nikolas-tomastik"
              className="transition hover:text-yellow-400 w-24 px-4 text-center"
            >
              {/* @ts-ignore */}
              <FontAwesomeIcon size="3x" icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://linkedin.com/in/nikolas-tomastik"
              className="transition underline decoration-yellow-600 hover:decoration-yellow-400"
            >
              linkedin.com/in/nikolas-tomastik
            </a>
          </div>
          <div className="flex flex-col md:flex-row content-center items-center p-4">
            <a
              href="https://github.com/yimejky"
              className="transition hover:text-yellow-400 w-24 px-4 text-center"
            >
              {/* @ts-ignore */}
              <FontAwesomeIcon size="3x" icon="fa-brands fa-github" />
            </a>
            <a
              href="https://github.com/yimejky"
              className="transition underline decoration-yellow-600 hover:decoration-yellow-400"
            >
              github.com/yimejky
            </a>
          </div>
          <div className="flex flex-col md:flex-row content-center items-center p-4">
            <a
              href="https://instagram.com/yimejky"
              className="transition hover:text-yellow-400 w-24 px-4 text-center"
            >
              {/* @ts-ignore */}
              <FontAwesomeIcon size="3x" icon="fa-brands fa-instagram" />
            </a>
            <a
              href="https://instagram.com/yimejky"
              className="transition underline decoration-yellow-600 hover:decoration-yellow-400"
            >
              instagram.com/yimejky
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

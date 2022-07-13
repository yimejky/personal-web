import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Links = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-60">
      <div className="max-w-max text-xl mx-auto">
        <div className="flex content-center items-center p-4">
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
        <div className="flex content-center items-center p-4">
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
      </div>
    </section>
  );
};

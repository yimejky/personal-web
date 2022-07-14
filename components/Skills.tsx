import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillTag: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div
      className="
        bg-gray-600 text-yellow-500
       rounded-md border-2 border-yellow-500 border-solid text-sm
       font-bold inline-block px-2 py-1 m-1
       "
    >
      {children}
    </div>
  );
};

export const Skills = () => {
  const categories = [];
  const skills = [
    {
      text: "tech enthusiast",
    },
    {
      text: "engineer",
    },
    {
      text: "JS/TS developer",
    },
    {
      text: "IT nerd",
    },
    {
      text: "data scientist",
    },
    {
      text: "script lover",
    },
    {
      text: "machine learning",
    },
    {
      text: "deep learning",
    },
    {
      text: "C/C++ pointers fan",
    },
    // tech
    {
      text: "web",
    },
    {
      text: "node.js",
    },
    {
      text: "react.js",
    },
    {
      text: "webpack",
    },
    {
      text: "socket.io",
    },
    {
      text: "python",
    },
    {
      text: "jupyter",
    },
    {
      text: "xslt",
    },
    // css
    {
      text: "bootstrap",
    },
    {
      text: "tailwind",
    },
    // DB
    {
      text: "mongoDB",
    },
    {
      text: "redis",
    },
    {
      text: "postgreSQL",
    },
    {
      text: "firebase",
    },
    // DEVOPS
    {
      text: "docker",
    },
    {
      text: "kubernetes",
    },
    {
      text: "linux",
    },
    {
      text: "bash",
    },
  ];

  return (
    <section className="bg-yellow-50 text-black">
      <div className="mx-auto max-w-7xl px-8 py-36">
        <div className="pb-6 text-4xl text-center underline decoration-yellow-500">
          me??
          <FontAwesomeIcon
            className="ml-1"
            // @ts-ignore
            icon="fa-solid fa-person"
            size="sm"
          />
        </div>
        <div className="pt-8">
          <div className="mx-auto max-w-xl flex flex-wrap justify-center">
            {skills.map(({ text }) => {
              return <SkillTag key={text}>{text}</SkillTag>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

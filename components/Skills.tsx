import { skills } from "../model/skills";

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
  return (
    <div className="mx-auto max-w-7xl px-8 py-20">
      <div className="pb-8 text-4xl text-center">
        <span className="underline decoration-yellow-500">
          definitely not random gibberish (skills)
        </span>
        <span>🔨</span>
      </div>
      <div>
        <div className="mx-auto max-w-xl flex flex-wrap justify-center">
          {skills.map(({ text }) => {
            return <SkillTag key={text}>{text}</SkillTag>;
          })}
        </div>
      </div>
    </div>
  );
};

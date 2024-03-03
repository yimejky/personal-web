import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { titles } from "../model/titles";

const TitleTag: React.FC<{ children: string }> = ({ children }) => {
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

export const Titles = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16">
      <div className="pb-6 text-4xl text-center">
        <span className="underline decoration-yellow-500">me??</span>
        <FontAwesomeIcon
          className="ml-1"
          // @ts-ignore
          icon="fa-solid fa-person"
        />
      </div>
      <div className="text-center text-2xl pb-8">
        I make the computer go *BEEP BOOP BEEP*
        <br /> Give me some engineering 😁
      </div>
      <div>
        <div className="mx-auto max-w-xl flex flex-wrap justify-center">
          {titles.map(({ text }) => {
            return <TitleTag key={text}>{text}</TitleTag>;
          })}
        </div>
      </div>
    </div>
  );
};

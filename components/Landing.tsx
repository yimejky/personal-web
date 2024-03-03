import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { shuffle } from "../utils/shuffle";

export const Landing = () => {
  const [phrases, setPhrases] = useState<string[]>([]);

  useEffect(() => {
    setPhrases(
      shuffle([
        "char *randomCoolVariable = &coolerVariable",
        "trust me I am engineer",
        "tmpFinalFinalFinal.psd",
        "AI is just a bunch of if and else",
        "testing only in production",
        "btw I do not use Arch",
        "StackOverflow: where copy-pasting is an art form",
        "Just one more line of code... said every programmer ever.",
        "Coffee: the lifeblood of programmers everywhere.",
        "Meetings: where minutes are kept and hours are lost.",
      ])
    );
  }, []);

  {
    /* landing visual, animation, photo,  */
  }
  return (
    <div className={`relative overflow-hidden`}>
      <section className="max-w-7xl mx-auto px-8 py-32 md:py-72">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="p-8 grid place-content-center">
            <div className="text-3xl">I&#39;m</div>
            <div className="font-bold text-6xl">Nikolas Tomaštík</div>
            <div className="text-4xl mt-1 underline decoration-yellow-400 text-right">
              software engineer
            </div>
            <div className="text-2xl mt-1 text-gray-400 text-right">
              from Slovakia
            </div>
          </div>
          <div className="shrink-0 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-96 w-96 object-cover rounded-lg"
              src="/profile.jpg"
              alt="photo of me"
            />
          </div>
        </div>
      </section>
      <div className={style.animation}>
        {phrases.map((phrase, index) => (
          <div key={index} className={style.subanimation}>
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
};

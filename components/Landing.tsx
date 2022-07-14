import style from "../styles/Home.module.css";

export const Landing = () => {
  {
    /* landing visual, animation, photo,  */
  }
  return (
    <div className={`relative overflow-hidden`}>
      <section className="max-w-7xl mx-auto px-8 py-32 md:py-72">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="shrink-0 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-96 w-96 object-cover rounded-lg"
              src="/profile.jpg"
              alt="photo of me"
            />
          </div>
          <div className="p-8 grid place-content-center">
            <div className="text-3xl">I&#39;m</div>
            <div className="font-bold text-5xl">Nikolas Tomaštík</div>
            <div className="text-4xl mt-1 underline decoration-yellow-400 text-right">
              software engineer
            </div>
            <div className="text-3xl mt-1 text-gray-400 text-right">
              from Slovakia
            </div>
          </div>
        </div>
      </section>
      <div className={style.animation}>
        <div className={style.subanimation}>
          char *randomCoolVariable = &coolerVariable
        </div>
        <div className={style.subanimation}>trust me I am engineer</div>
        <div className={style.subanimation}>tmpFinalFinalFinal.psd</div>
        <div className={style.subanimation}>
          AI is just a bunch of if and else
        </div>
        <div className={style.subanimation}>testing only in production</div>
        <div className={style.subanimation}>btw I do not use Arch</div>
      </div>
    </div>
  );
};

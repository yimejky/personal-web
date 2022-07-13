export const Landing = () => {
  {
    /* landing visual, animation, photo,  */
  }
  return (
    <section className="max-w-7xl mx-auto px-8 py-72">
      <div className="flex justify-center">
        <div className="shrink-0">
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
  );
};

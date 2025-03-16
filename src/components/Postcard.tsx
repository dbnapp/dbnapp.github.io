import React from "react";

export const Postcard = () => {
  return (
    <div className="font-[IndieFlower] rounded md:w-[66rem] w-full h-[45rem] p-6 bg-[repeating-linear-gradient(135deg,#E77F7F_1rem,#E77F7F_3rem,white_3rem,white_5rem,#71A6E5_5rem,#71A6E5_7rem,white_7rem,white_9rem)]">
      <div className="h-full overflow-auto bg-white rounded border-2 border-solid border-black/70">
        <div className=" h-full overflow-hidden flex justify-between">
          <div className="flex-1 p-6 overflow-auto">
            <div className="text-xl flex flex-col gap-4">
              <p className="text-4xl">Hey there, old friend </p>
              <p>It's been too long.</p>

              <p>
                If you're reading this, I hope life has been kind to you. It's
                me, Daryl, and these days, I spend my time as a Senior Software
                Engineer at The Washington Post, crafting the web with HTML,
                CSS, JavaScript, TypeScript, React, and all the usual suspects.
              </p>

              <p>
                Home is in New Jersey, where I live with my incredible wife and
                our two beautiful sons. Life is busy, chaotic, and absolutely
                wonderful. When I'm not coding, you’ll find me making memories
                with them, whether it’s a family adventure or just a quiet night
                in.
              </p>
              <p>
                And when I steal a little time for myself? You’ll probably catch
                me throwing hands in Street Fighter, catching Pokémon, or
                locking into a match of Marvel Rivals. Music is always playing
                in the background—lately, I've been obsessed with the nostalgic,
                dreamy sounds of city pop. If you've never heard it, I hope
                you’ll take a moment to enjoy some.
              </p>
              <p>
                No matter how much time has passed, it’s always good to
                reconnect. So stay a while, and let’s pick up where we left off.
              </p>
            </div>
          </div>
          <div className="my-7 border border-solid border-black/70"></div>
          <div className="flex-1 p-6">
            <div>postage stamp</div>
            <div>daryl brendt napp</div>
            <div>github.com/dbnapp</div>
            <div>linkedin.com/in/darylnapp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Stamp } from "./Stamp";

export const Postcard = () => {
  return (
    <div className="font-[IndieFlower] rounded md:w-[66rem] w-full h-[50rem] p-6 bg-[repeating-linear-gradient(135deg,#E77F7F_1rem,#E77F7F_3rem,white_3rem,white_5rem,#71A6E5_5rem,#71A6E5_7rem,white_7rem,white_9rem)]">
      <div className="h-full overflow-auto bg-white rounded border-2 border-solid border-gray-600">
        <div className=" h-full overflow-hidden flex justify-between">
          <div className="flex-1 p-6 overflow-auto">
            <div className="text-xl flex flex-col gap-4">
              <p className="text-4xl">Hey there, old friend </p>
              <p>It's been too long.</p>

              <p>
                If you're reading this, I hope life has been kind to you. These
                days, I spend my time as a Senior Software Engineer at The
                Washington Post, crafting the web with TypeScript, React, and
                all the usual suspects.
              </p>

              <p>
                I still live in New Jersey with my incredible wife and our two
                beautiful sons. Life is busy, chaotic, and absolutely wonderful.
                When I'm not coding, you'll find me making memories with them,
                whether it's a family adventure or just a quiet night in.
              </p>
              <p>
                And when I steal a little time for myself? You'll probably catch
                me throwing hands in Street Fighter, catching Pokémon, or
                locking into a match of Marvel Rivals. When it comes to music,
                lately I've been obsessed with the nostalgic, dreamy sounds of
                city pop. If you've never heard it, I hope you'll take a moment
                to enjoy some.
              </p>
              <p>
                No matter how much time has passed, it's always good to
                reconnect. So stay a while, and let's pick up where we left off.
              </p>
            </div>
          </div>
          <div className="my-7 border border-solid border-gray-500"></div>
          <div className="flex-1 p-6 flex flex-col text-2xl gap-8">
            <div className="h-60">
              <div className="flex justify-end">
                <Stamp />
              </div>
            </div>
            <div className="flex flex-col text-4xl gap-8 px-5">
              <div className="border-b-2 border-b-gray-300">
                Daryl Brendt Napp
              </div>
              <div className="border-b-2 border-b-gray-300">
                <a href="mailto:dbnappdev@gmail.com" className=" flex gap-4">
                  <img
                    className="h-8"
                    src={new URL(
                      "../assets/gmail.webp",
                      import.meta.url
                    ).toString()}
                  />
                  dbnappdev@gmail.com
                </a>
              </div>
              <div className="border-b-2 border-b-gray-300">
                <a href="https://github.com/dbnapp" target="_blank">
                  github.com/dbnapp
                </a>
              </div>
              <div className="border-b-2 border-b-gray-300">
                <a href="https://linkedin.com/in/darylnapp" target="_blank">
                  linkedin.com/in/darylnapp
                </a>
              </div>
              <div className="border-b-2 border-b-gray-300 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

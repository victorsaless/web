import "../styles/main.css";
import logo from "../assets/logo.png";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="absolute bottom-0 left-0 right-0 max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" className="w-56" />

      <h1 className="text-2xl font-black text-white ">
        {" "}
        Venha,{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text ">
          {" "}
          Jogue{" "}
        </span>{" "}
        conosco
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 ">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-1.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-2.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-3.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-4.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter-Strike
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-5.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Game-6.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              league of legends
            </strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anuncios</span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2a2634] px-4 py-6 flex justify-between items-center">
          <div>
            {" "}
            <strong className="text-2xl font-black text-white block">
              Esta sozinho nessa jornada?
            </strong>
            <span className="text-zinc-400 text-base block">
              Publique um anuncio para encontrar novos players
            </span>
          </div>
          <button className="px-4 py-3 bg-violet-500 text-transparent rounded hover: hover:bg-button-gradient">
            <h1 className=" text-transparent bg-white hover:bg-black bg-clip-text flex items-center gap-3">
              <MagnifyingGlassPlus size={24} className="text-white" />
              Publicar anuncios
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

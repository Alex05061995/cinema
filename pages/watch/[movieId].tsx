import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { title } from "process";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const {data} = useMovie(String(movieId));

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center flex-row gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer"  size={40}/>
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching </span>
          {data?.title}
        </p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={data?.videoUrl}></video>
    </div>
  );
};

export default Watch;

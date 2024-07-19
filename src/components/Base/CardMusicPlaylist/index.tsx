import React from "react";

import Image from "next/image";

const CardMusicPlaylist: React.FC<CardMusicPlaylistProps> = ({
  imageSrc,
  artist,
  title,
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          style={{ objectFit: "contain", height: "170px", width: "100%" }}
          src={imageSrc}
          sizes="100vw"
          alt={title}
          height={0}
          width={0}
        />
        <div className="px-3 py-4">
          <div className="font-bold text-lg mb-1">{title}</div>
          <p className="text-gray-500 text-base">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMusicPlaylist;

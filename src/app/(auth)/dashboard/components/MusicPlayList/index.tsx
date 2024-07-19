"use client";

import React, { useState } from "react";

import { CardMusicPlaylist, Section, Dialog } from "@/components";
import { useToggle } from "@/hooks";

const MusicPlayList: React.FC<MusicPlayListProps> = ({ data = [] }) => {
  const { isToggle, onToggle } = useToggle(false);
  const [dataId, setDataId] = useState<string>();
  const playlistDetail = data.find(({ id }) => id === dataId);
  const onClickPlaylist = (id: string) => {
    onToggle();
    setDataId(id);
  };

  return (
    <Section title="Music Playlist">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {data.map(({ artist, image, title, id }, playListIndex) => (
          <CardMusicPlaylist
            onClick={() => {
              onClickPlaylist(id);
            }}
            key={playListIndex}
            imageSrc={image}
            artist={artist}
            title={title}
          />
        ))}
      </div>

      <Dialog onClose={onToggle} onOk={onToggle} isOpen={isToggle}>
        <div className="font-bold text-lg mb-1">{playlistDetail?.title}</div>
        <p className="text-gray-500 text-base">{playlistDetail?.artist}</p>
      </Dialog>
    </Section>
  );
};

export default MusicPlayList;

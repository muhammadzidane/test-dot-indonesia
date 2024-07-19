import React from "react";

import { CardMusicPlaylist, Section } from "@/components";

const MusicPlayList: React.FC<MusicPlayListProps> = ({ data = [] }) => {
  return (
    <Section title="Music Playlist">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {data.map(({ artist, image, title }, playListIndex) => (
          <CardMusicPlaylist
            key={playListIndex}
            imageSrc={image}
            artist={artist}
            title={title}
          />
        ))}
      </div>
    </Section>
  );
};

export default MusicPlayList;

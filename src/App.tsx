import React, { useEffect, useState } from "react";
import MusicCover from "./components/MusicCover";
import { Container } from "./styles";

import Controls from "./components/Controls";
import { useAudioPlayerContext } from "./components/AudioPlayerContext/context";
import { tracks } from "./constants/tracks";

function App() {
  const [currentTrack, setCurrentTrack] = useState<typeof tracks[0]>(tracks[0]);
  const { trackIndex } = useAudioPlayerContext();

  useEffect(() => {
    setCurrentTrack(tracks[trackIndex]);
  }, [trackIndex]);
  return (
    <Container>
      <MusicCover
        coverArtSrc={currentTrack.image}
        songStatus={"Now Playing"}
        songTitle={currentTrack.title}
        artistName={currentTrack.artist}
        albumName={currentTrack.album}
      />
      <Controls />
    </Container>
  );
}

export default App;

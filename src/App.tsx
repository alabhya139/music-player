import React from "react";
import MusicCover from "./components/MusicCover";
import { Container } from "./styles";

import COVER_ART from "./assets/images/maad_city.png";
import Controls from "./components/Controls";
import AudioPlayerProvider from "./components/AudioPlayerContext";

function App() {
  return (
    <AudioPlayerProvider>
      <Container>
        <MusicCover
          coverArtSrc={COVER_ART}
          songStatus={"Now Playing"}
          songTitle={"Money Trees"}
          artistName={"Kendrick Lamar"}
          albumName={"good kid, m.A.A.d city"}
        />
        <Controls />
      </Container>
    </AudioPlayerProvider>
  );
}

export default App;

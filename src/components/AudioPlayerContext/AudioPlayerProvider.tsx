import React, { useMemo, useState } from "react";
import AudioPlayerContext from "./context";

interface IAudioPlayerProviderProps {
  children: React.ReactNode;
}

function AudioPlayerProvider({ children }: IAudioPlayerProviderProps) {
  const [isActionEnabled, setActionEnabled] = useState<boolean>(true);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const values = useMemo(
    () => ({
      isActionEnabled,
      setActionEnabled,
      trackIndex,
      setTrackIndex,
      trackProgress,
      setTrackProgress,
      isPlaying,
      setIsPlaying,
    }),
    [isActionEnabled, trackIndex, trackProgress, isPlaying]
  );
  return (
    <AudioPlayerContext.Provider value={values}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export default AudioPlayerProvider;

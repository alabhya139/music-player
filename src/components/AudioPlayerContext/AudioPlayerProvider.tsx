import React, { useMemo, useState } from "react";
import AudioPlayerContext from "./context";

interface IAudioPlayerProviderProps {
  children: React.ReactNode;
}

function AudioPlayerProvider({ children }: IAudioPlayerProviderProps) {
  const [isActionEnabled, setActionEnabled] = useState<boolean>(true);
  const values = useMemo(
    () => ({ isActionEnabled, setActionEnabled }),
    [isActionEnabled]
  );
  return (
    <AudioPlayerContext.Provider value={values}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export default AudioPlayerProvider;

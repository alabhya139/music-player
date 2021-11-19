// libs
import { createContext, useContext } from "react";

interface ACLContext {
  isActionEnabled: boolean;
  setActionEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: ACLContext = {
  isActionEnabled: true,
  setActionEnabled: () => {},
};

const AudioPlayerContext = createContext(initialValue);

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);

export default AudioPlayerContext;

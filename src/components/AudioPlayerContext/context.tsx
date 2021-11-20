// libs
import { createContext, useContext } from "react";

interface IAudioPlayerContextProps {
  isActionEnabled: boolean;
  setActionEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  trackIndex: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  trackProgress: number;
  currentPercentage: number;
  setTrackProgress: React.Dispatch<React.SetStateAction<number>>;
  toPrevTrack: VoidFunction;
  toNextTrack: VoidFunction;
  onScrub: (value: number) => void;
  onScrubEnd: VoidFunction;
  audioRef?: React.MutableRefObject<HTMLAudioElement>;
  duration: number;
}

const initialValue: IAudioPlayerContextProps = {
  isActionEnabled: true,
  setActionEnabled: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
  trackIndex: 0,
  setTrackIndex: () => {},
  trackProgress: 0,
  setTrackProgress: () => {},
  toPrevTrack: () => {},
  toNextTrack: () => {},
  onScrub: () => {},
  onScrubEnd: () => {},
  currentPercentage: 0,
  duration: 0,
};

const AudioPlayerContext = createContext(initialValue);

export const useAudioPlayerContext = () => useContext(AudioPlayerContext);

export default AudioPlayerContext;

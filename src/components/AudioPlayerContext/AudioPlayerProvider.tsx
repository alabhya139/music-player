import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { tracks } from "../../constants/tracks";
import AudioPlayerContext from "./context";

interface IAudioPlayerProviderProps {
  children: React.ReactNode;
}

function AudioPlayerProvider({ children }: IAudioPlayerProviderProps) {
  const [isActionEnabled, setActionEnabled] = useState<boolean>(true);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  const { audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const isReady = useRef(false);

  useEffect(() => {
    const { duration } = audioRef.current;
    setCurrentPercentage((trackProgress / duration) * 100);
  }, [trackProgress]);

  const toPrevTrack = useCallback(() => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }, [trackIndex]);

  const toNextTrack = useCallback(() => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  }, [trackIndex]);

  const startTimer = useCallback(() => {
    // Clear any timers already running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, [toNextTrack]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, startTimer]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex, startTimer, audioSrc]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const onScrub = useCallback((value: number) => {
    // Clear any timers already running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const { duration } = audioRef.current;
    audioRef.current.currentTime = (value / 100) * duration;
    setTrackProgress(audioRef.current.currentTime);
  }, []);

  const onScrubEnd = useCallback(() => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }, [startTimer, isPlaying]);

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
      toPrevTrack,
      toNextTrack,
      onScrub,
      onScrubEnd,
      currentPercentage,
      duration: audioRef.current.duration,
    }),
    [
      isActionEnabled,
      trackIndex,
      trackProgress,
      isPlaying,
      toPrevTrack,
      toNextTrack,
      onScrubEnd,
      onScrub,
      currentPercentage,
    ]
  );
  return (
    <AudioPlayerContext.Provider value={values}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export default AudioPlayerProvider;

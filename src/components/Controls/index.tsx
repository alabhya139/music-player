import React, { memo } from "react";
import { useAudioPlayerContext } from "../AudioPlayerContext/context";
import IconButton from "../IconButton";
import {
  Container,
  AudioAction,
  LeftSection,
  CenterSection,
  RightSection,
  AudioSeek,
  AudioSeekControl,
  AudioSeekTimer,
  StyledPauseIcon,
  StyledChevronLeftIcon,
  StyledChevronRightIcon,
  StyledSlider,
  ControlsToggle,
  CurrentPlayTime,
  TotalPlayTime,
  StyledRepeatOneRoundedIcon,
  StyledRepeatRoundedIcon,
  StyledShuffleRoundedIcon,
  StyledEqualizerRoundedIcon,
  StyledPlayIcon,
} from "./styles";

function Controls() {
  const {
    setActionEnabled,
    isActionEnabled,
    isPlaying,
    setIsPlaying,
    toPrevTrack,
    toNextTrack,
    onScrub,
    onScrubEnd,
    currentPercentage,
    trackProgress,
    duration,
  } = useAudioPlayerContext();
  const toggleControls = () => {
    setActionEnabled((prevState) => !prevState);
  };
  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };
  const currentDuration = `${new Date(trackProgress * 1000)
    .toISOString()
    .substr(14, 5)}:00`;
  const totalDuration =
    duration > 0
      ? `${new Date(duration * 1000).toISOString().substr(14, 5)}:00`
      : "00:00:00";
  return (
    <Container isActionEnabled={isActionEnabled}>
      <ControlsToggle onClick={toggleControls} />
      <AudioAction>
        <LeftSection>
          <StyledShuffleRoundedIcon />
          <StyledRepeatOneRoundedIcon />
        </LeftSection>
        <CenterSection>
          <IconButton width={44} onClickHandler={toPrevTrack}>
            <StyledChevronLeftIcon />
          </IconButton>
          <IconButton width={72} onClickHandler={togglePlay}>
            {isPlaying ? (
              <StyledPauseIcon fontSize="large" />
            ) : (
              <StyledPlayIcon fontSize="large" />
            )}
          </IconButton>
          <IconButton width={44} onClickHandler={toNextTrack}>
            <StyledChevronRightIcon />
          </IconButton>
        </CenterSection>
        <RightSection>
          <StyledRepeatRoundedIcon />
          <StyledEqualizerRoundedIcon />
        </RightSection>
      </AudioAction>
      <AudioSeek>
        <AudioSeekControl>
          <StyledSlider
            size="medium"
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              onScrub(value as number);
            }}
            onKeyUp={onScrubEnd}
            onMouseUp={onScrubEnd}
            value={currentPercentage}
          />
        </AudioSeekControl>
        <AudioSeekTimer>
          <CurrentPlayTime>{currentDuration}</CurrentPlayTime>
          <TotalPlayTime>{totalDuration}</TotalPlayTime>
        </AudioSeekTimer>
      </AudioSeek>
    </Container>
  );
}

export default memo(Controls);

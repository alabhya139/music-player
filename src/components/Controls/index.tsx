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
} from "./styles";

function Controls() {
  const { setActionEnabled, isActionEnabled } = useAudioPlayerContext();
  const toggleControls = () => {
    setActionEnabled((prevState) => !prevState);
  };
  return (
    <Container isActionEnabled={isActionEnabled}>
      <ControlsToggle onClick={toggleControls} />
      <AudioAction>
        <LeftSection>
          <StyledShuffleRoundedIcon />
          <StyledRepeatOneRoundedIcon />
        </LeftSection>
        <CenterSection>
          <IconButton width={40} onClickHandler={() => {}}>
            <StyledChevronLeftIcon />
          </IconButton>
          <IconButton width={64} onClickHandler={() => {}}>
            <StyledPauseIcon fontSize="large" />
          </IconButton>
          <IconButton width={40} onClickHandler={() => {}}>
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
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </AudioSeekControl>
        <AudioSeekTimer>
          <CurrentPlayTime>2:01:00</CurrentPlayTime>
          <TotalPlayTime>4:16:00</TotalPlayTime>
        </AudioSeekTimer>
      </AudioSeek>
    </Container>
  );
}

export default memo(Controls);

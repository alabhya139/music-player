import styled from "styled-components";

import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";

import Slider from "@mui/material/Slider";

interface IContainerProps {
  isActionEnabled: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 44vw;
  height: 260px;
  background: #f7f7f7;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 60px 100px rgba(65, 44, 100, 0.3);
  border-radius: 60px;
  margin-left: ${({ isActionEnabled }) =>
    isActionEnabled ? "-48px" : "-44vw"};
  transition: margin 500ms ease-in-out;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const AudioAction = styled.div`
  margin-bottom: 54px;
  margin-left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  margin-right: 48px;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  margin-left: 48px;
`;

export const AudioSeek = styled.div`
  width: 80%;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

export const AudioSeekControl = styled.div``;

export const AudioSeekTimer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CurrentPlayTime = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #aa9bbe;
`;

export const TotalPlayTime = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #aa9bbe;
`;

export const StyledPauseIcon = styled(PauseRoundedIcon)`
  background: linear-gradient(
    159.16deg,
    #7e74ed 26.46%,
    rgba(63, 45, 137, 0) 116.55%
  );
  box-shadow: inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0px 5px 10px #372e98);
  color: #ffffff;
  border-radius: 60px;
  &.MuiSvgIcon-root {
    font-size: 32px;
    padding: 8px;
  }
  cursor: pointer;
`;

export const StyledChevronLeftIcon = styled(ChevronLeftRoundedIcon)`
  background: linear-gradient(
    159.16deg,
    #7e74ed 26.46%,
    rgba(63, 45, 137, 0) 116.55%
  );
  box-shadow: inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0px 5px 10px #372e98);
  color: #ffffff;
  border-radius: 60px;
  &.MuiSvgIcon-root {
    font-size: 24px;
    padding: 2px;
  }
  cursor: pointer;
`;

export const StyledChevronRightIcon = styled(ChevronRightRoundedIcon)`
  background: linear-gradient(
    159.16deg,
    #7e74ed 26.46%,
    rgba(63, 45, 137, 0) 116.55%
  );
  box-shadow: inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0px 5px 10px #372e98);
  color: #ffffff;
  font-weight: 800;
  border-radius: 60px;
  &.MuiSvgIcon-root {
    font-size: 24px;
    padding: 2px;

    path {
      stroke-width: 8px;
    }
  }
  cursor: pointer;
`;

export const StyledSlider = styled(Slider)`
  background: #dedde3;
  box-shadow: -3px -3px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.05),
    inset 3px 3px 5px rgba(0, 0, 0, 0.05), inset -3px -3px 5px #ffffff;
  border-radius: 37px;
  display: flex;
  &.MuiSlider-root {
    color: #7e74ed;
    padding: 4px 0;
    height: 4px;
    .MuiSlider-thumb {
      border: 6px solid #fff;
      box-sizing: content-box;
      box-shadow: 0px 10px 10px rgb(0 0 0 / 15%),
        inset 10px 10px 10px rgb(0 0 0 / 5%);
    }
    .MuiSlider-rail {
      opacity: 0;
    }
    .MuiSlider-track {
      left: 1% !important;
    }
  }
`;

export const ControlsToggle = styled.div`
  width: 5px;
  height: 80px;
  background: #e1deea;
  border-radius: 13px;
  position: absolute;
  right: 16px;
  top: calc(50% - 40px);
  cursor: pointer;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #cdc9d8;
  }
`;

export const StyledRepeatOneRoundedIcon = styled(RepeatOneRoundedIcon)`
  color: #c7c5d0;
  cursor: pointer;
  &.MuiSvgIcon-root {
    font-size: 18px;
  }
  &:hover {
    color: #cdc9d8;
  }
`;

export const StyledRepeatRoundedIcon = styled(RepeatRoundedIcon)`
  color: #c7c5d0;
  color: #c7c5d0;
  margin-right: 32px;
  cursor: pointer;
  &.MuiSvgIcon-root {
    font-size: 18px;
  }
  &:hover {
    color: #cdc9d8;
  }
`;

export const StyledShuffleRoundedIcon = styled(ShuffleRoundedIcon)`
  color: #c7c5d0;
  margin-right: 32px;
  cursor: pointer;
  &.MuiSvgIcon-root {
    font-size: 18px;
  }
  &:hover {
    color: #cdc9d8;
  }
`;

export const StyledEqualizerRoundedIcon = styled(EqualizerRoundedIcon)`
  color: #c7c5d0;
  cursor: pointer;
  &.MuiSvgIcon-root {
    font-size: 18px;
  }
  &:hover {
    color: #cdc9d8;
  }
`;

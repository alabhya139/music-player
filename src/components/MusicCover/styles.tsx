import styled from "styled-components";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ShareIcon from "@mui/icons-material/Share";

interface IIconProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 44vw;
  height: 361px;
  background: #f8f8f8;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 40px 30px 80px rgba(54, 48, 116, 0.3);
  border-radius: 60px;
  display: flex;
  padding: 50px;
  z-index: 2;
  position: relative;
`;

export const CoverSection = styled.div`
  width: calc(50%);
  height: calc(100%);
  background: #f8f8f8;
  border-radius: 40px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    inset -10px -10px 20px #ffffff;
  filter: drop-shadow(-10px -10px 15px #ffffff)
    drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.05));
`;

export const CoverArt = styled.img`
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  border-radius: 30px;
  box-shadow: inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  filter: drop-shadow(5px 5px 10px rgba(37, 5, 57, 0.51));
`;

export const SongInfoSection = styled.div`
  width: calc(50% - 45px);
  padding: 0 45px;
`;

export const SongStatus = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  font-feature-settings: "liga" off;

  color: #aeaeae;

  text-shadow: 1px 1px 1px #ffffff;
  margin-bottom: 40px;
  margin-top: 16px;
`;

export const SongTitle = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  font-feature-settings: "liga" off;

  color: #86748d;
  margin-bottom: 16px;
`;

export const ArtistName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-feature-settings: "liga" off;

  color: #bfb9be;
  margin-bottom: 16px;
`;

export const AlbumName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  font-feature-settings: "liga" off;

  color: #bfb8be;
  margin-bottom: 34px;
`;

export const ActionButtons = styled.div`
  display: flex;
`;

export const StyledFavouriteIcon = styled(FavoriteIcon)<IIconProps>`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 500ms ease-in;
  }
  color: ${({ active }) => (active ? `#5F30C1` : `#c7c5d0`)};
`;

export const StyledPlaylistAddIcon = styled(PlaylistAddIcon)<IIconProps>`
  color: ${({ active }) => (active ? `#5F30C1` : `#c7c5d0`)};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 500ms ease-in;
  }
`;

export const StyledShareIcon = styled(ShareIcon)<IIconProps>`
  color: ${({ active }) => (active ? `#5F30C1` : `#c7c5d0`)};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 500ms ease-in;
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

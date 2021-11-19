import IconButton from "../../components/IconButton";
import React, { memo, useState } from "react";
import {
  Container,
  CoverArt,
  CoverSection,
  SongInfoSection,
  SongStatus,
  SongTitle,
  ArtistName,
  AlbumName,
  ActionButtons,
  StyledFavouriteIcon,
  StyledPlaylistAddIcon,
  StyledShareIcon,
  ControlsToggle,
} from "./styles";
import { useAudioPlayerContext } from "../AudioPlayerContext/context";

interface IMusicCoverProps {
  coverArtSrc: string;
  songStatus: string;
  songTitle: string;
  artistName: string;
  albumName: string;
}

function MusicCover({
  coverArtSrc,
  songStatus,
  songTitle,
  artistName,
  albumName,
}: IMusicCoverProps) {
  const [isFavouriteActive, setFavouriteActive] = useState<boolean>(false);
  const [isPlaylistAddActive, setPlaylistAddActive] = useState<boolean>(false);
  const [isShareActive, setShareActive] = useState<boolean>(false);

  const { isActionEnabled, setActionEnabled } = useAudioPlayerContext();

  const toggleControls = () => {
    setActionEnabled((prevState) => !prevState);
  };

  const favouriteHandler = () => {
    setFavouriteActive((prevState) => !prevState);
  };

  const playlistAddHandler = () => {
    setPlaylistAddActive((prevState) => !prevState);
  };

  const shareHandler = () => {
    setShareActive((prevState) => !prevState);
  };

  return (
    <Container>
      {!isActionEnabled && <ControlsToggle onClick={toggleControls} />}
      <CoverSection>
        <CoverArt src={coverArtSrc} />
      </CoverSection>
      <SongInfoSection>
        <SongStatus>{songStatus}</SongStatus>
        <SongTitle>{songTitle}</SongTitle>
        <ArtistName>{artistName}</ArtistName>
        <AlbumName>{albumName}</AlbumName>
        <ActionButtons>
          <IconButton onClickHandler={favouriteHandler}>
            <StyledFavouriteIcon active={isFavouriteActive} />
          </IconButton>
          <IconButton onClickHandler={playlistAddHandler}>
            <StyledPlaylistAddIcon active={isPlaylistAddActive} />
          </IconButton>
          <IconButton onClickHandler={shareHandler}>
            <StyledShareIcon active={isShareActive} />
          </IconButton>
        </ActionButtons>
      </SongInfoSection>
    </Container>
  );
}

export default memo(MusicCover);

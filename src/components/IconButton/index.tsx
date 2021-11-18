import React, { memo } from "react";
import { Container } from "./styles";

interface IIconButtonProps {
  children: React.ReactNode;
  onClickHandler: VoidFunction;
}

function IconButton({ children, onClickHandler }: IIconButtonProps) {
  return <Container onClick={onClickHandler}>{children}</Container>;
}

export default memo(IconButton);

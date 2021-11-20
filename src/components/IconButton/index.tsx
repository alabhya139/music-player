import React, { memo } from "react";
import { Container } from "./styles";

interface IIconButtonProps {
  children: React.ReactNode;
  width?: number;
  onClickHandler: VoidFunction;
}

function IconButton({ children, width, onClickHandler }: IIconButtonProps) {
  return (
    <Container width={width} onClick={onClickHandler}>
      {children}
    </Container>
  );
}

export default memo(IconButton);

import styled from "styled-components";

interface IContainerProps {
  width?: number;
}

export const Container = styled.div<IContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : "48px")};
  height: ${({ width }) => (width ? `${width}px` : "48px")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border-radius: 60px;
  margin-right: 24px;
  box-shadow: -10px -10px 15px #ffffff, 10px 10px 10px rgba(0, 0, 0, 0.05),
    inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #ffffff;
`;

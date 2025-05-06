import styled from "styled-components";

const SpacerDiv = styled.div`
  height: ${({ height }) => `${height}` || "0"};
  width: ${({ width }) => `${width}` || "0"};
`;

export default function Spacer({ height = 0, width = 0 }) {
  return <SpacerDiv height={height} width={width} />;
}
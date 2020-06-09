import styled from "styled-components";

let GridItem = styled.div`
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: ${(props) => props.columnEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  justify-self: stretch;
  align-self: stretch;
`;

export default GridItem;

import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  justify-items: stretch;
  align-items: center;
  justify-content: stretch;
  align-content: stretch;
  height: 97vh;
`;

export default GridContainer;

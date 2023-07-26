import styled from "styled-components";

export const Selected = styled.div`
  background: ${(props) => (props.selected ? "#D2691E" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#D2691E")};
  padding: 1em;
  border: 2px solid ${(props) => (props.selected ? "transparent" : "#D2691E")};
  margin-bottom: 1em;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #D2691E;
    color: #fff;
  }
`;

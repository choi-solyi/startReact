import styled from "styled-components";
const StyledA = styled.a.attrs((props) => ({
  target: "_BLANK", //attribute 미리 설정해줄수있음
}))`
  color: ${(props) => props.color};
`;

export default StyledA;

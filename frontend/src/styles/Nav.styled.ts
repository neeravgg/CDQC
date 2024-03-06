import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px 20px 20px;
  width: 100%;
  gap: 15px;

  h1 {
    font-size: 16px;
  }

  li {
    list-style-type: none;
  }

  .word-btn {
    border: 5px solid;
    padding: 8px;
    width: 120px;
  }

  .ul-btn {
    display: flex;
    gap: 50px;
    padding: 0;
  }

  .ul-word-btn {
    display: flex;
    gap: 25px;
    padding: 0;
  }
`;

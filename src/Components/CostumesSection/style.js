import styled from "styled-components";

export const CostumesSection = styled.section`
  padding: 97px;
  background: linear-gradient(rgba(1 1 1), rgba(54 54 54));
  position: relative;
  h2 {
    color: #fff;
  }


  @media (max-width: 768px) {
    padding: 60px 20px;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.section`
  overflow: hidden;
`;

export const Slider = styled.section`
  display: flex;
  z-index: 100;
`;

export const Slide = styled.div`
  flex-shrink: 0;
  width: 100%;
  position: relative;

  h1 {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 2em;
    color: #fff;
    z-index: 10;
    padding: 0px;
    top: 0;
    background: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 1.4em;
      padding: 0px;
    }
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 150px;
  right: 120px;
  left: 120px;
  bottom: 100px;

  @media (max-width: 768px) {
    width: 90%;
    left: 20px;
    bottom: 10px;
  }

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: #8B6914;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover,
    &:active {
      background: #fff;
      color: #8B6914;
      transform: scale(1.1);
    }
  }
`;

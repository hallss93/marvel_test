import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1400px;
`;

export const Image = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props) => props.position || 'center'};
    background-image: url(${(props) => props.url});
    transition: all 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    opacity: 0;
    transition: all 0.5s;
`;

export const ImageContainer = styled.div`
    width: 230px;
    height: 280px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
    transition: all 0.5s;

    &:hover {
      ${Overlay} {
        opacity: 1;
        background-color: rgb(0 0 0 / 40%);
      }
    }
`;

export const CardView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 1213px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 923px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 688px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 459px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  max-width: 230px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  cursor: pointer;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

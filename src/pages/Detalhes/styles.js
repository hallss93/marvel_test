import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  width: 100%;
  max-width: 1240px;
  padding: 0 30px;
  margin: 0 auto;
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
    min-width: 280px;
    height: 400px;
    margin-right: 50px;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
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

export const CardDetails = styled.div`
  padding: 50px 0;
  justify-content: initial;
  display: flex;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 800px) {
    display: inline;

    img {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 20px;
    }
    div h1 {
      font-size: 25px;
    }
  }
`;

export const CardDetailsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;

  h1 {
    margin-top: 0 !important;
  }
`;

export const BackButton = styled.div`
  font-size: 16px;
  font-weight: bold;
  width: 150px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px rgb(0 0 0 / 20%) solid;
  transition: 0.5s;

  &:hover {
      background-color: rgb(0 0 0 / 10%);
    }
`;

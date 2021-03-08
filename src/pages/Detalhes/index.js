import React, { useState, useEffect } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import { Container, CardDetails, CardDetailsInfo, ImageContainer, Image, Overlay, BackButton } from "./styles";
import { show } from "../../store/actions/characterAction";
import LoaderCustom from '../../components/LoaderCustom'
import Play from "../../assets/img/play.png"
import { useDispatch, useSelector } from "react-redux";

const Detalhes = (data) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [serie, setSerie] = useState(null)
  const navigation = useNavigate();

  const fetchChar = useSelector(({ character }) => character.character);

  useEffect(() => {
    dispatch(show(id))
  }, [])

  useEffect(() => {
    if (fetchChar !== null) {
      setSerie(fetchChar);
    }
  }, [fetchChar]);

  if (serie == null) {
    return (
      <div style={{ minHeight: 300, display: 'flex', justifyContent: 'center' }} >
        <LoaderCustom width={150} height={250} />
      </div >
    )
  }

  const getImage = () => {

    let url = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
    let haveImage = url !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    return (
      <ImageContainer >
        <Image position={haveImage ? 'center' : 'left'} url={url} />
        <Overlay>
          <img src={Play} alt="..." />
        </Overlay>
      </ImageContainer>
    )
  }

  return (
    <Container>
      <BackButton onClick={() => navigation("/")}>VOLTAR</BackButton>
      <CardDetails className={'animated fadeIn'}>
        {getImage()}
        <CardDetailsInfo>
          <div>
            <h1>{serie.name}</h1>
            <strong>Aparece em:</strong>
            <div>{serie.series.available} séries</div>
            <div>{serie.comics.available} Revistas em quadrinhos</div>
          </div>
          <div>
            <p>
              {serie.description}
            </p>
          </div>
        </CardDetailsInfo>
      </CardDetails>
    </Container>
  );
};

export default Detalhes;

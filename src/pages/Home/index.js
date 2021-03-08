import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CardView,
  CardDiv,
  ImageContainer,
  Image,
  Overlay,
} from "./styles";
import Select from "react-select";
import LoaderCustom from "../../components/LoaderCustom";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../store/actions/characterAction";
import Play from "../../assets/img/play.png";

const orderByOptions = [
  {
    label: "Nome crescente",
    value: "name",
  },
  {
    label: "Nome decrescente",
    value: "-name",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const limit = 30;
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(orderByOptions[1]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchChars = useSelector(({ character }) => character.characters);

  useEffect(() => {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (hasMore && !isLoading) {
          setPage((prev) => prev + 1);
          setIsLoading(true);
        }
      }
    };
  });

  useEffect(() => {
    if (fetchChars !== null) {
      if (fetchChars.length < limit) setHasMore(false);
      setSeries([...series, ...fetchChars]);
    }
  }, [fetchChars, series]);

  useEffect(() => {
    dispatch(fetch({ page, orderBy: orderBy.value, limit }));
  });

  const CardItem = ({ data, index }) => {
    const handleClick = () => {
      navigation(`/detalhes/${data.id}`);
    };
    let url = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    let haveImage =
      url !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    return (
      <CardDiv
        className={
          page === 1 && `animated fadeIn delay-${index > 10 ? 10 : index}00ms`
        }
        onClick={handleClick}
      >
        <ImageContainer>
          <Image position={haveImage ? "center" : "left"} url={url} />
          <Overlay>
            <img src={Play} alt="..." />
          </Overlay>
        </ImageContainer>
        <div>
          <h3>{data.name}</h3>
          <p>{data.description || "Sem descrição"}</p>
        </div>
      </CardDiv>
    );
  };

  if (series.length <= 0) {
    return (
      <div
        style={{ minHeight: 300, display: "flex", justifyContent: "center" }}
      >
        <LoaderCustom width={150} height={250} />
      </div>
    );
  }
  return (
    <Container>
      <Select
        styles={{
          control: (base) => ({
            ...base,
            height: "40px",
            width: 300,
            border: "1px solid #0000001F",
            borderRadius: " 4px",
            margin: 25,
          }),
        }}
        options={orderByOptions}
        value={orderBy}
        onChange={(value) => {
          setSeries([]);
          setPage(1);
          setOrderBy(value);
        }}
        placeholder="Ordenar por"
      />
      {series.length > 0 && (
        <CardView>
          {series.map((item, index) => (
            <CardItem data={item} index={index} key={index} />
          ))}
        </CardView>
      )}
      {isLoading && (
        <div
          style={{ minHeight: 300, display: "flex", justifyContent: "center" }}
        >
          <LoaderCustom spin width={100} height={100} />
        </div>
      )}
    </Container>
  );
};

export default Home;

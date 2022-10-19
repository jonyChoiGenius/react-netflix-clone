import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import "./Banner.css";
import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //get요청은 pending->result 순으로 넘어감. await는 result가 나올때까지 기다림.
    const request = await axios.get(requests.fetchNowPlaying);

    //20개의 nowPlaying중에 하나의 인덱스를 가져옴. random은 0~1미만, * 20 = 0~19
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    //results를 참조해서 가져온 id를 통해 디테일을 가져오기

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });

    //data안에 담긴 객체를 movie로 넘겨주기
    setMovie(movieDetail);

    //     Object
    // config: {transitiona: {…}, transformReques: Array(1), transformRespons: Array(1), timeou: 0, adapte: ƒ, …}
    // data: {adul: false, backdrop_pat: '/z8KsgBFtduX5bS1yVkjoGo4L7KJ.jpg', belongs_to_collectio: null, budge: 2800000, genre: Array(3), …}
    // headers: AxiosHeaders {cache-contro: 'public, max-age=28800', content-typ: 'application/json;charset=utf-8', eta: 'W/"27d3faf569ce785b0b6bc2e091ee0b18"', Symbol(defaults: null}
    // request: XMLHttpRequest {onreadystatechang: null, readyStat: 4, timeou: 0, withCredential: false, uploa: XMLHttpRequestUpload, …}
    // status: 200
    // statusText: ""
    // [[Prototype]]: Object
  };

  // const getMovieVideos = async () => {
  //   const request = await axios.get(`movie/${movie.id}/videos?api_key=${<<api_key>>}&language=en-US`)
  // }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            {movie.videos !== undefined && movie.videos.results[0] && (
              <button
                className="banner__button play"
                onClick={() => setIsClicked(true)}
              >
                Play
              </button>
            )}
            <button className="banner__button info">More Information</button>
          </div>

          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

//::after : 콘텐츠 끝 부분에 자식요소 컨텐츠를 생성한다.
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export default Banner;

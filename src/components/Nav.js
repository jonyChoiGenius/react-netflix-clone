import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  //   useEffect: 마운트 될 때에 부수적으로 실행되는 함수를 추가해준다.
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log("window.scrollY", window.scrollY);
  //     if (window.scrollY > 50) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // });

  //https://velog.io/@ljj3347/React스크롤위치-가져오기-코드
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const opa = position < 280 ? (position - 100) / 200 : 0.9;

  const handleChagne = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  // window.location.reload를 통해 클릭시에 새로고침 되도록.
  // &&을 통해 show의 상태가 false이면 false를 반환, true이면 nav__black를 반환
  return (
    // <nav className={`nav ${show && "nav__black"}`}>
    // RGBA를 이용해서 스크롤에 따라 투명도 바꾸기
    <nav className="nav" style={{ backgroundColor: `rgba(0,0,0, ${opa})` }}>
      <img
        alt="Netflix log"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload}
      />
      <input
        value={searchValue}
        onChange={handleChagne}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <img
        alt="User Logged In"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        className="nav__avatar"
      />
    </nav>
  );
}

export default Nav;

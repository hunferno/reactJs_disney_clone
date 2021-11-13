import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

function Home() {
  const moviesCollectionFromDB = collection(db, "movies");

  useEffect(() => {
    const getMoviesFromDB = async () => {
      try {
        const dataFromMoviesCollect = await getDocs(moviesCollectionFromDB);
        console.log(dataFromMoviesCollect);
      } catch (error) {
        alert(error.message);
      }
    };

    getMoviesFromDB();
  });

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw - 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`;

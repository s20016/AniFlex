import React from 'react';
import './css/main.css';
import { Route } from 'react-router-dom';

import MainNavbar from './components/Main/MainNavbar';
import AnimeMain from './components/Anime/AnimeMain';
import MangaMain from './components/Manga/MangaMain';
import MainTopScroll from './components/Main/MainTopScroll';

export default class App extends React.Component {

  render() {
    return (
      <>
        <MainNavbar/>
        <MainTopScroll showBelow={210} />
        <Route exact path="/Animate" component={AnimeMain} />
        <Route exact path="/Animate/Manga" component={MangaMain} />
      </>
    )
  }
}

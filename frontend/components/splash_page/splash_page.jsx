import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import SearchBar from '../navbar/search_bar';
import SongItem from './song_item';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionModalIsOpen: false, };

    this.toggleSessionModal = this.toggleSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  };

  componentDidMount() {
    this.props.requestAllSongs();
  };

  toggleSessionModal() {
    this.setState({ sessionModalIsOpen: !this.state.sessionModalIsOpen, });
  };

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { username: 'bueller', email: 'b@b.com', password: 'password' };
    this.props.login(demoUser);
  };

  grabTrendingSongs() {
    const { allSongs } = this.props;
    let songs = [];

    while (songs.length < 12) {
      const randIdx = Math.floor(Math.random() * allSongs.length);
      const randSong = allSongs[randIdx];
      if (randSong && !songs.includes(randSong)) songs.push(randSong);
    }

    return (songs);
  };

  render() {
    if (this.props.allSongs.length === 0) return null;

    const renderSessionForm = this.state.sessionModalIsOpen ?
      <SessionFormContainer toggleSessionModal={this.toggleSessionModal} /> : null

    const trendingSongs = this.grabTrendingSongs();
    const tsMid = Math.floor(trendingSongs.length / 2);
    const trendGroup1 = trendingSongs.slice(0, tsMid);
    const trendGroup2 = trendingSongs.slice(tsMid);

    const renderTrendingGroup1 = trendGroup1.map((song) => {
      return (
        <SongItem key={song.id} song={song} playSong={this.props.playSong} />
      );
    });
    const renderTrendingGroup2 = trendGroup2.map((song) => {
      return (
        <SongItem key={song.id} song={song} playSong={this.props.playSong} />
      );
    });

    return (
      <div className="splash-page">
        {renderSessionForm}
        <header>
          <div className="header-info">
            <div className="logo-banner">
              <div className="logo"></div>
              <h4>AudioCaelum</h4>
            </div>
            <div className="authorization">
              <Link
                to=""
                className="signin"
                onClick={this.toggleSessionModal}
              >
                Sign in
              </Link>
              <Link
                to=""
                className="signup"
                onClick={this.toggleSessionModal}
              >
                Create account
              </Link>
              <Link
                to=""
                className="demo-login"
                onClick={this.demoLogin}
              >
                Demo Login
              </Link>
            </div>
          </div>
          <div className="carousel"></div>
        </header>
        <section className="splash-search"><SearchBar /></section>
        <section className="splash-trending">
          <h2>Hear what's trending for free in the AudioCaelum community</h2>
          <div className="trending-songs">
            <div className="trending-group-1">
              {renderTrendingGroup1}
            </div>
            <div className="trending-group-2">
              {renderTrendingGroup2}
            </div>
            <div className="explore-trending">
              <Link
                to=''
                className="explore-music-btn"
                onClick={this.toggleSessionModal}
              >
                Explore more music
              </Link>
            </div>
          </div>
        </section>
        <section className="splash-mobile">
          <div className="mobile-caption">
            <h1>Never stop listening</h1>
            <p>
              AudioCaelum is available here only. But you can find really cool games & apps at these locations.
            </p>
            <div className="mobile-links">
              <div className="app-store">
                <a href='https://www.apple.com/itunes/charts/free-apps/'
                  target="_blank"
                >
                  <div className="app-store-img"></div>
                </a>
              </div>
              <div className="play-store">
                <a href='https://play.google.com/store/apps'
                  target="_blank"
                >
                  <div className="play-store-img"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="splash-creators">
          <div className="creators-caption">
            <h2>Calling all creators</h2>
            <p>
              Get on AudioCaelum <span>(and remember, you sell your soul)</span> to connect with fans & share your sounds. What are you waiting for? 😈
            </p>
            <Link
              to=""
              className="creators-start"
              onClick={this.toggleSessionModal}
            >
              Get started now
            </Link>
          </div>
        </section>
        <section className="splash-thanks">
          <h1>Thanks for listening. Now join in.</h1>
          <h3>
            Upload tracks, hear songs and sleep peacefully <span>(maybe)</span>. All for free <span>(sort of)</span>.
          </h3>
          <div className="signup-module">
            <Link
              to=''
              className="signup-large"
              onClick={this.toggleSessionModal}
            >
              Create account
            </Link>
          </div>
          <div className="account-exists">
            Already have an account?
            <Link
              to=''
              className="signin-large"
              onClick={this.toggleSessionModal}
            >
              Sign in
            </Link>
          </div>
        </section>
        <div className="footer-container">
          <footer>
            <div className="footer-links">
              There - Should be - Some - Links - Here -
              I will - Add - Those - Later
            </div>
            <div className="footer-lang">Language: English (US)</div>
          </footer>
        </div>
      </div>
    );
  };
};

export default SplashPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import { SplashHeader } from './splash_header';
import { SplashSearch } from './splash_search';
import SplashTrending from './splash_trending';

class SplashPage extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionModalIsOpen: false };

    this.toggleSessionModal = this.toggleSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    const { requestAllSongs } = this.props;
    requestAllSongs();
  }

  toggleSessionModal() {
    const { sessionModalIsOpen } = this.state;
    this.setState({ sessionModalIsOpen: !sessionModalIsOpen });
  }

  demoLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    const demoUser = {
      username: 'bueller',
      email: 'b@b.com',
      password: 'password',
    };
    login(demoUser);
  }

  grabTrendingSongs() {
    const { allSongs } = this.props;
    const songs = [];

    while (songs.length < 12) {
      const randIdx = Math.floor(Math.random() * allSongs.length);
      const randSong = allSongs[randIdx];
      if (randSong && !songs.includes(randSong)) songs.push(randSong);
    }

    return (songs);
  }

  render() {
    const { allSongs, playSong } = this.props;
    if (allSongs.length === 0) return null;

    const { sessionModalIsOpen } = this.state;
    const renderSessionForm = sessionModalIsOpen
      ? <SessionFormContainer toggleSessionModal={this.toggleSessionModal} />
      : null;

    const trendingSongs = this.grabTrendingSongs();

    return (
      <div className="splash-page">
        {renderSessionForm}
        <SplashHeader
          demoLogin={this.demoLogin}
          toggleSessionModal={this.toggleSessionModal}
        />
        <SplashSearch />
        <SplashTrending
          playSong={playSong}
          toggleSessionModal={this.toggleSessionModal}
          trendingSongs={trendingSongs}
        />
        <section className="splash-mobile">
          <div className="mobile-caption">
            <h1>Never stop listening</h1>
            <p>
              AudioCaelum is available here only. But you can find really cool games & apps at these locations.
            </p>
            <div className="mobile-links">
              <div className="app-store">
                <a href="https://www.apple.com/itunes/charts/free-apps/">
                  <div className="app-store-img" />
                </a>
              </div>
              <div className="play-store">
                <a href="https://play.google.com/store/apps">
                  <div className="play-store-img" />
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
              className="creators-start"
              onClick={this.toggleSessionModal}
              to=""
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
              className="signup-large"
              onClick={this.toggleSessionModal}
              to=""
            >
              Create account
            </Link>
          </div>
          <div className="account-exists">
            Already have an account?
            <Link
              className="signin-large"
              onClick={this.toggleSessionModal}
              to=""
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
  }
}

export default SplashPage;

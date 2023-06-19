import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner  from './Banner';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Popular Movies" fetchUrl={requests.fetchDiscoverMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="UpComings" fetchUrl={requests.fetchUpComingMovies}/>
    </div>
  );
}

export default App;

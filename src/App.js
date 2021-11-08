import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
    <Row 
    title='Netflix Originals' 
    fetchURL={requests.fetchNetflixOriginals}
    isLargeRow
    />
    <Row 
    title='Trending Now' 
    fetchURL={requests.fetchTrending} />
    
    <Row 
    title='Comedy Movies' 
    fetchURL={requests.fecthComedyMovies} />
    <Row 
    title='Romance' 
    fetchURL={requests.fecthRomanceMovies} />
    <Row 
    title='Action Movies' 
    fetchURL={requests.fetchActionMovies} />
    <Row 
    title='Documentaries' 
    fetchURL={requests.fetchDocumentaries} />
    <Row 
    title='Horror Movies' 
    fetchURL={requests.fetchHorrorMovies} />
    <Row 
    title='Top Rated' 
    fetchURL={requests.fetchTopRated} />
  

  
    </div>
  );
}

export default App;

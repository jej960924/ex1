import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import VideoList from './components/videolist/VideoList';
import Searchbar from './components/searchbar/Searchbar';
import Videoview from './components/videoview/Videoview';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';
 
let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem('selectedWatch')) || null;

function App({youtube}) {
 
  const [videoItems,setVideoItems] = useState([]);
  const [selectView,setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video); // 비디오가 받아 지면 setSelectView 함수로 state 값 받아진 비디오로 업데이트
    selectedWatch = video;
    //console.log(video)
  }
  const search =(searchValuTxt) => {
    setSelectView(null)
    youtube
    .searchResult(searchValuTxt)
    .then(videos=>setVideoItems(videos)) 
  }//서치 함수 끝 

  useEffect(() => {
    youtube
    .mostPopular()
    .then(videos=>{setVideoItems(videos); defaultVideos = videos})
    },[]);

    const clickLogo = () => {
      setVideoItems(defaultVideos);
    }
    useEffect(()=>{
      sessionStorage.setItem('defaultVideos',JSON.stringify(defaultVideos));
      sessionStorage.setItem('selectedWatch',JSON.stringify(selectedWatch));
    },[selectView])

  return (
    <div className="App">
      <BrowserRouter>
          <Searchbar searchResult={search} clickLogo={clickLogo} />
          <Routes>
            <Route path="/" element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
            <Route path="/search" element={<Search videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
            <Route path="/watch" element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} selectedWatch={selectedWatch} />} />
          </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;

/* 
&& || 단축평가
 false && 값 => false 
 true && 값  => 값 
 값 && true => true 
 값1 && 값2 => 값2 
*/

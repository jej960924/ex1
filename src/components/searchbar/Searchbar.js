import React from "react";
import './searchbar.css';
import { useRef } from "react";
import {Navigate, useNavigate ,Link} from 'react-router-dom';
function Searchbar({searchResult,clickLogo}){
    const inputRef=useRef();
    let navigate=useNavigate();
    /* enter 클릭시 호출공통 함수 */
    const searchfnc = () =>{
        const value=inputRef.current.value ; // input의 value 값을 가져온다.
        searchResult(value);
        navigate(`/search?search_query=${value}`)
    }
    
    /* 서치버튼 클릭시 호출될 함수 */
    const inputclick = () =>{
        searchfnc();
    }
    /* 인풋박스에 enter 시 호출될 함수 */
    const inputEnter = (e) =>{
        if(e.key === 'Enter'){
            searchfnc();
        }
    }
    return(
        <div className="searchArea">
            <div className="logoarea">
                <button className="btn-leftmenu"><i className="fa-solid fa-bars"></i></button>
                <h1><Link to="/"><img src="/images/logo.png" alt="youtube" className="logoimg" onClick={clickLogo} /></Link></h1>
            </div>
            <div className='searachInputarea'>
                <input
                    type="search" placeholder="검색" 
                    className="searchInput" 
                    onKeyPress={inputEnter} 
                    ref={inputRef} 
                />
                <button className="searchbtn" onClick={inputclick}>
                    <img src="/images/searchicon.png" alt="search"/>
                </button>
                <button className="micbtn">
                      <i className="fa-solid fa-microphone"></i>
                </button>
            </div>
            <div className="topMenuarea">
                <button className="btn-rightmenu">
                    <i className="fa-solid fa-table-cells"></i>
                </button>
                <button className="btn-rightmenu">
                     <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <button className="btn-rightmenu">
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
        </div>
    )
}
export default Searchbar;

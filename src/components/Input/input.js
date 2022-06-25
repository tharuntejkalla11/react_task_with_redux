import "./input.css"
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pushInputFields } from "../../reducers/slices/inputFields";


const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  opacity:80%; 
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const Input = () => {
    const [searchText, setSearchText] = useState("");
    const [searchBy, setSearchBy] = useState("title");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    const SubmitHandler = () => {
        dispatch(pushInputFields({ searchText: searchText, searchBy: searchBy }));
    }
    const selectedTitle = () => {
        setSearchBy("title")
    }
    const selectedGenere = () => {
        setSearchBy("genres")
    }
    return (
        <>
            <div className="Header">
                <div className='BackGroundImage' style={{ backgroundImage: `url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")` }}>Hello
                    <img className='NetFlixLogo' src="https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />

                    <div className="search-box">
                        <SearchBox>
                            <SearchInput
                                placeholder="Search Movie"
                                type='text'
                                onChange={handleChange}
                            />
                        </SearchBox>
                        <Button id='searchButtonId' variant="danger" onClick={SubmitHandler}>Search</Button>
                    </div>
                    <div className="serachBy">
                        <button className="filterbuttons" onClick={selectedTitle}>Title</button>
                        <button id="btn2" className="filterbuttons" onClick={selectedGenere}>Genere</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Input;
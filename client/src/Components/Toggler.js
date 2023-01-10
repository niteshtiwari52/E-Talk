import React from 'react';
import { useState } from 'react';
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_DARKTHEME } from '../Redux/Reducer/Theme/theme.type';

const Toggler = () => {
  const [toggle, setToggle] = useState("light");
  const dispatch = useDispatch();

  const togglerTheme = () =>{
    dispatch({type: TOGGLE_DARKTHEME});
    toggle === "light" ? setToggle("dark") : setToggle("light");
  }
  
  return (
    <Wrapper onClick={togglerTheme}>
        {
          toggle === "light" ? <RiMoonLine className="icon" /> : <RiSunLine className="icon" />
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 8px;
`


export default Toggler;
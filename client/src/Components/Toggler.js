import React from 'react';
import { useState } from 'react';
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TOGGLE_DARKTHEME } from '../Redux/Reducer/Theme/theme.type';

const Toggler = () => {
  const [toggle, setToggle] = useState(false);
  const darkThemeEnabled = useSelector((state) => state.themeReducer.darkThemeEnabled);
  const dispatch = useDispatch();
  
  const togglerTheme = () =>{
    dispatch({type: TOGGLE_DARKTHEME});
    darkThemeEnabled === true ? setToggle(true) : setToggle(false);
  }
  
  return (
    <Wrapper onClick={togglerTheme}>
        {
          toggle === true ? <RiMoonLine className="icon" /> : <RiSunLine className="icon" />
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 8px;
        cursor: pointer;
        &:hover{
          color: ${({ theme }) => theme.colors.cyan};
        }
`


export default Toggler;
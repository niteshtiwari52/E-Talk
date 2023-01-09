import React from 'react';
import { useState } from 'react';
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {TOGGLE_DARKTHEME} from "../Redux/action/action"

const Toggler = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch();
  const togglerTheme = () =>{
    dispatch({type: TOGGLE_DARKTHEME});
    setToggle(true);
  }
  return (
    <Wrapper onClick={togglerTheme}>
        {
          toggle ? <RiMoonLine className="icon" /> : <RiSunLine className="icon" />
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.text.secondary};
        border-radius: 8px;
`


export default Toggler;
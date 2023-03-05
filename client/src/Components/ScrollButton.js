import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {CgChevronDoubleUp} from "react-icons/cg"

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false);
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const listenToScroll = () =>{
    let heightToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if(winScroll > heightToHidden){
           setVisible(true);
    }else{
         setVisible(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [])

  return (
    <Wrapper>
    {visible && (

      <div className="top-btn" onClick={scrollToTop}>
        <CgChevronDoubleUp className="up-icon"/>
      </div>
    )}
    </Wrapper>
  );
}

export default ScrollButton;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

.top-btn{
position: fixed;
display: flex;
justify-content: center;
align-items: center;
bottom: 2rem;
right: 2rem;
cursor: pointer;
width: 4rem;
height: 4rem;
font-size: 2.4rem;
padding: 0.25rem;
z-index: 999;
background-color: #3180fc;
color: white;
border-radius: 50%;
box-shadow: 0px 0px 24px ${({ theme }) => theme.colors.boxShadow.primary};

.up-icon{
  transition: transform 0.5s;
  &:hover{
    transform: translateY(-2px)
  }
}

}

`;

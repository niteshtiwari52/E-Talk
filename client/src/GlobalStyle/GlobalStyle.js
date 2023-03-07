import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    background-color: initial;
    width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(${({ theme }) => theme.colors.rgb.cyan}, .2);
    border-radius: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.border};
}

.App{
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  color: ${({ theme }) => theme.colors.heading};
  overflow-x: hidden;
}

.box{
  position: absolute;
  z-index: 100;
}

.dialog-wrapper {
  .dialog-container{
    
    background-color: rgba(${({ theme }) => theme.colors.border},0.5)
  }
  .dialog-panel{
  background-color: ${({ theme }) => theme.colors.bg.primary};
  .user-list{
      max-height: 190px;
    }
  .search-user-box {
    .profile {
        position: absolute;
        left: 0;
        width: 50px;
        height: 50px;
      }
      .details {
        padding: 12px 12px 12px 60px;
        }
        .user-add{
          color: ${({ theme }) => theme.colors.heading};
          &:hover{
            background-color: ${({ theme }) => theme.colors.bg.secondary};
          }
        }
  }
  .close-btn{
    &:hover{
      color: black;
      background-color: rgb(6, 182, 212);
    }
  }
  h3,h5,label{
    color: ${({ theme }) => theme.colors.heading}
  }
  input{
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
}
  }

  .user-profile-sidebar {
    .dialog-wrapper {
      .dialog-container {
    background: none;
    .dialog-panel{
      background-color: ${({ theme }) => theme.colors.bg.primary};
      box-shadow: 0 0 10px rgb(${({ theme }) => theme.colors.bg.secondary});

      .sidebar{
        color: ${({ theme }) => theme.colors.heading};
        .sidebar-active{
          background-color: ${({ theme }) => theme.colors.bg.primary};
        }
      }
    }
   }
    }
  }

  button,
  input,
  label,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    padding: 0;
  }
 
  .input {
    -webkit-appearance: none;
    appearance: none;
    border-color: rgba(209, 213, 219, 1);
    border-radius: 0.375rem;
    border-width: 1px;
    padding: 0.5rem 0.75rem;
    width: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.heading};
  }
  
  a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.black};
  }
  
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p,span {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
    
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.5rem;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
  }
  h4{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
  }
  
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .btn-light {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.btnlight};
    border-color: ${({ theme }) => theme.colors.btnlight};
  }

  

  @keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}



  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 80%;
    }
  
    .grid {
      gap: 3.2rem;
    }
  
    .grid-cols-2 {
      grid-template-columns: 1fr;
    }
    .user-chat-show{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 40;
    transition: transform 0.25s linear;
    }
  .fadeInRight2{
    transform: translateX(100vw);
  }
.fadeInRight{
    transform: translateX(0);
  }
  }

`;

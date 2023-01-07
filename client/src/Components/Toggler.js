import React from 'react';
import { func, string } from 'prop-types';
import { RiMoonLine } from "react-icons/ri";

const Toggler = ({theme,  toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
        <RiMoonLine className="icon" />
    </div>
  )
}
Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggler
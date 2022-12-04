import React from 'react';
import { FcGoogle } from "react-icons/fc";
import styled from 'styled-components';
import { Button } from './Button';

const Social = () => {
  return (
    <Wrapper className="mt-6 text-center">
    <div className="signin-other-title">
      <h5 className="mb-4 title font-semibold">Sign in With</h5>
    </div>
    <div className="grid grid-rows-1 grid-flow-col gap-3">
      <div className="flex justify-center items-center">
        <Button
          className="btn-light flex justify-center items-center w-full"
          type="button"
          id="facebbok"
        >
          <img
            src="./social/facebook.svg"
            alt="facebook"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="facebook"
          />
        </Button>
      </div>
      <div>
        <Button
          className="btn-light flex justify-center items-center w-full"
          type="Button"
          id="facebbok"
        >
          <img
            src="./social/twitter.svg"
            alt="facebook"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="facebook"
          />
        </Button>
      </div>
      <div>
        <Button
          className="btn-light flex justify-center items-center w-full"
          type="Button"
          id="facebbok"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="facebook"
        >
          <FcGoogle />
        </Button>
      </div>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
img{
  width: 1rem
}
  
`;

export default Social;



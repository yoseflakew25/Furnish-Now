import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth </span>
      </h5>
      <h5>All rights reserved - </h5>
      <br />
      <h5>
        made with <span className='heart'>♥</span> by
        <a href="https://github.com/yoseflakew25" target="_blank">
          {" "}
          Yosef Lakew
        </a>
      </h5>
    </Container>
  );
  
}

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-7);
  }
  h5 {
    color: white;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  h5 .heart{
    color: red;
   
  }
  h5 a {
    color: var(--clr-primary-7)
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer

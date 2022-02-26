/* eslint-disable @typescript-eslint/no-namespace */
import styled from 'styled-components';

namespace sc {
  export const Container = styled.div`
    max-width: 400px;
    width: 100%;
    margin: auto;
    background-color: #fff;
    font-family: var(--font);
    border-radius: 16px;
    font-size: 15px;
    overflow: hidden;
    color: #455963;
    box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
  `;

  export const Header = styled.h1`
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    padding: 20px 20px 6px 20px;
  `;

  export const Button = styled.button`
    display: none
  `
}

export default sc;

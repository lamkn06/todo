/* eslint-disable @typescript-eslint/no-namespace */
import styled, { css } from 'styled-components';

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
    display: none;
  `;

  export const Filter = styled.button<{ active: boolean }>`
    border: 0;
    padding: 3px 8px;
    background: 0;
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    font-family: var(--font);
    color: #8a9ca5;
    border-radius: 20px;

    ${props =>
      props.active &&
      css`
        background-color: #7996a5;
        color: #fff;
      `}
  `;

  export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0 20px;
  `;

  export const Count = styled.div`
    color: #8a9ca5;
    font-size: 14px; ;
  `;
}

export default sc;

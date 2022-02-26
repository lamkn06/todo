/* eslint-disable @typescript-eslint/no-namespace */
import styled from 'styled-components';

namespace sc {
  export const Container = styled.input`
    display: flex;
    flex: 1;
    width: 100%;
    font-size: 16px;
    font-family: var(--font);
    padding: 10px 20px;
    border: 0;
    box-shadow: 0 -1px 0 #e2e4ea inset;
    color: #455963;

    outline: none;

    &::placeholder {
      color: #a8b5bb;
    }

    &:focus {
      box-shadow: 0 -1px 0 #bdcdd6 inset;
    }
  `;
}

export default sc;

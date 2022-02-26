/* eslint-disable @typescript-eslint/no-namespace */
import styled from 'styled-components';

namespace sc {
  export const Container = styled.div`
    position: relative;
    margin-bottom: 45px;
  `;

  /* HIGHLIGHTER ================================== */
  export const Highlight = styled.span`
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  `;

  export const Label = styled.label`
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  `;

  /* HIGHLIGHTER ================================== */
  export const Bar = styled.span`
    position: relative;
    display: block;
    width: 300px;

    &:before,
    &:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #5264ae;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    &:before {
      left: 50%;
    }
    &:after {
      right: 50%;
    }
  `;

  export const Input = styled.input`
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;

    &:focus {
      outline: none;
    }

    ~ ${Highlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }

    &:focus ~ ${Label} {
      top: -20px;
      font-size: 14px;
      color: #5264ae;
    }

    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @-moz-keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @keyframes inputHighlighter {
      from {
        background: #5264ae;
      }
      to {
        width: 0;
        background: transparent;
      }
    }
  `;
}

export default sc;

'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar-thumb {
    position: fixed;
    background: #8a8a8a !important;
    border-radius: 3px !important;

    &:hover {
      background: #555 !important;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  @keyframes rotate-animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .animation-rotate {
    animation: rotate-animate 2s var(--var-rotate-delay, 0) infinite forwards linear;
  }

  .ant-btn-primary.btn-gradient {
    background: var(--New-Button-Gradient, linear-gradient(90deg, #833AB4 -1.91%, #FD1D1E 55.73%, #FCB045 113.37%)) !important;
    padding: 8px 32px;
  }

  .btnWhiteMagic {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    border: 2px solid #e5e5e5;
    background-color: #fffbf6;
    box-shadow: 0px 8px 0px 0px #e6e6e6;
    height: auto;

    @media (max-width: 576px) {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  .ant-avatar > img {
    object-fit: scale-down;
  }

  textarea.ant-input {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-spin-fullscreen:has(.no-bg) {
    background-color: transparent;
  }
`;

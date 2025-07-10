import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle `
      
    :root {
        // dark theme
        --color-sidebar-background-dark-default: #202127;
        --color-sidebar-background-dark-hover: #2D2E34;
        --color-sidebar-background-dark-active: #393A3F;
        --color-text-dark-default: #f0f2ff;
        --color-text-dark-hover: #f0f2ff;
        --color-text-dark-active: #f0f2ff;
        --color-text-logo-dark-default: #3B82F6;
        --color-button-background-dark-default: #202127;
        --color-button-background-dark-active: #4B5966;

        // light theme
        --color-sidebar-background-light-default: #fff;
        --color-sidebar-background-light-hover: #f0f2ff;
        --color-sidebar-background-light-active: #f0f2ff;
        --color-text-light-default: #97a5b9;
        --color-text-light-hover: #091b31;
        --color-text-light-active: #0000b5;
        --color-text-logo-light-default: #0000b5;
        --color-button-background-light-default: #fff;
        --color-button-background-light-active: #e2e8f0;

        // transition
        --main-transition: all 0.5s ease;

        // background
        --main-background-light: rgb(210, 210, 252);
        --main-background-dark: rgb(184, 72, 72);
    }

/* Сброс стилей */

    *, *::after, *::before, input, button, textarea {
        box-sizing: border-box;
        -webkit-user-drag: none;
        user-drag: none;
        user-select: none;
    }

    body {
        height: 100vh;
        margin: 0;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        background-color: #e2e8f0;
        color: rgba(255, 255, 255, 0.87);
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    a {
        color: inherit;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    input, button, textarea, select {
        font-family: inherit;
    }

/* Фиксация футера */

    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
` 
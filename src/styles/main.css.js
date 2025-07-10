import styled from "styled-components";

const cssMain = {
    Main: styled.main`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding: 1rem;
        background-color: ${({ theme }) => theme['main-background']};
        transition: var(--main-transition);
    `,
    
};

export default cssMain;
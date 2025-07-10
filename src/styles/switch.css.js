import styled from "styled-components";

const SwitchContainer = styled.label`
    --width_toggle: ${props => props.$isOpened ? '4.6rem' : '3.6rem'};
    --height_toggle: 1.5rem;
    
    position: relative;
    display: inline-block;
    width: var(--width_toggle);
    height: var(--height_toggle);
    outline: thin solid  ${({ theme }) => theme['sidebar-background-hover']};
    border-radius: var(--height_toggle);
    cursor: pointer;
    margin-inline: ${props => props.$isOpened ? '0' : '-0.75rem'};
    transition: var(--main-transition);
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;

const Slider = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--height_toggle);
    background: linear-gradient(90deg, rgba(92,92,255,0.4) 50%, rgba(92,92,255,0.8) 100%);
    transition: all 0.4s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: var(--height_toggle);
        height: var(--height_toggle);
        border-radius: calc(var(--height_toggle) / 2);
        background-color: rgba(92,92,255,0.8);
        box-shadow: 0px 0px 3px 8px rgba(255,255,255,1) inset;
        outline: 1px solid ${({ theme }) => theme['main-background']};
        outline-offset: -3px;
        transition: var(--main-transition);
    }

    ${HiddenCheckbox}:checked + & {
        background: linear-gradient(-90deg, rgba(255,92,92,0.4) 50%, rgba(255,92,92,0.8) 100%);
    }

    ${HiddenCheckbox}:checked + &::before {
        transform: translateX(calc(var(--width_toggle) - var(--height_toggle)));
        background-color: rgba(255,92,92,0.8);
    }
`;

const Labels = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme['text-active']};
    transition: var(--main-transition);
    overflow: hidden;

    &::after {
        content: attr(data-off);
        position: absolute;
        right: 0.3rem;
        opacity: 1;
        transition: all 0.4s ease-in-out;
    }

    &::before {
        content: attr(data-on);
        position: absolute;
        left: calc(var(--height_toggle) - var(--width_toggle) + 0.5rem);
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }

    ${HiddenCheckbox}:checked ~ &::after {
        opacity: 0;
        transform: translateX(calc(var(--width_toggle) - var(--height_toggle)));
    }

    ${HiddenCheckbox}:checked ~ &::before {
        opacity: 1;
        transform: translateX(calc(var(--width_toggle) - var(--height_toggle)));
    }
`;


export const cssSwitch = {
    SwitchContainer,
    HiddenCheckbox,
    Slider,
    Labels
  };
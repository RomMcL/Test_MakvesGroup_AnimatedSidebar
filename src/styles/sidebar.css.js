import styled from "styled-components";

export const Tooltip = styled.div`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
//  background-color: ${({ theme }) => theme['text-active']};
//  color: ${({ theme }) => theme['sidebar-background-default']};
    background-color: var(--color-text-light-active);
    color: var(--color-text-dark-default);
    padding: 0.4rem 1rem;
    border-radius: 1rem;  
    white-space: nowrap;
    margin-left: 0.6rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    z-index: 100;
    pointer-events: none;
`;

export const cssSidebar = {
    SidebarContainer: styled.div`
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        justify-content: start;
        row-gap: 1rem;
        width: fit-content;
        height: fit-content;
        min-height: 600px;
        padding: 0.75rem;
        background: ${({ theme }) => theme['sidebar-background-default']};
        color: ${({ theme }) => theme['text-default']};
        border: thick double ${({ theme }) => theme['sidebar-background-hover']};
        border-radius: 1rem;
        transition: var(--main-transition); 
    `,

    SidebarHeader: styled.div`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;
        height: 1.5rem;
        position: relative;
        margin-right: ${props => props.$isOpened ? '1.75rem' : '0'};
        transition: var(--main-transition);
           
        > img {
            max-height: 100%;
            margin-inline: 0.3rem;
        }

        > div {
            height: 100%;
            aspect-ratio: 1 / 1;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
            cursor: pointer;
            background-color: ${({ theme }) => theme['sidebar-background-hover']};
            color: ${({ theme }) => theme['text-hover']};
            transition: var(--main-transition);
            position: absolute;
            top: 0;
            left: ${props => props.$isOpened ? 'calc(100% + 0.25rem)' : 'calc(100% + 1.5rem)'};         
        }
    `,

    LogoTitleLetter: styled.span`        
        color: ${({ theme }) => theme['text-logo-default']};
        font-weight: 600;
        width: ${props => props.$isOpened ? 'fit-content' : '0'};
        overflow: hidden;

        opacity: ${props => props.$isOpened ? '1' : '0'};
        letter-spacing: ${props => props.$isOpened ? 'normal' : '-0.4rem'};
        transform: translateY(${props => props.$isOpened ? '0' : '-1rem'})
                   scale(${props => props.$isOpened ? '1' : '3'});
        transition: all 0.3s ease;
        transition-delay: ${({$index, $isOpened}) => $isOpened ? ($index)*0.1 + 's' : '0s'};   
    `,

    SidebarItemsWrapper: styled.div`
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        justify-content: ${props => props.$position};
        row-gap: 0.5rem;
        flex-grow: 1;
    `,

    SidebarItem: styled.div`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;
        padding: 0.3rem 0.5rem;
        border-radius: 0.7rem;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        background-color: ${({ theme, $isActive }) => 
            $isActive ? theme['sidebar-background-active'] : 'transparent'};
        color: ${({ theme, $isActive }) => 
            $isActive ? theme['text-active'] : theme['text-default']};
        transition: var(--main-transition);
       
        &:hover {
            background: ${({ theme }) => theme['button-background-active']};
            color: ${({ theme }) => theme['text-hover']};
        }

        &:hover ${Tooltip} {
            opacity: 1;
            visibility: visible;
            ${props => !props.$isOpened && 'display: block'};
        }

        > span {
            opacity: ${props => props.$isOpened ? '1' : '0'};
            position: absolute;
            top: 0;
            left: ${props => props.$isOpened ? '2.5rem' : '4rem'};
            transition: all 0.5s ease ${({$index, $isOpened}) => $isOpened ? ($index)*0.2 + 's' : '0s'};
            transition-property: left, opacity;
        }       
    `,

};


import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Switch from '../Switch/Switch';

import logo from '../../assets/logo.png';
import { cssSidebar, Tooltip } from '../../styles/sidebar.css';


const { SidebarContainer, SidebarHeader, SidebarItemsWrapper, SidebarItem } = cssSidebar;

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color, toggleTheme } = props;

    const [isOpened, setIsOpened] = useState(true);
    const [activeItem, setActiveItem] = useState(null);

    const toggleSidebar = () => {
        setIsOpened(!isOpened);
    };

    const goToRoute = (path) => {
        console.log(`жмакнули на "${path}"`);
        setActiveItem(path);
    };

    return (       
        <SidebarContainer $isOpened={isOpened}>

            <SidebarHeader $isOpened={isOpened}>
                <img src={ logo } alt="TensorFlow logo"/>
                <span>TensorFlow</span>
                <div onClick={ toggleSidebar }>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right' }/>
                </div>
            </SidebarHeader>

            <SidebarItemsWrapper $position='start'>
                {
                    routes.map(route => (
                        <SidebarItem 
                            $isOpened={isOpened}
                            $isActive={activeItem === route.path}
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                            {!isOpened && <Tooltip>{route.title}</Tooltip>}
                        </SidebarItem>                      
                    ))
                }
                
            </SidebarItemsWrapper>

            <SidebarItemsWrapper $position='end'>
                {
                    bottomRoutes.map(route => (
                        <SidebarItem 
                            $isOpened={isOpened}
                            $isActive={activeItem === route.path}
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                            {!isOpened && <Tooltip>{route.title}</Tooltip>}
                        </SidebarItem>
                    ))
                }
            </SidebarItemsWrapper>

            <Switch
                theme ={color}
                active={toggleTheme}
                isOpened={isOpened}
            />
                  
        </SidebarContainer>                
    )
};

export default Sidebar;
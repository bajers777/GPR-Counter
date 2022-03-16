import React from 'react';
//contexts
import ModalContext from '../../contexts/modal/ModalContext';
import SidebarContext from '../../contexts/sidebar/SidebarContext';
//components
import CounterApp from '../../pages/CounterApp/CounterApp';
import Sidebar from '../navigation/sidebar/Sidebar';

const PrivateRoutes = () => {
    return (
        <>
            <ModalContext>
                <SidebarContext>
                    <Sidebar />
                    <CounterApp />
                </SidebarContext>
            </ModalContext>
        </>
    )
}

export default PrivateRoutes;
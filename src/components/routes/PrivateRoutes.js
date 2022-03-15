import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthCtx } from '../../contexts/auth/AuthContext';
//contexts
import ModalContext from '../../contexts/modal/ModalContext';
import SidebarContext from '../../contexts/sidebar/SidebarContext';
//components
import CounterApp from '../../CounterApp';
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
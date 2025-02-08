import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'

const Layout = ({ children, style }) => {
    return (
        <>
            <Header type='client' />
            <main>
                <div className='sidebar-content'>
                    <Sidebar />
                </div>
                <div className='main-content' style={style}>
                    {children}
                </div>
            </main >
        </>
    )
}

export default Layout
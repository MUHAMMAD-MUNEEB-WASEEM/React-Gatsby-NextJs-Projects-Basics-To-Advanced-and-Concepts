import React, { ReactNode } from 'react';
import Header from './header';

type Props = {
    children: ReactNode,
    headerTitile: string
}


export default function Layout ({children, headerTitile}: Props) {
    return (
        <div>
            <Header title={headerTitile} ></Header>
            <div>
                {children}
            </div>
        </div>
    )
}
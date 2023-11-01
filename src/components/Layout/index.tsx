import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Grid } from '@chakra-ui/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <Grid templateRows="auto 1fr auto" minHeight="100vh">
        <Header />
        {children}
        <Footer />
    </Grid>
);

export default Layout;

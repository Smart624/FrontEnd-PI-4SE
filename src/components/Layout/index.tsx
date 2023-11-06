import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Grid, Box } from '@chakra-ui/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    // Referências para o cabeçalho e rodapé
    const headerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    // Estado para armazenar a altura do conteúdo principal
    const [contentMinHeight, setContentMinHeight] = useState('auto');

    useEffect(() => {
        const updateContentHeight = () => {
            const headerHeight = headerRef.current?.offsetHeight ?? 0;
            const footerHeight = footerRef.current?.offsetHeight ?? 0;

            // Adiciona um padding extra para garantir que o conteúdo não seja sobreposto pelo rodapé
            // A quantidade de padding extra pode ser ajustada conforme necessário
            const paddingExtra = 20; // por exemplo, 20px de padding extra

            setContentMinHeight(`calc(100vh - ${headerHeight + footerHeight + paddingExtra}px)`);
        };

        updateContentHeight();
        window.addEventListener('resize', updateContentHeight);

        return () => window.removeEventListener('resize', updateContentHeight);
    }, []);

    return (
        <Grid templateRows="auto 1fr auto" minHeight="100vh">
            <Box ref={headerRef}>
                <Header />
            </Box>
            <Box as="main" minH={contentMinHeight}>
                {children}
            </Box>
            <Box ref={footerRef}>
                <Footer />
            </Box>
        </Grid>
    );
};

export default Layout;

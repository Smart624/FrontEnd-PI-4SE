import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, Heading } from '@chakra-ui/react';
import '../../index.css';


const Home: React.FC = () => (
    <div className="container">
        <Header />
        {/* Corpo da página inicial */}
        <div className="content">
            {/* Adicione outras seções conforme necessário */}
        </div>
        <Footer />
    </div>
);

export default Home;

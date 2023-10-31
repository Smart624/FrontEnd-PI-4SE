import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, Text } from '@chakra-ui/react';
import '../../index.css';


const About: React.FC = () => (
    <Box>
        <Header />
        <Center flexDir="column" p={8}>
            <Text>
                História da empresa, missão, visão e parcerias.
                {/* Conteúdo sobre a empresa */}
            </Text>
        </Center>
        <Footer />
    </Box>
);

export default About;

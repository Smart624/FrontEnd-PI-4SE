// src/pages/Home/index.tsx

import React from 'react';
import Layout from '../../components/Layout';
import {Center, Heading} from '@chakra-ui/react';

const Home: React.FC = () => (
    <Layout>
        {/* Corpo da página inicial */}
        <Center flexDir="column" p={8}>
            <Heading as="h2" size="md">Bem-vindo à Nishi Eletrônica</Heading>
            {/* Adicione outras seções conforme necessário */}
        </Center>
    </Layout>
);

export default Home;

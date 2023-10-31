import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, Text, VStack } from '@chakra-ui/react';

const Products: React.FC = () => (
    <Box>
        <Header />
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de produtos */}
                <Text>Produto 1</Text>
                <Text>Produto 2</Text>
                <Text>Produto 3</Text>
            </VStack>
        </Center>
        <Footer />
    </Box>
);

export default Products;

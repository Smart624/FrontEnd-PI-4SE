import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, VStack, Text } from '@chakra-ui/react';

const Blog: React.FC = () => (
    <Box>
        <Header />
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de postagens do blog */}
                <Text>Postagem 1</Text>
                <Text>Postagem 2</Text>
                <Text>Postagem 3</Text>
            </VStack>
        </Center>
        <Footer />
    </Box>
);

export default Blog;

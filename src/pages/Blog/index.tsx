import React from 'react';
import {Center, VStack, Text} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const Blog: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de postagens do blog */}
                <Text>Postagem 1</Text>
                <Text>Postagem 2</Text>
                <Text>Postagem 3</Text>
            </VStack>
        </Center>
    </Layout>
);

export default Blog;

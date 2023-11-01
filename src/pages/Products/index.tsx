import React from 'react';
import { Center, Text, VStack } from '@chakra-ui/react';
import Layout from "../../components/Layout";

const Products: React.FC = () => (
<Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4}>
                {/* Lista de produtos */}
                <Text>Produto 1</Text>
                <Text>Produto 2</Text>
                <Text>Produto 3</Text>
            </VStack>
        </Center>
</Layout>
);

export default Products;

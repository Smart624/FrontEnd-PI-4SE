import React from 'react';
import { Center, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import Layout from "../../components/Layout";

const Contact: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4} width="md">
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Seu nome" />
                <FormLabel>Email</FormLabel>
                <Input placeholder="Seu email" />
                <FormLabel>Mensagem</FormLabel>
                <Input placeholder="Sua mensagem" />
                <Button colorScheme="blue">Enviar</Button>
            </VStack>
        </Center>
</Layout>
);

export default Contact;

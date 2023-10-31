import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const Contact: React.FC = () => (
    <Box>
        <Header />
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
        <Footer />
    </Box>
);

export default Contact;

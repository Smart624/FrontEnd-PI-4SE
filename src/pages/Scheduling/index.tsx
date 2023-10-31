import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Box, Center, VStack, FormLabel, Input, Button } from '@chakra-ui/react';

const Scheduling: React.FC = () => (
    <Box>
        <Header />
        <Center flexDir="column" p={8}>
            <VStack spacing={4} width="md">
                {/* Formulário de agendamento */}
                <FormLabel>Serviço</FormLabel>
                <Input placeholder="Tipo de serviço" />
                <FormLabel>Data</FormLabel>
                <Input placeholder="Data de agendamento" />
                <FormLabel>Horário</FormLabel>
                <Input placeholder="Horário de agendamento" />
                <Button colorScheme="blue">Agendar</Button>
            </VStack>
        </Center>
        <Footer />
    </Box>
);

export default Scheduling;

import React from 'react';
import {Center, VStack, FormLabel, Input, Button} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const Scheduling: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4} width="md">
                {/* Formulário de agendamento */}
                <FormLabel>Serviço</FormLabel>
                <Input placeholder="Tipo de serviço"/>
                <FormLabel>Data</FormLabel>
                <Input placeholder="Data de agendamento"/>
                <FormLabel>Horário</FormLabel>
                <Input placeholder="Horário de agendamento"/>
                <Button colorScheme="blue">Agendar</Button>
            </VStack>
        </Center>
    </Layout>
);

export default Scheduling;

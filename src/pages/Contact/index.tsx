import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Textarea,
    Text,
    Divider,
    Heading,
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import axios from 'axios';

type FormData = {
    name: string;
    email: string;
    message: string;
};

const Contact: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        axios.post('/api/contact', data)
            .then(response => {
                console.log(response);
                reset();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Layout>
            <Center flexDir="column" p={8}>
                <VStack spacing={4} width="full" maxW="md">
                    <Heading>Contato</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input placeholder="Seu nome" {...register('name')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Seu email" type="email" {...register('email')} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mensagem</FormLabel>
                            <Textarea placeholder="Sua mensagem" {...register('message')} rows={5} /> {/* Modificado aqui */}
                        </FormControl>
                        <Button colorScheme="blue" type="submit">Enviar</Button>
                    </form>
                    <Divider my={6} />
                    <Text fontWeight="bold">Horário de Funcionamento:</Text>
                    <Text>Segunda a Sexta: 09:00–12:00, 13:00–17:00</Text>
                    <Text>Sábado: 09:00–12:00</Text>
                    <iframe
                        width="100%"
                        height="350"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Rua%20Paul%20Harris,%20333+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    />
                </VStack>
            </Center>
        </Layout>
    );
};

export default Contact;

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Center,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    useToast,
    Textarea
} from '@chakra-ui/react';
import Layout from "../../components/Layout";

type FormData = {
    nome: string;
    cpf: string;
    rua: string;
    numeroCasa: string;
    cidade: string;
    cep: string;
    celular: string;
    polegadasTv?: string;
    modelo?: string;
    marca?: string;
    defeito?: string;
};

const Scheduling: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const navigate = useNavigate();
    const toast = useToast();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Substitua por uma chamada de API para salvar os dados no banco de dados
        navigate('/agendamento-confirmado');
        toast({
            title: "Cadastro realizado com sucesso!",
            description: "Você será redirecionado para a página de confirmação de agendamento.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        reset();
    };

    return (
        <Layout>
            <Center flexDir="column" p={8}>
                <VStack spacing={4} width="full" maxWidth="md">
                    <Heading as="h1" size="xl">Cadastro para Agendamento</Heading>
                    <Box as="form" onSubmit={handleSubmit(onSubmit)} width="full">
                        {/* Campos obrigatórios */}
                        <FormControl isInvalid={!!errors.nome} isRequired>
                            <FormLabel htmlFor="nome">Nome</FormLabel>
                            <Input id="nome" placeholder="Seu nome completo" {...register('nome', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.cpf} isRequired>
                            <FormLabel htmlFor="cpf">CPF</FormLabel>
                            <Input id="cpf" placeholder="Seu CPF" {...register('cpf', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.celular} isRequired>
                            <FormLabel htmlFor="celular">Celular (WhatsApp)</FormLabel>
                            <Input id="celular" placeholder="(XX) XXXXX-XXXX" {...register('celular', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.cep} isRequired>
                            <FormLabel htmlFor="cep">CEP</FormLabel>
                            <Input id="cep" placeholder="Seu CEP" {...register('cep', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.rua} isRequired>
                            <FormLabel htmlFor="rua">Rua</FormLabel>
                            <Input id="rua" placeholder="Nome da rua" {...register('rua', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.cidade} isRequired>
                            <FormLabel htmlFor="cidade">Cidade</FormLabel>
                            <Input id="cidade" placeholder="Nome da cidade" {...register('cidade', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        <FormControl isInvalid={!!errors.numeroCasa} isRequired>
                            <FormLabel htmlFor="numeroCasa">Número da Casa</FormLabel>
                            <Input id="numeroCasa" placeholder="Número da sua residência" {...register('numeroCasa', { required: 'Este campo é obrigatório' })} />
                        </FormControl>

                        {/* Campos opcionais */}
                        <FormControl>
                            <FormLabel htmlFor="polegadasTv">Polegadas da TV</FormLabel>
                            <Input id="polegadasTv" placeholder="Ex: 32, 42, 50 polegadas" {...register('polegadasTv')} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="modelo">Modelo</FormLabel>
                            <Input id="modelo" placeholder="Modelo do aparelho" {...register('modelo')} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="marca">Marca</FormLabel>
                            <Input id="marca" placeholder="Marca do aparelho" {...register('marca')} />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="defeito">Defeito</FormLabel>
                            <Textarea id="defeito" placeholder="Descreva o defeito (se houver)" {...register('defeito')} />
                        </FormControl>

                        <Button mt={4} colorScheme="blue" type="submit">Cadastrar</Button>
                    </Box>
                </VStack>
            </Center>
        </Layout>
    );
};

export default Scheduling;

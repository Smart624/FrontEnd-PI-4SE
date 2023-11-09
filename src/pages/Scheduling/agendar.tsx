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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
    selectedDate: Date;
};

const Agendar: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const navigate = useNavigate();
    const toast = useToast();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Substitua por uma chamada de API para salvar os dados no banco de dados
        navigate('/agendamento-confirmado');
        toast({
            title: "Agendamento realizado com sucesso!",
            description: "",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        reset();
    };

    return (
        <Layout>
            <VStack>
                <Heading as="h2" size="xl" mb={6}>
                    Agendamento de Serviços
                </Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* ... outros campos de formulário ... */}
                    <FormControl>
                        <FormLabel>Data do Agendamento</FormLabel>
                        <DatePicker
                            selected={register('selectedDate', { required: 'Campo obrigatório' })}
                            onChange={(date: Date) => {
                                reset({ selectedDate: date });
                            }}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                        />
                        {errors.selectedDate && (
                            <span>{errors.selectedDate.message}</span>
                        )}
                    </FormControl>
                    <Button type="submit" mt={4} colorScheme="blue">
                        Agendar
                    </Button>
                </form>
            </VStack>
        </Layout>
    );
};

export default Agendar;

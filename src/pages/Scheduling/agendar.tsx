import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    VStack,
    Box,
    FormControl,
    FormLabel,
    Button,
    Heading,
    useToast,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from "../../components/Layout";

type FormData = {
    selectedDate: Date;
};

const Agendar: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const navigate = useNavigate();
    const toast = useToast();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Substituir por uma chamada de API para salvar os dados no banco de dados
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
                <Box as="form" onSubmit={handleSubmit(onSubmit)} width="full">
                    {/* ... outros campos de formulário ... */}
                    <FormControl>
                        <FormLabel>Data do Agendamento</FormLabel>
                        <Controller
                            control={control}
                            name="selectedDate"
                            defaultValue={undefined}
                            render={({ field }: { field: { value: Date; onChange: (date: Date) => void } }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date: Date) => field.onChange(date)}
                                    minDate={new Date()}
                                    dateFormat="dd/MM/yyyy"
                                />
                            )}
                        />
                        {errors.selectedDate && (
                            <span>{errors.selectedDate.message}</span>
                        )}
                    </FormControl>
                    <Button type="submit" mt={4} colorScheme="blue">
                        Agendar
                    </Button>
                    </Box>
            </VStack>
        </Layout>
    );
};

export default Agendar;

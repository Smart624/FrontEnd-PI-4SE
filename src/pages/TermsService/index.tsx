// src/pages/TermsOfService.tsx
import React from 'react';
import {
    Container,
    Heading,
    Text,
    VStack,
    OrderedList,
    ListItem,
} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const TermsOfService: React.FC = () => {
    return (
        <Layout>
            <Container maxW="container.md" py={10}>
                <VStack spacing={5} as="article">
                    <Heading as="h1" size="xl">
                        Termos de Serviço
                    </Heading>

                    <Text>
                        Última atualização: 04/11/2023
                    </Text>

                    <Text>
                        Por favor, leia estes Termos de Serviço ("Termos", "Termos de Serviço") cuidadosamente antes de usar o site nishieletronica.com.br (o "Serviço") operado por Nishi Eletrônica ("nós", "nosso").
                    </Text>

                    <Heading as="h2" size="lg">
                        Uso do Serviço
                    </Heading>

                    <OrderedList>
                        <ListItem>Ao acessar ou usar o Serviço você concorda em estar vinculado por estes Termos. Se você discordar de qualquer parte dos termos, então você não poderá acessar o Serviço.</ListItem>
                        {/* Incluir outras condições de uso conforme necessário */}
                    </OrderedList>

                    <Heading as="h2" size="lg">
                        Contas
                    </Heading>

                    <Text>
                        Quando você cria uma conta conosco, você deve nos fornecer informações que sejam precisas, completas e atuais em todos os momentos. A falha em fazê-lo constitui uma violação dos Termos, o que pode resultar em um encerramento imediato de sua conta em nosso Serviço.
                    </Text>
                    {/* Continuar com regras de conta, segurança, etc. */}

                    <Heading as="h2" size="lg">
                        Links para Outros Sites Web
                    </Heading>

                    <Text>
                        Nosso Serviço pode conter links para sites ou serviços de terceiros que não são de propriedade ou controlados por Nishi Eletrônica.
                    </Text>
                    <Text>
                        Nishi Eletrônica não tem controle sobre, e não assume nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você também reconhece e concorda que a Nishi Eletrônica não será responsável ou responsabilizada, direta ou indiretamente, por qualquer dano ou perda causada ou supostamente causada por ou em conexão com o uso ou confiança em tais conteúdos, bens ou serviços disponíveis em ou através de tais sites ou serviços.
                    </Text>

                    {/* Continuar adicionando seções relevantes como 'Encerramento', 'Mudanças nos Termos', etc. */}

                    <Text>
                        Estes Termos são eficazes a partir de 04/11/2023.
                    </Text>
                </VStack>
            </Container>
        </Layout>
    );
};

export default TermsOfService;

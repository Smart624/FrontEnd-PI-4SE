// src/pages/PrivacyPolicy.tsx
import React from 'react';
import {
    Container,
    Heading,
    Text,
    VStack,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';
import Layout from "../../components/Layout";

const PrivacyPolicy: React.FC = () => {
    return (
        <Layout>
            <Container maxW="container.md" py={10}>
                <VStack spacing={5} as="article">
                    <Heading as="h1" size="xl">
                        Política de Privacidade
                    </Heading>

                    <Text>
                        Última atualização: 04/11/2023
                    </Text>

                    <Text>
                        Seu privacidade é importante para nós. É política da Nishi Eletrônica respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site nishieletronica.com.br, e outros sites que possuímos e operamos.
                    </Text>

                    <Heading as="h2" size="lg">
                        Informações Pessoais que Coletamos
                    </Heading>

                    <Text>
                        Quando você visita o nishieletronica.com.br, podemos coletar informações sobre você, incluindo, mas não se limitando a:
                    </Text>

                    <UnorderedList>
                        <ListItem>Informações de contato, como nome, e-mail, endereço e telefone.</ListItem>
                        <ListItem>Dados de pagamento e informações de transação.</ListItem>
                        <ListItem>Dados de uso, preferências e interações com o site.</ListItem>
                        <ListItem>Outras informações relevantes para pesquisas de usuário e/ou ofertas.</ListItem>
                    </UnorderedList>

                    <Heading as="h2" size="lg">
                        Como Utilizamos Suas Informações
                    </Heading>
                    <Text>
                        Utilizamos as informações coletadas para diversos propósitos, como:
                    </Text>
                    <UnorderedList>
                        <ListItem>Prover e manter nosso serviço.</ListItem>
                        <ListItem>Notificar você sobre alterações no nosso serviço.</ListItem>
                        <ListItem>Permitir que você participe de recursos interativos quando você escolhe fazer isso.</ListItem>
                        <ListItem>Prover suporte ao cliente.</ListItem>
                        {/* Incluir outros usos conforme necessário */}
                    </UnorderedList>

                    {/* Continuar adicionando seções relevantes da política de privacidade */}

                    <Text>
                        Esta política é efetiva a partir de 04/11/2023.
                    </Text>
                </VStack>
            </Container>
        </Layout>
    );
};

export default PrivacyPolicy;

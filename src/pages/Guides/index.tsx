import React from 'react';
import { Center, VStack, Heading, Text, Link } from '@chakra-ui/react';
import Layout from "../../components/Layout";

interface GuideCardProps {
    title: string;
    description: string;
    link: string;
}
const GuideCard: React.FC<GuideCardProps> = ({ title, description, link }) => (
    <VStack
        border="1px solid"
        borderColor="gray.200"
        boxShadow="md"
        p={5}
        borderRadius="md"
        w="full"
        _hover={{ boxShadow: "xl" }}
        transition="box-shadow 0.2s"
    >
        <Heading as="h3" size="md" color="teal.400">
            {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <Link href={link} color="teal.600" fontWeight="bold">
            Leia mais →
        </Link>
    </VStack>
);

const GuidesAndTutorials: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <VStack spacing={4} align="stretch">
                <Heading as="h1" size="xl" mb={4}>
                    Guias e Tutoriais
                </Heading>
                {/* Aqui irão os guias e tutoriais */}
                {/* Este é apenas um exemplo. Você deverá substituir com informações reais. */}
                <GuideCard
                    title="Instalação do Firestick"
                    description="Um guia completo sobre como instalar e configurar seu Firestick para a melhor experiência de streaming."
                    link="/guides/firestick-installation"
                />
                <GuideCard
                    title="Conserto Básico de TVs"
                    description="Passos iniciais para diagnosticar e talvez consertar problemas comuns em sua TV."
                    link="/guides/tv-basic-repair"
                />
                <GuideCard
                    title="Introdução à Smart Home"
                    description="Entenda o básico da casa inteligente e como começar a transformar sua residência."
                    link="/guides/smart-home-introduction"
                />
                {/* Continue adicionando GuideCards conforme necessário */}
            </VStack>
        </Center>
    </Layout>
);

export default GuidesAndTutorials;

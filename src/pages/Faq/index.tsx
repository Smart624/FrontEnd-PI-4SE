// src/pages/FAQ/index.tsx

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack,
    Heading,
    Container
} from '@chakra-ui/react';
import Layout from '../../components/Layout';

const FAQ: React.FC = () => {
    // Substitua isso pelos dados de seu FAQ real
    const faqData = [
        {
            question: 'Como posso agendar um serviço?',
            answer: 'Você pode agendar um serviço entrando em contato conosco pelo telefone (19)3875-3831 ou pelo WhatsApp.'
        },
        {
            question: 'Quais tipos de pagamento são aceitos?',
            answer: 'Aceitamos várias formas de pagamento, incluindo cartões de crédito, débito e transferências bancárias.'
        },
        {
            question: 'Oferecem garantia para os serviços realizados?',
            answer: 'Sim, todos os nossos serviços têm garantia. A duração da garantia pode variar dependendo do serviço prestado.'
        },
        // Adicione mais perguntas e respostas conforme necessário
    ];

    return (
        <Layout>
            <Container maxW="container.md" py={10}>
                <VStack spacing={8} align="stretch">
                    <Heading as="h1" size="xl" textAlign="center">
                        Perguntas Frequentes
                    </Heading>
                    <Accordion allowToggle>
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index}>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            {faq.question}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {faq.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </VStack>
            </Container>
        </Layout>
    );
};

export default FAQ;

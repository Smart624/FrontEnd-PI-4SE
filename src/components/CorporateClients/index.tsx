// src/pages/Home/components/CorporateClients.tsx

import React from 'react';
import {
    Box,
    SimpleGrid,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

const corporateClients = [
    // Substitua estes caminhos pelas imagens e nomes reais dos seus clientes
    { logo: '../assets/images/facebook_2111398.png', name: 'Facebook' }
    // ... Adicione mais clientes conforme necessário
];

const CorporateClients: React.FC = () => {
    return (
        <VStack spacing={6} mt={10} align="center">
            <Text fontSize="xl" fontWeight="bold">
                Clientes Corporativos
            </Text>
            <Text>
                Grandes empresas confiam na Nishi Eletrônica para manutenção e reparos de alta qualidade.
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
                {corporateClients.map((client) => (
                    <Box key={client.name} p={5} textAlign="center">
                        <Image
                            src={client.logo}
                            alt={client.name}
                            maxH="50px" // ajuste conforme necessário para manter a consistência
                            m="auto"
                            mb={3}
                        />
                        <Text fontWeight="semibold">{client.name}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </VStack>
    );
};

export default CorporateClients;

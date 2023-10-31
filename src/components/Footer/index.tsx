import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const Footer: React.FC = () => (
    <Box as="footer" bg="#191970" p={4}>
        <VStack spacing={2} alignItems="center">
            <Text color="white">Endereço: Cidade Nova 1, Rua Paul Harris, 333, CEP: 13334070</Text>
            <Text color="white">Email: contato@nishi.com</Text>
            <Text color="white">Telefone: (19)3875-3831</Text>
            {/* Adicione ícones de mídia social e outros links aqui */}
        </VStack>
    </Box>
);

export default Footer;

import React from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';

const Footer: React.FC = () => (
    <Box as="footer" bg="gray.800" color="white" py={8}>
        <HStack spacing={8} justify="space-between" maxW="container.lg" mx="auto" px={8}>
            <VStack align="stretch">
                {/* Links Column 1 */}
            </VStack>

            <VStack align="stretch">
                {/* Links Column 2 */}
            </VStack>

            <VStack align="stretch" color="white">
                <Text>Endereço: Cidade Nova 1, Rua Paul Harris, 333, CEP: 13334070</Text>
                <Text>Email: contato@nishi.com</Text>
                <Text>Telefone: (19)3875-3831</Text>
                {/* Add social media icons and other links here */}
            </VStack>
        </HStack>

        <Text textAlign="center" fontSize="sm" py={8}>
            © 2023 Nishi Eletrônica. Todos os direitos reservados.
        </Text>
    </Box>
);

export default Footer;

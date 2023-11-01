
import { Box, Heading, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
        <Box as="header" bg="gray.800" color="white" py={4}>
            <HStack justify="space-between" maxW="container.lg" mx="auto" px={4}>
                <Heading as="h1" size="lg">
                    Nishi Eletrônica
                </Heading>

                <HStack spacing={8}>
                    <Link as={RouterLink} to="/">Início</Link>
                    <Link as={RouterLink} to="/servicos">Serviços</Link>
                    <Link as={RouterLink} to="/agendamento">Agendamento</Link>
                    <Link as={RouterLink} to="/produtos">Produtos</Link>
                    <Link as={RouterLink} to="/sobre">Sobre</Link>
                    <Link as={RouterLink} to="/contato">Contato</Link>

                </HStack>
            </HStack>
        </Box>
    );
}
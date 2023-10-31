import React from 'react';
import { Box, Heading, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => (
    <Box as="header" bg="#191970" p={4}>
        <HStack spacing={8} alignItems="center">
            <Heading as="h1" size="lg" color="white">
                Nishi Eletrônica
            </Heading>
            <HStack as="nav" spacing={4}>
                <Link as={RouterLink} to="/" color="white">Home</Link>
                <Link as={RouterLink} to="/produtos" color="white">Produtos</Link>
                <Link as={RouterLink} to="/servicos" color="white">Serviços</Link>
                <Link as={RouterLink} to="/contato" color="white">Contato</Link>
                <Link as={RouterLink} to="/sobre" color="white">Sobre Nós</Link>
                <Link as={RouterLink} to="/agendamento" color="white">Agendamento</Link>
            </HStack>
        </HStack>
    </Box>
);

export default Header;

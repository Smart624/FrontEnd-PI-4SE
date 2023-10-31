import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const NotFound: React.FC = () => (
    <Box>
        <Center flexDir="column" p={8}>
            <Text fontSize="xl">Página não encontrada</Text>
        </Center>
    </Box>
);

export default NotFound;

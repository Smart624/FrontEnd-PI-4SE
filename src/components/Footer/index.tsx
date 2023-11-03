import React from 'react';
import { Box, HStack, VStack, Text, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => (
    <Box as="footer" bg="gray.800" color="white" py={10}>
        <HStack spacing={0} justify="space-around" maxW="container.xl" mx="auto" px={8} wrap="wrap">
            {/* Useful Links */}
            <VStack align="flex-start" spacing={2}>
                <Text fontWeight="bold">Links Úteis:</Text>
                <Link href="/faq">FAQ</Link>
                <Link href="/blog" style={{ pointerEvents: 'none', opacity: 0.4 }}>Blog (futuro)</Link>
                <Link href="/guides" style={{ pointerEvents: 'none', opacity: 0.4 }}>Guides & Tutorials (futuro)</Link>
                <Link href="/termos-de-servico">Termos de Serviço</Link>
                <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            </VStack>

            {/* Contact Information */}
            <VStack align="center" spacing={2}>
                <Text fontWeight="bold">Informações de Contato:</Text>
                <Text>Endereço: Cidade Nova 1, Rua Paul Harris, 333, CEP: 13334070</Text>
                <Text>Email: contato@nishi.com</Text>
                <Text>Telefone: (19)3875-3831</Text>
            </VStack>

            {/* Social Media Icons */}
            <VStack align="flex-end" spacing={2}>
                <Text fontWeight="bold">Mídias Sociais:</Text>
                <HStack spacing={2}>
                    <Link href="https://facebook.com" isExternal>
                        <Icon as={FaFacebookF} w={5} h={5} />
                    </Link>
                    <Link href="https://twitter.com" isExternal>
                        <Icon as={FaTwitter} w={5} h={5} />
                    </Link>
                    <Link href="https://instagram.com" isExternal>
                        <Icon as={FaInstagram} w={5} h={5} />
                    </Link>
                    <Link href="https://linkedin.com" isExternal>
                        <Icon as={FaLinkedinIn} w={5} h={5} />
                    </Link>
                </HStack>
            </VStack>
        </HStack>

        <Text textAlign="center" fontSize="sm" mt={10}>
            © 2023 Nishi Eletrônica. Todos os direitos reservados.
        </Text>
    </Box>
);

export default Footer;

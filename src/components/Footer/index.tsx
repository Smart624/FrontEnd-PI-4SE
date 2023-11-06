import React from 'react';
import {
    HStack, Box, VStack, Text, Link, Icon, Popover, PopoverTrigger,
    PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader,
    PopoverBody, Button, useMediaQuery
} from '@chakra-ui/react';
import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaClock
} from 'react-icons/fa';

const Footer: React.FC = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Box as="footer" bg="gray.800" color="white" py={[4, null, 10]}>
            <VStack
                spacing={[4, null, 10]}
                justify="space-around"
                direction={['column', null, 'row']}
                maxW="container.xl"
                mx="auto"
                px={8}
            >
                <HStack spacing={0} justify="space-around" maxW="container.xl" mx="auto" px={8} wrap="wrap">
                    {/* Useful Links */}
                    <VStack align="flex-start" spacing={2}>
                        <Text fontWeight="bold">Links Úteis:</Text>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/guias">Guias & Tutoriais</Link>
                        <Link href="/termos-de-servico">Termos de Serviço</Link>
                        <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                    </VStack>

                    {/* Contact Information */}
                    <VStack align="center" spacing={2}>
                        <Text fontWeight="bold">Informações de Contato:</Text>
                        <Text>Endereço: Cidade Nova 1, Rua Paul Harris, 333, CEP: 13334070</Text>
                        <Text>Email: contato@nishi.com</Text>
                        <Text>Telefone: (19)3875-3831</Text>
                        {/* WhatsApp Contact */}
                        <HStack spacing={2} pt={2}>
                            <Icon as={FaWhatsapp} w={5} h={5} color="green" />
                            <Link href="https://wa.me/551938753831" isExternal>
                                <Text>Converse Conosco (WhatsApp)</Text>
                            </Link>
                        </HStack>
                    </VStack>
                </HStack>

                {/* Social Media Icons and Business Hours Popover */}
                <VStack align={isLargerThan768 ? 'flex-end' : 'center'} spacing={4}>
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
                    <Popover trigger="hover" placement={isLargerThan768 ? "top-start" : "bottom"}>
                        <PopoverTrigger>
                            <Button size="sm" leftIcon={<FaClock />} variant="ghost" colorScheme="whiteAlpha">
                                Horários de Funcionamento
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent color="white" bg="gray.700" borderColor="gray.600">
                            <PopoverArrow bg="gray.700" />
                            <PopoverCloseButton />
                            <PopoverHeader>Horários de Funcionamento:</PopoverHeader>
                            <PopoverBody>
                                <Text>Segunda a Sexta: 09:00–12:00, 13:00–17:00</Text>
                                <Text>Sábado: 09:00–12:00</Text>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </VStack>
                <Text textAlign="center" fontSize="sm" my={4}>
                    © 2023 Nishi Eletrônica. Todos os direitos reservados.
                </Text>
            </VStack>
        </Box>
    );
};

export default Footer;

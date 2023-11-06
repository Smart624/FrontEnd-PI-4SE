import React, { useState } from 'react';
import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    Text,
    VStack,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import Layout from "../../components/Layout";

interface IProduct {
    id: number;
    name: string;
    description: string;
}
// Lista simulada de produtos
const products: IProduct[] = [
    { id: 1, name: 'Acessórios para TV', description: 'Variedade de acessórios para a sua TV.' },
    { id: 2, name: 'Cabos', description: 'Cabos HDMI, e mais.' },
    { id: 3, name: 'Controles', description: 'Controles de TV originais.' },
    { id: 4, name: 'Firestick', description: 'Transforme sua TV em Smart com Firestick.' },
    { id: 5, name: 'Suporte de TV', description: 'Suportes fixos e articulados para todos os modelos de TV.' },
    { id: 6, name: 'TVs Semi-Novos', description: 'TVs semi-novos revisados e com garantia.' },
];

const Products: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    const handleOpenModal = (product: IProduct) => {
        setSelectedProduct(product);
        onOpen();
    };

    return (
        <Layout>
            <Center flexDir="column" p={8}>
                <VStack spacing={4}>
                    <Heading as="h1" size="xl">Produtos que Trabalhamos</Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        {products.map((product) => (
                            <GridItem key={product.id} w="100%" minH="10">
                                <Box p={5} shadow="md" borderWidth="1px">
                                    <Text fontWeight="bold">{product.name}</Text>
                                    <Text mt={4}>{product.description}</Text>
                                    <Button size="sm" mt={4} onClick={() => handleOpenModal(product)}>
                                        Saiba mais
                                    </Button>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>
            </Center>

            {/* Modal para detalhes do produto */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedProduct?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{selectedProduct?.description}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                        <Button variant="ghost">Contate-nos</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Layout>
    );
};

export default Products;
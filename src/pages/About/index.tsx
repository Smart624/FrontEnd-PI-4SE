import React from 'react';
import {Center, Text} from '@chakra-ui/react';
import '../../index.css';
import Layout from '../../components/Layout';


const About: React.FC = () => (
    <Layout>
        <Center flexDir="column" p={8}>
            <Text>
                História da empresa, missão, visão e parcerias.
                {/* Conteúdo sobre a empresa */}
            </Text>
        </Center>
    </Layout>
);

export default About;

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <Routes />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

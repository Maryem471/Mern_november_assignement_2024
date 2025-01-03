import React from 'react';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import { NameProvider } from './context';

function App() {
    return (
        <NameProvider>
            <Navbar />
            <FormWrapper />
        </NameProvider>
    );
}

export default App;

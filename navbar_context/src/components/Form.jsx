import React, { useContext } from 'react';
import { NameContext } from '../context';

const Form = () => {
    const { setName } = useContext(NameContext);

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <label>
                Enter your name:
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Type your name"
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </label>
        </div>
    );
};

export default Form;

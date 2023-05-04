import React from 'react';
import Container from 'react-bootstrap/Container';

export const Title = () => {
    return (
        <>
            <Container  fluid style={{ backgroundColor: '#FF6666'}}>
                <h5 style={{ textAlign: 'left', color: 'white' }}>React Test App</h5>
            </Container>
        </>
    );
}

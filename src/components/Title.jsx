import React from 'react'
import Container from 'react-bootstrap/Container'

const titleStyle = {
    backgroundColor: '#FF6666',
    paddingTop: 2,
    paddingBottom: 2,
    marginBottom: '16px'
};

const Title = () => {
    return (
        <>
            <Container  fluid style={titleStyle}>
                <h5 style={{ textAlign: 'left', color: 'white' }}>React Test App</h5>
            </Container>
        </>
    );
}
export default Title;
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;

const Loading = ():JSX.Element => {
    return (
        <Container>
            <ActivityIndicator size='large' color='#1B1B1B' />
        </Container>
    )
}

export {Loading};
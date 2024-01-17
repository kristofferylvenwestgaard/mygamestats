'use client';
import Container from '@/components/container'
import Header from '@/components/header'
import SignUp from '@/components/signup';

export default function newUser() {
    return (
        <>
        <Header />
        <Container>
            <SignUp />
        </Container>
        </>
    )
}
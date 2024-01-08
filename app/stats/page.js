import Container from '@/components/container'
import Header from '@/components/header'
import Link from 'next/link'

export default function Stats() {
  return (
    <>
    <Header />
    <Container>
      <Link href="../">Home</Link>
    </Container>
    </>
  )
}
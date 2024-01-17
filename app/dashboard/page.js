import Container from '@/components/container'
import Header from '@/components/header'
import Link from 'next/link'
import { getUser } from '../lib/data'

export default async function Dashboard() {
    const user = await getUser("user2@nextmail.com");
    return (
      <>
      <Header />
      <Container>
        <div className='flex flex-col items-center mt-32 mb-32'>
          <h1 className='text-9xl font-medium uppercase text-center mb-12'>This is your dashboard <span className='text-lime-green'>{user.name}</span>!</h1>
          <Link href="./signup" className='flex items-center h-16 pl-8 pr-8 bg-lime-green text-black rounded'>Try now</Link>
        </div>
      </Container>
      </>
    )
  }
import Image from 'next/image'
import Container from '@/components/container'
import Header from '@/components/header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header />
    <Container>
      <div className='flex flex-col items-center mt-32 mb-32'>
        <h1 className='text-9xl font-medium uppercase text-center mb-12'>Keep track of your <span className='text-lime-green'>gamestats</span>!</h1>
        <Link href="./signup" className='flex items-center h-16 pl-8 pr-8 bg-lime-green text-black rounded'>Try now</Link>
      </div>
      <div className='flex'>
        <Image
          src="/1.avif"
          width={768}
          height={1024}
          className='w-1/3'
          alt='Formula 1 car'
        />
        <Image
          src="/3.avif"
          width={768}
          height={1024}
          className='w-1/3'
          alt='Formula 1 car'
        />
        <Image
          src="/2.avif"
          width={768}
          height={1024}
          className='w-1/3'
          alt='Formula 1 car'
        />
      </div>
    </Container>
    </>
  )
}

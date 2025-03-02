import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='w-full h-screen flex items-center justify-center space-x-10'>
            <Image src='/images/seed-a-mascot.svg' width={200} height={350} alt='Seed a Bit - mascote' />
            div
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

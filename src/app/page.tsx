import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className='w-full h-screen items-center justify-center flex flex-col space-y-16 p-10'>
            <Image src='/images/seed-a-bit.png' alt='Seed a Bit - logo' width={500} height={175} loading='eager' quality={100} />
            <div className='flex flex-col space-y-1.5 items-center justify-center text-center'>
                <h1 className='text-2xl font-medium'>Este é o template da empresa para websites.</h1>
                <p>Tudo o que você precisa pode ser encontrado no arquivo <code>README.md</code> deste repositório.</p>
            </div>
            <div>
                <Link href='https://github.com/seedabit/nextjs-react-typescript' legacyBehavior>
                    <a className='text-blue-400 hover:underline flex items-center gap-1'>
                        Template Github
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3'></path>
                        </svg>
                    </a>
                </Link>
            </div>
            <div className='w-full absolute bottom-4 flex flex-col space-y-2 items-center'>
                <hr className='w-64' />
                <p className='text-sm'>© 2025 Seed a Bit. All rights reserved.</p>
            </div>
        </div>
    )
}

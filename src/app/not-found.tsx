import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='w-full h-screen items-center justify-center flex flex-col'>
            <div className='w-full h-screen flex items-center justify-center space-x-24'>
                <Image src='/images/seed-a-mascot.svg' width={200} height={350} alt='Seed a Bit - mascote' />
                <div className='ml-32 flex flex-col items-center justify-center gap-28'>
                    <div className='flex flex-wrap flex-col gap-12 justify-center'>
                        <div className='flex flex-col justify-center gap-2'>
                            <h1 className='text-5xl'>Página não encontrada!</h1>
                            <p className='text-base font-thin dark:text-slate-400 text-slate-800'>Erro 404 - Página não encontrada</p>
                        </div>
                        <p className='text-wrap max-w-[28rem]'>Desculpe! A página que você está procurando não existe ou foi movida. Mas não se preocupe, enquanto procuramos a página, que tal plantar uma sementinha de conhecimento?</p>
                    </div>
                    <div className='flex gap-7 w-full items-center justify-center'>
                        <button className='w-60 h-10 inline-flex items-center justify-center whitespace-nowrap bg-blue-700/70 hover:bg-blue-700/85 rounded-md font-medium'>
                            <Link className='w-fit' href="/">Voltar para a página principal</Link>
                        </button>
                        <button className='w-60 h-10 inline-flex items-center justify-center whitespace-nowrap bg-blue-700/70 hover:bg-blue-700/85 rounded-md font-medium'>
                            <Link
                                className='w-fit'
                                href="https://seedabit.org.br"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conhecer a Seed
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <footer className='w-full absolute bottom-4 flex flex-col space-y-2 items-center'>
                <hr className='w-64' />
                <p className='text-sm'>© 2025 <a href='https://seedabit.org.br' target='_blank' rel='noopener noreferrer'>Seed a Bit</a>. All rights reserved.</p>
            </footer>
        </div>
    )
}

import Image from 'next/image';
import img1 from '../../assets/who1.jpg'
import img2 from '../../assets/who3.jpg'

const WhoWeAre = () => {
    return (
        <section className="bg-[url('/gradient-2.svg')] min-h-screen bg-cover bg-bottom bg-no-repeat pb-20">
            <div className='pt-10 md:pt-20 container mx-auto '>

                <div className='flex flex-col-reverse md:flex-row justify-center md:gap-15'>
                    <div className='md:pt-10 m-5 space-y-3'>
                        <p className='font-medium text-lg text-center md:text-left'>Our Ground</p>
                        <Image src={img1} alt='Image 1' height={800} width={450} className='shadow-xl rounded-lg border border-black/20 mx-auto md:mx-0' />
                    </div>

                    <div className='space-y-3 m-5'>
                        <p className='font-medium text-lg'>Who We Are</p>
                        <h2 className='text-5xl font-bold'>BUILT FOR PASSIONATE PLAYERS <br /> AND ACTIVE COMMUNITIES</h2>
                        <p className='max-w-xl font-medium'>We are a modern sports facility booking platform dedicated to making sports more accessible, organized, and convenient for everyone. From football turfs and badminton courts to swimming lanes and tennis arenas, our platform helps players discover, explore, and reserve facilities with ease. Whether you are booking for practice sessions, friendly matches, or professional training, we provide a smooth and reliable experience for every sports enthusiast.</p>

                        <Image src={img2} alt='Image 2' height={500} width={550} className='shadow-xl rounded-lg border border-black/20 mx-auto md:mx-0' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
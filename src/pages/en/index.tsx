import Head from 'next/head'
import Image from 'next/image';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import { BsCloudDownload } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';


const PROCESS_DATA = [
  { id: 81, name: 'meet', image: 'meeting.svg' },
  { id: 82, name: 'desgin', image: 'design.svg' },
  { id: 83, name: 'present', image: 'present.svg' },
  { id: 84, name: 'manufacture', image: 'manufacturing.svg' },
  { id: 85, name: 'quality check', image: 'qc.svg' },
  { id: 86, name: 'deliver', image: 'delivery.svg' },
]

const SLIDER_DATA_A = [
  { id: 51, src: '/h1.png' },
  { id: 52, src: '/h2.png' },
  { id: 53, src: '/h33.png' },
  { id: 54, src: '/h4.png' },
  { id: 55, src: '/h55.png' },

]

const SLIDER_DATA_B = [
  { id: 41, src: '/h77.png' },
  { id: 42, src: '/h88.png' },

]

import { TRANS } from '../../CONSTS'


export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Aspar for packaging solutions</title>
        <meta name="description" content={"Let aspar take care of your packaing and foucs on your product"} />
        <meta property="og:title" content={"Homepage"} />
        <meta property="og:description" content={"Let aspar take care of your packaing and foucs on your product"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asparpackaging.com/en" />
      </Head>
      <motion.main animate={{ opacity: [0.8, 1] }} transition={TRANS}  >
        <section className='flex lg:min-h-screen justify-center flex-wrap lg:pt-20'>
          <div className='w-full screen-optz px-6 lg:px-24 lg:py-12 py-8 2xl:py-24  2xl:px-12 flex flex-wrap overflow-x-hidden '>
            <motion.div animate={{ opacity: [0, 1], x: [-50, 0] }} transition={TRANS} className='w-full lg:w-1/2 h-80 xl:h-full relative overflow-hidden rounded-[4rem]'>
              <Swiper pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 3000, disableOnInteraction: false, }} className="mySwiper  select-none w-full">
                {
                  SLIDER_DATA_A.map(slid =>
                    <SwiperSlide key={slid.id}><Image className='object-cover' alt={`sample-${slid.id}`} src={slid.src} fill priority sizes='' /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
            <motion.div animate={{ x: [50, 0] }} transition={TRANS} className='w-full lg:w-1/2 lg:pl-20'>
              <div className='font-black text-4xl lg:text-6xl 2xl:text-8xl text-primary lg:mb-10 2xl:mb-20 uppercase lg:normal-case my-4 '>LET ASPAR</div>
              <div className='lg:mt-10 2xl:mb-20  font-black text-3xl lg:text-5xl 2xl:text-6xl text-primary  my-4'>TAKE CARE OF YOUR PACKAGING,</div>
              <div className='text-3xl lg:text-4xl 2xl:text-6xl max-w-md lg:leading-[5rem] text-black font-semibold'>AND FOCUS ON YOUR PRODUCT</div>
              <div className=' uppercase text-info mb-4 text-right max-w-md font-medium'>Aspar Team</div>
              <div className='text-center  my-4'>
                <Link href='/en/contact' className='btn btn-primary hover:text-primary shadow-xl h-16 text-white  border-transparent rounded-full px-8 '>
                  <div className='font-bold text-lg'>Contact us</div>
                  <div className='text-4xl ml-8'><FaArrowRight /></div>
                </Link>
              </div>

            </motion.div>
          </div>

        </section>
        <section className='flex bg-primary justify-center flex-wrap'>
          <div className='screen-optz w-full  px-6 lg:px-24 lg:py-12 py-8 2xl:py-24  2xl:px-12 '>
            <motion.div viewport={{ once: true }} whileInView={{ opacity: [0, 1], y: [-50, 0] }} transition={TRANS} className='h-60 lg:h-[80vh]  my-8 rounded-[5rem] overflow-hidden'>
              <Swiper pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper 2xl:h-full select-none">
                {
                  SLIDER_DATA_B.map(slid =>
                    <SwiperSlide key={slid.id}><Image className=' object-cover' alt={`sample-${slid.id}`} src={slid.src} fill priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,100vw" /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
          </div>

          <div className='screen-optz w-full px-12 lg:px-24 lg:py-12 py-8   2xl:px-12 '>
            <div className='w-full lg:pb-12 mb-8 flex justify-center '>
              <div className=' px-4 py-8 rounded-full border-2  border-white h-full '>
                <span className=' shadow-2xl text-2xl lg:text-4xl border-2 px-4 lg:px-12 py-4 uppercase rounded-full bg-white text-primary font-medium font-b border-transparent '>Our Process</span>
              </div>
            </div>
            <div className='flex flex-wrap lg:gap-32 justify-between'>
              {
                PROCESS_DATA.map(procs => (
                  <motion.div whileInView={{ opacity: [0, 1] }} viewport={{ once: true }} transition={TRANS} key={procs.id} className='w-[45%] lg:w-1/5'>
                    <div className=' shadow-2xl border-8 border-white rounded-full h-0 w-full pb-[90%] lg:pb-[95%] overflow-hidden'>
                      <div className='h-full w-[80%] relative pb-[60%] mt-[20%] ml-[10%]'>
                        <Image alt='sample' src={procs.image} fill />
                      </div>
                    </div>
                    <div className='bg-white shadow-lg w-full rounded-full my-4 text-center text-primary text-sm lg:text-2xl py-4 font-semibold capitalize'> {procs.name}</div>
                  </motion.div>
                ))
              }

            </div>
            <div className='flex justify-center lg:justify-end mt-20  '>
              <Link href='/en/process' className='btn bg-white hover:text-white shadow-xl h-20 text-primary  border-transparent rounded-full px-8 lg:px-16 '>
                <div className='font-bold text-lg'>
                  <div>More About</div>
                  <div> Our Process</div>

                </div>
                <div className='text-4xl ml-8'><FaArrowRight /></div>
              </Link>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  )
}

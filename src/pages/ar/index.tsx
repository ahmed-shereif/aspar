import Head from 'next/head'
import Image from 'next/image';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from "swiper";

import { BsCloudDownload } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import useIsMobile from '@/hooks/isMobile';


const PROCESS_DATA = [
  {id:1,name:'التواصل',image:'meeting.svg'},
  {id:2,name:'التصميم',image:'design.svg'},
  {id:3,name:'عرض التصميم',image:'present.svg'},
  {id:4,name:'التنفيذ',image:'manufacturing.svg'},
  {id:5,name:'تدقيق الجودة',image:'qc.svg'},
  {id:6,name:'التوصيل',image:'delivery.svg'},
]

const SLIDER_DATA_A = [
  {id:1,src:'/home.png'},
  {id:2,src:'/home.png'},
  {id:3,src:'/home.png'},
  {id:4,src:'/home.png'},
  {id:5,src:'/home.png'},

]

const SLIDER_DATA_B = [
  {id:1,src:'/sample-01.jpg'},
  {id:2,src:'/sample-02.jpg'},
  {id:3,src:'/sample-03.jpg'},
  {id:4,src:'/sample-04.jpg'},
]

import { TRANS } from '../../CONSTS'


export default function Home() {
  const isMobile = useIsMobile()
  return (
    <>
      <Head>
        <title>الصفحة الرئيسية | اسبار </title>
        <meta name="description" content={"مرحبا , سلم أسبار التغليم وركز على منتجك"} />
        <meta property="og:title" content={"الصفحة الرئيسية"} />
        <meta property="og:description" content={"مرحبا , سلم أسبار التغليم وركز على منتجك"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asparpackaging.com/ar" />        

      </Head>
      <motion.main dir='rtl' animate={{opacity:[0.8,1]}} transition={TRANS}  >
        <section className='flex lg:min-h-screen justify-center flex-wrap lg:pt-20'>
          <div className='w-full screen-optz px-12 lg:px-24 lg:py-12 py-8 2xl:py-24  2xl:px-12 flex flex-wrap overflow-x-hidden '>
            <motion.div animate={{opacity:[0,1],x:[100,0]}} transition={TRANS} className='w-full lg:w-1/2 h-80 xl:h-full relative overflow-hidden rounded-[4rem]'>
              <Swiper pagination={{clickable: true}} modules={[Autoplay,Pagination]}  autoplay={{delay: 3000,disableOnInteraction: false,}} className="mySwiper h-full select-none">
                {
                  SLIDER_DATA_A.map(slid =>
                    <SwiperSlide key={slid.id}><Image alt={`sample-${slid.id}`} src={slid.src} fill priority sizes='' /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
            <motion.div animate={{x:[50,0]}} transition={TRANS}  className='w-full lg:w-1/2 lg:pr-20'>
              <div className='font-black text-4xl lg:text-6xl 2xl:text-8xl text-primary lg:mb-10 2xl:mb-20 uppercase lg:normal-case my-4 '>مرحباً  ,</div>
              <div className='lg:mt-10 2xl:mb-20  font-black text-3xl lg:text-5xl 2xl:text-6xl text-primary  my-4'>سلمنا التغليف</div>
              <div className='text-3xl lg:text-4xl 2xl:text-6xl max-w-md lg:leading-[5rem] text-black font-semibold'>وركز على منتجك</div>
              <div className=' uppercase text-info mb-4 text-right max-w-md font-medium'>فريق أسبار</div>
              <div className='text-center  my-4'>
                <Link href='/ar/contact' className='btn btn-primary hover:text-primary shadow-xl h-16 text-white  border-transparent rounded-full px-8 '>
                  <div className='font-bold text-lg'>تواصل معنا</div>
                  <div className='text-4xl mr-8'><FaArrowLeft/></div>
                </Link>
              </div>

            </motion.div>
          </div>

        </section>
        <section className='flex bg-primary justify-center flex-wrap'>
          <div className='screen-optz w-full  px-12 lg:px-24 lg:py-12 py-8 2xl:py-24  2xl:px-12 '>
            <motion.div   viewport={{ once: true }}  whileInView={{opacity:[0,1],y:[-50,0]}}transition={TRANS} className='h-80 lg:h-[80vh]  my-8 rounded-[5rem] overflow-hidden'>
              <Swiper pagination={{clickable: true}} modules={[Autoplay,Pagination]}  autoplay={{delay: 2500,disableOnInteraction: false,}} className="mySwiper h-full select-none">
                {
                  SLIDER_DATA_B.map(slid =>
                    <SwiperSlide key={slid.id}><Image className=' object-cover' alt={`sample-${slid.id}`}  src={slid.src} fill priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,100vw" /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
            <div className='flex justify-center lg:justify-end'>
              <a href='https://www.facebook.com/' className='btn font-bold hover:border-white shadow-xl hover:text-white bg-white h-16 text-primary  border-transparent rounded-full px-8 '>
                <div className='w-28 '>حمل الكتالوج الخاص بنا</div>
                <div className='text-4xl ml-4'><BsCloudDownload/></div>
              </a>
            </div>
          </div>

          <div className='screen-optz w-full px-12 lg:px-24 lg:py-12 py-8   2xl:px-12 '>
            <div className='w-full lg:pb-12 mb-8 flex justify-center '>
              <div className=' px-4 py-12 rounded-full border-2  border-white h-full '>
                <span className=' shadow-2xl text-2xl lg:text-4xl border-2 px-12 py-4 uppercase rounded-full bg-white text-primary font-medium font-c border-transparent '>سير العملية</span>              
              </div>
            </div>            
            <div className='flex flex-wrap lg:gap-32 justify-between'>
              {
                PROCESS_DATA.map(procs =>(
                  <motion.div whileInView={{opacity:[0,1]}}  viewport={{ once: true }} transition={TRANS}   key={procs.id} className='w-[45%] lg:w-1/5'>
                    <div  className=' shadow-2xl border-8 border-white rounded-full h-0 w-full pb-[90%] lg:pb-[95%] overflow-hidden'>
                      <div className='h-full w-[80%] relative pb-[60%] mt-[20%] mr-[10%]'>
                        <Image alt='sample' src={procs.image} fill  />
                      </div>
                    </div>
                    <div className='bg-white w-full  drop-shadow-2xl rounded-full my-4 text-center text-primary text-sm lg:text-2xl py-4 font-semibold capitalize'> {procs.name}</div>
                  </motion.div>
                ))
              }
                                                              
            </div>
            <div className='flex justify-center lg:justify-end mt-20  '>
              <Link href='/ar/process' className='btn bg-white hover:text-white shadow-xl h-20 text-primary  border-transparent rounded-full px-8 lg:px-16 '>
                <div className='font-bold text-2xl'>
                  <div>للمزيد</div>

                </div>
                <div className='text-4xl mr-8'><FaArrowLeft/></div>
              </Link>            
            </div>
          </div>        
        </section>
      </motion.main>      
    </>
  )
}

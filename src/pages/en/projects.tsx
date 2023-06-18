import Head from "next/head";
import Image from "next/image";
import useIsMobile from "@/hooks/isMobile";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { TRANS } from '../../CONSTS'
import { Autoplay, Pagination } from "swiper";
import backgroundImg from '../../../public/project-img-1.jpg'
import ph_3 from '../../../public/ph-3.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

let statistics = [
  { precentage: "72% ", desc: "of people say that packaging would influence their buying decision." },
  { precentage: "64% ", desc: "of customers would try a new product because the packaging cought their eye" },

]




const SLIDER_DATA_B = [
  { id: 112, src: '/p1.png' },
  { id: 212, src: '/p2.png' },

]


const SLIDER_DATA_A = [
  { id: 442, src: '/3in-1-1.png' },
  { id: 441, src: '/3in-1-2.png' },

]


export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>Our Projects | Aspar for packaging solutions</title>
      </Head>
      <motion.main className="overflow-x-hidden lg:pt-[73px] lg:p-0 mb-4 bg-primary">

        <section className=' flex lg:min-h-screen justify-center flex-wrap bg-white'>
          <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="w-full  relative text-black flex justify-center items-center ">
            <Image alt="123" width={0}
              height={0}
              sizes="100vw"
              src={backgroundImg}
              placeholder="blur"
            />

          </motion.div>

          <div className=" bg-white ">
            <div className="text-center 2xl:text-left 2xl:ml-[150px] 2xl:pt-[70px] pt-[20px] relative mx-10" >

              <div className="absolute 2xl:top-[-150px] 2xl:w-[600px] 2xl:ms-[-400px] w-[300px] top-[-90px] ms-[-190px]" >
                <svg id="eA9XT8FSLBV1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><rect width="94.227058" height="30.531672" rx="0" ry="0" transform="translate(77.092472 107.913669)" fill="#dfae42" stroke-width="0" /><ellipse rx="13.137794" ry="15.265836" transform="translate(171.319528 123.179505)" fill="#dfae42" stroke-width="0" /></svg>
              </div>
              <p className="2xl:text-[30px] lg:text-[20px] text-[15px]  font-black">
                12-25% of your product's retail price is recommended to be paid on the packaging.

              </p>
              <p className="2xl:text-[16px] text-[8px] font-bold 2xl:ml-20 px-3 lg:px-0">
                (
                <span className="2xl:text-[16px] text-[8px] font-black"> For example:
                </span>
                <> </>
                if you sell your products at 80 SR we recommend you pay around 9.6 - 20 SR to be the cost of your product's premium packaging
                )
              </p>
            </div>

            <div className="mx-5 2xl:text-left 2xl:ml-[150px] 2xl:mt-[50px] mt-[20px]">
              {
                statistics.map((stat, i) => <p className=" 2xl:text-[28px] text-[10px]  font-black inline-block" style={{ color: '#DFAE42' }}>
                  <div className="mr-2   shadow-inner 2xl:w-[25px] 2xl:h-[25px] w-[10px] h-[10px] rounded-full" style={{ backgroundColor: '#DFAE42', display: "inline-block", boxShadow: 'inset 0px 6.95675px 6.95675px rgba(0, 0, 0, 0.25)' }}></div>
                  <span className="2xl:text-[28px] text-[10px]  font-black" style={{ color: '#000' }}>{stat.precentage} </span>
                  {stat.desc}</p>)
              }

            </div>
            <div className="text-right 2xl:mr-[40px] mr-[20px] 2xl:text-[20px] text-[9px] 2xl:mt-[80px] mt-[20px] pb-[20px] font-[500]">
              According to <strong className=" font-black">Ipsos</strong> (global market research and public opinion specialist)
            </div>
          </div>





          <div className='w-full mt-5'>
            <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className='h-32 lg:h-[60vh]  min-w-full  overflow-hidden'>
              <Swiper pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper w-full h-full select-none">
                {
                  SLIDER_DATA_A.map(slid =>
                    <SwiperSlide key={slid.id}><Image className='object-cover  w-full' alt={`sample-${slid.id}`} src={slid.src} fill priority /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
          </div>

          <div className='w-full'>

            <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="2xl:h-[300px] h-[100px] flex items-center px-[15%]" style={{ color: '#DFAE42', backgroundColor: '#DFAE42' }}>
              <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="2xl:text-[35px] text-[12px] font-black text-white ">
                <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="mr-4   shadow-inner 2xl:w-[25px] 2xl:h-[25px] w-[10px] h-[10px] rounded-full" style={{ backgroundColor: '#ffffff', display: "inline-block", boxShadow: 'inset 0px 6.95675px 6.95675px rgba(0, 0, 0, 0.25)' }}></motion.div>
                Packaging can significantly increase your sales through several <span className="text-black">advantages</span> it will provide you:

              </motion.div>
            </motion.div>


          </div>

          <div className="px-[5%] 2xl:px-0 flex w-full  screen-optz items-center lg:flex-row lg:pt-[100px] pt-[50px] flex-wrap lg:flex-nowrap bg-white  mx-auto" >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01" src={'/p3.png'} height={600} width={600} className="2xl:rounded-[100px] rounded-[70px]" />
            </motion.div>
            <motion.div viewport={{ once: true }} whileInView={{ x: [100, 0] }} className="w-full lg:w-1/2 flex flex-col justify-around  mt-8 lg:mt-0 font-[700] lg:pr-16 text-center md:text-start">
              <div className="w-full  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] " style={{ color: '#DFAE42' }}>1- User Generated Content: </div>
              <div className="w-full     2xl:text-[20px] text-[12px] ">
                Consider unboxing videos posted on TikTok or Instagram, which showcase your product. Generally, your customers are the main group you target for obtaining user-generated content, whether you have requested it or they have requested to promote your brand.
              </div>
              <div className="w-full   mt-1 lg:mt-2 2xl:text-[20px] text-[12px]">Premium packaging significantly increases your brand's chances of getting advertised by your customer as 39% of online shoppers said they would share a photo or video of a new product
              </div>
            </motion.div>
          </div>


          <div className="w-full screen-optz overflow-x-hidden  flex items-center lg:flex-row lg:pt-[150px] pt-[50px] pb-[50px] flex-wrap lg:flex-nowrap bg-white px-[5%]  mx-auto" >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-around relative  font-[700] overflow-hidden lg:pr-[100px] text-center md:text-start  mt-8 lg:mt-0">
              <div className="w-full  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] " style={{ color: '#DFAE42' }}>    2- Customer loyalty:</div>
              <div className="w-full     2xl:text-[20px] text-[12px] ">
                The first impression of your product is crucial as it can leave a lasting memory in the mind of the customer. When your product reaches the customer, it is essential to consider their initial reaction and impression, as this can significantly impact their decision to make future purchases from your brand.            </div>
              <div className="w-full   mt-1 lg:mt-2 2xl:text-[20px] text-[12px]"> Even if your product is of high quality, it may be undervalued by the customer if it is not packaged effectively. Poor packaging can lead to a negative perception of your product and can discourage customers from buying from your brand again. Therefore, it is important to invest in great packaging to ensure that your product is well-received and leaves a positive impression on the customer.
              </div>
            </motion.div>
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className='order-1 lg:order-2 w-full lg:w-1/2 h-80 xl:h-full relative overflow-hidden rounded-[4rem]  mt-8 lg:mt-0 '>
              <Swiper pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper h-full select-none">
                {
                  SLIDER_DATA_B.map(slid =>
                    <SwiperSlide key={slid.id}><Image className=' object-cover' alt={`sample-${slid.id}`} src={slid.src} fill priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,100vw" /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
          </div>



          <div className=" w-full overflow-x-hidden  flex items-center lg:flex-row lg:pt-5 2xl:pt-20  flex-wrap   lg:flex-nowrap px-[5%]  mx-auto" style={{ backgroundColor: '#DFAE42' }}>
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className=" mx-auto screen-optz w-full  flex flex-col  relative  font-[700] overflow-hidden l text-center md:text-start  mt-8 lg:mt-0">
              <div className="w-full  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] ">3- Expressing your brand:</div>
              <div className="w-full text-white    2xl:text-[20px] text-[12px] ">
                In today's highly competitive business landscape, building a strong brand identity and establishing brand recognition is crucial for the success of any company. Large corporations often allocate substantial financial resources toward creating a recognizable brand that resonates with their target audience, and investing in their packaging is just one of the many ways to achieve this goal.
              </div>
            </motion.div>
          </div>

          <div className="flex w-full items-center lg:flex-row lg:pt-[150px] pt-[50px] lg:pb-[150px] pb-[50px] flex-wrap lg:flex-nowrap  px-[5%] mx-auto " style={{ backgroundColor: '#DFAE42' }} >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01 object-cover" src={'/p4.png'} height={600} width={600} className=" 2xl:rounded-[100px] rounded-[70px]" />
            </motion.div>
            <motion.div viewport={{ once: true }} whileInView={{ x: [100, 0] }} transition={TRANS} className="w-full lg:w-1/2 flex flex-col justify-around  mt-8 lg:mt-0  lg:pr-16 text-center md:text-start font-black">
              <div className="w-full  text-white   2xl:text-[30px] text-[16px] ">
                Investing in your packaging is not just about creating a visually appealing design, but also about establishing <span className="text-black">a brand identity</span>  that resonates with your target audience and drives consumer engagement. By investing in your packaging, you can take your brand to the next level and set yourself apart from the competition.              </div>

            </motion.div>
          </div>
        </section>

      </motion.main >
    </>
  )
}

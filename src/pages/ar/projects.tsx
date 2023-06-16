import Head from "next/head";
import Image from "next/image";
import useIsMobile from "@/hooks/isMobile";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { TRANS } from '../../CONSTS'
import { Autoplay, Pagination } from "swiper";
import { BsCloudDownload } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

let statistics = [
  { precentage: " ٧٢٪ ", desc: "من الناس يقولون ان التغليف يأثر على قرار الشراء عندهم" },
  { precentage: "٦٤٪؜ ", desc: " يجربون منتج جديد فقط لأن التغليف جذبهم!" },

]




const SLIDER_DATA_B = [
  { id: 112, src: '/ph-1.jpg' },
  { id: 212, src: '/ph-2.png' },

]


const SLIDER_DATA_A = [
  { id: 442, src: '/3in-1-1.jpg' },
  { id: 441, src: '/3in-1-2.png' },

]


export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>Our Projects | Aspar for packaging solutions</title>
      </Head>
      <motion.main dir="rtl" className="overflow-x-hidden lg:pt-20 lg:p-0 mb-4 bg-primary">

        <section className=' flex lg:min-h-screen justify-center flex-wrap bg-white'>
          <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="w-full  relative text-black flex justify-center items-center ">
            <Image alt="123" width={0}
              height={0}
              sizes="100vw" className="w-full "
              src="/project-img-3.png" />
          </motion.div>

          <div className=" bg-white ">
            <div className="text-center 2xl:text-right 2xl:ms-[150px] 2xl:pt-[70px] pt-[20px]" >

              <p className="2xl:text-[30px] lg:text-[20px] text-[15px]  font-black">
                المقترح انك تصرف ١٢-٢٥٪؜ من سعر المنتج النهائي على التغليف

              </p>
              <p className="2xl:text-[16px] text-[8px] font-bold 2xl:me-20 px-3 lg:px-0">
                (
                <span className="2xl:text-[16px] text-[8px] font-black"> على سبيل المثال:
                </span>
                <> </>
                اذا كان سعر منتجك ب٨٠ ريال، فالمتوقع انك تدفع ٩.٦ الى ٢٠ ريال على التغليف للحصول على تغليف مميز
                )
              </p>
            </div>

            <div className="text-start 2xl:text-right 2xl:ms-[70px] ms-[20px] 2xl:mt-[50px] mt-[20px] ">
              {
                statistics.map((stat, i) => <p className="2xl:text-[28px] text-[12px]  font-black inline-block w-full" style={{ color: '#DFAE42' }}>
                  <div className="me-4   shadow-inner 2xl:w-[25px] 2xl:h-[25px] w-[10px] h-[10px] rounded-full" style={{ backgroundColor: '#DFAE42', display: "inline-block", boxShadow: 'inset 0px 6.95675px 6.95675px rgba(0, 0, 0, 0.25)' }}></div>
                  <span className="2xl:text-[32px] text-[12px]  font-black" style={{ color: '#000' }}>{stat.precentage} </span>
                  {stat.desc}</p>)
              }

            </div>
            <div className="text-left 2xl:ms-[40px] me-[20px] 2xl:text-[20px] text-[9px] 2xl:mt-[80px] mt-[20px] pb-[20px] font-[500]">
              الاحصائيات وفقا لموقع<strong className=" font-black"> Ipsos</strong> (شركة مختصة في تحليل الاسواق العالمية وسلوك المستهلك)
            </div>
          </div>





          <div className='w-full mt-5'>
            <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className=' h-32 lg:h-[60vh]  min-w-full  overflow-hidden '>
              <Swiper pagination={{ clickable: true }} modules={[Autoplay, Pagination]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper w-full h-full select-none">
                {
                  SLIDER_DATA_A.map(slid =>
                    <SwiperSlide key={slid.id}><Image className=' object-cover  w-full ' alt={`sample-${slid.id}`} src={slid.src} fill priority /></SwiperSlide>
                  )
                }
              </Swiper>
            </motion.div>
          </div>

          <div className='w-full'>

            <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="2xl:h-[300px] h-[100px] flex items-center px-[15%] mt-[-4px]" style={{ color: '#DFAE42', backgroundColor: '#DFAE42' }}>
              <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="2xl:text-[35px] text-[12px] font-black text-white ">
                <motion.div viewport={{ once: true }} whileInView={{ x: isMobile ? [50, 0] : [100, 0], opacity: [0, 1] }} transition={{ delay: 0.1, ...TRANS }} initial={{ opacity: 0 }} className="me-4   shadow-inner 2xl:w-[25px] 2xl:h-[25px] w-[10px] h-[10px] rounded-full" style={{ backgroundColor: '#ffffff', display: "inline-block", boxShadow: 'inset 0px 6.95675px 6.95675px rgba(0, 0, 0, 0.25)' }}></motion.div>
                أسبار تضمن <span className="text-black"> زيادة</span> في مبيعاتك في حال وفرت تغليف مميز لمنتجك..كيف؟
              </motion.div>
            </motion.div>


          </div>

          <div className="flex w-full  screen-optz items-center lg:flex-row lg:pt-[100px] pt-[50px] flex-wrap lg:flex-nowrap bg-white  mx-auto" >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01" src={'/roll1.png'} height={1000} width={1000} className="h-64 w-64 lg:h-80 lg:w-96 2xl:h-96 2xl:w-[36rem] 2xl:rounded-[100px] rounded-[70px]" />
            </motion.div>
            <motion.div viewport={{ once: true }} whileInView={{ x: [100, 0] }} className="w-full lg:w-1/2 flex flex-col justify-around  mt-8 lg:mt-0 font-[700] lg:pe-16 text-center md:text-start">
              <div className="w-full px-4  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] " style={{ color: '#DFAE42' }}>
                ١- المحتوى المصنوع من المستخدم: </div>
              <div className="w-full px-4    2xl:text-[20px] text-[12px] ">
                لا تنس أن أول شي يسويه المشتري في حال الحصول على أي منتج جديد هو مشاركة اللحظة مع المحيط اللي حوله، المشتري ممكن ينشر صور لمنتجك في منصات مثل سنابشات، تيك توك، وانستغرام.              </div>
              <div className="w-full px-4  mt-1 lg:mt-2 2xl:text-[20px] text-[12px]">التغليف الممتاز يساهم بشكل كبير في زيادة فرصة انتشار علامتك التجارية بين العامة، خصوصاً أن ٣٩٪؜ من الناس يفضلون نشر صور لمنتجهم الجديد
              </div>
            </motion.div>
          </div>


          <div className="w-full screen-optz overflow-x-hidden  flex items-center lg:flex-row lg:pt-[150px] pt-[50px] pb-[50px] flex-wrap lg:flex-nowrap bg-white px-[5%]  mx-auto" >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-around relative  font-[700] overflow-hidden lg:pe-[100px] text-center md:text-start  mt-8 lg:mt-0 ">
              <div className="w-full  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] " style={{ color: '#DFAE42' }}>    ٢- ولاء العميل:</div>
              <div className="w-full     2xl:text-[20px] text-[12px] ">
                الانطباع الأول دائماً يدوم.. وصول منتجك بطريقة فريدة من نوعها يرسخ تلك اللحظة في ذهن العميل للأبد. ونزيدك من الشعر بيت، وصول المنتج بطريقة ممتازة يُشعر العميل باحترام وانتماء لعلامتك التجارية.. ويبدا العميل تلقائيا بتسويق منتجك وتلميعه في محيطه القريب وتزيد فرص إعادة الشراء وجذب عملاء جدد في الوقت نفسه!والعكس صحيح ايضاً.. حتى لو كان منتجك الافضل جودة في السوق.. ولكن كان بتغليف سيء، بعض العملاء قد يبدؤون بالتقليل من منتجك بسبب التغليف فقط. البعض قد يشعر بإحباط في الوهلة الأولى عند النظر إلى التغليف فقط.. ويبقى ذلك الشعور مسيطر عليهم طوال فترة اقتنائهم للمنتج. وهذا قد يقلل من فرصة الشراء مرة اخرى من نفس العميل. لذات السبب، ننصحك بالاستثمار في التغليف الممتاز لإظهار منتجك بأفضل صورة ممكنة </div>
            </motion.div>
            <motion.div animate={{ opacity: [0, 1], x: [-50, 0] }} transition={TRANS} className='order-1 lg:order-2 w-full lg:w-1/2 h-80 xl:h-full relative overflow-hidden rounded-[4rem]  mt-8 lg:mt-0 '>
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
              <div className="w-full  font-black mb-1 lg:mb-2 2xl:text-[28px] text-[16px] ">٣- التعبير عن علامتك التجارية:</div>
              <div className="w-full text-white    2xl:text-[20px] text-[12px] ">
                مجال العلامات التجارية والتجارة الالكترونية تنافسي جدا، وأحد أهم الطرق للتفوق على الكثير من المنافسين هو إظهار وترسيخ علامتك التجارية قدر الإمكان.
                يمديك تحط لمسات من الهوية البصرية في موقعك الالكتروني، أو في منشورات الانستغرام.. لكن الأهم هو أنك تضمن أن العميل يستطيع التعرف عليك من بين عشرات المنافسين في السوق. تقدر تحقق الهدف هذا من خلال الحصول على تغليف ممتاز يعكس هوية وجودة علامتك التجارية.               </div>
            </motion.div>
          </div>

          <div className="flex w-full items-center lg:flex-row lg:pt-[150px] pt-[50px] lg:pb-[150px] pb-[50px] flex-wrap lg:flex-nowrap   mx-auto" style={{ backgroundColor: '#DFAE42' }} >
            <motion.div viewport={{ once: true }} whileInView={{ x: [-100, 0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01" src={'/ph-3.png'} height={1000} width={1000} className="h-64 w-64 lg:h-80 lg:w-96 2xl:h-96 2xl:w-[36rem] 2xl:rounded-[100px] rounded-[70px]" />
            </motion.div>
            <motion.div viewport={{ once: true }} whileInView={{ x: [100, 0] }} transition={TRANS} className="w-full lg:w-1/2 flex flex-col justify-around  mt-8 lg:mt-0  lg:pe-16 text-center md:text-start font-black">
              <div className="w-full  text-white p-4  2xl:text-[30px] text-[16px] ">
                الاستثمار في التغليف ليس فقط للحصول على تصميم جيد، بل حتى تستطيع إظهار علامتك التجارية للعملاء و <span className="text-black">ترسيخ الهوية البصرية في ذاكرتهم.</span> لاحظ فريقنا أن كثير من العملاء يقتنون منتجات كثيرة من العلامات التجارية السعودية.. ولكن سرعان ما ينسون هذا المنتج اشتروه من أي متجر. لذلك، حصول منتجك على تغليف مميز سيساهم في حل هذه المشكلة وجعل علامتك التجارية بارزة ولامعة أكثر لعملائك ونقلها إلى مستوى آخر
              </div>

            </motion.div>
          </div>
        </section>

      </motion.main >
    </>
  )
}

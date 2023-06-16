import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { TRANS } from "../../CONSTS";

export default function About() {
  const tt={ease:'backOut',type:'tween',duration:3}
  return (
    <>
      <Head>
        <title> عن أسبار | اسبار </title>
        <meta name="description" content={"أسبار تعمل على الهيئة الخارجية لمنتجاتكم بحيث تصل للعميل بأفضل طريقة ممكنة. يتم العمل على أدق التفاصيل لكل عميل وتصميم وتصنيع تغليف مناسب يتماشى مع سعر المنتج والهوية البصرية للمشروع."} />
        <meta property="og:title" content={"عن أسبار"} />
        <meta property="og:description" content={"أسبار تعمل على الهيئة الخارجية لمنتجاتكم بحيث تصل للعميل بأفضل طريقة ممكنة. يتم العمل على أدق التفاصيل لكل عميل وتصميم وتصنيع تغليف مناسب يتماشى مع سعر المنتج والهوية البصرية للمشروع."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asparpackaging.com/ar/about" />      
      </Head>
      <motion.main dir="rtl" animate={{opacity:1}} initial={{opacity:0.8}} transition={TRANS} className="lg:pt-[4.5rem] overflow-x-hidden flex justify-center bg-primary relative text-white flex-wrap">
        <div className="screen-optz w-full min-h-screen px-12 2xl:px-0 lg:px-24  ">
          <div className="flex lg:py-20 lg:h-[35rem] flex-wrap lg:flex-nowrap">
            <div className="bg-white w-full lg:w-1/2 absolute top-0 h-80 lg:h-[calc(35rem+4.5rem)] right-0" ></div>
            <div dir="ltr" className="w-full lg:w-1/2 flex z-40 h-80  relative lg:-right-20 ">
              <div className="w-1/3 text-primary">
                <svg className="h-full w-full" width="100" height="82" viewBox="0 0 100 82" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} d="M82.3444 33.2929L54.7382 14.6722C49.5854 11.1978 42.8156 11.2899 37.7601 14.9076L10.7679 34.2293C2.4784 40.165 2.4784 52.4919 10.7679 58.4225L37.3302 77.4321C42.4677 81.1112 49.3705 81.1419 54.5438 77.5037L82.5849 57.7982C91.1149 51.8011 90.9921 39.1212 82.3495 33.2929H82.3444Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10"/>
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} opacity="0.77" d="M89.7242 38.0506C89.192 38.7925 88.5371 39.2172 87.7388 39.8159C84.8682 41.9804 81.8594 43.9811 78.9273 46.0638C77.0955 47.3635 74.7775 48.4329 72.5158 47.6244C71.6101 47.3021 70.8988 46.7853 70.1671 46.1661C69.3228 45.4497 58.9762 36.8225 58.8739 36.9197C57.5486 35.6149 56.1312 34.223 54.7547 32.9745C51.224 29.7917 45.191 30.5798 41.4505 33.2201C41.4505 33.2201 33.9592 38.5008 33.9541 38.506L23.5666 45.8284C21.1463 47.5375 18.0863 47.8803 15.4153 46.8774C14.5658 46.5601 13.7625 46.1098 13.0256 45.5265L10.6667 43.6485L6.59868 40.3123L6.14327 39.9336L3.9839 38.158C3.83551 38.0352 3.70246 37.9175 3.57454 37.7896C3.31357 37.5286 3.07819 37.2472 2.87351 36.935C2.67907 36.6434 2.51533 36.3364 2.3874 36.0191C2.33111 35.8912 2.2953 35.7684 2.25948 35.6404C2.22366 35.5535 2.20319 35.4614 2.1776 35.3692C1.98316 34.6273 1.94734 33.8546 2.07526 33.0973C2.08038 33.0717 2.09061 33.0513 2.09061 33.0154C2.26459 32.2018 2.75582 31.4906 3.43126 30.9994C6.67544 28.6097 17.242 20.837 17.242 20.837L30.0499 11.432L40.1406 4.01745C43.3284 1.67387 47.6728 1.67387 50.8658 4.01745L64.5742 14.0928C64.5742 14.0928 71.871 19.4503 71.8761 19.4503C75.9441 22.2442 80.0122 25.0329 84.0802 27.8268C85.5794 28.8553 87.0838 29.8838 88.5882 30.9072C89.0692 31.2347 89.5553 31.5724 89.8879 32.0483C90.2206 32.5293 90.3638 33.1127 90.4969 33.6806C90.6299 34.2282 90.7578 34.7859 90.7374 35.3488C90.7067 36.0805 90.4201 36.7713 90.0926 37.4263C89.98 37.6566 89.8572 37.8561 89.7242 38.0403V38.0506Z" fill={"white"} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10"/>
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} opacity="0.77" d="M62.7227 18.3104C62.5947 18.4179 62.4617 18.5202 62.3235 18.6174L61.4895 19.2212L60.287 20.0911L50.9536 26.8507C48.7277 28.4574 45.7087 28.3653 43.5902 26.6306L34.3796 19.0728L33.2488 18.1467L31.7649 16.9237C31.6216 16.8009 31.4834 16.6832 31.3555 16.5553C31.3401 16.5399 31.3248 16.5246 31.3094 16.5092C29.3957 14.5904 29.7385 11.382 31.9235 9.77527L40.1107 3.75769C43.2986 1.4141 47.6429 1.4141 50.8359 3.75769L62.4822 12.3133C64.4676 13.7716 64.5852 16.6986 62.7227 18.3155V18.3104Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10"/>
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} opacity="0.77" d="M62.3248 62.0203L60.2882 63.494L50.9548 70.2535C48.7289 71.8603 45.7099 71.7682 43.5915 70.0335L34.3809 62.4757L31.7661 60.3215C31.6228 60.2038 31.4847 60.081 31.3568 59.953C28.9518 57.5941 29.4021 53.5824 32.1038 51.5663L43.6989 42.9288C43.8064 42.8521 43.9394 42.7702 44.0929 42.6934C45.5104 41.9822 47.2194 42.1766 48.5089 43.1079L62.1969 53.0042L62.2583 53.0502C65.0828 55.1584 65.4001 59.4209 62.7239 61.7082C62.596 61.8156 62.4681 61.918 62.3299 62.0203H62.3248Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10"/>
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} opacity="0.77" d="M33.6275 38.3324C32.7423 39.2535 31.5705 39.888 30.5266 40.6095C28.7817 41.8222 27.0215 43.0247 25.2715 44.2323C24.4783 44.7798 23.6852 45.312 22.9023 45.8748C22.0324 46.4991 21.1216 47.1132 20.0828 47.4202C18.9264 47.7579 17.6625 47.6863 16.5265 47.282C15.2831 46.8368 14.2341 46.0232 13.2312 45.1892C12.1924 44.3295 11.123 43.521 10.0587 42.6921C7.99139 41.0802 5.92413 39.4684 3.85175 37.8616C3.24795 37.3909 2.62367 36.8997 2.29618 36.2089C1.98405 35.5488 1.97893 34.7914 2.02498 34.0648C2.07104 33.2871 2.16826 32.4888 2.5418 31.8031C2.93069 31.097 3.58055 30.575 4.24576 30.1247C5.29986 29.4135 6.30279 28.6613 7.32619 27.9142C9.23994 26.5173 11.1588 25.1152 13.0726 23.7183C13.968 23.0633 14.8635 22.4134 15.759 21.7585C16.854 20.9602 18.3584 20.863 19.479 21.6254C19.4842 21.6254 19.4944 21.6357 19.4995 21.6408L24.0639 24.7826C26.3358 26.3433 28.5719 27.9756 30.8695 29.4902C31.8519 30.135 32.9009 30.7286 33.6889 31.6138C34.3797 32.3865 34.8351 33.3638 34.9631 34.3923C35.091 35.4208 34.8812 36.4852 34.3592 37.3755C34.1494 37.7337 33.8987 38.0459 33.6224 38.3375L33.6275 38.3324Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeLinecap="round" strokeLinejoin="round"/>
                  <motion.path  animate={{ pathLength: [0,1] }} transition={TRANS} opacity="0.77" d="M89.4392 38.4251C88.5642 39.3615 87.4026 40.0114 86.3741 40.7534C84.6445 41.9917 82.9099 43.2146 81.1752 44.4478C80.3923 45.0056 79.6043 45.548 78.8316 46.1211C77.972 46.7607 77.0714 47.385 76.0429 47.6971C74.8967 48.0451 73.6481 47.9683 72.5224 47.5538C71.2943 47.0984 70.2556 46.2644 69.2629 45.4201C68.2344 44.5399 67.1751 43.7161 66.1262 42.8718C64.0794 41.2241 62.0377 39.5816 59.9858 37.939C59.3871 37.458 58.7679 36.9565 58.4455 36.2504C58.1385 35.5801 58.1334 34.8074 58.1743 34.0655C58.2204 33.2723 58.3176 32.4587 58.686 31.7577C59.0698 31.0413 59.7095 30.504 60.3747 30.0435C61.4134 29.3169 62.4061 28.5493 63.4193 27.7869L69.1042 23.504C69.9895 22.8388 70.8747 22.1684 71.76 21.5032C72.8448 20.6896 74.3338 20.5873 75.4391 21.3651C75.4442 21.3702 75.4544 21.3753 75.4595 21.3804L79.9778 24.5888C82.2242 26.1853 84.4348 27.8483 86.7118 29.3936C87.684 30.0537 88.7177 30.6575 89.5006 31.5632C90.1811 32.3513 90.6365 33.3491 90.7593 34.3981C90.8873 35.4419 90.6775 36.5318 90.1607 37.4427C89.956 37.806 89.7053 38.1283 89.4289 38.4251H89.4392Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
              </div>  
              <div className="lg:pl-8 pl-2 w-2/3 flex justify-start flex-wrap items-center text-primary  font-b">
                <motion.div  viewport={{ once: true }}  whileInView={{ opacity: [0,1] }} transition={TRANS}>
                  <div className="w-full text-6xl ">aspar</div>
                  <div className="w-full text-sm lg:text-2xl 2xl:text-3xl font-light mt-2">for packaging solutions</div>                  
                </motion.div>
              </div>

            </div>
            <motion.div  viewport={{ once: true }}  whileInView={{ x: [-100,0] }} transition={TRANS} className="w-full lg:w-1/2 text-white lg:py-12 2xl:px-24 lg:px-12 mt-8 lg:mt-0 text-xl lg:text-3xl text-justify font-black font-c lg:leading-10 2xl:leading-[3rem]">  
                <div className=" text-error mb-8">تعرف على أسبار:</div>
                <span className="text-error relative italic ">
                  {/* <Image className=" absolute -top-6 right-2 m-auto" height={18} width={54} alt="red sqaures" src={'/redsqares.svg'} /> */}
                  أسبار
                </span> تعمل على الهيئة الخارجية لمنتجاتكم بحيث تصل للعميل بأفضل طريقة ممكنة. يتم العمل على أدق التفاصيل لكل عميل وتصميم وتصنيع تغليف مناسب يتماشى مع سعر المنتج والهوية البصرية للمشروع.
            </motion.div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row py-16 flex-wrap lg:flex-nowrap">
            <motion.div  viewport={{ once: true }}  whileInView={{ x: [100,0] }} transition={TRANS} className="w-full lg:w-1/2 flex flex-col justify-around text-xl lg:text-3xl mt-8 lg:mt-0 pr-12 2xl:pr-0 font-black lg:leading-10 2xl:leading-[3rem]  ">
              <div className="w-full ">فريقنا المختص بيجلس معك في اجتماع افتراضي، ويسمع اقتراحاتك حول التغليف في مشروعك، حيث نبهرك بأفضل الأفكار الإبداعية من مصممينا المبدعين.</div>
            </motion.div>
            <motion.div viewport={{ once: true }}  whileInView={{ x: [-100,0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01" src={'/about-01.png'} height={1000} width={1000}  className="h-64 w-64 lg:h-80 lg:w-96 2xl:h-96 2xl:w-[36rem]"  />
            </motion.div>

          </div>
          <div className="flex lg:flex-row lg:py-16 flex-wrap lg:flex-nowrap">
            <motion.div  viewport={{ once: true }}  whileInView={{ x: [100,0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
              <Image alt="about-01" src={'/about-02.png'} height={2000} width={2000}  className="h-64 w-64 lg:h-96 lg:w-96 rounded-full"  />
            </motion.div>
            <motion.div  viewport={{ once: true }}  whileInView={{ x: [-100,0] }} transition={TRANS} className="w-full lg:w-1/2 flex flex-col justify-around text-xl lg:text-3xl mt-8 lg:mt-0 lg:leading-10 2xl:leading-[3rem] ">
              <div className="w-full text-error font-black mb-4 lg:mb-0">ليش اخترتوا التغليف؟</div>
              <div className="w-full font-bold">  شفنا أن فيه حاجة كبيرة للتغليف الممتاز في سوق البراندات المحلية، لكن كثير من أصحاب المشاريع الناشئة والصغيرة تواجه تحديات وصعوبات للوصول إلى تغليف يعكس جودة المنتج. وبسبب ذلك، لاحظنا أن صاحب المشروع يحتاج يبذل مجهود عشان يحصل على تغليف ممتاز، وهذا يمنعه من التركيز على تطوير منتجه.</div>
            </motion.div>
          </div> 
          <div className="py-16">
            <div className="w-full text-error font-black text-xl lg:text-3xl ">التحديات اللي تواجه صاحب المشروع:</div>
            <motion.div  viewport={{ once: true }}  whileInView={{ opacity:[0,1] , y: [-50,0] }} transition={TRANS} className="flex relative my-8 lg:mt-16 justify-around flex-wrap lg:flex-nowrap ">
              <div className="my-4 lg:my-0 h-48 w-48 lg:h-64 lg:w-64 flex justify-center items-center border-[1.5rem] border-white bg-error text-2xl lg:text-4xl font-black text-white  rounded-full p-4 shadow-2xl">
                <div className="text-center">
                خدمة سيئة
                </div>
              </div>
              <div className="my-4 lg:my-0 h-48 w-48 lg:h-64 lg:w-64 flex justify-center items-center border-[1.5rem] border-white bg-error  text-2xl lg:text-4xl font-black text-white  rounded-full p-4 shadow-2xl">
                <div className="text-center">
                سعر مرتفع
                </div>
              </div>
              <div className="my-4 lg:my-0 h-48 w-48 lg:h-64 lg:w-64 flex justify-center items-center border-[1.5rem] border-white bg-error text-lg lg:text-2xl font-black text-white  rounded-full p-4 shadow-2xl">
                <div className="text-center">
                كميات ضخمة
                </div>
              </div>                            
            </motion.div>
          </div>    
          <div className="lg:py-16">
            <div className="w-full text-error font-black text-xl lg:text-3xl ">خدمات إضافية : </div>
            <div className="flex flex-wrap relative my-8 justify-around  text-xl lg:text-3xl font-bold">
              <motion.div  viewport={{ once: true }}  whileInView={{ x: [100,0] }} transition={TRANS}  className="w-full lg:w-1/2 py-8 pl-16">
                <div>التخزين:<span className="text-error font-black"> FREE</span></div>
                <div className="mt-8 lg:mt-16">أسبار تخزن لك البوكسات والاكياس في حال لم تتوفر لديكم المساحة .</div>
              </motion.div>
              <motion.div  viewport={{ once: true }}  whileInView={{ x: [-100,0] }} transition={TRANS}  className="w-full lg:w-1/2 py-8 pr-16">
                <div>الضمان الذهبي:<span className="text-error font-black"> FREE</span></div>
                <div className="mt-8 lg:mt-16">شركة أسبار تثق بالخدمة والمنتجات المقدمة لكم لذلك لكم كامل الحق باستعادة جميع المدفوعات والإبقاء على منتجاتكم في حال وجدت مشاكل متعلقة بالجودة.</div>
              </motion.div>
                                                  
            </div>
          </div>                             
        </div>
        <div className="lg:py-20 w-full bg-white flex justify-center ">
          <div className="screen-optz px-12">
            <div className="flex flex-wrap py-16">
              <motion.div  viewport={{ once: true }}  whileInView={{ x: [100,0] }} transition={TRANS} className="w-full lg:w-1/2 relative overflow-hidden justify-center flex">
                <Image alt="about-03" src={'/about-03.svg'} height={1000} width={1000}  className="h-64 w-64 lg:h-96 lg:w-96"  />
              </motion.div>            
              <motion.div  viewport={{ once: true }}  whileInView={{ x: [-100,0] }} transition={TRANS} className="w-full lg:w-1/2 flex flex-col justify-around text-xl lg:text-3xl text-black font-medium lg:leading-10 2xl:leading-[3rem] ">
                <div className="text-error font-black my-4 lg:my-8">وش يعني أسبار؟</div>
                <div>أسبار كلمة عربية فصيحة تعني الهيئة والمظهر ولأنه يهمنا هيئة ومظهر منتجك الرائع قدام عميلك اخترنا هذا الاسم ليمثل الخدمة اللي نقدمها لأصحاب المشاريع السعودية.</div>
                <div className="text-error font-black my-4 lg:my-8"> كيف قدرتوا تسوون كل هذا بسعر منخفض؟</div>
                <div>علاقتنا بعملائنا في أسبار قوية جداً، لذلك نبذل قصارى جهدنا لتقديم جميع الخدمات بجودة عالية وبأقل سعر ممكن.</div>
              </motion.div>


            </div>          
          </div>
        </div>
      </motion.main>      
    </>
  )
}

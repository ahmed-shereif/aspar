import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";
import useIsMobile from "@/hooks/isMobile";


import { TRANS } from '../../CONSTS'

const PROCESS_DATA = [
  {id:1,name:'meet',image:'/process/meet.svg',color:'#F7CC2380',desc:'You will meet virtually with our design manager and one of the elite designers of Aspar and take an initial idea of your current packaging and the targeted packaging, we will take your ideas and suggestions, and our experts will answer any inquiries.  '},
  {id:2,name:'desgin',image:'/process/design.svg',color:'#F4572280',desc:'After meeting with you, our talented designers will begin working on your new premium packaging for your products under the supervision of the design manager who will review the design before presenting it to you and eventually approving it.  '},
  {id:3,name:'present',image:'/process/present.svg',color:'#97D2D880',desc:'We will provide a fully detailed presentation with the final cost of the services after approving the design from the manager and listen to your suggestions and allow final editing before starting manufacturing.'},
  {id:4,name:'manufacturing',image:'/process/manu.svg',color:'#DFAE4280',desc:"After getting your agreement on our provided design we will start manufacturing in cooperation with Aspar's verified partners; this step might take time."},
  {id:5,name:'quality check',image:'/process/qc.svg',color:'#fdd51c80',desc:"Products will end up in Aspar's quality check department after finishing manufacturing. At this stage, our quality team will double-check if there is any damage to your packages before sending them to you."},
  {id:6,name:'delivery',image:'/process/delivery.svg',color:'#F4572280',desc:'Aspar will happily deliver your packages to your place.'},
]

export default function Process() {
  const isMobile = useIsMobile();
  return (
    <>
      <Head>
        <title>Process | Aspar for packaging solutions</title>
        <meta name="description" content={"1- Meet , You will meet virtually with our design manager and one of the elite designers of Aspar and take an initial idea of your current packaging and the targeted packaging, we will take your ideas and suggestions, and our experts will answer any inquiries."} />
        <meta property="og:title" content={"Process"} />
        <meta property="og:description" content={"1- Meet , You will meet virtually with our design manager and one of the elite designers of Aspar and take an initial idea of your current packaging and the targeted packaging, we will take your ideas and suggestions, and our experts will answer any inquiries."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asparpackaging.com/en/process" />

      </Head>
      <motion.main animate={{opacity:1}} initial={{opacity:0.8}} transition={{ease:'linear',duration:0.5}} className="overflow-x-hidden px-12 py-8 lg:p-0 mb-4">
      {
          PROCESS_DATA.map(procces =>(
            <div key={procces.id} className="flex lg:h-[50vh] flex-col-reverse lg:flex-row mt-24 lg:mt-0 first:mt-0 group overflow-hidden ">
              <div className=" w-full lg:w-1/2 flex ">
                <motion.div viewport={{once:true}} whileInView={{opacity:[0,1],width:isMobile ? ['100%','100%'] : ['0%','100%']}} initial={{opacity:0}} transition={{ease:'linear',type:"spring",bounce:0.25,duration:3}} style={{backgroundColor:procces.color}} className={`mt-10 lg:mt-0 lg w-full h-full lg:px-24 p-8 group-first:lg:pt-16 group-first:2xl:pt-24 lg:pt-8 2xl:pt-24 rounded-3xl lg:rounded-r-full shadow-xl text-lg 2xl:text-2xl`}>
                  <motion.div viewport={{once:true}} whileInView={{x:[-50,0],opacity:[0,1]}} initial={{opacity:0}} transition={{delay:0.25,...TRANS}} className="text-warning font-black capitalize">{procces.id}- {procces.name}</motion.div>
                  <motion.div viewport={{once:true}} whileInView={{opacity:1}} initial={{opacity:0}} transition={{delay:0.7,...TRANS}} className="mt-8 lg:mt-2 max-w-xl">{procces.desc}</motion.div>
                </motion.div>
              </div>
              <motion.div viewport={{once:true}} whileInView={{x:isMobile ? [50,0] : [100,0],opacity:[0,1]}}  transition={{delay:0.1,...TRANS}} initial={{opacity:0}} className="w-full lg:w-1/2 relative text-black lg:mt-20 flex justify-center items-center ">
                <Image alt="123" height={250} width={250} className="h-48 w-48 2xl:h-64 2xl:w-64" src={procces.image} />
              </motion.div>          
            </div>
  
          ))
        }
                
      </motion.main>      
    </>
  )
}

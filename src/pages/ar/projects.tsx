import Head from "next/head";

import { motion } from "framer-motion";


export default function Projects() {
  return (
    <>
      <Head>
        <title>المشاريع | اسبار لحلول التغليف</title>
      </Head>
      <motion.main animate={{opacity:1}} initial={{opacity:0.8}} transition={{ease:'linear',duration:0.5}} className="bg-primary h-screen">
      </motion.main>      
    </>
  )
}

import { useState } from 'react'

import '@/styles/globals.scss'
import '@/styles/yniverse.scss'
import 'animate.css';


import type { AppProps } from 'next/app'

import Navbar from '@/components/navbar'
import Loading from '@/components/loading'

import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  const [loading , setLoading ] = useState<boolean>(true)
  return loading ? 
    <Loading setLoading={setLoading} /> :
  ( 
  <>
    <Navbar />
    <Component {...pageProps} /> 
    <Footer /> 
  </>
)}

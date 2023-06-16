import { RefObject, useEffect, useRef, useState } from "react";

import useIsMobile from "@/hooks/isMobile";

import Link from "next/link"
import { useRouter } from 'next/router'

import { AsparIcon } from './icon'
import { motion } from "framer-motion";

const cls = ['#F7CC2380', '#F4572280', '#97D2D880', '#DFAE4280', '#fdd51c80']
const LINKS_DATA = [
  { id: 1, text: 'Home', ar: 'الرئيــــسية', link: '/' },
  { id: 2, text: 'About', ar: 'عن أسبار', link: 'about' },
  { id: 3, text: 'Process', ar: 'سير العملية', link: 'process' },
  { id: 4, text: 'Packaging', ar: 'التغليف', link: 'projects' },
  { id: 5, text: 'Contact', ar: 'تواصل معنا', link: 'contact' },
]




const NavLink = ({ index, link, scrolled, handleHovering, hover, barLeft, setMove }: { setMove: Function, index: number, link: { id: number, text: string, link: string, ar: string }, scrolled?: boolean, handleHovering: Function, hover: boolean, barLeft: number }) => {
  const main = useRef<HTMLAnchorElement | null>(null)
  const [cond, setCond] = useState<boolean>(false);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  const linker = router.pathname.split('/')[2]
  useEffect(() => {
    if (!linker && !hover && link.link === '/') {
      handleHovering(main, false)
    }
    if (linker === link.link && !hover) {
      handleHovering(main, false)
    }
  }, [link, handleHovering, hover])
  useEffect(() => {
    if (barLeft === main.current!.offsetLeft - 4) {
      setCond(true)
    } else {
      setCond(false)
    }
  }, [barLeft])
  return !linker ? (
    <Link onClick={() => { handleHovering(main, true) }} ref={main} key={link.id} onMouseEnter={() => handleHovering(main, false)} href={index === 0 ? `/${lang}` : `/${lang}/${link.link}`} className={`${index ? 'rtl:border-r-2 ltr:border-l-2' : ''} ${scrolled && cond ? 'text-primary border-white' : scrolled ? 'text-white border-white' : cond ? 'text-primary border-white' : 'text-white border-white'} uppercase w-1/5  flex justify-center py-5 pt-6 font-bold cursor-pointer text-lg tracking-wide  hover:text-secondary transition-colors duration-400`}>
      {lang === 'en' ? link.text : link.ar}
    </Link>
  ) : linker === 'about' ? (
    <Link onClick={() => handleHovering(main, true)} ref={main} key={link.id} onMouseEnter={() => handleHovering(main, false)} href={index === 0 ? `/${lang}` : link.link} className={`${index ? 'rtl:border-r-2 ltr:border-l-2' : ''} ${cond ? 'text-white border-primary' : 'text-primary border-primary'} uppercase w-1/5  flex justify-center py-5 pt-6 font-bold cursor-pointer text-lg tracking-wide  hover:text-secondary transition-colors duration-400`}>
      {lang === 'en' ? link.text : link.ar}
    </Link>
  ) : linker === 'process' ? (
    <Link onClick={() => handleHovering(main, true)} ref={main} key={link.id} onMouseEnter={() => handleHovering(main, false)} href={index === 0 ? `/${lang}` : link.link} className={`${cond && index ? 'border-l-0' : ''} ${cond ? 'text-white border-primary' : 'text-black border-black'} uppercase w-1/5  flex justify-center py-5 pt-6 font-bold cursor-pointer text-lg tracking-wide  hover:text-secondary transition-colors duration-400`}>
      {lang === 'en' ? link.text : link.ar}
    </Link>
  ) : linker === 'contact' ? (
    <Link onClick={() => handleHovering(main, true)} ref={main} key={link.id} onMouseEnter={() => handleHovering(main, false)} href={index === 0 ? `/${lang}` : link.link} className={`${index ? 'rtl:border-r-2 ltr:border-l-2 ' : ''} ${cond ? 'text-white border-netural' : 'text-neutral border-neutral'} uppercase w-1/5  flex justify-center py-5 pt-6 font-bold cursor-pointer text-lg tracking-wide border-neutral hover:text-white transition-colors duration-400`}>
      {lang === 'en' ? link.text : link.ar}
    </Link>
  ) : (
    <Link onClick={() => handleHovering(main, true)} ref={main} key={link.id} onMouseEnter={() => handleHovering(main, false)} href={index === 0 ? `/${lang}` : link.link} className={`${index ? 'rtl:border-r-2 ltr:border-l-2' : ''} ${scrolled && cond ? 'text-white border-primary' : scrolled ? 'text-primary border-primary' : cond ? 'text-primary border-white' : 'text-white border-white'} uppercase w-1/5  flex justify-center py-5 pt-6 font-bold cursor-pointer text-lg tracking-wide  hover:text-secondary transition-colors duration-400`}>
      {lang === 'en' ? link.text : link.ar}
    </Link>
  )
}

interface barProps {
  barLeft: number
  handleHovering: Function
  setMove: Function
}

const MobileBar = (): JSX.Element => {
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  const linker = router.pathname.split('/')[2]
  return (
    <div className={`w-full ${linker === 'contact' ? 'bg-white' : 'bg-primary'} navbar z-[1000] px-12 transition-colors duration-500`}>
      <Link href={`/${lang}`} className={`${linker === 'contact' ? 'text-neutral' : 'text-white'} navbar-start  `}>
        <AsparIcon className="h-16 w-16 2xl:h-20 2xl:w-20" fill={'none'} stroke={'currentColor'} />
      </Link>
      <div className="w-8/12 navbar-end">
        <div className="lg:hidden dropdown">
          <label tabIndex={0} className={`${linker === 'contact' ? 'text-neutral' : 'text-white'} btn btn-ghost btn-circle text-neutral`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className={`${linker === 'contact' ? 'bg-white' : 'bg-primary'} menu menu-compact dropdown-content top-10 -left-[10rem] rtl:-right-[10rem] mt-3 p-4 shadow rounded-lg w-52`}>
            {
              LINKS_DATA.map((link) => (
                <Link key={link.id} href={link.id === 1 ? `/${lang}` : `/${lang}/${link.link}`} className={`${linker === 'contact' ? 'text-neutral' : 'text-white'} uppercase py-4 font-bold cursor-pointer text-md tracking-widest border-b-2 border-transparent hover:border-white w-full transition-colors duration-[600ms]`}>
                  {lang === 'en' ? link.text : link.ar}
                </Link>
              ))
            }
            <Link href={lang === 'en' && linker ? `/ar/${linker}` : lang === 'en' && !linker ? `/ar/` : lang === 'ar' && linker ? `/en/${linker}` : '/en'} className="h-8 w-8 z-[10000] absolute border-primary border cursor-pointer ltr:right-2 top-6 lg:my-auto lg:bottom-0 lg:top-2 lg:left-5 lg:right-0 rtl:lg:right-5 rtl:left-2 rtl:top-6 rounded-full overflow-hidden">
              <img className="h-full w-full object-cover " alt="lang" src={lang === 'en' ? '/ar.png' : '/en.png'} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

const HomeBar = ({ barLeft, handleHovering, setMove }: barProps): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  useEffect(() => {
    setMove(true)
    const handleScroll = (): void => {
      const offset: number = window.scrollY;
      if (offset > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`w-full fixed -top-1 ${scrolled ? 'text-primary' : 'text-white'} navbar p-0  h-16 2xl:h-20 z-50`}>
      <div className={`${scrolled ? 'text-white' : 'text-primary'} rtl:flex-row-reverse navbar-start w-4/12 px-24 relative flex transition-colors duration-300 mt-2 `}>
        <Link href={`/${lang}`} className="rtl:w-4/12">
          <AsparIcon className="h-16 w-16 2xl:h-20 2xl:w-20" fill={scrolled ? 'currentColor' : '#dfae42'} stroke={!scrolled ? '#fff' : '#dfae42'} />
        </Link>
        <div className="w-8/12 px-4 rtl:text-left">
          <div className="font-b font-medium text-xl">aspar</div>
          <div className="text-sm font-b ml font-extralight">for packaging solutions</div>
        </div>

      </div>
      <div className={`${scrolled ? 'bg-transparent border-white' : 'bg-primary border-transparent'} relative overflow-hidden border-t-0 rtl:border-l-0 ltr:border-r-0 border-2 rtl:rounded-br-full ltr:rounded-bl-full w-8/12 flex text-texter justify-center transition-colors duration-300 `}>
        <span style={{ left: barLeft }} className={`${scrolled ? 'bg-white ' : 'bg-white '} h-full absolute w-[calc(20%+0.4rem)] left-0 transition-[left] duration-300 z-0`} />
        <ul className="menu h-full menu-horizontal px-1 w-full flex z-50">
          {
            LINKS_DATA.map((link, index) => (
              <NavLink handleHovering={handleHovering} setMove={setMove} barLeft={barLeft} hover={hover} key={index} index={index} scrolled={scrolled} link={link} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const AboutBar = ({ barLeft, handleHovering, setMove }: barProps): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  useEffect(() => {
    setMove(true)
    const handleScroll = (): void => {
      const offset: number = window.scrollY;
      if (offset > 560) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`w-full fixed -top-1 navbar p-0  h-16 2xl:h-20 z-50`}>
      <div className={`${scrolled ? 'text-white' : 'text-primary'} rtl:flex-row-reverse navbar-start w-4/12 px-24 relative flex transition-colors duration-300 mt-6 `}>
        <Link href={`/${lang}`} className="rtl:w-4/12">
          <AsparIcon className="h-16 w-16 2xl:h-20 2xl:w-20" fill={scrolled ? 'currentColor' : '#dfae42'} stroke={!scrolled ? '#fff' : '#dfae42'} />
        </Link>
        <div className="w-8/12 px-4 rtl:text-left">
          <div className="font-b font-medium text-xl">aspar</div>
          <div className="text-sm font-b ml font-extralight">for packaging solutions</div>
        </div>
      </div>
      <div className={`bg-white border-primary relative overflow-hidden border-t-0 rtl:border-l-0 ltr:border-r-0 border-2 rtl:rounded-br-full ltr:rounded-bl-full w-8/12 flex text-texter justify-center transition-colors duration-300 `}>
        <span style={{ left: barLeft }} className={`bg-primary h-full absolute w-[calc(20%+0.4rem)] left-0 transition-[left] duration-300 z-0`} />
        <ul className="menu menu-horizontal px-1 w-full flex z-50">
          {
            LINKS_DATA.map((link, index) => (
              <NavLink handleHovering={handleHovering} setMove={setMove} barLeft={barLeft} hover={hover} key={index} index={index} link={link} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const ProcessBar = ({ barLeft, handleHovering, setMove }: barProps): JSX.Element => {
  const [process, setProcess] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<number>(0)
  const [isDown, setIsDown] = useState<boolean>(false)

  const router = useRouter();
  const lang = router.pathname.split('/')[1]

  useEffect(() => {
    setMove(true)
    const handleScroll = (): void => {
      const offset: number = window.scrollY;
      setScrolling(offset)
      if (offset > (window.innerHeight / 1.9)) {
        setProcess(Math.ceil(offset / (window.innerHeight / 2.1)) - 1);
      } else {
        setProcess(0);
      }
      if (scrolling > offset) {
        setIsDown(false)
      } else {
        setIsDown(true)
      }

    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`w-full duration-500 fixed -top-1 navbar p-0  h-16 2xl:h-20 z-50`}>
      <div className={` text-white ${isDown ? '-top-20' : '-top-1'} transition-all navbar-start w-4/12 px-24 rtl:flex-row-reverse relative flex duration-300 mt-6 `}>
        <Link href={`/${lang}`} className="rtl:w-4/12">
          <AsparIcon className="h-16 w-16 2xl:h-20 2xl:w-20" fill={""} stroke={"currentColor"} />
        </Link>
        <div className="w-8/12 px-4 rtl:text-left">
          <div className="font-b font-medium text-xl">aspar</div>
          <div className="text-sm font-b ml font-extralight">for packaging solutions</div>
        </div>
      </div>
      <div className={`bg-transparent border-black relative overflow-hidden border-t-0 rtl:border-l-0 ltr:border-r-0 border-2 rtl:rounded-br-full ltr:rounded-bl-full w-8/12 flex justify-center transition-colors duration-300 `}>
        <span style={{ left: barLeft, backgroundColor: cls[process] }} className={`h-full  absolute w-[calc(20%+0.4rem)] left-0 transition-[left,background-color] duration-300 z-0`} />
        <ul className="menu menu-horizontal px-1 w-full flex z-50">
          {
            LINKS_DATA.map((link, index) => (
              <NavLink handleHovering={handleHovering} setMove={setMove} barLeft={barLeft} hover={hover} key={index} index={index} link={link} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}



const ProjectsBar = ({ barLeft, handleHovering, setMove }: barProps): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  useEffect(() => {
    setMove(true)
    const handleScroll = (): void => {
      const offset: number = window.scrollY;
      if (offset > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`w-full fixed -top-1 ${scrolled ? 'text-primary' : 'text-white'} navbar p-0  h-16 2xl:h-20 z-50`}>
      <div className={`${scrolled ? 'text-white' : 'text-white'} rtl:flex-row-reverse navbar-start w-4/12 px-24 relative flex transition-colors duration-300 mt-2 `}>
        <Link href={`/${lang}`} className="rtl:w-4/12">
          <AsparIcon className="h-16 w-16 2xl:h-20 2xl:w-20" fill={scrolled ? 'currentColor' : '#dfae42'} stroke={!scrolled ? '#fff' : '#dfae42'} />
        </Link>
        <div className="w-8/12 px-4 rtl:text-left">
          <div className="font-b font-medium text-xl">aspar</div>
          <div className="text-sm font-b ml font-extralight">for packaging solutions</div>
        </div>

      </div>
      <div className={`${scrolled ? 'bg-white border-black' : 'bg-primary border-black'} relative overflow-hidden border-t-0 rtl:border-l-0 ltr:border-r-0 border-2 rtl:rounded-br-full ltr:rounded-bl-full w-8/12 flex text-texter justify-center transition-colors duration-300 `}>
        <span style={{ left: barLeft }} className={`${scrolled ? 'bg-[#dfae42] ' : 'bg-white '} h-full absolute w-[calc(20%+0.4rem)] left-0 transition-[left] duration-300 z-0`} />
        <ul className="menu h-full menu-horizontal px-1 w-full flex z-50">
          {
            LINKS_DATA.map((link, index) => (
              <NavLink handleHovering={handleHovering} setMove={setMove} barLeft={barLeft} hover={hover} key={index} index={index} scrolled={scrolled} link={link} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}




const ContactBar = ({ barLeft, handleHovering, setMove }: barProps): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]

  useEffect(() => {
    setMove(true)
  }, [])
  return (
    <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className={`w-full fixed -top-1 navbar p-0  h-16 2xl:h-20 z-50`}>
      <div className={` text-white navbar-start w-4/12 px-24 rtl:flex-row-reverse relative flex transition-colors duration-300 mt-6 `}>
        <Link href={`/${lang}`} className="rtl:w-4/12">
          <svg className="h-16 w-16 2xl:h-20 2xl:w-20" width="100" height="82" viewBox="0 0 100 82" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M82.3444 33.2929L54.7382 14.6722C49.5854 11.1978 42.8156 11.2899 37.7601 14.9076L10.7679 34.2293C2.4784 40.165 2.4784 52.4919 10.7679 58.4225L37.3302 77.4321C42.4677 81.1112 49.3705 81.1419 54.5438 77.5037L82.5849 57.7982C91.1149 51.8011 90.9921 39.1212 82.3495 33.2929H82.3444Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10" />
            <path opacity="0.77" d="M89.7242 38.0506C89.192 38.7925 88.5371 39.2172 87.7388 39.8159C84.8682 41.9804 81.8594 43.9811 78.9273 46.0638C77.0955 47.3635 74.7775 48.4329 72.5158 47.6244C71.6101 47.3021 70.8988 46.7853 70.1671 46.1661C69.3228 45.4497 58.9762 36.8225 58.8739 36.9197C57.5486 35.6149 56.1312 34.223 54.7547 32.9745C51.224 29.7917 45.191 30.5798 41.4505 33.2201C41.4505 33.2201 33.9592 38.5008 33.9541 38.506L23.5666 45.8284C21.1463 47.5375 18.0863 47.8803 15.4153 46.8774C14.5658 46.5601 13.7625 46.1098 13.0256 45.5265L10.6667 43.6485L6.59868 40.3123L6.14327 39.9336L3.9839 38.158C3.83551 38.0352 3.70246 37.9175 3.57454 37.7896C3.31357 37.5286 3.07819 37.2472 2.87351 36.935C2.67907 36.6434 2.51533 36.3364 2.3874 36.0191C2.33111 35.8912 2.2953 35.7684 2.25948 35.6404C2.22366 35.5535 2.20319 35.4614 2.1776 35.3692C1.98316 34.6273 1.94734 33.8546 2.07526 33.0973C2.08038 33.0717 2.09061 33.0513 2.09061 33.0154C2.26459 32.2018 2.75582 31.4906 3.43126 30.9994C6.67544 28.6097 17.242 20.837 17.242 20.837L30.0499 11.432L40.1406 4.01745C43.3284 1.67387 47.6728 1.67387 50.8658 4.01745L64.5742 14.0928C64.5742 14.0928 71.871 19.4503 71.8761 19.4503C75.9441 22.2442 80.0122 25.0329 84.0802 27.8268C85.5794 28.8553 87.0838 29.8838 88.5882 30.9072C89.0692 31.2347 89.5553 31.5724 89.8879 32.0483C90.2206 32.5293 90.3638 33.1127 90.4969 33.6806C90.6299 34.2282 90.7578 34.7859 90.7374 35.3488C90.7067 36.0805 90.4201 36.7713 90.0926 37.4263C89.98 37.6566 89.8572 37.8561 89.7242 38.0403V38.0506Z" fill={"#37AEBA"} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10" />
            <path opacity="0.77" d="M62.7227 18.3104C62.5947 18.4179 62.4617 18.5202 62.3235 18.6174L61.4895 19.2212L60.287 20.0911L50.9536 26.8507C48.7277 28.4574 45.7087 28.3653 43.5902 26.6306L34.3796 19.0728L33.2488 18.1467L31.7649 16.9237C31.6216 16.8009 31.4834 16.6832 31.3555 16.5553C31.3401 16.5399 31.3248 16.5246 31.3094 16.5092C29.3957 14.5904 29.7385 11.382 31.9235 9.77527L40.1107 3.75769C43.2986 1.4141 47.6429 1.4141 50.8359 3.75769L62.4822 12.3133C64.4676 13.7716 64.5852 16.6986 62.7227 18.3155V18.3104Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10" />
            <path opacity="0.77" d="M62.3248 62.0203L60.2882 63.494L50.9548 70.2535C48.7289 71.8603 45.7099 71.7682 43.5915 70.0335L34.3809 62.4757L31.7661 60.3215C31.6228 60.2038 31.4847 60.081 31.3568 59.953C28.9518 57.5941 29.4021 53.5824 32.1038 51.5663L43.6989 42.9288C43.8064 42.8521 43.9394 42.7702 44.0929 42.6934C45.5104 41.9822 47.2194 42.1766 48.5089 43.1079L62.1969 53.0042L62.2583 53.0502C65.0828 55.1584 65.4001 59.4209 62.7239 61.7082C62.596 61.8156 62.4681 61.918 62.3299 62.0203H62.3248Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeMiterlimit="10" />
            <path opacity="0.77" d="M33.6275 38.3324C32.7423 39.2535 31.5705 39.888 30.5266 40.6095C28.7817 41.8222 27.0215 43.0247 25.2715 44.2323C24.4783 44.7798 23.6852 45.312 22.9023 45.8748C22.0324 46.4991 21.1216 47.1132 20.0828 47.4202C18.9264 47.7579 17.6625 47.6863 16.5265 47.282C15.2831 46.8368 14.2341 46.0232 13.2312 45.1892C12.1924 44.3295 11.123 43.521 10.0587 42.6921C7.99139 41.0802 5.92413 39.4684 3.85175 37.8616C3.24795 37.3909 2.62367 36.8997 2.29618 36.2089C1.98405 35.5488 1.97893 34.7914 2.02498 34.0648C2.07104 33.2871 2.16826 32.4888 2.5418 31.8031C2.93069 31.097 3.58055 30.575 4.24576 30.1247C5.29986 29.4135 6.30279 28.6613 7.32619 27.9142C9.23994 26.5173 11.1588 25.1152 13.0726 23.7183C13.968 23.0633 14.8635 22.4134 15.759 21.7585C16.854 20.9602 18.3584 20.863 19.479 21.6254C19.4842 21.6254 19.4944 21.6357 19.4995 21.6408L24.0639 24.7826C26.3358 26.3433 28.5719 27.9756 30.8695 29.4902C31.8519 30.135 32.9009 30.7286 33.6889 31.6138C34.3797 32.3865 34.8351 33.3638 34.9631 34.3923C35.091 35.4208 34.8812 36.4852 34.3592 37.3755C34.1494 37.7337 33.8987 38.0459 33.6224 38.3375L33.6275 38.3324Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.77" d="M89.4392 38.4251C88.5642 39.3615 87.4026 40.0114 86.3741 40.7534C84.6445 41.9917 82.9099 43.2146 81.1752 44.4478C80.3923 45.0056 79.6043 45.548 78.8316 46.1211C77.972 46.7607 77.0714 47.385 76.0429 47.6971C74.8967 48.0451 73.6481 47.9683 72.5224 47.5538C71.2943 47.0984 70.2556 46.2644 69.2629 45.4201C68.2344 44.5399 67.1751 43.7161 66.1262 42.8718C64.0794 41.2241 62.0377 39.5816 59.9858 37.939C59.3871 37.458 58.7679 36.9565 58.4455 36.2504C58.1385 35.5801 58.1334 34.8074 58.1743 34.0655C58.2204 33.2723 58.3176 32.4587 58.686 31.7577C59.0698 31.0413 59.7095 30.504 60.3747 30.0435C61.4134 29.3169 62.4061 28.5493 63.4193 27.7869L69.1042 23.504C69.9895 22.8388 70.8747 22.1684 71.76 21.5032C72.8448 20.6896 74.3338 20.5873 75.4391 21.3651C75.4442 21.3702 75.4544 21.3753 75.4595 21.3804L79.9778 24.5888C82.2242 26.1853 84.4348 27.8483 86.7118 29.3936C87.684 30.0537 88.7177 30.6575 89.5006 31.5632C90.1811 32.3513 90.6365 33.3491 90.7593 34.3981C90.8873 35.4419 90.6775 36.5318 90.1607 37.4427C89.956 37.806 89.7053 38.1283 89.4289 38.4251H89.4392Z" fill={""} stroke={"currentColor"} strokeWidth="2.17897" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div className="w-8/12 px-4 rtl:text-left">
          <div className="font-b font-medium text-xl">aspar</div>
          <div className="text-sm font-b ml font-extralight">for packaging solutions</div>
        </div>

      </div>
      <div className={`bg-white border-neutral relative overflow-hidden rtl:border-l-0 ltr:border-r-0 border-2 rtl:rounded-br-full ltr:rounded-bl-full w-8/12 flex justify-center transition-colors duration-300 `}>
        <span style={{ left: barLeft }} className={`h-full bg-neutral absolute w-[calc(20%+0.4rem)] left-0 transition-[left,background-color] duration-300 z-0`} />
        <ul className="menu menu-horizontal px-1 w-full flex z-50">
          {
            LINKS_DATA.map((link, index) => (
              <NavLink handleHovering={handleHovering} setMove={setMove} barLeft={barLeft} hover={hover} key={index} index={index} link={link} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}


const Navbar = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [barLeft, setLeft] = useState<number>(0);
  const [move, setMove] = useState<boolean>(true);
  const router = useRouter();
  const lang = router.pathname.split('/')[1]
  const linker = router.pathname.split('/')[2]

  const handleHovering = (el: RefObject<HTMLAnchorElement>, clicked: boolean) => {
    let left = barLeft
    left = el.current!.offsetLeft - 4
    move && setLeft(left)
    if (move && clicked) {
      setMove(false)
    }
    if (!move && clicked) {
      setMove(true)
    }
  }

  return (
    <motion.div dir={lang === 'en' ? 'ltr' : 'rtl'} className=" lg:absolute  top-0 w-full h-20 left-0 z-50" animate={{ opacity: [0, 1], y: [-20, 0] }} transition={{ ease: 'linear', duration: 0.5 }} >
      <Link href={lang === 'en' && linker ? `/ar/${linker}` : lang === 'en' && !linker ? `/ar/` : lang === 'ar' && linker ? `/en/${linker}` : '/en'} className="h-8 w-8 z-[10000] hidden lg:block lg:absolute border-primary border cursor-pointer right-2 top-6 lg:my-auto lg:bottom-0 lg:top-2 lg:left-5 lg:right-0 rtl:lg:right-5 rtl:left-2 rtl:top-6 rounded-full overflow-hidden">
        <img className="h-full w-full object-cover " alt="lang" src={lang === 'en' ? '/ar.png' : '/en.png'} />
      </Link>
      {
        isMobile ? <MobileBar />
          : !linker ? <HomeBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
            : linker === 'about' ? <AboutBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
              : linker === 'process' ? <ProcessBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
                : linker === 'projects' ? <ProjectsBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
                  : linker === 'contact' ? <ContactBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
                    : <HomeBar handleHovering={handleHovering} barLeft={barLeft} setMove={setMove} />
      }

    </motion.div>
  )


}


export default Navbar
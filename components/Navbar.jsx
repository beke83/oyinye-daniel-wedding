"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { close, menu } from '../public/index'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-white flexBetween max-container padding-container relative z-30 py-4 blue">
        <Link href="/">
          <div className="transition-all hover:font-bold lg:flexCenter font-petit text-[21px] lg:regular-40 gap-5 lg:mt-5 blue">
            Gift & Daniel
            {/* Gift  <span>
            <Image src='./wedding-rings.svg' width={40} height={40} alt='wedding rings' />
          </span> Daniel */}
          </div>
          <h6 className="font-lato flexCenter lg:flexCenter lg:mr-7 xl:flexCenter xl:mr-12 text-[9px] lg:mt-0 blue uppercase">We Are Getting Married</h6>
        </Link>

        <ul className="flexCenter xs:hidden h-full lg:gap-10 xl:gap-20 lg:flex ">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="font-noto font-[500] lg:text-[15px] xl:text-[18px] uppercase flexCenter cursor-pointer transition-all hover:font-semibold hover:border-b-4 hover:border-b-[#34307a]">
              {link.label}
            </Link>
          ))}
        </ul>
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={24}
          height={24}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setToggle((prev) => !prev)}
        />
      </nav>

      {/*mobile view */}
      <div className={`${toggle ? 'flex scale-in-ver-top' : 'hidden scale-out-ver-top '} backdrop-blur-md bg-white/30 z-30 absolute top-22 w-full h-full bg-white`}>
        <div className="flex flex-col gap-6 mx-auto mt-10">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} onClick={() => toggle && setToggle(false)} className="blue flex justify-center font-noto font-[400] text-[16px] uppercase cursor-pointer transition-all hover:font-semibold hover:border-b-4 hover:border-b-[#34307a]">
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}

export default Navbar
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import linux from './assets/logo/linux-svgrepo-com.svg';
// import chara from "./assets/chara.png";
import ctf from './assets/logo/imagesctf.jpg';
import bootstrap from "./assets/logo/bootstrap-fill-svgrepo-com.svg";
import php from "./assets/logo/php-svgrepo-com.svg";
import python from "./assets/logo/python-svgrepo-com.svg";
import tailwind from "./assets/logo/tailwind-svgrepo-com.svg";
import unity from "./assets/logo/unity-svgrepo-com.svg";
import react from "./assets/logo/react-svgrepo-com.svg";
import figma from "./assets/logo/figma-svgrepo-com.svg";
import js from "./assets/logo/js-svgrepo-com.svg";
import html from "./assets/logo/html-5-svgrepo-com(1).svg";
import css from "./assets/logo/css-3-svgrepo-com.svg";
import pelatihan from "./assets/pelatihan.jpg";
import linkedinmicrosoft from "./assets/linkedinmicrosoft.png";
import cisco from "./assets/cisco.png";
import mysql from "./assets/logo/mysql-logo-svgrepo-com.svg";
import photoshop from "./assets/logo/photoshop-cc-logo-svgrepo-com.svg";
import canva from "./assets/logo/canva-svgrepo-com.svg";
import laravel from "./assets/logo/laravel-svgrepo-com.svg";
import lightroom from "./assets/logo/adobe-lightroom-svgrepo-com.svg";
import displaygambar from "./assets/display.png";
import cekjulukan from './assets/image.png';
import flappymonkey from './assets/gambar2.jpg';
import perpus from './assets/gambar2.png';
import cv from './assets/CV - Andika Cahya Rahman.pdf-1.pdf';

function LoadingScreen({fadeout}: {fadeout: boolean}) {
  return (
    <>
      <div
        className={`min-h-screen bg-black inset-0 place-content-center transition-opacity duration-1000 ease-in ${fadeout ? "opacity-0" : "opacity-100"}`}
      >
        <h1 className="text-center font-bold sm:text-4xl text-white">
          Welcome To My Portfolio
        </h1>
      </div>
    </>
  );
}

function Main() {
  return (
    <>
      <Disclosure
        as="nav"
        className="relative bg-black border-b-1 border-white dark:bg-black-800/50 sm:p-4 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-start px-3 font-bold text-white justify-start sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <h1 className="sm:text-xl">Andika Cahya Rahman</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#home"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1  hover:border-white"
                  >
                    Home
                  </a>
                  <a
                    href="#aboutme"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1  hover:border-white"
                  >
                    About
                  </a>
                  <a
                    href="#certificate"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1 hover:border-white"
                  >
                    Certificate
                  </a>
                   <a
                    href="#skills"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1  hover:border-white"
                  >
                    Skills
                  </a>
                  <a
                    href="#project"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1  hover:border-white"
                  >
                    Project
                  </a>
                  <a
                    href="#contact"
                    className="rounded-md px-3 py-2 text-sm text-white  hover:bg-blue-800 hover:border-1 hover:border-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <DisclosureButton>
              <a
                href="#home"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 hover:border-1 hover:border-white"
              >
                Home
              </a>
              <a
                href="#aboutme"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 text-base hover:border-1 hover:border-white"
              >
                About
              </a>
              <a
                href="#certificate"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 text-base hover:border-1 hover:border-white"
              >
                Certificate
              </a>
               <a
                href="#skills"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 text-base hover:border-1 hover:border-white"
              >
                Skills
              </a>
              <a
                href="#project"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 text-base hover:border-1 hover:border-white"
              >
                Project
              </a>
              <a
                href="#contact"
                className="block rounded-md px-3 text-white hover:bg-blue-800 font-bold py-2 text-base hover:border-1 hover:border-white"
              >
                Contact
              </a>
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Home />
      <AboutMe />
      <Certificate />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

function Home() {
  const teks = ["Hi, I'm Andika"];

  const [efekteks, setEfekteks] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [hapusteks, setHapusteks] = useState(false);

  useEffect(() => {
    if (efekteks >= teks.length) setEfekteks(0);

    const baru = teks[efekteks];

    if (subindex === baru.length + 1 && !hapusteks) {
      setTimeout(() => setHapusteks(true), 2000);
      return;
    }

    if (subindex === 0 && hapusteks) {
      setHapusteks(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubindex((prev) => prev + (hapusteks ? -1 : 1));
      },
      hapusteks ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subindex, hapusteks, efekteks, teks]);

  return (
    <div
      className="flex items-center place-content-center sm:flex-row flex-col gap-9 sm:space-x-32 sm:gap-32 min-h-screen"
      id="home"
    >
      <div className="p-10 space-y-1">
        <h1 className="text-white font-bold text-3xl">
          {teks[efekteks].substring(0, subindex)}
        </h1>
        <h1 className="text-white font-bold text-xl">Software Engineer Student</h1>
        <p className="text-white w-90">
Saya adalah siswa SMK Rekayasa Perangkat Lunak yang tertarik pada dunia pemrograman, khususnya di bidang pengembangan aplikasi dan teknologi informasi.        </p>
        <div className="flex-1 flex space-x-3">
          <a
            href={cv}
            className="rounded-xl flex gap-3 w-40 mt-3 p-2 border-3 border-black hover:scale-110 hover:duration-300 hover:bg-blue-900 hover:text-white bg-blue-950 text-center text-blue-100 font-semibold"
            download
          >
            <i className="fa-solid fa-file p-1"></i>
            <h1>            Download CV
</h1>
          </a>
          <a
            href="#aboutme"
            className="rounded-xl hover:scale-110 hover:duration-300 mt-3 p-2 border-3 border-black hover:bg-blue-900 hover:text-white bg-blue-950 text-center text-blue-100 font-semibold"
          >
            About Me
          </a>
        </div>
      </div>
      {/* <div className="">
        <img src={chara} height={100} alt="tes" />
      </div> */}
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className="flex animasi items-center h-screen scroll-smooth md:scroll-auto flex-col w-full sm:px-50 space-y-10 px-12 justify-center mt-40 "
      id="aboutme"
    >
      <h1 className="text-white text-4xl font-bold">About</h1>
      <p className="text-white sm:text-xl">
Saya Andika Cahya Rahman. Saya memiliki ketertarikan yang besar pada dunia pemrograman dan komputer. Saya senang mempelajari hal-hal baru, baik di bidang akademik maupun non-akademik, terutama yang belum saya kuasai. Selain itu, saya memiliki ketertarikan dalam menyelesaikan masalah secara efektif di setiap tugas atau proyek yang saya kerjakan.      </p>
    </div>
  );
}

function Certificate() {
  return (
    <>
      <div className=" animasi justify-center items-center mt-40" id="certificate">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Certificate
        </h1>
        <div className="grid sm:grid-cols-3 p-10 place-items-center space-y-10 ">
          <div className="bg-blue-950 animasi hover:scale-105 ease-out duration-300 border-5  border-black">
            <img src={cisco} alt="" />
          </div>
          <div className="bg-blue-950 animasi hover:scale-105 ease-out duration-300 border-5  border-black">
            <img src={linkedinmicrosoft} alt="" />
          </div>
          <div className="bg-blue-950 animasi hover:scale-105 ease-out duration-300 border-5 border-black">
            <img src={pelatihan} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className=" animasi justify-center items-center  mt-40" id="skills">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Skills
        </h1>
        <h1 className="text-2xl font-bold text-white text-center mb-10 ">
          Software Development
        </h1>

        <div className="grid animasi sm:grid-cols-3 p-3 place-items-center place-content-center space-y-10 ">
          <div className=" hover:scale-105 animasi ease-out duration-300 border-5 rounded-2xl border-black">
            <div className="bg-blue-950 rounded-xl p-10">
              <img
                src={html}
                className="size-30 w-37 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-4xl font-bold p-4">
                HTML
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 rounded-2xl 0 border-5  border-black">
            <div className="bg-blue-950 rounded-xl p-10">
              <img
                src={css}
                className="size-30 w-42 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                CSS
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 rounded-2xl border-5  border-black">
            <div className="bg-blue-950 p-10 rounded-xl  ">
              <img
                src={bootstrap}
                className="size-30 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Bootstrap
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={tailwind}
                className="size-30 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Tailwind
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={js}
                className="size-30 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Javascript
              </h1>
            </div>
          </div>

          <div className=" hover:scale-105 animasi ease-out duration-300 rounded-2xl border-5  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={php}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                PHP
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 rouned-2xl border-5  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={react}
                className="size-30 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                React JS
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 border-5 rounded-2xl  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={mysql}
                className="size-30 w-45 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                MYSQL
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 border-5 rounded-2xl mb-10  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={python}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Python
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 animasi ease-out duration-300 border-5 rounded-2xl mb-10  border-black">
            <div className="bg-blue-950 p-10 rounded-xl">
              <img
                src={laravel}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Laravel
              </h1>
            </div>
          </div>
        </div>
           <h1 className="animasi text-2xl font-bold text-white text-center mb-10 mt-10 ">
          Cyber Security
        </h1>
        <div className="flex animasi flex-col sm:flex-row  gap-10 p-3 place-items-center place-content-center space-y-10 ">
          <div className=" hover:scale-105 rounded-2xl ease-out duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl ">
              <img
                src={linux}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Linux
              </h1>
            </div>
          </div>
           <div className=" hover:scale-105 rounded-2xl mb-10 ease-out duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl ">
              <img
                src={ctf}
                className="size-30 rounded-full w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                CTF
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-2xl animasi font-bold text-white text-center mb-10 mt-10 ">
          Game Development
        </h1>
        <div className="grid animasi sm:grid-cols-1 p-3 place-items-center place-content-center space-y-10 ">
          <div className=" hover:scale-105 rounded-2xl ease-out duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl ">
              <img
                src={unity}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Unity
              </h1>
            </div>
          </div>
        </div>

        <h1 className=" text-center text-3xl animasi font-bold mt-30 mb-20  ">Design & Edit</h1>
        <div className="flex animasi flex-col sm:flex-row  gap-10 p-3  place-items-center place-content-center space-y-10 ">
          <div className=" hover:scale-105 ease-out rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl">
              <img
                src={figma}
                className="size-30 w-40 justify-center mx-auto "
                alt=""
              />
              <h1 className="text-white text-center text 2xl font-bold p-4">
                Figma
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 ease-out rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl">
              <img src={canva} className="size-30 w-40 justify-center mx-auto " alt="" />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Canva
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 ease-out rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 w-50 p-5 rounded-xl">
              <img src={photoshop} className="size-20 w-40 justify-center mx-auto " alt="" />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Adobe Photoshop
              </h1>
            </div>
          </div>
          <div className=" hover:scale-105 ease-out mb-10 rounded-2xl duration-300 border-5  border-black">
            <div className="bg-blue-950 p-5 rounded-xl">
              <img src={lightroom} className="size-30 w-40 justify-center mx-auto " alt="" />
              <h1 className="text-white text-center text-2xl font-bold p-4">
                Lightroom
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Project() {
  return (
    <>
      <div className="animasi space-y-20 mt-40" id="project">
        <h1 className="text-4xl font-bold text-center text-white">Project</h1>
        <div className="grid  sm:grid-cols-3 space-y-5 place-items-center">
          <div className="bg-blue-900  animasi rounded-2xl sm:w-100 w-70 sm:h-125 h-130 border-2 border-black">
            <div className="w-full h-65">
            <img src={displaygambar} className="w-full rounded-t-xl  h-full object-cover" alt="" />

            </div>

            <h1 className="text-center mt-5 text-2xl mb-5">Gym Rex</h1>
            <p className="sm:w-80 w-50 text-xs mx-auto">Aplikasi ini berguna untuk melihat panduan gerakan gym yang lengkap dengan langkah dan tips dasar. Aplikasi ini juga dibuat untuk menyelesaikan tugas akhir project kejuruan saya. </p>
            <a href="https://drive.google.com/file/d/1Ebw4BBCaJQ_F_15VdZ5YrdOJtqHUJjLB/view" className="rounded-xl mx-auto w-30 flex justify-center hover:scale-110 hover:duration-300 mt-3 p-2 border-3 border-black hover:bg-blue-900 hover:text-white bg-blue-950 text-center text-blue-100 font-semibold">View</a>
          </div>
          <div className="bg-blue-900  animasi rounded-2xl sm:w-100 w-70 sm:h-125 h-140 border-2 border-black">
            <div className="w-full h-65">
            <img src={flappymonkey} className="w-full h-full  rounded-t-xl object-cover" alt="" />

            </div>

            <h1 className="text-center mt-5 text-2xl mb-3"> Flappy Monkey</h1>
            <p className="sm:w-80 w-50 text-xs mx-auto">Game ini terinspirasi dari Game Flappy bird,dimana di dalam game ini player akan mengejar skor sebanyak mungkin dengan melewati rintangan dari pipa-pipa yang ada. Juga game ini dibuat untuk menyelesaikan tugas akhir project kejuruan saya. </p>
            <a href="https://drive.google.com/file/d/1OD4UT5H0jQQZN6uLEM0KvRud4Me_35RB/view?usp=drive_link" className="rounded-xl mx-auto w-30 flex justify-center hover:scale-110 hover:duration-300 mt-3 p-2 border-3 border-black hover:bg-blue-900 hover:text-white bg-blue-950 text-center text-blue-100 font-semibold">View</a>
          </div>
          <div className="bg-blue-900 animasi sm:w-100 w-70 rounded-xl sm:h-125 h-140 border-2 border-black">
            <div className="w-full h-65">
            <img src={cekjulukan} className="w-full h-full  rounded-t-xl object-cover" alt="" />

            </div>
            <h1 className="text-center mt-5 text-2xl mb-5">Cek Julukan</h1>
            <p className="sm:w-80 w-50  mb-5 text-xs mx-auto">Website ini dibuat untuk mengecek julukan secara acak. Pengguna cukup memasukkan nama panggilan, lalu sistem akan secara otomatis memberikan julukan unik berdasarkan nama tersebut.</p>
            <a href="https://cekjulukan.vercel.app/" className="rounded-xl mx-auto w-30 flex justify-center hover:scale-110 hover:duration-300 mt-3 p-2 border-3 border-black hover:bg-blue-900 hover:text-white bg-blue-950 text-center text-blue-100 font-semibold">View</a>
          </div>
          <div className="bg-blue-900 animasi sm:w-100 w-70 rounded-xl sm:h-125 h-140 border-2 border-black">
            <div className="w-full h-65">
            <img src={perpus} className="sm:w-full w-80 h-full  rounded-t-xl object-cover" alt="" />

            </div>
            <h1 className="text-center mt-5 text-2xl mb-5">E Library</h1>
            <p className="sm:w-80 w-50 text-xs mx-auto">Website ini dibuat untuk memudahkan pengguna dalam membaca dan meminjam buku dari rumah secara online, sehingga tidak perlu datang langsung ke perpustakaan. Dengan adanya website ini, proses peminjaman buku menjadi lebih praktis, cepat, dan efisien.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div
        className="animasi flex flex-col mt-40 justify-center items-center"
        id="contact"
      >
        <h1 className="text-white font-bold text-4xl text-center mb-10">
          Contact
        </h1>
        <div className="grid rounded-2xl sm:grid-cols-2 bg-blue-100 border-4 border-black">
          <div className=" sm:w-100 w-80 sm:h-90 h-100 rounded-xl place-content-center">
            <form
              action="https://formspree.io/f/myzpqran"
              method="POST"
              className=" flex-col p-10 "
            >
              <h1 className="font-bold text-center text-black text-3xl">
                Form{" "}
              </h1>
              <label className="text-black font-semibold">
                {" "}
                Email
                <input
                  type="email"
                  className="w-full border-1 border-black p-2 text-black bg-white rounded-xs"
                  placeholder="Email"
                  name="email"
                />
              </label>
              <label className="text-black font-semibold">
                {" "}
                Pesan
                <textarea
                  name="message"
                  className="w-full text-black border-1 border-black bg-white rounded-xs"
                  placeholder="Pesan"
                >
                  {" "}
                </textarea>
              </label>
              <button
                type="submit"
                className="mt-5 bg-blue-950  hover:bg-blue-900 text-white "
              >
                Kirim
              </button>
            </form>
          </div>
          <div className="bg-gray-900 p-5 space-y-8 h-full place-content-center">
            <div className="place-content-center space-y-10">
              <div className=" flex space-x-3">
                <i className="fa-brands fa-whatsapp  text-3xl"></i>
                <h1>+62 887-1729-638</h1>
              </div>
              <div className=" flex space-x-3 ">
                <i className="fa-solid fa-envelope text-3xl"></i>
                <h1>andikacrwork@gmail.com</h1>
              </div>
               <div className=" flex space-x-3 ">
              <i className="fa-solid fa-location-dot text-3xl"></i>
                <h1>East Jakarta, Indonesia</h1>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  const waktu = new Date().getFullYear();
 
  return (
    <>
      <div className="bg-black mt-30 sm:h-110 h-200">
        <div className="grid place-items-center space-y-10">
          <h1 className="text-white font-bold text-3xl mt-30">Portfolio</h1>
          <div className="flex sm:flex-row flex-col gap-10">
            <a href="#home" className="text-gray-500 font-bold ">
              Home
            </a>
            <a href="#aboutme" className="text-gray-500 font-bold ">
              About
            </a>
            <a href="#skills" className="text-gray-500 font-bold ">Skills</a>

            <a href="#certificate" className="text-gray-500 font-bold ">
              Certificate
            </a>
            <a href="#project" className="text-gray-500 font-bold ">
              Project
            </a>
            <a href="#contact" className="text-gray-500 font-bold ">Contact</a>
          </div>
            <div className="relative flex justify-center items-center p-3">
              <div className="flex flex-1 sm:absolute  bottom-0 space-x-10 text-center ">
                <a href="https://www.linkedin.com/in/andika-cahya-rahman-a6704b2a2/">
                  <i className="fa-brands fa-linkedin  text-3xl"></i>
                </a>
                                <a href="https://www.instagram.com/kuroshii274._">
                  <i className="fa-brands fa-instagram text-3xl"></i>
                </a>
                <a href="https://github.com/sncthyz">
                  <i className="fa-brands fa-github  text-3xl"></i>
                </a>
              </div>
            </div>
          <div>
            <hr className="text-gray-800 sm:w-160" />
            <h1 className="text-center place-content-center mt-10 ">Copyright {waktu} by Andika</h1>
          </div>
        </div>
      </div>
    </>
  );
}

function SystemLoading() {
  const [loading, setLoading] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeout(true);
      setTimeout(() => setLoading(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <LoadingScreen fadeout={fadeout} /> : <Main />}</>;
}

export default SystemLoading;

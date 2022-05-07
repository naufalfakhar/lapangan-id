import Link from "next/link";
import Head from "next/head";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>LapanganID</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="icon.svg" />
      </Head>
      <nav className="wrapper">
        <section className="mx-auto text-[#555555] py-[60px]">
          <div className="flex items-center gap-[185px]">
            <div className="flex items-center gap-11">
              <img src="ellipse.svg" alt="" />
              <Link href="/">Home</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/lapangan">Lapangan</Link>
              <Link href="/komunitas">Komunitas</Link>
              <Link href="/riwayat">Riwayat</Link>
            </div>
            <div className="flex items-center gap-[35px]">
              <div className="flex items-center justify-center px-4">
                <div className="relative mr-3">
                  <input
                    type="search"
                    className="text-gray-900 bg-white border-gray-300 block w-[321px] rounded-[20px] border pl-[35px] focus:outline-none"
                    placeholder="Cari aja disini..."
                  />
                  <div className="absolute top-1/2 right-[22px]  -translate-y-1/2 transform">
                    <img
                      src="search.svg"
                      alt=""
                      className="h-[16px] w-[16px]"
                    />
                  </div>
                </div>
              </div>
              <LoginModal />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [tab, setTab] = useState("login");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal} className="">
        Login
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Lapangan.id
                  </Dialog.Title>
                  {tab === "login" ? (
                    <div className="flex flex-col">
                      <h1>Login</h1>
                      <form className="mt-2 flex flex-col">
                        <input type="text" placeholder="username" required />
                        <input
                          type="password"
                          placeholder="password"
                          required
                        />
                        <button type="submit">masuk</button>
                        <button
                          type="button"
                          onClick={() => setTab("register")}
                        >
                          daftar
                        </button>
                      </form>
                    </div>
                  ) : tab === "register" ? (
                    <div className="flex flex-col">
                      <h1>Register</h1>
                      <form className="mt-2 flex flex-col">
                        <input type="email" placeholder="email" required />
                        <input type="text" placeholder="username" required />
                        <input
                          type="password"
                          placeholder="password"
                          required
                        />
                        <button type="submit">Daftar</button>
                        <button type="button" onClick={() => setTab("login")}>
                          masuk
                        </button>
                      </form>
                    </div>
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

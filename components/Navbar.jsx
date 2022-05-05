import Link from "next/link";
import Head from "next/head";

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
              <p>Masuk</p>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

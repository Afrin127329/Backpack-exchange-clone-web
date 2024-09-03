import { Input } from "@/packages/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { SelectDemo } from "./Select";
import { ModeToggle } from "./themeToggleButton";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={32}
            height={32}
            src="/exchange-logo.png"
            className="h-8 rounded-full"
            alt="Backpack exchange clone"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Backpack Exchange
          </span>
        </a>
        <div className="flex md:order-2 gap-3">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-10 w-10"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <ModeToggle />

          {/* Search input  */}
          <div className="relative hidden md:block ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            <Input
              className="p-2 ps-10 min-w-[8rem]"
              type="text"
              id="search-navbar"
              placeholder="Search...."
            />
          </div>
          <Button
            className="inline-flex px-3 md:hidden items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-whiten text-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-zinc-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800"
            data-collapse-toggle="navbar-search"
            type="button"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <Input
              className="p-2 ps-10 min-w-[8rem]"
              type="text"
              id="search-navbar"
              placeholder="Search......"
            />
          </div>
          <ul className="flex flex-col md:items-center p-2 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded  md:p-0 text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-400 hover:text-zinc-600"
                aria-current="page"
              >
                Market
              </a>
            </li>
            <li>
              <a
                href="/trade/123"
                className="block py-2 px-3 rounded md:p-0 text-zinc-900 dark:text-zinc-50 dark:hover:text-zinc-400 hover:text-zinc-600"
              >
                Trade
              </a>
            </li>
            <li>
              <SelectDemo />
            </li>
          </ul>
          <div className="flex justify-between gap-2 order-last md:hidden">
            <Button variant={"red"} className="w-1/2">
              <Link href={"/login"}>Sign In</Link>
            </Button>
            <Button variant={"green"} className="w-1/2">
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </div>
        </div>
        <div className="md:flex justify-between gap-2 order-last hidden">
          <Button variant={"red"}>
            <Link href={"/login"}>Sign In</Link>
          </Button>
          <Button variant={"green"}>
            <Link href={"/signup"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

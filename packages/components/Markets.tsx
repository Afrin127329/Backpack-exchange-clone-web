const Markets = () => {
  return (
    <div className="w-1/3 bg-white dark:bg-baseBackgroundL1 rounded-md shadow-md overflow-y-hidden">
      <h1 className="dark:text-baseTextHighEmphasis pt-4 pl-4">Markets</h1>
      <div className="relative overflow-x-auto mt-3">
        <ul className="w-full !text-sm text-left rtl:text-right border dark:border-zinc-800 text-gray-500 dark:text-gray-400">
          <li className="bg-white flex items-center justify-between dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer">
            <span className="w-[40%] flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook
            </span>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              Silver
            </div>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              $2999
            </div>
            {/* <div className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </div> */}
          </li>
          <li className="bg-white flex items-center justify-between dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer">
            <span className="w-[40%] flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Microsoft
            </span>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              $1999
            </div>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              White
            </div>
          </li>
          <li className="bg-white flex items-center justify-between dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer">
            <span className="w-[40%]  flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse
            </span>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              Black
            </div>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              $99
            </div>
          </li>
          <li className="bg-white flex items-center justify-between dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer">
            <span className="w-[40%]  flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse
            </span>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              Black
            </div>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              $9999
            </div>
          </li>
          <li className="bg-white flex items-center justify-between dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer">
            <span className="w-[40%]  flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic 2
            </span>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              Black
            </div>
            <div className="w-[30%] flex flex-row justify-end px-6 py-4">
              $99
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Markets;

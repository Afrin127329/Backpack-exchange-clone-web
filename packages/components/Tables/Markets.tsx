import Link from "next/link";
import { DetailedCryptoData } from "../../lib/type";

interface MarketsProps {
  marketData: DetailedCryptoData[] | any;
}
const Markets: React.FC<MarketsProps> = ({ marketData }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white dark:bg-baseBackgroundL1 rounded-t-md shadow-md overflow-y-hidden">
      <h1 className="dark:text-baseTextHighEmphasis pt-4 pl-4">Markets</h1>
      <div className="relative overflow-x-auto mt-3">
        <ul className="w-full !text-sm text-left rtl:text-right border dark:border-zinc-800 text-gray-500 dark:text-gray-400">
          {marketData.map((market: any) => (
            <li
              className="bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer"
              key={market.id}
            >
              <Link
                href={`/trade/${market.name}`}
                className="flex items-center justify-between"
              >
                <span className="w-[40%] flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {market.name}
                </span>
                <div className="w-[30%] flex flex-row justify-end px-6 py-4">
                  {market.current_price}
                </div>
                <div className="w-[30%] flex flex-row justify-end px-6 py-4 text-greenText">
                  {market.market_cap_change_24h}
                </div>
                {/* {market.changeType === "positive" ? (
                ) : (
                  <div className="w-[30%] flex flex-row justify-end px-6 py-4 text-redText">
                    {market.market_cap_change_24h}
                  </div>
                )} */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Markets;

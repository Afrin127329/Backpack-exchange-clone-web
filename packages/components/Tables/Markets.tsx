import Link from "next/link";
import { DetailedCryptoData } from "../../lib/type";

interface MarketsProps {
  marketData: DetailedCryptoData[] | any;
  title: string;
  sliceIndex: number;
}
const Markets: React.FC<MarketsProps> = ({ marketData, title, sliceIndex }) => {
  console.log(marketData);
  return (
    <div className="w-full lg:w-1/3 bg-white dark:bg-baseBackgroundL1 rounded-t-md shadow-md overflow-y-hidden">
      <h1 className="dark:text-baseTextHighEmphasis pt-4 pl-4">{title}</h1>
      <div className="relative overflow-x-auto mt-3">
        <ul className="w-full !text-sm text-left rtl:text-right border dark:border-zinc-800 text-gray-500 dark:text-gray-400">
          {marketData?.splice(sliceIndex, 5).map((market: any) => (
            <li
              className="bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-baseBackgroundL1 cursor-pointer"
              key={market.id}
            >
              <Link
                href={`/trade/${market?.symbol.toUpperCase()}_USDC`}
                className="flex items-center justify-between"
              >
                <span className="w-[40%] flex flex-row px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {market.name.toUpperCase()}/USDC
                </span>
                <div className="w-[30%] flex flex-row justify-end px-6 py-4">
                  ${market.current_price.toFixed(5)}
                </div>
                <div
                  className={`w-[30%] flex flex-row justify-end px-6 py-4 ${
                    market.price_change_percentage_24h > 0
                      ? "text-greenText"
                      : "text-redText"
                  }`}
                >
                  {market.price_change_percentage_24h > 0
                    ? `+${market.price_change_percentage_24h.toFixed(2)}%`
                    : `${market.price_change_percentage_24h.toFixed(2)}%`}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Markets;

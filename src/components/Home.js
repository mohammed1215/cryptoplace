import React, { useEffect, useState } from "react";
import { fetching } from "../Data/fetching";
import { Link } from "react-router-dom";

export const Home = ({ coin_type }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    const coinDataFetching = async () => {
      const data = await fetching(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${coin_type}`
      );
      // console.log("data from home", data);
      setData(data);
    };
    coinDataFetching();
  }, [coin_type]);

  // Format the Number
  function formatNumber(num) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: `${coin_type}`,
      maximumFractionDigits: 2,
    }).format(num);
  }

  // Search
  function Search() {
    const result = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSearchData(result);
  }
  useEffect(() => {
    Search();
  }, [searchWord]);

  return (
    <section className="Home">
      <div className="info mx-auto my-[80px] flex flex-col gap-[30px] w-[600px] text-center ">
        <h1 className="text-[42px] font-bold">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="text-[#e3e3e3]">
          Welcome to the world's largest cryptocurrency marketplace. <br /> Sign
          up to explore more about cryptos.
        </p>
        <form
          action=""
          className="p-2 rounded overflow-hidden w-[80%] flex gap-2 bg-white mx-auto"
        >
          <input
            type="text"
            placeholder="Search Crypto..."
            className="flex-1 outline-none text-black caret-black pl-2 placeholder:text-[#777]"
            list="coinlist"
            onInput={(e) => setSearchWord(e.target.value)}
          />
          <datalist id="coinlist">
            <option value="Bitcoin"></option>
            <option value="Ethereum"></option>
            <option value="Tether"></option>
            <option value="BNB"></option>
            <option value="Solana"></option>
            <option value="USDC"></option>
            <option value="XRP"></option>
            <option value="Lido Staked Ether"></option>
            <option value="Dogecoin"></option>
            <option value="TRON"></option>
            <option value="Cardano"></option>
            <option value="Toncoin"></option>
            <option value="Wrapped stETH"></option>
            <option value="Shiba Inu"></option>
            <option value="Wrapped Bitcoin"></option>
            <option value="Avalanche"></option>
            <option value="WETH"></option>
            <option value="Chainlink"></option>
            <option value="Bitcoin Cash"></option>
            <option value="USDS"></option>
            <option value="LEO Token"></option>
            <option value="Polkadot"></option>
            <option value="Sui"></option>
            <option value="Litecoin"></option>
            <option value="NEAR Protocol"></option>
            <option value="Aptos"></option>
            <option value="Wrapped eETH"></option>
            <option value="Uniswap"></option>
            <option value="Pepe"></option>
            <option value="Internet Computer"></option>
            <option value="Bittensor"></option>
            <option value="Dai"></option>
            <option value="Artificial Superintelligence Alliance"></option>
            <option value="Kaspa"></option>
            <option value="Monero"></option>
            <option value="Ethena USDe"></option>
            <option value="Stellar"></option>
            <option value="Ethereum Classic"></option>
            <option value="WhiteBIT Coin"></option>
            <option value="First Digital USD"></option>
            <option value="POL (ex-MATIC)"></option>
            <option value="Stacks"></option>
            <option value="OKB"></option>
            <option value="dogwifhat"></option>
            <option value="Aave"></option>
            <option value="Filecoin"></option>
            <option value="Arbitrum"></option>
            <option value="Cronos"></option>
            <option value="Mantle"></option>
            <option value="THORChain"></option>
            <option value="Optimism"></option>
            <option value="Celestia"></option>
            <option value="Render"></option>
            <option value="Immutable"></option>
            <option value="Injective"></option>
            <option value="Fantom"></option>
            <option value="Hedera"></option>
            <option value="VeChain"></option>
            <option value="Cosmos Hub"></option>
            <option value="Bitget Token"></option>
            <option value="Binance-Peg WETH"></option>
            <option value="Popcat"></option>
            <option value="Sei"></option>
            <option value="The Graph"></option>
            <option value="MANTRA"></option>
            <option value="Bonk"></option>
            <option value="Rocket Pool ETH"></option>
            <option value="Pyth Network"></option>
            <option value="FLOKI"></option>
            <option value="Jupiter"></option>
            <option value="Mantle Staked Ether"></option>
            <option value="Worldcoin"></option>
            <option value="Theta Network"></option>
            <option value="Gate"></option>
            <option value="KuCoin"></option>
            <option value="Solv Protocol SolvBTC"></option>
            <option value="Helium"></option>
            <option value="Maker"></option>
            <option value="Ethena"></option>
            <option value="Bitcoin SV"></option>
            <option value="Algorand"></option>
            <option value="Arweave"></option>
            <option value="Ondo"></option>
            <option value="Lido DAO"></option>
            <option value="Coinbase Wrapped BTC"></option>
            <option value="Marinade Staked SOL"></option>
            <option value="Raydium"></option>
            <option value="Fasttoken"></option>
            <option value="Renzo Restaked ETH"></option>
            <option value="Brett"></option>
            <option value="Beam"></option>
            <option value="JasmyCoin"></option>
            <option value="Quant"></option>
            <option value="Polygon"></option>
            <option value="BitTorrent"></option>
            <option value="cat in a dogs world"></option>
            <option value="Flow"></option>
            <option value="Aerodrome Finance"></option>
            <option value="Core"></option>
            <option value="Kaia"></option>
          </datalist>
          <button className="bg-[#7927ff] rounded py-[10px] px-[30px] font-semibold">
            Search
          </button>
        </form>
      </div>
      <table className="bg-gradient-to-b from-custom-purple-start to-custom-purple-end rounded-[15px] w-[800px] mx-auto ">
        <thead>
          <tr>
            <th className="py-[15px] px-[20px]  text-start">#</th>
            <th className="py-[15px] px-[20px]  text-start">Coins</th>
            <th className="py-[15px] px-[20px]  text-start">Price</th>
            <th className="py-[15px] px-[20px]  text-center">24H Change</th>
            <th className="py-[15px] px-[20px]  text-end">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {(searchWord === "" ? data : searchData).map((row, index) => {
            if (index < 10) {
              return (
                <tr className="text-[16px]">
                  <td className="py-[15px] px-[20px] text-start">
                    {index + 1}
                  </td>
                  <td className="items-center gap-2 py-[15px] px-[20px] flex  text-start">
                    <Link to={`/coin/${row.id}`} state={{ coinName: row.id }}>
                      <img src={row.image} className="size-[35px]" alt="" />
                    </Link>
                    <span>{row.name}</span>
                  </td>

                  <td className="py-[15px] px-[20px] text-start">
                    {formatNumber(row.current_price)}
                  </td>
                  <td
                    className={`
											${row.price_change_percentage_24h < 0 ? "text-red-600 " : "text-green-500 "}
											py-[15px] px-[20px]
											text-center
											`}
                  >
                    {new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 2,
                    }).format(row.price_change_percentage_24h)}
                  </td>
                  <td className="py-[15px] px-[20px] text-end">
                    {formatNumber(row.market_cap)}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </section>
  );
};

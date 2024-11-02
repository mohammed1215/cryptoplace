import React, { useEffect, useState } from "react";
import { fetching } from "../Data/fetching";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Coin = ({ coin_type }) => {
  const [data, setData] = useState("");
  const { state } = useLocation();
  const { coinName } = state;
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  useEffect(() => {
    const coinDataFetching = async () => {
      const coinData = await fetching(
        `https://api.coingecko.com/api/v3/coins/${coinName}`
      );

      setData(coinData);
    };
    coinDataFetching();
  }, [coinName]);

  // fetching chart data
  useEffect(() => {
    const chartDataFetching = async () => {
      const chartData = await fetching(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10`
      );
      const prices = chartData.prices.map((price) => ({
        date: new Date(price[0]).toLocaleDateString("en-US"),
        price: price[1],
      }));
      // Set the chart data
      setChartData({
        labels: prices.map((entry) => entry.date),
        datasets: [
          {
            label: "Prices",
            data: prices.map((entry) => entry.price),
            borderColor: "blue",
            fill: true,
            tension: 0.1,
          },
        ],
      });
      console.log("chart data ", chartData);
    };
    chartDataFetching();
  }, []);

  function NumberFormat(num) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: `${coin_type}`,
      maximumFractionDigits: 2,
    }).format(num);
  }

  if (!data || data === "") {
    return (
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    );
  }

  return (
    <section className="coin">
      <div className="coin-name flex flex-col gap-5 mt-[100px] mb-[50px] items-center">
        <img
          src={data.image?.large || `https://placehold.co/600x400`}
          className="size-[100px]"
          alt=""
        />
        <p>
          <b className="text-[44px]">
            {data.name}
            &#40;
            {data.symbol?.toUpperCase()}
            &#41;
          </b>
        </p>
      </div>
      <div className="coin-chart max-w-[600px] mx-auto h-[250px] bg-white">
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: false,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          }}
        />
      </div>
      <div className="coin-info max-w-[600px] mx-auto py-[10px]">
        <ul className="flex justify-between py-[10px] border-b-2 border-b-[#3c3c3c]">
          <li>Crypto Market Rank</li>
          <li>{data.market_cap_rank}</li>
        </ul>
        <ul className="flex justify-between py-[10px] border-b-2 border-b-[#3c3c3c]">
          <li>Current Price</li>
          <li>{NumberFormat(data.market_data?.current_price[coin_type])}</li>
        </ul>
        <ul className="flex justify-between py-[10px] border-b-2 border-b-[#3c3c3c]">
          <li>Market cap</li>
          <li>{NumberFormat(data.market_data?.market_cap[coin_type])}</li>
        </ul>
        <ul className="flex justify-between py-[10px] border-b-2 border-b-[#3c3c3c]">
          <li>24 Hour high</li>
          <li>{NumberFormat(data.market_data?.high_24h[coin_type])}</li>
        </ul>
        <ul className="flex justify-between py-[10px] border-b-2 border-b-[#3c3c3c]">
          <li>24 Hour low</li>
          <li>{NumberFormat(data.market_data?.low_24h[coin_type])}</li>
        </ul>
      </div>
    </section>
  );
};

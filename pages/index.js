import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <p className="text-center text-3xl font-semi-bold mt-8">
        Multi Sig Wallet
      </p>
      <p className="text-center font-light text-slate-500">Total balance</p>
      <p className="text-center text-teal-600 text-3xl">100 ETH</p>
      <div className="mx-auto">
        <button className="px-4 bg-green-700 rounded-full text-xl hover:bg-green-500">DEPOSIT</button>
        <button className="px-4 bg-red-500 rounded-full text-xl hover:bg-red-700">WITHDRAW</button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="font-light">Date</th>
            <th className="font-light">From</th>
            <th className="font-light">To</th>
            <th className="font-light">Amount</th>
            <th className="font-light">Status</th>
            <th className="font-light">Execution</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

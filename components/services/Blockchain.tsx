import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function Blockchain() {
  return (
    <section className="my-20">
      <div className="relative pt-24 px-6 md:max-w-4xl 2xl:max-w-6xl mx-auto flex flex-col-reverse 2xl:flex-row items-stretch gap-10">
        <span className="w-[90%] md:w-full absolute top-0 left-1/2 -translate-x-1/2 h-1 bg-blue-900"></span>

        <article className="basis-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Web3 & Blockchain Technology
          </h2>
          <p className="text-xl mb-4">
            We help businesses explore the future of the decentralized web.
            Whether you&apos;re building a smart contract, launching an NFT
            platform, or experimenting with DAO governance, Pasil TECH provides
            end-to-end support from concept to deployment — with a focus on
            scalability, security, and real-world utility.
          </p>
          <ul className="text-lg">
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Smart contract development (Solidity, Rust, Move)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>DApp (Decentralized App) design &amp; development</span>
            </li>
            <li className="flex flex-row gap-2 ">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>
                Blockchain integrations (Ethereum, Solana, Polygon, Binance
                Smart Chain)
              </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>NFT marketplace &amp; tokenization platforms </span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>Wallet integration (MetaMask, WalletConnect)</span>
            </li>
            <li className="flex flex-row gap-2">
              <span>
                <ChevronsRight className="text-blue-900 mt-1" />
              </span>
              <span>DAO setup &amp; governance tooling</span>
            </li>
          </ul>
        </article>
        <div className="basis-1/2">
          <Image
            src="/blockchain.jpg"
            alt="Cloud Computing & Infrastructure Automation"
            width={1920}
            height={1080}
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}

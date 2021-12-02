import Link from 'next/link';


export default function Projects () {
    return (
      <div className="mt-6 prose prose-md text-gray-500 mx-auto">
        <h4>Featured Projects</h4>
        <ul>
            <li>
                <Link href="https://healthgame.vercel.app">
                    <a target="_blank" rel="noopener noreferrer">NFT Health Game</a>
                </Link>
            </li>
            <li>
                <Link href="https://eatblynd.com">
                    <a target="_blank" rel="noopener noreferrer">Blynd</a>
                </Link>
            </li>
            <li>
                <Link href="https://pelonft.vercel.app">
                    <a target="_blank" rel="noopener noreferrer">PeloNFT</a>
                </Link>
            </li>
        </ul>
      </div>
    )
  }
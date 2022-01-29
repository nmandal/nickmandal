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
        <h6 className="prose prose-md text-gray-500 mx-auto">
            <Link href="/projects">
            <a className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
                View all projects
            <span aria-hidden="true"> &rarr;</span>
            </a>
            </Link>
        </h6>
      </div>
    )
  }
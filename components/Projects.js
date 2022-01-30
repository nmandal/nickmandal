import Link from 'next/link';

const projects = [
    {
        "name": "Quantified Self Platform",
        "url": "https://quantself.vercel.app",
        "description": "A platform to aggregate your excercise, sleep, and food data to make better decisions for your health."
    },
    {
        "name": "Blynd",
        "url": "https://eatblynd.com",
        "description": "Food ordering platform that takes the decision fatigue out of deciding what to order."
    },
    {
        "name": "PeloNFT",
        "url": "https://pelonft.vercel.app",
        "description": "The PeloNFT collection lets you mint your own Peloton workout. Inspired by Loot, PeloNFT generates workout attibutes randomly and completely on-chain."
    },
]


export default function Projects () {
    return (
        <>
      <div className="mt-6 prose prose-md text-gray-500 mx-auto">
        <h4>Featured Projects</h4>
        <ul>
            {projects.map((project, postIdx) => (
            <li key={project.name}>
                <Link href={project.url}>
                    <a target="_blank" rel="noopener noreferrer">{project.name}</a>
                </Link>
            </li>
            ))}
        </ul>

      </div>
              {/* <h6 className="prose prose-md text-gray-500 mx-auto">
            <Link href="/projects">
            <a className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
                View all projects
            <span aria-hidden="true"> &rarr;</span>
            </a>
            </Link>
        </h6> */}
      </>
    )
  }
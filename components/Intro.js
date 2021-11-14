import Link from 'next/link'

export default function Intro () {
  return (
    <div className="mt-6 prose prose-md text-gray-500 mx-auto">
      <h4>Nick Mandal</h4>
      <p>
        I&apos;m a software engineer at <a className="underline" target="_blank"
        rel="noopener noreferrer" href="https://www.bamfunds.com">Balyasny Asset Management</a>, 
        a multi-strategy investment firm, where I work on the portfolio finance team.
      </p>
      <p>
        In my free time, I do contract work for startups, build web3 applications and track my health.
      </p>
      <div className="mt-5">
        <Link href="/pelonft">
        <a>PeloNFT</a>
        </Link>
      </div>
    </div>
  )
}
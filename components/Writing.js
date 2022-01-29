
import Link from 'next/link';


export default function Writing () {
    return (
      <div className="mt-6 prose prose-md text-gray-500 mx-auto">
        <h4>Featured Writing</h4>
        <ul>
            <li>
                <Link href="/writing/health-framework">
                    <a>Health Framework</a>
                </Link>
            </li>
            <li>
                <Link href="/writing/financial-machine">
                    <a>Financial Machine</a>
                </Link>
            </li>
            <li>
                <Link href="/writing/creating-online">
                    <a>A Case for Creating Online</a>
                </Link>
            </li>
        </ul>
        <h6 className="prose prose-md text-gray-500 mx-auto">
            <Link href="/writing">
            <a className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
                View all writing
            <span aria-hidden="true"> &rarr;</span>
            </a>
            </Link>
        </h6>
      </div>
    )
  }
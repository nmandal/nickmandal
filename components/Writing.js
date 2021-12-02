
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
      </div>
    )
  }
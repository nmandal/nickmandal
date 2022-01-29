import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';

const projects = [
    {
        "name": "Blynd",
        "url": "https://eatblynd.com"
    },
    {
        "name": "BlyndApp",
        "url": "https://app.eatblynd.com"
    },
    {
        "name": "MenYou",
        "url": "https://menyou.eatblynd.com"
    },
    {
        "name": "PeloNFT",
        "url": "https://pelonft.vercel.app"
    },
    {
        "name": "NFT Health Game",
        "url": "https://healthgame.vercel.app"
    },
    {
        "name": "ETH Journal",
        "url": "https://ethjournal.vercel.app"
    },
    {
        "name": "Quantified Self Platform",
        "url": "https://quantself.vercel.app"
    },
    {
        "name": "SOLe Collective",
        "url": "https://solenfts.vercel.app"
    },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Projects = () => {

  return (
    <div className="prose mx-auto px-4 sm:px-6 lg:px-8 my-24">
      <h1>Projects</h1>

      <div className="bg-white">
      <div>
        <div className="-my-10">
          {projects.map((project, postIdx) => (

            <div key={project.name} className="flex text-sm text-gray-500 space-x-4">
                          <Link
              href={project.url}
            >
              <div className={classNames(postIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-2')}>
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                
                {/* <div
                  className="mt-4 prose prose-sm max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: post.data.description }}
                /> */}
                {/* <p>
                  <time dateTime={post.data.datetime}>{post.data.date}</time>
                </p> */}
              </div>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
};

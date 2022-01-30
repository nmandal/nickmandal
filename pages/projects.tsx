import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';

const projects = [
    {
      "name": "Quantified Self Platform",
      "url": "https://quantself.vercel.app",
      "description": "A platform to aggregate your excercise, sleep, and food data to make better decisions for your health. Building with Next.js, PlanetScale, Prisma, GraphQL, and deployed on Vercel."
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
    {
        "name": "NFT Health Game",
        "url": "https://healthgame.vercel.app",
        "description": "Team up with some of the best health influencers, mint their NFT and learn how to be healthy."
    },
    {
      "name": "SOLe Collective",
      "url": "https://sneakernft.vercel.app",
      "description": "Sneaker NFT project on Solana using Metaplex."
  },

    {
      "name": "BlyndApp",
      "url": "https://app.eatblynd.com",
      "description": "Blynd PWA platform for restaurants and customers built with Django."
  },
  {
      "name": "MenYou",
      "url": "https://menyou.eatblynd.com",
      "description": "QR menu platform for restaurants and influencers to build and curate custom menus."
  },
  {
    "name": "ETH Journal",
    "url": "https://ethjournal.vercel.app",
    "description": "One line a day journal with a Ethereum lottery."
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
                
                <div
                  className="mt-4 prose prose-sm max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
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

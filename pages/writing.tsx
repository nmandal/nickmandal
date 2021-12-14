import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import { GetStaticProps } from 'next';

interface Props {
  posts: {
    content: string;
    data: {
      [key: string]: any;
    };
    filePath: string;
  }[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Writing = ({ posts }: Props) => {
  const filteredBlogPosts = posts
  .sort(
    (a, b) =>
      Number(new Date(b.data.datetime)) - Number(new Date(a.data.datetime))
  );

  return (
    <div className="prose mx-auto my-24">
      <h1>Writing</h1>

      <div className="bg-white">
      <div>
        <div className="-my-10">
          {posts.map((post, postIdx) => (

            <div key={post.filePath} className="flex text-sm text-gray-500 space-x-4">
                          <Link
              as={`/writing/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/writing/[slug]`}
            >
              <div className={classNames(postIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-2')}>
                  <h3 className="font-medium text-gray-900">{post.data.title}</h3>
                
                <div
                  className="mt-4 prose prose-sm max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: post.data.description }}
                />
                <p>
                  <time dateTime={post.data.datetime}>{post.data.date}</time>
                </p>
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

export default Writing;

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

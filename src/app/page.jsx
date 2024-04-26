import React from 'react';
import prisma from '../lib/prisma';
import Layout from '../components/Layout';
import Post from '../components/Post';
export default async function Home() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return (
    <Layout>
      <div className='page'>
        <h1>Public Feed</h1>
        <main>
          {feed.map((post) => (
            <div key={post.id} className='post'>
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
}

import React from 'react';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import { getServerSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export const getServerSideProps = async ({ req, res }) => {
  const session = await getServerSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: session.user.email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { drafts },
  };
};

const Drafts = (props) => {
  const { data: session } = getServerSession();

  if (!session) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='page'>
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className='post'>
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Drafts;

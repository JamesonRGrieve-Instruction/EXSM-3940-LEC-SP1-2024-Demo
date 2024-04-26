import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import Router from 'next/router';
import prisma from '../../lib/prisma';
import { getServerSession } from 'next-auth';

export const getServerSideProps = async ({ params }) => {
  return {
    props: post,
  };
};

async function publishPost(id) {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  });
  await Router.push('/');
}

async function deletePost(id) {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/');
}

const Post = (params) => {
  let { title, author, id, published, content } = (async () =>
    await prisma.post.findUnique({
      where: {
        id: String(params?.id),
      },
      include: {
        author: {
          select: { name: true, email: true },
        },
      },
    }))();
  const { data: session, status } = getServerSession();
  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === author?.email;
  if (!published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {author?.name || 'Unknown author'}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
        {published && userHasValidSession && postBelongsToUser && <button onClick={() => publishPost(id)}>Publish</button>}
        {userHasValidSession && postBelongsToUser && <button onClick={() => deletePost(id)}>Delete</button>}
      </div>
    </Layout>
  );
};

export default Post;

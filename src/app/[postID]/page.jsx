import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export const getServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
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

const Post = (props) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || 'Unknown author'}</p>
        <ReactMarkdown>{props.content}</ReactMarkdown>
        {!props.published && userHasValidSession && postBelongsToUser && <button onClick={() => publishPost(props.id)}>Publish</button>}
        {userHasValidSession && postBelongsToUser && <button onClick={() => deletePost(props.id)}>Delete</button>}
      </div>
    </Layout>
  );
};

export default Post;

import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Router from 'next/router';

const Draft = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input onChange={(e) => setTitle(e.target.value)} placeholder='Title' type='text' value={title} />
          <textarea cols={50} onChange={(e) => setContent(e.target.value)} placeholder='Content' rows={8} value={content} />
          <input disabled={!content || !title} type='submit' value='Create' />
          <a className='back' href='#' onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
    </Layout>
  );
};

export default Draft;

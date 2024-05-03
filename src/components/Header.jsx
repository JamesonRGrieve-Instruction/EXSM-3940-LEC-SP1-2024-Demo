'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, getSession } from 'next-auth/react';

const Header = () => {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  const [sessionInfo, setSessionInfo] = useState({ session: null, status: null });

  useEffect(() => {
    let isMounted = true; // add this line

    getSession()
      .then((sessionResult) => {
        console.log(sessionResult);
        if (isMounted) {
          // check if component is still mounted
          setSessionInfo({ session: sessionResult.data, status: sessionResult.status });
        }
        return true;
      })
      .catch((error) => {
        console.error('An error occurred fetching session', error);
      });

    return () => {
      isMounted = false; // clean up on unmount
    };
  }, []);

  let left = (
    <div className='left'>
      <Link href='/'>
        <span className='bold' data-active={isActive('/')}>
          Feed
        </span>
      </Link>
    </div>
  );

  let right = null;

  if (sessionInfo.status === 'loading') {
    left = (
      <div className='left'>
        <Link href='/'>
          <span className='bold' data-active={isActive('/')}>
            Feed
          </span>
        </Link>
      </div>
    );
    right = (
      <div className='right'>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!sessionInfo.session) {
    right = (
      <div className='right'>
        <Link href='/api/auth/signin'>
          <span data-active={isActive('/signup')}>Log in</span>
        </Link>
      </div>
    );
  } else {
    left = (
      <div className='left'>
        <Link href='/'>
          <span className='bold' data-active={isActive('/')}>
            Feed
          </span>
        </Link>
        <Link href='/drafts'>
          <span data-active={isActive('/drafts')}>My drafts</span>
        </Link>
      </div>
    );
    right = (
      <div className='right'>
        <p>
          {sessionInfo.session.user.name} ({sessionInfo.session.user.email})
        </p>
        <Link href='/create'>
          <button>
            <span>New post</span>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <span>Log out</span>
        </button>
      </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Header;

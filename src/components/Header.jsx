import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className='left'>
      <Link href='/'>
        <a className='bold' data-active={isActive('/')}>
          Feed
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive('/')}>
            Feed
          </a>
        </Link>
      </div>
    );
    right = (
      <div className='right'>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className='right'>
        <Link href='/api/auth/signin'>
          <a data-active={isActive('/signup')}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <Link href='/drafts'>
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className='right'>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href='/create'>
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
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

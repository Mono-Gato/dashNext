import Header from '@components/Header';
import Nav from '@common/Nav';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const auth = useAuth();
  const router = useRouter();

  if (router.pathname !== '/' && router.pathname !== '/login' && !auth.user) {
    setTimeout(() => {
      console.log('No estas logeado');
      router.push('/login/');
    }, 0);
  }

  return (
    <>
      <div className="min-h-full">
        {auth.user && <Header />}
        {router.pathname !== '/' && <Nav />}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}

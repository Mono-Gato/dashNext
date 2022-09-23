import Header from '@components/Header';
import Nav from '@common/Modal';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl  mx-auto py-6 sm:px-6 log:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}

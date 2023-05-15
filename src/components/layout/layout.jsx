import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;

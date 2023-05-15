import { Routes, Route } from 'react-router-dom';
import Footer from '../footer/footer';
import MyBoards from "../my-boards/my-boards.jsx";
import Settings from "../settings/settings.jsx";
import PopupLayout from "../../ui/popup/popup.jsx";
import PrimaryWallet from "../primary-wallet/primary-wallet.jsx";

function Main() {
  return (
    <main className='flex-1 container mx-auto p-5'>
      <Routes>
        <Route path='/' element={<Footer />} />
        <Route path='/my-groups' element={<MyBoards />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <PopupLayout visible={false} ctaVisible={false}>
          <PrimaryWallet />
      </PopupLayout>
    </main>
  );
}

export default Main;

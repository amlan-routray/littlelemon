import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { RootLayout } from './RootLayout';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <RootLayout/>
      <Footer/>
    </>
  );
}

export default App;

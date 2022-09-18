
import './App.css';
import Creation from './components/Creation';
import Hero from './components/Hero';
import Interactive from './components/Interactive';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full'>
     <Hero />
     <Interactive />
     <Creation />
     <Footer />
    </div>
  );
}

export default App;

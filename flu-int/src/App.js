import { Slot } from 'expo-router';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <p>HELLLOOo</p>
      <Slot />
    </>
  );
}

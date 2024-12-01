import { useAtom } from "jotai";
import { counterAtom } from '../atoms.tsx';
import '../App.css';
import Counter from './Counter.tsx';
import Navbar from './Navbar.tsx';
import DoubledCounter from './DoubleCounter.tsx';


const SimpleCounter = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <>
      <Navbar/>
      <h1>Counter: {count}</h1>
      <Counter />
      <DoubledCounter />
    </>
  )
}

export default SimpleCounter;

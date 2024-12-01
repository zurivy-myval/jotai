import { useAtom } from "jotai";
import { doubledCounterArtom } from '../atoms.tsx';

const DoubledCounter = () => {
  const [doubleCounter] = useAtom(doubledCounterArtom);

  return (
    <p>
      <strong>Double counter:</strong> {doubleCounter}
    </p>
  )
}

export default DoubledCounter;
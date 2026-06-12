import { useState } from 'react';
import { Page1 } from './page1';
import { Page2 } from './page2';

export const App = () => {
  const [number, setNumber] = useState(2);
  return (
    <>
      <Page1 />
      <div>
        <button type="button" onClick={() => setNumber((n) => n + 1)}>
          mount page2
        </button>
        <button type="button" onClick={() => setNumber((n) => n - 1)}>
          unmount page2
        </button>
      </div>
      {number >= 0 && [...Array(number)].map((_, i) => <Page2 key={i} />)}
    </>
  );
};

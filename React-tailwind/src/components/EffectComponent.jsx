import { useEffect, useState } from 'react';

export default function EffectComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

    const classList = "text-2xl text-center text-stone-300 bg-stone-700 p-4 rounded-lg shadow-md mx-auto block";

  return (
    <button className={classList} onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}
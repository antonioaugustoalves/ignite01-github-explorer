import { useState } from "react";//hook (gancho)

export function Counter() {

  const [count, setCount] = useState(0); //atrib via desestrturação

  function increment() {
    console.log('Incrementing');
    setCount(count + 1); //imutabilidade
    console.log(count);
  }
  //Renderiza o componente...
  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={increment}>Increment</button>
    </>
  );
}
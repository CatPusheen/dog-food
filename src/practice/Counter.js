import React , {useState, useEffect} from 'react'



export const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('UPDATE', counter);
      }, [counter]);
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCounter((prevState) => (prevState += 1))
        }, 1000)
        return () => {
            console.log('unmount');
            clearInterval(interval)
        }
      }, []);

  return (
    <div>
    <h6>{counter}</h6>
  </div>
  )
}

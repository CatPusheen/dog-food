import React, { useState , useEffect} from 'react'
import { Counter } from './Counter';

export const PracticeCont = () => {
    const [isVisible, setIsVisible] = useState(false)
   

//  useEffect(() => {
// console.log('RENDER')
//  });

//  useEffect(() => {
// console.log('MOUNT')
// }, []);

// useEffect(() => {
// console.log('UPDATE');
// },[isVisible]);



  return (
    <div>
        <h4>PracticeCont</h4> 
        {isVisible && <Counter />}
     
        <div>
            IM STATE 👉  {JSON.stringify(isVisible)}
        </div>
        <button onClick={() => {
            setIsVisible(prevState => !prevState)
             }}>TAP TAP</button>
    </div>
  )
}

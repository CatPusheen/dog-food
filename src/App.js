import React, { useState } from 'react'

import data from "../data.json"


import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { List } from './components/List'
import { PracticeCont } from './practice/PracticeCont'



export const App = () => {
  const [ foodList, setFoodList] = useState(data); 
  return (
    <div>
      <Header />
      <List list = {foodList}/>
      <Footer />
     
        {/* <PracticeCont /> */}
    </div>
  )
}

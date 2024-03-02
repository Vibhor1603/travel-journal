/* eslint-disable no-unused-vars */
import React from  'react';
import Header from './Header';
import Card from './Card';
import data  from './assets/data.js'

export default function App(){
  const Cards=data.map(items=>{
    return(
      <Card
      key={items.id}
      item= {items}
      
      />
    )
    })
  return(
    <div className="journal">
  <Header />
  
 {Cards}
  </div>
  )


  }





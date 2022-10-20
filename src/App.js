import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/category';
import Cards from './components/Cards';
import { items } from './data';
function App() {
const [itemsData,setItemsData ]= useState(items)
 //get all cat uniqe
const allCategory = ['الكل',...new Set(items.map((i) => i.category))]

// console.log(allCategory)
//filter by category 
const filterByCategory = (cat) => {
  if (cat ==='الكل'){
    setItemsData(items)
  }else{
    const newArr = items.filter((item)=> item.category === cat)
    setItemsData(newArr)
    // console.log(newArr);
  }
}
//filter by searsh form 
const filterBySearsh = (word) => {
  if (word !== ""){
    const newArr = items.filter((item)=> item.title === word)
    setItemsData(newArr)
    console.log(newArr);
  }
}

  
  return (
    <div className="color-body font">
    <NavBar filterBySearsh= {filterBySearsh}/>
    <Container>
      <Header/>
      <Category filterByCategory = {filterByCategory} allCategory = {allCategory}/>
      <Cards itemsData={itemsData}/>
    </Container>
    
    </div>
  );
}

export default App;

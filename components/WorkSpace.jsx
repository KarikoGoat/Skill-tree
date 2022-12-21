import React, { useRef, useState } from 'react'
import AddItemDropdown from './AddItemDropdown'
import Item from './Item';


const WorkSpace = () => {

  const workSpaceRef = useRef();  
  const [items, setItems] = useState([]);

  return (
    <div className="h-screen w-screen"  ref={workSpaceRef}>
      {items.map((item) => {
        return (
          <Item item={item} /> 
        )
      })}
      <AddItemDropdown items={items} setItems={setItems} parentRef={workSpaceRef}/>
    </div>
  )
}

export default WorkSpace
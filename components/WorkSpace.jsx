import React, { useRef, useState } from 'react'
import AddItemDropdown from './AddItemDropdown'
import Item from './Item';


const WorkSpace = (props) => {

  const workSpaceRef = useRef();  
  const [items, setItems] = useState([]);

  return (
    <div className="z-0 w-5/6 overflow-auto"  ref={workSpaceRef}>
      {items.map((item) => {
        return (
          <Item item={item} setCurrentItem={props.setCurrentItem}/> 
        )
      })}
      <AddItemDropdown items={items} setItems={setItems} parentRef={workSpaceRef}/>
    </div>
  )
}

export default WorkSpace
import { useState, useRef, useEffect } from "react";
import DropdownButton from "./DropdownButton";
import AddIcon from '../public/addIcon.svg';

const AddItemDropdown = (props) => {

  const menuRef = useRef()
  
  const [addItemDropdown, setAddItemDropdown] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const addItem = (event) => {
    props.setItems([...props.items, { name: "item", x: event.pageX, y:event.pageY }]);
    setAddItemDropdown(false);
  }

  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();   
      setAddItemDropdown(true);
      setCoords({ x: event.pageX, y: event.pageY }); 
    } 

    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAddItemDropdown(false);
      }
    }
    
    const parent = props.parentRef.current;

    parent.addEventListener('click', handleClick);
    parent.addEventListener('contextmenu', handleRightClick);
    return () => {
      parent.removeEventListener('contextmenu', handleRightClick);
      parent.removeEventListener('click', handleClick)
    }
  })
  
  if (addItemDropdown) {
    return (
      <>
          <div className="absolute bg-gray-500 " ref={menuRef}
          style={{ top: coords.y, left: coords.x }}>
            <DropdownButton icon={AddIcon} buttonText={"add new item"} handleClick={addItem}/>
          </div>
      </>
    ) 
  }
}

export default AddItemDropdown

const Item = (props) => {

  const item = props.item;

  const handleClick = () => {
    
    props.setCurrentItem(item)

  }

  return (
    <>
      <div className="absolute py-2 px-6 bg-gray-400 hover:bg-gray-200"
      style={{ top: item.y, left: item.x }} onClick={handleClick} >
        <h1 className="text-xl">{item.name}</h1>
      </div>
    </>
  )
}

export default Item
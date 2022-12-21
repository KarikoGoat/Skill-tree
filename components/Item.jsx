
const Item = (props) => {

  const item = props.item;

  return (
    <>
      <div className="absolute py-2 px-6 bg-gray-300"
      style={{ top: item.y, left: item.x }}>
        <h1 className="text-xl">{item.name}</h1>
      </div>
    </>
  )
}

export default Item
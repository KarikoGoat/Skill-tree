

const Sidebar = (props) => {

  console.log(props.currentItem.name)

  return (
    <>
      <div className="bg-gray-400 w-1/6 z-10">
        <div className="p-6">
          <h1 className="text-2xl">{props.currentItem.name}</h1>
        </div>
      </div>
    </>
  )
}

export default Sidebar
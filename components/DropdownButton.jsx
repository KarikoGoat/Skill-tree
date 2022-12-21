import Image from "next/image";

const DropdownButton = (props) => {
  return (
    <>
      <div className="flex space-x-2 items-center py-2 px-4 hover:bg-gray-400 cursor-pointer"
      onClick={props.handleClick ? props.handleClick : () => console.log("no")}>
        <Image src={props.icon} alt="Button Icon" />
        <h1 className="text-xl">{props.buttonText}</h1>
      </div>
    </>
  )
}

export default DropdownButton
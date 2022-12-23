import WorkSpace from "../components/WorkSpace";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const create = () => {

  const [currentItem, setCurrentItem] = useState({})

  return (
    <>
      <Navbar />
      <section>
        <div className="h-screen pt-7 flex" >
          <WorkSpace setCurrentItem={setCurrentItem}/>
          <Sidebar currentItem={currentItem}/>
        </div> 
      </section>
    
    </>
  )
}

export default create
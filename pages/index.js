import Link from "next/link"

const index = () => {
  return (
    <> 
      <div className="text-1xl">index</div>
      <Link href="/create">Make a skill tree</Link>
    </>
   
  )
}

export default index
import Link from "next/link" ; 

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page that you are looking for does not exists.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound 

import Link from "next/link"
import { useRouter } from "next/router"

const About = () => {

    const router =useRouter()

    const handleClick = async() => {
       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data =  await res.json()
        if(data){
            router.push("/")
        }
        
    }

    return (
        <>
            <h1>About Page</h1>
            <button onClick={handleClick} className='btn btn-outline-primary'>Fetch Data</button>
            <Link className='btn btn-outline-primary' href="/">Back to Home</Link>
        </>
    )
}

export default About
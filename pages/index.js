import Link from "next/link"
import { useRouter } from "next/router";

function Home() {

    const router = useRouter()

    const handleClick = () => {
        console.log("Placeing your order");
        router.push("/product")
    }
    return (
        <>
            {/* <h2>Home</h2>
            <Link href="/blog" >Blog</Link>
            <Link href="/product" >Product</Link>
            
        <button onClick={handleClick} >Place order</button> */}
            <h2>Next Js Pre rendering</h2>
            <Link href="/users" >Users</Link>
        </>
    )
}

export default Home
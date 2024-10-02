import Link from "next/link"

const Navbar = () => { 
    return (
        <nav className="navbar">
            <Link href='/' className="nav-link">
                Home
            </Link>

            <Link href='/products/register' className="nav-link">
                Register Product
            </Link>

            <Link href='/login' className="nav-link">
                Login
            </Link>
        </nav>
    )
}

export default Navbar
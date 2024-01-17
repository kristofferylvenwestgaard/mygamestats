import Container from "./container";
import Link from "next/link";

const Header = () => {
    return (
        <section>
            <Container>
                <div className="flex place-content-between items-center h-20">
                    <Link href="../"><h1 className='text-4xl'>MyGameStats</h1></Link>
                    <ul className="inline-flex space-x-4">
                        <li><Link href="/newUser">Sign up</Link></li>
                        <li><Link href="./stats">Stats</Link></li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default Header;
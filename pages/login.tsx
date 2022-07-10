import Link from 'next/link';

export default function Login() {
    return (
        <div>
            <h1>Please Login</h1>
            <Link href="/">
                Lets return to the HomePage
            </Link>
        </div>
    )
}
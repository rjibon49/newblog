import LayoutPage from "../components/LayoutPage";
import Link from 'next/link';

const Program = () => {
    return (
        <LayoutPage>
            <h1>Hello Program</h1>
            <Link href="/"><a>Home</a></Link>

        </LayoutPage>
    );
};

export default Program;
import LayoutPage from "../components/LayoutPage";
import Link from 'next/link';

const Index = () => {
    return (
        <LayoutPage>
            <h1>Hello</h1>
            <Link href="/program"><a>Program</a></Link>
        </LayoutPage>
    );
};

export default Index;
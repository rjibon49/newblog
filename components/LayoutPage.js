import Header from "./Header";

const LayoutPage = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <h2>Footer</h2>
        </>
    )
}

export default LayoutPage;
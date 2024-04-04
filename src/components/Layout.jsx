export default function Layout({ children }) {
    return (
        <>
            <header>
                <h1>James Bond Books</h1>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
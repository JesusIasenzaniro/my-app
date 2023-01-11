import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import '../styles/globals.css';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head />

            <body>
                <Header />
                <SearchBar />
                {children}
            </body>
        </html>
    );
}

import Footer from "../Footer";
import Header from "../Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-br bg-[#003356] min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

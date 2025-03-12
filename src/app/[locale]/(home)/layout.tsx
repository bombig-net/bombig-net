export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto px-4 container">
            {children}
        </div>
    );
}

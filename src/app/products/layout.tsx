export default function ProductLayout({children,
}: {children: React.ReactNode;}) {
    return (
        <div>
            {children}
            <div className="bg-amber-400 p-4 text-center">
                <h2>Featured products section</h2>
            </div>
        </div>
    )
}

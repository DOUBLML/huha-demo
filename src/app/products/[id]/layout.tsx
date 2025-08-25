export async function generateStaticParams() {
  return [
    { id: "bikini" },
    { id: "low-profile-thong" },
    { id: "thong" },
    { id: "brief" },
  ];
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

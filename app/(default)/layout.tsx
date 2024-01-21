import PageDecoration from "@/components/common/page-decoration"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* main grow as body  */}
      <main className="grow">
        <PageDecoration />
        {children}
      </main>
      {/* Footer */}
    </>
  )
}

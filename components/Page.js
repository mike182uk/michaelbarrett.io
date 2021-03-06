import Footer from './Footer'
import Head from './Head'
import Header from './Header'

export default function Page ({
  title = null,
  seoTitle,
  seoDescription,
  children
}) {
  const showTitle = title !== null

  return (
    <>
      <Head
        title={seoTitle}
        description={seoDescription}
      />
      <div className='container mx-auto max-w-3xl p-4 h-full'>
        <Header />
        <main className='my-8'>
          {
            showTitle &&
              <h2 className='text-4xl font-black text-center mb-mainContent'>{title}</h2>
          }
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

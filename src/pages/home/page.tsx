import { Head } from '@components/index'
import { BrandName } from '@src/constants'
import { Navbar, Header, Features, AuthPages, LayoutPages, Footer } from './components'

export default function Home () {
    return (
        <>
            <Head>
                <title>Home | {BrandName}</title>
            </Head>
            <Navbar />
            <Header />
            <main>
                <Features />
                <AuthPages />
                <LayoutPages />
            </main>
            <Footer />
        </>
    )
}

import { Head } from '@components/index'
import { BrandName } from '@src/constants'
import { Navbar, Header, Features, Footer } from './components'

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
            </main>
            <Footer />
        </>
    )
}

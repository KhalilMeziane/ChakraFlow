import { Head } from "@components/index"
import { BrandName } from '@src/constants'

export default function Home () {
    return (
        <>
            <Head>
                <title>Home | {BrandName}</title>
            </Head>
            <main>
                Home
            </main>
        </>
    )
}

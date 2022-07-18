import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from "next/head";
import PagesHeader from '../../components/layout/header-pages';

const Articles = (props) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>سایت ...</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PagesHeader />
                <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
                    <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
                        <div>
                            <h2 >لیست مقالات</h2>
                            <ul>
                                {
                                    props.articlesList.map(article => {
                                        return (
                                            <li key={article.id}>
                                                <Link href="/articles/[id]" as={`/articles/${article.id}`} >
                                                    <a>{article.title}</a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>                        
                        </div>
                    </div>
                </div>            
        </>
    )
}

export async function getServerSideProps() {
    let res = await fetch('https://62938cc54e324aacf6dc89d4.endapi.io/articles');
    let errorCode = res.ok ? false : res.status;
    let data = await res.json();
    let articlesList = data.data;
    return {
        props : {
            errorCode,
            articlesList
        }
    }
}


export default Articles;

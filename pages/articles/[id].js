import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head';
import PagesHeader from '../../components/layout/header-pages';

const SignleArticle = props => {

    const router = useRouter();

    const { article } = props;
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
                            <h2>Article Id : {router.query.id}</h2>
                            <h6>auter : {article.auter}</h6>
                            <h6>create date : {article.create_date}</h6>
                            <p>article title : {article.title}</p>
                            <p>article body : {article.body}</p>                  
                        </div>
                    </div>
                </div>   

            
        </>
    )
}

export async function getServerSideProps({ params }){
    let res = await fetch(`https://62938cc54e324aacf6dc89d4.endapi.io/articles/${params.id}`);
    let data = await res.json();
    let article = data.data;

    return {
        props : {
            article
        }
    }
}

export default SignleArticle;

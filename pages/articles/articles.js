import Image from "next/image";
import { useRouter } from 'next/router'
import Link from 'next/link'
import React from "react";
import ButtonOutline from "../../components/misc/button-outline.";

const Articles = (props) => {
  const router = useRouter();
  console.log(props)
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="articles"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        
      {
        props.articlesList && props.articlesList.map(article => {
            return (
                <li key={article.id}>
                    <Link href="/articles/[id]" as={`/articles/${article.id}`} >
                        <a>{article.title}</a>
                    </Link>
                </li>
            )
        })
      }

        
        <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
          <div className="p-4 lg:p-0 mt-6 lg:mt-16">
            <Image
              src="/assets/Standard.png"
              width={145}
              height={165}
              alt="Standard Plan"
            />
          </div>
          <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
            عنوان مقاله{" "}
          </p>
          <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
            <li className="relative check custom-list my-2">
             خلاصه متن مقاله
            </li>
          </ul>
          <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
            <ButtonOutline>ادامه ...</ButtonOutline>
          </div>
        </div> 

      </div>
      <div className="flex justify-center items-center">
      <ButtonOutline>
        <Link href="/articles">
          <a>لیست کل مقالات</a>
        </Link> 
      </ButtonOutline>
          
        </div>
    </div>
  );
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

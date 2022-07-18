import Image from "next/image";
import Link from 'next/link'
import React from "react";
import ButtonOutline from "./misc/button-outline.";

const Articles = ({articlesList}) => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="articles"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        
      {
        articlesList.map(article => {
            return (
              <>
              <div key={article.id} className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                {article.title}
                </p>
                
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>
                    <Link href="/articles/[id]" as={`/articles/${article.id}`} >
                        <a>ادامه ...</a>
                    </Link>
                  </ButtonOutline>
                </div>
              </div> 
              </>              
            )
        })
      }
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

export default Articles;

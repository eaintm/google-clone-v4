import React from 'react'
import Link from 'next/link';
import  Parser  from "html-react-parser";


export default function WebSearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl'>
        <p>

    About {results.searchInformation?.formattedTotalResults} results (
    {results.searchInformation?.formattedSearchTime} seconds)
        </p>
    {results.items?.map((result) =>(
        <div className='mb-8 max-w-xl' key={result.link}>
        <div className='group flex flex-col'>
            <Link className='text-sm truncate' href ={results.link}>
                {result.formattedUrl}
            </Link>
            <Link className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800' href ={result.link}>
                {result.title}
            </Link>
            <div>
                <p className='text-xl truncate font-medium text-blue-800'>{Parser(result.htmlSnippet)}</p>
            </div>                
        </div>
     </div>
    ))}
    </div> 
  );
}

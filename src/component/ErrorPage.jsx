import React from "react";
export default class ErrorPage extends React.Component{
    render(){
        const url='https://github.com/Taneristique/Whale_Finder/issues'
        const githubPage=<a href={url} className='text-teal-300'>https://github.com/Taneristique/Whale_Finder</a>
        return(
            <div className='bg-black w-screen h-screen text-center  text-red-50  grid place-content-center ...'>
            <p className='whitespace-pre-line truncate	'>Operation could not realize,please check your console for more details.<br/>
            In case you do not have access to the console <br/>
             please check your network connection and login parameters after refreshing the page and retry to login.<br/>Else try fixing the error using  error information 
             than retry to login.<br/>
            In case the problem persists please signal it to me<br/> as opening a new issue on the github address of this project using link below<br/>{githubPage}.</p>
           </div>
        )
    }
} 
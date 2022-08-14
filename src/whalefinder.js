import React from 'react';

export default class WhaleFinder extends React.Component{
    constructor(props){
        super(props)
        /*Create Contract Instance*/
        const {ethers,Contract}=require('ethers')
        const rpcUrl='https://cloudflare-eth.com/'
        const provider=new ethers.providers.JsonRpcProvider(rpcUrl);
        const CONTRACT_ADDRESS=props.address
        const CONTRACT_ABI=props.abi
        const contract = new Contract(CONTRACT_ADDRESS,CONTRACT_ABI,provider)
        /*Set Tracker And Device Settings */
        const TRANSFER_TRESHOLD=props.transferTreshold
        this.state={
            contract:contract,
            transferTreshold:TRANSFER_TRESHOLD,
            error_info:'',
            hasError:false,
        }
    }
    
    
    /*Listen Transactions On Ethereum Blockchain */
    main=async()=>{
        const Name=await this.state.contract.name()
        console.log(`Whale Tracker Started\n Listening for large transfers on ${Name}`)
        this.state.contract.on('Transfer',(from,to,amount,data)=>
        {
        if(amount.toNumber()>=this.state.transferTreshold){
                let newElem=""
                let element = "";
                let node=""
                newElem=document.createElement('p');
                node=document.createTextNode(`🚨New whale transaction founded at\nhttps://etherscan.io/tx/${data.transactionHash}\n\n${from}\n sent to \n${to} \n${amount.toNumber()} ${Name}\n\n`)
                newElem.appendChild(node);
                element = document.getElementById("investigate");
                element.appendChild(newElem);
                            }
        })
    }
    execute=()=>{
         
                this.main()
            
    }
    
    render(){
        return(
         
            <div id="execute"  className='  w-auto h-auto text-red-50 text-center'>
                <h1 className="text-2xl bg-green-300 italic text-black ">WhaleFinder</h1>
                <span className=' text-red-50 w-80   break-words ...  text-center whitespace-pre-wrap ' id="investigate"> 
                
                </span>
                     {this.execute()}
               
            </div>
            
        )
    }
}


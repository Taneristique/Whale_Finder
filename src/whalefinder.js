import React from 'react';
import ErrorPage from './component/ErrorPage';
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
        const checkMobile=props.check
        this.state={
            contract:contract,
            checkMobile:checkMobile,
            transferTreshold:TRANSFER_TRESHOLD,
            error_info:'',
            hasError:false
        }
    }
    
    
    /*Listen Transactions On Ethereum Blockchain */
    main=async(isMobile)=>{
        try{
        const Name=await this.state.contract.name()
        console.log(`Whale Tracker Started\n Listening for large transfers on ${Name}`)
        this.state.contract.on('Transfer',(from,to,amount,data)=>
        {
        if(amount.toNumber()>=this.state.transferTreshold){
            if(isMobile===1){
                document.body.style.backgroundColor = "black"
                document.body.style.color="#FEF2F2"
                document.body.style.textAlign = "center"
                document.write(`New Whale Transfer for  ${Name} : https://etherscan.io/tx/${data.transactionHash} <br/> `)
            }
            else{
                console.log(`New Whale Transfer for  ${Name} : https://etherscan.io/tx/${data.transactionHash}`)
                console.log(from,to,amount,data)
            }
            }
        })}
        catch(error){
            this.setState({error_info:error,hasError:true})
            return 0
        }
    }
    device_type=()=>{
        if(this.state.hasError===true){
            console.log(this.state.error_info)
            return 0
        }
        else if(this.state.checkMobile===1){
            this.main(1)
        }
        else{
            this.main(0)
        }
    }

    render(){
        return(
            this.device_type()===0?
            <ErrorPage></ErrorPage> 
            :
            this.state.checkMobile!==1?
            <div className='bg-black w-screen h-screen text-center  text-red-50  grid place-content-center ...'>
                <p>Request validated!Check your console for finding crypto whales pressing F12 button.</p> 
                 {this.device_type()}
            </div>
            :
                this.device_type()
        )
    }

   
  
}


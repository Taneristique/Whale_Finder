import WhaleFinder from './whalefinder';
import React, { Component } from 'react';
import ErrorPage from './component/ErrorPage';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      CONTRACT_ADDRESS:'',
      ABI:'',TRESHOLD:'',
      formSending:false,
      validation:false,
      hasError:false,
      isChecked:false
      }
  }  
  handleOnChange = () => {
    this.state.isChecked===false? this.setState({isChecked:true}):this.setState({isChecked:false})
  };
   inputChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
    }
     formSubmit=()=>{
      this.setState({formSending : true})
      setTimeout(()=>{
        this.setState({formSending:false,validation:true})}
        ,1000)
      
    }
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error, info);
    }
   
  render(){
    let {CONTRACT_ADDRESS,ABI,TRESHOLD,formSending,validation}=this.state
    return (
         formSending?
         <div className='w-screen h-screen bg-black grid place-content-center ...'>
         <svg
        className="animate-spin h-10 w-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-40"
          cx={"12"}
          cy={"12"}
          r="10"
          stroke="#454545"
          strokeWidth={"2"}
        ></circle>
        <path
          fill="#FFFFFF"
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
         </div>
        :this.state.hasError?
          <ErrorPage/>
        :validation?
          this.state.isChecked?
            <div>
                    <WhaleFinder address={CONTRACT_ADDRESS} abi={ABI} transferTreshold={TRESHOLD} check={1}/>
            </div>
          :
          <div className='bg-black w-screen h-screen text-center  text-red-50  grid place-content-center ...'>
            <WhaleFinder address={CONTRACT_ADDRESS} abi={ABI} transferTreshold={TRESHOLD}/>
          </div>
          :
          <div className='w-screen h-screen bg-black  grid place-content-center ...'> 
          <h1 className='text-red-50 mb-5 text-2xl'>Welcome To Whale Finder</h1>
          <form  className="flex flex-col items-center rounded-sm"   onSubmit={this.formSubmit}>
          <label className=" text-center text-red-50" htmlFor='tokenContract'>Token Contract Address</label>
          <input  className="bg-slate-400 rounded-sm" name='CONTRACT_ADDRESS' id="tokenContract" value={CONTRACT_ADDRESS} onChange={this.inputChange}/><br/>
          <label className="text-center text-red-50" htmlFor='tokenAbi'>Token ABI</label>
          <input className="bg-slate-400  rounded-sm" name='ABI' id='tokenAbi' value={ABI} onChange={this.inputChange}/><br/>
          <label  className="text-center text-red-50" htmlFor='txTreshold'>Transfer Treshold</label>
          <input className="bg-slate-400 rounded-sm" name='TRESHOLD' id="txTreshold"value={TRESHOLD} onChange={this.inputChange}/><br/>
          <label className=" text-center mt-5 text-red-50" htmlFor='MobileDeviceVersion'>Use Mobile Version</label>
          <input type="checkbox"  name="mobileVersion_button" value="mobile" id='MobileDeviceVersion' checked={this.state.isChecked} onChange={this.handleOnChange}/>
          <input className='text-black bg-white hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:ring-gray-500 dark:hover:bg-green-300 dark:focus:ring-green-400 mt-3' type='submit' value="submit"/>
          </form> 
          </div>
  );
}
}


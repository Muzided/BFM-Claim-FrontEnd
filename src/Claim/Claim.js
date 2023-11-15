import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { useEffect, useState } from 'react'
//contracts-info
import { presaleContractConfig, presaleContractAddress } from '../contracts/config'
//abi
import PresaleContractAbi from '../contracts/PresaleContractAbi.json'
//moment
import moment from 'moment';
//wagmi
import { readContract, writeContract, } from 'wagmi/actions';
import {
  useAccount,
  useBalance,
  readContracts,
  useNetwork,
  useSwitchNetwork,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi';
//viem
import { formatUnits, parseGwei, parseUnits } from 'viem';
import DownCounter from '../countdown/Countdown';
//toast
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Claim = () => {
  //states
  const [stageEnd, setStageEnd] = useState(0);
  const [lockTime, setLockTime] = useState();
  const [claimableTokens, setClaimAbleTokens] = useState(0);
  //hooks
  const { address, isConnected } = useAccount();

  const init = async () => {
    try {
      console.log(address)
      //phase information
      const phase = await readContract({
        ...presaleContractConfig,
        functionName: 'presaleInfo',
      });
      console.log("phase", phase)
      setStageEnd(+moment.unix(Number(phase[3]?.toString())).format('x'));
      setLockTime(+moment.unix(Number(phase[2]?.toString())).format('x'));

      //claimable tokens
      const claimable = await readContract({
        ...presaleContractConfig,
        functionName: 'userTokenBalance',
        args: [address]
      });
      console.log(claimable)
      console.log("claimable", formatUnits(claimable, 8))
      setClaimAbleTokens(formatUnits(claimable, 8));
    } catch (error) {
      console.log("error while initializing :", error)
    }


  }
  useEffect(() => {
    if (isConnected) {
      init()
    }


  }, [address])

  const claimTokens = async () => {
    try {
      const { hash } = await writeContract({
        address: presaleContractAddress,
        abi: PresaleContractAbi,
        functionName: 'claimTokens',
  
      });
      if(hash){
        toast.success("Claimed!")
      }
  
      
    } catch (error) {
      console.log("error :",error)
      toast.error(error.toString())
    }
    
  }

  return (
    <div className='h-[80vh] flex items-center justify-center w-full'>
      <div className='bg-gradient-to-bl from-[#EC9A3F] to-[#060401] py-4 px-1 md:p-4 rounded-2xl shadow-2xl'>
       { isConnected? <div className='flex flex-col space-y-3 items-center text-white'>
          <div className='text-sm font-medium text-black'>{address}</div>
          <div className='text-xl md:text-3xl font-bold text-black text-center md:text-start'>BFM Token Presale <span className='text-white'>Token Claim</span></div>
          <div className='flex flex-col space-y-4 bg-black  p-4 rounded-lg font-semibold'>
            <div className='text-xl'>Total Claimable : {claimableTokens}</div>
            <div className='flex gap-4 text-xl '><div>Token Lock :</div><DownCounter init={init} stageEnd={lockTime} /> </div>

            <div className='text-xl'>Release on : {moment(
              stageEnd
            ).format('lll')}</div>
          </div>
          <button className='bg-[#895212] shadow-2xl rounded-md px-6 py-2 w-fit text-white font-bold text-xl' onClick={() => { claimTokens() }}>Claim</button>


        </div>:<div className='flex flex-col space-y-4 items-center py-4'>
        <div className='text-3xl font-bold text-black text-center md:text-start'>Connect Wallet to <span className='text-white'>Token Claim</span></div>
        <ConnectButton/>
          </div>}
      </div>
<ToastContainer/>
    </div>
  )
}

export default Claim

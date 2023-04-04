import React, { useContext } from 'react'
import { SocketContext } from '../socketContext'
import {
    MDBBtn
  } from 'mdb-react-ui-kit';
const Notification = () => {
    const {answerCall, call, callAccepted}=useContext(SocketContext)
  return (
    <>
        {
            call.isReceivedCall && !callAccepted&&(
                <div style={{display:'flex', justifyContent:"center"}}>
                    <h1>{call.name} is Calling</h1>
                    <MDBBtn  className='mt-2' onClick={answerCall}>answerCall</MDBBtn>
                </div>
            )
        }
    </>
  )
}

export default Notification
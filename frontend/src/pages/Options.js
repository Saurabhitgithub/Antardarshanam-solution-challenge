import React, { useContext ,useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { SocketContext } from '../socketContext'
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
const Options = ({children}) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState('');
  return (
      <div >
        {children}
        <MDBRow className='row-cols-1 row-cols-md-2 g-2 mt-3'>
        <MDBCol>
  <MDBCard alignment='center' className='mt-3 ms-5 w-auto'>
      <MDBCardHeader>Account Info</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle >Enter Your Name</MDBCardTitle>
        <MDBInput label='Name' id='typeText' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <CopyToClipboard text={me}>
        <MDBBtn  className='mt-2'>Get Your Id</MDBBtn>
        </CopyToClipboard>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
  <MDBCard alignment='center' className='mt-3 ms-5 w-auto'>
      <MDBCardHeader>Make A Video Call</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Enter The Name</MDBCardTitle>
        <MDBInput label='ID to Call' id='typeText' type='text' value={idToCall} onChange={(e)=>{setIdToCall(e.target.value)}}/>
        {
            callAccepted && !callEnded ? (
                <MDBBtn  className='mt-2' onClick={leaveCall}>Hang Up</MDBBtn>
            ):
            (        <MDBBtn  className='mt-2' onClick={()=>{callUser(idToCall)}}>Call</MDBBtn>
            )
        }
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </div>
  )
}

export default Options
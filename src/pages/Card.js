import React, { useContext, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { SocketContext } from '../socketContext';
export default function Card() {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  useEffect(() => {

    console.log(callEnded);
    if (callEnded) {
    }
  }, [callEnded])
  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-2 mt-3'>
      {
        stream &&
        (<MDBCol >
          <MDBCard className='mt-5 mx-5 w-auto' >
            <MDBCardBody alignment='center'>
              <video playsInline muted ref={myVideo} autoPlay />
            </MDBCardBody>
            <MDBCardTitle className='mx-5 mb-5 w-auto' >{name || "You"}</MDBCardTitle>
          </MDBCard>
        </MDBCol>)
      }
      {
        callAccepted && !(callEnded) && (
          <MDBCol>
            <MDBCard id='anu'>
              <video playsInline muted ref={userVideo} autoPlay />
              <MDBCardBody>
                <MDBCardTitle>{call.name || "User"}</MDBCardTitle>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>
        )
      }

    </MDBRow>
  );
}
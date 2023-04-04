import React, { useState } from 'react'
import { useEffect } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0093E3',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#0093E3',
  botFontColor: '#fff',
  userBubbleColor: '#9DF1DF',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '350px',
  height: '480px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'AntarDarshan',
}

const Chatbot = () => {
  let [name, setName] = useState('')
  useEffect(()=>{
  console.log(name);

},[name])



  return (
      <div className='bot'>
    <ThemeProvider theme={theme}>
        <ChatBot
          speechSynthesis={{ enable: false}}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello! I am AntarDarshan Bot please give info about yourself',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
              
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  setName(value);
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'age',
            },
            {
              id: 'age',
              message:
                'Hi,{previousValue} How old you are?',
              trigger: 'q-age',
            },
            {
              id: 'q-age',
              user: true,
              validator: (value) => {
                if (/^[0-9]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input number only.'
                }
              },
              trigger: 'email',
            },
            {
              id: 'email',
              message:
                'What is your email?',
              trigger: 'q-email',
            },
            {
              id: 'q-email',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z@.]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input valid email.'
                }
              },
              trigger: 'phn',
            },
            {
              id: 'phn',
              message:
                'What is your phone number',
              trigger: 'q-phn',
            },
            {
              id: 'q-phn',
              user: true,
              validator: (value) => {
                if (/^[0-9]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input number only.'
                }
              },
              trigger: 'gender',
            },
            {
              id: 'gender',
              message:
                'What is your gender',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Male', trigger: 'reln' },
                { value: 2, label: 'Female', trigger: 'reln' },
              ],
            },
            {
              id: 'reln',
              message:
                'What is your relationship status?',
              trigger: 'q-reln',
            },
            {
              id: 'q-reln',
              options: [
                { value: 1, label: 'Single', trigger: 'help' },
                { value: 2, label: 'Committed', trigger: 'help' },
                { value: 2, label: 'Married', trigger: 'help' },
              ],
            },
            {
              id: 'help',
              message:
                'Are you currently seeking any external help?',
              trigger: 'q-help',
            },
            {
              id: 'q-help',
              options: [
                { value: 1, label: 'Yes', trigger: 'y-help' },
                { value: 2, label: 'No', trigger: 'stress' },
              ],
            },
            {
              id: 'y-help',
              message:'Be calm! Our team will reach you out soon!',
              trigger: 'stress',
            },
            {
              id: 'stress',
              message:'What type of problems cause you stress mostly?',
              trigger: 'q-stress',
            },
            {
              id: 'q-stress',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'treat',
            },
            {
              id: 'treat',
              message:'What are the treatments or measures you took to relieve your stress?',
              trigger: 'q-treat',
            },
            {
              id: 'q-treat',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'no-submit',
              message:'Be calm! Our team will reach you out soon!',
              end:true,
            },
            {
              id: 'end-message',
              message:"Good to see you, Be calm! Our team will reach you out soon!",
              end: true,
            },
          ]}
          {...config}
        />
    </ThemeProvider>
      </div>
  )
}

export default Chatbot

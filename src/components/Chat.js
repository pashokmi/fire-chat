import React, { useContext, useEffect, useState } from 'react'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, ChatImage, ChatInput, Chatlabel } from 'src/styles/styles'
import { db } from 'src/common/firebaseApp'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import bgChat from 'src/assets/bgChat.jpeg'


const Chat = () => {

  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState([])

  const userId = user.uid
  useEffect(() => {
    onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
     await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: inputValue,
      createdAt: new Date()
    })

    setInputValue('')
  }

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <Flex sx={{
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      height: 'calc(100vh - 65px)',
      backgroundImage: ` url(${bgChat})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center'
    }}>
      <Box sx={{
        height: '83vh',
        width: '90%',
        overflowY: 'scroll'
      }}>
        {message.map(({ id, photoURL, text, uid }) =>
          <Flex key={id} sx={{
            justifyContent: 'flex-start',
            flexDirection: `${userId === uid ? 'row' : 'row-reverse'}`,
            marginBottom: '10px',
            width: '100$'
          }}>
            <Flex bg={userId === uid ? '#d6f2f0' : '#f2e8d6'} sx={{
              flexDirection: `${userId === uid ? 'row' : 'row-reverse'}`,
              alignItems: 'center',
              padding: ' 5px',
              borderRadius: `${userId === uid ? '50px 50px 50px 0' : '50px 50px 0px 50px'}`
            }}>
              <Box pl={userId === uid ? '0' : '20px'} pr={userId === uid ? '20px' : '0'}>
                <ChatImage src={photoURL} alt={`user${id}`} />
              </Box>
              <Text pl={userId === uid ? '0' : '20px'} pr={userId === uid ? '20px' : '0'}>{text}</Text>
            </Flex>

          </Flex>
        )}
      </Box>
      <Chatlabel>

        <ChatInput value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   type='text'
                   placeholder='Enter you message'
                   onKeyPress={onPressEnter}
        />
        <Button onClick={handleSubmit}>Enter</Button>
      </Chatlabel>
    </Flex>
  )
}

export default Chat
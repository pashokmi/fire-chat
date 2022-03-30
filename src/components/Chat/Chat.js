import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db } from 'src/common/firebaseApp'
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp } from 'firebase/firestore'
import Box from 'src/ui/Box'
import Flex from 'src/ui/Flex'
import bgChat from 'src/assets/bgChat.jpeg'
import ChatBox from 'src/components/Chat/ChatBox'
import SendMessage from 'src/components/Chat/SendMessage'


const Chat = () => {

  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState([])
  const scrollRef = useRef()
  const userId = user.uid

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])

  useEffect(() => {
    const messageRef = collection(db, 'messages')
    const q = query(messageRef, orderBy('createdAt', 'asc'))
    onSnapshot(q, (snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])

  const handleSubmit = async (e) => {
    if (inputValue.length > 0) {
      e.preventDefault()
      await addDoc(collection(db, 'messages'), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: inputValue,
        createdAt: Timestamp.fromDate(new Date())
      })
      setInputValue('')
    }
  }

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <Box>
      <Flex
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'column',
          height: 'calc(100vh - 115px)',
          backgroundImage: `url(${bgChat})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}>
        <Flex

          alignItems={'flex-end'}
          sx={{
            justifyContent: 'flex-end',
            flexDirection: 'column',
            height: '100%',
            width: '95%',
            overflowY: 'scroll',
            '::-webkit-scrollbar': {
              width: 0
            }
          }}>
          {message.map((messages) =>
            <ChatBox {...messages} scrollRef={scrollRef} userId={userId} key={messages.id} />
          )}
        </Flex>
      </Flex>
      <SendMessage
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        onPressEnter={onPressEnter}
      />
    </Box>
  )
}

export default Chat
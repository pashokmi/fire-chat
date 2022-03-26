import React, { useContext, useEffect, useState } from 'react'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, CenterChat, ChatBox, ChatInput, Chatlabel, ChatImage, FlexChat } from 'src/styles/styles'
import { db } from 'src/common/firebaseApp'
import { collection, onSnapshot, addDoc } from 'firebase/firestore'

const Chat = () => {

  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState([])


  useEffect(() => {

    onSnapshot(collection(db, 'messages'), (snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    console.log('message arr', message)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const docRef = await addDoc(collection(db, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: inputValue,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(message)
    setInputValue('')
  }

  return (
    <CenterChat>
      <ChatBox>
        {message.map(({id, photoURL, text,displayName}) =>
          <FlexChat key={id}>
            <div>
              <ChatImage src={photoURL} alt={`user${id}`} />
              <p>{displayName}</p>
            </div>
            <p>{text}</p>
          </FlexChat>
        )}
      </ChatBox>
      <Chatlabel>
        <ChatInput value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   type='text'
                   placeholder='Enter you message'
        />
        <Button onClick={ handleSubmit}>Enter</Button>
      </Chatlabel>
    </CenterChat>
  )
}

export default Chat
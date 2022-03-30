import React from 'react'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import { ChatImage } from 'src/styles/styles'
import Text from 'src/ui/Text'

const ChatBox = ({ photoURL, text, uid, scrollRef, userId, displayName }) => {
  return (
    <Flex
      ref={scrollRef}

      sx={{
        justifyContent: 'flex-start',
        flexDirection: `${userId === uid ? 'row-reverse' : 'row'}`,
        marginBottom: '10px',
        width: '100%'
      }}>
      <Flex bg={userId === uid ? '#d6f2f0' : '#f2e8d6'} sx={{
        flexDirection: `${userId === uid ? 'row-reverse' : 'row'}`,
        alignItems: 'flex-end',
        padding: ' 5px',
        borderRadius: `${userId === uid ? '50px 50px 0px 50px' : '50px 50px 50px 0'}`,
        '@media (max-width: 492px)': {
          alignItems: 'center'
        }
      }}>
        <Box pl={userId === uid ? '20px' : '0'} pr={userId === uid ? '0' : '20px'}>
          <ChatImage src={photoURL} alt={`user:${displayName}`} />
        </Box>
        <Text sx={{
          padding: '10px',
          paddingLeft: `${userId === uid ? '20px' : '0'}`,
          paddingRight: `${userId === uid ? '0' : '20px'}`,
          '@media (max-width: 492px)': {
            padding: '0',
            paddingLeft: `${userId === uid ? '10px' : '0'}`,
            paddingRight: `${userId === uid ? '0' : '10px'}`
          }
        }}
        >{text}</Text>
      </Flex>
    </Flex>
  )
}

export default ChatBox
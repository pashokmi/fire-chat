import React from 'react'
import Flex from 'src/ui/Flex'
import { ChatInput } from 'src/styles/styles'
import Box from 'src/ui/Box'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import Container from 'src/ui/Container'

const SendMessage = ({ inputValue, onPressEnter, handleSubmit, setInputValue }) => {
  return (
    <Box height={'50px'} bg={'#3B3833FF'}>
      <Container> <Flex
        mb={'5px'}
        m={'0 auto'}
        as={'label'}
        sx={{
          paddingTop: '5px',
          width: '90%'
        }}>

        <ChatInput value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   type='text'
                   placeholder='Enter you message'
                   onKeyPress={onPressEnter}
        />
        <Box
          as={'button'}
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '50px',
            background: '#3B3833FF',
            display: `${inputValue.length <= 0 ? 'none' : 'inline-block'}`
          }}
          onClick={handleSubmit}
        >
          <FaRegArrowAltCircleUp
            size={40}
            color={'white'}
          />
        </Box>
      </Flex>
      </Container>
    </Box>
  )
}

export default SendMessage
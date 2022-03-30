import React from 'react'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Text from 'src/ui/Text'
import Container from 'src/ui/Container'

const About = () => {
  return (
    <Flex
      p={'0 10px'}
      bg={'#aaaaaa'}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 65px)',
        flexDirection: 'column'
      }}
    >
      <Container>
        <Text
          fontSize={[4, 5]}
        >
          This is an application where you can exchange messages.
          Where many users can chat at the same time.
        </Text>
        <Text
          fontSize={[4, 5]}
        >
          The project was implemented for educational purposes.
        </Text>
        <Box
          as={'ul'}
          p={4}
          sx={{
            fontSize: '24px',
            listStyleType: 'disclosure-closed'
          }}>
          <Text
            fontSize={[2, 3, 4]}
            mb={2}
          >
            The verification project includes the following technologies:
          </Text>
          <li>React</li>
          <li>React router dom</li>
          <li>Firebase
            <Box
              as={'ol'}
              pl={3}
              sx={{
                listStyleType: 'circle'
              }}
            >
              <li>Authentication</li>
              <li>Cloud Firestore</li>
            </Box>
          </li>
          <li>Styled-system</li>
        </Box>
      </Container>
    </Flex>
  )
}

export default About
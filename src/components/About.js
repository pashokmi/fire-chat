import React from 'react'
import Flex from 'src/ui/Flex'
import Box from 'src/ui/Box'
import Text from 'src/ui/Text'

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
      <Text
        fontSize={[4, 5]}
      >
        Это чат где могут общаться много пользователей одновременно.
      </Text>
      <Text
        fontSize={[4, 5]}
      >
        Проэкт реализован в учебных целях.
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
          В проекте использовались такие технологии:
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
    </Flex>
  )
}

export default About
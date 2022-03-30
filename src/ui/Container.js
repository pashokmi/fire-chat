import styled from 'styled-components'
import Box from 'src/ui/Box'

const Container = styled(Box)({
  maxWidth:'1240px',
  width:'100%',
  margin:'0 auto'
})

Container.propTypes = Box.propTypes

export default Container

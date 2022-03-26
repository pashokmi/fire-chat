import styled from 'styled-components'
import {
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid,
  compose
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

const styleProps = compose(
  color,
  space,
  border,
  layout,
  position,
  flexbox,
  grid
)

const BoxBase = ({ as: Component = 'div', sx, ...props }) => (
  <Component sx={sx} {...props} />
)

const Box = styled.div(
  {
    boxSizing: 'border-box'
  },
  styleProps,
  ({ sx }) => sx
)

BoxBase.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.grid,
  as: PropTypes.node
}

export default Box

import styled, { keyframes } from 'styled-components'

export const ButtonSend = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;

  :hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .1);
    color: white;
    transform: translateY(-1px);
  }

  :disabled {
    background: #5f5f5f;
    color: #0a0909;
    box-shadow: 0 15px 20px rgba(252, 4, 4, 0.18);
  }
`
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 5px 15px;
  margin-bottom: 5px;
  border-radius: 45px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;

  :hover {
    background: #2EE59D;
    box-shadow: 0 15px 20px rgba(46, 229, 157, .1);
    color: white;
    transform: translateY(-1px);
  }

  :disabled {
    background: #5f5f5f;
    color: #0a0909;
    box-shadow: 0 15px 20px rgba(252, 4, 4, 0.18);
  }
`
export const LogOuts = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 0 15px;
  line-height: 45px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #ffffff;
  background: #242222;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;

  :hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4);
    color: #fc0404;
    transform: translateY(-1px);
  }
`

export const ChatInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #c6c6c6;
  border-radius: 20px;
  width: 100%;

  &::placeholder {
    font-size: 14px;
    padding-right: 10px;
  }

  &:focus {
    background-color: #fff;
  }
`
export const ChatImage = styled.img`
  border-radius: 50%;
  width: 40px;
  @media (max-width: 468px) {
    width: 30px;
  }
`
const Gradient = keyframes`
  from {
    background-position: 1%;
  }
  to {
    background-position: 100%;
  }
`
export const GradientDiv = styled.div`
  background: linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706);
  background-size: 600% 100%;
  animation: ${Gradient} 16s linear infinite;
  animation-direction: alternate;
`
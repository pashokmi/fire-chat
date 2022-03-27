import styled from 'styled-components'

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  min-width: 140px;
  padding: 0 15px;
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
  min-width: 140px;
  padding: 0 15px;
  line-height: 45px;
  border-radius: 45px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: #fc0404;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;

  :hover {
    background: #990d37;
    box-shadow: 0 15px 20px rgba(229, 46, 46, 0.4);
    color: white;
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
  &:focus{
    background-color: #fff;
  }
`
export const Chatlabel = styled.label`
  width: 90%;
  display: flex;
  box-shadow: 0 15px 20px rgba(46, 229, 157, .1);
`
export const ChatImage = styled.img`
  border-radius: 50%;
  width: 40px;
  @media (max-width: 468px) {
    width: 30px;
  }
`

import styled from 'styled-components/macro'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 300px;

  @media (max-width: 720px) {
    width: 260px;
  }
`

export const Label = styled.label<{ disabled: boolean }>`
  color: ${({ theme }): string => theme.color.white};
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  opacity: ${({ disabled }): string => (disabled ? '.5' : '1')};
  transition: opacity 300ms;

  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
`

export const Title = styled.div`
  display: flex;
  height: 20px;
  justify-content: flex-start;

  @media (max-width: 720px) {
    justify-content: center;
  }
`

export const Number = styled.span`
  color: ${({ theme }): string => theme.color.white};
  font-family: 'Shnobel';
  font-size: 44px;
  font-style: normal;
  font-weight: normal;
  left: -50px;
  line-height: 1;
  position: absolute;
  text-align: center;
  top: 0;

  @media (max-width: 720px) {
    left: 25px;
    font-family: 'Open Sans';
    font-size: 16px;
    position: static;
    margin-right: 5px;
  }
`

export const CheckedBox = styled.div`
  background: ${({ theme }): string => theme.color.darkpink};
  height: 20px;
  left: -45px;
  position: absolute;
  top: 0;
  width: 20px;

  ::after {
    border: 2px solid ${({ theme }): string => theme.color.white};
    border-left: 0;
    border-top: 0;
    content: '';
    display: table;
    height: 9px;
    left: 25%;
    position: absolute;
    top: 50%;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    width: 6px;
  }

  @media (max-width: 720px) {
    position: relative;
    left: -8px;
    top: -2px;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 720px) {
    width: 300px;
    margin-top: 30px;
  }
`

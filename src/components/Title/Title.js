import styled from 'styled-components';

const BigTitle = styled.h1`
font-size: 1.6rem;
font-family: var(--default-title-font);
color: #333;
text-align: center;
text-align: left;
`

const MediumTitle = styled.h2`
  font-size: 1.2rem;
font-family: var(--default-title-font);
color: #333;
text-align: center;
text-align: left;
`

const SmallTitle = styled.h3`
  font-size: 1rem;
  font-family: var(--default-title-font);
color: #333;
text-align: center;
text-align: left;
`




export function Title({ size, children }) {





  switch (size) {
    case 'small':
      return <SmallTitle>{children}</SmallTitle>;
    case 'medium':
      return <MediumTitle>{children}</MediumTitle>;
    case 'big':
      return <BigTitle>{children}</BigTitle>;
    default:
      return <BigTitle>{children}</BigTitle>;
  }


  
}
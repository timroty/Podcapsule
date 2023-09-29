import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Container, Grid, Typography } from '@mui/material'

export const Background = styled.div`
  height: 100vh;
  width:100vw;
  background: linear-gradient(
    165deg,
    rgba(1, 53, 123, 1) 0%,
    rgba(1, 53, 123, 0.3) 28%,
    rgba(1, 53, 123, 0.15) 32%,
    rgba(1, 53, 123, 0.075) 36.5%,
    rgba(1, 53, 123, 0.037) 38%,
    rgba(1, 53, 123, 0.019) 38.5%,
    rgba(1, 53, 123, 0) 40%
  );
  padding-top: 200px;
`;

export const HeadingContainer = styled(Container)`
 text-align: center;
`;

export const Logo = styled.img`
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const HeadingTextContainer = styled(Grid)`
  text-align: center;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
`

export const ActionButtons = styled.div`
  margin-top: 80px;
`;

export const HeadingText = styled(Typography)`
  color: #01357b;
  font-weight: 700;
  font-size: 95px;

  @media screen and (max-width: 700px) {
    font-size: 65px;
    padding-top: 20px;
  }
`

export const SubheadingText = styled(Typography)`
  margin-top: 5px;
  color: #01357b;
`

export const LogInButton = styled(Button)`
  background: #01357b;
  color: white;

  &:hover {
    color: #01357b; 
    background-color: white;
  }
`

export const SignUpButton = styled(LogInButton)`
  margin-right: 20px;
`

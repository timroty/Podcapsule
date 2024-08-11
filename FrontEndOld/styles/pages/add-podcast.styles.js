import styled from 'styled-components';
import Button from '@mui/material/Button'
import { Grid, Container } from '@mui/material'

export const Heading = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 4px;
`;

export const Divider = styled.div`
  border: none;
  border-top: 1px solid rgb(211, 216, 222);
`

export const StyledButton = styled(Button)`
  background: white;
  color: #01357b;
`

export const AddButton = styled(StyledButton)`
  background: white;
  color: #01357b;
  margin-top: 10px;
`

export const CenteredGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

export const SpacedGrid = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const PodcastTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 4px;
  margin-top: 5px;
`;

export const PodcastImage = styled.img`
  width: 100px;
  border-radius: 5px;
`

export const PodcastDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 4px;
  padding-right: 15px;
`;

export const PodcastDetails = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #212427;
`;

export const ContainerSpace = styled(Container)`
  margin-top: 20px;
  margin-bottom: 20px;
`
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { Grid, Snackbar } from '@mui/material'

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

export const CenteredGrid = styled(Grid)`
  display: flex;
  align-items: center;
`
export const PodcastImage = styled.img`
  width: 100px;
  border-radius: 5px;
`
export const PodcastTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 4px;
  margin-top: 0px;
`;

export const PodcastDateAdded = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #212427;
  margin-bottom: 4px;
`;

export const Divider = styled.div`
  border: none;
  border-top: 1px solid rgb(211, 216, 222);
`

export const CopyButton = styled(Button)`
  background: #01357b;
  color: white;

  &:hover {
    background: white;
    color: #01357b;
  }
`
export const AddButton = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
`

export const CopySnackbar = styled(Snackbar)`
  max-width: 800px;
`
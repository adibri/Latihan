import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  margin: '0 20px',
  // color: theme.palette.text.secondary,
}));

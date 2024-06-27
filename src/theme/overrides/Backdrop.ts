import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme: Theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[600], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}

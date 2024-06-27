// @mui
import { TableRow, TableCell } from '@mui/material';
//

// ----------------------------------------------------------------------

type Props = {
  isNotFound: boolean;
};

export default function TableNoData({ isNotFound }: Props) {
  return (
    <TableRow>
        <TableCell colSpan={12} sx={{ p: 0 }} />
    </TableRow>
  );
}

import { 
    Pagination, 
    Paper, 
    TableRow, 
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Stack 
 } from '@mui/material';
import { Grid } from '..';


const DefaultTableList = (props) => {
    const keys = Object.keys(props?.rows[0]);

    return  <Grid container={true} spacing={2}>
                <Grid xs={12} item={true}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    {
                                        props.headers.map((header) => (
                                            <TableCell>
                                                {header}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {props.rows.map((row, i) => (
                                <TableRow key={`row_${i}`}>
                                    {
                                        keys.map((key) => (
                                            <TableCell>
                                                {row[key]}
                                            </TableCell>
                                        ))
                                    }
                                    {
                                        props.actions && 
                                            <TableCell>
                                                {props.actions(row)}
                                            </TableCell>
                                    }
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={12} item={true}>
                    <Stack spacing={2}>
                        <Pagination 
                            onChange={props.onChange}
                            page={props.page}
                            count={props.count} />
                    </Stack>
                </Grid>
            </Grid>

}

DefaultTableList.defaultProps = {
    headers: [],
    rows: [],
    page: 1,
    onChange: () => {},
    count: 0
}

export default DefaultTableList;
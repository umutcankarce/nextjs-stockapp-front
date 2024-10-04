import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ButtonAppBar() {

  function createData(
    name: string,
    calories: number,
    fat: number,
  ) {
    return { name, calories, fat};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
  ];

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
    </Box>
    <Container maxWidth="lg" className='mt-10'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Ürün Adı</b></TableCell>
            <TableCell><b>Ürün Fiyat</b></TableCell>
            <TableCell><b>Ürün Stok</b></TableCell>
            <TableCell align="right"><b>İşlemler</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Container>
    </>
    
  );
}
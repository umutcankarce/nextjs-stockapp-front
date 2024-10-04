"use client"
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
import Button  from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import { Delete,Edit } from '@mui/icons-material';

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

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  return (
    <>
     <Dialog
        open={deleteOpen}
        onClose={handleDeleteClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Ürün Sil</DialogTitle>
        <DialogContent>
          Ürün Bilgileri Silmek İstiyor Musunuz?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Hayır</Button>
          <Button onClick={handleDeleteClose}>Evet</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Ürün Ekle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="product_name"
            name="product_name"
            label="Ürün Adı"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Ürün Adı"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="product_price"
            name="product_price"
            label="Ürün Fiyat"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Ürün Fiyat"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="product_stock"
            name="product_stock"
            label="Ürün Stok"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Ürün Stok"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button type="submit">Ekle</Button>
        </DialogActions>
      </Dialog>
    <Box sx={{ flexGrow: 1 }}>
      <Header/>
    </Box>
    <Container maxWidth="lg" className='mt-10'>
    <Button variant="outlined" onClick={handleClickOpen} >Yeni Ekle</Button>
    <br />
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
              <TableCell align="right"><Delete onClick={handleDeleteClickOpen}/><Edit onClick={handleClickOpen}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Container>
    </>
    
  );
}
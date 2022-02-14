import InfoIcon from '@mui/icons-material/Info';
import { Box, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import * as React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PontoTable(props) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const data = props.data
    
    return (
        <>
            <TableContainer style={props.style} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head">Dia</TableCell>
                            <TableCell variant="head">Horas trabalhadas</TableCell>
                            <TableCell variant="head">Saldo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row) => (
                                <TableRow key={row.dia}>
                                    <TableCell>{row.dia}</TableCell>
                                    <TableCell>{row.horasTrabalhadas}</TableCell>
                                    <TableCell>{row.saldo}</TableCell>
                                    <TableCell align='right'>
                                        <Tooltip title="Info">
                                            <IconButton onClick={handleOpen}>
                                                <InfoIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Informações adicionais
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        ...
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useMediaQuery } from 'react-responsive';
import calendar from '../../../img/calendar.png';
import InfoLabel from "../../widgets/info-label";
import PontoMobile from "./ponto-mobile";
import PontoTable from "./ponto-table";

export default function Ponto() {
  let userInfo = {
    horasMensalBase: 365,
    horasTrabalhadasByMonth: 35,
    horasTrabalhadasByNow: 20,
    salarioBase: 852.32,
    descontoSalario: 200,
    entrada: '08:56',
    saida: '00:00',
    horasTrabalhadas: 8,
    days: [
      {
        dia: '10/11',
        horasTrabalhadas: 0,
        saldo: 0,
        info: null
      },
      {
        dia: '11/11',
        horasTrabalhadas: 6,
        saldo: -2,
        info: null
      },
      {
        dia: '12/11',
        horasTrabalhadas: 8,
        saldo: 0,
        info: null
      },
      {
        dia: '13/11',
        horasTrabalhadas: 8,
        saldo: 0,
        info: null
      },
      {
        dia: '14/11',
        horasTrabalhadas: 10,
        saldo: 2,
        info: null
      },
      {
        dia: '15/11',
        horasTrabalhadas: 8,
        saldo: 0,
        info: null
      },
     {
        dia: '16/11',
        horasTrabalhadas: 0,
        saldo: 0,
        info: null
      }
    ]
  }

  let onClick = () => {
    console.log('atualiza ponto')
  }

  const isMobile = useMediaQuery({ query: `(max-width: 1200px)` });

  if (isMobile) {
    return (<PontoMobile userInfo={userInfo}></PontoMobile>)
  }

  return (
    <Box style={{marginTop: '8em'}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item lg={2}></Grid>  
        <Grid item lg={6}>
          <Box sx={{display: 'flex'}}>
            <InfoLabel label='Entrada' content={userInfo.entrada} direction='column'></InfoLabel>
            <InfoLabel label='Saída' content={userInfo.saida} direction='column'></InfoLabel>
            <InfoLabel label='Horas trabalhadas' content={userInfo.horasTrabalhadas} direction='column'></InfoLabel>
            <Button onClick={onClick} variant="contained" style={{backgroundColor: '#7749F8'}}>Bater ponto</Button>
          </Box>
          <PontoTable style={{marginTop: '4em', maxWidth: '700px', backgroundColor: '#a5c6d9'}} data={userInfo.days}></PontoTable>
        </Grid>
        
        <Grid item lg={4}>
        <InfoLabel label='Horas mensal base' content={userInfo.horasMensalBase} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Horas trabalhadas no mês' content={userInfo.horasTrabalhadasByMonth} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Horas trabalhadas até agora' content={userInfo.horasTrabalhadasByNow} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Salário base' content={userInfo.salarioBase} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Desconto do salário até agora' content={userInfo.descontoSalario} direction='row'></InfoLabel>
            <img src={calendar} alt="calendar"/>
        </Grid>
      </Grid>
    </Box>
  );
}

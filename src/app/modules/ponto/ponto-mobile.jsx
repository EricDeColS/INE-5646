import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import calendar from '../../../img/calendar.png';
import InfoLabel from "../../widgets/info-label";
import PontoTable from "./ponto-table";

export default function PontoMobile(props) {
    const userInfo = props.userInfo


    let onClick = () => {
        console.log('atualiza ponto')
      }

    return (
        <Box style={{margin: '2em'}} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <InfoLabel label='Horas mensal base' content={userInfo.horasMensalBase} direction='row'></InfoLabel>
                </Grid>
                <Grid item>
                    <InfoLabel label='Horas trabalhadas até agora' content={userInfo.horasTrabalhadasByNow} direction='row'></InfoLabel>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <InfoLabel style={{marginTop: '2em'}} label='Horas trabalhadas no mês' content={userInfo.horasTrabalhadasByMonth} direction='row'></InfoLabel>
                </Grid>
                <Grid item>
                    <InfoLabel style={{marginTop: '2em'}} label='Salário base' content={userInfo.salarioBase} direction='row'></InfoLabel>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={7}></Grid>
                <Grid item>
                    <InfoLabel style={{marginTop: '2em'}} label='Desconto do salário até agora' content={userInfo.descontoSalario} direction='row'></InfoLabel>
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{marginTop: '2em'}}>
                <Grid item xs={7}>
                    <Box sx={{display: 'flex'}}>
                        <InfoLabel label='Entrada' content={userInfo.entrada} direction='column'></InfoLabel>
                        <InfoLabel label='Saída' content={userInfo.saida} direction='column'></InfoLabel>
                        <InfoLabel label='Horas trabalhadas' content={userInfo.horasTrabalhadas} direction='column'></InfoLabel>
                    </Box>
                </Grid>
                <Grid item>
                    <Button onClick={onClick} variant="contained" style={{backgroundColor: '#7749F8'}}>Bater ponto</Button>
                </Grid>
            </Grid>
            
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <PontoTable style={{marginTop: '4em', maxWidth: '500px', backgroundColor: '#a5c6d9'}} data={userInfo.days}></PontoTable>
                </Grid>
                <Grid item xs={4} alignSelf='center'>
                    <img src={calendar} alt="calendar" />
                </Grid>
            </Grid>
        </Box>
    )
}
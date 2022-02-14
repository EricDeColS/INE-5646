import * as React from "react";
import calendar from '../../../img/calendar.png';
import InfoLabel from "../../widgets/info-label";

export default function PontoInfo(props) {
    const userInfo = props.userInfo
    return (
        <>
            <InfoLabel label='Horas mensal base' content={userInfo.horasMensalBase} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Horas trabalhadas no mês' content={userInfo.horasTrabalhadasByMonth} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Horas trabalhadas até agora' content={userInfo.horasTrabalhadasByNow} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Salário base' content={userInfo.salarioBase} direction='row'></InfoLabel>
            <InfoLabel style={{marginTop: '2em'}} label='Desconto do salário até agora' content={userInfo.descontoSalario} direction='row'></InfoLabel>
            <img src={calendar} alt="calendar"/>
        </>
    )
}
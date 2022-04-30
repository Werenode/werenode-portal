import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import ElectricalServicesIcon from "@material-ui/icons/ElectricalServices";
import {Connector} from "./Wizard";
import * as React from "react";

export const EvseInfo = ({data}) => {
    return(
        <Grid container width='70%' margin='auto' direction='column' padding='10px'>
            <Grid item container direction='column'>
                <Typography variant='h5' component='div' sx={{marginBottom: '15px',
                    display: 'flex', alignItems: 'center'
                }}>
                    <InfoIcon sx={{margin: '0px 8px  0px 0px'}}/>EVSE Information
                </Typography>
                <Grid item border='1px solid #34383e' position='relative' margin='15px 0px'>
                    <Typography variant='subtitle2' style={{
                        position : 'absolute',
                        top : '-11px',
                        paddingLeft : '8px',
                        paddingRight : '8px',
                        color: '#00B1A5',
                    }}>
                        Supervision
                    </Typography>
                    <div style={{padding: '10px',}}>{data.setting.supervision.type}</div>
                </Grid>
                <Grid item border='1px solid #34383e' position='relative' margin='15px 0px'>
                    <Typography variant='subtitle2' style={{
                        position : 'absolute',
                        top : '-11px',
                        paddingLeft : '8px',
                        paddingRight : '8px',
                        color: '#00B1A5',
                    }}>
                        Gps Coordinates
                    </Typography>
                    <div style={{padding: '10px',}}>{data.setting.gps || <span>No Gps coordinates</span>}</div>
                </Grid>
            </Grid>
            <Grid item container maxHeight='400px' direction='column' sx={{overflowY: 'auto'}}>
                <Typography variant='h5' component='div' sx={{marginBottom: '15px',
                    display: 'flex', alignItems: 'center'}}
                >
                    <ElectricalServicesIcon sx={{margin: '0px 8px  0px 0px'}} /> Connectors
                </Typography>
                {
                    data.setting.connectors.length > 0 ?
                        data.setting.connectors.map((x,i) =>
                            <Grid item margin='10px 0px' key={`index-${i}`}>
                                <Connector
                                    key={"connector" + i}
                                    identifier={i}
                                    rmConnector={null}
                                    editConnector={null}
                                    supervisiontype={data.setting.supervision.type}
                                    data={data.setting.connectors[i]}
                                    hideButtons={true}
                                />
                            </Grid>
                        ) : <span>No connectors</span>
                }
            </Grid>
        </Grid>)
}

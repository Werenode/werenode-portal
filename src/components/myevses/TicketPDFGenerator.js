import jsPDF from "jspdf";
import QRCode from "qrcode.react";
import React, {useRef} from "react";
import werenode_footer from '../img/werenode_footer.png'
import werenode_logo from '../img/werenode_logo.png'
import {FileDownloadOutlined} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const classes = {
    container: {
        textAlign: 'center',
    },
    ticket: {
        width: '476px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto auto 25px auto',
        backgroundColor : 'white',
        boxShadow: '-12px 12px 12px 5px black',
    },
    containerQrCode: {
        height: '392px',
        paddingTop: '45px',
    },
    qrCodeBox: {
        border: '8px solid black',
        height: '232px',
        width: '232px',
        borderRadius: '8%',
        margin: 'auto',
        position: 'relative',
    },
    qrcode: {
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    qrCodeInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    evseName: {
        border: '1px solid black',
        //textAlign: center;
        color: 'aliceblue',
        fontWeight: 'bold',
        fontSize: '1.6em',
        padding: '4px 16px',
        borderRadius: '10px',
        backgroundColor: 'black',
        width: 'fit-content',
        wordBreak: 'break-word',
    },
    triangle: {
        width: '0',
        height: '0',
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderBottom: '15px solid black',
        borderTop: '4px solid transparent',
    }

};

export const TicketPDFGenerator = ({evseName, evseLink}) => {
    const pdf = new useRef(new jsPDF());
    const ticketRef = new useRef();
    const downloadPdf = () => {
        const doc = pdf.current;
        const ticketHTML = ticketRef.current;//document.getElementById('id-ticket-html');
        doc.internal.pageSize.width = ticketHTML.clientWidth;
        doc.internal.pageSize.height =  ticketHTML.clientHeight;
        doc.html(ticketHTML, {
            callback: doc => doc.save(`EVSE_${evseName}.pdf`),
            html2canvas: {scale: 0.86999999},
        });
    };
    return (
        <div style={classes.container}>
            <div>
                <IconButton sx={{'&:hover' : {backgroundColor: 'gray'}, margin: '20px',
                    border: '1px solid black', borderRadius: '50%'}} onClick={downloadPdf}
                >
                    <FileDownloadOutlined />
                </IconButton>
            </div>
            <div ref={ticketRef} style={classes.ticket}>
                <img src={werenode_logo} alt='werenode header ticket'/>

                <div style={classes.containerQrCode}>
                    <div style={classes.qrCodeBox}>
                        <QRCode style={classes.qrcode}
                            id="qrCodeEl"
                            size={180}
                            value={`${evseLink}${evseName}`}
                        />
                    </div>
                    <div style={classes.qrCodeInfo}>
                        <div style={classes.triangle} />
                        <div style={classes.evseName}>
                            {evseName}
                        </div>
                    </div>
                </div>
                <img src={werenode_footer} alt='werenode footer ticket'/>
            </div>
        </div>

    )
}

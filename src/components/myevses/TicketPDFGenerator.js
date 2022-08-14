import jsPDF from "jspdf";
import QRCode from "qrcode.react";
import React from "react";
import werenode_footer from '../img/werenode_footer.png'
import werenode_logo from '../img/werenode_logo.png'
import './styled/TicketPDFGenerator.css'
import {FileDownloadOutlined} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export const TicketPDFGenerator = ({evseName, evseLink}) => {
    const downloadPdf = () => {
        const pdf = new jsPDF();
        const ticket = document.getElementById('ticket-html');
        pdf.internal.pageSize.width = ticket.clientWidth;
        pdf.internal.pageSize.height =  ticket.clientHeight;
        pdf.html(ticket, {
            callback: doc => doc.save(`Evse_${evseName}.pdf`),
            html2canvas: {scale: 0.86999999},
        })
    };
    return (
        <div className='PDFcontainer'>
            <div>
                <IconButton sx={{'&:hover' : {backgroundColor: 'gray'}, margin: '20px',
                    border: '1px solid black', borderRadius: '50%'}} onClick={() => downloadPdf()}
                >
                    <FileDownloadOutlined />
                </IconButton>
            </div>
            <div id='ticket-html' className='ticket'>
                <img src={werenode_logo} alt='werenode header ticket'/>
                <div className='container-qrcode'>
                    <div className='qrcode-box'>
                        <QRCode className='qrcode'
                            id="qrCodeEl"
                            size={180}
                            value={`${evseLink}${evseName}`}
                        />
                    </div>
                    <div className='qrcode-info'>
                        <div className='triangle' />
                        <div className='evse-name' id='div-evse-name'>
                            {evseName}
                        </div>
                    </div>

                </div>
                <img src={werenode_footer} alt='werenode footer ticket'/>
            </div>
        </div>

    )
}

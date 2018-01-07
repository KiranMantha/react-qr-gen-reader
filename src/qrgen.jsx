import * as React from 'react';
import QRCode from 'qrcode.react';


export default class QrGen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            qrValue: '',
            qrSizePx: 128,
            errorCorrectLevel: 'L'
        }
    }
    changeQrValue(event){
        this.setState({
            qrValue: event.target.value
        });
    }

    changeQrSize(event){
        this.setState({
            qrSizePx: parseInt(event.target.value)
        });
    }

    changeQrerrorCorrectLevel(event){
        this.setState({
            errorCorrectLevel: event.target.value
        });
    }

    render() {
        return(
            <div>
                <h3>Generate QR</h3>
                <div>qr value: <input type='text' value={this.state.qrValue} onChange={this.changeQrValue.bind(this)}/></div>
                <div>qr size in px: <input type='text' value={this.state.qrSizePx} onChange={this.changeQrSize.bind(this)}/></div>
                <div>qr error level:  
                    <select onChange={this.changeQrerrorCorrectLevel.bind(this)}>
                        <option value="L">Low-Approx. 7% of codewords can be restored</option>
                        <option value="M">Medium-Approx. 15% of codewords can be restored</option>
                        <option value="Q">Quartile-Approx. 25% of codewords can be restored</option>
                        <option value="H">High-Approx. 30% of codewords can be restored</option>
                    </select>
                </div><br/>
                <QRCode value={this.state.qrValue} size={this.state.qrSizePx} level={this.state.errorCorrectLevel}/><br/>
                This Module can be found <a href="https://github.com/zpao/qrcode.react">here</a> and <a href="https://neocotic.com/qrious/">here</a>.
            </div>
        );
    }
}
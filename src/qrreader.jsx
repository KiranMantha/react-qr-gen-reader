import * as React from 'react';
import QrReader from 'react-qr-reader';


export default class ReadQR extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: {
                width: 300
            },
            delay: 300,
            result: 'No Result'
        }
    }

    handleScan(data){
        if(data){
          this.setState({
            result: data,
          })
        }
    }

    handleError(err){
        console.error(err)
    }

    changeDelay(event){
        this.setState({
            delay: parseInt(event.target.value)
        })
    }

    render(){
        return(
            <div>
                <h3>Read QR</h3>
                <div>delay in reading QR: <input type="text" value={this.state.delay} onChange={this.changeDelay.bind(this)} />ms</div><br/>
                <QrReader
                delay={this.state.delay}
                onError={this.handleError.bind(this)}
                onScan={this.handleScan.bind(this)}
                style={this.state.style}
                />
                <p>{this.state.result}</p>
                This Module can be found <a href="https://github.com/JodusNodus/react-qr-reader">here</a>.
            </div>
        )
      }
}
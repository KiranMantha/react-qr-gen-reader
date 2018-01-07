import * as React from 'react';
import {render} from 'react-dom';
import QrGen from './qrgen';
import ReadQR from './qrreader';

class App extends React.Component {
    render() {
        return(
            <div>
                <QrGen />
                <ReadQR />
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));
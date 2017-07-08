import React, {Component} from 'react'
import {} from '../../styles/global.css'
import {} from '../../styles/local.css'
var CodeMirror = require('react-codemirror');
require('codemirror/lib/codemirror.css');

export default class CodePanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: this.props.initialCode,
        }
    }
    updateCode (newCode) {
        this.setState({
            code: newCode,
        });
    }
    render () {
        var options = {
            lineNumbers: true,
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
    }
}

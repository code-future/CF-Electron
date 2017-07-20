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
        var script;
        if(this.state.code.indexOf('//yes') > -1) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.innerHTML = this.state.code;
            document.getElementsByTagName("head")[0].appendChild(s);
        }
        return (<div>
                <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
            </div>);
    }
}

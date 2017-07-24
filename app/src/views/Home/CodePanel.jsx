import React, {Component} from 'react'
import {} from '../../styles/global.css'
import {} from '../../styles/local.css'
var CodeMirror = require('react-codemirror');
require('codemirror/lib/codemirror.css');

import tests from '../../tests/test.json';

export default class CodePanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: this.props.initialCode(),
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

        return (<div>
                <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
                <button onClick={this.handleClick.bind(this)}>Submit</button>
            </div>);
    }
    handleClick() {
        this.setFnRef();
        this.runTests(window.userCode);
        this.cleanWindow()
    }
    setFnRef() {
        eval(this.state.code + 'window.userCode = {'+ this.props.name+'}');
    }
    cleanWindow() {
        delete window.userCode;
    }
    runTests() {
        let outcomes = this.props.testCases();
        this.informUser(outcomes);

    }

    informUser(outcomes) {
        let status = outcomes.map(function(outcome, index) {
            return index + '.)' +outcome.status + ' --> ' + outcome.message;
        }).join('\n')
        alert(status);
    }
}

import _ from 'lodash';
import {consoleLogText} from './test'
function component () {
    var element = document.createElement('div');
    consoleLogText();
    element.innerHTML= _.join(['hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
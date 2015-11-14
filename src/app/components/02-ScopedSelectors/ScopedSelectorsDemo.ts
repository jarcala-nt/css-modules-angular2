/*
 * Angular 2 decorators and services
 */
import {Component, View} from 'angular2/angular2';
import {Snippet} from "../shared/Snippet/Snippet";

var styles = require("./ScopedSelectors.css");
var js = require('!!raw!./ScopedSelectors.ts');
var css = require('!!raw!./ScopedSelectors.css');

@Component({
    directives: [Snippet],
    'selector': 'scoped-selectors-demo',
    'template': `<snippet [files]="files" [innertext]="innerContent"></snippet>`
})
export class ScopedSelectorsDemo {
    innerContent: string;
    files: any;

    onInit(){
        this.files = [
            { name: 'ScopedSelectors.ts', source: js },
            { name: 'ScopedSelectors.css', source: css }
        ];

        this.innerContent = `<div class="${styles.root}">
            <p class="${styles.text}">Scoped Selectors</p>
          </div>`;
    }
}
import { Component, Input } from '@angular/core';
import { ICurrencys } from '../data/currency.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class Header {
    @Input() data: ICurrencys
}

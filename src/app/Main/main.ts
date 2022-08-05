import { Component, Input } from '@angular/core';
import { ICurrencys } from '../data/currency.interface';

@Component({
    selector: 'app-main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})
export class Main {
    @Input() data: ICurrencys;
    value: number = 0;
    currency: 'USD' | 'EUR' | 'PLN' | 'UAH' = 'USD'

    input(event: any) {
        let value: number
        if(typeof(event) === 'number'){
            value = event
        } else {
            value = +event.target.value
        }
        if(value < 0){
            return
        }
        switch(this.currency) {
            case 'USD': {
                this.value = value * this.data.USD
                break
            }
            case 'EUR': {
                this.value = value * this.data.EUR
                break
            }
            case 'PLN': {
                this.value = value * this.data.PLN
                break
            }
            default: {
                this.value = value
            }
        }
    }

    select(event: any) {
        this.currency = event.target.value
        const inputValue = +event.target.parentNode.children[2].value
        if(!inputValue){
            return
        }
        this.input(inputValue)
    }
}

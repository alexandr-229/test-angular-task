import { IData } from "./data.interface"
import axios from 'axios';
import { ICurrencys } from "./currency.interface";

async function getData() {
    const data = (await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')).data

    currencys.USD = data.filter((i: IData) => i.cc === 'USD')[0].rate.toFixed(2)
    currencys.EUR = data.filter((i: IData) => i.cc === 'EUR')[0].rate.toFixed(2)
    currencys.PLN = data.filter((i: IData) => i.cc === 'PLN')[0].rate.toFixed(2)
}

const currencys = {
    USD: 0,
    EUR: 0,
    PLN: 0
}

export function func(): ICurrencys {
    Promise.all([getData()])
    return currencys
}
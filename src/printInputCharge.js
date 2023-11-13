import PrintUtil from './printUtil.js'
import {app} from './index.js'
import VendingMachineState from './vendingMachineState.js'

const printUtil = new PrintUtil();
const vendingMachineState = new VendingMachineState();
export const chargeContent = printUtil.generateDiv('charge-content');

export default class PrintInputCharge{

    // 자판기 동전 충전 div 생성
    generateInputChargeSection(text){
        return printUtil.generateDiv(text);
    }
    
    // 자판기 동전 충전 header 생성
    generateInputChargeHeader(text){
        return printUtil.generateHeader(text);
    }

    // 자판기 동전 충전 입력 생성
    generateInputCharge(text, id){
        return printUtil.generateInputNumber(text, id);
    }

    // 자판기 동전 충전 버튼 생성
    generateInputChargeButton(text, id){
        return printUtil.generateButton(text, id);
    } 

    // 자판기 보유 금액 div 영역 생성
    generateHaveAmountDiv(id){
        return printUtil.generateDiv(id);
    }

    // 자판기 보유 금액을 위한 영역 요소 생성
    generateHaveAmount(id){
        return printUtil.generateSpan(id);
    }

    // 자판기 동전 충전 요소 생성
    generateInputChargeElements(){
        const inputChargeDiv = this.generateInputChargeSection('input-charge-section');
        const inputChargeHeader = this.generateInputChargeHeader('자판기 동전 충전하기');
        const inputCharge = this.generateInputCharge('충전할 금액 입력', 'vending-machine-charge-input');
        const inputChargeButton = this.generateInputChargeButton('충전하기','vending-machine-charge-button');
        inputChargeDiv.append(inputChargeHeader,inputCharge,inputChargeButton);
        chargeContent.appendChild(inputChargeDiv);
        app.appendChild(chargeContent);
        document.querySelector('#vending-machine-charge-button').addEventListener('click',(event)=>{
            event.preventDefault();
            vendingMachineState.generateInputChargeEvent(document.querySelector('#vending-machine-charge-input').value, '#vending-machine-charge-amount');
        });
    }

    // 자판기 보유 금액 요소 생성
    generateHaveAmountElements(){
        const haveAmountDiv = this.generateHaveAmountDiv('vending-machine-charge-amount-section');
        const haveAmount = this.generateHaveAmount('vending-machine-charge-amount');
        const textNode = document.createTextNode('보유 금액 : ');
        
        haveAmount.appendChild(textNode);

        let chargeAmount = vendingMachineState.getHaveAmount();
        haveAmount.append(chargeAmount === 0 ? '' : chargeAmount);
        haveAmountDiv.appendChild(haveAmount);
        chargeContent.appendChild(haveAmountDiv);
    }
}
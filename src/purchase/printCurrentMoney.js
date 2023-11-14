import PrintUtil from '../util/printUtil.js'
import PurchaseModel from './purchaseModel.js';
import {purchaseContent} from './printInputMoney.js'

const printUtil = new PrintUtil();
const purchaseModel = new PurchaseModel();

export default class PrintCurrentMoney{
    
    // 투입한 금액 출력 영역 생성
    generatePrintCurrentMoneyDiv(id){
        return printUtil.generateDiv(id);
    }

    // 투입한 금액 출력 span 태그 생성
    generatePrintCurrentMoneySpan(id){
        return printUtil.generateSpan(id);
    }

    // span태그와 투입 금액 합병
    generatePrintCurrentMoney(value, id){
        const moneySpan = document.querySelector(id);
        moneySpan.innerHTML = '';
        moneySpan.append(value,'원');
        return moneySpan;
    }

    // 투입 금액 초기 영역 그리기
    generatePrintCurrnetMoneyInit(){
        const currentMoneyDiv = this.generatePrintCurrentMoneyDiv('charge-amount-section');
        const currentMoneySpan = this.generatePrintCurrentMoneySpan('charge-amount');
        currentMoneyDiv.appendChild(currentMoneySpan);
        currentMoneySpan.append('투입한 금액 : ');
        
        // 로컬 스토리지에 저장된 투입 금액 불러오기
        const money = purchaseModel.getInputMoneyOfLocalStorage('inputMoney');
        if(money !== 0){
            currentMoneySpan.append(money, '원');
        }
        return currentMoneyDiv;
    }

    // 투입한 금액 영역 그리기
    generatePrintCurrentMoneySection(value){
        let currentMoneySpan = document.querySelector('#charge-amount');        
        let money = purchaseModel.getInputMoneyOfLocalStorage('inputMoney');
        currentMoneySpan.innerHTML = '';
        money += Number(value);
        currentMoneySpan.append('투입한 금액 : ', money, '원');
        purchaseModel.setInputMoneyToLocalStorage(money);
    }

}
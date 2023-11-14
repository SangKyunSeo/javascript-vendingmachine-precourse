import PrintUtil from '../util/printUtil.js'
import {app} from '../index.js'
import PrintCurrentMoney from './printCurrentMoney.js';
import PurchaseModel from './purchaseModel.js';


const printUtil = new PrintUtil();
const printCurrentMoney = new PrintCurrentMoney();
const purchaseModel = new PurchaseModel();

export const purchaseContent = printUtil.generateDiv('purchase-section');
export default class PrintInputMoney{
    
    // 투입 금액 영역 생성
    generateInputMoneyDiv(name){
        return printUtil.generateDiv(name);
    }
    
    // 투입 금액 제목 생성
    generateInputMoneyTitle(text){
        return printUtil.generateHeader(text);
    }

    // 투입 금액 입력 생성
    generateInputMoneyNumber(text, id){
        return printUtil.generateInputNumber(text, id);
    }
    
    // 투입 금액 버튼 생성
    generateInputMoneyButton(text, id){
        return printUtil.generateButton(text, id);
    }

    // 투입 금액 영역 그리기
    generateInputMoneyElements(){
        const inputMoneyDiv = this.generateInputMoneyDiv('input-money-section');
        inputMoneyDiv.appendChild(this.generateInputMoneyTitle('금액 투입'));
        inputMoneyDiv.appendChild(this.generateInputMoneyNumber('투입할 금액 입력','charge-input'));
        inputMoneyDiv.appendChild(this.generateInputMoneyButton('투입하기','charge-button'));
        purchaseContent.appendChild(inputMoneyDiv);
        purchaseContent.appendChild(printCurrentMoney.generatePrintCurrnetMoneyInit());
        app.appendChild(purchaseContent);
        this.inputMoneyEvent('charge-button');
    }

    // 투입하기 버튼 클릭 이벤트
    inputMoneyEvent(id){
        document.getElementById(id).addEventListener('click',(event)=>{
            event.preventDefault();
            let value = document.querySelector('#charge-input').value === '' ? 0 : document.querySelector('#charge-input').value;
            if(purchaseModel.validateInputMoney(value)){
                document.querySelector('#charge-input').value = '';
                printCurrentMoney.generatePrintCurrentMoneySection(value);
            }else{
                alert('투입할 금액을 입력하세요!');
                return;
            }
        });
    }
}
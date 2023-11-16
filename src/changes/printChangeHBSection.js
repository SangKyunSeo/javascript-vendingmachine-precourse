import PrintUtil from '../util/printUtil.js'
import { purchaseContent } from '../purchase/printInputMoney.js';

const printUtil = new PrintUtil();

export default class PrintChangeHBSection{

    // 잔돈 반환하기 div 영역 생성
    generateChangeDiv(id){
        return printUtil.generateDiv(id);
    }   
    
    // 잔돈 헤더 생성
    generateChangeHeader(text){
        return printUtil.generateHeader(text);
    }
    
    // 반환하기 div영역 생성
    generateChangeButtonDiv(id){
        return printUtil.generateDiv(id);
    }
    
    // 반환하기 버튼 생성
    generateChangeButton(text, name){
        return printUtil.generateButton(text, name);
    }

    // 잔돈 헤더 및 버튼 영역 그리기
    generateChangeHeaderAndButton(){
        const changeBtnDiv = this.generateChangeButtonDiv('coin-return-button-section');
        const changeDiv = printUtil.generateDiv('coin-return-section');
        changeDiv.appendChild(this.generateChangeHeader('잔돈'));
        changeBtnDiv.appendChild(this.generateChangeButton('반환하기', 'coin-return-button'));
        changeDiv.appendChild(changeBtnDiv);
        purchaseContent.appendChild(changeDiv);
    }
}
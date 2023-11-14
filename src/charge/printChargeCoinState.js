import {chargeContent} from './printInputCharge.js'
import PrintUtil from '../util/printUtil.js'
import {coinId} from './vendingMachineState.js'

const printUtil = new PrintUtil();

export default class PrintChargeCoinState{

    // 잔돈 동전 영역 생성
    generateChargeCoinDiv(id){
        return printUtil.generateDiv(id);
    }

    // 동전 보유 현황 헤더 생성
    generateChargeCoinHeader(text){
        return printUtil.generateHeader(text);
    }

    // 잔돈 동전 테이블 영역 생성
    generateChargeCoinTableDiv(id){
        return printUtil.generateDiv(id);
    }

    // 잔돈 동전 테이블 생성
    generateChargeCoinTable(name){
        return printUtil.generateTable(name);
    }

    // 잔돈 동전 테이블 헤더 생성
    generateChargeCoinTableHeader(){
        return printUtil.generateTableHeader();
    } 
    
    // 잔돈 동전 테이블 행 생성
    generatechargeCoinTableRow(){
        return printUtil.generateTr();
    }

    // 잔돈 동전 테이블 제목 생성
    generateChargeCoinTableTh(name, text){
        return printUtil.generateTh(name, text);
    }

    // 잔돈 동전 테이블 body 생성
    generateChargeCoinTableBody(name){
        return printUtil.generateTbody(name);
    }

    // 잔돈 동전 테이블 내용 생성
    generateChargeCoinTableContent(id, key, value){
        let tableTr = this.generatechargeCoinTableRow();
        tableTr.id = id;
        tableTr.appendChild(printUtil.generateTd(key + '원'));
        tableTr.appendChild(printUtil.generateTd(value === ''? '': value + '개'));
        return tableTr;
    }

    // 잔돈 충전 탭 클릭시 보유한 동전 출력
    printCurrentChargeCoin(coinMap){
        let tableDiv = this.generateChargeCoinTableDiv('vending-machine-charge-coin-section');
        let table = this.generateChargeCoinTable('vending-machine-charge-table');
        let tableHead = this.generateChargeCoinTableHeader();
        let tableRow = this.generatechargeCoinTableRow();
        let tableBody = this.generateChargeCoinTableBody('vending-machine-charge-table-content');
        tableDiv.appendChild(table);
        table.appendChild(tableHead);
        tableHead.appendChild(tableRow);
        tableRow.append(this.generateChargeCoinTableTh('coin','동전'), this.generateChargeCoinTableTh('amount', '개수'));
        for(let key of coinMap.keys()){
            tableBody.append(this.generateChargeCoinTableContent(coinId[key], key, coinMap.get(key) === 0 ? '' : coinMap.get(key)));
        }
        table.appendChild(tableBody);
        chargeContent.append(tableDiv)
    }

    // 충전하기 클릭 시 생성된 잔돈 출력
    printReactiveChargeCoin(coinMap){
        document.querySelector('#vending-machine-charge-coin-section').remove();
        this.printCurrentChargeCoin(coinMap);
    }
    
}
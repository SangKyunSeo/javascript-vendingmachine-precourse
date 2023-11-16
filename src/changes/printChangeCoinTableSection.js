import PrintUtil from '../util/printUtil.js'
import { purchaseContent } from '../purchase/printInputMoney.js';

const printUtil = new PrintUtil();
const tableTitle = ['동전', '개수'];

export default class PrintChangeCoinTableSection{
    
    // table div 영역 생성
    generateChangeTableDiv(id){
        return printUtil.generateDiv(id);
    }

    // table 구조 생성
    generateChangeTable(name){
        return printUtil.generateTable(name);
    }

    // table thead 구조 생성
    generateChangeTableHeader(){
        return printUtil.generateTableHeader();
    }

    // table th 생성
    generatechangeTableTh(name, text){
        return printUtil.generateTh(name, text);
    }

    // table tbody 생성
    generateChangeTableTbody(name){
        return printUtil.generateTbody(name);
    }

    // table td 생성
    generateChangeTableTd(value){
        return printUtil.generateTd(value);
    }

    // table th 부분까지 그리기
    generateChangeTableHeaderAndDiv(){
        const tableDiv = this.generateChangeTableDiv('coin-return-table-section');
        const table = this.generateChangeTable('coin-return-table');
        const thead = this.generateChangeTableHeader();
        const row = printUtil.generateTr();
        tableTitle.forEach((e, i) => {
            row.appendChild(this.generateChangeTableTd(e));
        });
        thead.appendChild(row);
        table.appendChild(thead);
        tableDiv.appendChild(table);
        purchaseContent.appendChild(tableDiv);
    }
}
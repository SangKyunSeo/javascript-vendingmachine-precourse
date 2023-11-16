import PrintUtil from '../util/printUtil.js'

const printUtil = new PrintUtil();

export default class PrintChangeCoinTableContent{

    // 잔돈 출력 테이블 tbody 생성
    generateTableTbody(name){
        return printUtil.generateTbody(name);
    }

    // 잔돈 출력 테이블 td 생성
    generateTableContent(value){
        return printUtil.generateTd(value);
    }

    // 잔돈 동전 Td 초기 세팅
    printChangesInit(id, coinKeys){
        const tbody = this.generateTableTbody('coin-return-table-contents');
        coinKeys.forEach((key) => {
            const row = printUtil.generateTr();
            row.appendChild(this.generateTableContent(key + '원'));
            row.appendChild(this.generateTableContent(''));
            tbody.appendChild(row);
        });
        document.querySelector(id).appendChild(tbody);
    }

    // 반환하기 클릭시 투입 금액 0원으로 그리기
    generateInputMoneyChange(spanId){
        let spanElement = document.querySelector(spanId);
        spanElement.innerHTML = '';
        spanElement.append('투입한 금액 : 0원');
    }
}
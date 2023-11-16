import PrintUtil from '../util/printUtil.js'
const printUtil = new PrintUtil();

export default class PrintChangeState{

    // 구매 가능 상품 현황 변동에 의한 테이블 재생성
    generateExecutedBuyProduct(tableId, tbodyId, productList){
        document.querySelector(tbodyId).innerHTML = '';
        document.querySelector(tableId).appendChild(this.generatePossibleBuyProductTableContent(productList));
    }

    // 구매할 수 있는 상품 현황 tbody 생성
    generatePossibleBuyProductTbody(name){
        return printUtil.generateTbody(name);
    }

    // 구매하기 버튼 생성
    generatePossibleBuyProductButton(text, name){
        return printUtil.generateButtonClass(text, name);
    }

    // 구매하기 버튼 비활성화
    generatePossibleBuyProductButtonDisble(text, name){
        let element = printUtil.generateButtonClass(text, name);
        element.disabled = true;
        return element;
    }

    // 구매할 수 있는 상품 테이블 내용 생성
    generatePossibleBuyProductTableContent(productList){
        let tbody = this.generatePossibleBuyProductTbody('product-purchase-item');
        let flag = false;
        if(productList !== null) flag = true;
        if(flag){
            for(let product of productList){
                let row = printUtil.generateTr();
                row.appendChild(printUtil.generateTd(product.name));
                row.appendChild(printUtil.generateTd(product.price));
                row.appendChild(printUtil.generateTd(product.quantity));
                if(product.quantity === 0){
                    row.appendChild(this.generatePossibleBuyProductButtonDisble('구매하기','purchase-button'));
                }else{
                    row.appendChild(this.generatePossibleBuyProductButton('구매하기','purchase-button'));
                }
                tbody.appendChild(row);
            }
        }
        return tbody;
    }

    // 투입 금액 변경
    printChageInputMoney(spanId, value){
        document.querySelector(spanId).innerHTML = '';
        let textNode = '투입한 금액 : ' + value + '원';
        document.querySelector(spanId).append(textNode);
    }

}
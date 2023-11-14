import {purchaseContent} from './printInputMoney.js'
import PrintUtil from '../util/printUtil.js'
import PurchaseModel from './purchaseModel.js';

const printUtil = new PrintUtil();
const purchaseModel = new PurchaseModel();

const title = [
    {name : '상품명', class : 'product-purchase-name'},
    {name : '가격', class : 'product-purchase-price'},
    {name : '수량', class : 'product-purchase-quantity'},
    {name : '구매', class : 'purchase-button'}
]

export default class PrintCurrentProduct{

    // 구매할 수 있는 상품 현황 div 영역 생성
    generatePossibleBuyProductDiv(id){
        return printUtil.generateDiv(id);
    }
    
    // 구매할 수 있는 상품 현화 제목 생성
    generatePossibleBuyProductHeader(text){
        return printUtil.generateHeader(text);
    }

    // 구매할 수 있는 상품 현황 table 생성
    generatePossibleBuyProductTable(name){
        return printUtil.generateTable(name);
    }

    // 구매할 수 있는 상품 현황 thead 생성
    generatePossibleBuyProductThead(){
        return printUtil.generateTableHeader();
    }

    // 구매할 수 있는 상품 현황 th 생성
    generatePossibleBuyProductTh(){
        let row = printUtil.generateTr();
        title.forEach((element, index)=>{
            row.appendChild(printUtil.generateTh(element.class, element.name));
        });
        return row;
    }

    // 구매할 수 있는 상품 현황 tbody 생성
    generatePossibleBuyProductTbody(name){
        return printUtil.generateTbody(name);
    }

    // 구매하기 버튼 생성
    generatePossibleBuyProductButton(text, name){
        return printUtil.generateButtonClass(text, name);
    }

    // 구매할 수 있는 상품 테이블 내용 생성
    generatePossibleBuyProductTableContent(){
        let tbody = this.generatePossibleBuyProductTbody('product-purchase-item');
        for(let product of purchaseModel.getCurrentProductList('productList')){
            let row = printUtil.generateTr();
            row.appendChild(printUtil.generateTd(product.name));
            row.appendChild(printUtil.generateTd(product.price));
            row.appendChild(printUtil.generateTd(product.quantity));
            row.appendChild(this.generatePossibleBuyProductButton('구매하기','product-purchase-item'));
            tbody.appendChild(row);
        }
        return tbody;
    }

    // 상품 구매 탭 클릭 시 상품 현황 그리기
    generatePossibleBuyProduct(){
        const div = this.generatePossibleBuyProductDiv('product-purchase-item-section');
        const header = this.generatePossibleBuyProductHeader('구매할 수 있는 상품 현황');
        const table = this.generatePossibleBuyProductTable('product-purchase-item');
        const thead = this.generatePossibleBuyProductThead();
        const ths = this.generatePossibleBuyProductTh();
        const tds = this.generatePossibleBuyProductTableContent();
        div.appendChild(header);
        div.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(ths);
        table.appendChild(tds);
        purchaseContent.appendChild(div);
        buyClickEvent('.product-purchase-item');
    }

    buyClickEvent(name){
        let buyElements = document.querySelectorAll(name);
        buyElements.forEach((element) => {
            
        })
    }
}
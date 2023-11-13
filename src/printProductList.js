import PrintUtil from './printUtil.js'
import AddProductList from './addProductList.js'

const addProductList = new AddProductList();
const printUtil = new PrintUtil();

export default class printProductList{

    // 상품 현황 section 생성
    generateManageProductStatusSection(){
        const productStatusSection = printUtil.generateDiv('product-status-section');
        productStatusSection.appendChild(printUtil.generateHeader('상품 현황'));
        return productStatusSection;
    }

    // 상품 현황 table 구조 생성
    generateManageProductStatusTable(){
        const productStatusTable = printUtil.generateTable('product-manage-item');
        const productStatusTableHeader = printUtil.generateTableHeader();
        const productStatusTableRow = printUtil.generateTr();
        productStatusTable.appendChild(productStatusTableHeader);
        productStatusTableHeader.appendChild(productStatusTableRow);
        productStatusTableRow.appendChild(printUtil.generateTh('product-manage-name','상품명'));
        productStatusTableRow.appendChild(printUtil.generateTh('product-manage-price','가격'));
        productStatusTableRow.appendChild(printUtil.generateTh('product-manage-quantity','수량'));
        return productStatusTable;
    }

    // 상품 현황 table body 생성
    generateManageProductStatusTableBody(){
        const productStatusTableBody = printUtil.generateTbody('product-manage-table-content');
        return productStatusTableBody;    
    }

    // 상품 현황 table td 생성
    generateManageProductStatusTableContent(value){
        const productStatusTableContent = printUtil.generateTd(value);
        return productStatusTableContent;
    }

    // 로컬스토리지에 저장된 상품 리스트 출력
    generateProductList(productStatusTableBody, productList){
        for(let i in productList){
            productStatusTableBody.appendChild(printUtil.generateTr());
            productStatusTableBody.append(this.generateManageProductStatusTableContent(productList[i].name));
            productStatusTableBody.append(this.generateManageProductStatusTableContent(productList[i].price));
            productStatusTableBody.append(this.generateManageProductStatusTableContent(productList[i].quantity));
        }
    }

    // 상품 추가시 테이블에 추가될 내용 출력
    generateAddedProduct(productStatusTableBody,productList){
        productStatusTableBody.appendChild(printUtil.generateTr());
        productStatusTableBody.append(this.generateManageProductStatusTableContent(productList.name));
        productStatusTableBody.append(this.generateManageProductStatusTableContent(productList.price));
        productStatusTableBody.append(this.generateManageProductStatusTableContent(productList.quantity));
    }

    generateManageProductStruct(){
        const productStatusSection = this.generateManageProductStatusSection();
        const productStatusTable = this.generateManageProductStatusTable();
        productStatusSection.appendChild(productStatusTable);
        if(addProductList.getExistProductList()){
            const productStautsTableBody = this.generateManageProductStatusTableBody();
            productStatusTable.appendChild(productStautsTableBody);
            this.generateProductList(productStautsTableBody, addProductList.getProductList());
        }
        return productStatusSection;
    }

    // 상품 추가시 table 그리기
    generateAddedProductTable(nameId, priceId, quantityId){
        let productList = addProductList.getInputValue(nameId, priceId, quantityId);
        const productStatusTableBody = document.querySelector('.product-manage-table-content');
        this.generateAddedProduct(productStatusTableBody, productList);
    }
    
    


}
import PrintUtil from './printUtil.js'

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

    generateManageProductStruct(){
        const productStatusSection = this.generateManageProductStatusSection();
        const productStatusTable = this.generateManageProductStatusTable();
        productStatusSection.appendChild(productStatusTable);
        return productStatusSection;
    }
}
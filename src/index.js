import PrintManageProduct from './printManageProduct.js'
export const app = document.getElementById('app');
const printManageProduct = new PrintManageProduct();

let textNode = '';

class Common{
    generateSecionTab(){
        const sectionTab = document.createElement('div');
        sectionTab.id = 'tabContent';
        return sectionTab;
    }

    generateManageProductButton(){
        const manageProductBtn = document.createElement('button');
        manageProductBtn.id = 'product-purchase-menu';
        textNode = document.createTextNode('상품 관리');
        manageProductBtn.appendChild(textNode);
        return manageProductBtn;
    }

    generateInsertBalanceButton(){
        const insertBalanceBtn = document.createElement('button');
        insertBalanceBtn.id = 'vending-machine-manage-menu';
        textNode = document.createTextNode('잔돈 충전');
        insertBalanceBtn.appendChild(textNode);
        return insertBalanceBtn;
    }

    generateBuyProductButton(){
        const buyProductButton = document.createElement('button');
        buyProductButton.id = 'product-add-menu';
        textNode = document.createTextNode('상품 구매');
        buyProductButton.appendChild(textNode);
        return buyProductButton;
    }

    generateCommonTab(){
        let commonTab = this.generateSecionTab();
        app.appendChild(commonTab);
        commonTab.appendChild(this.generateManageProductButton());
        commonTab.appendChild(this.generateInsertBalanceButton());
        commonTab.appendChild(this.generateBuyProductButton());
    }
}

const common = new Common();
common.generateCommonTab();
window.onload = () => {
    if(localStorage.getItem('isGenerateManageProductSection') === 'true'){
        localStorage.setItem('isGenerateManageProductSection', false);
    }
}
document.querySelector('#product-purchase-menu').addEventListener('click',()=>{
    printManageProduct.appendManageProduct();
});



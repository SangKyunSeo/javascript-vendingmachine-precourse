import PrintManageProduct from './printManageProduct.js'
import TabState from './tabState.js'
import {manageContent} from './printManageProduct.js'
import {chargeContent} from './printInputCharge.js'
import PrintInputCharge from './printInputCharge.js'
import ViewState from './viewState.js'
import PrintChargeCoinState from './printChargeCoinState.js'
import VendingMachineState from './vendingMachineState.js'

export const app = document.getElementById('app');
const printManageProduct = new PrintManageProduct();
const printInputCharge = new PrintInputCharge();
const viewState = new ViewState();
const printChargeCoinState = new PrintChargeCoinState();
const vendingMachineState = new VendingMachineState();

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
const tabState = new TabState();
common.generateCommonTab();

// 윈도우가 load 될 경우 해당 탭이 눌러져있었던 경우 다시 그리기
window.onload = () => {
    localStorage.setItem('isGenerateManageProductSection', false);
    if(localStorage.getItem('productManageTab') === 'true'){
        printManageProduct.appendManageProduct();
    }else if(localStorage.getItem('chargeMoneyTab') === 'true'){
        printInputCharge.generateInputChargeElements();
        printInputCharge.generateHaveAmountElements();
        printChargeCoinState.printCurrentChargeCoin(vendingMachineState.generateCoinArray());
    }
}

// 상품관리 탭 클릭
document.querySelector('#product-purchase-menu').addEventListener('click',()=>{
    tabState.productManageEvent();
    chargeContent.innerHTML = '';
    if(localStorage.getItem('productManageTab') === 'true'){
        printManageProduct.appendManageProduct();
        viewState.productManageViewState(vendingMachineState.get);
    }
});

// 잔돈 충전 탭 클릭
document.querySelector('#vending-machine-manage-menu').addEventListener('click', ()=>{
    tabState.chargeMoneyEvent();
    manageContent.innerHTML = '';
    if(viewState.getChargeMoneyViewState() === 'false' || viewState.getChargeMoneyViewState() === undefined){
        printInputCharge.generateInputChargeElements();
        printInputCharge.generateHaveAmountElements();
        viewState.chargeMoneyViewState();
        printChargeCoinState.printCurrentChargeCoin(vendingMachineState.generateCoinArray());
    }
});

// 상품 구매 탭 클릭
document.querySelector('#product-add-menu').addEventListener('click', ()=>{
    tabState.purchaseProductEvent();
});


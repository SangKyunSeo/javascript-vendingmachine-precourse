import PrintManageProduct from './manageProduct/printManageProduct.js'
import TabState from './util/tabState.js'
import {manageContent} from './manageProduct/printManageProduct.js'
import {chargeContent} from './charge/printInputCharge.js'
import {purchaseContent} from './purchase/printInputMoney.js'
import PrintInputCharge from './charge/printInputCharge.js'
import ViewState from './util/viewState.js'
import PrintChargeCoinState from './charge/printChargeCoinState.js'
import VendingMachineState from './charge/vendingMachineState.js'
import PrintInputMoney from './purchase/printInputMoney.js'
import PrintCurrentProduct from './purchase/printCurrentProduct.js'
import PurchaseModel from './purchase/purchaseModel.js'
import PrintChangeHBSection from './changes/printChangeHBSection.js'
import PrintChangeCoinTableSection from './changes/printChangeCoinTableSection.js'
import ChangesController from './changes/changesController.js'

export const app = document.getElementById('app');
const printManageProduct = new PrintManageProduct();
const printInputCharge = new PrintInputCharge();
const viewState = new ViewState();
const printChargeCoinState = new PrintChargeCoinState();
const vendingMachineState = new VendingMachineState();
const printInputMoney = new PrintInputMoney();
const printCurrentProduct = new PrintCurrentProduct();
const purchaseModel = new PurchaseModel();
const printChangeHBSection = new PrintChangeHBSection();
const printChangeCoinTableSection = new PrintChangeCoinTableSection();
const changesController = new ChangesController();

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
    }else{
        printInputMoney.generateInputMoneyElements();
        printCurrentProduct.generatePossibleBuyProduct();
        purchaseModel.buyClickEvent('.purchase-button'); 
        printChangeHBSection.generateChangeHeaderAndButton();
        printChangeCoinTableSection.generateChangeTableHeaderAndDiv();
        changesController.changesCoinClickEvent('coin-return-button');
        changesController.printInitCoinsTable('.coin-return-table');
    }
}

// 상품관리 탭 클릭
document.querySelector('#product-purchase-menu').addEventListener('click',()=>{
    tabState.productManageEvent();
    chargeContent.innerHTML = '';
    purchaseContent.innerHTML = '';
    if(localStorage.getItem('productManageTab') === 'true'){
        printManageProduct.appendManageProduct();
        viewState.productManageViewState();
    }
});

// 잔돈 충전 탭 클릭
document.querySelector('#vending-machine-manage-menu').addEventListener('click', ()=>{
    tabState.chargeMoneyEvent();
    manageContent.innerHTML = '';
    purchaseContent.innerHTML = '';
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
    chargeContent.innerHTML = '';
    manageContent.innerHTML = '';
    if(viewState.getPurchaseViewState() === 'false' || viewState.getPurchaseViewState() === undefined){
        printInputMoney.generateInputMoneyElements();
        printCurrentProduct.generatePossibleBuyProduct();
        purchaseModel.buyClickEvent('.purchase-button');
        printChangeHBSection.generateChangeHeaderAndButton();
        printChangeCoinTableSection.generateChangeTableHeaderAndDiv();
        changesController.changesCoinClickEvent('coin-return-button');
        changesController.printInitCoinsTable('.coin-return-table');
        viewState.purchaseViewState();
    }
});


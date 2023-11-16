import PrintUtil from "../util/printUtil.js";
import PrintChangeState from './printChangeState.js'
const printChangeState = new PrintChangeState();

export default class PurchaseModel{

    // 투입하기 버튼 클릭 시 유효성 검사
    validateInputMoney(value){
        if(value === 0){
            return false;
        }
        return true;
    }

    // 투입 금액 추출
    getInputMoney(id){
        let value = document.querySelector(id).value;
        if(value === null || value === '' || value === undefined) return 0;
        return value;
    }

    // 로컬 스토리지에 투입 금액 저장
    setInputMoneyToLocalStorage(value){
        localStorage.setItem('inputMoney', JSON.stringify(value));
    }

    // 로컬 스토리지에 저장된 투입 금액 출력
    getInputMoneyOfLocalStorage(id){
        return Number(JSON.parse(localStorage.getItem(id)));
    }

    // 로컬 스토리지에 저장된 상품 목록 출력
    getCurrentProductList(id){
        return JSON.parse(localStorage.getItem(id));
    }

    // 로컬 스토리지에 상품 목록 수정
    setCurrentProductList(productList){
        localStorage.setItem('productList',JSON.stringify(productList));
    }

    // 구매 버튼 클릭 이벤트 감지
    buyClickEvent(name){
        let buyElements = document.querySelectorAll(name);
        buyElements.forEach((element, index) => {
            element.addEventListener('click', ()=>{
                if(this.checkPossileBuy(this.getCurrentProductList('productList')[index].price, this.getInputMoneyOfLocalStorage('inputMoney'))){
                    this.calProduceQuantity(index);
                    this.calInputMoney(this.getCurrentProductList('productList')[index].price);
                    printChangeState.generateExecutedBuyProduct('.product-purchase-item-table', '.product-purchase-item',this.getCurrentProductList('productList'));
                    printChangeState.printChageInputMoney('#charge-amount', this.getInputMoneyOfLocalStorage('inputMoney'));
                }else{
                    alert('금액이 부족합니다!');
                }
            })
        })
    }

    // 상품 구매 시 구매 가능한지 체크
    checkPossileBuy(price, inputMoney){
        if(inputMoney < price){
            return false;
        }
        return true;
    }

    // 상품 수량 체크
    checkProductQuantity(quantity){
        console.log(`quantity = ${quantity}`);
        if(quantity === 0){
            return false;
        }
        return true;
    }

    // 상품 구매 시 상품의 수량 차감 및 저장
    calProduceQuantity(index){
        let productList = this.getCurrentProductList('productList');
        productList[index].quantity -= 1;
        this.setCurrentProductList(productList);
    }

    // 상품 구매 시 투입 금액 차감 및 저장
    calInputMoney(price){
        let money = this.getInputMoneyOfLocalStorage('inputMoney');
        money -= price;
        this.setInputMoneyToLocalStorage(money);
    }
}
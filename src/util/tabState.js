export default class TabState{

    // 상품 관리 탭을 눌렀을 경우
    productManageEvent(){
        localStorage.setItem("productManageTab", true);
        localStorage.setItem("chargeMoneyTab", false);
        localStorage.setItem("purchaseProductTab", false);
    }

    // 잔돈 충전 탭을 눌렀을 경우
    chargeMoneyEvent(){
        localStorage.setItem("productManageTab", false);
        localStorage.setItem("chargeMoneyTab", true);
        localStorage.setItem("purchaseProductTab", false);
    }    
    
    // 상품 구매 탭을 눌렀을 경우
    purchaseProductEvent(){
        localStorage.setItem("productManageTab", false);
        localStorage.setItem("chargeMoneyTab", false);
        localStorage.setItem("purchaseProductTab", true);
    }
}
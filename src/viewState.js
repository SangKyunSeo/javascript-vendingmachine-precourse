export default class ViewState{

    // 상품관리 탭을 눌렀을 경우 view 상태 처리
    productManageViewState(){
        localStorage.setItem('isGenerateManageProductSection', true);
        localStorage.setItem('isGenerateInputCharge', false);
        localStorage.setItem('isGeneratePurchase', false);
    }

    // 잔돈 충전 탭을 눌렀을 경우 view 상태 처리
    chargeMoneyViewState(){
        localStorage.setItem('isGenerateManageProductSection', false);
        localStorage.setItem('isGenerateInputCharge', true);
        localStorage.setItem('isGeneratePurchase', false);
    }

    // 상품 구매 탭을 눌렀을 경우 view 상태 처리
    purchateViewState(){
        localStorage.setItem('isGenerateManageProductSection', false);
        localStorage.setItem('isGenerateInputCharge', false);
        localStorage.setItem('isGeneratePurchase', true);
    }

    // 상품 관리 상태 반환
    getProductManageViewState(){
        return localStorage.getItem('isGenerateManageProductSection');
    }

    // 잔돈 충전 상태 반환
    getChargeMoneyViewState(){
        return localStorage.getItem('isGenerateInputCharge');
    }

    // 상품 구매 상태 반환
    getPurchaseViewState(){
        return localStorage.getItem('isGeneratePurchase');
    }
}
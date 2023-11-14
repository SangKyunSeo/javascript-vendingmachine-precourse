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

}
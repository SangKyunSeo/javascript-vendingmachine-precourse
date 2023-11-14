export default class addProductList{

    // 상품명 입력 유효성 검사
    validateInputProductName(id){
        if(document.querySelector(id).value === '' || document.querySelector(id).value === null){
            alert('상품명을 입력하세요!');
            return false;
        }
        return true;
    }

    // 가격 입력 유효성 검사
    validateInputProductPrice(id){
        if(document.querySelector(id).value === '' || document.querySelector(id).value === null){
            alert('가격을 입력하세요!');
            return false;
        }
        return true;
    }

    // 수량 입력 유효성 검사
    validateInputProducrQuantity(id){
        if(document.querySelector(id).value === '' || document.querySelector(id).value === null){
            alert('수량을 입력하세요!');
            return false;
        }
        return true;
    }

    // 로컬스토리지에 상품 리스트가 있는지 검사
    getExistProductList(){
        if(this.getProductList() === undefined || this.getProductList() === null){
            return false;
        }
        return true;
    }

    // 로컬스토리지에 저장된 상품 리스트 가져오기
    getProductList(){
        return JSON.parse(localStorage.getItem('productList'));
    }

    // 로컬스토리지에 상품 리스트 저장
    setProductList(productList){
        localStorage.setItem('productList', productList);
    }

    // 입력 값 추출
    getInputValue(nameId, priceId, quantityId){
        return {name : document.querySelector(nameId).value, price : document.querySelector(priceId).value, quantity : document.querySelector(quantityId).value}
    }

    // 상품 추가 하기
    addProduct(nameId, priceId, quantityId){
        if(this.validateInputProductName(nameId) && this.validateInputProductPrice(priceId) && this.validateInputProducrQuantity(quantityId)){
            
            let productList;

            // 상품명, 가격, 수량 productList에 추가
            if(this.getExistProductList()){
                productList = this.getProductList();
                productList.push(this.getInputValue(nameId, priceId, quantityId));
                this.setProductList(JSON.stringify(productList));
            }else{
                productList = [this.getInputValue(nameId, priceId, quantityId)];
                this.setProductList(JSON.stringify(productList));
            }
        }
    }
}

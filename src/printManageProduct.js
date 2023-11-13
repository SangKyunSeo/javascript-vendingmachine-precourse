import {app} from './index.js'
import PrintProductList from './printProductList.js'
import AddProductList from './addProductList.js'
import PrintUtil from './printUtil.js'

const printProductList  = new PrintProductList();
const addProductList = new AddProductList();
const printUtil = new PrintUtil();
export const manageContent = printUtil.generateDiv('manage-content');
export default class PrintManageProduct{

    // 상품 관리에 대한 부분을 감싸는 div 요소 생성
    generateManageProductSecion(){
        const manageProductSection = document.createElement('div');
        manageProductSection.id = 'product-manage-section';
        return manageProductSection;
    }

    // 상품추가 헤더 요소 생성
    generateManageProductHeader(){
        const manageProductHeader = document.createElement('h1');
        const textNode = document.createTextNode('상품 추가하기');
        manageProductHeader.appendChild(textNode);
        return manageProductHeader;
    }

    // 상품 정보 입력 폼 요소 생성
    generateManageProductForm(){
        const manageProductForm = document.createElement('form');
        manageProductForm.id = 'product-input-form';
        return manageProductForm;
    }

    // 상품명 입력 요소 생성
    generateInputProductName(){
        const inputProductName = document.createElement('input');
        inputProductName.id = 'product-name-input';
        inputProductName.placeholder = '상품명';
        return inputProductName;
    }

    // 상품 가격 입력 요소 생성
    generateInputProductPrice(){
        const inputProductPrice = document.createElement('input');
        inputProductPrice.type = 'number';
        inputProductPrice.id = 'product-price-input';
        inputProductPrice.placeholder = '가격';
        return inputProductPrice;
    }

    // 상품 수량 입력 요소 생성
    generateInputProductAmount(){
        const inputProductQuantity = document.createElement('input');
        inputProductQuantity.type = 'number';
        inputProductQuantity.id = 'product-quantity-input';
        inputProductQuantity.placeholder = '수량';
        return inputProductQuantity;
    }

    // 추가하기 버튼 요소 생성
    generateSubmitProductAddButton(){
        const submitProductAddButton = document.createElement('button');
        const textNode = document.createTextNode('추가하기');
        submitProductAddButton.appendChild(textNode);
        submitProductAddButton.id = 'product-add-button';
        return submitProductAddButton;
    }
    
    // 상품 추가 기능 요소 생성시 그 상태 로컬스토리지에 저장
    saveLocalStorageOfManageProductState(){
        localStorage.setItem('isGenerateManageProductSection', true);
    }

    // 이미 상품 추가 기능 요소가 생성되었는지 체크
    checkGeneratedManageProduct(){
        if(localStorage.getItem('isGenerateManageProductSection') === 'true') return true;
        return false;
    }

    // 상품 관리 탭 클릭 시 상품 추가 기능 요소를 감싸는 요소 생성
    appendManageProductSection(){
        let manageProductSection = this.generateManageProductSecion();
        let manageProductForm = this.generateManageProductForm();
        let manageProductHeader = this.generateManageProductHeader();

        app.appendChild(manageContent);
        manageContent.appendChild(manageProductSection);
        manageProductSection.appendChild(manageProductHeader);
        manageProductSection.appendChild(manageProductForm);
        this.saveLocalStorageOfManageProductState();
        return manageProductForm;
    }

    // 상품 관리 탭 클릭 시 상품 추가 기능 요소 생성
    appendManageProduct(){
        if(!this.checkGeneratedManageProduct()){
            let manageProductForm = this.appendManageProductSection();
            let printProductListSection = printProductList.generateManageProductStruct();
            manageProductForm.appendChild(this.generateInputProductName());
            manageProductForm.appendChild(this.generateInputProductPrice());
            manageProductForm.appendChild(this.generateInputProductAmount());
            manageProductForm.appendChild(this.generateSubmitProductAddButton());
            document.querySelector('#product-add-button').addEventListener('click',(event)=>{
                event.preventDefault();
                addProductList.addProduct('#product-name-input', '#product-price-input', '#product-quantity-input');
                printProductList.generateAddedProductTable('#product-name-input', '#product-price-input', '#product-quantity-input');
            });
            manageContent.appendChild(printProductListSection);
        }
    }
}








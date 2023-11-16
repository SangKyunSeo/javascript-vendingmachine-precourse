import ChangesModel from './changesModel.js'
import PrintChangeCoinTableContent from './printChangeCoinTableContent.js';
import PrintCurrentMoney from '../purchase/printCurrentMoney.js'
import PrintUtil from '../util/printUtil.js'

const changesModel = new ChangesModel();
const printChangeCoinTableContent = new PrintChangeCoinTableContent();
const printUtil = new PrintUtil();
const coinKeys = ['500', '100', '50', '10'];
const printCurrentMoney = new PrintCurrentMoney();

export default class ChangesController{

    // 탭 클릭시 잔돈 기본 구조 출력
    printInitCoinsTable(id){
        printChangeCoinTableContent.printChangesInit(id, coinKeys);
    }

    // 반환하기 버튼 클릭 이벤트 감지
    changesCoinClickEvent(id){
        const buttonElement = document.getElementById(id);
        buttonElement.addEventListener('click',() => {
            let inputMoney = changesModel.getInputMoney('inputMoney');
            if(this.validInputMoney(inputMoney)){
                console.log(inputMoney);
                let changeMap = this.calChanges(inputMoney);
                this.printChanges(changeMap, '.coin-return-table');
                printChangeCoinTableContent.generateInputMoneyChange('#charge-amount');
            }
        });
    }

    // 투입한 금액 유효성 검사
    validInputMoney(inputMoney){
        if(inputMoney === 0){
            alert('반환할 금액이 없습니다.');
            return false;
        }
        return true;
    }

    // 남은 투입한 금액으로 잔돈 계산
    calChanges(inputMoney){
        let chargeCoin = changesModel.getChangesCoin('chargeCoins');
        let keyArr = changesModel.setChangesCoinArr(chargeCoin);
        let changeMap = changesModel.calChangesCoin(inputMoney, keyArr, chargeCoin);
        let chargeAmount = changesModel.getChargeAmount('chargeAmount');
        changesModel.setChargeCoinsAfterChange(changeMap, chargeCoin);
        changesModel.clearInputMoney('inputMoney');
        changesModel.setChargeAmount(inputMoney,chargeAmount);
        return changeMap;
    }

    // 잔돈 반환 동전 그리기
    printChanges(changeMap, id){
        const tbody = document.querySelector('.coin-return-table-contents');
        tbody.innerHTML = '';
        coinKeys.forEach((key) => {
            const row = printUtil.generateTr();
            row.appendChild(printChangeCoinTableContent.generateTableContent(key + '원'));
            row.appendChild(printChangeCoinTableContent.generateTableContent(changeMap.get(key) + '개'));
            tbody.appendChild(row);
        });
        document.querySelector(id).appendChild(tbody);
    }

    
}
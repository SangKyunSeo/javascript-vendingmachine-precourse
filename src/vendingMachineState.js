export default class VendingMachineState{

    // 자판기 보유 금액 출력
    getHaveAmount(){
        if(localStorage.getItem('chargeAmount') === undefined || localStorage.getItem('chargeAmount') === null) return 0;
        return localStorage.getItem('chargeAmount');
    }

    // 자판기 보유 동전 출력
    getHaveCoin(){
        if(localStorage.getItem('chargeCoins') === undefined || localStorage.getItem('chargeCoins') === null) return 0;
        return new Map(Object.entries(JSON.parse(localStorage.getItem('chargeCoins'))));
    }

    // 자판기에 동전 합산
    addCoin(mapValue){
        let hadCoin = this.getHaveCoin();
        if(hadCoin === 0){
            // 자판기에 동전이 없을 경우
            localStorage.setItem('chargeCoins',JSON.stringify(Object.fromEntries(mapValue)));
        }else{
            // 자판기에 동전이 있을 경우
            for(let i of mapValue.keys()){
                hadCoin.set(i, (hadCoin.get(i) === undefined ? 0 : Number(hadCoin.get(i))) + (mapValue.get(i) === undefined ? 0 : Number(mapValue.get(i))));
            }
            localStorage.setItem('chargeCoins',JSON.stringify(Object.fromEntries(hadCoin)));
        }
    }

    // 자판기에 잔돈 충전 시 합산
    addChargeAmount(value){
        localStorage.setItem('chargeAmount',Number(this.getHaveAmount()) + Number(value));
    }

    // 잔돈 충전 입력 값 추출
    getInputCharge(id){
        return document.querySelector(id).value;
    }

    // 잔돈 충전 입력 유효성 검사
    validateInputCharge(value){
        if(value === '' || value === undefined || value === null){
            alert('충전할 금액을 입력하세요!');
            return false;
        }
        return true;
    }

    // 잔돈 충전 입력 시 잔돈 무작위 생성
    generateRandomCoin(value){
        let remain = value;
        let remainMap = new Map();

        while(remain !== 0){
            const randomNumber = MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
            if(remain - randomNumber < 0) continue;
            else{
                remain -= randomNumber;
                remainMap.set(randomNumber, (remainMap.get(randomNumber) === undefined ? 0 : Number(remainMap.get(randomNumber))) + 1);
            }
        }

        return remainMap;
    }

    // 충전하기 클릭시 이벤트 발생
    generateInputChargeEvent(value, id){
        
        if(this.validateInputCharge(Number(value))){
            const remains = this.generateRandomCoin(Number(value));
            console.log(remains);
            this.addCoin(remains);
            this.addChargeAmount(value);

            // 화면에 보유 금액 및 잔돈 그리기
            document.querySelector(id).innerHTML = '';
            document.querySelector(id).append('보유금액 :' , this.getHaveAmount());
        }
    }
}
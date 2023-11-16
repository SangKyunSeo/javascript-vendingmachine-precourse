export default class changesModel{

    // 로컬 스토리지에서 동전 map 객체 반환
    getChangesCoin(id){
        if(localStorage.getItem(id) === undefined || localStorage.getItem(id) === null) return 0;
        return new Map(Object.entries(JSON.parse(localStorage.getItem(id))));
    }
    
    // 로컬 스토리지에서 투입한 금액 반환
    getInputMoney(id){
        return localStorage.getItem(id) === null ? 0 : Number(localStorage.getItem(id));
    }

    // 동전 Map객체 key값 배열화 및 내림차순 정렬
    setChangesCoinArr(mapValue){
        let keyArr = [];
        for(let key of mapValue.keys()){
            keyArr.push(key);
        }
        return keyArr.reverse();
    }

    // 구매 후 남은 금액 잔돈 계산
    calChangesCoin(inputMoney, keyArr, mapValue){
        let changeMap = new Map();
        keyArr.forEach((key, index) => {
            if(inputMoney < Number(key)){
                changeMap.set(key, 0);
            }else{
                if(Number(mapValue.get(key)) === 0) changeMap.set(key, 0);
                else{
                    let q = inputMoney / Number(key);
                    console.log('q : ' + q);
                    
                    if(q > Number(mapValue.get(key))){
                        changeMap.set(key, Number(mapValue.get(key)));
                        inputMoney -= Number(key) * Number(mapValue.get(key));
                    }else{
                        changeMap.set(key, q);
                        inputMoney %= Number(key);
                    }
                }
            }
        });

        return changeMap;
    }

    // 투입한 금액 0원 설정
    clearInputMoney(id){
        localStorage.setItem(id, 0);
    }

    // 로컬 스토리지에 잔돈 출력후 동전 map 객체 수정
    setChargeCoinsAfterChange(changeMap, chargeCoins){
        console.log(changeMap);
        console.log(chargeCoins);
        for(let key of changeMap.keys()){
            chargeCoins.set(key, Number(chargeCoins.get(key)) - Number(changeMap.get(key)));
        }
        console.log(chargeCoins);
        localStorage.setItem('chargeCoins', JSON.stringify(Object.fromEntries(chargeCoins)));
    }

    // 로컬스토리지 chargeAmount 반환
    getChargeAmount(id){
        return Number(localStorage.getItem(id));
    }
    
    // 잔돈 계산 후 chargeAmount 수정
    setChargeAmount(inputMoney, chargeAmount){
        let value = chargeAmount - inputMoney;
        localStorage.setItem('chargeAmount', value);
    }
}
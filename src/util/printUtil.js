export default class PrintUtil{
    
    // div 요소 생성
    generateDiv(name){
        const divElement = document.createElement('div');
        divElement.id = name;
        return divElement;
    }

    // header 요소 생성
    generateHeader(text){
        const headerElement = document.createElement('h1');
        const textNode = document.createTextNode(text);
        headerElement.appendChild(textNode);
        return headerElement;
    }

    // input text 요소 생성
    generateInputText(text, id){
        const inputElement = document.createElement('input');
        inputElement.placeholder = text;
        inputElement.id = id;
        return inputElement;
    }

    // input number 요소 생성
    generateInputNumber(text, id){
        const inputElement = document.createElement('input');
        inputElement.placeholder = text;
        inputElement.id = id;
        inputElement.type = 'number';
        return inputElement;
    }

    // button 요소 생성
    generateButton(text, id){
        const buttonElement = document.createElement('button');
        const textNode = document.createTextNode(text);
        buttonElement.appendChild(textNode);
        buttonElement.id = id;
        return buttonElement;
    }

    // button 클래스 요소 생성
    generateButtonClass(text, name){
        const buttonElement = document.createElement('button');
        const textNode = document.createTextNode(text);
        buttonElement.appendChild(textNode);
        buttonElement.className = name;
        return buttonElement;
    }

    // span 요소 생성
    generateSpan(id){
        const spanElement = document.createElement('span');
        spanElement.id = id;
        return spanElement;
    }

    // table 요소 생성
    generateTable(name){
        const tableElement = document.createElement('table');
        tableElement.className = name;
        tableElement.style.border = '1px solid';
        return tableElement;
    }

    // thead 요소 생성
    generateTableHeader(){
        const tableHeaderElement = document.createElement('thead');
        return tableHeaderElement;
    }

    // table tr 요소 생성
    generateTr(){
        return document.createElement('tr');
    }

    // table th 요소 생성
    generateTh(name, text){
        const tableTh = document.createElement('th');
        const textNode = document.createTextNode(text);
        tableTh.appendChild(textNode);
        tableTh.className = name;
        tableTh.style.border = '1px solid';
        return tableTh;
    }

    // table tbody 요소 생성
    generateTbody(name){
        const tableBody = document.createElement('tbody');
        tableBody.className = name;
        return tableBody;
    }
    
    // table td 요소 생성
    generateTd(value){
        const tableTd = document.createElement('td');
        const textNode = document.createTextNode(value);
        tableTd.appendChild(textNode);
        tableTd.style.border = '1px solid';
        return tableTd;
    }


}
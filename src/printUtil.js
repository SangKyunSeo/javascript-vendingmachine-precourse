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

    // table 요소 생성
    generateTable(name){
        const tableElement = document.createElement('table');
        tableElement.className = name;
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
        return tableTh;
    }


}
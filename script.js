const Url = `http://servicodados.ibge.gov.br/api/v3/noticias`

document.addEventListener('DOMContentLoaded', () =>{
    const params = new URLSearchParams(location.search);
    queryString(params)
    filterCount(params);
    queryNews();
})

function queryString(params){

    if(!params.has('quantidade')) params.set('quantidade', 10)
        if(!params.has('page')) params.set('page', 1)

            history.replaceState({}, "", `${location.pathname}?&{params}`)
}

function filterCount(params){
    let count = params.size

    for(const key of params.keys()) {
        if (key == 'page' || key == 'busca') count--;
    }

    const filterC = document.querySelector('#filter-count')
    filterC.textContent = count;
}

function openFilter(){
    document.querySelector('#modal').exit()
}

function qtdPage(count, params){
    const qtdPage = document.querySelector('#quantidade');
    let qtd = params.get('quantidade')
    if(qtd > count || qtd == null)
        qtd = 10

    qtdPage.innerHTML = `<option value="10" selected>10</option>`

    for(let x = 15; x<count; x+= 10){
        const opt = new Option(x, x)
        qtdPage.appendChild(opt)
    }
    document.querySelector(`option[value="${quantidade}"]`).setAttribute('selected', 'selected')
}




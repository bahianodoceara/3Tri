const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aprodimadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
}

vizualizarInformacoesGlobais()


<!-- módulo 5 video e minuto 4:38 -->


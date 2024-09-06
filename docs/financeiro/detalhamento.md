# Painel de Detalhamento

<p><div align="center">
  <img src="../../assets/flux_detail_page1.png" alt="Detalhamento">
  <h6>Imagem 1: Painel de Detalhamento</h6>
</div></p>

O Painel de Detalhamento tem uma função diferente das outras áreas do BI Financeiro. Isso ocorre porque ele contém uma tabela detalhada que os usuários podem acessar "drill-through" em pontos de dados específicos de qualquer outra página do relatório. A função usada para fazer isso é chamada de "Drill-through" e pode ser executada clicando com o botão direito em um visual e selecionando Drill-through no menu que aparece, isso estenderá o menu que mostra "Detalhamento". Uma vez clicado, o Painel de Detalhamento será aberto e será filtrado automaticamente pelo ponto de dados em que você clicou com o botão direito. Abaixo está um exemplo de clique com o botão direito na barra para 01) Em Atraso no visual Aging - Contas a Pagar;

<p><div align="center">
  <img src="../../assets/flux_detail_drillthrough.png" alt="Drillthrough">
  <h6>Imagem 2: Drill-through</h6>
</div></p>

Por padrão, este painel fica oculto, tornando-se visível apenas quando um drillthrough é iniciado. Uma vez na página de drillthrough, os usuários encontrarão uma tabela abrangente exibindo todos os campos e dados relevantes vinculados ao item específico em que eles fizeram drill, oferecendo uma visão mais granular desses dados.

Além disso, quando terminar de revisar os detalhes, os usuários podem clicar no botão de retorno na barra de menu (que só aparece depois que um drillthrough é executado) para voltar à página de onde vieram. Essa configuração permite uma exploração mais profunda dos dados sem perder o contexto original.

## Fluxo Financeiro Conta

<p><div align="center">
  <img src="../../assets/flux_flux_tabela.png" alt="Flux Tabela">
  <h6>Imagem 2: Fluxo Financeiro Conta</h6>
</div></p>

Na matriz Fluxo Financeiro Conta, há uma visão detalhada dos movimentos financeiros ao longo do tempo. As linhas na matriz têm uma hierarquia começando com os nomes das contas e duas subcategorias retiradas de um modelo que é projetado em seu banco de dados. Na imagem acima, você pode ver as principais categorias como Saldo Inicial, Entradas, Saídas, Previsto, Transferências e Sem Classificação.

Ao expandir ainda mais para baixo na hierarquia das linhas da matriz, você também poderá visualizar os valores para áreas como Projeto e Cliente. Nossa intenção é que o usuário possa expandir cada categoria para investigar mais profundamente, isso pode ser feito usando os ícones de cabeçalho ou usando os sinais "+" ao lado dos cabeçalhos de linha.

Os valores em cada linha são organizados em colunas por ano e mês. Ícones ao lado dos valores indicam se o desempenho é melhor (verde) ou pior (vermelho) em relação ao mês anterior. Isso facilita a visualização da progressão de cada categoria ao longo do tempo e ajuda a identificar rapidamente quaisquer problemas.

Existe um [filtro]() para transações previstas e realizadas nesta página que você não vê em outras páginas, quando este não tem seleção o visual mostrará o valor de todas as transações, se selecionado, o visual mostrará as transações relacionadas.
<p><img src="../../assets/flux_flux_prev.png" alt="Prev" style="vertical-align: middle; height: 50px;"></p>


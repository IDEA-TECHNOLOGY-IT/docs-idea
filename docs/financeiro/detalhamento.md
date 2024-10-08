# Painel de Detalhamento

<p><div align="center">
  <img src="../../assets/flux/flux_detail_page1.png" alt="Detalhamento">
  <h6>Imagem 1: Painel de Detalhamento</h6>
</div></p>

## Informações no Painel de Detalhamento

### Detalhes

Após envolver a ação **[Drill-through](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#drill-through)** com um elemento visual nos painéis — como selecionar um ponto de dados específico em um gráfico ou uma célula específica em uma tabela — o Painel de Detalhamento aparece, exibindo dados na forma de uma tabela que já está filtrada de acordo com a seleção feita. Esse mecanismo de filtragem é crucial, pois permite que os usuários conduzam um exame detalhado e focado dos dados pertinentes à sua seleção, fornecendo uma compreensão mais profunda e contextual das informações. Por exemplo, se um usuário selecionar um cliente ou fatura específica, o painel de detalhes mostrará automaticamente informações diretamente relacionadas a essa seleção, como detalhes da fatura, informações do cliente e datas relevantes, garantindo que a análise seja precisa e relevante.

<p><div align="center">
  <img src="../../assets/flux/flux_detail_filters.png" alt="Detalhes Filters">
  <h6>Imagem 2: Filtros de Drill-through</h6>
</div></p>

A tabela em si contém todas as informações principais encontradas em todo o relatório. Embora cada painel tenha sua própria tabela, a tabela de detalhes no painel oferece uma visão combinada dos dados, por exemplo, pode mostrar as transações A Receber e A Pagar ao mesmo tempo. Isso pode ser útil ao analisar casos ou documentos específicos, pois permite uma perspectiva mais ampla sobre os movimentos relevantes.

Além dos filtros automáticos aplicados a partir da ação drill-through, os usuários têm a flexibilidade de usar [filtros](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#filtros) adicionais disponíveis neste painel. Esses filtros extras oferecem mais personalização e refinamento dos dados, permitindo que os usuários aprimorem suas análises adicionando mais contexto ou focando em aspectos específicos dos dados. Esse recurso é particularmente útil para explorar variações ou anomalias no conjunto de dados e para conduzir investigações mais granulares.

O Painel de Detalhamento também inclui um [botão](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#botao-voltar) de retorno dedicado localizado na barra de menu, que é exclusivo para este painel.
<p><img src="../../assets/flux/flux_menu_return.png" alt="Expand" style="vertical-align: middle; width: 60px; height: 50px;"></p>
Este botão permite que os usuários retornem perfeitamente ao painel original do qual o drill-through foi iniciado. Essa funcionalidade é essencial para manter a continuidade da análise, pois permite que os usuários alternem entre a visualização detalhada e o contexto mais amplo do painel original sem perder o controle de seu caminho de exploração.

No geral, a ação drill-through, combinada com a capacidade de aplicar filtros adicionais e navegar de volta ao painel de origem, aprimora os recursos analíticos da ferramenta. Ele fornece uma maneira abrangente e intuitiva de explorar dados, entender o desempenho com mais profundidade, investigar problemas específicos e tomar decisões bem informadas com base em um exame detalhado das informações.

## Visão Principal

### Tabela de Detalhes

<p><div align="center">
  <img src="../../assets/flux/flux_detail_table.png" alt="Detalhes Tabela">
  <h6>Imagem 3: Tabela de Detalhes</h6>
</div></p>

Este gráfico exibe uma tabela detalhada de transações, organizada por data do documento, fornecendo uma visão completa das transações em ordem cronológica. A tabela inclui várias colunas que fornecem informações cruciais sobre cada transação, do cliente ao status atual e documentos relacionados. Esta visão tabular permite que a empresa visualize cada valor de transação em detalhes, fornecendo todas as informações necessárias para rastrear e gerenciar efetivamente as áreas com base na seleção por meio da função [drill-through](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#drill-through).

Com esta estrutura, a empresa pode escolher a área que deseja analisar em qualquer lugar dentro do BI Finanaceiro e acessar instantaneamente os aspectos relevantes. Abaixo, explicamos como interpretar cada coluna na tabela.

#### Cliente
Esta coluna identifica o cliente específico que tem um valor a pagar, permitindo que você veja claramente quem são os devedores.
#### Origem
A origem da fatura, como "Encargos Comuns" ou "Aluguel de Imóveis", é indicada nesta coluna. Isso ajuda a entender a natureza da dívida e a sua fonte dentro das operações da empresa.
#### Nº LCM
Esta coluna mostram o número do lançamento contábil relacionado à fatura. Elas são úteis para rastrear documentos específicos e reconciliar com registros contábeis.
#### Doc.
O número do documento associado à fatura encontra-se aqui. Este é o número mais comumente usado ao pesquisar a transação no banco de dados.
#### Data de Criação
Indica quando a fatura foi criada. Essa informação é importante para entender o histórico da transação e verificar quanto tempo se passou desde a emissão da fatura.
#### Data de Venc.
Esta coluna mostra a data de vencimento da fatura. Comparar esta data com a data atual ajuda a identificar faturas que estão próximas de vencer ou já estão atrasadas.
#### Valor Entradas
Exibe o valor de entradas em cada transação. Esta coluna permite uma visão clara dos montantes recebidos.
#### Valor Saídas
Exibe o valor de saídas em cada transação. Esta coluna permite uma visão clara dos montantes pagos.
#### Valor Total
Apresenta o valor das entradas menos saídas. Esta coluna fornece uma visão clara do valor total ao analisar entradas e saídas.
#### Empresa/Filial
Indica a filial da empresa responsável pela fatura. Isso é útil para entender a distribuição geográfica dos recebíveis.
#### Projeto
Relaciona cada fatura a um projeto específico. Esta informação é essencial para empresas que gerenciam múltiplos projetos e precisam monitorar os fluxos de caixa associados a cada um deles.
#### Status
O status da fatura que é "Previsto" ou "Realizado" é mostrado aqui. Este status é para mostrar que o pagamento está pendente ou concluído.
#### Dias em Atraso
Para mostrar o tempo que a transação está atrasada.
#### Processo
Indica o processo associado ao recebimento, como "Recebimento" ou "Carteira de Recebíveis". Essa coluna auxilia na compreensão do fluxo de trabalho relacionado à fatura.
#### Pesquisa de Documentos
Esta coluna contém informações relacionadas à pesquisa de documentos que podem fornecer detalhes adicionais sobre a fatura ou transação. Isso é útil para obter informações mais detalhadas ou resolver dúvidas sobre um determinado recebível.
#### Dimensão/Centro de Custo
Esta coluna exibe o nome da dimensão que é relevante para a transação. Embora você possa filtrar por dimensão usando o filtro [Dimensão/Centro de Custo](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#dimensaocentro-de-custo), isso facilita a análise ao fornecer uma referência direta aos nomes das dimensões, organizando os dados de uma forma intuitiva para identificar e entender as diferentes áreas de análise.


<br><br>
***Aviso Legal:** Os números e informações apresentados nesta documentação são baseados em um conjunto de dados fictício. Eles são destinados exclusivamente para fins educacionais e de demonstração. Os dados não refletem condições do mundo real ou métricas de negócios reais e não devem ser usados ​​para tomada de decisão ou análise. Qualquer semelhança com entidades, eventos ou dados reais é mera coincidência.*

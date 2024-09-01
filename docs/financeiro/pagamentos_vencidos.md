# Painel Pagamentos Vencidos

<p><div align="center">
  <img src="../../assets/flux_venc_page1.png" alt="Vencido1">
  <h6>Imagem 1: Painel Pagamentos Vencidos - Visão Gráfico</h6>
</div></p>

<p><div align="center">
  <img src="../../assets/flux_venc_page2.png" alt="Vencido2">
  <h6>Imagem 2: Painel Pagamentos Vencidos - Visão de Tabela</h6>
</div></p>

## O que são Pagamentos Vencidos?

Pagamentos vencidos são obrigações financeiras que ultrapassaram a data de vencimento estabelecida para o pagamento. Isso indica que a empresa ou o indivíduo não efetuou o pagamento no prazo acordado com o fornecedor, credor ou qualquer outra parte envolvida.

No BI, esses pagamentos podem ser monitorados para garantir que a empresa esteja ciente das dívidas em atraso e possa tomar as medidas necessárias para regularizá-las.

## Características dos Pagamentos Vencidos:

- **Multas e Juros:** Pagamentos vencidos podem gerar multas, juros e outras penalidades, conforme os termos contratuais acordados.
- **Impacto no Crédito**: O não pagamento pontual pode afetar a credibilidade e a classificação de crédito de empresas e indivíduos, dificultando futuras negociações ou a obtenção de crédito.
- **Relações com Fornecedores**: Dívidas em atraso podem prejudicar relações com fornecedores, resultando em restrições de crédito, interrupção de serviços ou fornecimento de produtos.
- **Impacto no Fluxo de Caixa**: A acumulação de pagamentos vencidos pode criar problemas de fluxo de caixa, afetando a capacidade da empresa de cumprir outras obrigações financeiras.
- **Monitoramento e Gestão**: É crucial que as empresas monitorem de perto os pagamentos vencidos para evitar consequências financeiras e operacionais graves.

Em resumo, pagamentos vencidos indicam que a empresa não está cumprindo com suas obrigações financeiras de forma adequada, o que pode ter várias consequências negativas. Muitas vezes, isso ocorre porque o gestor não possui uma ferramenta eficaz para monitorar esses pagamentos. O BI Financeiro, com seus gráficos, auxilia o gestor na identificação de pagamentos vencidos e na tomada de decisões apropriadas.

## Aging - Pagamentos Vencidos

<p><div align="center">
  <img src="../../assets/flux_venc_aging.png" alt="Vencido Aging">
  <h6>Imagem 3: Aging - Pagamentos Vencidos</h6>
</div></p>

O gráfico de barras divide os Pagamentos Vencidos em 5 categorias, a primeira das quais é o valor vencido em mais de 120 dias, diminuindo em intervalos de 30 dias e terminando com qualquer coisa vencida em até 30 dias. Ele também tem um rótulo de detalhes mostrando a porcentagem do total de Pagamentos Vencidos que se enquadra em cada categoria.

Este visual fornece uma ótima visão geral do que está vencido (que foi mostrado no gráfico [Aging - Contas a Pagar](https://idea-technology-it.github.io/docs-idea/financeiro/contas_a_pagar/#aging-contas-a-pagar)). Facilitando a identificação das áreas de preocupação mais críticas. Ao categorizar os valores vencidos nesses intervalos de tempo, o gráfico permite que a gerência avalie rapidamente quais segmentos de seus recebíveis estão em maior risco de se tornarem incobráveis. Os rótulos de detalhes mostrando a porcentagem do total de valores vencidos em cada categoria fornecem mais insights sobre a distribuição de risco.

Por exemplo, uma grande porcentagem do total de pagamentos vencidos na categoria "mais de 120 dias" indicaria um problema de pagamento significativo que precisa de atenção imediata, enquanto uma concentração maior na categoria "até 30 dias" pode sugerir atrasos recentes mais administráveis. Essa repartição não apenas ajuda a priorizar os esforços de pagamento, mas também oferece suporte à tomada de decisões estratégicas sobre políticas de crédito, gerenciamento de relacionamento com o cliente e possíveis ajustes nos termos de pagamento.

No geral, o visual destaca efetivamente onde mais atenção é necessária e permite ações mais direcionadas para melhorar o fluxo de caixa e reduzir o risco financeiro associado a contas a pagar vencidas.

Sem usar nenhum filtro, o gráfico representa o valor total em atraso, mas usando os filtros de agência ou projeto, é possível gerenciar áreas específicas dentro do negócio também.

Embora pequeno, este gráfico tem muitas funções, especialmente quando acoplado ao gráfico [Aging - Inadimplência](https://idea-technology-it.github.io/docs-idea/financeiro/inadimplencia/#aging-inadimplencia), permitindo ações como;

- Identificar contas problemáticas e priorizar intervenções para lidar com os pagamentos em atraso mais significativos, reduzindo o impacto geral da inadimplência no negócio,
- Melhorar as estratégias de pagamento concentrando esforços nas categorias de maior risco, aumentando assim a probabilidade de pagar valores em atraso e melhorando o fluxo de caixa,
- Aumentar a credibilidade da empresa com base em seu comportamento de pagamento, permitindo o ajuste dos termos de crédito para mitigar riscos futuros associados a pagamentos atrasados,
- Melhorar a previsão e o planejamento financeiro analisando tendências de inadimplência e pagamentos em atraso, ajudando a antecipar melhor os desafios do fluxo de caixa e alocar recursos de forma eficaz,
- Reduzir o risco financeiro gerenciando a inadimplência proativamente, o que pode levar a relacionamentos mais fortes com os clientes e potencialmente encorajar pagamentos mais pontuais no futuro, reduzindo assim a incidência de dívidas incobráveis.

## Valor de Pagamentos Vencidos por Favorecido, Origem, Filial ou Projeto

<p><div align="center">
  <img src="../../assets/flux_venc_fav.png" alt="Vencido Fav">
  <h6>Imagem 4: Valor de Pagamentos Vencidos por Favorecido, Origem, Filial ou Projeto</h6>
</div></p>

Um gráfico de barras que divide os pagamentos vencidos por favorecido, origem, filial ou projeto também oferece vantagens significativas para a gestão e análise da saúde financeira da sua empresa. Esse gráfico fornece uma visão clara e rápida de quais favorecidos, origens, filiais ou projetos têm os maiores montantes em atraso, permitindo que a gestão identifique facilmente onde estão as principais obrigações financeiras pendentes. Essa visualização facilita a priorização dos pagamentos, garantindo que as obrigações mais críticas sejam atendidas primeiro, o que é essencial para evitar agravamento da inadimplência e manter boas relações com os favorecidos.

Além disso, o gráfico ajuda a identificar concentrações de risco, como grandes montantes devidos a um único favorecido ou em uma conta específica, o que pode indicar uma dependência excessiva de certos fornecedores ou setores e um potencial risco financeiro. Ao entender essa concentração, a empresa pode ajustar seu planejamento financeiro, como negociar prazos de pagamento mais favoráveis ou reestruturar seus compromissos para mitigar riscos. O gráfico também auxilia no monitoramento do desempenho financeiro das diferentes filiais e projetos envolvidos, fornecendo insights sobre onde os maiores atrasos nos pagamentos estão ocorrendo e permitindo uma gestão mais eficaz dos recursos.

Assim como na inadimplência, o gráfico de pagamentos vencidos pode ser uma ferramenta estratégica para negociações com fornecedores. Ao ter uma visão clara dos montantes em atraso, a empresa pode negociar melhores condições de pagamento, como prazos mais longos ou parcelamentos, visando alinhar os pagamentos ao fluxo de caixa disponível. Isso não apenas ajuda a evitar penalidades por atrasos, mas também fortalece as relações comerciais ao demonstrar uma abordagem responsável e transparente. Em última análise, ao destacar onde os passivos vencidos estão concentrados, o gráfico informa decisões estratégicas, como a alocação de recursos para pagamentos e a necessidade de renegociar contratos. Esse gráfico de barras, portanto, é uma ferramenta essencial para otimizar o fluxo de caixa, mitigar riscos financeiros e melhorar a gestão financeira global do negócio.

Para navegar entre os níveis, você pode usar os [ícones de cabeçalho](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#filtros) que estão disponíveis quando você passa o mouse ou clica no gráfico.
<p><div align="left">
  <img src="../../assets/flux_hi_updown.png" alt="Header Icons UpDown">
  <h6>Ícones de Cabeçalho</h6>
</div></p>
Aqui você pode mover para cima ou para baixo entre Favorecido, Origem, Filial ou Projeto para analisar a área necessária.

## Pagamentos Vencidos por Mês

<p><div align="center">
  <img src="../../assets/flux_venc_mes.png" alt="Vencido Mês">
  <h6>Imagem 5: Pagamentos Vencidos por Mês</h6>
</div></p>

O gráfico ilustra os pagamentos vencidos por mês e ano, destacando três elementos principais:

- **A Pagar Acumulado:** Este representa o valor total acumulado que a empresa deve pagar ao longo dos meses. Essa métrica é crucial, pois fornece uma visão geral das saídas de caixa potenciais. Ao rastrear os pagamentos acumulados, a empresa pode monitorar a saúde geral de suas obrigações financeiras e antecipar o momento dos desembolsos. Isso é essencial para o planejamento financeiro, garantindo que o negócio tenha os recursos necessários para cumprir com suas responsabilidades sem comprometer sua liquidez.

- **Valor Pagamentos Vencidos:** Esta barra representa o valor acumulado de pagamentos vencidos em cada mês, indicando o montante total que não foi pago dentro do prazo acordado. Monitorar o valor dos pagamentos vencidos acumulados é vital para identificar tendências de atrasos e possíveis problemas com fornecedores ou períodos específicos. Uma tendência crescente de pagamentos vencidos pode sinalizar dificuldades de fluxo de caixa, ineficiências no processo de aprovação de pagamentos ou a necessidade de reavaliar o ciclo de pagamentos da empresa. Compreendendo quando e por que os pagamentos se tornam vencidos, a empresa pode tomar medidas proativas, como renegociar prazos ou ajustar suas políticas de pagamento para evitar maiores consequências.

- **% Pagamentos Vencidos:** A linha azul mostra a taxa percentual de pagamentos vencidos em relação aos pagamentos acumulados. Essa porcentagem fornece uma visão clara e imediata da proporção de obrigações financeiras que estão atrasadas. Ao rastrear essa taxa ao longo do tempo, a gerência pode avaliar a eficácia de suas políticas de pagamento e tomar decisões informadas para ajustar suas estratégias, como negociar condições mais favoráveis com fornecedores ou priorizar certos pagamentos para evitar penalidades. Uma alta porcentagem de pagamentos vencidos pode indicar a necessidade de melhorar a gestão do fluxo de caixa ou renegociar termos com fornecedores, enquanto uma baixa porcentagem sugere que os processos atuais estão funcionando bem.

Juntos, esses três elementos fornecem uma visão abrangente da saúde financeira da empresa em relação aos seus passivos. O gráfico permite que a empresa identifique padrões de atrasos, avalie o impacto dos pagamentos vencidos no fluxo de caixa e tome decisões baseadas em dados para mitigar riscos financeiros. Por exemplo, se o gráfico mostrar um aumento significativo nos pagamentos vencidos em um mês específico, a empresa pode investigar as causas e implementar estratégias para evitar que isso ocorra novamente. Da mesma forma, ao comparar a porcentagem de pagamentos vencidos com os pagamentos acumulados, a gerência pode priorizar quais fornecedores ou contas exigem atenção imediata, garantindo que os recursos sejam alocados de forma eficiente para minimizar os impactos financeiros negativos. Em última análise, este gráfico é uma ferramenta essencial para otimizar o planejamento financeiro, melhorar a gestão do fluxo de caixa e manter uma operação financeira estável e saudável.

## Tabela de Detalhes de Pagamentos Vencidos

<p><div align="center">
  <img src="../../assets/flux_venc_tabela.png" alt="Vencido Tabela">
  <h6>Imagem 6: Tabela de Detalhes de Pagamentos Vencidos</h6>
</div></p>

Este gráfico exibe uma tabela detalhada dos pagamentos vencidos, organizada por data de vencimento, oferecendo uma visão completa das transações em ordem cronológica. A tabela inclui várias colunas que fornecem informações cruciais sobre cada pagamento, desde o favorecido até o status atual e os documentos relacionados. Essa visão tabular permite à empresa analisar minuciosamente cada pagamento vencido, fornecendo todas as informações necessárias para o acompanhamento e a gestão eficaz das obrigações financeiras. Com esta estrutura, a empresa pode monitorar detalhadamente o fluxo de caixa e tomar decisões informadas sobre como lidar com pagamentos atrasados, garantindo que os riscos financeiros sejam mitigados e as relações com fornecedores sejam preservadas. A seguir, explicamos como interpretar cada coluna da tabela.

Esta tabela é essencial ao procurar detalhes sobre pagamentos devidos específicos. Pode ser filtrado usando [filtros](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#filtros).

### Favorecido
Esta coluna indica o favorecido específico que tem um valor a pagar, permitindo que você veja claramente quem são os favorecidos.
### Origem
A origem da fatura, como "INSS Retido" ou "Serviço Instalações", é indicada nesta coluna. Isso ajuda a entender a natureza da dívida e a sua fonte dentro das operações da empresa.
### Nº LCM
Esta coluna mostram o número do lançamento contábil relacionado à fatura. Elas são úteis para rastrear documentos específicos e reconciliar com registros contábeis.
### Doc.
O número do documento associado à fatura encontra-se aqui. Este é o número mais comumente usado ao pesquisar a transação no banco de dados.
### Data de Criação
Indica quando a fatura foi criada. Essa informação é importante para entender o histórico da transação e verificar quanto tempo se passou desde a emissão da fatura.
### Data de Venc.
Esta coluna mostra a data de vencimento da fatura. Comparar esta data com a data atual ajuda a identificar faturas que estão próximas de vencer ou já estão atrasadas.
### Dias em Atraso
Para mostrar o tempo que a transação está atrasada.
### Valor
Exibe o valor devido em cada fatura. Esta coluna permite uma visão clara dos montantes que estão em aberto.
### Filial
Indica a filial da empresa responsável pela fatura. Isso é útil para entender a distribuição geográfica dos pagáveis.
### Projeto
Relaciona cada fatura a um projeto específico. Esta informação é essencial para empresas que gerenciam múltiplos projetos e precisam monitorar os fluxos de caixa associados a cada um deles.
### Status
O status da fatura que é "Previsto" é mostrado aqui. Este status serve para mostrar que o pagamento ainda está pendente e evita confusão com transações mostradas no [Painel de Pagamentos Realizados](https://idea-technology-it.github.io/docs-idea/financeiro/painel_pagamentos_realizados/)
### Processo
Indica o processo associado ao recebimento, como "Pagamento". Essa coluna auxilia na compreensão do fluxo de trabalho relacionado à fatura.
### Pesquisa de Documentos
Esta coluna contém informações relacionadas à pesquisa de documentos que podem fornecer detalhes adicionais sobre a fatura ou transação. Isso é útil para obter informações mais detalhadas ou resolver dúvidas sobre um determinado pagável.

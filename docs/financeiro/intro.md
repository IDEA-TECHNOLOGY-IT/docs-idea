# Introdução ao BI Financeiro

<div align="center">
  <img src="../../assets/flux.png" alt="Financeiro Home">
  <h6>Imagem 1: Painel Financeiro</h6>
</div>

Um relatório de Business Intelligence (BI) focado em Fluxo de Caixa é fundamental para oferecer uma visão clara e detalhada da saúde financeira de uma empresa. Esse tipo de relatório proporciona uma análise aprofundada das entradas e saídas de caixa, permitindo uma gestão eficaz do fluxo de caixa, comparações detalhadas entre receitas e despesas e a avaliação do desempenho financeiro ao longo do tempo. Com visualizações precisas e detalhadas, é possível identificar tendências, monitorar variações e tomar decisões informadas para otimizar a gestão de caixa e melhorar a rentabilidade da empresa.

Uma das principais vantagens dos relatórios de Fluxo de Caixa é a sua capacidade de atualização contínua. Isso garante que os dados estejam sempre atualizados, refletindo a realidade financeira atual da empresa. A atualização em tempo real ou com uma frequência definida permite que os gestores respondam rapidamente a mudanças no mercado ou nas operações da empresa, ajustando estratégias e ações conforme necessário.

Além disso, esses relatórios integram dados de várias fontes em um único painel, oferecendo uma visão holística e consolidada das finanças. Isso facilita a análise comparativa e a identificação de padrões e anomalias que podem não ser evidentes ao analisar dados isoladamente.

Os relatórios de Fluxo de Caixa também aprimoram a precisão e a consistência das informações financeiras, reduzindo o risco de erros manuais e inconsistências frequentemente encontrados em relatórios baseados em planilhas. Ferramentas de análise avançadas, como gráficos interativos e filtros dinâmicos, permitem explorar os dados de maneira mais detalhada e gerar insights mais profundos.

Em resumo, um relatório de Fluxo de Caixa bem estruturado oferece uma visão detalhada e atualizada da saúde financeira da empresa, facilitando a tomada de decisões estratégicas, melhorando a eficiência operacional e fortalecendo a capacidade da empresa de se adaptar e prosperar em um ambiente de negócios em constante mudança.

## Navegação

Existem várias maneiras de navegar pelo BI Financeiro. Botões estrategicamente posicionados e rotulados são colocados em todos os painéis, otimizando a experiência do usuário ao permitir uma navegação clara e intuitiva. Esses botões fornecem acesso direto às principais áreas, permitindo que os usuários explorem dados de forma eficiente sem se perderem em menus complexos. Seja retornando a uma página anterior, buscando insights mais específicos ou alternando entre diferentes visões financeiras, o layout garante que os usuários possam se mover suavemente pelo relatório, melhorando sua interação geral e produtividade.

### Botões de Menu

A primeira opção é a [barra de menu](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#barra-de-menu), sempre no lado esquerdo do relatório, não importa qual painel você esteja visualizando. Cada botão navega para um painel específico no relatório. Ao passar o mouse, uma instrução descritiva aparecerá como esta;
<div style="display: flex; justify-content: center;">
  <img src="../../assets/flux_menu_click.png" alt="Menu Hover" style="vertical-align: middle; height: 150px;">
</div>

### Botões de Ver mais

A segunda maneira de navegar é através dos botões "Ver mais" localizados nos [Indicadores Financeiros](https://idea-technology-it.github.io/docs-idea/financeiro/indicadores_caixas/) - as caixas que aparecem na parte superior de cada página. Eles também têm uma descrição quando o mouse passa sobre eles, no entanto, para maior clareza, as imagens na caixa correspondente correspondem à imagem usada na barra de menu.
<div style="display: flex; justify-content: center;">
  <img src="../../assets/flux_caixa_click.png" alt="Ver mais Hover" style="vertical-align: middle; height: 150px;">
</div>

Há um botão exclusivo "Ver mais" que tem sua própria ação, e ele é encontrado na caixa intitulada [Saldo Total em Contas](https://idea-technology-it.github.io/docs-idea/financeiro/indicadores_caixas/#caixa-de-saldo-total-em-contas). Ele é encontrado na extrema direita de cada painel e abrirá uma tabela para o [Saldo por Conta](https://idea-technology-it.github.io/docs-idea/financeiro/saldo_contas/#tabela-de-saldo-total-em-contas). Quando esta tabela é aberta, o botão "Ver mais" é substituído por "Veja menos", permitindo que a tabela seja fechada.
<div style="display: flex; justify-content: center;">
  <img src="../../assets/flux_saldo_click.png" alt="Saldo Open" style="margin-right: 10px; height: 150px;">
  <img src="../../assets/flux_saldo_close.png" alt="Saldo Close" style="height: 150px;">
</div>

### Botões para Diferentes Visões

O terceiro método é usar botões para alternar entre diferentes visualizações dentro de um painel. Em certos painéis, há duas ou três visualizações, com visuais diferentes para aquele painel. Abaixo dos [Indicadores Financeiros](https://idea-technology-it.github.io/docs-idea/financeiro/indicadores_caixas/) pode haver um desses botões, se disponível, o botão alternará a visualização e o botão oposto aparecerá. Para entender melhor essas visualizações, você pode ver quais opções estão disponíveis para o painel através do [Botão para Documentação](https://idea-technology-it.github.io/docs-idea/financeiro/intro/#botao-para-documentacao) que contém imagens e explicações de todos os visuais disponíveis.
<div style="margin-bottom: 10px; display: flex; justify-content: center;">
  <img src="../../assets/flux_button_tabela.png" alt="Gráfico Open" style="margin-right: 10px;">
  <img src="../../assets/flux_button_gráfico.png" alt="Tabela Open">
</div>
<div style="margin-bottom: 10px; display: flex; justify-content: center;">
  <img src="../../assets/flux_button_vmensal.png" alt="Voltar Mensal" style="margin-right: 10px;">
  <img src="../../assets/flux_button_mensal.png" alt="Mensal Open">
</div>
<div style="display: flex; justify-content: center;">
  <img src="../../assets/flux_button_vflux.png" alt="Voltar Flux">
</div>

### Drill-through

A função usada para fazer isso é chamada de "Drill-through" e pode ser executada clicando com o botão direito em um visual e selecionando Drill-through no menu que aparece, isso estenderá o menu que mostra "Detalhamento". Uma vez clicado, o Painel de Detalhamento será aberto e será filtrado automaticamente pelo ponto de dados em que você clicou com o botão direito. Abaixo está um exemplo de clique com o botão direito na barra para 01) Em Atraso no visual Aging - Contas a Pagar;

<p><div align="center">
  <img src="../../assets/flux_detail_drillthrough.png" alt="Drillthrough">
  <h6>Imagem 2: Drill-through</h6>
</div></p>

Por padrão, este painel fica oculto, tornando-se visível apenas quando um drillthrough é iniciado. Uma vez na página de drillthrough, os usuários encontrarão uma tabela abrangente exibindo todos os campos e dados relevantes vinculados ao item específico em que eles fizeram drill, oferecendo uma visão mais granular desses dados.

Além disso, quando terminar de revisar os detalhes, os usuários podem clicar no botão de retorno na barra de menu (que só aparece depois que um drillthrough é executado) para voltar à página de onde vieram. Essa configuração permite uma exploração mais profunda dos dados sem perder o contexto original.

### Botão para Documentação

Finalmente, há um botão em cada painel do relatório que está vinculado à documentação daquele painel específico, o que facilita a navegação direta para explicações sobre os recursos visuais ou recursos.
<p><img src="../../assets/flux_menu_docs.png" alt="Docs" style="vertical-align: middle; width: 50px; height: 50px;"></p>

## Barra de Menu

<div align="center">
  <img src="../../assets/flux_menu.png" alt="Barra de Menu">
  <h6>Imagem 2: Barra de Menu</h6>
</div>

A barra de menu é uma ferramenta de navegação situada no lado esquerdo de todas as páginas do relatório. Ela oferece acesso direto e conveniente a diferentes seções e páginas detalhadas do relatório, facilitando a navegação eficiente entre várias áreas de análise e insights. A barra de menu é projetada para ajudar os usuários a encontrar rapidamente as informações desejadas, e o botão da página atual será destacado para indicar a seção em que o usuário está localizado.

Aqui está uma visão geral dos botões disponíveis na barra de menu:

### Botão Painel Financero
<p><img src="../../assets/flux_menu_home1.png" alt="Home1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_home2.png" alt="Home2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Este botão retorna os usuários à página principal, chamada "Painel Financeiro". Esta página serve como o ponto central de partida, proporcionando uma visão geral abrangente e facilitando a navegação para outras seções do relatório.
  
### Botão A Receber
<p><img src="../../assets/flux_menu_rec1.png" alt="Rec1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_rec2.png" alt="Rec2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Ao clicar neste botão, os usuários são direcionados para a página "A Receber". Esta página oferece visualizações e análises detalhadas sobre os valores que a empresa ainda precisa receber.
  
### Botão A Pagar
<p><img src="../../assets/flux_menu_pag1.png" alt="Pag1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_pag2.png" alt="Pag2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Ao clicar neste botão, os usuários são levados à página "A Pagar". Nesta seção, eles podem visualizar e analisar as obrigações financeiras que a empresa ainda precisa quitar.
  
###  Botão Inadimplência
<p><img src="../../assets/flux_menu_inadim1.png" alt="Inadim1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_inadim2.png" alt="Inadim2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Ao selecionar este botão, os usuários são direcionados para a página "Inadimplência". Nesta seção, eles encontrarão insights detalhados sobre pagamentos em atraso que ainda não foram recebidos.
  
### Botão Pagamentos Vencidos
<p><img src="../../assets/flux_menu_venc1.png" alt="Venc1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_venc2.png" alt="Venc2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Selecionar este botão direciona os usuários para a página "Pagamentos Vencidos". Nesta seção, são fornecidos insights detalhados sobre pagamentos que já passaram da data de vencimento e ainda não foram quitados.
  
### Botão Painel de Recebimentos Realizados
<p><img src="../../assets/flux_menu_pmr1.png" alt="PMR1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_pmr2.png" alt="PMR2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Clicar neste botão leva os usuários à página "Painel de Recebimentos Realizados". Nessa página, é possível visualizar a média de dias necessários para receber os pagamentos dos clientes.
  
### Botão Painel de Pagamentos Realizados
<p><img src="../../assets/flux_menu_pmp1.png" alt="PMP1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_pmp2.png" alt="PMP2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Este botão direciona os usuários para a página "Painel de Pagamentos Realizados", onde podem visualizar o número médio de dias necessários para realizar os pagamentos aos fornecedores.
  
### Botão Fluxo de Caixa
<p><img src="../../assets/flux_menu_fluxo1.png" alt="Flux1" style="vertical-align: middle; width: 60px; height: 50px;">
<img src="../../assets/flux_menu_fluxo2.png" alt="Flux2" style="vertical-align: middle; width: 50px; height: 50px;"></p>
<h6>Esquerda: Página atual, Direita: Página disponível</h6>
Selecionar este botão direciona o usuário para a página "Fluxo de Caixa", onde é possível visualizar a movimentação financeira detalhada de cada conta, organizada por mês e ano.

### Botão Voltar
<p><img src="../../assets/flux_menu_return.png" alt="Voltar" style="vertical-align: middle; width: 60px; height: 50px;"></p>
<h6>Página atual</h6>
This button is different from the other menu buttons as it only appears on the Painel de Detalhamento. Selecting this button returns the user to the page from which they made the [Drill-through]() action.

## Filtros

<div align="center">
  <img src="../../assets/flux_filtros1.png" alt="Financeiro Filtros1" style="vertical-align: middle;">
  <h6>Imagem 3: Filtros Visão 1</h6>
</div>
<div align="center">
  <img src="../../assets/flux_filtros2.png" alt="Financeiro Filtros2" style="vertical-align: middle;">
  <h6>Imagem 4: Filtros Visão 2</h6>
</div>

Os filtros são ferramentas essenciais que permitem ajustar a visualização dos dados em todas as páginas do relatório de forma dinâmica e sincronizada.

Ao modificar qualquer filtro, todos os gráficos, tabelas e outros elementos visuais do relatório são atualizados automaticamente para mostrar apenas os dados que correspondem ao critério selecionado.

Esses filtros são configurados com base nos dados da empresa, permitindo filtragens por áreas específicas, como projeto ou filial. Por exemplo, se você deseja analisar os dados de um projeto específico, como "Novo Edifício", basta selecioná-lo no filtro. A partir desse momento, todas as visualizações em cada página do relatório serão atualizadas para mostrar apenas os dados relacionados a esse projeto.

###	Empresa/Filial
<p><img src="../../assets/flux_filtros_filial.png" alt="Filial" style="vertical-align: middle; height: 50px;"></p>
Este filtro permite refinar os dados com base em uma 'Empresa' ou 'Filial' específica da empresa. Ao selecionar uma empresa ou filial, todos os visuais em todas as páginas do relatório serão atualizados para exibir informações exclusivamente relacionadas a essa unidade. Isso facilita a análise detalhada do desempenho e dos resultados de diferentes unidades de negócios ou localizações, permitindo uma visão mais clara e direcionada dos dados de cada empresa ou filial.

###	Conta
<p><img src="../../assets/flux_filtros_conta.png" alt="Antes" style="vertical-align: middle; height: 50px;"></p>
Este filtro está disponível apenas nas páginas Home e Fluxo de Conta e permite visualizar os resultados de acordo com contas específicas. Ele oferece um acesso facilitado a dados detalhados de cada conta, sendo especialmente útil para o planejamento e análise das movimentações financeiras de contas individuais.

###	Cliente/Favorecido
<p><img src="../../assets/flux_filtros_cliente.png" alt="Antes" style="vertical-align: middle; height: 50px;"></p>
Este filtro ajusta automaticamente as opções exibidas com base no painel em visualização, apresentando 'Cliente' ou 'Favorecido' conforme o contexto. Ao selecionar a opção apropriada, todos os visuais nas páginas correspondentes do relatório são atualizados para refletir as informações pertinentes. Isso agiliza o processo de análise, proporcionando uma visão mais clara e focada, permitindo uma navegação rápida e eficaz entre diferentes contextos de dados.

###	Dimensão/Centro de Custo
<p><img src="../../assets/flux_filtros_dimensao.png" alt="Antes" style="vertical-align: middle; height: 50px;"></p>
Este filtro permite refinar os dados selecionando entre várias dimensões (centro de custos) e suas respectivas subcategorias, organizadas em uma hierarquia definida pelo cliente. Ao escolher uma dimensão, como a dimensão '2,' ou ao expandi-la para visualizar e selecionar subcategorias específicas como 'Água,' 'Eletricidade,' ou 'Gás,' todos os visuais no relatório são atualizados para refletir essas escolhas. Isso facilita a análise detalhada, permitindo uma visão mais estruturada e personalizada dos dados conforme as necessidades do usuário.

###	Projeto
<p><img src="../../assets/flux_filtros_projeto.png" alt="Projeto" style="vertical-align: middle; height: 50px;"></p>
O filtro de projeto permite a seleção e filtragem dos dados por projetos específicos. Ao escolher um projeto, o relatório ajusta todos os visuais para exibir somente as informações relacionadas a esse projeto. Isso facilita uma análise detalhada dos custos, receitas e outros indicadores associados, oferecendo uma visão clara e focada do desempenho e dos resultados de cada projeto.

### Documento
<p><img src="../../assets/flux_filtros_doc.png" alt="Antes" style="vertical-align: middle; height: 50px;"></p>
Para tornar os documentos mais fáceis de encontrar, há um filtro para o número do documento incluído nas páginas relevantes. Isso é útil quando há um documento específico que requer atenção e permite fácil rastreamento em diferentes áreas de processo do fluxo de caixa.

###	Ano
<p><img src="../../assets/flux_filtros_ano.png" alt="Ano" style="vertical-align: middle; height: 50px;"></p>
O filtro de ano permite escolher o ano específico para análise. Ao aplicar esse filtro, todos os visuais nas páginas do relatório são ajustados para exibir dados exclusivamente do ano selecionado. Isso facilita a comparação e análise de tendências anuais, proporcionando uma visão clara das variações e padrões ao longo do tempo.

###	Mês
<p><img src="../../assets/flux_filtros_mes.png" alt="Mês" style="vertical-align: middle; height: 50px;"></p>
Este filtro permite selecionar um mês específico para análise. Ao escolher um mês, todos os visuais no relatório são atualizados para exibir exclusivamente os dados desse período. Isso facilita a análise mensal e a identificação de variações sazonais, proporcionando uma visão detalhada das tendências e mudanças ao longo do ano.

###	Limpar filtros
<p><img src="../../assets/flux_filtros_limpar.png" alt="Limpar" style="vertical-align: middle; height: 50px;"></p>
Para restabelecer a visualização completa dos dados e remover todos os filtros aplicados, use o botão "Limpar filtros", que está localizado no lado direito dos filtros. Este botão remove todos os critérios de filtragem, permitindo uma visão geral completa e não filtrada dos dados.

## Ícones de Cabeçalho

<div align="center">
  <img src="../../assets/flux_hi_all.png" alt="Header Icons All">
  <h6>Imagem 4: Ícones de Cabeçalho</h6>
</div>

Quando um visual é selecionado ou o mouse passa sobre ele, ícones de cabeçalho aparecem no canto superior direito. Esses ícones variam conforme o tipo e o conteúdo do visual, além das opções configuradas durante a criação.

Neste relatório, os ícones de cabeçalho mais úteis são "Fazer drill up" e "Ir para o próximo nível na hierarquia", que permitem alternar facilmente entre diferentes níveis de dados, como cliente ou projeto.

Abaixo estão as opções que um usuário pode visualizar, o significado de cada uma delas e como utilizá-las.

### Fazer drill on Linhas ou Colunas
<p><img src="../../assets/flux_hi_fazer.png" alt="Fazer" style="vertical-align: middle; height: 40px;"></p>
Isso ajusta o drill down para linhas ou colunas em uma tabela. Por exemplo, se os cabeçalhos das colunas incluem anos e meses, você pode selecionar colunas, permitindo que faça drill up para visualizar apenas os anos, drill down para ver apenas os meses, ou expandir para exibir ambos, ano e mês, como cabeçalhos de coluna. Da mesma forma, ao selecionar linhas, você pode navegar pela hierarquia das linhas, subindo ou descendo conforme necessário.

### Fazer drill up
<p><img src="../../assets/flux_hi_up.png" alt="Up" style="vertical-align: middle; height: 40px;"></p>
O botão "Fazer drill up" permite que você suba um nível na hierarquia de dados. Por exemplo, se o visual estiver detalhando informações por cliente, origem, filial e projeto, e você estiver visualizando os dados por filial, ao clicar no botão, ele exibirá os dados do nível superior, como origem.

### Clique aqui parahabilitar o Drill down
<p><img src="../../assets/flux_hi_downon.png" alt="DownOn" style="vertical-align: middle; height: 40px;"></p>
Este botão não é necessário para nossos relatórios, ele habilita os recursos de detalhamento, mas eles são predefinidos na criação.

### Ir para o próximo nível na hierarquia
<p><img src="../../assets/flux_hi_down.png" alt="Down" style="vertical-align: middle; height: 40px;"></p>
Este botão é diferente do botão "Expandir". Ao utilizá-lo, você avança para o próximo nível da hierarquia, substituindo completamente o nível atual. Por exemplo, se sua hierarquia for composta de cliente, origem, filial e projeto, e você estiver visualizando dados por cliente, clicar neste botão exibirá a origem, ocultando os dados por cliente. Se estiver visualizando uma hierarquia de ano e mês, clicar no botão mostrará apenas o mês, sem associá-lo ao ano. Quando no nível mais alto, clicar neste botão desativará a opção de "Expandir todo o campo um nível abaixo na hierarquia" nos níveis subsequentes.

### Expandir todo o campo um nível abaixo ne hierarquia
<p><img src="../../assets/flux_hi_expand.png" alt="Expand" style="vertical-align: middle; height: 40px;"></p>
Este botão permite expandir os dados no visual sem substituir o nível atual da hierarquia. Em vez de avançar para o próximo nível, ele exibe as subcategorias dentro do nível selecionado. Por exemplo, em uma hierarquia de ano e mês, se você estiver no nível de ano e clicar neste botão, verá o ano e os meses correspondentes dentro daquele ano. Da mesma forma, em uma hierarquia de cliente, origem, filial e projeto, se estiver no nível de cliente, ao clicar, verá a origem exibida como subcategorias de cada cliente.

Ao usar este botão no nível superior, a opção de "Ir para o próximo nível na hierarquia" ficará desativada para os níveis subsequentes.

### Filtros e segmentações afetando este visual
<p><img src="../../assets/flux_hi_filtros.png" alt="Filtros" style="vertical-align: middle; height: 40px;"></p>
Informa quais filtros estão impactando o visual no momento.

### Modo de foco
<p><img src="../../assets/flux_hi_foco.png" alt="Focos" style="vertical-align: middle; height: 40px;"></p>
Abre o modo de foco, que é uma nova página com apenas o visual selecionado, dando mais espaço ao visual.

### Mais opções
<p><img src="../../assets/flux_hi_mais.png" alt="Mais" style="vertical-align: middle; height: 40px;"></p>
Este botão exibe um menu com várias opções, como Pesquisar, Exportar dados, Mostrar como tabela, Remover, Destacar e Classificar. A disponibilidade dessas opções varia de acordo com o tipo de visual selecionado e as configurações aplicadas.


<br><br>
***Aviso Legal:** Os números e informações apresentados nesta documentação são baseados em um conjunto de dados fictício. Eles são destinados exclusivamente para fins educacionais e de demonstração. Os dados não refletem condições do mundo real ou métricas de negócios reais e não devem ser usados ​​para tomada de decisão ou análise. Qualquer semelhança com entidades, eventos ou dados reais é mera coincidência.*

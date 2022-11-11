---
title: Solicitação de visita domiciliar
slug: solicitacao-de-visita-domiciliar
---

# Solicitação de visita domiciliar

As solicitações de visitas domiciliares são realizadas através dos profissionais da assistência social. As solicitações são registradas no sistema e podem ser facilmente buscadas.

Funcionalidades no sistema:

- Registrar nova solicitação
- Editar solicitação
- Registrar visita domiciliar
- Ver visitas realizadas
- Imprimir solicitação de visita
- Ver modelo de aviso (família não encontrada)
- Ver relatórios nominais
- Ver gráficos

## Registrar nova solicitação

Para registar uma nova solicitação, deve-se ir em **Secretaria -> Solicitação de visita domiciliar -> Cadastrar**, a seguinte tela será exibida.

![Consultar relatório social](../../static/img/modules/solicitation-visit/registrar_solicitacao_de_visita_domiciliar_endereco.jpg)

Conforme a imagem acima, a primeiro e o segundo bloco de campos são:

1. Primeiro bloco:
    - Unidade de atendimento (a unidade que o técnico está realizando o atendimento)
    - Nome (nome completo do usuário)
    - Apelido (ou nome social)
    - RG (deve ser incluído o número, orgão expedidor e UF, exemplo: 20392123 SSPDS RN)
    - CPF (não é obrigatório, porém **é recomendado o seu preenchimento** para o registro do [histórico de atendimentos do usuário](../historic.md)).
    - Data de nascimento (no formato dd/mm/aaaa)
    - NIS (número de identificação social)

2. Segundo bloco:
    - Endereço (nome da rua)
    - Bairro (bairro onde reside o usuário)
    - Ponto de referência
    - Telefone(s)

![Consultar relatório social](../../static/img/modules/solicitation-visit/registrar_solicitacao_de_visita_domiciliar.jpg)

3. Terceiro bloco:
    - Forma de acesso da família, possui as seguintes opções:
        - Demanda espontânea
        - Encaminhamento pelo conselho tutelar
        - Encaminhamento pelo disk 100 e 123
        - Encaminhamento pelo sistema de justiça e garantia de direitos
        - Encaminhamentos da educação
        - Encaminhamentos da Saúde
        - Encaminhamentos de outros serviços/unidade de proteção especial
        - Encaminhamentos de outros serviços/unidade de proteção social básica
        - Encaminhamentos por outras políticas setorias
        - Outros encaminhamentos

    - Se houver encaminhamento, especifique o órgão/unidade que encaminhou

    :::caution Atenção
    Caso seja selecionado a opção "Demanda espontânea", este campo será desabilidatado!
    :::

    - Motivo da visita, possui as seguintes opções:
        - Averiguação cadastral
        - Denúnica

    :::tip Dica
    Outras opções de motivo da visita podem ser cadastradas, ficando a disposição do técnico.
    :::

    - Nº de pessoas (númeo de pessoas que residem no domicílio)
    - ACS (nome do Agente Comunitário de Saúde)
    - Entrevistador(a) (profissional que está realizado o atendimento)
    - Data de registro (data no formato dd/mm/aaaa)
    - Observação (observação realizada pelo ténico durante o atendimento)

Após todo o preenchimento dos campos, deve-se clicar no botão "Solicitar Visita". Caso o cadastro seja bem sucedido, o sistema irá redirecionar para a tela abaixo.

![Consultar relatório social](../../static/img/modules/solicitation-visit/sucesso.jpg)

## Visualizar solicitação de visita domiciliar

Feito o registro da visita, basta clicar em "Visualizar solicitação", o sistema irá redirecionar para a tela mostrada abaixo.

![Consultar relatório social](../../static/img/modules/solicitation-visit/visualizar_solicitacao_de_visita.jpg)

:::info Importante
Este papel deve ser impresso e assinado pelo usuário e pelo técnico, além disso, esta solicitação **DEVE** ser levada no ato da visita domiciliar.
:::

:::caution Atenção
É **extremamente importante** que o profissional não se esqueça de levar esse documento no ato da visita, pois é através dele e do campo OBSERVAÇÕES DURANTE A VISITA que após o retorno ao local de trabalho e das anotações realizadas que deve ser preenchido o cadastro da visita domiciliar.
:::

É recomendado que os profissionais deem prioridade as solicitações de visitas mais antigas.

## Modelo de aviso (família não encontrada)

Caso a visita seja realizada e a família não foi encontrada, o profissional tem a possibilidade de deixar um aviso no domicílio.
Para imprimir o aviso, basta ir em **Secretaria -> Solicitação de visita domiciliar -> Modelo de aviso (família não encontrada)**, o sistema irá abrir uma nova aba com o documento pronto para ser impresso, conforme a imagem abaixo.

![Consultar relatório social](../../static/img/modules/solicitation-visit/modelo_de_aviso_familia_nao_encontrada.jpg)

Este aviso deve ser impresso e levado junto ao profissional que irá realizar a visita domiciliar,
caso a família não seja encontrada, o profissional deve deixar esse aviso na casa da família.

:::info Importante
O aviso deixado na residência é importante pois é uma prova de que os profissionais da assistência realizaram a visita e que houve a tentativa de solucionar o problema. 
:::

## Buscar solicitação de visita domiciliar

Para buscar por uma solicitação de visita, deve-se ir em **Secretaria -> Solicitação de visita domiciliar -> Buscar**, a seguinte tela será exibida.

![Consultar relatório social](../../static/img/modules/solicitation-visit/buscar.jpg)

A busca pode ser realizada pelo nome do usuário, CPF, data de nascimento, bairro, unidade de atendimento, forma de acesso da família, motivo da visita, responsável pelo atendimento e status.

:::tip Dica
O nome do usuário pode ser pesquisado em partes, ou seja, no lugar de digitar MARIA DA SILVA, pode ser digitado apenas MARIA que o sistema vai encontrar todas as MARIA's e retornar o resultado
:::

:::note Nota 
Não é necessário realizar a busca por todos os campos, basta preencher um determinado campo que o sistema faz a busca normalmente.
:::

Ao clicar no botão de buscar e a pesquisa encontrar algum resultado conforme os parâmetros informados, o sistema vai exibir a seguinte página:

![Consultar relatório social](../../static/img/modules/solicitation-visit/buscar_registros.jpg)

A busca acima realizada foi utilizando o parâmetro nome (MARIA). É mostrada uma tabela com as seguintes colunas:

- Registrado em (com íncone de impressão da solicitação)
- Nome (nome completo do usuário)
- CPF (não obrigatório, mas recomendado)
- Unidade de atendimento (unidade onde o usuário foi atnedido)
- Status (status da solicitação)

Para visualizar as abas, registrar novas visitas e realizar edições, basta clicar no nome do usuário, que o sistema irá redirecionar para a seguinte página.

![Consultar relatório social](../../static/img/modules/solicitation-visit/abas.jpg)


Por favor descreva o seu processo para abordar o code challenge. Que tipo de
planejamento você fez? Seus planos mudaram à medida que começou a escrever
código?

Fiz um planejamento de primeiro anotar os componentes que seriam usados, em seguida desenvolver os componentes de forma simples. Segundamente eu criei o serviço de integração com a API de filmes e testei. E por último fiz as integrações.
No decorrer do processo tive que voltar em alguns componentes para adicionar uma coisa ou outra.

o Descreva a distribuição de responsabilidades no código. Quais responsabilidades
você achou importante agrupar (seja em um método, módulo, objeto ou arquivo)?

EU gosto sempre de agrupar meu código por responsabilidades, nesse caso como o projeto é pequeno, não tiveram tantas modularizações, porém eu criei uma classe com as chamadas de API e também separei um hook de hover que eu usaria mais de uma vez. Além disso, os componentes que foram utilizados em mais de uma tela foram separados e reutilizados.

Quais responsabilidades você achou importante manter separadas? Por que?
o Se você tivesse mais um dia para trabalhar nesse MVP, onde você investiria esse
tempo? E se tivesse um mês?

Como disse a cima, eu separei alguns componentes e também a classe de serviço. Acho que da forma que foi feito a manutenção fica extremamente mais fácil, onde cada função chama apenas aquilo que é de sua responsabilidade. Se eu tivesse mais um dia eu investiria em criar uma estrutura de testes com o cypress. Já no caso de ter mais um mês eu procuraria ampliar as funcionalidades, criando uma lista de desejos e uma lista de filmes assistidos.

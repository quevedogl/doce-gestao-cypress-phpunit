# Exercícios — Cypress e PHPUnit

Projeto de estudo Doce Gestão (Laravel) cobrindo os 30 itens da lista.

| Exercício | Implementação |
|---|---|
| 1 | Cypress em `package.json` e `cypress.config.js`, baseUrl localhost:8000 |
| 2–6 | `home.cy.js`, seletores `data-cy`, `describe`, `it` e `beforeEach` |
| 7–14 | CRUD de produtos/clientes, validações, estoque baixo e fixtures |
| 15–16 | `cy.criarProduto`, `cy.criarCliente` e paginação |
| 17–20 | Pedido com baixa de estoque, insuficiência, frete, `cy.intercept` e task de reset |
| 21 | Teste unitário `assertTrue(true)` em `tests/Unit/ExampleTest.php` |
| 22–30 | Testes Feature de rotas, conteúdo, 404, banco, POST, validação, update/delete e estoque |

## Rodar
Consulte `README.md`. A suíte Cypress depende da aplicação estar rodando em `http://localhost:8000`.
A task `resetDatabase` executa `docker compose exec -T app php artisan migrate:fresh --seed`.

# Doce Gestão — Cypress + PHPUnit

Projeto didático simples de gestão de uma confeitaria Laravel com Produtos, Clientes, Pedidos e Fretes.
Inclui exemplos para os 30 exercícios da lista: Cypress (1–20) e PHPUnit (21–30).

## Requisitos
- Docker Desktop com Compose (recomendado), ou PHP 8.2+, Composer, Node.js 20+
- Para rodar via Docker: `docker compose up -d --build`
- Instalar dependências PHP: `docker compose exec app composer install`
- Instalar dependências JS: `npm install`
- Preparar banco e seed: `docker compose exec app php artisan migrate:fresh --seed`
- Aplicação: http://localhost:8000
- Cypress: `npm run cy:run` ou `npx cypress open`
- PHPUnit: `docker compose exec app php artisan test`
- Cypress 3 execuções: `npm run test:3x`

## Observações
Este é um projeto de estudo gerado do zero. Não é uma aplicação de produção. Os seletores `data-cy` são usados nos testes.
Se o Docker Compose não funcionar no seu computador, instale PHP/Composer localmente e siga os comandos Laravel equivalentes.

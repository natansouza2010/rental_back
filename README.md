# pw4

# Rodando o Projeto
## Para iniciar o projeto:
```
npm install 
npm run startDev
```
# Modulo de Entidades
- ` rental: ` Entidade relacional de aluguel de carros, sendo responsável por conectar um usuário a um carro que deseja alugar
- ` user: ` Entidade de identificação de usuário, que consegue navegar na página através de um token de acesso gerado por requisição
- ` vehicle: ` Produto acessado pelo usuário para a realização do aluguel


# Modulo de Pacotes
` node_modules: `Modulo criado pelo node, onde contém todas as dependências do projeto
` src: ` raiz estrutural do projeto
    - ` config: ` local dos arquivos de configuração de middlewares e banco de dados (MongoDB)
    - ` modules: ` diretório responsável por armazenar a regra de negócio de cada entidade do sistema
        - ` Controller: ` Diretório responsável por tratar as requisições de acesso e/ou inserção de conteúdo da API
        - ` Exception: ` Tratamento de excessão definidos na regra de negócio do modelo
        - ` Model: ` Definição dos atributos das classes entity do sistema
        - ` Repository: ` Camada responsável por fazer a conexão dos controllers com a tabela do banco de cada entidade
        - ` Routes: ` Define as rotas utilizadas para os comandos de requisição
        - ` Service: ` Injeção de dependência, classe usada para chamar a conexão entre controller e repository encapsulando a regra de negócio



# Modódulo de Requisições
Base URL: http://localhost:8082

## Usuário:

#### POST - http://localhost:8082/api/user/auth - Gera um token de acesso
```
Headers:

Content-Type: application/json
Body:
{
    "email": "admin",
    "password": "admin"
}

Resposta:

{
    "status": 200,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVXNlciI6eyJpZCI6MSwibmFtZSI6IlVzZXIgVGVzdCAxIiwiZW1haWwiOiJ0ZXN0ZXVzZXIxQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MzM3OTk5MzUsImV4cCI6MTYzMzg4NjMzNX0.2AWPeoHSYUW_nGeLsx6rEOhm99ZfNZ8pQXPTJ0fwbDU"
}

Obs.: todos os endpoints precisam de um token

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVXNlciI6eyJpZCI6MSwibmFtZSI6IlVzZXIgVGVzdCAxIiwiZW1haWwiOiJ0ZXN0ZXVzZXIxQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MzM3OTk5MzUsImV4cCI6MTYzMzg4NjMzNX0.2AWPeoHSYUW_nGeLsx6rEOhm99ZfNZ8pQXPTJ0fwbDU

```
## Veicúlo:

#### POST - http://localhost:8082/api/vehicle/create - Cria um novo produto
```
Body:

{
    "name": "Corsa",
    "brand": "Fiat",
    "year": "2014",
    "value": 10000,
    "status": "AVAILABLE",
}
Resposta:

{
  "status": 200,
  "createdVehicle": {
    "name": "Corsa",
    "brand": "Fiat",
    "year": "2014",
    "value": 10000,
    "createdAt": "2022-09-28T00:10:38.040Z",
    "status": "AVAILABLE",
    "_id": "633390fe062e4995dcc2d7f6",
    "__v": 0
  }
}
```
#### GET - http://localhost:8082/api/vehicle/{id} -Busca um veiculo
```
Resposta (parâmetro id = 633390fe062e4995dcc2d7f6):

{
  "status": 200,
  "existingVehicle": {
    "_id": "633390fe062e4995dcc2d7f6",
    "name": "Corsa",
    "brand": "Fiat",
    "year": "2014",
    "value": 10000,
    "createdAt": "2022-09-28T00:10:38.040Z",
    "status": "AVAILABLE",
    "__v": 0
  }
}
```

#### DELETE - http://localhost:8082/api/vehicle/{id} - Remove um veiculo
Resposta (parâmetro id = 633390fe062e4995dcc2d7f6):
```
{
  "status": 200,
  "existingVehicle": {
    "_id": "6333924cbb2535465d2ad2f0",
    "name": "Corsa",
    "brand": "Fiat",
    "year": "2014",
    "value": 8000,
    "createdAt": "2022-09-28T00:16:12.863Z",
    "status": "AVAILABLE",
    "__v": 0
  }
}
```
#### GET - http://localhost:8082/api/vehicles - Busca todos os veiculos
```
Resposta: {
}

{
  "status": 200,
  "vehicles": [
    {
      "_id": "6333924cbb2535465d2ad2f0",
      "name": "Corsa",
      "brand": "Fiat",
      "year": "2014",
      "value": 8000,
      "createdAt": "2022-09-28T00:16:12.863Z",
      "status": "AVAILABLE",
      "__v": 0
    }
  ]
}
```
## Aluguel:

#### POST - http://localhost:8082/api/rental/create - Cria um novo aluguel de veiculo
```
Body:
{
   "vehicle": "63338c7d026412a5b965261f",
   "period": 7
}

Resposta:
{
  "user": {
    "id": "632ca65a518eac661f31456a",
    "name": "User Admin",
    "email": "admin",
    "role": "ADMIN"
  },
  "vehicle": {
    "_id": "633393fbfc1a23f21893b795",
    "name": "Corsa",
    "brand": "Fiat",
    "year": "2014",
    "value": 8000,
    "createdAt": "2022-09-28T00:23:23.632Z",
    "status": "AVAILABLE",
    "__v": 0
  },
  "period": 7,
  "valuePayment": 56000,
  "_id": "63339411fc1a23f21893b799",
  "__v": 0
}
```

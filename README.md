# pw4

## Documentação dos endpoints

Para iniciar o projeto:
```
npm install 
npm startDev (irá rodar o script com nodemon app.js)
```

## Módulo de Usuário:

Base URL: http://localhost:8082

#### POST - /api/user/auth - Gera um token de acesso
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
## Módulo de Veicúlo:

Base URL: http://localhost:8082

#### POST - /api/vehicle/create - Cria um novo produto
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
#### GET - /api/vehicle/{id} -Busca um veiculo
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

#### DELETE - /api/vehicle/{id} - Remove um veiculo
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
#### GET - /api/vehicles - Busca todos os veiculos
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
## Módulo de Aluguel:
Base URL: http://localhost:8082

#### POST - /api/rental/create - Cria um novo aluguel de veiculo
```
BODY {
   "vehicle": "63338c7d026412a5b965261f",
   "period": 7
}

RESPOSTA:
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

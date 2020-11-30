# NativeMarketMobile

![Stacks](https://ibb.co/ggH24r1)

# APK Disponivel na Aptoide Store:
![AppGif](https://ibb.co/f9gKyNC)![Aptoide URL](https://ibb.co/gDfMyvn)
https://bit.ly/2KVxcKj
## Features
    * [x] Docker
    * [x] Nginx
    * [x] EC2
    * [x] React Native
    * [x] Typescript
    * [x] Express
    * [x] Eslint
    * [x] Prettier

# About
Aplicativo desenvolvido utilizando Typescript, juntamente com React Native na camada do FrontEnd.
Na Camada do Backend:
Proxy com NGIX em um servidor Linux - EC2 AWS.
TypeORM gerenciando a conexão com bando de dados PostegresSQL, rodando em container Docker, para facilmente escalar e migrar de Cloud caso necessário.


# API DOCS: 
![API](https://kleimo-blog.s3.amazonaws.com/2016/Jan/aws_nginx-1451949046231.png)
URL Base: http://3.19.215.150 (Deployada na AWS EC2, com Proxy Nginx)

# Rotas
## Usuários:
http://baseURL/users

- POST (Criação de usuarios): 

Exmplo JSON:
    {
        "name": " ",
        "email": " ",
        "password": " "
    }

Sessões:
http://baseURL/sessions

Exemplo JSON:

    {
        "email" : " ",
        "password" : " ",
    }
//Retorna os dados do usuario, e Token JWT valido por 24 Horas.

## Avatar de Perfil:

Necessario passar no Header da Requisição Token JWT, gerado na rota anterior:

http://baseURL/users/avatar

-PATCH 

Multipart Form
Exemplo:
avatar: file(png,jpg...)

-GET

//Retorna URL com Avatar de Perfil

## Categorias:
-GET (Listar todas as Categorias)
-POST
http://baseURL/categorys
 Criação de novas caterorias:

 Exemplo JSON:   
    {
         "CategoryName:   " ", //Nome da Categoria
         "Description":   " ", //Descrição da Categoria
         "ParentId":      " ", // Id da Categoria Pai, caso for um sub-categoria
         "Status" :       " ", //Ativo/Desativado
         "CategoryImage": " ", //URL para Imagem de Avatar da Categoria
    }



-UPDATE (Atualização de Categorias)
-DELETE (Deleção de Categoria)
-GET    (Seleção de uma Categoria)

http://baseURL/categorys/:CategoryName

## Produtos:
-GET (Listar todos os Produtos)
-POST
http://baseURL/products
 Criação de novos produtos:

 Exemplo JSON:   
    {
         "ProductName:          " ", //Nome do Produto
         "ProductDescription":   " ", //Descrição do Produto
         "Price":                " ", //Preço do Produto
         "categoryId" :       " ", //CategoryName: Nome da Categoria a qual o produto pertence
         "ProductImage": " ", //URL para Imagem de Avatar do Produto
    }



-UPDATE (Atualização de Produtos)
-DELETE (Deleção de Produto)
-GET    (Seleção de um Produto)

http://baseURL/products/:ProductName

# Insomnia - API End Points:

[!Insomnia](https://www.saashub.com/images/app/screenshots/17/583b57310db7/landing-medium.jpg?1540906885)
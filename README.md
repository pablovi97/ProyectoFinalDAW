# Proyecto (Pagina de Alquiler de coches)
Se pretende crear una web de alquiler de coches en la cual los usuarios puede alquilar tanto coches normales como deportivos .Los usuarios también podrán comentar lo que les ha parecido ese coche y puntuar .


## Tecnoligas usuadas

* Laravel (PHP) : usado como una api en  la parte de backend 
* Angular (Js): usado para la parte del cliente 
* Boostrap y Material :Usado para el Front
* Mysql : como lenguaje de base de datos
* phpMyAdmin : como gestor de base de datos
* VsCode : Editor de codigo

## Manual de uso

>**Arrancamos los servicios Apache y Mysql en xampp y en Mysql clickamos en 'Admin'**
![img](./images/01.PNG)

>**Luego cogemos el Script alquiler_coches.sql y lo importamos**
![img](./images/02.PNG)

>**Abirmos el proyecto apiCoche y ejecutamos el siguiente (php artisan serve) comando para arrancar la API** 
![img](./images/03.PNG)

>**Por ultimo abrimos el proyecto de angular alquilerCochesNg y ejecutamos el siguiente comando (npm start)**
![img](./images/04.PNG)

## Memoria 15/04
>**Usuarios**
    * [Admin] = pablo , '1q2w3e4r'
    * [usuario] = anna , '1q2w3e4r'

* Creamos un proxy para saltarnos el CORS que puede tener nuestra api y que nos puede generar problemas
    ![img](./images/05.PNG)
* Introducimos los datos recogidos por la api en una card para mejorar el front:
    ![img](./images/06.PNG)
* creamos las rutas en el fichero app-routin.modules.ts   
    ![img](./images/08.PNG)
* Cambiamos el estilo del navbar y le introducimos tres links (login ,sign in , about us):
    ![img](./images/07.PNG)
* El login funciona correctamente , cuando los logeamos recibimos el objeto del usuario en el que hemos entrado  que se guardará en sesion  , y nos reedirigirá al home:
    ![img](./images/09.PNG)
* si el usuario es 'Admin' le saldrán dos botones uno para editar y otro para eliminar (Por ahora funciona el eliminar):   
    ![img](./images/10.PNG)   
* Cuando clicamos en un vehiculo nos saldra los detalles de este:
    ![img](./images/11.PNG)   
    ![img](./images/12.PNG)   

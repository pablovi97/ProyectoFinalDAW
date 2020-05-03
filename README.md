# Proyecto (Pagina de Alquiler de coches)
Se pretende crear una web de alquiler de coches en la cual los usuarios puede alquilar tanto coches normales como deportivos .Los usuarios también podrán comentar lo que les ha parecido ese coche y puntuar .

**Índice**
1. [Manual de uso](#id1)
2. [Memoria 15/04](#id2)
3. [Memoria 04/05](#id3)

## Tecnoligas usuadas

* Laravel (PHP) : usado como una api en  la parte de backend 
* Angular (Js): usado para la parte del cliente 
* Boostrap y Material :Usado para el Front
* Mysql : como lenguaje de base de datos
* phpMyAdmin : como gestor de base de datos
* VsCode : Editor de codigo

<div id='id1'/>

## Manual de uso

>**Arrancamos los servicios Apache y Mysql en xampp y en Mysql clickamos en 'Admin'**
![img](./images/01.PNG)

>**Luego cogemos el Script alquiler_coches.sql y lo importamos**
![img](./images/02.PNG)

>**Abirmos el proyecto apiCoche y ejecutamos el siguiente (php artisan serve) comando para arrancar la API** 
![img](./images/03.PNG)

>**Por ultimo abrimos el proyecto de angular alquilerCochesNg y ejecutamos el siguiente comando (npm start)**
![img](./images/04.PNG)

<div id='id2'/>

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

<div id='id3'/>

## Memoria 04/05
* Introducimos cierta seguridad en la aplicación , para ello hacemos lo siguiente:
    * Creamos dos middleware en la api uno para que en ciertas partes se tengan que authentificar y otro  para verificar el rol del usuario
        > middleware para la authentificación
        ![img](./images/13.PNG)

        > middleware para la verificación de los roles
        ![img](./images/14.PNG)
    * Para usarlo desde nuestro cliente debemos recoger el token en el momento que nos logueamos :
        > recogemos el token y lo guardamos en el localStorage para usarlo mas adelante
        ![img](./images/15.PNG)
        ![img](./images/16.PNG)

    * Por ultimo en el fichero donde hacemos nuestras consultas a la API introducimos el token en el header de la siguiente manera:
        >Introducimos el token en el header:
        ![img](./images/17.PNG)
        
        >Usamos el header para nuestras consultas:
        ![img](./images/18.PNG)

* El logout funciona correcatemente lo que hace es eliminar todas las sesiones del localStorage y el sesionStorage y reedirigirte al home:

    ![img](./images/19.PNG)

* El register funciona correctamente:
    > Metodo que llamamos desde el front
    ![img](./images/20.PNG)

    > Metodo para realizar la consulta en el fichero de consultas:
    ![img](./images/21.PNG) 

* Mejoramos he hicimos usable la parte de detalles (cuando clicamos un card de un vehiculo):
    > En este apartado puedes seleccionar la cantidad de vehiculos para alquilar y desde que dia hasta que dia lo quieres
    ![img](./images/22.PNG)
    > Cogemos todos los datos que haya introducido y los metemos en un obejto de 
    > DetallePedidos que a su vez irá en un array de Pedidos .Por ultimo lo subimos al localStorage .
    > Por cada nuevo detalle verificamos si hay algun localStorage de pedidos creados en caso de no creamos uno
    ![img](./images/23.PNG)

    * Para poder subir nuestros pedidos creamos un componenete de carrito donde se visualizaran nuestros pedidos que hayamos hecho y con un boton para poder subirlos a la base de datos
    ![img](./images/24.PNG)

    > Recogemos los pedidos del localStorage 
    ![img](./images/25.PNG)

    > y los subimos a la base de datos
    ![img](./images/26.PNG)

* Creamos el componente para subir vehiculos nuevos "Solo disponible para usuarios ADMIN"
    >Para crear este stepper de material importamos el modulo "import {MatStepperModule} from '@angular/material/stepper';" y "import { FormsModule , ReactiveFormsModule  } from  '@angular/forms';" para introducir  y recoger los datos del stepper
    ![img](./images/27.PNG)

    >Creamos un nuevo FormGroup para recoger los datos
    ![img](./images/28.PNG)

    > Recogemos los datos que nos han enviado:
    ![img](./images/29.PNG)

    > Por ultimo los enviamos a la base de datos:
    ![img](./images/30.PNG)

* Por ultimo Creamos el componente de actualizar Coches "Solo disponible para usuarios ADMIN"
    >Introducimos el Coche modificado en el metodo para subir en la api
    ![img](./images/31.PNG)
    > Y Actualizamos el coche en la base de datos
    ![img](./images/32.PNG)

    



# Proyecto (Pagina de Alquiler de coches)
Se pretende crear una web de alquiler de coches en la cual los usuarios puede alquilar tanto coches normales como deportivos .Los usuarios también podrán comentar lo que les ha parecido ese coche y puntuar .

**Índice**
1. [Manual de uso](#id1)
2. [Memoria 15/04](#id2)
3. [Memoria 04/05](#id3)
4. [Memoria 29/05](#id4)

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
    
>**Para abrir xampp en la maquina entregada ejecutar el siguiente script y ejecutar los siguientes comandos:**
    >Password Maquina Virtual = 1q2w3e4r
![img](./images/script.PNG)

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

    
<div id='id4'/>

## Memoria 29/05

* Introducimos un nuevo componente de comentarios en la parte de detalles:
   ![img](./images/33.PNG) 
   ![img](./images/34.PNG)

  >En este componenete podemos introducir comentarios sobre el producto y puntuar sobre el
  > , lo unico que tenemos que hacer es escribir el comentario y si queremos pulsar la estrella que queramos y enviar

    * Lo primero que hace este componente es cargar los comentarios por id de vehiculo
    ![img](./images/35.PNG)
    ![img](./images/36.PNG)

    * Luego si queremos podemos crear un nuevo comentario o responder a los que estan en la lista de comentarios
    >Verificamos si hay algun usuario logeado en caso negativo se le reedigira al login para que se logee y comente
    ![img](./images/37.PNG)

    >Para responder el comentario usamos este mismo metodo solo que añadiendo la clave foranea de la pregunta
    ![img](./images/38.PNG)

    * A lahora de volcarlo en la vsita miraremos si hay algun comentario con el id de la pregunta y la colocaremos ahi
    ![img](./images/39.PNG)
    ![img](./images/40.PNG)

    * [ Privilegios ROOT ]: el usuario root al igual que los demas usuarios podra comentar y responder , pero también podra borrar comentarios
    >Si clickamos el boton rojo borraremos el comentario

    ![img](./images/41.PNG)
    ![img](./images/42.PNG)

* Introducimos un buscador por marcas:
>Aquí introduciremos el nombre de la marca que queramos buscar y nos saldrá
  ![img](./images/43.PNG)

  >Por ejemplo si introducimos "honda" nos saldran los honda
  ![img](./images/44.PNG)

   * Creamos un localStorage con lo que pusimos en la busqueda y en el componente lista lo recogemos

  ![img](./images/45.PNG)

   * Y con lo anterior hacemos una petición a la base de datos que recoja todos los coches con esa marca
  ![img](./images/46.PNG)

* Mejoramos el aspecto del carrito:
>Ahora nos muestran datos como el coste total las fechas y se pueden eliminar de la cesta
  ![img](./images/47.PNG)   

  * Cuando no aparece ningun coche se ve esto:
  ![img](./images/48.PNG)  

* Tenemos una nueva sección para el usuario logeado que nos mostrará todos nuestros pedidos:
>Nos enseña la fecha del pedido junto con su id
  ![img](./images/49.PNG)

  * Si clickamos en una tarjeta de pedidos nos enseñaran los detalles del pedido :
    >Nos enseñará la fecha inicial y final del alquiler mas el numero del pedido
  ![img](./images/50.PNG)

  * Por ultimo si clicamos en una de las tarjetas de los detalles no aparecerá el vehiculo que hemos alquilado con sus datos
  ![img](./images/51.PNG)                 







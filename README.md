# Proyecto Final WebApp mis videos

## Desarrolladores:
* Rios Díaz Karla Mariela 
* García Aguilera Arturo 
* Sandoval Rios José Daniel 

***
## Descripción del proyecto final.

Web app con nodejs, y javascript como lenguaje de programación backend y mysql como base de datos SQL. Puede crear, eliminar, actualizar, y listar los datos (videos). Esta aplicación de NodeJS hace uso del motor de plantillas Handlebars, Bootstrap y librerías de express para conexión a mysql y para el acceso por login, en este proyecto se plantea la creación de un sitio con una navegación dinamica. Consta de páginas diseñadas con Bootstrap y funcionalidad de NodeJS con express, la estructura del proyecto separa las rutas de los partials(trozos de código que se pueden usar en cualquier parte del proyecto) y el funcionamiento (controllers).

La app muestra los vídeos favoritos en home ordenandolos por fecha de captura mas reciente,además tiene un filtro para categorizar los vídeos por red social. 

# Express 
Express es un framework de NodeJS que nos ayuda simplificar la programación del lado del servidor con muchas menos líneas de código.

# Herramientas necesarias
Visual Studio Code, Node JS, Express, Bootstrap, Zeit Now, Remote MYSQL
***

## Caracteriscas del proyecto final.

* Mostrar vídeos favoritos, sus datos, la calificación de los vídeos y por último mostrar cada vídeo favoritos filtrando por él nombre del usuario que lo agregó.
* Permitir el registro de usuarios nuevos, capturando su nombre, el nombre de su usuario qué tendrá dentro de la web-app, contraseña y email. Y una vez registrado el usuario permitir loguearse dentro de la web-app para poder realizar las siguientes acciones: Agregar, editar y borrar los vídeos de la preferencia del usuario.
* Capturar vídeos de las siguientes plataformas: YouTube, dailymotion, vimeo y metacafe. Y al momento de capturar en vídeo se debe de realizar la captura de sus datos tener un botón "aceptar" que al momento de oprimirlo se mostraran el vídeo, sus datos y aparte se mostrará un botón "agregar" que al momento oprimirlo se agregue dicho vídeo al usuario y que también se pueda hacer una recaptura de los datos antes de oprimir dicho botón. 
* Poder calificar los vídeos dentro de la web-app sólo si el usuario esta logueado. Y una vez calificado el vídeo mostrar el promedio de la calificación de este.
* Tener una API Rest que te permitirá acceder a los datos desde cualquier aplicación del listado de los vídeos, mostrar los vídeos con fecha de captura mas reciente y una cadena JSON generada debe 100% valida.

***
## API REST
La API REST implementada en el proyecto permite acceder a los datos desde cualquier aplicación del listado de los vídeos mediante rutas /api que devuelven un objeto JSON del listado de videos ordenados con fecha de captura mas reciente.

## Uso de la WebApp.

### Pagina principal.

En la pagina principal se mostrará los videos que han sido agregados por los usuarios con su respectiva calificación promediada. 
Cada video que se mostrará contendrá los siguentes elementos:

* El nombre del video.
* El nombre de la plataforma en donde se ha tomado dicho video.
* Su categoria.
* El promedio de la calificación del video.

Para poder calificar un video primero se necesita esta logeado dentro de la WebApp, ya habiendo cumplido éste primer requisito, deberas
dar clic sobre el video de tú elección que quieras calificar. Una vez hecho esto se te mostrará el sistema de calificiación de la WebApp, 
y ahí solo tendras que seleccionar la cantidad de estrellas para el video que se va a calificar y para agregar la calificación solo hace
falta dar clic sobre el botón *votar*. Además en el detalle de  cada video hay un listado de videos sugeridos.

### FILTROS DE BÚSQUEDA
En la webapp hay dos formas de hacer filtrado en la búsqueda, uno en la home seleccionando por red social a la que pertenecen y otra desde navigation en el ícono de search donde se busca por nombre de video, esta última opción lleva a la página results donde se muestran los resultados y además hay la opción de hacer esta misma búsqueda desde esta misma página.

### Users.

Dando clic en el botón *users* sin importar que te haya logueado o no), muestra una listado completo de los usuarios que sido registrado en la WebApp. Una vez mostrado dicho listado de usuarios; si das clic sobre el usuario de tú elección, se te mostrarán
los videos que ha ingresado el usuario dentro de la WebApp.

### SingUp.

Dando clic en el botón *SingUp*, tendremos la opción y posibilidad de registrarnos dentro de la WebApp. Una vez dentro de *SingUp* se nos mostrará los siguiente campos a rellenar para poder registrarnos (y que son obligatorios a ser llenados, si es que queremos registrarnos):

* Nombre completo.
* Usuario.
* Contreseña.
Y una vez completados de correcta dichos campos, con el botón *SingIn* concluirás tú registro en la WebApp.

### SingIn

Una vez ya habiendo concretado tu registro en la WebApp en la opcion *SingUp*, en *SingIn* tendrás la opción de poder acceder al usuario 
previamente creado por ti. Para eso deberás llenar los siguientes campos para poder accerder a tu usuario:

* Usuario.
* Contraseña.

Un vez llenado correctamente los campos, lo siguiente sera dar clic en el botón *SingIn* que se encuentra en la parte inferior de los campos. Y con ésto se concretaría tu acceso a tu usuario dentro de la WebApp.

### Home

```
  Que se accede: SingIn o SingUp => Home
```

En dicha opción (que se meustra una vez logueado en la WebApp), te redirecciona a la pagina principal, para poder visualizar los videos
y poder calificarlos.

### OPCIONES DEL USUARIO LOGUEADO

### All Videos

```
  Que se accede: SingIn o SingUp => Mis Videos => All Videos
```

En ésta opción (que solo se muestra una vez te has logueado en la WebApp) nos permite vizualizar los videos (y sus datos), que has agregado dentro de la WebApp. Y dónde también podrás editar o borrar los videos que hayas agregado, con los botones *Edit* o *Delete Video*, respectivamente.

### Add A Video

```
  Que se accede: SingIn o SingUp => Mis Videos => Add A Video
```

Para agregar un video a la WebApp, aquí es el lugar. Una vez dentro de la opción *Add A Video* tendremos la opción de agregar un nuevo video a la WebApp y a nuestro usuario, siempre y cuando se llenén de manera correcta los siguientes campos:

* Nombre del video.
* Plataforma de video de dónde se tomará el video que se agregará.
* El link embed del video que has elegido (el link embed se consigue en el botón compartir dentro del video original; sin importar en cual de las 4 plataformas de video te encuentres).
```
  Ej. https://www.youtube.com/embed/dKT2CdxeIFk
```
* La categoría del video.
* La descripción del video.

Una vez llenado correctamente cada campo, lo siguiente será dar clic *Aceptar* que se encuentra en la parte inferior para proceder con el agregado del video. Una vez pulsado dicho botón encuestión, se mostraran nuevamente los datos del video que estás por subir, para poder verificar bien los datos de éste, y dado que caso hacer un cambio en el video que vas a subir. 
Ya habiendo verficando los datos del video, podrás dar clic en el botón *Agregar* para agregar el video a la WebApo o podrás dar clic en el botón *Cancelar* para cancelar la acción de agrado de video.

### Profiles 

En ésta opción (que solo se muestra una vez te has logueado en la WebApp), se mostrará tú nombre y aparte el nombre de tu usuario dentro de la WebApp. Aparte se te mostrará un botón *Save your Videos* que te direccionará a la sección de agregado de videos (*Add A Video*).

### Logout

Dando clic a la opción logout, te dirigirá nuevamente a la pagina principal pero deslogueado de la WebApp.

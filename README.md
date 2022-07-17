# prueba-navacom
Usando la información de este link https://www.reddit.com/reddits.json almacenar el
contenido en una base de datos organizado por tablas, de preferencia usar MySQL. Crear
una aplicación web(API) para leer el contenido desde base de datos, en el Frontend
mostrar un listado con todos los temas y al entrar en uno de ellos, mostrar el detalle
completo. Ten en cuenta la arquitectura de tu código y los patrones de diseño usados, dan
puntos adicionales la buena utilización de ellos.
Detalles Importantes:
• Utilizar estrictamente solo las imágenes que vienen en el JSON.
• Puede ayudarse para el diseño con plantillas gratuitas
ejemplo: https://demos.creative-tim.com.
• Subir a GitHub la prueba terminada y enviar link.
Puntos que consideraremos:
• Organización del proyecto
• Construcción de las vistas y planeación.
• Manejo de base de datos
Especificaciones técnicas:
Usar alguna de estas tecnologías.
Backend: NodeJS / PHP (Se valora el uso de frameworks)
Frontend: Javascript / jQuery / AngularJS

#TECNOLOGIAS USADAS 

Para el desarrollo de esta aplicacion web, se utilizo nodeJS, expressJS del lado del backend, del lado del frontend se utilizo hbs un gestor de plantillas de html que nos provee nodejs y como gestor de base de datos MySQL.

#CONFIGURACION (window)

1. Para iniciar el proyecto debera utilizar el comando npm init.
2. Para instalar las depencias del proyecto (archivo package.json) debera utilizar el comando npm install.
3. Para lanzar el servidor debera utilizar el comando npm run start modo produccion y npm run devstart para modo desarrollo.

#FUNCIONALIDAD

Esta aplicacion web, obtinen los datos de https://www.reddit.com/reddits.json, el cual proporciona la informacion relacionada con una aplicacion web llamada reddit, la cual esta compuesta por comunidad que son creadas por sus usuario para realizar publicaciones sobre diferentes temas 
sociales. la aplicacion lee esta informacion la almacena en una base de datos tipo sql y hacer click en la imagen de la comunidad muestra en pantalla la informacion relacionada de dicha comunidad.

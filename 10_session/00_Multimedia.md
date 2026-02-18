# Contenido Multimedia en la Web

¡Excelente! Un sitio web no solo vive de texto e imágenes estáticas. Para hacerlo más dinámico, interactivo y atractivo, necesitamos añadir contenido multimedia. Imagina un sitio de un concesionario sin videos de los autos, o un blog personal sin podcasts. ¡Sería aburrido!

HTML5 nos proporciona etiquetas poderosas para insertar audio, video y contenido de otras páginas directamente en la nuestra. CSS, por su parte, nos ayudará a que se vean bien y se adapten a cualquier dispositivo.

## Sonidos en la Web < audio >

Vamos a agregar el audio a manera de un reproductor de radio que pones en tu sitio, podemos reproducir una canción o sonido, los usuarios pueden controlar la reproducción.

**Fuente para descargar audios en formato mp3:** [EnvatoMarket](https://audiojungle.net/)  

### Atributos de etiqueta HTML < audio >

- src: La ruta al archivo de audio (ej. audio/musica.mp3).  

- controls: Muestra los controles estándar del navegador (reproducir, pausar, volumen, barra de progreso).  

- autoplay: El audio se reproduce automáticamente cuando la página carga.  

- loop: El audio se repite infinitamente.  

- muted: El audio se reproduce silenciado por defecto.  

- < source >: Permite especificar múltiples formatos de audio (.mp3, .ogg, .wav) para mayor compatibilidad con diferentes navegadores. 

![Audio-Relax](/10_session/resources/image/audio-web.png)  

## Video en la Web < video >

Imagina el video como una pantalla de televisión en tu sitio web. Puedes mostrar demos, tutoriales, entrevistas, o simplemente algo que atraiga la vista.

**Fuente para descargar videos:** [Pixabay](https://pixabay.com/es/videos/)  

### Atributos de etiqueta HTML < video >

- src: La ruta al archivo de video (ej. video/demostracion.mp4).  

- controls: Muestra los controles estándar del navegador (reproducir, pausar, volumen, barra de progreso, pantalla completa).  

- autoplay: El video se reproduce automáticamente.  

- loop: El video se repite infinitamente.  

- muted: El video se reproduce silenciado por defecto.  

- poster: Una imagen que se muestra antes de que el video se reproduzca. Útil como "portada" para el video.  

- width / height: Puedes especificar el ancho y alto en píxeles. Sin embargo, para la responsividad, es mejor controlarlo con CSS.  

- < source >: Permite especificar múltiples formatos de video (.mp4, .webm, .ogg) para mayor compatibilidad con el navegador.

![Video-Turismo](/07_session/resources/image/video-web.png)  


## Incrustar recursos externos en la web < iframe >

Imagina un < iframe > como una ventana que abres en tu página para mostrar el contenido de otra página web (como un video de YouTube, un mapa de Google Maps o un formulario externo). El contenido dentro del < iframe > es controlado por el sitio de origen.

### Atributos de etiqueta HTML < iframe >  

- src: La URL de la página o recurso que quieres incrustar.  

- width / height: Ancho y alto del iframe en píxeles. También es mejor controlarlo con CSS para responsividad.  

- frameborder: (Obsoleto en HTML5, es mejor usar CSS border: none;) Indica si el iframe debe tener un borde.

- allowfullscreen: Permite que el contenido del iframe (como un video de YouTube) se reproduzca a pantalla completa.  

- loading="lazy": (Nuevo en HTML5) Carga el iframe solo cuando está cerca de la vista del usuario, mejorando el rendimiento.  

## Incrustar video de YouTube  

![Video-YouTube](/07_session/resources/image/youtube-web.png)  


## Incrustar mapa interactivo de Google Maps

![Mapa-Google-Maps](/07_session/resources/image/mapa-web.png)  

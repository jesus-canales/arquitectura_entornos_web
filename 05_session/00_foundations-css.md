# Cascading Style Sheets - CSS

Si **HTML** es el esquelo o la estructura de una página web con **CSS** vamos a darle vida mejorando o personalizadno su apariencia.

**CSS** es el que le dice al navegador cómo se debe ver el contenido HTML. Separa la presentación del contenido, lo cual es una buena práctica en el desarrollo web moderno.

## ¿Qué podemos lograr con CSS?

- Convertir nuestra página HTML en una página visualmente atractiva y profesional.  
- Permite estandarizar el estilo a múltiples páginas de un sitio web, asegurando una apariencia coherente.  
- El sitio web se podrá adaptar correctamente a los diferentes tipos de dispositivos electrónicos.  
- Proporciona un fácil mantenimiento, ya que sólo necesitaremos modificar los archivos de estilo en lugar de ir al contenido de la página.  

## Estructura de selector CSS

Para definir los estilos debemos tener en cuenta la siguiente estructura:  

<div align="center">  

![structure-selector-css](/05_session/resources/images/structure-selector-css.svg)  

</div>

Veamos ahora un ejemplo:

```css
/* Selector que aplica estilo a todos los párrafos en la página web */
p { 
    color: blue; /* Aplica color azul al texto */
    font-size: 16px; /* Aplica tamaño de fuente de 16 píxeles */
}
```

## 3 formas de incluir CSS en un HTML

### CSS en línea

Se aplica de manera directa a un elemento HTML utilizando el atributo style, por ejemplo:  

```css
<strong style="color: #C5172E;">Reducir Costos de Publicidad:</strong> 
```

### CSS interno

Los estilos se definen dentro de la etiqueta < head > de la página HTML, utilizando la etiqueta < style >. Veamos un ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página con CSS Interno</title>
    <style>
        body {
            background-color: lightgray;
        }
        h1 {
            color: green;
        }
    </style>
</head>
<body>
    <h1>Estilos CSS Internos</h1>
    <p>Personalizando la presentación de contenidos.</p>
</body>
</html>
```
El resultado será:

<div align="center">  

![css-intern](/05_session/resources/images/css-intern.png)  

</div>

### CSS externo - ¡RECOMENDADO!

Consiste en crear un archivo exclusivamente con las especificaciones de los estilos, este archivo será de tipo **CSS** por ejemplo: nombre-archivo.css el cual vincularemos con los archivos HTML en la cual vamos a aplicar dichos estilos.  

#### Paso 1 | Crear directorio y archivo html

Vamos a crear una página web con la siguiente estructura de Directorio:

<div align="center">  

![structure-site](/05_session/resources/images/structure-site-html.png)  

</div>  

En el archivo index.html agregamos en el siguiente código:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>James Portocarrero</title>
</head>
<body>
    
    <h1>Hola, soy James!</h1>
    <img src="/images/person-profile.jpg" alt="foto de James">

    <h2>Sobre mí</h2>
    <p>Soy desarrollador web que disfruta de la tecnología y el diseño. Me apasiona aprender y compartir conocimientos.</p>

    <h2>Mis intereses</h2>
    <ul>
        <li>Programación FrontEnd</li>
        <li>Diseño UI/UX</li>
        <li>Fotografía</li>
    </ul>

    <h3>Contáctame a través de: </h3>
    <a href="www.linkedin.com">Linkedin</a> | <a href="www.instragram.com">Instagram</a>
</body>
</html>
```

La página web en el navegador se visualizará de la siguiente forma:

<div align="center">  

![site-james](/05_session/resources/images/site-personal-james.png)  

</div>

#### Paso 2 | Crear archivo CSS

De acuerdo a la estructura de Directorio de Sitio Web vamos a crear dentro de la carpeta **css** un archivo llamado **style.css**

<div align="center">  

![css-extern](/05_session/resources/images/structure-site.png)  

</div>

En este archivo de estilos externos vamos a definir lo siguiente:

```css
body {
    background-color: #f4f4f4;
}

h1 {
    color: #27548A;
    font-size: 2.5em;
}

h2 {
    color: #3A59D1;
    font-size: 1.5em;
}

h3 {
    color: #CB0404;
    font-size: 1em;
}

a {
    text-decoration: none;
}
```

Guarda los cambios realizados.


#### Paso 3 | Vincular CSS con HTML

Abre tu archivo **index.html** y dentro de la etiqueta < head > añade la siguiente línea:  

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>James Portocarrero</title>
    <link rel="stylesheet" href="/css/style.css"> <!-- Vinculación con los estilos -->
</head>
```

Guardamos los cambios realizados y visualizamos los resultados:  

<div align="center">  

![css-extern](/05_session/resources/images/site-html-css.png)  

</div>

##  Recursos

- [colorhunt.co](https://colorhunt.co/)  
- [randomuser.me](https://randomuser.me/photos)
- [undraw.co](https://undraw.co/illustrations)

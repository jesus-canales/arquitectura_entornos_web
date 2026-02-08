# Tipos de Estilos CSS

Veamos ahora los tipos de estilo que le podemos aplicar a los elementos HTML:  

## Selector Universal

Selecciona todos los elementos HTML, es muy útil para establecer estilos básicos globales predeterminados.  

```css
/* Selecciona todos los elementos */
* { 
  margin: 0; 
  padding: 0; 
  font-family: 'Arial', sans-serif; 
  line-height: 1.6; 
}
```

## Selector de Elemento

Estos selectores apuntan a elementos específicos HTML de la página web para aplicar los estilos.  

```css
body {
    background-color: #f4f4f4;
}

h1 {
    color: #27548A;
    font-size: 2.5em;
}

a {
    text-decoration: none;
}

```

## Selector de Clases

Selecciona elementos que tiene un atributo class específico. Puedes utilizar el mismo nombre de clase a varios elementos. Por ejemplo:  

Agregamos la siguiente etiqueta HTML con un nombre de clase:  

```html
<button class="cta-button">Llámame ahora</button>
```

El resultado será el siguiente:

<div align="center">  

![add-button](/04_session/resources/images/add-button.png)  

</div>

En el archivo style.css agregamos los siguientes estilos en base al nombre de la clase del elemento HTML  

```CSS
/* El punto (.) indica que es una clase */
.cta-button { 
  background-color: #CB0404;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
}

```

El resultado será el siguiente:

<div align="center">  

![add-button-style](/04_session/resources/images/add-button-style.png)  

</div>


## Selector de ID

Selecciona un elemento HTML que tiene asignado un atributo **id** específico. El **id** debe ser único en toda la página.

```html
    <div id="hero-section"> <!-- asignamos un id al elemento DIV -->
        <h1>Hola, soy James!</h1>
        <img src="/images/person-profile.jpg" alt="foto de James">
    </div>
```

Ahora vamos a aplicar los estilos al elemento **DIV** cuyo id es **hero-section**:  

```css
/* El numeral (#) indica que es un ID */
#hero-section { 
  background-color: #EAD196;
  padding: 60px 30px;
}

```

Veamos ahora el resultado:  


<div align="center">  

![style-id](/04_session/resources/images/style-css-id.png)  

</div>

##  Recurso

- [ CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_upload)  
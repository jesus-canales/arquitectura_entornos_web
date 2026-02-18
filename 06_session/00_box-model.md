# Modelo de Cajas

En CSS, cada elemento HTML (un párrafo, una imagen, un título, un div, etc.) es tratado como una caja rectangular. El Modelo de Caja describe cómo se componen estas cajas y cómo el navegador calcula su tamaño y el espacio que ocupan en la página.

## Componentes del Modelo de Cajas

**1. Contenido (Content):**
   - Es el área donde se muestra el contenido real del elemento (texto, imágenes, videos).  
   - Su tamaño se define con las propiedades width (ancho) y height (alto).  

**2. Relleno (Padding):**  
   - Es el espacio transparente que rodea el contenido, dentro del borde del elemento.  
   - Añade espacio interno, empujando el contenido lejos del borde.  
   - **Propiedades:** padding-top, padding-right, padding-bottom, padding-left. También puedes usar el atajo padding: 10px; (todos los lados), padding: 10px 20px; (vertical, horizontal), o padding: 10px 20px 30px 40px; (arriba, derecha, abajo, izquierda).

**3. Borde (Border):**  
   - Es una línea que rodea el padding y el contenido. Puedes darle estilo (color, grosor, tipo de línea).  
   - **Propiedades:** border-width, border-style, border-color. También el atajo border: 1px solid black;.

**4. Margen (Margin):**  
   - Es el espacio transparente que rodea el borde del elemento, fuera de la caja.  
   - Crea espacio entre los elementos, separándolos de otros elementos adyacentes.  
   - **Propiedades:** margin-top, margin-right, margin-bottom, margin-left. También el atajo margin: 10px; (todos los lados), margin: 10px 20px; (vertical, horizontal), o margin: 10px 20px 30px 40px; (arriba, derecha, abajo, izquierda).
   
<div align="center">  

![model-box](/05_session/resources/image/css-box-model.png)  

</div>

## Ejemplo paso a paso

1. Crear un proyecto con el nombre **01_bm_element**:  

<div align="center">  

![model-box-demo1](/05_session/resources/image/structure-project-bm.png)  

</div>

2. Agregamos el siguiente código HTML en el archivo **index.html**

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modelo de Cajas - Elemento</title>
    <link rel="stylesheet" href="/css/style.css">
</head>

<body>

    <div class="caja-basica">
        Contenido de mi caja
    </div>

</body>

</html>
```

3. En la carpeta **css** creamos el archivo **style.css**:

<div align="center">  

![model-box-style](/05_session/resources/image/structure-project-bm-style.png)  

</div>

4. En **style.css** agregamos el siguiente código:  

```css
.caja-basica {
    border: 2px solid #00bcd4;
    background-color: #FFE8CD;
    margin: 20px;
    width: 200px;
    height: 100px;
    padding: 50px;
}
```

5. Revisemos los resultados obtenidos:

<div align="center">  

![model-box-style-result](/05_session/resources/image/result-box-model.png)  

</div>

## Propiedad box-sizing

La propiedad box-sizing de los elementos HTML es content-box. Esto significa que cuando defines un width o height, sólo se aplica al contenido. El padding y el border se añaden a ese tamaño, haciendo que la caja real sea más grande de lo que esperabas.

Utilizar la propiedad box-sizing: border-box; es la práctica más moderna y muy útil. El width y el height que defines incluyen el padding y el border, esto hace que el cálculo del tamaño de los elementos sea mucho más intuitivo y predecible.

### Aplicando box-sizing

```css
/* Selector universal: aplica a todos los elementos */
* { 
    box-sizing: border-box;
}
```

### Ejemplo práctico

<div align="center">  

![box-sizing](/05_session/resources/image/box-sizing.png)  

</div>
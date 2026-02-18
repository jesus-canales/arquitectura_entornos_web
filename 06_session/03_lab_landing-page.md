# Landing Page - MovilTech

1. Crear directorio de carpeta y archivos: landing-MovilTech.  
2. Agregar un tipo de fuente dentro de las etiquetas HEAD
3. Asignar el título de página: MovilTech - Concesionario de Autos.
4. Crear el encabezado.
5. Crear la barra de navegación.
6. Crear un panel principal para el contenido.
7. Dentro de la sección principal crear una galería para 6 vehículos con sus respectivos datos.
8. Un espacio para información de promoción y ofertas.
9. Agregar una sección para la información de financiamiento.
10. Agregar el pie de página.

## Wireframe de alta fidelidad

<div align="center">  

![wireframe-moviltech](/05_session/resources/image/wireframe-alta-fidelidad-landing.png)  

</div>

## Manos a la obra con HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <title>MovilTech - Concesionario de Autos</title>
</head>
<body>
    
</body>
</html>

```

```html
<!-- Encabezado -->
    <header class="hero">
        <div class="overlay">
            <h1>Autos del Futuro</h1>
            <p>Tu próximo auto te está esperando</p>
        </div>
    </header>
```

```html
<!-- Barra de navegación -->
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#vehiculos">Vehículos</a></li>
            <li><a href="#financiamiento">Financiamiento</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
```

```html
    <!-- Panel principal -->
    <main>

    </main>
```

```html
    <main>
        <!-- Sección para galería de vehículos -->
        <section class="vehiculos">
            <h2>Vehículos Destacados</h2>
            <div class="galeria-autos">
                <!-- cards con autos y camionetas-->

            </div>
        </section>
    </main>
```


```html
    <!-- cards con autos y camionetas-->
    <!-- Auto Honda Civic 2025 -->
    <article class="card">
        <img src="/image/auto-honda-civic-2025.jpg" alt="Honda Civic 2025">
        <h3>Honda Civic 2025</h3>
        <p>Compacto, eficiente y moderno.</p>
    </article>
```

```html
    <!-- Camioneta Ford Ranger 2025 -->
    <article class="card">
        <img src="/image/ford-ranger-2025.jpg" alt="Ford Ranger 2025">
        <h3>Ford Ranger 4x4</h3>
        <p>Potencia y resistencia para todo tipo de terreno.</p>
    </article>
```

```html
    <!-- Camioneta Kia Sportage 2025 -->
    <article class="card">
        <img src="/image/kia sportage 2025.avif" alt="Kia Sportage 2025">
        <h3>Kia Sportage 2025</h3>
        <p>Confort y tecnología en un SUV familiar.</p>
    </article>
```

```html
    <!-- Auto Corolla -->
    <article class="card">
        <img src="/image/toyota-corolla-2025.jpg" alt="Auto Toyota Corolla 2025">
        <h3>Toyota Corolla</h3>
        <p>Fiabilidad y eficiencia para cada día.</p>
    </article>
```

```html
    <!-- Camioneta Nissan Frontier -->
    <article class="card">
        <img src="/image/nissan-frontier-2025.webp" alt="Camioneta Nissan Frontier 2025">
        <h3>Nissan Frontier 2025</h3>
        <p>Fuerza y estilo para tus aventuras.</p>
    </article>
```

```html
    <!-- Chevrolet Onix -->
    <article class="card">
        <img src="/image/chevrolet-onix-2025.webp" alt="Chevrolet Onix 2025">
        <h3>Chevrolet Onix</h3>
        <p>Moderno, económico y seguro.</p>
    </article>
```
Con este último auto cerramos la galería de autos.

```html
    <!-- Anuncio de promoción -->
    <aside>
        <h3>Promociones</h3>
        <p>Obtén hasta 20% de descuento en tu primera compra.</p>
    </aside>
```

```html
    <!-- Información de Financiamiento -->
    <section id="financiamiento">
        <h2>Opciones de Financiamiento</h2>
        <p>Calcula tu cuota mensual con nuestra herramienta online.</p>
    </section>   
</main>
```


```html
    <!-- Pie de página -->
    <footer>
        <p>© 2025 MovilTech - Lima, Perú</p>
        <p>Contáctanos: autos@moviltech.com | (+51) 999-666-333</p>
    </footer>
```

## Ahora vamos con los estilos (style.css)

```html
    <!-- Agregamos la hoja de estilo -->
    <link rel="stylesheet" href="/css/style.css">
```

```css
/* Definimos los estilos globales */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    color: #333;
}
```

```css
/* Header con imagen de fondo */
.hero {
    background-image: url('/image/banner-moviltech.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 12rem 3rem;
    position: relative;
}
```

```css
/* Panel de sombra azul en el banner */
.hero .overlay {
    background-color: #0e2148a2;
    padding: 6rem;
    border-radius: 10px;
}
```

```css
/* Navegación */
nav {
    background-color: #010e3a;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

nav li {
    margin: 0 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 1rem;
    display: block;
}

nav a:hover {
    background-color: #485460;
}
```

```css
/* Main Content */
main {
    padding: 2rem;
}

section {
    margin-bottom: 2rem;
}
```

```css
/* Galería de Vehículos en Cards */
.galeria-autos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

/* Estilo de cada card */
.galeria-autos .card {
    background: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

/* Efecto cuando se pasa el mouse sobre el card*/
.galeria-autos .card:hover {
    transform: translateY(-5px);
}

/* Adecuación de la imagen al card */
.galeria-autos .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

/* Margen para el nombre del carro */
.galeria-autos .card h3 {
    margin: 0.5rem;
}

/* Margen para el párrafo descriptivo */
.galeria-autos .card p {
    margin: 0 0.5rem 1rem;
}
```

```css
aside {
    background: #dff9fb;
    padding: 1rem;
    border-left: 5px solid #0a3d62;
    margin-bottom: 2rem;
    border-radius: 5px;
}
```

```css
#financiamiento {
    background-color: #eef6ff;
    border-left: 5px solid #007bff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

#financiamiento h2 {
    margin-top: 0;
    color: #0a3d62;
}

#financiamiento p {
    font-size: 1.05rem;
}
```

```css
footer {
    background-color: #010e3a;
    color: white;
    text-align: center;
    padding: 1rem;
}
```
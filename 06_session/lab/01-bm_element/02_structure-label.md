# Etiquetas Semánticas en HTML5

HTML5 introdujo etiquetas semánticas para estructurar el contenido de forma más clara y accesible. 

## ¿Para qué sirven?  

1. Para los Navegadores y Motores de Búsqueda (SEO): Ayudan a los navegadores y a Google a entender mejor la estructura y el contenido de tu página. Esto puede mejorar tu posicionamiento en los resultados de búsqueda.

2. Para la Accesibilidad: Las tecnologías de asistencia (como los lectores de pantalla para personas con discapacidad visual) utilizan estas etiquetas para ayudar a los usuarios a navegar y comprender el contenido de la página de manera más eficiente.

3. Para los Desarrolladores (Mantenibilidad): Hacen que tu código sea mucho más legible y fácil de mantener. Cuando ves un < nav >, sabes que ahí está la navegación; no tienes que adivinar si un < div > con class="menu" es el menú principal o algo más.

## Veamos las principales etiquetas estructurales

1. Etiqueta Cabecera < header >

Representa la cabecera de una página o sección, suele contener el logo, nombre del sitio y menú de navegación. En una página web puede haber múltiples cabeceras distribuidas en secciones o artículos.

```html
<header>
  <h1>Concesionario Autos del Norte</h1>
  <p>Tu mejor opción en autos nuevos y usados</p>
</header>
```

2. Etiqueta de Navegación < nav >

Define un área de navegación, la cual contiene los enlaces de un menú. 

```html
<nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Galería de Autos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
```

3. Etiqueta de Contenido Principal < main >

Representa el contenido principal de la página, sólo debe haber un < main > por página HTML.

```html
<main>
    <section class="hero-section"> </section>
    <section class="featured-vehicles"> </section>
    <section class="current-promotions"> </section>
    <section class="about-us-summary"> </section>
</main>
```

4. Etiqueta para agrupar contenido temático < section >

Representa una sección genérica de un documento o aplicación, es decir, agrupa contenido temático de contenido. Puede contener artículos, encabezados o contenido agrupado.

```html
<section id="promociones">
    <h2>Promociones del mes</h2>
    <p>Obtén 10% de descuento en modelos seleccionados</p>
</section>
```

5. Etiqueta para contenido independiente y reutilizable < article >

Representa una porción de contenido que es independiente, loq eu significa que podría distribuirse o reutilizarse por sí sola, por ejemplo: una tarjeta, noticia o post.

```html
<article>
    <h3>Chevrolet Tracker</h3>
    <p>Modelo 2021, excelente estado.</p>
</article>
```

6. Etiqueta para contenido Tangencial o Relacionado < aside >

Representa contenido complementario, como barras laterales, publicidad o enlaces relacionados.

```html
<aside>
    <h3>Financiamiento</h3>
    <p>Consulta nuestras opciones de crédito.</p>
</aside>
```

7. Etiqueta para Pie de página < footer >

Representa el pie de página. Contiene información de contacto, redes sociales, derechos, etc.

```html
<footer>
    <p>&copy; 2025 Mi Portafolio Personal. Todos los derechos reservados.</p>
    <nav>
        <a href="#">Política de Privacidad</a>
        <a href="#">Mapa del Sitio</a>
    </nav>
</footer>
```
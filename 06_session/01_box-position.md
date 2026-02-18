# Posicionamiento de cajas con CSS

Después de entender el Modelo de Caja (cómo se construyen tus elementos), el siguiente paso es aprender a posicionarlos. Esto es como decidir dónde va cada mueble en una habitación, o cómo se superponen las capas de un pastel. El posicionamiento CSS te da el control sobre la ubicación de tus elementos en la página.

## Posicionamiento CSS

Es la forma en que le dices al navegador cómo y dónde debe colocar un elemento HTML en la pantalla. Puedes moverlo de su lugar "normal", superponerlo con otros elementos o incluso hacer que se quede fijo mientras el usuario hace scroll. La propiedad principal para esto es position.

## 5 modos de posicionamiento

**1. position: static; (El Modo Por Defecto)**    

Es el comportamiento normal y predeterminado de todos los elementos HTML. Los elementos se colocan uno tras otro, de izquierda a derecha y de arriba a abajo, siguiendo el flujo natural del documento. ¿Cómo funciona? El navegador decide su posición.

**Importante:** Las propiedades de desplazamiento (top, right, bottom, left) no tienen ningún efecto en elementos con position: static;.

**Ejemplo:**

**HTML**
```html
    <div class="caja-estatica">Caja Estática 1</div>
    <div class="caja-estatica">Caja Estática 2</div>
    <p>Este es un párrafo en el flujo normal.</p>
```

**CSS**
```css
.caja-estatica {
    position: static;
    width: 150px;
    height: 50px;
    background-color: #a7d9f7;
    border: 2px solid #3498db;
    margin: 30px;
    /* Solo para separarlas un poco */
    text-align: center;
    line-height: 50px;
    /* Para centrar el texto verticalmente */
    top: 200px; left: 200px; 
    /* ¡Estas propiedades NO HARÁN NADA aquí! */
}
```

**Resultado:** Las cajas aparecerán una debajo de la otra, siguiendo el orden en el que están escritas en el HTML.

**2. position: relative; (Moverse desde su Lugar Original)**

El elemento se posiciona primero en el flujo normal del documento (como static). Luego, puedes moverlo de su posición original usando top, right, bottom, left. Se mueve en relación a sí mismo (su posición original).

**Importante:** El espacio que el elemento ocupaba en el flujo normal sigue reservado. Otros elementos de la página se comportarán como si el elemento relative aún estuviera en su lugar original.  

**Ejemplo: **

**HTML**
```html
    <div class="contenedor-flujo">
        <div class="caja-flujo">Caja Normal</div>
        <div class="caja-relativa">Caja Relativa (¡Me muevo!)</div>
        <div class="caja-flujo">Otra Caja Normal</div>
    </div>
```

**CSS**

```css
.contenedor-flujo {
    border: 2px dashed #ccc;
    padding: 20px;
    margin-bottom: 50px;
}

.caja-flujo {
    width: 150px;
    height: 50px;
    background-color: #d4edda;
    border: 1px solid #28a745;
    margin: 10px;
    text-align: center;
    line-height: 50px;
}

.caja-relativa {
    position: relative;
    /* ¡Activamos el modo relativo! */
    top: 20px;
    /* Me muevo 20px hacia abajo de mi posición original */
    left: 30px;
    /* Me muevo 300px a la derecha de mi posición original */
    background-color: #fff3cd;
    border: 1px solid #ffc107;
    width: 300px;
    height: 50px;
    margin: 10px;
    /* El margen sigue afectando su posición original */
    text-align: center;
    line-height: 50px;
}
```

**Resultado:** Verás que la "Caja Relativa" se desplaza, pero la "Otra Caja Normal" no se mueve para ocupar el espacio vacío que dejó la caja relativa. Es como si la caja relativa fuera un fantasma que se mueve, pero su cuerpo sigue ocupando el espacio.

**3. position: absolute; (Posicionamiento Flotante y Preciso)**  

El elemento se saca completamente del flujo normal del documento. Es como si flotara por encima del resto del contenido. Se posiciona en relación con su ancestral posicionado más cercano.

Un "ancestral posicionado" es cualquier elemento padre, abuelo, etc., que tenga position: relative, absolute, fixed o sticky. Si no encuentra ningún ancestral posicionado, se posiciona en relación con el < body > del documento.

**Importante:** Cuando un elemento es absolute, el espacio que ocupaba en el flujo normal no se reserva. Otros elementos se moverán para llenar ese vacío.  

**Ejemplo: **

**HTML**
```html
    <div class="tarjeta-producto-con-insignia">
        <img src="/image/auto-audi.jpg" alt="auto-audi" style="width: 100%;">
        <span class="insignia-nuevo">¡NUEVO!</span>
        <h3>BMW 520i Executive</h3>
        <p>Experimente el epítome de la elegancia.</p>
    </div>
```

**CSS**
```css
.tarjeta-producto-con-insignia {
    position: relative;
    /* ¡CLAVE! Hacemos que el padre sea posicionado */
    width: 300px;
    background-color: #B1F0F7;
    border-radius: 8px;
    box-shadow: 0 4px 10px #758694;
    margin: 50px auto;
    /* Centrar la tarjeta para el ejemplo */
    overflow: hidden;
    /* Para que la insignia no se salga si es muy grande */
    text-align: center;
    padding-bottom: 20px;
    /* Espacio para el contenido */
}

.tarjeta-producto-con-insignia img {
    width: 100%;
    height: auto;
    display: block;
}

.insignia-nuevo {
    position: absolute;
    /* ¡Activamos el modo absoluto! */
    top: 10px;
    /* A 10px del borde superior del padre (.tarjeta-producto-con-insignia) */
    right: 10px;
    /* A 10px del borde derecho del padre */
    background-color: #ff6f61;
    /* Color de la insignia */
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8em;
    font-weight: bold;
    z-index: 10;
    /* Asegura que esté por encima de la imagen */
}

.tarjeta-producto-con-insignia h3,
.tarjeta-producto-con-insignia p {
    padding: 0 15px;
    /* Relleno para el texto dentro de la tarjeta */
    margin-top: 15px;
}
```

**Resultado:** La insignia "¡NUEVO!" se superpondrá perfectamente en la esquina superior derecha de la tarjeta, sin afectar el flujo del texto o la imagen.

**4. position: fixed; (Elementos que No se Mueven con el Scroll)**  

El elemento se saca completamente del flujo normal del documento. Se posiciona siempre en relación con la ventana del navegador (viewport). No importa cuánto scroll haga el usuario, el elemento permanecerá en la misma posición en la pantalla.

Usos Comunes: Barras de navegación fijas, botones de "Volver arriba", banners de cookies, botones de chat flotantes.

**Ejemplo:**

**HTML**
```html
<header class="barra-navegacion-fija">
        <div class="logo">MovilTech</div>
        <nav>
            <a href="#">Acerca de</a>
            <a href="#">Galería</a>
            <a href="#">Contacto</a>
        </nav>
    </header>

    <div class="contenido-pagina">
        <h2>Bienvenidos a MovilTech</h2>
        <p>Este es un contenido largo para demostrar el scroll.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <p>Mucho más contenido...</p>
        <p>Fin del contenido.</p>
    </div>
```

```css
body {
    margin: 0;
    /* Reiniciar el margen del body */
    font-family: Arial, sans-serif;
}

.barra-navegacion-fija {
    position: fixed;
    /* ¡Se mantiene fijo en la pantalla! */
    top: 0;
    /* Pegado al borde superior de la ventana */
    left: 0;
    /* Pegado al borde izquierdo de la ventana */
    width: 90%;
    /* Ocupa todo el ancho de la ventana */
    background-color: #000957;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px #131010;
    z-index: 1000;
    /* Asegura que esté por encima de todo lo demás */
}

.barra-navegacion-fija .logo {
    font-weight: bold;
    font-size: 1.5em;
}

.barra-navegacion-fija nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}

.barra-navegacion-fija nav a:hover {
    background-color: #174a7e;
    border-radius: 4px;
}

/* MUY IMPORTANTE: Compensar el espacio que la barra fija "quita" del flujo */
.contenido-pagina {
    padding-top: 70px;
    /* Ajusta este valor al alto de tu barra de navegación fija */
    padding-left: 30px;
    padding-right: 30px;
}
```

**Resultado:** Al hacer scroll en la página, la barra de navegación permanecerá siempre visible en la parte superior.

**5. position: sticky; (El Elemento "Pegajoso")**

Es un híbrido entre relative y fixed. El elemento se comporta como relative (en el flujo normal) hasta que su posición de desplazamiento (definida por top, right, bottom, left) alcanza un cierto punto en la ventana del navegador. Una vez que lo alcanza, se comporta como fixed, "pegándose" a la pantalla.

**Usos Comunes:** Barras laterales que se pegan al hacer scroll, encabezados de tabla que se mantienen visibles, menús de navegación contextuales.

**Ejemplo:**

**HTML**
```html
    <div class="layout-con-sidebar-sticky">
        <main class="contenido-principal-sticky">
            <h2>Sección Principal del Contenido</h2>
            <p>Este es el contenido principal de la página. La barra lateral a la derecha se "pegará" cuando llegues a
                cierto punto al hacer scroll.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
                quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                doloribus asperiores repellat.</p>
            <p>Mucho más contenido para que puedas seguir haciendo scroll...</p>
            <p>Fin del contenido principal.</p>
        </main>
        <aside class="sidebar-pegajosa-ejemplo">
            <h4>Categorías de Vehículos</h4>
            <ul>
                <li><a href="#">Sedans</a></li>
                <li><a href="#">SUVs</a></li>
                <li><a href="#">Camionetas</a></li>
                <li><a href="#">Lujo</a></li>
                <li><a href="#">Eléctricos</a></li>
            </ul>
            <p>Más información relevante aquí.</p>
        </aside>
    </div>
```

**CSS**
```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.layout-con-sidebar-sticky {
  display: flex; /* Usamos Flexbox para el layout de dos columnas */
  justify-content: center;
  gap: 40px; /* Espacio entre el contenido principal y la sidebar */
  padding: 20px;
  min-height: 200vh; /* Aseguramos suficiente altura para el scroll */
  background-color: #f8f8f8;
}

.contenido-principal-sticky {
  flex: 2; /* Ocupa 2 partes del espacio flexible */
  max-width: 700px;
  background-color: white;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.sidebar-pegajosa-ejemplo {
  position: sticky; /* ¡Este es el elemento pegajoso! */
  top: 20px; /* Se pegará cuando su borde superior esté a 20px del borde superior del viewport */
  flex: 1; /* Ocupa 1 parte del espacio flexible */
  max-width: 300px;
  background-color: #e0f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-self: flex-start; /* Alinea la sidebar al inicio del contenedor flex */
  height: fit-content; /* Importante: la altura se ajusta al contenido para que sticky funcione bien */
}

.sidebar-pegajosa-ejemplo h4 {
  margin-bottom: 15px;
  color: #0c3057;
}

.sidebar-pegajosa-ejemplo ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.sidebar-pegajosa-ejemplo ul li {
  margin-bottom: 10px;
}

.sidebar-pegajosa-ejemplo ul li a {
  text-decoration: none;
  color: #3498db;
  transition: color 0.3s ease;
}

.sidebar-pegajosa-ejemplo ul li a:hover {
  color: #217dbb;
}
```

**Resultado:** Al hacer scroll, la barra lateral se desplazará con la página hasta que su parte superior esté a 20px del borde superior de la ventana. En ese momento, se "pegará" y permanecerá visible mientras el usuario sigue desplazándose por el contenido principal. Una vez que el final del contenido principal pasa el final de la sidebar, esta se "despegará" y se moverá con el resto del footer.
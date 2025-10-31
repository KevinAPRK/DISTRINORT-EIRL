# GUÍA DE PERSONALIZACIÓN RÁPIDA

## 🔧 Cambios Más Comunes

### 1️⃣ Cambiar Número de WhatsApp

**Archivo:** `index.html`

Busca y reemplaza **TODOS** los `51987246711` con tu número real:

```html
<!-- Ejemplo -->
https://wa.me/51987654321?text=...
```

**Ubicaciones:**
- Botón hero (línea ~52)
- Productos (4 botones, líneas ~170-210)
- Asesor interactivo (línea ~240)
- Botón flotante (línea ~390)
- Footer (línea ~350)

### 2️⃣ Cambiar Información de Contacto

**Archivo:** `index.html` - Sección Footer (línea ~340)

```html
<li>
    <i class="fas fa-map-marker-alt"></i>
    <span>TU DIRECCIÓN AQUÍ</span>
</li>
<li>
    <i class="fas fa-phone"></i>
    <span>TU TELÉFONO</span>
</li>
<li>
    <i class="fas fa-envelope"></i>
    <span>TU EMAIL</span>
</li>
```

### 3️⃣ Actualizar Redes Sociales

**Archivo:** `index.html` - Footer (línea ~290)

```html
<a href="https://facebook.com/TU_PAGINA" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>
<a href="https://instagram.com/TU_CUENTA" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

### 4️⃣ Modificar Colores del Sitio

**Archivo:** `css/styles.css` (líneas 1-15)

```css
:root {
    --color-primary: #FF0000;    /* Color principal (rojo) */
    --color-secondary: #0000FF;  /* Color secundario (azul) */
    --color-dark: #1a1a2e;       /* Texto oscuro */
    --color-light: #ffffff;      /* Blanco */
    --color-gray: #f5f5f5;       /* Fondo gris */
}
```

### 5️⃣ Cambiar Textos del Hero

**Archivo:** `index.html` (línea ~46)

```html
<h1 class="hero-title">TU TÍTULO AQUÍ</h1>
<p class="hero-subtitle">Tu subtítulo aquí</p>
```

### 6️⃣ Editar Productos

**Archivo:** `index.html` - Sección Productos (línea ~150)

Para cada producto:
```html
<div class="product-card">
    <div class="product-image">
        <img src="images/TU-IMAGEN.jpg" alt="Nombre Producto">
    </div>
    <div class="product-info">
        <h3>Nombre del Producto</h3>
        <p>Descripción breve del producto</p>
        <a href="https://wa.me/51XXX?text=Mensaje" class="btn btn-secondary">
            Consultar
        </a>
    </div>
</div>
```

### 7️⃣ Modificar Credenciales

**Archivo:** `index.html` - Sección Credenciales (línea ~115)

Agregar/quitar ítems:
```html
<div class="credential-item">
    <i class="fas fa-ICONO-AQUI"></i>
    <span>Texto de la credencial</span>
</div>
```

**Iconos disponibles:** https://fontawesome.com/icons

### 8️⃣ Actualizar Testimonios

**Archivo:** `index.html` - Sección Testimonios (línea ~250)

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"Texto del testimonio..."</p>
    <div class="testimonial-author">
        <strong>Nombre Cliente</strong>
        <span>Descripción</span>
    </div>
</div>
```

### 9️⃣ Agregar/Editar Artículos del Blog

**Crear nuevo artículo:**
1. Copia `blog/cabello-fuerte.html`
2. Renombra (ej: `blog/mi-articulo.html`)
3. Edita el contenido
4. Agrega tarjeta en `index.html` sección blog (línea ~300)

```html
<article class="blog-card">
    <div class="blog-image">
        <img src="images/blog-mi-articulo.jpg" alt="Título">
    </div>
    <div class="blog-content">
        <span class="blog-date">
            <i class="far fa-calendar"></i> Fecha
        </span>
        <h3>TÍTULO DEL ARTÍCULO</h3>
        <p>Resumen breve...</p>
        <a href="blog/mi-articulo.html" class="blog-link">
            Leer más <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

### 🔟 Cambiar Fuentes

**Archivo:** `css/styles.css`

Buscar en Google Fonts y actualizar:
```css
@import url('https://fonts.googleapis.com/css2?family=TU-FUENTE&display=swap');

:root {
    --font-primary: 'Tu Fuente Títulos', sans-serif;
    --font-secondary: 'Tu Fuente Texto', sans-serif;
}
```

## 📱 Responsive: Puntos de Quiebre

Si necesitas ajustar el responsive, edita `css/styles.css`:

```css
/* Tablets */
@media (max-width: 1024px) { ... }

/* Móviles */
@media (max-width: 768px) { ... }

/* Móviles pequeños */
@media (max-width: 480px) { ... }
```

## 🎨 Agregar Efectos Adicionales

### Animación de Entrada Suave

Ya incluido en `js/main.js` - Elementos se animan al hacer scroll.

### Cambiar Velocidad de Animaciones

**Archivo:** `css/styles.css` (línea ~9)

```css
:root {
    --transition: all 0.3s ease; /* Cambiar 0.3s a tu preferencia */
}
```

## 🔍 SEO: Metatags

**Archivo:** `index.html` (líneas 5-8)

```html
<meta name="description" content="Tu descripción aquí (máx 160 caracteres)">
<meta name="keywords" content="palabra1, palabra2, palabra3">
<title>Tu Título | DISTRINORT E.I.R.L</title>
```

## 🚀 Velocidad: Optimización de Imágenes

Antes de subir imágenes:
1. **Redimensiona** al tamaño exacto necesario
2. **Comprime** en https://tinypng.com
3. **Convierte** a WebP (opcional, para mejor rendimiento)

## 📊 Google Analytics (Opcional)

**Archivo:** `index.html` - Antes de `</head>`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Formulario de Contacto Real (Avanzado)

Actualmente usa WhatsApp. Si quieres un formulario que envíe emails:

### Opción 1: Formspree (Gratis)
1. Crea cuenta en https://formspree.io
2. Obtén tu endpoint
3. Agrega formulario en `index.html`

### Opción 2: EmailJS (Gratis)
1. Crea cuenta en https://emailjs.com
2. Configura servicio
3. Agrega código JavaScript

### Opción 3: Backend PHP (Requiere servidor)
Archivo `contact.php` con phpmailer.

## ❓ Preguntas Frecuentes

**P: ¿Cómo agrego más productos?**
R: Copia un `<div class="product-card">...</div>` completo y edita su contenido.

**P: ¿Puedo cambiar el orden de las secciones?**
R: Sí, solo corta y pega los bloques `<section>` en `index.html`.

**P: ¿El sitio funciona sin internet?**
R: Necesita conexión para cargar fuentes de Google y Font Awesome. Para uso offline, descarga estos recursos.

**P: ¿Cómo hago una copia de seguridad?**
R: Copia toda la carpeta `DISTRINORT EIRL` a otro lugar seguro.

---

**¿Necesitas más ayuda?** Revisa el `README.md` o consulta la documentación de HTML/CSS.

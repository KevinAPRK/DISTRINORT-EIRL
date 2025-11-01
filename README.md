# DISTRINORT E.I.R.L - Sitio Web Corporativo

## 📋 Descripción

Sitio web informativo profesional para DISTRINORT E.I.R.L, empresa especializada en productos de cuidado capilar. Diseño moderno, responsive y optimizado inspirado en sitios como Kativa.

## 🎨 Características

- **Diseño Responsive**: Compatible con móviles, tablets y escritorio
- **9 Secciones Principales**:
  1. Header con navegación sticky
  2. Hero con llamada a la acción
  3. Categorías de productos
  4. Barra de credenciales
  5. Productos destacados
  6. Asesor interactivo
  7. Testimonios de clientes
  8. Blog "Mundo DISTRINORT"
  9. Footer completo con información de contacto

- **Integración WhatsApp**: Botones directos para contacto y consultas
- **Animaciones suaves**: Efectos al hacer scroll
- **SEO optimizado**: Meta tags y estructura semántica
- **Botón flotante de WhatsApp**: Siempre visible para contacto rápido

## 🎨 Colores de Marca

- **Rojo primario**: #FF0000 (del logo)
- **Azul secundario**: #0000FF (del logo)
- **Gris oscuro**: #1a1a2e
- **Blanco**: #ffffff
- **Gris claro**: #f5f5f5

## 📁 Estructura de Archivos

```
DISTRINORT EIRL/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos principales
├── js/
│   └── main.js            # JavaScript interactivo
├── images/                # Carpeta para imágenes
│   ├── logo.png          # Logo de DISTRINORT
│   ├── hero-bg.jpg       # Imagen del hero
│   ├── cuidado-diario.jpg
│   ├── tratamientos.jpg
│   ├── cambio-look.jpg
│   ├── shampoo.jpg
│   ├── tratamiento.jpg
│   ├── argan-oil.jpg
│   ├── alisado.jpg
│   ├── productos-variados.jpg
│   ├── blog-cabello-fuerte.jpg
│   └── blog-proteger-cabello.jpg
├── blog/                  # Artículos del blog
│   ├── cabello-fuerte.html
│   └── proteger-cabello.html
└── README.md              # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Uso Local Simple

1. **Descarga el proyecto completo**
2. **Abre `index.html`** directamente en tu navegador
3. ¡Listo! El sitio funcionará localmente

### Opción 2: Con Laragon (ya configurado)

El proyecto ya está en `c:\laragon\www\DISTRINORT EIRL\`

1. **Inicia Laragon**
2. **Accede a**: `http://localhost/DISTRINORT%20EIRL/`
3. O crea un virtual host para una URL personalizada

### Opción 3: Servidor Local con Python

```bash
# Navega a la carpeta del proyecto
cd "c:\laragon\www\DISTRINORT EIRL"

# Inicia servidor (Python 3)
python -m http.server 8000

# Abre en navegador: http://localhost:8000
```

### Opción 4: Servidor Local con Node.js

```bash
# Instala http-server globalmente
npm install -g http-server

# Navega a la carpeta
cd "c:\laragon\www\DISTRINORT EIRL"

# Inicia servidor
http-server -p 8000

# Abre en navegador: http://localhost:8000
```

## 📝 Configuración Personalizada

### Cambiar Número de WhatsApp

Busca y reemplaza `51912173821` en `index.html` con tu número real:

```html
<!-- Ejemplo -->
https://wa.me/51987654321?text=Hola...
```

### Agregar Imágenes Reales

1. Coloca tus imágenes en la carpeta `images/`
2. Usa nombres descriptivos (ej: `hero-mujer-cabello.jpg`)
3. Las imágenes recomendadas:
   - **Logo**: 500x500px (PNG con fondo transparente)
   - **Hero**: 1920x600px
   - **Categorías**: 800x800px
   - **Productos**: 600x600px
   - **Blog**: 1200x600px

### Modificar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #FF0000;    /* Cambia aquí */
    --color-secondary: #0000FF;  /* Cambia aquí */
}
```

## 🌐 Despliegue en Internet

### Opción 1: Netlify (Gratis y Rápido)

1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta del proyecto a Netlify Drop
3. Tu sitio estará en línea en segundos con URL: `tu-sitio.netlify.app`

### Opción 2: GitHub Pages

```bash
# Inicializa repositorio
git init
git add .
git commit -m "Initial commit"

# Crea repositorio en GitHub y sube
git remote add origin https://github.com/tu-usuario/distrinort.git
git push -u origin main

# Activa GitHub Pages en Settings > Pages
```

### Opción 3: Hosting Tradicional (cPanel)

1. Comprime todos los archivos en un `.zip`
2. Sube a tu hosting mediante FTP o File Manager
3. Extrae en la carpeta `public_html` o `www`
4. Accede mediante tu dominio

## 📱 Funcionalidades Interactivas

### Navegación Móvil
- Menú hamburguesa responsive
- Cierre automático al seleccionar opción
- Smooth scroll a secciones

### Botón WhatsApp Flotante
- Siempre visible en la esquina inferior derecha
- Animación de pulso para llamar atención
- Mensaje predefinido configurable

### Animaciones
- Fade-in al hacer scroll
- Hover effects en tarjetas
- Transiciones suaves

## 🔧 Mantenimiento

### Agregar Nuevos Productos

Edita `index.html` en la sección `<!-- PRODUCTOS DESTACADOS -->`:

```html
<div class="product-card">
    <div class="product-image">
        <img src="images/nuevo-producto.jpg" alt="Nuevo Producto">
    </div>
    <div class="product-info">
        <h3>Nuevo Producto</h3>
        <p>Descripción del producto</p>
        <a href="https://wa.me/51912173821?text=Me%20interesa%20Nuevo%20Producto" 
           class="btn btn-secondary" target="_blank">
            Consultar
        </a>
    </div>
</div>
```

### Agregar Artículos al Blog

1. Crea un nuevo archivo HTML en `blog/`
2. Copia la estructura de `cabello-fuerte.html`
3. Actualiza `index.html` en la sección blog con el nuevo artículo

### Actualizar Testimonios

Edita la sección `<!-- TESTIMONIOS -->` en `index.html`:

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <!-- Repite según calificación -->
    </div>
    <p class="testimonial-text">"Tu testimonio aquí..."</p>
    <div class="testimonial-author">
        <strong>Nombre Cliente</strong>
        <span>Descripción</span>
    </div>
</div>
```

## 📊 SEO y Analytics

### Google Analytics (Opcional)

Agrega antes de `</head>` en `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID-AQUI');
</script>
```

### Meta Tags para Redes Sociales

Ya incluidos en `index.html`. Personaliza:

```html
<meta property="og:title" content="DISTRINORT E.I.R.L">
<meta property="og:description" content="Tu descripción">
<meta property="og:image" content="url-de-tu-imagen">
```

## 🎯 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 📞 Soporte

Para cualquier consulta sobre el sitio web:

- **Email**: info@distrinort.com
- **WhatsApp**: +51 999 999 999
- **Dirección**: Av. Principal 123, Lima, Perú

## 📄 Licencia

© 2025 DISTRINORT E.I.R.L. Todos los derechos reservados.

---

**Desarrollado con ❤️ para DISTRINORT E.I.R.L**

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent, ProductCard } from '../../components/product-card/product-card.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `

    <!-- ═══════════════════════ HERO ═══════════════════════ -->
    <section class="hero">
      <!-- Decoración de fondo -->
      <div class="hero__bg">
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
        <div class="hero__grid-lines"></div>
      </div>

      <div class="container hero__inner">
        <!-- <div class="hero__content">
          <span class="hero__pill">✦ Nuevo — Versión 2.0 disponible</span>

          <h1 class="hero__title">
            El producto que<br>
            <em class="hero__title-accent">transforma</em> tu<br>
            experiencia
          </h1>

          <p class="hero__description">
            Diseñado con precisión, construido para durar.
            Descubre por qué miles de personas eligen ProductName
            para simplificar su día a día.
          </p>

          <div class="hero__cta">
            <a href="#productos" class="btn btn--primary btn--lg">
              Ver productos ↓
            </a>
            <a href="#nosotros" class="btn btn--outline btn--lg">
              Conocer más
            </a>
          </div>

          <div class="hero__stats">
            <div class="hero__stat" *ngFor="let s of stats">
              <span class="hero__stat-value">{{ s.value }}</span>
              <span class="hero__stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div> -->

        <div class="hero__visual">
          <div class="hero__image">
          <img
            src="assets/hero.png"
            alt="Ethernalis"
            class="hero__img"
          />
        </div>
          <div class="hero__visual-ring hero__visual-ring--1"></div>
          <div class="hero__visual-ring hero__visual-ring--2"></div>
        </div>
      </div>

      <div class="hero__scroll-indicator">
        <div class="hero__scroll-arrow">
          <span></span>
          <span></span>
        </div>
        <div class="hero__scroll-text">Scroll</div>
      </div>
    </section>

    

    <!-- ═══════════════════════ FEATURES ═══════════════════════ -->
    <section class="features section" id="caracteristicas">
      <div class="container">
        <div class="features__header">
          <span class="section-label">Por qué elegirnos</span>
          <h2 class="section-title">Características que<br>marcan la diferencia</h2>
          <p class="section-subtitle">
            Cada detalle ha sido cuidadosamente pensado para ofrecerte
            la mejor experiencia posible.
          </p>
        </div>

        <div class="features__grid">
          <article class="feature-card"
         *ngFor="let f of features; let i = index"
         [style.animation-delay]="(i * 0.1) + 's'">

        <div class="feature-card__image">
          <img [src]="f.icon" alt="{{ f.title }}" />
        </div>

        <h3 class="feature-card__title">{{ f.title }}</h3>
        <p class="feature-card__text">{{ f.description }}</p>

      </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════ PRODUCTOS (CARDS) ═══════════════════════ -->
    <!-- <section class="products section" id="productos">
      <div class="container">
        <div class="products__header">
          <span class="section-label">Catálogo</span>
          <h2 class="section-title">Nuestros productos</h2>
          <p class="section-subtitle">
            Explora nuestra colección. Añade aquí las imágenes reales
            de tus productos.
          </p>
        </div>

        <div class="products__grid">
          <app-product-card
            *ngFor="let p of products; let i = index"
            [product]="p"
            [featured]="i === 0"
          />
        </div>

        <div class="products__cta">
          <a href="#contacto" class="btn btn--primary btn--lg">Solicitar información</a>
        </div>
      </div>
    </section> -->

    <!-- ═══════════════════════ TESTIMONIAL / BANNER ═══════════════════════ -->
    <section class="banner">
      <div class="container banner__inner">
        <div class="banner__glow"></div>
        <span class="banner__emoji">✦</span>
        <h2 class="banner__title">¿Listo para empezar?</h2>
        <p class="banner__text">
          Únete a miles de clientes satisfechos y lleva tu experiencia al siguiente nivel.
        </p>
        <a href="#contacto" class="btn btn--primary btn--lg">Contactar ahora</a>
      </div>
    </section>

  `,
  styles: [`

    /* ─── HERO ──────────────────────────────── */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: var(--navbar-height);
      overflow: hidden;

      &__bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      &__orb {
        position: absolute;
        border-radius: var(--radius-full);
        filter: blur(80px);

        &--1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
          top: -100px; left: -100px;
          animation: float 8s ease-in-out infinite;
        }

        &--2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, var(--color-secondary-glow) 0%, transparent 70%);
          bottom: -50px; right: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }
      }

      &__grid-lines {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(var(--color-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
      }

      &__inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-2xl);
        align-items: center;
        padding-top: var(--space-2xl);
        padding-bottom: var(--space-2xl);
        position: relative;
        z-index: 1;

        @media (max-width: 900px) {
          grid-template-columns: 1fr;
          text-align: center;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-md);
        animation: fadeUp 0.8s ease both;

        @media (max-width: 900px) { align-items: center; }
      }

      &__pill {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.9rem;
        background: rgba(124,109,250,0.12);
        border: 1px solid rgba(124,109,250,0.3);
        border-radius: var(--radius-full);
        font-family: var(--font-display);
        font-size: var(--text-xs);
        font-weight: 600;
        color: var(--color-accent-light);
        letter-spacing: 0.04em;
      }

      &__title {
        font-family: var(--font-display);
        font-size: clamp(2.5rem, 6vw, var(--text-7xl));
        font-weight: 800;
        line-height: 1.05;
        letter-spacing: -0.03em;
        color: var(--color-text);
      }

      &__title-accent {
        font-style: italic;
        background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      &__description {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        line-height: 1.7;
        max-width: 480px;
      }

      &__cta {
        display: flex;
        gap: var(--space-sm);
        flex-wrap: wrap;

        @media (max-width: 900px) { justify-content: center; }
      }

      &__stats {
        display: flex;
        gap: var(--space-xl);
        padding-top: var(--space-md);
        border-top: 1px solid var(--color-border);
        width: 100%;

        @media (max-width: 900px) { justify-content: center; }
      }

      &__stat {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        &-value {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: -0.03em;
        }

        &-label {
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
      }

      &__visual {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeUp 0.8s 0.2s ease both;

        @media (max-width: 900px) { order: -1; }
      }

      &__mockup {
        width: 340px;
        height: 340px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        animation: float 6s ease-in-out infinite;
        box-shadow: var(--shadow-lg), 0 0 60px var(--color-accent-glow);

        @media (max-width: 480px) { width: 260px; height: 260px; }

        &-inner {
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        &-icon {
          font-size: 3rem;
          color: var(--color-accent);
          display: block;
          animation: pulse-glow 3s ease-in-out infinite;
        }

        &-hint {
          font-size: var(--text-xs);
          color: var(--color-text-faint);
        }
      }

      &__visual-ring {
        position: absolute;
        border-radius: var(--radius-full);
        border: 1px dashed var(--color-border);

        &--1 {
          width: 440px; height: 440px;
          animation: spin 30s linear infinite;
          @media (max-width: 480px) { width: 320px; height: 320px; }
        }

        &--2 {
          width: 540px; height: 540px;
          animation: spin 50s linear infinite reverse;
          border-color: rgba(124,109,250,0.08);
          @media (max-width: 480px) { width: 380px; height: 380px; }
        }
      }

      &__scroll {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-size: var(--text-xs);
        color: var(--color-text-faint);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        animation: fadeIn 1s 1s ease both;

        &-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--color-text-faint), transparent);
          animation: scrollLine 1.5s ease-in-out infinite;
        }
      }
      .hero__image {
        height: auto;
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        z-index: 1;
        box-shadow: var(--shadow-lg), 0 0 80px var(--color-accent-glow);
        animation: float 6s ease-in-out infinite;
      }

      .hero__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transform: scale(1.02);
      }
      .hero__image::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.08);
        pointer-events: none;
      }
      /* responsive */
      @media (max-width: 480px) {
  .hero__visual {
    width: 100%;
  }

  .hero__image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .hero__img {
    width: 100%;
    height: auto;
    object-fit: contain;
    transform: none;
  }

  .hero__visual-ring {
    display: none;
  }
}
    }
    .editorial {
  position: relative;
  background: var(--color-bg);
}

.editorial__inner {
  max-width: 100vw;
  margin: 0 auto;
  padding: var(--space-2xl) 0;
}

.editorial .section-title {
  margin-bottom: var(--space-lg);
}

.editorial__content {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.editorial__content p {
  font-size: clamp(1rem, 1.2vw, 1.08rem);
  line-height: 1.95;
  color: var(--color-text-muted);
  letter-spacing: 0.01em;
  margin: 0;
}

.editorial__content strong {
  color: var(--color-text);
  font-weight: 700;
}

@media (max-width: 768px) {
  .editorial__inner {
    max-width: 100%;
  }

  .editorial__content p {
    line-height: 1.8;
  }
}
.hero__scroll-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-faint);
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  animation: fadeIn 1s 1.2s ease both;
}

/* Flecha */
.hero__scroll-arrow {
  position: relative;
  width: 24px;
  height: 24px;
}

.hero__scroll-arrow span {
  position: absolute;
  width: 10px;
  height: 2px;
  background: var(--color-text-faint);
  border-radius: 2px;
  animation: arrowBounce 1.5s infinite;
}

.hero__scroll-arrow span:first-child {
  transform: rotate(45deg);
  left: 2px;
  top: 10px;
}

.hero__scroll-arrow span:last-child {
  transform: rotate(-45deg);
  right: 2px;
  top: 10px;
}
.section-subtitle{
  margin-bottom: 1em;
}
/* Animación */
@keyframes arrowBounce {
  0%   { opacity: 0.2; transform: translateY(0) rotate(var(--r)); }
  50%  { opacity: 1; transform: translateY(6px) rotate(var(--r)); }
  100% { opacity: 0.2; transform: translateY(0) rotate(var(--r)); }
}
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    @keyframes scrollLine {
      0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
      50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
      100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
    }

    /* ─── FEATURES ──────────────────────────── */
    .features {
      background: var(--color-bg-alt);

      &__header {
        max-width: 600px;
        margin-bottom: var(--space-2xl);
      }

      &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-md);

        @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 560px) { grid-template-columns: 1fr; }
      }
    }

    .feature-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  animation: fadeUp 0.6s ease both;
  will-change: transform;
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: rgba(124, 109, 250, 0.25);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

/* 🔥 IMAGEN PROTAGONISTA */
.feature-card__image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.feature-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

/* zoom suave al hover */
.feature-card:hover .feature-card__image img {
  transform: scale(1.08);
}

/* TEXTO */
.feature-card__title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  padding: 0 1rem;
}

.feature-card__text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
  padding: 0 1rem 1rem 1rem;
}

.feature-card:hover {
  transform: translateY(-6px) scale(2.03);
  border-color: rgba(124, 109, 250, 0.35);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(124, 109, 250, 0.15);
}

    /* ─── PRODUCTS ──────────────────────────── */
    .products {
      &__header {
        max-width: 600px;
        margin-bottom: var(--space-2xl);
      }

      &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-md);

        @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 600px)  { grid-template-columns: 1fr; }
      }

      &__cta {
        text-align: center;
        margin-top: var(--space-2xl);
      }
    }

    /* ─── BANNER ────────────────────────────── */
    .banner {
      margin: var(--space-4xl) 0;

      &__inner {
        position: relative;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        padding: var(--space-3xl) var(--space-2xl);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        overflow: hidden;
      }

      &__glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-accent-glow), transparent);
        pointer-events: none;
      }

      &__emoji {
        font-size: 2rem;
        color: var(--color-accent);
      }

      &__title {
        font-family: var(--font-display);
        font-size: var(--text-4xl);
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--color-text);

        @media (max-width: 600px) { font-size: var(--text-3xl); }
      }

      &__text {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        max-width: 480px;
      }
    }
    .features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}
  .feature-card__icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-glow);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

.feature-card__icon img {
  width: 70%;
  height: 70%;
  object-fit: contain;
}
@media (max-width: 900px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
  `]
})
export class HomeComponent {
  stats = [
    { value: '10K+', label: 'Clientes' },
    { value: '4.9★', label: 'Valoración' },
    { value: '99%', label: 'Satisfacción' },
  ];

  features: Feature[] = [
    {
      icon: 'assets/features/1.png',
      title: 'ATARDECERES INOLVIDABLES',
      description: 'Momentos que se graban en el alma.'
    },
    {
      icon: 'assets/features/2.png',
      title: 'LUGARES EXCEPCIONALES',
      description: 'Cada detalle importa. Cada lugar cuenta.'
    },
    {
      icon: 'assets/features/3.png',
      title: 'INSPIRADO EN LA BELLEZA',
      description: 'Creado para acompañar los escenarios más icónicos'
    },
    {
      icon: 'assets/features/4.png',
      title: 'MOMENTOS ÚNICOS',
      description: 'Celebra lo que verdaderamente importa.'
    },
    {
      icon: 'assets/features/5.png',
      title: 'DESTINOS QUE INSPIRAN',
      description: 'Para quienes buscan lo extraordinario.'
    },
    {
      icon: 'assets/features/6.png',
      title: 'PUREZA. DISEÑO. ETERNIDAD',
      description: 'Una obra de arte en cada botella.'
    },
  ];

  // ─── Personaliza estos datos con tus productos reales ───
  products: ProductCard[] = [
    {
      id: 1,
      title: 'Producto Estrella',
      subtitle: 'Colección Premium',
      description: 'El buque insignia de nuestra marca. Diseñado para quienes no conforman con menos que lo mejor.',
      imagePlaceholder: 'linear-gradient(135deg, #7c6dfa 0%, #fa6d8a 100%)',
      badge: 'Más vendido',
      price: '99 €',
      tag: 'Nuevo'
    },
    {
      id: 2,
      title: 'Producto Esencial',
      subtitle: 'Línea Everyday',
      description: 'La opción perfecta para el día a día. Funcionalidad máxima sin renunciar al estilo.',
      imagePlaceholder: 'linear-gradient(135deg, #1e1e2a 0%, #7c6dfa 100%)',
      price: '59 €',
      tag: 'Popular'
    },
    {
      id: 3,
      title: 'Edición Limitada',
      subtitle: 'Colección Especial',
      description: 'Disponibilidad exclusiva. Materiales únicos y acabados artesanales para los más exigentes.',
      imagePlaceholder: 'linear-gradient(135deg, #fa6d8a 0%, #1e1e2a 100%)',
      badge: 'Limitado',
      price: '149 €',
      tag: 'Exclusivo'
    },
    {
      id: 4,
      title: 'Pack Completo',
      subtitle: 'Bundle Ahorro',
      description: 'Todo lo que necesitas en un solo pack. Ahorra un 30% combinando nuestros productos más queridos.',
      imagePlaceholder: 'linear-gradient(135deg, #2a2a3a 0%, #a897ff 100%)',
      price: '189 €',
      tag: 'Oferta'
    },
    {
      id: 5,
      title: 'Producto Pro',
      subtitle: 'Línea Professional',
      description: 'Para los profesionales que necesitan herramientas a la altura de sus ambiciones.',
      imagePlaceholder: 'linear-gradient(135deg, #0a0a0f 0%, #fa6d8a 100%)',
      price: '229 €',
      tag: 'Pro'
    },
    {
      id: 6,
      title: 'Starter Kit',
      subtitle: 'Ideal para empezar',
      description: 'El punto de partida perfecto. Todo lo esencial para comenzar con buen pie.',
      imagePlaceholder: 'linear-gradient(135deg, #7c6dfa 0%, #2a2a3a 100%)',
      price: '39 €',
      tag: 'Básico'
    },
  ];
}

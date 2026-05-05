import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

interface Value {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `

    <!-- ─── HERO ABOUT ──────────────────────────────── -->
    <section class="editorial section">
  <div class="container">
    <div class="editorial__inner">
      <span class="section-label">Nuestra esencia</span>

      <h2 class="section-title">Nada es eterno</h2>

      <div class="editorial__content">
        <p>Hay objetos que contienen algo más que su forma.<br>
        Hay objetos que, sin hacer ruido, sostienen una idea.</p>

        <p>Esta botella no busca simplemente guardar vino.<br>
        Guarda un instante.</p>

        <p>En su interior, una rosa de cristal florece en un tiempo que no avanza. Sus pétalos, detenidos en una perfección imposible, no conocen el desgaste ni la caída. No se marchitan. No cambian. Permanecen.</p>

        <p>Y, sin embargo, esa permanencia es solo una ilusión.</p>

        <p>Porque fuera de ella, dentro de ella, alrededor de ella… el tiempo sigue ocurriendo.</p>

        <p>El vino respira. Evoluciona. Se transforma en silencio. Cada segundo altera su carácter, cada espera lo acerca a otra versión de sí mismo. Es materia viva, en tránsito constante. Nunca es exactamente el mismo. Nunca vuelve atrás.</p>

        <p>Ahí, en ese contraste, habita la esencia de esta pieza.</p>

        <p>La rosa, eterna pero inmóvil.<br>
        El vino, efímero pero pleno de vida.</p>

        <p>Dos naturalezas opuestas encerradas en un mismo cuerpo. Dos formas de entender el paso del tiempo: una que intenta resistirlo, otra que se entrega a él.</p>

        <p>Y nosotros, observando.</p>

        <p>Quizá por eso esta botella no se limita a ser contemplada. Invita a una pausa. A una pregunta. A una leve incomodidad:<br>
        ¿qué es realmente valioso—lo que dura o lo que cambia?</p>

        <p>Porque lo que no se transforma, no vive.<br>
        Pero lo que vive, inevitablemente desaparece.</p>

        <p>Servir este vino es aceptar esa verdad. Es romper el equilibrio perfecto de lo intacto. Es permitir que lo contenido se libere, que el tiempo haga lo suyo.</p>

        <p>Y en ese gesto —tan simple, tan cotidiano— se revela algo profundamente humano:<br>
        no podemos conservarlo todo, pero sí podemos experimentarlo.</p>

        <p>La rosa permanecerá.<br>
        El vino no.</p>

        <p>Y, sin embargo, será el vino el que deje memoria.</p>

        <p><strong>Porque nada es eterno.<br>
        Y precisamente por eso, todo lo que existe, importa.</strong></p>
      </div>
    </div>
  </div>
</section>

    <!-- ─── MISIÓN ──────────────────────────────────── -->
    <!-- <section class="mission section">
      <div class="container mission__grid">
        <div class="mission__card mission__card--main">
          <span class="mission__icon">🎯</span>
          <h2 class="mission__title">Nuestra misión</h2>
          <p class="mission__text">
            Diseñar y fabricar productos que combinen funcionalidad,
            estética y sostenibilidad. Queremos que cada cliente sienta
            que lo que tiene en sus manos fue creado específicamente para él.
          </p>
        </div>
        <div class="mission__card">
          <span class="mission__icon">👁️</span>
          <h3 class="mission__subtitle">Visión</h3>
          <p class="mission__text">
            Ser la marca de referencia en nuestra categoría dentro de los próximos
            5 años, reconocida por la calidad y la innovación constante.
          </p>
        </div>
        <div class="mission__card">
          <span class="mission__icon">💎</span>
          <h3 class="mission__subtitle">Compromiso</h3>
          <p class="mission__text">
            Cada producto que sale de nuestras instalaciones ha pasado por
            un riguroso control de calidad. Tu satisfacción es nuestra garantía.
          </p>
        </div>
      </div>
    </section> -->

    <!-- ─── VALORES ──────────────────────────────────── -->
    <!-- <section class="values section">
      <div class="container">
        <span class="section-label">Lo que nos define</span>
        <h2 class="section-title">Nuestros valores</h2>

        <div class="values__grid">
          <div class="value-item" *ngFor="let v of values">
            <div class="value-item__icon">{{ v.icon }}</div>
            <div>
              <h3 class="value-item__title">{{ v.title }}</h3>
              <p class="value-item__text">{{ v.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- ─── EQUIPO ───────────────────────────────────── -->
    <!-- <section class="team section">
      <div class="container">
        <span class="section-label">El equipo</span>
        <h2 class="section-title">Las personas detrás</h2>
        <p class="section-subtitle">
          Somos un equipo pequeño pero apasionado. Conoce a quienes hacen posible ProductName.
        </p>

        <div class="team__grid">
          <article class="team-card" *ngFor="let m of team">
            <div class="team-card__avatar">{{ m.avatar }}</div>
            <h3 class="team-card__name">{{ m.name }}</h3>
            <p class="team-card__role">{{ m.role }}</p>
          </article>
        </div>
      </div>
    </section> -->

    <!-- ─── CTA ──────────────────────────────────────── -->
    <section class="about-cta section">
      <div class="container about-cta__inner">
        <h2 class="about-cta__title">¿Quieres saber más?</h2>
        <p class="about-cta__text">
          Ponte en contacto con nosotros. Estaremos encantados de atenderte.
        </p>
        <div class="about-cta__buttons">
          <a  href="#contacto" class="btn btn--primary btn--lg mt-1">Contactar </a>
        </div>
      </div>
    </section>

  `,
  styles: [`
    /* ─── HERO ──────────────────────────────── */
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
    .about-hero {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      padding-top: calc(var(--navbar-height) + var(--space-2xl));
      padding-bottom: var(--space-2xl);
      overflow: hidden;

      &__bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      &__orb {
        position: absolute;
        width: 700px;
        height: 700px;
        background: radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%);
        top: -200px;
        right: -150px;
        border-radius: var(--radius-full);
        filter: blur(60px);
      }

      &__inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-2xl);
        align-items: center;
        position: relative;
        z-index: 1;

        @media (max-width: 900px) { grid-template-columns: 1fr; }
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        animation: fadeUp 0.8s ease both;
      }

      &__title {
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, var(--text-6xl));
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.03em;
      }

      &__accent {
        font-style: italic;
        background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      &__text {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        line-height: 1.7;
        max-width: 500px;
      }

      &__image {
        animation: fadeUp 0.8s 0.15s ease both;

        @media (max-width: 900px) { order: -1; }
      }

      &__image-placeholder {
        aspect-ratio: 4/3;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: var(--text-sm);
        color: var(--color-text-muted);

        span {
          font-size: 3rem;
          color: var(--color-accent);
          animation: float 5s ease-in-out infinite;
        }
      }
    }

    /* ─── MISSION ───────────────────────────── */
    .mission {
      background: var(--color-bg-alt);

      &__grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: var(--space-md);

        @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
        @media (max-width: 560px) { grid-template-columns: 1fr; }
      }

      &__card {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        transition: all var(--transition-slow);

        &:hover {
          border-color: rgba(124,109,250,0.25);
          transform: translateY(-4px);
        }

        &--main {
          @media (max-width: 900px) { grid-column: 1 / -1; }
        }
      }

      &__icon { font-size: 1.8rem; }

      &__title {
        font-family: var(--font-display);
        font-size: var(--text-2xl);
        font-weight: 800;
        color: var(--color-text);
        letter-spacing: -0.02em;
      }

      &__subtitle {
        font-family: var(--font-display);
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--color-text);
      }

      &__text {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        line-height: 1.7;
      }
    }

    /* ─── VALUES ────────────────────────────── */
    .values {
      &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg);
        margin-top: var(--space-2xl);

        @media (max-width: 600px) { grid-template-columns: 1fr; }
      }
    }

    .value-item {
      display: flex;
      gap: var(--space-md);
      align-items: flex-start;

      &__icon {
        flex-shrink: 0;
        font-size: 1.5rem;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-accent-glow);
        border-radius: var(--radius-md);
      }

      &__title {
        font-family: var(--font-display);
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 0.3rem;
        letter-spacing: -0.01em;
      }

      &__text {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        line-height: 1.65;
      }
    }

    /* ─── TEAM ──────────────────────────────── */
    .team {
      background: var(--color-bg-alt);

      &__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-md);
        margin-top: var(--space-2xl);

        @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 480px) { grid-template-columns: 1fr; }
      }
    }

    .team-card {
      background: var(--color-bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: all var(--transition-slow);

      &:hover {
        border-color: rgba(124,109,250,0.3);
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }

      &__avatar {
        width: 72px;
        height: 72px;
        border-radius: var(--radius-full);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }

      &__name {
        font-family: var(--font-display);
        font-size: var(--text-base);
        font-weight: 700;
        color: var(--color-text);
      }

      &__role {
        font-size: var(--text-xs);
        color: var(--color-accent-light);
        letter-spacing: 0.05em;
      }
    }

    /* ─── ABOUT CTA ─────────────────────────── */
    .about-cta {
      &__inner {
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        padding: var(--space-3xl);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
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
        max-width: 460px;
      }

      &__buttons {
        display: flex;
        gap: var(--space-sm);
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class AboutComponent {
  values: Value[] = [
    { icon: '✦', title: 'Calidad sin compromiso', text: 'Cada material es seleccionado meticulosamente. No fabricamos lo que no usaríamos nosotros mismos.' },
    { icon: '🌿', title: 'Sostenibilidad real', text: 'No es marketing verde. Aplicamos prácticas sostenibles en cada etapa de producción y distribución.' },
    { icon: '🤝', title: 'Transparencia', text: 'Somos honestos sobre lo que hacemos, cómo lo hacemos y por qué. Sin letra pequeña.' },
    { icon: '🚀', title: 'Innovación continua', text: 'El mundo cambia y nosotros también. Reinvertimos constantemente en I+D para ir siempre un paso adelante.' },
  ];

  team: TeamMember[] = [
    { name: 'Ana García', role: 'CEO & Fundadora', avatar: '👩‍💼' },
    { name: 'Carlos Ruiz', role: 'Director de Diseño', avatar: '👨‍🎨' },
    { name: 'Marta López', role: 'Directora de Producto', avatar: '👩‍💻' },
    { name: 'Javier Martín', role: 'Head of Marketing', avatar: '👨‍📊' },
  ];
}

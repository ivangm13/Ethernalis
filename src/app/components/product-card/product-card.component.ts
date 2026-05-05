import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProductCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;  // URL de imagen o color de placeholder
  badge?: string;
  price?: string;
  tag?: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="card" [class.card--featured]="featured">
      <!-- Badge -->
      <span class="card__badge" *ngIf="product.badge">{{ product.badge }}</span>

      <!-- Imagen / Media -->
      <div class="card__media">
        <div class="card__image-wrap">
          <!-- Sustituye src por la URL real de tu imagen -->
          <img
            *ngIf="product.imagePlaceholder.startsWith('http')"
            [src]="product.imagePlaceholder"
            [alt]="product.title"
            class="card__img"
          />
          <!-- Placeholder de color si no hay imagen -->
          <div
            *ngIf="!product.imagePlaceholder.startsWith('http')"
            class="card__placeholder"
            [style.background]="product.imagePlaceholder"
          >
            <span class="card__placeholder-icon">◈</span>
          </div>
        </div>
        <div class="card__media-glow"></div>
      </div>

      <!-- Contenido -->
      <div class="card__body">
        <div class="card__meta">
          <span class="card__tag" *ngIf="product.tag">{{ product.tag }}</span>
        </div>
        <h3 class="card__title">{{ product.title }}</h3>
        <p class="card__subtitle">{{ product.subtitle }}</p>
        <p class="card__description">{{ product.description }}</p>

        <div class="card__footer">
          <span class="card__price" *ngIf="product.price">{{ product.price }}</span>
          <button class="btn btn--outline card__cta">Ver más →</button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .card {
      position: relative;
      background: var(--color-bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform var(--transition-slow), border-color var(--transition-slow), box-shadow var(--transition-slow);
      box-shadow: var(--shadow-card);

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(124,109,250,0.3);
        box-shadow: var(--shadow-lg), 0 0 0 1px rgba(124,109,250,0.1);

        .card__media-glow { opacity: 1; }
        .card__img { transform: scale(1.03); }
        .card__placeholder-icon { transform: scale(1.1) rotate(10deg); }
      }

      &--featured {
        border-color: rgba(124,109,250,0.4);
        background: linear-gradient(135deg, var(--color-bg-card), rgba(124,109,250,0.05));

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          padding: 1px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-secondary));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      }

      &__badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 2;
        background: var(--color-accent);
        color: #fff;
        font-family: var(--font-display);
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.25rem 0.6rem;
        border-radius: var(--radius-full);
      }

      &__media {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
      }

      &__image-wrap {
        width: 100%;
        height: 100%;
      }

      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
      }

      &__placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
          font-size: 3rem;
          color: rgba(255,255,255,0.3);
          transition: transform var(--transition-slow);
        }
      }

      &__media-glow {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, var(--color-bg-card) 0%, transparent 60%);
        opacity: 0.7;
        transition: opacity var(--transition-normal);
      }

      &__body {
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 0.4rem;
      }

      &__meta { display: flex; align-items: center; }

      &__tag {
        font-family: var(--font-display);
        font-size: var(--text-xs);
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-accent);
      }

      &__title {
        font-family: var(--font-display);
        font-size: var(--text-xl);
        font-weight: 700;
        color: var(--color-text);
        letter-spacing: -0.02em;
      }

      &__subtitle {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-accent-light);
      }

      &__description {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        line-height: 1.65;
        flex: 1;
        margin-top: 0.25rem;
      }

      &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: var(--space-sm);
        padding-top: var(--space-sm);
        border-top: 1px solid var(--color-border);
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      &__price {
        font-family: var(--font-display);
        font-size: var(--text-xl);
        font-weight: 800;
        color: var(--color-text);
      }

      &__cta {
        padding: 0.5rem 1rem;
        font-size: var(--text-xs);
      }
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductCard;
  @Input() featured = false;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer" id="contacto">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a routerLink="/" class="footer__logo">
              <span class="footer__logo-circle">
                <img
                  src="assets/logo2.png"
                  alt="ProductName"
                  class="footer__logo-image"
                />
              </span>
              <span class="footer__logo-text">Ethernalis</span>
            </a>
            <p class="footer__tagline">
              Timeless by nature.
            </p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="#" class="footer__social-link" aria-label="Instagram">IG</a>
              <a href="#" class="footer__social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <!-- <div class="footer__col">
            <h4 class="footer__col-title">Producto</h4>
            <ul class="footer__links">
              <li><a href="#caracteristicas">Características</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Novedades</a></li>
            </ul>
          </div> -->

          <!-- <div class="footer__col">
            <h4 class="footer__col-title">Empresa</h4>
            <ul class="footer__links">
              <li><a routerLink="/about">Nosotros</a></li>
            </ul>
          </div> -->

          <!-- <div class="footer__col">
            <h4 class="footer__col-title">Contacto</h4>
            <ul class="footer__links">
              <li><a href="mailto:hola@productname.com">hola&#64;productname.com</a></li>
              <li><a href="#">Soporte</a></li>
              <li><a href="#">Prensa</a></li>
            </ul>
          </div> -->
        </div>

        <div class="footer__bottom">
          <p class="footer__copy">
            © {{ year }} Ethernalis. Todos los derechos reservados.
          </p>
          <div class="footer__legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
  .footer {
    background: var(--color-bg-alt);
    border-top: 1px solid var(--color-border);
    margin-top: var(--space-4xl);
    padding: 4rem 0 1.25rem;
  }

  .footer__grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .footer__brand {
    max-width: 320px;
  }

  .footer__logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--color-text);
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 1rem;
  }

  .footer__logo-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(255,255,255,0.06);
  }

  .footer__logo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .footer__logo-text {
    letter-spacing: -0.02em;
  }

  .footer__tagline {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    margin: 0 0 1.25rem;
  }

  .footer__social {
    display: flex;
    gap: 0.5rem;
  }

  .footer__social-link {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .footer__social-link:hover {
    color: var(--color-text);
    border-color: rgba(124,109,250,0.35);
    background: rgba(124,109,250,0.08);
  }

  .footer__col-title {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-faint);
    margin: 0 0 1rem;
  }

  .footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .footer__links a {
    text-decoration: none;
    color: var(--color-text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    transition: color 0.2s ease;
  }

  .footer__links a:hover {
    color: var(--color-text);
  }

  .footer__bottom {
    border-top: 1px solid var(--color-border);
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer__copy {
    margin: 0;
    font-size: 0.82rem;
    color: var(--color-text-faint);
  }

  .footer__legal {
    display: flex;
    gap: 1rem;
  }

  .footer__legal a {
    text-decoration: none;
    font-size: 0.82rem;
    color: var(--color-text-faint);
    transition: color 0.2s ease;
  }

  .footer__legal a:hover {
    color: var(--color-text);
  }

  @media (max-width: 900px) {
    .footer__grid {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .footer__brand {
      grid-column: 1 / -1;
      max-width: none;
    }
  }

  @media (max-width: 600px) {
    .footer__grid {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    .footer__bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`]
})
export class FooterComponent {
  year = new Date().getFullYear();
}

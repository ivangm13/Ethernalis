import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="navbar" [class.navbar--scrolled]="scrolled()">
      <div class="container navbar__inner">

        <!-- Logo -->
        <a routerLink="/" class="navbar__logo">
          <span class="navbar__logo-circle">
            <img
              src="assets/logo2.png"
              alt="ProductName"
              class="navbar__logo-image"
            />
          </span>
          <span class="navbar__logo-text">Ethernalis</span>
        </a>

        <!-- Nav links (desktop) -->
        <nav class="navbar__nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" class="navbar__link">Inicio</a>
          <a routerLink="/about" routerLinkActive="active" class="navbar__link">Nosotros</a>
          <a href="#contacto" class="navbar__link">Contacto</a>
        </nav>

        <!-- CTA -->
        <!-- <div class="navbar__actions">
          <a href="#contacto" class="btn btn--primary">Empezar</a>
        </div> -->

        <!-- Mobile toggle -->
        <button class="navbar__toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div class="navbar__mobile" [class.open]="menuOpen()">
        <a routerLink="/" (click)="toggleMenu()" class="navbar__mobile-link">Inicio</a>
        <a routerLink="/about" (click)="toggleMenu()" class="navbar__mobile-link">Nosotros</a>
        <a href="#contacto" (click)="toggleMenu()" class="navbar__mobile-link">Contacto</a>
        <!-- <a href="#contacto" (click)="toggleMenu()" class="btn btn--primary" style="margin-top:1rem;justify-content:center">Empezar</a> -->
      </div>
    </header>
  `,
  styles: [`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 72px;
    transition: background .3s ease, box-shadow .3s ease;
  }

    .navbar.navbar--scrolled {
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 1px 0 rgba(255,255,255,.08);
    }
    .navbar__logo-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .navbar__logo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .navbar__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .navbar__logo {
    display: flex;
    align-items: center;
    gap: .5rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 1.1rem;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .navbar__logo-icon {
    font-size: 1.2rem;
  }

  .navbar__logo-text {
    letter-spacing: -.02em;
  }

  .navbar__nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: auto;
  }

  .navbar__link {
    position: relative;
    text-decoration: none;
    color: rgba(255,255,255,.75);
    font-size: .95rem;
    transition: color .2s ease;
    white-space: nowrap;
  }

  .navbar__link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .2s ease;
  }

  .navbar__link:hover,
  .navbar__link.active {
    color: #fff;
  }

  .navbar__link:hover::after,
  .navbar__link.active::after {
    width: 100%;
  }

  .navbar__actions {
    flex-shrink: 0;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    padding: .65rem 1rem;
    text-decoration: none;
    border-radius: 8px;
    font-size: .9rem;
  }

  .btn--primary {
    background: #fff;
    color: #111;
    font-weight: 600;
  }

  .navbar__toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    padding: .5rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .navbar__toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 999px;
  }

  .navbar__mobile {
    display: none;
    flex-direction: column;
    background: rgba(10,10,15,.98);
    border-top: 1px solid rgba(255,255,255,.08);
    padding: 0 1rem;
    overflow: hidden;
    max-height: 0;
    transition: max-height .3s ease, padding .3s ease;
  }

  .navbar__mobile.open {
    max-height: 400px;
    padding: 1rem;
  }

  .navbar__mobile-link {
    padding: .85rem 0;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  @media (max-width: 768px) {
    .navbar__nav,
    .navbar__actions {
      display: none;
    }

    .navbar__toggle {
      display: flex;
    }

    .navbar__mobile {
      display: flex;
    }
  }
`]
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}

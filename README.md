# SHIVI Facilitator - Frontend Application

A modern, responsive web application built with Angular 17, TypeScript, and SCSS.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages & Components](#pages--components)
- [Routing](#routing)
- [Styling](#styling)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Development Guidelines](#development-guidelines)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)

---

## 🌟 Overview

The SHIVI Facilitator frontend is a professional, enterprise-grade web application that provides a comprehensive platform for showcasing services, managing proposals, posting careers, and handling contact inquiries.

### Key Highlights

- **Modern Architecture:** Built with Angular 17 standalone components
- **Responsive Design:** Mobile-first approach, works on all devices
- **Type-Safe:** Full TypeScript implementation
- **Performance:** Optimized bundle size and lazy loading
- **User Experience:** Smooth animations, loading states, and error handling
- **SEO-Friendly:** Semantic HTML and proper meta tags

---

## 🛠 Tech Stack

### Core Technologies

- **Framework:** Angular 17.x (Standalone Components)
- **Language:** TypeScript 5.x
- **Styling:** SCSS (Sass)
- **State Management:** RxJS 7.x
- **HTTP Client:** Angular HttpClient
- **Routing:** Angular Router
- **Forms:** Angular FormsModule

### Development Tools

- **CLI:** Angular CLI 17.x
- **Package Manager:** npm
- **Build System:** Angular DevKit
- **Dev Server:** Webpack Dev Server

### Dependencies

```json
{
  "@angular/animations": "^17.0.0",
  "@angular/common": "^17.0.0",
  "@angular/compiler": "^17.0.0",
  "@angular/core": "^17.0.0",
  "@angular/forms": "^17.0.0",
  "@angular/platform-browser": "^17.0.0",
  "@angular/platform-browser-dynamic": "^17.0.0",
  "@angular/router": "^17.0.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.0"
}
```

---

## ✨ Features

### 🏠 Landing Page
- Hero section with call-to-action
- Company overview
- Services showcase
- Responsive navigation
- Footer with company links

### 📖 About Page
- Company history and mission
- Leadership team profiles
- Mission, Vision, and Values display
- Operating model showcase
- Core differentiators section

### 💼 Careers Portal
- Job search with real-time filtering
- Department-based filtering
- Job listings with details
- Application tracking
- Empty state for no positions
- Responsive job cards

### 📬 Contact Page
- Multi-channel contact information
- Interactive contact form
- Real-time form validation
- Department-specific contacts
- Additional resource links
- Success/error messaging

### 📝 Proposal Request
- Multi-step form with validation
- Service type selection
- Project requirements input
- Budget and timeline fields
- Character counter for descriptions
- Loading states during submission

### 🎨 UI/UX Features
- Smooth page transitions
- Hover effects and animations
- Loading spinners
- Toast notifications
- Form validation feedback
- Responsive mobile menu
- Active route highlighting

---

## 🚀 Getting Started

### Prerequisites

- **Node.js:** 18.13.0 or higher (20.x LTS recommended)
- **npm:** 9.x or higher
- **Angular CLI:** 17.x

### Check Versions

```bash
node --version    # v20.x.x or higher
npm --version     # 9.x.x or higher
ng version        # Angular CLI 17.x.x
```

### Installation

1. **Install Angular CLI globally (if not already installed):**
```bash
npm install -g @angular/cli@17
```

2. **Install project dependencies:**
```bash
npm install
```

3. **Configure environment:**
Edit `src/environments/environment.ts` with your backend API URL

4. **Start development server:**
```bash
npm start
```

The application will open at `http://localhost:4200`

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/              # Reusable components
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   └── navbar.component.scss
│   │   │   ├── hero/
│   │   │   │   ├── hero.component.ts
│   │   │   │   ├── hero.component.html
│   │   │   │   └── hero.component.scss
│   │   │   └── footer/
│   │   │       ├── footer.component.ts
│   │   │       ├── footer.component.html
│   │   │       └── footer.component.scss
│   │   │
│   │   ├── pages/                   # Page components
│   │   │   ├── landing/
│   │   │   │   ├── landing.component.ts
│   │   │   │   ├── landing.component.html
│   │   │   │   └── landing.component.scss
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.scss
│   │   │   ├── careers/
│   │   │   │   ├── careers.component.ts
│   │   │   │   ├── careers.component.html
│   │   │   │   └── careers.component.scss
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   └── contact.component.scss
│   │   │   └── proposal-form/
│   │   │       ├── proposal-form.component.ts
│   │   │       ├── proposal-form.component.html
│   │   │       └── proposal-form.component.scss
│   │   │
│   │   ├── services/                # Services
│   │   │   └── api.service.ts
│   │   │
│   │   ├── models/                  # TypeScript interfaces
│   │   │   └── proposal.model.ts
│   │   │
│   │   ├── app.component.ts         # Root component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts            # App configuration
│   │   └── app.routes.ts            # Routing configuration
│   │
│   ├── environments/                # Environment configs
│   │   ├── environment.ts           # Development
│   │   └── environment.prod.ts      # Production
│   │
│   ├── assets/                      # Static assets
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── styles.scss                  # Global styles
│   ├── index.html                   # Main HTML file
│   └── main.ts                      # Application bootstrap
│
├── angular.json                     # Angular workspace config
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── tsconfig.app.json               # App TypeScript config
├── tsconfig.spec.json              # Test TypeScript config
└── README.md
```

---

## 📄 Pages & Components

### Pages

| Page | Route | Description |
|------|-------|-------------|
| **Landing** | `/` | Homepage with hero and overview |
| **About** | `/about` | Company information and team |
| **Careers** | `/careers` | Job listings and search |
| **Contact** | `/contact` | Contact form and information |
| **Proposal** | `/request-proposal` | Request proposal form |

### Shared Components

#### Navbar
- Responsive navigation menu
- Active route highlighting
- Mobile hamburger menu
- Request Proposal CTA button

**Usage:**
```typescript

```

#### Hero
- Configurable hero section
- Background image support
- Title and description
- Call-to-action buttons

**Usage:**
```typescript

```

**Props:**
```typescript
interface HeroContent {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
}
```

#### Footer
- Company information
- Quick links
- Contact details
- Copyright notice

**Usage:**
```typescript

```

---

## 🗺️ Routing

### Route Configuration

```typescript
// src/app/app.routes.ts

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'request-proposal', component: ProposalFormComponent },
  { path: 'services', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
```

### Navigation

**Programmatic Navigation:**
```typescript
constructor(private router: Router) {}

navigateToAbout() {
  this.router.navigate(['/about']);
}
```

**Template Navigation:**
```html
About Us
```

---

## 🎨 Styling

### Approach

- **SCSS/Sass** for enhanced CSS features
- **Component-level styles** for encapsulation
- **Global styles** in `styles.scss`
- **Responsive design** with mobile-first approach
- **CSS Grid & Flexbox** for layouts

### Color Palette

```scss
// Primary Colors
$primary: #2563eb;      // Blue
$primary-dark: #1d4ed8;
$primary-light: #dbeafe;

// Secondary Colors
$secondary: #9333ea;    // Purple
$secondary-dark: #7c3aed;

// Success, Warning, Error
$success: #16a34a;
$warning: #f59e0b;
$error: #ef4444;

// Neutrals
$dark: #1e293b;
$gray: #64748b;
$light-gray: #f8fafc;
$white: #ffffff;
```

### Typography

```scss
// Font Family
$font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

// Font Sizes
$text-xs: 0.75rem;    // 12px
$text-sm: 0.875rem;   // 14px
$text-base: 1rem;     // 16px
$text-lg: 1.125rem;   // 18px
$text-xl: 1.25rem;    // 20px
$text-2xl: 1.5rem;    // 24px
$text-3xl: 2rem;      // 32px
$text-4xl: 2.5rem;    // 40px
```

### Breakpoints

```scss
// Responsive Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1280px;

// Usage
@media (max-width: $mobile) {
  // Mobile styles
}
```

---

## ⚙️ Configuration

### Environment Files

#### Development (`src/environments/environment.ts`)

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'SHIVI Facilitator',
  version: '1.0.0'
};
```

#### Production (`src/environments/environment.prod.ts`)

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.shivifacilitator.com/api',
  appName: 'SHIVI Facilitator',
  version: '1.0.0'
};
```

### Using Environment Variables

```typescript
import { environment } from '../environments/environment';

export class ApiService {
  private apiUrl = environment.apiUrl;
  
  getData() {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }
}
```

---

## 📜 Scripts

Available npm scripts:

```bash
# Development
npm start              # Start dev server (ng serve)
npm run ng             # Angular CLI commands

# Building
npm run build          # Production build
npm run watch          # Development build with watch

# Testing
npm test               # Run unit tests
npm run test:watch     # Run tests in watch mode

# Linting (if configured)
npm run lint           # Run ESLint
```

### Script Details

**Start Development Server:**
```bash
npm start
# or
ng serve
```
- Opens at `http://localhost:4200`
- Hot reload on file changes
- Source maps enabled
- Development optimizations

**Build for Production:**
```bash
npm run build
# or
ng build --configuration production
```
- Output in `dist/frontend/`
- Minified and optimized
- AOT compilation
- Tree shaking
- File hashing for cache busting

**Watch Mode:**
```bash
npm run watch
# or
ng build --watch
```
- Rebuilds on file changes
- Development build
- Faster compilation

---

## 💻 Development Guidelines

### Component Creation

```bash
# Create a new component
ng generate component components/my-component

# or shorthand
ng g c components/my-component

# Create standalone component
ng g c components/my-component --standalone
```

### Service Creation

```bash
# Create a new service
ng generate service services/my-service

# or shorthand
ng g s services/my-service
```

### Code Style

#### Component Template

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  title = 'My Component';
  
  onClick(): void {
    console.log('Button clicked');
  }
}
```

#### Service Template

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}
  
  getData(): Observable {
    return this.http.get(`${this.apiUrl}/data`);
  }
}
```

### Best Practices

1. **Use Standalone Components** - Modern Angular approach
2. **Type Everything** - Leverage TypeScript for type safety
3. **Unsubscribe from Observables** - Prevent memory leaks
4. **Use OnPush Change Detection** - Improve performance
5. **Lazy Load Modules** - Reduce initial bundle size
6. **Follow Angular Style Guide** - Consistent code structure
7. **Write Reusable Components** - DRY principle
8. **Handle Errors Gracefully** - User-friendly error messages

---

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

Build artifacts will be in `dist/frontend/` directory.

### Build Configurations

**Development Build:**
```bash
ng build --configuration development
```
- Source maps included
- Not minified
- Faster build time

**Production Build:**
```bash
ng build --configuration production
```
- Minified and optimized
- AOT compilation
- Tree shaking
- No source maps
- Environment substitution

### Deployment Options

#### Option 1: Static Hosting (Netlify, Vercel)

1. **Build the app:**
```bash
npm run build
```

2. **Deploy `dist/frontend` folder**

3. **Configure routing:**
Create `_redirects` or `vercel.json` for SPA routing:

```
/*    /index.html   200
```

#### Option 2: Firebase Hosting

```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

#### Option 3: AWS S3 + CloudFront

1. Build the app
2. Upload `dist/frontend` to S3 bucket
3. Configure CloudFront distribution
4. Set error page to `/index.html`

#### Option 4: Docker + Nginx

**Dockerfile:**
```dockerfile
# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
  listen 80;
  server_name localhost;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

**Build and run:**
```bash
docker build -t shivi-frontend .
docker run -p 80:80 shivi-frontend
```

---

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### Test Configuration

Tests are written using **Jasmine** and run with **Karma**.

**Example Test:**
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct title', () => {
    expect(component.title).toBe('My Component');
  });
});
```

---

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 4200
npx kill-port 4200

# or use different port
ng serve --port 4201
```

#### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Angular CLI Version Mismatch

```bash
# Update Angular CLI globally
npm uninstall -g @angular/cli
npm install -g @angular/cli@17

# Update local project
ng update @angular/cli @angular/core
```

#### Build Errors

```bash
# Clear Angular cache
rm -rf .angular

# Rebuild
ng build
```

#### CORS Errors

Check that:
1. Backend is running
2. `environment.ts` has correct API URL
3. Backend CORS allows frontend origin

---

## 📚 Additional Resources

### Angular Documentation
- [Official Angular Docs](https://angular.io/docs)
- [Angular CLI Reference](https://angular.io/cli)
- [Angular Style Guide](https://angular.io/guide/styleguide)

### Learning Resources
- [Angular Tutorial](https://angular.io/tutorial)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 2026 | Initial release |

---

## 📞 Support

For issues or questions:
- **Email:** dev@shivifacilitator.com
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/shivi-facilitator/issues)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Authors

- **SHIVI Facilitator Team** - *Initial work*

---

**Last Updated:** January 2026

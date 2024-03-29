# AngularPrimeng

```
Documentación oficial:
https://primeng.org/installation
```

```
pnpm add primeng primeicons
```

angular.json
```
"styles": [
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeicons/primeicons.css",
    "/node_modules/primeflex/primeflex.css"
    ...
]
```


app.module.ts
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
...

 imports: [
    BrowserAnimationsModule,
    ButtonModule,
    ....
```


styles.css
```
body {
  font-family: var(--font-family);
}
```

Probamos en el html de un componente:
```
<div class="card flex justify-content-center">
  <p-button label="Submit"></p-button>
</div>
```

Creamos las páginas
```
ng g m pages --routing
ng g c pages/home
....
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

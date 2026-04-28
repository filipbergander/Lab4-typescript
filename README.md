# Laboration 4 - TypeScript

Laborationens syfte är att skapa en webbplats som hämtar in och skriver ut kurser i Frontend genom ramverket Angular. Detta utifrån befintlig data från en webbtjänst för kurser. Möjlighet att filtrera och sortera bland kurserna ska finnas med.   
Funktionalitet och logik ska finnas inom komponenter, services, och interface.

**Webbplats:** https://fb-lab4-typescript.netlify.app/

## Hur valde jag att gå tillväga?

Tre komponenter skapades, en för startsidan (home) där innehållet presenteras, en andra för själva tabellerna som sedan infogades inom home-komponenten, och en tredje som användes för en 404-sida (not-found). Startsidan och 404-sidan  användes inom routes (app.routes.ts) för navigering.

### Interface
Jag valde att skapa ett interface för hur datan som jag ville hämta skulle se ut:  
**export interface Course** {   
    **code:** string;   
    **coursename:** string;   
    **progression:** string;   
    **syllabus:** string; }

### Service

En service, (services/get-course.ts), användes för att kunna hämta och anropa kurserna från webbtjänsten. Inom servicen användes Inject och HttpClient. En metod, fetchCourse, hämtade sedan in kurserna utifrån interfacet tillsammans med HttpClient. Startvärdet (initialValue) valdes till en tom array.   

### Logik för kurserna
Kursernas struktur och logik skapades sedan utifrån servicen och interfacet inom den egna course-komponenten. Inject användes för att kunna lagra de inhämtade kurserna i propertyn Courses. Signals användes exempelvis för att filtrera och sortera bland kurserna.

**filterCourses = signal("");**

En switch-loop tillsammans med booleans, som blev initierade i en signal, gjorde det möjligt att sortera kursnamn, kurskod och progression i fallande och stigande ordning.

**sortType = signal<"code" | "name" | "progression" | null>(null);**

### Presentera kurserna
I HTML-filen för den egna course-komponenten skapades layouten. Kurserna visades sedan i Frontend genom ett Table-element. Sökfält finns för att kunna filtrera och söka på kurser och placerades ovanför tabellen. En "For-loop" tillsammans med uppercase-pipe användes inom tabellen för att skriva ut kursernas data på ett snyggare vis. 

 **@for (course of filteredResults(); track course.code)**

 Jag valde i stället för att ha en lång URL-adress för kursplan, att använda mig av en ikon för respektive länk. 


 ### Styling
 All styling med regler gjordes inom SCSS-filer. Till exempel inom själva komponenterna och globalt.    


## Instruktioner från Angular:
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

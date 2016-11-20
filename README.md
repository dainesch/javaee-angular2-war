# Maven JavaEE Angular2 Template
Template project for using Angular2 inside an JavaEE WAR. The template is based on the 
[Angular Tutorial](https://angular.io/docs/ts/latest/tutorial/) and comes with two preconfigured Maven profiles:
* default: Angular development mode for ease of development and fast recompile/deploy (+-1sec)
* aot-compile: [Ahead of Time compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) for performance 
optimization.
Additionally a simple JAX-RS resource is accessed for the AngularJS to demonstrate calls to the JavaEE application from tha Angular
front-end.

## Prerequisites

* [NodeJS](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org)

Additionally recommended:

* [Netbeans](https://netbeans.org) using the [TypeScript Plugin NBTS](https://github.com/Everlaw/nbts)
* [Payara](http://www.payara.fish) or Glassfish 4

## Non-Windows users

Make sure to adapt `pom.xml` and remove `.cmd` from the executables (NodeJS)

## Installation

Just run mvn install using the desired profile and deploy an application server. Or open project in Netbeans, build project 
and run project

## Relevant files
* `pom.xml`: Different profiles, NodeJS calls, switch between dev and aot configuration/files
* `tsconfig.json`: TypeScript options for dev mode
* `tsconfig-aot.json`: TypeScript options for AOT compilation
* `systemjs.config.js`: Angular configuration
* `rollup-config.js`: AOT rollup config
* `package.json`: NodeJS configuration (used for dependencies in this case)
* `main.ts.dev`: Main Angular file for development mode
* `main.ts.aot`: Main Angular file for AOT mode



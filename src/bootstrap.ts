/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {App} from './app/app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main() {
  return bootstrap(App, [
    // These are dependencies of our App
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ])
      .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);

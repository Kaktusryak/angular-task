import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { StoreFeatureModule, StoreModule, provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { counterReducer } from './store/counter.reducer';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    importProvidersFrom(StoreModule.forRoot({}),StoreModule.forFeature('counter',counterReducer))
  ]
    
};

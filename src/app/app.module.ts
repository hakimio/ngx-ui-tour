import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {APP_PROVIDERS} from './app.providers';
import {TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiThemeAndroidModule, TuiThemeIosModule} from '@taiga-ui/addon-mobile';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        TuiDocMainModule,
        TuiLinkModule,
        TuiModeModule,
        TuiThemeAndroidModule,
        TuiThemeIosModule
    ],
    providers: APP_PROVIDERS
})
export class AppModule {}

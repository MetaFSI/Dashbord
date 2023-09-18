import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { CommandItemComponent } from './command-item/command-item.component';
import { TirageItemComponent } from './tirage-item/tirage-item.component';
import { ControleItemComponent } from './controle-item/controle-item.component';
import { EmballageItemComponent } from './emballage-item/emballage-item.component';
import { BestOfTirageItemComponent } from './best-of-tirage-item/best-of-tirage-item.component';
import { WorstOfTirageItemComponent } from './worst-of-tirage-item/worst-of-tirage-item.component';
import { WebsocketService } from './services/soket/websocket.service';
const config: SocketIoConfig = {url: 'http://10.0.0.65:3110', options: {}};
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent,
    CountdownTimerComponent,
    CommandItemComponent,
    TirageItemComponent,
    ControleItemComponent,
    EmballageItemComponent,
    BestOfTirageItemComponent,
    WorstOfTirageItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [WebsocketService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

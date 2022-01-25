
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './echarts/line-chart/line-chart.component';
import { FabricSignatureComponent } from './fabric-signature/fabric-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    FabricSignatureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

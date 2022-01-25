import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './echarts/line-chart/line-chart.component';
import { FabricSignatureComponent } from './fabric-signature/fabric-signature.component';

const routes: Routes = [
  {
    path: 'line-chart',
    component: LineChartComponent
  },
  {
    path: 'fabric-signature',
    component: FabricSignatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

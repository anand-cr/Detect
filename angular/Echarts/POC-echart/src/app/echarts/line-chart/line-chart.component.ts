import { Component, OnInit } from '@angular/core';
// import { EChartsOption } from 'echarts';
import { Subscription } from 'rxjs';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
chartDom : any;
myChart:any;
option:any;

chartOption: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
    },
  ],
};      

ngOnInit(): void {
  
}

  // _chartOption!: EChartsOption;
  // subscription : Subscription | undefined;
  // constructor(private echartService : EchartService) { }

  // ngOnInit(): void {
  //   this.subscription = this.echartService.getbasiclineEchartData().subscribe(data =>{
  //     this._initBasicLineEchart(data);
  //     console.log(data)
  //   });
  // }
 
  // private _initBasicLineEchart(chartData : BasicEchartLineModel[]){
  //   this._chartOption = {
  //     toolbox:{
  //       show: true
  //     },
  //     background: 'transparent',
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         data: [150, 230, 224, 218, 135, 147, 260],
  //         type: 'line'
  //       }]
  //   };
  // }
}

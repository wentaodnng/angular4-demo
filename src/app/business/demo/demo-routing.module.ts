import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {DemoComponent} from './demo.component';
import {ToastDemoComponent} from './toast-demo.component';
import {ModalDemoComponent} from './modal-demo.component';
import {NgxChartsDemoComponent} from './ngx-charts-demo.component';
import {MultiSelectDemoComponent} from './multiselect-dropdown-demo.component';
import {HierarchyViewDemoComponent} from './hierarchy-view-demo.component';
import {ImgCropperDemoComponent} from './img-cropper-demo.component';
import {SelectDemoComponent} from './select-demo.component';
import {PaginationDemoComponent} from './pagination-demo.component';
import {HttpPaginationDemoComponent} from './http-pagination-demo.component';
import {SwitchDemoComponent} from './switch-demo.component';
import {TimelineDemoComponent} from './timeline-demo.component';
import {DatepickerDemoComponent} from './datepicker-demo.component';
import {TreeDemoComponent} from './tree-demo.component';
import {ZtreeDemoComponent} from './ztree-demo.component';
import {ImgSelectToBaseDemoComponent} from './img-select-to-base-demo.component';
import {FileUploadDemoComponent} from './file-upload-demo.component';
import {CustomScrollbarDemoComponent} from './custom-scrollbar-demo.component';
import {ImageViewerDemoComponent} from './image-viewer-demo.component';
import {SpinDemoComponent} from './spin-demo.component';
import {NgBootstrapDemoComponent} from './ng-bootstrap-demo.component';
import {BootstrapDemoComponent} from './bootstrap-demo.component';
import {StorageDemoComponent} from './storage-demo.component';
import {PageBrowserDemoComponent} from './page-browser-demo.component';
import {EditorDemoComponent} from './editor-demo.component';
import {AgGridDemoComponent} from './ag-grid-demo.component';
import {SimpleDataTableDemoComponent} from './simple-data-table-demo.component';
import {ColorPickerDemoComponent} from './color-picker-demo.component';
import {StepDemoComponent} from './step-demo.component';
import {ValidatorDemoComponent} from './validator-demo.component';
import {QrcodeDemoComponent} from './qrcode-demo.component';
import {LineChartDemoComponent} from "./line-chart-demo.component";
import {BarChartDemoComponent} from "./bar-chart-demo.component";
import {DoughnutChartDemoComponent} from "./doughnut-chart-demo.component";
import {RadarChartDemoComponent} from "./radar-chart-demo.component";
import {PieChartDemoComponent} from "./pie-chart-demo.component";
import {PolarAreaChartDemoComponent} from "./polar-area-chart-demo.component";
import {BaseChartDemoComponent} from "./base-chart-demo.component";
import {EchartsDemoComponent} from "./echarts.demo.component";

/**
 * demo路由
 */
const demoRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'toastDemo',
        component: ToastDemoComponent
      },
      {
        path: 'modalDemo',
        component: ModalDemoComponent
      },
      {
        path: 'ngxChartsDemo',
        component: NgxChartsDemoComponent
      },
      {
        path: 'multiselectDropdownDemo',
        component: MultiSelectDemoComponent
      },
      {
        path: 'hierarchyViewDemo',
        component: HierarchyViewDemoComponent
      },
      {
        path: 'imgCropperDemo',
        component: ImgCropperDemoComponent
      },
      {
        path: 'selectDemo',
        component: SelectDemoComponent
      },
      {
        path: 'paginationDemo',
        component: PaginationDemoComponent
      },
      {
        path: 'httpPaginationDemo',
        component: HttpPaginationDemoComponent
      },
      {
        path: 'switchDemo',
        component: SwitchDemoComponent
      },
      {
        path: 'timelineDemo',
        component: TimelineDemoComponent
      },
      {
        path: 'datepickerDemo',
        component: DatepickerDemoComponent
      },
      {
        path: 'treeDemo',
        component: TreeDemoComponent
      },
      {
        path: 'ztreeDemo',
        component: ZtreeDemoComponent
      },
      {
        path: 'imgSelectToBaseDemo',
        component: ImgSelectToBaseDemoComponent
      },
      {
        path: 'fileUploadDemo',
        component: FileUploadDemoComponent
      },
      {
        path: 'customScrollbarDemo',
        component: CustomScrollbarDemoComponent
      },
      {
        path: 'imageViewerDemo',
        component: ImageViewerDemoComponent
      },
      {
        path: 'spinDemo',
        component: SpinDemoComponent
      },
      {
        path: 'ngBootstrapDemo',
        component: NgBootstrapDemoComponent
      },
      {
        path: 'bootstrapDemo',
        component: BootstrapDemoComponent
      },
      {
        path: 'storageDemo',
        component: StorageDemoComponent
      },
      {
        path: 'pageBrowserDemo',
        component: PageBrowserDemoComponent
      },
      {
        path: 'editorDemo',
        component: EditorDemoComponent
      },
      {
        path: 'agGridDemo',
        component: AgGridDemoComponent
      },
      {
        path: 'simpleDataTableDemo',
        component: SimpleDataTableDemoComponent
      },
      {
        path: 'colorPickerDemo',
        component: ColorPickerDemoComponent
      },
      {
        path: 'stepDemo',
        component: StepDemoComponent
      },
      {
        path: 'validatorDemo',
        component: ValidatorDemoComponent
      },
      {
        path: 'qrcodeDemo',
        component: QrcodeDemoComponent
      },
      {
        path: 'lineChartDemo',
        component: LineChartDemoComponent
      }, {
        path: 'barChartDemo',
        component: BarChartDemoComponent
      },
      {
        path: 'doughnutChartDemo',
        component: DoughnutChartDemoComponent
      },
      {
        path: 'radarChartDemo',
        component: RadarChartDemoComponent
      },
      {
        path: 'pieChartDemo',
        component: PieChartDemoComponent
      }, {
        path: 'polarAreaChartDemo',
        component: PolarAreaChartDemoComponent
      }, {
        path: 'baseChartDemo',
        component: BaseChartDemoComponent
      },
      {
        path: 'echartDemo',
        component: EchartsDemoComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {
}

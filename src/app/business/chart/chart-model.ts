export class TableColumn {
  //引用名称
  referenceName: string;
  // 列名称
  colName: string;
  //列类型
  colType: string;
  //列别名
  colAliase: string;
  //描述
  description: string;

  constructor() {
    this.referenceName = 'col_';
    this.colName = "";
    this.colType = "1";
    this.colAliase = "";
    this.description = "";
  }
}

export class ChartConfigModel {
  //项目组
  groupId: string;
  //hostId
  hostId: string;
  //监控名称
  monitorName: string;
  //数据源路径
  filePath: string;
  //分隔符
  separator: string;
  //分割属性表
  tableColumnVOS: Array<TableColumn>;
  //exeSql
  exeSql: string;

  constructor() {
    this.groupId = '';
    this.hostId = '';
    this.monitorName = '';
    this.filePath = '';
    this.separator = '';
    this.tableColumnVOS = new Array<TableColumn>();
    this.exeSql = '';
  }

}


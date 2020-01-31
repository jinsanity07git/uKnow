仿真结果解析geojson

`装备` CORSIM仿真器装备集 -> `组件`   TRF解析geojson_Node  [link](http://utb.cloud/uDev/item/75396443fue236fu4018fuac0afuaa357bec11b2)  

#### 功能介绍

​	此装备能够解析CORSIM输出文件中的MOE指标（csv文件），并且将`特定指标`与实际路段`信息相关联，储存于geojson格式的文件中，实现了在实际地图下 基于路段信息的指标分类，方便决策者查看相关信息。

#### 数据文件

输入文件：

* `geo_link`文件
  - 从`TRF解析解析link`装备中获得(路面路段或者高速路段)
* `指标文件`文件
* csv文件
  * 需要从CORSIMF的仿真结果中获取



输出文件

* `geo_link(评价)`文件
  * 输出路面道路或者是高架道路，由`geo_link`文件类型决定

#### 使用方法

1. 准备文件：`geo_link`文件和 `指标文件`文件
2. 上传上述文件到。。。
3. 点击运行
4. 下载`geo_link(评价)`文件




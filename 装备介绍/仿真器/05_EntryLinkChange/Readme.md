# Link事件修改器 (待更新)

 修改对象：

Entry link 

```
time_period
distribution code ???

```

[distribution code](file:///Users/jinsanity/OneDrive - UWM/Documents/Uproduct/TSIS/references/zg66y-vtjgr/zg66y-vtjgr_files/rt11.discussionofselectedentries.htm): Entry_10

python readlines replacements in-place

[Search and replace a line in a file in Python](https://stackoverflow.com/questions/39086/search-and-replace-a-line-in-a-file-in-python)

### Time  period处理

*  type 170 &210 

* case: by` parse_Rtype.py`

  * 270sim.trf

  * ```
    [
    ['  0', '  1', '  2', '  3', '  4', '  5', ' 10', ' 11', ' 14', ' 21', ' 35', ' 36', ' 43', ' 45', ' 46', ' 47', ' 50'], 
    ['170', ' 10', ' 19', ' 20', ' 25', ' 29', ' 32', ' 33', ' 50', ' 68', ' 70'], 
    
    ['170', '195', '196', '210'], 
    ['170', '210'], 
    ['170', '210']
    ]
    ```

    170 sperates freesim and netsim

    **RT170: Entry-Specific Data**

    

    | **ENTRY** | **STRCOL** | **ENDCOL** | **NAME**                         | **TYPE** | **RANGE** | **UNITS**      | **DEFAULT** |
    | --------- | ---------- | ---------- | -------------------------------- | -------- | --------- | -------------- | ----------- |
    | 1         | 1          | 4          | Code indicating the Next Section | Integer  | 0,3,8     | Not Applicable | 0           |
    | 2         | 78         | 80         | Record Type                      | Integer  | 170       | Not Applicable | None        |

    | **Value of Entry 1** | **Meaning**                                                  |
    | -------------------- | ------------------------------------------------------------ |
    | **0 or blank**       | All of the sub-network data for this time period have been read. All of the subsequent record types in the input stream are numbered above **170. The following record could be Record Type 210.** |
    | **3**                | Microscopic urban: NETSIM                                    |
    | **8**                | Microscopic freeway: FRESIM                                  |

  * Copy of testwjw.trf

    ```
    [['  1', '  2', '  3', '  4', '  5', ' 19', ' 20', ' 25', ' 29', ' 50', ' 53'], 
    ['170', '195', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210', ' 50', ' 53'], 
    ['170', '210']]
    ```

    Record Type 50: Entry Link Volumes

    Record Type 53: Entry Link Volume Variations within a Time Period

     

  





面向对象 or 面向过程 or 面向接口

* [面向接口编程详解（一）——思想基础](https://www.cnblogs.com/leoo2sk/archive/2008/04/10/1146447.html) 

* 面向接口'R11E5'

  * [Loop through all nested dictionary values?](https://stackoverflow.com/questions/10756427/loop-through-all-nested-dictionary-values)  : recursion

  

### Link 对象问卷问题

1. 题型之间的关联性 
   eg. 车道数—车道渠化设置
2. 单位问题

3. TRF 中不存在的entry 是否需要重新添加？
   eg. Type 10 — link name

* 添加逻辑判断

  Old

  ```python
      with open(input01,'r') as file:
          f = file.readlines()
          for line in f:
              for item in ls_dict:
                  line = RepLine(line, **item)        
              outfile.write(line)
      outfile.close()
  
  RepLine----
  if line[0:8] == link_ID and line[77:80]== Type:
  ```

  New

  判断新增的type是否存在于trf已有的type中：` 集合概念`

  ```python
  generte a type set{}
  
  if Type not in {}:
    1. create new line
    2. Repline
  
  
  ```

  
import sys,os
import json
from pyecharts.render import engine
from jinja2 import Environment, PackageLoader, select_autoescape
import ast
from copy import deepcopy
from pyecharts.commons import utils
# os.chdir(sys.argv[1])

def name_index(key,value,newdict):
    if "Array" in str(key):
        nkey = key.split('_')[0]
        newdict[nkey] = ast.literal_eval(value)
    elif "number" in str(key):
        nkey = key.split('_')[0]
        newdict[nkey] = int(value)
    elif "boolean" in str(key):
        nkey = key.split('_')[0]
        if value == "true":
            newdict[nkey] = True
        else:
            newdict[nkey] = False
    else:
        newdict[key] = value
    return newdict 

def conv_dict_type(datadict):
    # deepcopy before data manipulation
    newdict = {}

    for key,value in datadict.items():
        # recurse into nested dicts
        if isinstance(value, dict):
            newdict[key] = conv_dict_type(datadict[key])
        # convert to string
        elif isinstance(value, str): 
            # print (key)
            newdict = name_index(key,value,newdict)

        elif isinstance(value, list) and key == "series":
            ls_dict = []
            for cnt,item in enumerate(value):
                temp_dict = conv_dict_type(item)
                ls_dict.append(temp_dict)
            newdict["series"] = ls_dict

    return newdict

# def default(o):
#     if isinstance(o, (datetime.date, datetime.datetime)):
#         return o.isoformat()
#     if isinstance(o, utils.JsCode):
#         return (
#             o.replace("\\n|\\t", "").replace(r"\\n", "\n").replace(r"\\t", "\t").js_code
#         )
#     if isinstance(o, BasicOpts):
#         if isinstance(o.opts, Sequence):
#             return [utils.remove_key_with_none_value(item) for item in o.opts]
#         else:
#             return utils.remove_key_with_none_value(o.opts)

if __name__ == "__main__": 

    input01 =  'screen.json'

    with open(input01,'r') as f:

      datadict = json.load(f)

    newdict = conv_dict_type(datadict)
    newdict["series"] = newdict["series"]["series"]
    newdict["angleAxis"] = {}
    newdict["polar"] = {}
    
    # print(json.dumps(newdict, indent=4))

    from jinja2 import Environment, PackageLoader, select_autoescape
    env = Environment(
    loader=PackageLoader('test','render'),
    autoescape=select_autoescape(['html', 'xml'])
    )
    template = env.get_template('basic_chart.html')

    
    options = json.dumps(newdict, indent=4)
    outhtml = template.render( UTB_echarts=options)
    # print (outhtml)
    with open("pyechart.html", "w",encoding='utf8') as fh:
        fh.write(outhtml)
        print ("chart generated")




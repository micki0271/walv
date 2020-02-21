const Widgets_opt = [
    {
        value: 'obj',
        label: "Object"            
    },
    {
        value: 'form',
        label: 'Form',
        children: [
            {
                value: 'btn',
                label: "Button"
            },
            {
                value: 'label',
                label: "Label",
            },
            {
                value: 'sw',
                label: "Switch"            
            },
            {
                value: 'cb',
                label: "Checkbox"
            },
            {
                value: 'ddlist',
                label: "Drop-Down List"            
            },
            {
                value: 'roller',
                label: "Roller"
            }, 
            {
                value: 'slider',
                label: "Slider"
            },          
        ],
    },
    {
        value: 'data',
        label: 'Data',
        children: [
            {
                value: 'bar',
                label: "Bar"            
            },
            {
                value: 'gauge',
                label: "Gauge"
            },
            {
                value: 'led',
                label: "LED"
            }, 
            {
                value: 'chart',
                label: "Chart"
            },
            {
                value: 'arc',
                label: "Arc"
            },
            {
                value: 'calendar',
                label: "Calendar"
            },

        ]
    },
    {
        value: 'layer',
        label: 'Layer',
        children: [
            {
                value: 'page',
                label: "Page"
            },
            {
                value: 'cont',
                label: "Container"
            },
            {
                value: 'win',
                label: "Window"
            }
        ]
    }

]

// const other_attribute = ['DRAG', 'CLICK', 'HIDDEN', 'TOP'];


//The Python code to Initialize the environment
const lvEnv = [
    "import ujson",
    "import lvgl as lv",
    "lv.init()",
    "import SDL",
    "SDL.init()",
    /* Register SDL display driver. */
    "disp_buf1 = lv.disp_buf_t()",
    "buf1_1 = bytes(960*10)",
    "lv.disp_buf_init(disp_buf1,buf1_1, None, len(buf1_1)//4)",
    "disp_drv = lv.disp_drv_t()",
    "lv.disp_drv_init(disp_drv)",
    "disp_drv.buffer = disp_buf1",
    "disp_drv.flush_cb = SDL.monitor_flush",
    "disp_drv.hor_res = 480",
    "disp_drv.ver_res = 320",
    "lv.disp_drv_register(disp_drv)",
    /*Regsiter SDL mouse driver*/
    "indev_drv = lv.indev_drv_t()",
    "lv.indev_drv_init(indev_drv)",
    "indev_drv.type = lv.INDEV_TYPE.POINTER;",
    "indev_drv.read_cb = SDL.mouse_read;",
    "lv.indev_drv_register(indev_drv);",
    /* Create a screen with a button and a label */
    "screen = lv.obj()",
    /* Load the screen */
    "lv.scr_load(screen)",
    "baseAttr = dir(lv.obj)"
];


/* Define special function for python*/
const DEF_FUN = [
    //Get and send JSON format text
    "def getobjattr(obj, id):",
    "    d={}",
    "    d['id']=id",
    "    for i in dir(obj):",
    "        if 'get_' in i:",
    "            try:",
    "                ret = eval(id + '.' + i + '()')",
    "                if isinstance(ret, (int,float,str,bool)):",
    "                    d[i] = ret",
    "            except:",
    "                pass",
    "    print('\x06'+ujson.dumps(d)+'\x15')",
    "def getxy(obj, id):",
    "    d={}",
    "    d['id']=id",
    "    d['x']=obj.get_x()",
    "    d['y']=obj.get_y()",
    "    print('\x06'+ujson.dumps(d)+'\x15')",
    //Determine what event is:
    //Test b: b.set_event_cb(lambda obj=None, event=-1,name='b',real_obj=b:EventCB(real_obj,name,event))
    "def EventCB(obj, id, event):",
    "    if event == lv.EVENT.DRAG_END:",
    "        getxy(obj, id)"
];


const Getter = {
    "obj": {
        "x": "get_x",
        "y": "get_y",
        "width": "get_width",
        "height": "get_height",
        "drag": "get_drag",
        "click": "get_click",
        "hidden": "get_hidden",
        "top": "get_top",
    },

    "text": {
        "text": "get_text",
    }

}

const Setter = {
    "obj": {
        "x": "set_x",
        "y": "set_y",
        "width": "set_width",
        "height": "set_height",
        "drag": "set_drag",
        "click": "set_click",
        "hidden": "set_hidden",
        "top": "set_top",
    },

    "text": {
        "text": "set_text",
    }
}
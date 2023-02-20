(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">11111</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","13","38","99","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","127","38","374","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("폼에 생성되어 있는 오브젝트/컴포넌트 정보를 구하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","12","93","104","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","128","90","339","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컴포넌트ID String 값을 오브젝트로 만들기");
            this.addChild(obj.name, obj);

            obj = new Div("div00","630","13","400","271",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","31","23","339","149",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","30","183","188","32",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","131","130","279","64",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","30","310","115","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("showModal");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","33","380","114","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","240","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Param1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","111","240","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("Nexacro");
            obj.set_positionstep("0");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","33","433","112","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("timer");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","33","483","114","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("killTimer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form01.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        // 	var arrObj = this.all;
        // 	for(var i=0;i<arrObj.length; i++)
        // 	{
        // 		trace(arrObj[i] + ":" + arrObj[i].id);
        // 	}


        	this.fn_compList(this);
        };

        this.fn_compList = function(pObj)
        {
        //	var arrObj = pObj.all;
        //	var arrObj = pObj.components;
        	var arrObj = pObj.objects;

        	for(var i=0; i<arrObj.length; i++)
        	{
        		trace(pObj.parent + " : " + pObj.valueOf() + " : " + arrObj[i] + " : " + arrObj[i].name);

        		var sType = arrObj[i].valueOf();
        		if(sType == "[object Div]"){
        			this.fn_compList(arrObj[i].form);
        		}
        		else if(sType == "[object Tab]"){
        			for(var j=0; j<arrObj[i].tabpages.length; j++){
        				//trace( arrObj[i].valueOf() + " : " + arrObj[i].tabpages[j].name);
        				this.fn_compList(arrObj[i].tabpages[j].form);
        			}
        		}
        	}
        }

        this.btn01_onclick = function(obj,e)
        {
        	var sGridId = this.grd00.name;
        	trace(sGridId + ":" + typeof sGridId);

        	//var objGrid = this.components[sGridId];
        	//var objGrid = this.objects[sGridId];
        	var objGrid = this.all[sGridId];
        	trace(objGrid + ":" + typeof objGrid);
        };

        //  쇼모달
        this.btn02_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0 //vleft
        					  , 0 // vtop
        					  , 400 // 넓이
        					  , 400 // 높이
        					  , null
        					  , null
        					  , "EduBasic::User\\Form01_sub.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)") // 컬러값
        	objChildFrame.set_dragmovetype("all");


        	var objParam = { param1:this.edt_name.value,
        					 param2:this.ds00};

        	objChildFrame.showModal( this.getOwnerFrame() // 현재 자신의 폼에
        	                       , objParam // 파라미터 전달
        						   , this // 폼에대한 정보 넘겨주고
        						   , "fn_popupCallback");	// 값을 전달받기위한 callback
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		var arrRtn = strReturn.split(":");
        		this.edt_name.set_value(arrRtn[0]);
        		trace(arrRtn[0]  + arrRtn[1]);
        	}
        };

        //open
        this.btn03_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "showtitlebar=true showstatusbar=false "
        	               + "resizable=true autosize=true titletext=Modeless Popup"; // 브라우저 띄울떄 사용하는 오픈스타일

        	var objParam = { param1:this.edt_name.value,
        					 param2:this.ds00};

        	//띄울 떄
        	nexacro.open("chf_popup2"
        	           , "EduBasic::User\\Form01_sub.xfdl" // 서브 디렉토리라서 역슬래시, 서브디렉토리가 없다면 :: 식으로 표현
        			   , this.getOwnerFrame()
        			   , objParam // 파라미터
        			   , sOpenStyle // 스타일
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };


        this.fn_return = function(objDs)
        {
        	this.ds02.copyData(objDs) //데이터 타입만 복사
        	trace(this.ds02.saveXML());
        }

        //타이머
        this.btn04_onclick = function(obj,e)
        {
        	this.setTimer(1, 1000); // 1초에 한번씩 이벤트를 실행시키겠다. 1000-> 1초, 10초 --> 만

        };

        this.Form01_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)  // 타이머 아이디가 1이라고 생각하면 된다.
        	{
        		//this.killTimer(1); // 여기서해주게되면 한번만 해주고 끝난다.
        		trace("event");
        	}
        };

        //타이머 종료
        this.btn05_onclick = function(obj,e)
        {
        	this.killTimer(1); //이벤트 아이디 1번 지정
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form01_ontimer,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.div00.form.btn00.addEventHandler("onclick",this.div00_btn00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
        };
        this.loadIncludeScript("Form01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

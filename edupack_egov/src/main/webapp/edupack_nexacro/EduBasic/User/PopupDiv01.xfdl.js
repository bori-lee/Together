(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupDiv01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">John </Col><Col id=\"EMPL_ID\">KR101</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"EMPL_ID\">KR102</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"EMPL_ID\">KR103</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Melon</Col><Col id=\"EMPL_ID\">KR104</Col></Row><Row><Col id=\"DEPT_NAME\">Education</Col><Col id=\"FULL_NAME\">Kate </Col><Col id=\"EMPL_ID\">KR105</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Bts</Col><Col id=\"EMPL_ID\">KR106</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Andrew </Col><Col id=\"EMPL_ID\">KR107</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Belle</Col><Col id=\"EMPL_ID\">KR108</Col></Row><Row><Col id=\"DEPT_NAME\">Sales</Col><Col id=\"FULL_NAME\">Elsa</Col><Col id=\"EMPL_ID\">KR109</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kein </Col><Col id=\"EMPL_ID\">KR110</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Ivy</Col><Col id=\"EMPL_ID\">KR111</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Kara</Col><Col id=\"EMPL_ID\">KR112</Col></Row><Row><Col id=\"DEPT_NAME\">Marketing</Col><Col id=\"FULL_NAME\">Twice</Col><Col id=\"EMPL_ID\">KR113</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdiv00","564","16","380","240",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","28","13","321","159",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_NAME\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"EMPL_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMPL_ID\"/></Band></Format></Formats>");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Button("btn00","85","192","207","40",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.pdiv00.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv01","580","290","376","260",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_url("EduBasic::User/PopupDiv01_Sub.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","20","58","111","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","20","18","340","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Contents로 구성된 PopupDiv1을 버튼 하단에 오픈.");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","141","60","85","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empl_id","233","61","91","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","20","143","108","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","20","112","340","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("url으로 구성된 PopupDiv2을 버튼 하단에 오픈");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept2","138","147","85","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_empl_id2","239","144","91","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv02","9","340","531","250",null,null,null,null,null,null,this);
            obj.set_text("pdiv02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_from","-9","4","260","157",null,null,null,null,null,null,this.pdiv02.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.pdiv02.addChild(obj.name, obj);

            obj = new Calendar("cal_to","260","5","271","157",null,null,null,null,null,null,this.pdiv02.form);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            this.pdiv02.addChild(obj.name, obj);

            obj = new Button("btn00","41","168","176","40",null,null,null,null,null,null,this.pdiv02.form);
            obj.set_taborder("2");
            obj.set_text("ok");
            this.pdiv02.addChild(obj.name, obj);

            obj = new Button("btn01","298","168","163","36",null,null,null,null,null,null,this.pdiv02.form);
            obj.set_taborder("3");
            obj.set_text("cancel");
            this.pdiv02.addChild(obj.name, obj);

            obj = new Calendar("cal_from","30","282","180","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_popuptype("none");
            obj.set_value("20220901");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","270","279","222","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_popuptype("none");
            obj.set_value("20220922");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","45","248","277","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기간달력");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","235","285","32","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("~");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv01
            obj = new Layout("default","",0,0,this.pdiv01.form,function(p){});
            this.pdiv01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv02.form
            obj = new Layout("default","",0,0,this.pdiv02.form,function(p){});
            this.pdiv02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::User/PopupDiv01_Sub.xfdl");
        };
        
        // User Script
        this.registerScript("PopupDiv01.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var nX = 0; //parseInt(0); // var nX = 0; 이렇게도 가능
        	var nY = obj.height; //parseInt(0);
        	this.pdiv00.trackPopupByComponent(obj,nX, nY); // 컴포넌트를 기준으로 PopupDiv 컴포넌트의 위치를 지정합니다.
        	//넓이, 높이
        };

        this.pdiv00_btn00_onclick = function(obj,e)
        {
        	var sDept = this.Dataset1.getColumn(this.Dataset1.rowposition, "DEPT_NAME");
        	var sName = this.Dataset1.getColumn(this.Dataset1.rowposition, "FULL_NAME");
        	this.edt_dept.set_value(sDept);
        	this.edt_empl_id.set_value(sName);
        	this.pdiv00.closePopup(); // 메소드로 닫히는 방법.
        };


        this.btn01_onclick = function(obj,e)
        {
        	var nX = 0; //parseInt(0); // var nX = 0; 이렇게도 가능
        	var nY = obj.height; //parseInt(0);
        	this.pdiv01.trackPopupByComponent(obj,
        									nX,
        								    nY,
        									null, // 내가 디자인한 사이즈만큼. 넓이
        									null, // 높이 F1 에서 확인가능
        									"fn_pDivCallback"); // 언제닫힐지 모르니까 callback이라는 함수를 통해서 리턴받는다.
        };

        this.fn_pDivCallback = function(objID, rtnValue)
        {

        	if(rtnValue == "")
        	{
        		return;
        	}
        	if(objID == "pdiv01")
        	{
        		this.edt_dept2.set_value(rtnValue[0]);
        		this.edt_empl_id2.set_value(rtnValue[1]);

        	}
        }

        this.cal_from_ondropdown = function(obj,e)
        {
        	var nX = 0; //parseInt(0); // var nX = 0; 이렇게도 가능
        	var nY = obj.height; //parseInt(0);

        	var sFrom = this.cal_from.value;
        	var sTo = this.cal_to.value;
        	this.pdiv02.form.cal_from.set_value(sFrom);
        	this.pdiv02.form.cal_to.set_value(sTo);

        	this.pdiv02.trackPopupByComponent(obj,nX, nY); // 컴포넌트를 기준으로 PopupDiv 컴포넌트의 위치를 지정합니다.
        	//넓이, 높이

        };

        this.pdiv02_btn00_onclick = function(obj,e)
        {
        	var sFrom = this.pdiv02.form.cal_from.value;
        	var sTo = this.pdiv02.form.cal_to.value;

        	this.cal_from.set_value(sFrom);
        	this.cal_to.set_value(sTo);
        	this.pdiv02.closePopup();

        };

        //처음날짜가 더 높을때 오류메세지 출력
        this.pdiv02_oncloseup = function(obj,e)
        {
        	if(this.cal_from.value > this.cal_to.value)
        	{
        		alert("to 날짜가 같거나 커야 합니다");
        		this.cal_to.set_value(""); // 뒤에꺼 초기화
        	}
        };

        this.pdiv02_btn01_onclick = function(obj,e)
        {
        	this.pdiv02.closePopup(); // 닫히는거
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.pdiv00.form.btn00.addEventHandler("onclick",this.pdiv00_btn00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.edt_dept2.addEventHandler("onchanged",this.edt_dept00_onchanged,this);
            this.pdiv02.addEventHandler("oncloseup",this.pdiv02_oncloseup,this);
            this.pdiv02.form.btn00.addEventHandler("onclick",this.pdiv02_btn00_onclick,this);
            this.pdiv02.form.btn01.addEventHandler("onclick",this.pdiv02_btn01_onclick,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_from.addEventHandler("onchanged",this.cal_from_onchanged,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
        };
        this.loadIncludeScript("PopupDiv01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

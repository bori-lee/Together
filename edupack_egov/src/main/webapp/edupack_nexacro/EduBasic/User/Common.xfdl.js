(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Common");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NAME\">이순신 </Col><Col id=\"COL_SIZE\">200</Col><Col id=\"COL_COLOR\">gold</Col></Row><Row><Col id=\"COL_NAME\">유관순</Col><Col id=\"COL_SIZE\">300</Col><Col id=\"COL_COLOR\">pink</Col></Row><Row><Col id=\"COL_NAME\">세종대왕</Col><Col id=\"COL_COLOR\">yellow</Col><Col id=\"COL_SIZE\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","140","10",null,"50","788",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","btn00:20","15","93","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","68","80","32","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("sta00");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","156","74","89","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컴포넌트 생성 ");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","btn02:21","70","88","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("컴포넌트 삭제");
            this.addChild(obj.name, obj);

            obj = new Div("div00","166","140","408","112",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","6","159","114","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div 컴포넌트 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","8","209","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div 컴포넌트 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","12","262","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("tab 컴포넌트 생성 ");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","16","330","120","58",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("tab 컴포넌트 삭제");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","195","269","371","119",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new Button("btn08","20","405","116","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Event 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","619","57","71","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("바인딩");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bind","696","60","136","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","630","105","260","130",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_NAME\"/><Cell col=\"1\" text=\"COL_SIZE\"/><Cell col=\"2\" text=\"COL_COLOR\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NAME\"/><Cell col=\"1\" text=\"bind:COL_SIZE\"/><Cell col=\"2\" text=\"bind:COL_COLOR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","425","18","97","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btn10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

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
        this.registerScript("Common.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	trace("getoffsetWidth : " + obj.getOffsetWidth()); //계산할때는 offset으로 시작하는 메소드를 쓴다. 넓이를 지웠을때 픽셀의 값은 안나옴
        	trace("getPixelWidth : " + obj.getPixelWidth());
        };


        //버튼을 눌렀을 때 컴포넌트 생성
        this.btn02_onclick = function(obj,e)
        {
        	var objBtn = new Button();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        	objBtn.init("btn_Comp", 320, 380, 150, 100); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        	this.addChild("btn_Comp", objBtn); // 생성했는데 화면에다가 붙여주는 것
        	objBtn.set_text("Create Button");  // 생성한 것에 텍스트
        	objBtn.set_background("skyblue");  // 배경색깔
        	objBtn.show();  // 화면에보여줄려고 하는 메소드 show

        };

        this.btn03_onclick = function(obj,e)
        {
        	var objBtn = this.removeChild("btn_Comp"); // Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        	objBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        	objBtn = null;
        };

        //div안에 넣고싶다면.,.
        this.btn04_onclick = function(obj,e)
        {
        	var objBtn = new Button();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        	objBtn.init("btn_DivComp", 10, 10, 150, 100); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        	this.div00.form.addChild("btn_DivComp", objBtn); // 생성했는데 화면에다가 붙여주는 것
        	objBtn.set_text("Create Button");  // 생성한 것에 텍스트
        	objBtn.set_background("skyblue");  // 배경색깔
        	objBtn.show();  // 화면에보여줄려고 하는 메소드 show

        };

        this.btn05_onclick = function(obj,e)
        {

        	var objBtn = this.div00.form.removeChild("btn_DivComp"); // Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        	objBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        	objBtn = null;

        };

        //tab00.Tabpage1.form.btn00

        this.btn06_onclick = function(obj,e)
        {
        	var objBtn = new Button();  //내가 만들려고하는 오브젝트, 그리드를 만들고싶으면 new grid(); 콤보도 마찬가지로 표현..
        	objBtn.init("btn_tabComp", 10, 10, 150, 100); // 컴포넌트에 대한 초기값, (아이디, left, top, width, height)
        	this.tab00.Tabpage1.form.addChild("btn_tabComp", objBtn); // 생성했는데 화면에다가 붙여주는 것
        	objBtn.set_text("Create Button");  // 생성한 것에 텍스트
        	objBtn.set_background("skyblue");  // 배경색깔
        	objBtn.show();  // 화면에보여줄려고 하는 메소드 show

        };

        this.btn07_onclick = function(obj,e)
        {
        	var objBtn = this.tab00.Tabpage1.form.removeChild("btn_tabComp"); // Form에 동적으로 추가된 컴포넌트를 제거하는 메소드
        	objBtn.destroy(); //destroy와 null까지해줘야 메모리까지 삭제, 한번더 초기화 (그래서 쌍으로 둘다 써주기)
        	objBtn = null;
        };


        this.btn08_onclick = function(obj,e)
        {
        	this.btn_Comp.addEventHandler("onclick", this.fn_temp,this); // 이벤트추가 버튼 누르면 밑에 이벤트 trace 디버깅됨

        };
        this.fn_temp = function()
        {
        	trace("event");
        }



        this.btn09_onclick = function(obj,e)
        {
        	//BindItem : 컴포넌트의 특정 속성과 데이터셋의 데이터를 바인딩하기 위해 사용하는 오브젝트
        	var objBindItem = new BindItem();
        	objBindItem.init("item00", "edt_bind", "value", "ds00", "COL_NAME"); //아이디,
        	this.addChild("item00", objBindItem);
        	objBindItem.bind();

        	var objBindItem = new BindItem();
        	objBindItem.init("item01", "edt_bind", "width", "ds00", "COL_SIZE"); //아이디,
        	this.addChild("item01", objBindItem);
        	objBindItem.bind();

        	var objBindItem = new BindItem();
        	objBindItem.init("item02", "edt_bind", "background", "ds00", "COL_COLOR"); //아이디,
        	this.addChild("item02", objBindItem);
        	objBindItem.bind();

        };

        this.btn10_onclick = function(obj,e)
        {
        	var m = moment();
        	trace(m.year());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.btn10.addEventHandler("onclick",this.btn10_onclick,this);
        };
        this.loadIncludeScript("Common.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

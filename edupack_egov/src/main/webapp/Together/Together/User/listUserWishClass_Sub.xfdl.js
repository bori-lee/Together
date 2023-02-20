(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("listUserWishClass_Sub");
            this.set_titletext("찜한 모임");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClass", this);
            obj._setContents("<ColumnInfo><Column id=\"location_name\" type=\"STRING\" size=\"20\"/><Column id=\"title\" type=\"STRING\" size=\"50\"/><Column id=\"sumnail_img\" type=\"STRING\" size=\"200\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"class_user_cnt\" type=\"INT\" size=\"5\"/><Column id=\"status\" type=\"INT\" size=\"256\"/><Column id=\"class_no\" type=\"INT\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoinClass00", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"classNo\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divListUserWishClass","5","16","630","468",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","205","7","210","53",null,null,null,null,null,null,this.divListUserWishClass.form);
            obj.set_taborder("0");
            obj.set_text("찜한 모임 ");
            obj.set_textAlign("center");
            obj.set_font("18pt/normal \"휴먼모음T\"");
            this.divListUserWishClass.addChild(obj.name, obj);

            obj = new Button("btnDelete","5","0","60","26",null,null,null,null,null,null,this.divListUserWishClass.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("white");
            obj.set_border("1px solid black");
            obj.set_color("black");
            this.divListUserWishClass.addChild(obj.name, obj);

            obj = new Grid("grdListUserWishClass","45","93","540","351",null,null,null,null,null,null,this.divListUserWishClass.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsClass");
            obj.set_autofittype("col");
            obj.set_border("1px solid darkgray");
            obj.set_nodatatext("찜한 모임이 없습니다 ");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"281\"/></Columns><Rows><Row size=\"36\"/><Row size=\"31\"/><Row size=\"33\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" rowspan=\"3\" displaytype=\"imagecontrol\" text=\"bind:fileimg\" edittype=\"none\" imagestretch=\"fit\"/><Cell col=\"2\" text=\"모임명\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell col=\"3\" text=\"bind:title\" color=\"navy\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"2\" text=\"활동지역\" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"1\" col=\"3\" text=\"bind:location_name\"/><Cell row=\"2\" col=\"2\" text=\"회원수 \" textAlign=\"center\" font=\"bold 10pt/normal &quot;Yu Gothic UI Semibold&quot;\"/><Cell row=\"2\" col=\"3\" text=\"bind:class_user_cnt\" displaytype=\"normal\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divListUserWishClass.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divListUserWishClass.form
            obj = new Layout("default","",0,0,this.divListUserWishClass.form,function(p){});
            this.divListUserWishClass.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",640,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("listUserWishClass_Sub.xfdl", function() {
        /**
        *	개발 표준화 작업
        *	@MenuPath C:\Users\tobesoft\Documents\TOBESOFT\Nexacro N\projects\Together\Together\User
        *	@FileName listUserWishClass_Sub.xfdl
        *	@Creator 이수아
        *	@CreateDate 2022/11/05
        *	@Description 내가 찜한 모임 목록
        ******************소스 수정 이력**********************************************
        *	date		Modifier	Description
        ********************************************************************************
        *	2022/11/05		이수아		최초 생성
        *
        *
        */

        /**************************************************************************
        * FORM 변수 선언 영역 (fv)
        **************************************************************************/
        this.fvApp = nexacro.getApplication();
        this.fvObjApp = this.ufnGetApplication();
        var sClassNo = this.fvApp.gvClassNo;


        /**************************************************************************
        * FORM EVENT 영역(onload, onclose)
        **************************************************************************/
        /**
        * @description 화면 화면이 load될 때 처리할 로직(필수)
        */

        this.listUserWishClass_Sub_onload = function(obj,e){

        	this.dsClass.clearData();
        	this.dsClass.addRow();

        	this.ufnTransaction(
        		"getWishClass"
        		,"getWishClass.do"
        		,""
        		,"dsClass=out_class"
        		,"paramUserId="+this.fvObjApp.gdsUser.getColumn(0, "userId")
        		,"fnCallback")

        };

        /**************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        **************************************************************************/
        /**
        * @description 메세지 콜백
        */

        this.fnCallback = function(trId)
        {
        	if(trId == "deleteWishClass"){
        		this.ufnAlert("msg.delete.success");

        		this.ufnTransaction(
        			"getWishClass"
        			,"getWishClass.do"
        			,""
        			,"dsClass=out_class"
        			,"paramUserId="+this.fvObjApp.gdsUser.getColumn(0, "userId")
        			,"fnCallback")


        	}else if(trId == "getWishClass"){

        	}

        }

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
        * @description dsClass의 데이터셋 체크박스 처리
        */
        this.dsClass_oncolumnchanged = function(obj,e)
        {

        	this.dsClass.set_enableevent(false);
        	for(var i = 0; i<this.dsClass.rowcount; i++){
        		if(i != e.row){
        			this.dsClass.setColumn(i, "chk", 0);
        		}

        	}
        	this.dsClass.set_enableevent(true);
        };

        /**
        * @description 찜 삭제 클릭
        */
        this.divListUserWishClass_btnDelete_onclick = function(obj,e)
        {
        	if(this.dsClass.getCaseCount("chk == '1'") == 0){
        		this.ufnAlert("msg20");
        	}else{
        		var rPos = this.dsClass.findRow("chk", '1');

        		this.dsJoinClass00.clearData();
        		this.dsJoinClass00.addRow();
        		this.dsJoinClass00.setColumn(0, "userId", this.fvObjApp.gdsUser.getColumn(0, "userId"));
        		this.dsJoinClass00.setColumn(0, "classNo", this.dsClass.getColumn(rPos, "class_no"));

        		this.ufnTransaction(
        			"deleteWishClass"
        			,"deleteWishClass.do"
        			,"dsJoinClass00=dsJoinClass00"
        			,""
        			,"paramClassNo="+this.dsJoinClass00.getColumn(0, "classNo")
        			,"fnCallback") };


        };

        /**
        * @description 그리드의 이미지 클릭 시 모임 상세폼으로 이동
        */
        this.divListUserWishClass_grdListUserWishClass_oncellclick = function(obj,e)
        {
        	if(this.divListUserWishClass.form.grdListUserWishClass.getCellPos() == 1){
        		this.fvApp.gvClassNo = this.dsClass.getColumn(this.dsClass.rowposition, "class_no");
        		//trace("클래스넘버" + this.fvApp.gvClassNo);
        		this.fvObjApp.gvMainFrame.set_formurl("");
        		this.fvObjApp.gvMainFrame.set_formurl("Together::Class/getClass.xfdl");
        		this.close();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.listUserWishClass_Sub_onload,this);
            this.divListUserWishClass.form.btnDelete.addEventHandler("onclick",this.divListUserWishClass_btnDelete_onclick,this);
            this.divListUserWishClass.form.grdListUserWishClass.addEventHandler("oncellclick",this.divListUserWishClass_grdListUserWishClass_oncellclick,this);
            this.dsClass.addEventHandler("oncolumnchanged",this.dsClass_oncolumnchanged,this);
        };
        this.loadIncludeScript("listUserWishClass_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

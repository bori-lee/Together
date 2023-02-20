(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CmmMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCbo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCbo","0","0",null,"28","29",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnCbo",null,"0","28","28","2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_MultiCombo");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCbo","0","29",null,"129","0",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_MultiCombo");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCbo
            obj = new Layout("default","",0,0,this.pdvCbo.form,function(p){});
            this.pdvCbo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",200,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CmmMultiCombo.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    Cmm > CmmMultiCombo.xfdl (공통 멀티콤보)
        *  @FileName 	CmmMultiCombo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.01
        *  @Desction    공통 멀티콤보
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	Education 	           	    최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this._objBindDs;
        this._objTarget;
        //this._sTarget;

        this.comboinnerdataset;
        this.combocodecolumn;
        this.combodatacolumn;

        this.allcheck;
        this.callbackfunc;

        this.maxcount;

        this.fvTerm = 3;
        this.fvBottomTerm = 12;
        this.fvWidth = 0;
        this.fvBtnWidth = 43;
        this.fvBtnHeight = 23;
        this.fvRowHeight = 30;

        this.objApp	= this.gfnGetApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvWidth = this.pdvCbo.getOffsetWidth();
        	this.fnSetMultiCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 콤보세팅
        */
        this.fnSetMultiCombo = function ()
        {
        	var objTarget = this.parent;	 // div
        	this.comboinnerdataset 		= objTarget.comboinnerdataset;
        	this.combocodecolumn 		= objTarget.combocodecolumn;
        	this.combodatacolumn		= objTarget.combodatacolumn;
        	this.allcheck 				= objTarget.allcheck;
        	this.callbackfunc 			= objTarget.callbackfunc;
        	this.maxcount               = objTarget.maxcount;

        //  	this._objTarget = objTarget.parent;
        //
        // 	if (this.gfnIsNull(this.comboinnerdataset))
        // 	{
        // 		if (!this._objTarget.isValidObject(this.comboinnerdataset))
        // 		{
        // 			trace("invalid comboinnerdataset");
        // 			return false;
        // 		}
        // 	}
        // 	else
        // 	{
        // 		this._objBindDs = this._objTarget.lookup(this.comboinnerdataset);
        // 	}

        	if( this.gfnIsNull(this.combocodecolumn	)) return false;
        	if( this.gfnIsNull(this.combodatacolumn	)) return false;
        	if( this.gfnIsNull(this.allcheck 		)) this.allcheck  = "false";
        	if( this.gfnIsNull(this.maxcount		)) this.maxcount = 5;
        };

        this.fnSetDataset = function (oDs)
        {
        	this._objBindDs = oDs;

        	this.dsCbo.clear();
        	this.dsCbo.addColumn("multiComboChk", "STRING");
        	this.dsCbo.addColumn(this.combocodecolumn, "STRING");
        	this.dsCbo.addColumn(this.combodatacolumn, "STRING");

        	oDs.set_enableevent(false);
        	for( var j=0; j< oDs.getRowCount(); j++)
        	{
        		this.dsCbo.addRow();
        		this.dsCbo.setColumn(j, "multiComboChk", "0");
        		this.dsCbo.setColumn(j, this.combocodecolumn, oDs.getColumn(j,this.combocodecolumn));
        		this.dsCbo.setColumn(j, this.combodatacolumn, oDs.getColumn(j,this.combodatacolumn));
        	}
        	oDs.set_enableevent(true);

        	var oCombo 	  = this.pdvCbo;
        	var nDisplayCount = this.maxcount;
        	var nRowCount = this.dsCbo.getRowCount();
        	if (nDisplayCount > nRowCount) nDisplayCount = nRowCount;
        	var nHeight = nHeight = this.fvRowHeight  * nDisplayCount + nexacro.toNumber(nDisplayCount) + 1;

        	if( this.allcheck 	== "true") {
        		var nplusHeigth = this.fvBtnHeight + (this.fvBottomTerm * 2);
        		 nHeight += nplusHeigth ;

        		 this.pdvCbo.set_height(nHeight);
        		 this._fnMakeAllCheck();
        	}
        	else {
        		nHeight += this.fvTerm ;
        		this.pdvCbo.set_height(nHeight);

        		this._fnMakeCombo(oCombo);
        	}
        };

        /**
         * @description 전체선택/해제 추가
        */
        this._fnMakeAllCheck = function ()
        {
        	var compDiv = new Div("divComboList", 0, 0, null, null, 0,  this.fvBtnHeight + (this.fvBottomTerm * 2));
        	this.pdvCbo.addChild(compDiv.name, compDiv);
        	compDiv.show();

        	var nLeft = (nexacro.toNumber(this.fvWidth) - (this.fvBtnWidth*2 + this.fvTerm)) / 2;

        	var compBtnAllCheck = new Button("btnAllCheck", nLeft, null, this.fvBtnWidth, this.fvBtnHeight, null, this.fvBottomTerm);
        	this.pdvCbo.addChild(compBtnAllCheck.name, compBtnAllCheck);
        	compBtnAllCheck.addEventHandler("onclick", this._compBtnAllCheck_onclick, this);
        	compBtnAllCheck.set_cssclass("btn_POP_Btn");
        	compBtnAllCheck.set_text("All");
        	compBtnAllCheck.show();

        	var compBtnNonCheck = new Button("btnNonCheck", nLeft+this.fvBtnWidth+this.fvTerm, null, this.fvBtnWidth, this.fvBtnHeight, null, this.fvBottomTerm);
        	this.pdvCbo.addChild(compBtnNonCheck.name, compBtnNonCheck);
        	compBtnNonCheck.set_cssclass("btn_POP_Btn");
        	compBtnNonCheck.set_text("No");
        	compBtnNonCheck.addEventHandler("onclick", this._compBtnNonCheck_onclick, this);
        	compBtnNonCheck.show();

        	this._fnMakeCombo(compDiv);
        };
        /**
         * @description  동적 Grid Como List 생성
        */
        this._fnMakeCombo = function(oPdv)
        {
        	if(oPdv.form.isValidObject("grdCbo")){
        		var oGrid = oPdv.form.components["grdCbo"];
        		oPdv.removeChild("grdCbo");

        		oGrid.destroy();
        		oGrid= null;
        	}

        	var nBotton = 0;
        	if( this.allcheck =="true") nBotton = 0;
        	else nBotton = this.fvTerm;

        	var oGrd = new Grid("grdCbo", this.fvTerm, this.fvTerm, null, null, this.fvTerm, nBotton);
        	oGrd.set_cssclass("grd_WF_Detail");
        	oPdv.addChild(oGrd.name, oGrd);

        	oGrd.set_enableevent(false);
        	oGrd.set_enableredraw(false);

        	oGrd.set_binddataset(this.dsCbo);
        	oGrd.set_autofittype("col");
        	oGrd.set_wheelscrollrow(1);
        	oGrd.createFormat();

        	oGrd.deleteContentsRow("head", 0);
        	oGrd.setFormatRowProperty(0,"size",this.fvRowHeight);
        	oGrd.setCellProperty("Body", 0, "displaytype", "checkboxcontrol");
        	oGrd.setCellProperty("Body", 0, "edittype", "checkbox");
        	oGrd.setFormatColProperty(0, "size", 24);
        	oGrd.setFormatColProperty(0, "band", "left");
        	oGrd.show();

        	oGrd.addEventHandler("oncellclick", this._Grid_oncellclick, this);

        	oGrd.set_enableevent(true);
        	oGrd.set_enableredraw(true);

        	this.edtCbo.set_value("선택");
        };

        /**
         * @description   Popup Div Open
        */
        this.fnOpenCombo = function()
        {
        	var nMainHeight = this.objApp.mainframe.height;

        	if (!this.gfnIsNull(this.comboinnerdataset))
         	{
        		if (this.gfnIsNull(this._objBindDs))
        		{
        			trace("invalid comboinnerdataset");
        		}
        		else
        		{
        			var nTop = 21;
        			var nBottom = nexacro.toNumber(nMainHeight) - nexacro.toNumber(this.getOffsetBottom());
        			var nHeight = nexacro.toNumber(this.pdvCbo.height) + nexacro.toNumber(this.btnCbo.height) + 4;

        			if (nHeight > nBottom) nTop = -(this.pdvCbo.height-1);

        			this.pdvCbo.trackPopupByComponent(this.edtCbo, 0, nTop);
        			this._objBindDs.set_rowposition(-1);
        		}
        	}
        };

        /**
         * @description  초기화(전체해제)
        */
        this.fnInit = function (oThis)
        {
        	this._objTarget = oThis;

        	var objBindDs = this.dsCbo;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multiComboChk", "0");
        	}
        	this.edtCbo.set_value("선택");
        };


        /**
         * @description  부모창에서 value 가져갈 수 있는 함수
        */
        this.getValue = function()
        {
        	return this.edtCbo.retrunvalue;
        };

        /**
         * @description  부모창에서 text 가져갈 수 있는 함수
        */
        this.getText = function()
        {
        	return this.edtCbo.returntext;
        };

        /**
         * @description  부모창에서 값 세팅하는 함수
        */
        this.setValue = function(sValue)
        {
        	this.fnInit();
        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	var objDs = this._objBindDs;
        	var nFindRow;

        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = objDs.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(objDs.getColumn(nFindRow, this.combodatacolumn));
        			objDs.setColumn(nFindRow, "multComboChk", "1");
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);
        };

        /**
         * @description  값 세팅
        */
        this.fnSetComboText = function(arrTextList, arrValueList)
        {
        	var sComboText = arrTextList.toString();

        	this.edtCbo.retrunvalue = arrValueList.toString();
        	this.edtCbo.returntext = sComboText;
        	var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        	var nComboTextWidth = objRtn.nx;

        	var nWidth = this.edtCbo.getOffsetWidth() - this.btnCbo.width;
        	if (nComboTextWidth > nWidth)
        	{
        		this.edtCbo.set_value(arrTextList.length+"개 선택");
        		this.edtCbo.set_tooltiptext(sComboText);
        		this.edtCbo.set_tooltiptype("hover");
        	}
        	else
        	{
        		this.edtCbo.set_value(sComboText);
        	}

        	if (this.gfnIsNull(arrTextList)) this.edtCbo.set_value("선택");
        };

        /**
         * @description  값 세팅
        */
        this.setValue = function(sValue)
        {
        	if( this.gfnIsNull(sValue) ) return;

        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	//var objDs = this._objBindDs;
        	var nFindRow;
        	this.fnInit();
        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = this.dsCbo.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(this.dsCbo.getColumn(nFindRow, this.combodatacolumn));
        			this.dsCbo.setColumn(nFindRow, "multiComboChk", "1");
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);
        };
        /**
         * @description  필수상태
        */
        this.fnSetRequired = function(bValue)
        {
        	if (bValue) {
        		this.edtCbo.set_background("yellow");
        	}
        	else{
        		this.edtCbo.set_background("white");
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description ALL버튼 클릭 이벤트
        */
        this._compBtnAllCheck_onclick = function()
        {
        	for (var i=0; i< this.dsCbo.rowcount; i++)
        	{
        		this.dsCbo.setColumn(i, "multiComboChk", "1");
        	}
        };

        /**
         * @description none버튼 클릭이벤트
        */
        this._compBtnNonCheck_onclick = function()
        {
        	for (var i=0; i<this.dsCbo.rowcount; i++)
        	{
        		this.dsCbo.setColumn(i, "multiComboChk", "0");
        	}
        };

        /**
         * @description   button click popupdiv open
        */
        this.btnCombo_onclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        /**
         * @description  edit click popupdiv open
        */
        this.edtCombo_oneditclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        /**
         * @description  Popup Div 닫힐때 값세팅
        */
        this.pdvCombo_oncloseup = function(obj,e)
        {
        	//var objDs = this.ds_cbo;
        	var arrTextList  = [];
        	var arrValueList = [];

        	if (this.gfnIsNull(this.dsCbo.getColumnInfo(this.combodatacolumn)))
        	{
        		trace("comboinnerdataset("+this.dsCbo.name + ")에 컬럼(" + this.combodatacolumn + ")이 존재하지 않습니다.\ncombodatacolumn 정보를 확인하세요.");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsCbo.getColumnInfo(this.combocodecolumn)))
        	{
        		trace("comboinnerdataset("+this.dsCbo.name + ")에 컬럼(" + this.combocodecolumn + ")이 존재하지 않습니다.\combocodecolumn 정보를 확인하세요.");
        		return false;
        	}

        	for (var i=0; i<this.dsCbo.getRowCount(); i++)
        	{
        		if (this.dsCbo.getColumn(i, "multiComboChk") == "1")
        		{
        			arrTextList.push(this.dsCbo.getColumn(i, this.combodatacolumn));
        			arrValueList.push(this.dsCbo.getColumn(i, this.combocodecolumn));
        		}
        	}
        	this.fnSetComboText(arrTextList, arrValueList);

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name);
        	}
        };

        /**
         * @description  Combo 클릭
        */
        this._Grid_oncellclick = function(obj, e)
        {
        	var objDs = obj.getBindDataset();

        	if (e.col !=0)
        	{
        		if (objDs.getColumn(e.row, "multiComboChk") == "1") objDs.setColumn(e.row, "multiComboChk", "0");
        		else objDs.setColumn(e.row, "multiComboChk", "1");
        	}

        	if (!this.gfnIsNull(this.maxcount))
        	{
        		var nSelectCount = objDs.getCaseCount("multiComboChk == '1'");
        		if (this.maxcount < nSelectCount)
        		{
        			objDs.setColumn(e.row, "multiComboChk", "0");
        			var arr = [];
        			arr.push(this.maxcount);
        			this.gfnAlert("msg.err.validator.multicombo.maxcnt", arr);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCbo.addEventHandler("oneditclick",this.edtCombo_oneditclick,this);
            this.btnCbo.addEventHandler("onclick",this.btnCombo_onclick,this);
            this.pdvCbo.addEventHandler("oncloseup",this.pdvCombo_oncloseup,this);
        };
        this.loadIncludeScript("CmmMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

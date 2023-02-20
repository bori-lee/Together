(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("postcodedaumapi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnPostcode","174","17","126","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호 찾기");
            obj.set_cssclass("btn_WF_add01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostcode","10","18","152","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress1","10","66","290","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddress2","10","113","290","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("postcodedaumapi.xfdl", function() {
        this.postcode = "";
        this.address1 = "";
        this.address2 = "";

        //우편번호 찾기 버튼 클릭
        this.btnPostcode_onclick = function(obj,e)
        {
        	//popup 화면으로 전달할 값
        	var oArg = {
        				};

        	//modal popup open call
        	this.gfn_showModal("popupPostcode", oArg, "Base::postcodedaumapi_popup.xfdl", "popupCallBack", this, 10, 58, 340, 310);

        };

        //popup call back
        this.popupCallBack = function(sFormId, sArg)
        {
        	if(sFormId=="popupPostcode")
        	{
        		if(this.gfn_isNull(sArg))
        		{
        			this.edtPostcode.set_value(this.postcode);
        			this.edtAddress1.set_value(this.address1);
        			this.edtAddress2.set_value(this.address2)
        		}

        		//sArg == 'x' : 닫기버튼 클릭
        	}
        }

        /**
        * @description null value check
        * @param  pvVal - object (input value)
        * @return true/false (Null is true)
        */
        this.gfn_isNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }
        /**
        * @description Modal Dialog open
        * @param 	sPopupId = showmodal popup id,
        			arrArguments = null,
        			sPopupUrl = popup form url,
        			popupCallback = call back funtion,
        			obj = this,
        			nPopupLeft = popup position left,
        			nPopupTop = popup position top,
        			nPopupWidth = popup position width,
        			nPopupHeight = popup position height
        * @return
        */

        //옵션 간소화 팝업
        this.gfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight)
        {
        	// child frame 생성
        	var childFrame = new ChildFrame();

        	// parent frame 정의
        	var parentFrame = obj.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight, null, null, sPopupUrl);

        	// Modal Dialog 추가 옵션
        	//autosize default true
        	childFrame.set_autosize(false);
        	//statusbar default true
        	childFrame.set_showtitlebar(false);

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.postcodedaumapi_onload,this);
            this.btnPostcode.addEventHandler("onclick",this.btnPostcode_onclick,this);
        };
        this.loadIncludeScript("postcodedaumapi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("xpushSendRecieve");
            this.set_titletext("playnexacro Chat");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReceive", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtSendMsg","12","429",null,"27","115",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_imemode("hangul,full");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLoginUserID","125","85",null,"27","117",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"85","92","27","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OK");
            obj.set_font("normal 12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","12","86","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("XPUSH Login ID");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend",null,"429","92","27","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("SEND");
            obj.set_font("normal 12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("staID","12","9","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Project Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProjectName","125","10",null,"27","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("TOBE_EDU");
            obj.set_font("12px \"Verdana\"");
            obj.set_text("TOBE_EDU");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","12","47","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Address:Port");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddressPort","125","47",null,"27","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("12px \"Verdana\"");
            obj.set_value("tcp://localhost:50001, http://localhost:50001");
            obj.set_text("tcp://localhost:50001, http://localhost:50001");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","12","120",null,"300","15",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #d5d5d5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",420,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("XPush_RealTimeChat.xfdl", function() {
        /**
        *  techtip X-PUSH Basic sample
        *  @MenuPath    techtip > xpushBasic
        *  @FileName	xpushBasic.xfdl
        *  @Desction	X-PUSH message send and recieve
        *******************************************************************************
        *  2020.06.08		nana			?????? ??????
        *******************************************************************************
        */

        /**************************************************************************
         * FORM EVENT ??????(onload)
         **************************************************************************/
        /**
         * @description ????????? ???????????? ??????
                        ??????????????? ?????? ?????? ??? ?????? ??????
        */
        this.form_onload = function(obj,e)
        {
        	//message layout ??????
        	if ((nexacro._OS == "Android" || nexacro._OS == "iOS") && (nexacro._Browser == "Runtime"))
        	{
        		this.XPush00.set_layouturl("%USERAPP%XPushUrl/XPush_Message_Layout.xml");
        	} else
        	{
        		this.XPush00.set_layouturl("XPushUrl::XPush_Message_Layout.xml");
        	}


        	//????????? ??????url - (????????? ????????? ?????? ????????? ??????)
        	this.XPush00.serviceUrl = 'SvcXpushURL::Service_ProviderChat.jsp';

        	//????????????????????? ????????? ???????????? ????????? ????????? X-PUSH?????? ?????? ?????? ??????
        	var systemOS = system.navigatorname;

        	//????????? X-PUSH ????????? IP ??????
        	if(systemOS.indexOf("nexacro")>-1)
        	{
        		//NRE(nexacro runtime environment) ??????????????? TCP ????????? ??????
        		this.edtAddressPort.set_value("tcp://localhost:50001");
        	}
        	else
        	{
        		//WRE(web runtime environment) ??????????????? HTTP ????????? ??????
        		this.edtAddressPort.set_value("http://localhost:50000");
        	}
        };

        /**************************************************************************
         * CALLBACK ?????? ????????????(Transaction)
         **************************************************************************/
        /**
        * @description X-PUSH??? subscribe??? ????????? ????????? ???????????? ?????? (????????? ??????)
        * @param
        	> ChangeRow : ????????? Row??? index, ???????????? ?????? ????????? "allUpdate"??? ","??? ???????????? ??????
            > ChangeCol : ????????? Column ID ??? "," ??? ???????????? ??????, "allUpdate"??? Null ??? ??????
            > ColList : ?????? Column ID ??? "," ??? ???????????? ??????, "allUpdate"??? ????????? Row ??? Column ??? ID ??? ????????? ??????
            > strMsgType : "DATA" or "RECOVERY" ?????? ??????
        	> strActionType : ????????? ????????? ?????? : "PUSH" , ????????? ??????????????? : "RECT"
        	> strMsgID : ???????????? ????????? ??? ?????? ??? ??????

        	*strMsgType : "RECOVERY" ?????? ??? = Recovery ???????????? ????????? ??????*
        	 > ChangeRow : -1 ??? ??????, ChangeCol
             > ChangeCol : ??? ????????? ??????
             > ColList : ??? ????????? ??????
        * @return
        */
        this.fnPushCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		this.fnReceiveMessage(ChangeRow);
        	}
        };

        /**
        * @description X-PUSH??? subscribe??? ????????? ????????? ???????????? ?????? (????????? ?????????)
        * @param ?????? ?????????
        * @return
        */
        this.fnPushUserCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		var sUserid = this.dsUserList.getColumn(ChangeRow,'USER');

        		if(sUserid == this.XPush00.userid)
        		{
        			this.createMessage('login',sUserid + "?????? ????????? ???????????????.");
        		}
        		else
        		{
        			this.createMessage('receive',sUserid + "?????? ????????? ???????????????.");
        		}
        	}
        };

        /**
        * @description jsp ?????? callback
        * @param
        * @return
        */
        this.fnCallBack = function(svcid, ecd, emsg)
        {
        	if(ecd >= 0)
        	{
        		//????????? ?????? ??????
        	} else {
        		//????????? ?????? ??????
        	}
        };

        /**************************************************************************
         * CRUD ??? TRANSACTION ????????? ?????? ??????
         **************************************************************************/
        /**
         * @description ????????? jsp ??????
        */
        this.fnCallProvider = function (argumentMsg,msgType)
        {
        	if(msgType == 'login')
        	{
        		this.transaction("sendUserId",this.XPush00.serviceUrl,"","",argumentMsg,"fnCallBack");
        	}
        	else if(msgType == 'send')
        	{
        		this.transaction("sendMassage",this.XPush00.serviceUrl,"","",argumentMsg,"fnCallBack");
        	}

        };

        /**************************************************************************
         * ??? COMPONENT ??? EVENT ??????
         **************************************************************************/
        /**
         * @description OK button click
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.fnPushConnect();
        };

        /**
         * @description SEND button click
        */
        this.btnSend_onclick = function(obj,e)
        {
        	this.fnSendMessage();
        };

        /**
         * @description edtLoginUserID_onkeydown -> enter ??? ?????? ??? ???????????? ????????? ??????
        */
        this.edtLoginUserID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		//X-PUSH connect
        		this.fnPushConnect();
        	}
        };

        /**
         * @description edtSendMsg_onkeydown -> enter ??? ?????? ??? ???????????? ????????? ??????
        */
        this.edtSendMsg_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSendMessage();
        	}
        };

        /**
         * @description XPush00_onsuccess
        */
        this.XPush00_onsuccess = function(obj,e)
        {
        	if(e.action == 0)
        	{
        		this.fnLoginMessage();
        	}
        };

        /**
         * @description XPush00_onerror
        */
        this.XPush00_onerror = function(obj,e)
        {
        	if(e.action == 0)
        	{ //?????? ????????? ??????????????? ??????
        	  alert(e.errormsg);
        	  this.edtLoginUserID.setFocus();
        	}
        };

        /**************************************************************************
         * ????????? FUNCTION ??????
         **************************************************************************/
         /**
         * @description ????????? user id??? ?????? ??? ??? X-PUSH ?????? ??????
        */
        this.fnPushConnect = function ()
        {
        	this.XPush00.set_projectid(this.edtProjectName.value);		//project_id ????????? ???????????????.
        	this.XPush00.set_protocolversion(3);						//x-push??? ????????? ???????????? ????????? ???????????????.

        	//connect : X-PUSH ????????? ????????? ?????????.
        	this.XPush00.set_iplist(this.edtAddressPort.value);			//???????????? ?????? ??????
        	this.XPush00.set_userid(this.edtLoginUserID.value);			//userid ??????
        	this.XPush00.connect();										//XPUSH ??????
        };

        /**
        * @description X-PUSH ?????? ?????? ??? ????????? ??????
        * @param
        * @return
        */
        this.fnLoginMessage = function()
        {
        	//subscribe : X-PUSH ????????? Topic Type ??? Topic Id(message key) ???????????????.

        	/*	????????? ?????? ?????? ??? jsp ?????? ?????? ?????? ??????*/
        	this.XPush00.subscribe('CODETYPE', 'SENDUSER', this, this.dsUserList, "append", "fnPushUserCallback");
        	this.XPush00.subscribe('CODEMSG', 'SENDMSG', this, this.dsReceive, "append", "fnPushCallback");

        	//X-PUSH ?????? ??? ????????? ??????????????? ??????
        	this.edtSendMsg.setFocus();

        	//????????? ??????
        	//this.txtContents.set_value(sText);
        	var sNotices =  "TOPIC_TYPE=" + 'CODETYPE';
        		sNotices += " TOPIC_ID=" + 'SENDUSER';
        		sNotices += " USER_ID=" + this.XPush00.userid;
        		sNotices += " PROJECT_ID=" + this.edtProjectName.value;
        	this.fnCallProvider(sNotices,'login');
        }

        /**
        * @description ????????? textarea??? ??????, TOPIC ID ???????????? ????????? ??? ????????? jsp ??????
        * @param
        * @return
        */
        this.fnSendMessage = function()
        {
        	var sText = this.edtSendMsg.value;

        	this.createMessage('send',sText);

        	//????????? ????????? ?????????
        	this.edtSendMsg.set_value("");
        	this.edtSendMsg.setFocus();

        	var sNotices =  "TOPIC_TYPE=" + 'CODEMSG';
        		sNotices += " TOPIC_ID=" + 'SENDMSG';
        		sNotices += " USER_ID=" + this.edtLoginUserID.value;
        		sNotices += " PROJECT_ID=" + this.edtProjectName.value;
        		sNotices += " SEND_MESSAGE=" + sText;
        	this.fnCallProvider(sNotices,'send');
        }

        /**
        * @description ????????? ????????? ?????? jsp ??????
        * @param nRow : ????????? Row num
        * @return
        */
        this.fnReceiveMessage = function(nRow)
        {
        	//var sText = this.txtContents.value;
        	var sMessage = this.dsReceive.getColumn(nRow,'MSG');
        	var sUserId = this.dsReceive.getColumn(nRow,'USER');

        	//????????? ??????
        	if(sUserId != this.XPush00.userid)
        	{
        		this.createMessage('receive',sMessage);
        	}
        }

        this.nTop = 5;
        this.nLeft = 5;
        this.nRight = 5;
        this.nCount = 0;

        /**
        * @description ???????????? ???????????? ???????????? ??????
        * @param sType : ????????? ?????? (login : ??????, send : ????????? ??????, receive : ????????? ??????)
        		 sText : ???????????? ????????? ??????
        * @return
        */
        this.createMessage = function(sType,sText)
        {
        	var nWidth = this.divContents.getOffsetWidth() - 20;
        	var nHeight = 20;

        	if(sType == 'send' || sType == 'login')
        	{
        		this.nLeft = null;
        		this.nRight = 5;
        	}
        	else
        	{
        		this.nLeft = 5;
        		this.nRight = null;
        	}

        	var objStaId = "stMessage"+ this.nCount;
        	var objStatic = new Static();
        	objStatic.init(objStaId,this.nLeft,this.nTop,nWidth,nHeight,this.nRight,null);
        	objStatic.set_fittocontents('both');
        	objStatic.set_text(sText);
        	objStatic.set_wordWrap('char');
        	objStatic.set_border('1px solid #d5d5d5');
        	objStatic.set_borderRadius('5px');
        	objStatic.set_padding('5px');
        	this.divContents.addChild(objStaId,objStatic);
        	objStatic.show();

        	var objWidth = objStatic.getOffsetWidth();
        	var parentWidth = 350;

        	var objHeight = objStatic.getOffsetHeight();
        	if(parentWidth < objWidth)
        	{
        		objStatic.set_fittocontents('none');
        		objStatic.setOffsetWidth(parentWidth);

        		var nLine = nexacro.ceil(objHeight / parentWidth);
        		objHeight += 16*nLine;
        		objStatic.setOffsetHeight(objHeight);
        	}

        	this.nTop += objHeight + 3;
        	this.nCount++;

        	this.divContents.form.resetScroll();
        	return objStatic;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtSendMsg.addEventHandler("onkeydown",this.edtSendMsg_onkeydown,this);
            this.edtLoginUserID.addEventHandler("onkeydown",this.edtLoginUserID_onkeydown,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
            this.XPush00.addEventHandler("onkeepalive",this.XPush00_onkeepalive,this);
            this.XPush00.addEventHandler("onsuccess",this.XPush00_onsuccess,this);
            this.XPush00.addEventHandler("onerror",this.XPush00_onerror,this);
        };
        this.loadIncludeScript("XPush_RealTimeChat.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

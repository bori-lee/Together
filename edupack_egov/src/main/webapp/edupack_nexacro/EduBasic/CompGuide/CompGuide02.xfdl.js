(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide");
            this.set_titletext("btn,chk,rdo,tab,pmnu,pgb,grb,img,ful,fdl");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,1893);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","109","40","904","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Style");
            obj.set_cssclass("sta_WF_GTitle");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_textAlign("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","109","69","904","541",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","69","100","541",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","120","80","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","150","130","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00","316","243","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("calss = btn_WF_SearchSmall");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","150","243","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01","188","243","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00","196","250","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","150","230","28","9",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00","148","213","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("W 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_01","207","130","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_02","216","138","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","150","320","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","205","320","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00","320","320","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("calss = btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_03","269","328","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_02","260","320","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","205","351","50","9",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00","211","361","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("W 50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_01","200","321","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_00","198","306","24","14",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_01","578","409","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("W 40");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_02","573","401","40","9",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_03","614","358","9","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_04","627","371","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("H 40");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_03_00","604","348","9","10",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_04_00","615","344","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("H 10");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_02","573","243","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_01","608","243","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_01","744","243","249","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("calss = btn_WF_Add / btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_03","608","231","30","9",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_02","607","211","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("W 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_05","653","249","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_00_00","603","274","24","14",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("W 5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_01_00","603","259","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_00_01","156","176","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("W 50");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_00","150","166","50","9",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","420","130","403","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("※ 글자 수에 따라서 2글자 50px 기준으로 <fc v=\'red\'><b v=\'true\'>12px</b></fc>씩 늘어난다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","10","609","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","109","609","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","120","620","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","420","620","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","120","660","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","420","660","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("체크박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00_01","230","660","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00_02","570","660","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("체크박스");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","10","720","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00","109","720","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00","120","731","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00","420","731","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","120","771","201","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo00_innerdataset = new nexacro.NormalDataset("rdo00_innerdataset", obj);
            rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미선택</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00_00","420","771","201","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var rdo00_00_innerdataset = new nexacro.NormalDataset("rdo00_00_innerdataset", obj);
            rdo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미선택</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01","325","668","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00","316","660","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00","320","771","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00","329","779","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","10","831","100","161",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_00","109","831","904","161",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_00","120","842","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","120","894","410","76",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("Tabpage3");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab00);
            obj.set_text("Tabpage4");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab00);
            obj.set_text("Tabpage5");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","10","991","100","189",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_01","109","991","904","189",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","120","1002","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("팝업메뉴");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("pmnu00","120","1037","120","122",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var pmnu00_innerdataset = new nexacro.NormalDataset("pmnu00_innerdataset", obj);
            pmnu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captioncolumn\">PopupMenu1</Col><Col id=\"idcolumn\">1</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Menu1-2Depth</Col><Col id=\"idcolumn\">2</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu1-2Depth</Col><Col id=\"idcolumn\">3</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu1-3Depth</Col><Col id=\"idcolumn\">4</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">Menu1-2Depth</Col><Col id=\"idcolumn\">5</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu1-2Depth</Col><Col id=\"idcolumn\">6</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">PopupMenu2</Col><Col id=\"idcolumn\">7</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Menu2-2Depth</Col><Col id=\"idcolumn\">8</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu2-2Depth</Col><Col id=\"idcolumn\">9</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu2-3Depth</Col><Col id=\"idcolumn\">10</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">Menu2-2Depth</Col><Col id=\"idcolumn\">11</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">PopupMenu3</Col><Col id=\"idcolumn\">12</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Menu3-2Depth</Col><Col id=\"idcolumn\">13</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu3-2Depth</Col><Col id=\"idcolumn\">14</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">PopupMenu4</Col><Col id=\"idcolumn\">15</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Menu4-2Depth </Col><Col id=\"idcolumn\">16</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">Menu4-2Depth </Col><Col id=\"idcolumn\">17</Col><Col id=\"levelcolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(pmnu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02","10","1179","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Progressbar");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_02","109","1179","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_01","120","1190","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00","420","1190","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb00","120","1230","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("pgb00");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("pgb00_00","420","1230","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("pgb00");
            obj.set_smooth("true");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00","10","1290","100","161",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_02_00","109","1290","904","161",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_01_00","120","1301","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_00","420","1301","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grb00","120","1341","200","90",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new GroupBox("grb00_00","420","1341","200","90",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_04","643","243","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_00_00","10","1450","100","161",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_02_00_00","109","1450","904","161",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_01_00_00","120","1461","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_00_00","420","1461","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","120","1501","200","90",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("img00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00_00","420","1501","200","90",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("img00");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_01","10","1610","100","162",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_02_01","109","1610","904","162",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_02_01_00","109","1771","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_02_01_00","10","1771","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_01_01","120","1621","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_01","420","1621","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_01_01_00","120","1782","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_01_00","420","1782","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new FileUpload("ful00","120","1661","200","83",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_buttontext("파일업로드");
            this.addChild(obj.name, obj);

            obj = new FileUpload("ful00_00","420","1661","200","83",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_buttontext("파일업로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdl00","120","1822","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fdl00_00","420","1822","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_00_00_00","120","411","428","30",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("<fc v=\"#0000ff\">※ paging 관련 버튼 크기 30 X 30 /  버튼 사이의 간격은 0px</fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_01","573","358","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("btn_WF_LShuttle");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_04","573","308","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("btn_WF_RShuttle");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_02","383","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Paging");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","413","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Paging");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00","443","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Paging");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_05","323","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("btn_WF_PagingDPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_02","353","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("btn_WF_PagingPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_01_01","563","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("btn_WF_PagingNext");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00_00_01","593","495","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("btn_WF_PagingDNext");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_01_00","664","313","329","30",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("calss = btn_WF_RShuttle / btn_WF_LRShuttle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_03_00","443","486","30","9",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_00_02_00","442","466","32","14",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("W 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_04_00","478","498","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_05_00","488","504","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("H 30");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","309","474","30","1",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","339","474","1","30",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_02","155","447","158","36",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("calss =\r\nbtn_WF_PagingDPrev");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","369","524","1","30",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","339","553","30","1",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_02_00","197","524","158","36",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("calss =\r\nbtn_WF_PagingPrev");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","607","474","30","1",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","606","474","1","30",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_02_01","640","447","158","36",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("calss =\r\nbtn_WF_PagingDNext");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","576","524","1","30",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00","577","553","30","1",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_02_00_00","616","535","158","36",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("calss =\r\nbtn_WF_PagingNext");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00","457","525","1","30",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("sta00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_03_00_00_02_00_00_00","386","547","168","26",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("calss =btn_WF_Paging");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00_01","10","0","550","30",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("컴포넌트 가이드 02");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab00.Tabpage1
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage3.form,function(p){});
            this.tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage4.form,function(p){});
            this.tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage5.form,function(p){});
            this.tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1033,1893,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide02.xfdl", function() {

        this.btn03_onclick = function(obj,e)
        {
        	this.pmnu00.trackPopupByComponent(obj, 0, 35);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };
        this.loadIncludeScript("CompGuide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

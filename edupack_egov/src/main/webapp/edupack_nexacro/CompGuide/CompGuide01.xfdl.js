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
            this.set_titletext("sta,edt,msk,txt,cbo,lst,spn,cal,mnu");
            if (Form == this.constructor)
            {
                this._setFormPosition(1033,1730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","109","40","904","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
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

            obj = new Static("Static02","10","69","100","348",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","109","69","904","348",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","350","120","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Nexacro N EduPack");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","350","80","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[status=disabled]");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","120","80","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","326","258","214","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("calss = sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","326","313","224","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("calss = sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","326","358","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("calss = sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_01","784","198","220","38",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("calss = sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00_02","784","271","220","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("calss = sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","109","416","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","10","416","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01","716","210","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("H 38");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00","707","198","9","38",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00","252","206","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00","243","198","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","120","427","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","120","477","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_value("Nexacro N");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_01","281","485","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_01","272","477","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","120","120","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Nexacro N EduPack");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","120","248","110","43",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","120","303","110","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("상세결과");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","120","358","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("라벨텍스트");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","580","198","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("DetailLabel");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","580","271","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_text("DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","350","477","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_value("Nexacro N");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","350","427","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","580","477","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_value("Nexacro N");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","580","427","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","109","527","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","120","538","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","10","527","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01","350","538","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00","580","538","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","120","588","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_value("123546000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01_00","350","588","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("123546000");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01_01","580","588","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_value("123546000");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00","109","638","904","152",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","10","638","100","152",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00","120","649","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_00","350","649","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00","580","649","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_01_00","281","596","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_01_00","272","588","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00","120","699","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_value("Nexacro N\nTOBESOFT");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","350","699","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_value("Nexacro N\nTOBESOFT");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt00_01","580","699","150","70",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_value("Nexacro N\nTOBESOFT");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","10","789","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_01","109","789","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01","120","800","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_01","350","800","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01","580","800","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","120","850","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nexacro N</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">TOBESOFT</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Education</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("Nexacro N");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","350","850","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var cbo00_00_innerdataset = new nexacro.NormalDataset("cbo00_00_innerdataset", obj);
            cbo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nexacro N</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">TOBESOFT</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Education</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_00_innerdataset);
            obj.set_text("Nexacro N");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00_01","580","850","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var cbo00_01_innerdataset = new nexacro.NormalDataset("cbo00_01_innerdataset", obj);
            cbo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nexacro N</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">TOBESOFT</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Education</Col></Row></Rows>");
            obj.set_innerdataset(cbo00_01_innerdataset);
            obj.set_text("Nexacro N");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_01_00_00","281","858","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_01_00_00","272","850","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","10","900","100","163",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00_00","109","900","904","163",null,null,null,null,null,null,this);
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

            obj = new Static("sta00_01_01_01_00_00","120","911","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_00_00","350","911","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new ListBox("lst00","120","961","150","81",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var lst00_innerdataset = new nexacro.NormalDataset("lst00_innerdataset", obj);
            lst00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Nexacro N</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">TOBESOFT</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">Education</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">Design</Col><Col id=\"codecolumn\">4</Col></Row><Row><Col id=\"datacolumn\">Developer</Col><Col id=\"codecolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(lst00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new ListBox("lst00_00","350","961","150","81",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var lst00_00_innerdataset = new nexacro.NormalDataset("lst00_00_innerdataset", obj);
            lst00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Nexacro N</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">TOBESOFT</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Education</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">Design</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">Developer</Col></Row></Rows>");
            obj.set_innerdataset(lst00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","10","1062","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Sipn");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_01_00","109","1062","904","112",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01_00","120","1073","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_01_00","350","1073","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01_00","580","1073","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new Spin("spn00","120","1123","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("spn00_00","350","1123","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_enable("false");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("spn00_01","580","1123","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_readonly("true");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_01_00_00_00","281","1131","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_01_00_00_00","272","1123","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_01_00_00","109","1173","904","412",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("");
            obj.set_cssclass("sta_WF_GArea");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01_00_00","120","1184","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","10","1173","100","412",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_01_00_00","350","1184","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("[status=disabled]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01_00_00","580","1184","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("[status=readonly]");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","120","1234","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_value("20220602");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","350","1234","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_value("20220602");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_01","580","1234","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_value("20220602");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_02","120","1344","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_value("20220602");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","580","1344","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_value("20220602");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_01_00_00_00_00","281","1242","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_01_00_00_00_00","272","1234","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01_00_00_00","120","1294","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("[type=monthonly]");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_01_00_00_00","580","1294","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("[type=spin]");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_01_00_01_00","109","1584","904","112",null,null,null,null,null,null,this);
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

            obj = new Static("Static02_00_00_01_00_01_00","10","1584","100","112",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WF_GLabel");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01_00_01_00","120","1595","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("[status=enabled]");
            this.addChild(obj.name, obj);

            obj = new Menu("mnu00","120","1645","685","28",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var mnu00_innerdataset = new nexacro.NormalDataset("mnu00_innerdataset", obj);
            mnu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idcolumn\">1</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">Menu</Col></Row><Row><Col id=\"idcolumn\">2</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">3</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">4</Col><Col id=\"levelcolumn\">2</Col><Col id=\"captioncolumn\">3Depth Menu</Col></Row><Row><Col id=\"idcolumn\">5</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">6</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">7</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">Menu</Col></Row><Row><Col id=\"idcolumn\">8</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">9</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">10</Col><Col id=\"levelcolumn\">2</Col><Col id=\"captioncolumn\">3Depth Menu</Col></Row><Row><Col id=\"idcolumn\">11</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">12</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">Menu</Col></Row><Row><Col id=\"idcolumn\">13</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">14</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">15</Col><Col id=\"levelcolumn\">0</Col><Col id=\"captioncolumn\">Menu</Col></Row><Row><Col id=\"idcolumn\">16</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row><Row><Col id=\"idcolumn\">17</Col><Col id=\"levelcolumn\">1</Col><Col id=\"captioncolumn\">2Depth Menu</Col></Row></Rows>");
            obj.set_innerdataset(mnu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","120","198","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("화면타이틀명");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01","326","198","194","30",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("calss = sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","10","0","490","28",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("컴포넌트 가이드 01");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_01","120","162","214","30",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("<fc v=\"#0000ff\">화면타이틀명 위치 top = 0px</fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_00","243","248","9","43",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_00","252","266","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("H 43");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_00_00","243","303","9","43",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_00_00","252","321","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_GTxt");
            obj.set_text("H 43");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00_00_00_01","243","358","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_01_00_01_00_00_01","252","366","29","14",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("H 28");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk01_01_00","805","588","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("aa123");
            obj.set_readonly("false");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_type("string");
            obj.set_format("AA###");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","795","477","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_value("필수입력");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_text("필수입력");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_01","795","427","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("calss = edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_01_00","805","538","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("calss = msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_01_00_00","810","1184","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("calss = cal_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_01_00","810","1234","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_value("20220602");
            obj.set_readonly("true");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_dateformat("yyyy-MM-dd dddd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1033,1730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.lst00_00.addEventHandler("onitemchanged",this.lst00_00_onitemchanged,this);
        };
        this.loadIncludeScript("CompGuide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameLogin");
            this.set_titletext("FrameLogin");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,798);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">test1</Col><Col id=\"USER_PASSWORD\">test1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_LEVLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LEVLE\">0</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000010</Col><Col id=\"MENU_NAME\">Basic</Col><Col id=\"MENU_NAME_EN\">Basic</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000000</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000020</Col><Col id=\"MENU_NAME\">EnvApp</Col><Col id=\"MENU_NAME_EN\">EnvApp</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000510</Col><Col id=\"MENU_NAME\">List01</Col><Col id=\"MENU_NAME_EN\">List01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_List01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000520</Col><Col id=\"MENU_NAME\">ListDetail01</Col><Col id=\"MENU_NAME_EN\">ListDetail01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000530</Col><Col id=\"MENU_NAME\">ListDetail02</Col><Col id=\"MENU_NAME_EN\">ListDetail02</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetail02.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000540</Col><Col id=\"MENU_NAME\">ListDetailList01</Col><Col id=\"MENU_NAME_EN\">ListDetailList01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetailList01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000550</Col><Col id=\"MENU_NAME\">ListPaging</Col><Col id=\"MENU_NAME_EN\">ListPaging</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListPaging.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000560</Col><Col id=\"MENU_NAME\">MasterDetail01</Col><Col id=\"MENU_NAME_EN\">MasterDetail01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_MasterDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000570</Col><Col id=\"MENU_NAME\">MasterDetail02</Col><Col id=\"MENU_NAME_EN\">MasterDetail02</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_MasterDetail02.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000580</Col><Col id=\"MENU_NAME\">Shuttle01</Col><Col id=\"MENU_NAME_EN\">Shuttle01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_Shuttle01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000590</Col><Col id=\"MENU_NAME\">SingleDetail01</Col><Col id=\"MENU_NAME_EN\">SingleDetail01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_SingleDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000600</Col><Col id=\"MENU_NAME\">Tab01</Col><Col id=\"MENU_NAME_EN\">Tab01</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_Tab01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000040</Col><Col id=\"MENU_NAME\">Form</Col><Col id=\"MENU_NAME_EN\">Form</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000050</Col><Col id=\"MENU_NAME\">Hello</Col><Col id=\"MENU_NAME_EN\">Hello</Col><Col id=\"MENU_URL\">EduBasic::Base/Hello.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000040</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000060</Col><Col id=\"MENU_NAME\">Employees</Col><Col id=\"MENU_NAME_EN\">Employees</Col><Col id=\"MENU_URL\">EduBasic::Form/Form_Emp.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000040</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000070</Col><Col id=\"MENU_NAME\">Employees(QuickCode)</Col><Col id=\"MENU_NAME_EN\">Employees(QuickCode)</Col><Col id=\"MENU_URL\">EduBasic::QuickCode/QuickCode_Form_Emp.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000040</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000080</Col><Col id=\"MENU_NAME\">Organization</Col><Col id=\"MENU_NAME_EN\">Organization</Col><Col id=\"MENU_URL\">EduBasic::Form/Form_Organization.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000040</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000090</Col><Col id=\"MENU_NAME\">Popup</Col><Col id=\"MENU_NAME_EN\">Popup</Col><Col id=\"MENU_URL\">EduBasic::Form/Form_Popup.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000040</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000100</Col><Col id=\"MENU_NAME\">Component</Col><Col id=\"MENU_NAME_EN\">Component</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000110</Col><Col id=\"MENU_NAME\">Comp List</Col><Col id=\"MENU_NAME_EN\">Comp List</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Base.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000100</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000120</Col><Col id=\"MENU_NAME\">Base</Col><Col id=\"MENU_NAME_EN\">Base</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Base.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000100</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000130</Col><Col id=\"MENU_NAME\">Button</Col><Col id=\"MENU_NAME_EN\">Button</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Button.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000140</Col><Col id=\"MENU_NAME\">Calendar</Col><Col id=\"MENU_NAME_EN\">Calendar</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Calendar.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000150</Col><Col id=\"MENU_NAME\">CheckBox</Col><Col id=\"MENU_NAME_EN\">CheckBox</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_CheckBox.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000160</Col><Col id=\"MENU_NAME\">Combo</Col><Col id=\"MENU_NAME_EN\">Combo</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Combo.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000170</Col><Col id=\"MENU_NAME\">Dataset</Col><Col id=\"MENU_NAME_EN\">Dataset</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Dataset.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000180</Col><Col id=\"MENU_NAME\">Div</Col><Col id=\"MENU_NAME_EN\">Div</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_div.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000190</Col><Col id=\"MENU_NAME\">Edit</Col><Col id=\"MENU_NAME_EN\">Edit</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Edit.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000200</Col><Col id=\"MENU_NAME\">Grid</Col><Col id=\"MENU_NAME_EN\">Grid</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Grid.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000210</Col><Col id=\"MENU_NAME\">Grid Cell</Col><Col id=\"MENU_NAME_EN\">Grid Cell</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Grid_Cell.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000220</Col><Col id=\"MENU_NAME\">ImageViewer</Col><Col id=\"MENU_NAME_EN\">ImageViewer</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_ImageViewer.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000230</Col><Col id=\"MENU_NAME\">ListBox</Col><Col id=\"MENU_NAME_EN\">ListBox</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_ListBox.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000240</Col><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_NAME_EN\">ListView</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_ListView.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000250</Col><Col id=\"MENU_NAME\">MaskEdit</Col><Col id=\"MENU_NAME_EN\">MaskEdit</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_MaskEdit.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000260</Col><Col id=\"MENU_NAME\">ProgreeBar</Col><Col id=\"MENU_NAME_EN\">ProgreeBar</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_ProgressBar.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000270</Col><Col id=\"MENU_NAME\">Radio</Col><Col id=\"MENU_NAME_EN\">Radio</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Radio.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000280</Col><Col id=\"MENU_NAME\">Spin</Col><Col id=\"MENU_NAME_EN\">Spin</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Spin.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000290</Col><Col id=\"MENU_NAME\">Static</Col><Col id=\"MENU_NAME_EN\">Static</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_Static.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000300</Col><Col id=\"MENU_NAME\">Tab</Col><Col id=\"MENU_NAME_EN\">Tab</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_tab.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000310</Col><Col id=\"MENU_NAME\">TexaArea</Col><Col id=\"MENU_NAME_EN\">TexaArea</Col><Col id=\"MENU_URL\">EduBasic::Comp/Comp_TextArea.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000120</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000320</Col><Col id=\"MENU_NAME\">Extend</Col><Col id=\"MENU_NAME_EN\">Extend</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000100</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000330</Col><Col id=\"MENU_NAME\">File Up/Download</Col><Col id=\"MENU_NAME_EN\">File Up/Download</Col><Col id=\"MENU_URL\">EduBasic::CompExt/CompExt_FileUpDown.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000320</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000340</Col><Col id=\"MENU_NAME\">File Transfer</Col><Col id=\"MENU_NAME_EN\">File Transfer</Col><Col id=\"MENU_URL\">EduBasic::CompExt/CompExt_FileUpDownTransfer.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000320</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000350</Col><Col id=\"MENU_NAME\">Sketch</Col><Col id=\"MENU_NAME_EN\">Sketch</Col><Col id=\"MENU_URL\">EduBasic::CompExt/CompExt_Sketch.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000320</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000360</Col><Col id=\"MENU_NAME\">WebBrowser</Col><Col id=\"MENU_NAME_EN\">WebBrowser</Col><Col id=\"MENU_URL\">EduBasic::CompExt/CompExt_WebBrowser.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000320</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">3</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000370</Col><Col id=\"MENU_NAME\">Data Object</Col><Col id=\"MENU_NAME_EN\">Data Object</Col><Col id=\"MENU_URL\">EduBasic::CompExt/CompExt_DataObject_twoway.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000320</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000390</Col><Col id=\"MENU_NAME\">Common</Col><Col id=\"MENU_NAME_EN\">Common</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000400</Col><Col id=\"MENU_NAME\">Bind</Col><Col id=\"MENU_NAME_EN\">Bind</Col><Col id=\"MENU_URL\">EduBasic::CompCom/CompCom_Bind.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000390</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000410</Col><Col id=\"MENU_NAME\">Event</Col><Col id=\"MENU_NAME_EN\">Event</Col><Col id=\"MENU_URL\">EduBasic::CompCom/CompCom_Event.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000390</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000420</Col><Col id=\"MENU_NAME\">Position(Arrange)</Col><Col id=\"MENU_NAME_EN\">Position(Arrange)</Col><Col id=\"MENU_URL\">EduBasic::CompCom/CompCom_Arrange.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000390</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000430</Col><Col id=\"MENU_NAME\">Transaction</Col><Col id=\"MENU_NAME_EN\">Transaction</Col><Col id=\"MENU_URL\">EduBasic::CompCom/CompCom_Transaction.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000390</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000440</Col><Col id=\"MENU_NAME\">Sample</Col><Col id=\"MENU_NAME_EN\">Sample</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000450</Col><Col id=\"MENU_NAME\">ArrangeFit</Col><Col id=\"MENU_NAME_EN\">ArrangeFit</Col><Col id=\"MENU_URL\">EduBasic::Smpl/ArrangeFit.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000460</Col><Col id=\"MENU_NAME\">ArrangeSplit</Col><Col id=\"MENU_NAME_EN\">ArrangeSplit</Col><Col id=\"MENU_URL\">EduBasic::Smpl/ArrangeSplit.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000470</Col><Col id=\"MENU_NAME\">Grid Sum</Col><Col id=\"MENU_NAME_EN\">Grid Sum</Col><Col id=\"MENU_URL\">EduBasic::Smpl/GridSum.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000480</Col><Col id=\"MENU_NAME\">Grid Tree</Col><Col id=\"MENU_NAME_EN\">Grid Tree</Col><Col id=\"MENU_URL\">EduBasic::Smpl/GridTree.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000490</Col><Col id=\"MENU_NAME\">Grid Calendar</Col><Col id=\"MENU_NAME_EN\">Grid Calendar</Col><Col id=\"MENU_URL\">EduBasic::Smpl/GridCalendar.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">1</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_ID\">ED00000500</Col><Col id=\"MENU_NAME\">Templatform</Col><Col id=\"MENU_NAME_EN\">Templatform</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">List01</Col><Col id=\"MENU_NAME_EN\">List01</Col><Col id=\"MENU_ID\">ED00000510</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_List01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">ListDetail01</Col><Col id=\"MENU_NAME_EN\">ListDetail01</Col><Col id=\"MENU_ID\">ED00000520</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">ListDetail02</Col><Col id=\"MENU_NAME_EN\">ListDetail02</Col><Col id=\"MENU_ID\">ED00000530</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetail02.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">ListDetailList01</Col><Col id=\"MENU_NAME_EN\">ListDetailList01</Col><Col id=\"MENU_ID\">ED00000540</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListDetailList01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">ListPaging</Col><Col id=\"MENU_NAME_EN\">ListPaging</Col><Col id=\"MENU_ID\">ED00000550</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_ListPaging.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">MasterDetail01</Col><Col id=\"MENU_NAME_EN\">MasterDetail01</Col><Col id=\"MENU_ID\">ED00000560</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_MasterDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">MasterDetail02</Col><Col id=\"MENU_NAME_EN\">MasterDetail02</Col><Col id=\"MENU_ID\">ED00000570</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_MasterDetail02.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">Shuttle01</Col><Col id=\"MENU_NAME_EN\">Shuttle01</Col><Col id=\"MENU_ID\">ED00000580</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_Shuttle01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">SingleDetail01</Col><Col id=\"MENU_NAME_EN\">SingleDetail01</Col><Col id=\"MENU_ID\">ED00000590</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_SingleDetail01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"MENU_LEVLE\">2</Col><Col id=\"MENU_GROUP\">ED00000010</Col><Col id=\"MENU_NAME\">Tab01</Col><Col id=\"MENU_NAME_EN\">Tab01</Col><Col id=\"MENU_ID\">ED00000600</Col><Col id=\"MENU_URL\">EduBasic::Template/Template_Tab01.xfdl</Col><Col id=\"SORT_NO\">1</Col><Col id=\"MENU_PID\">ED00000440</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TEXT_EN\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row><Col id=\"MSG_ID\">msg.server.error</Col><Col id=\"MSG_TEXT\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"MSG_TEXT_EN\">Server error. Please contact your administrator.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.server.error.msg</Col><Col id=\"MSG_TEXT\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"MSG_TEXT_EN\">The server received the following error message.s\\n{0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.session.timeout</Col><Col id=\"MSG_TEXT\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"MSG_TEXT_EN\">Your session has expired, please login again.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.login.url.error</Col><Col id=\"MSG_TEXT\">정상적인 경로로 접속하시기 바랍니다.</Col><Col id=\"MSG_TEXT_EN\">invalid access! please, login first at www.tobesoft.com</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.login.error</Col><Col id=\"MSG_TEXT\">해당하는 사용자 정보가 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No user found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.call.nofile</Col><Col id=\"MSG_TEXT\">해당하는 메뉴에 Program File이 등록되지 않았습니다.</Col><Col id=\"MSG_TEXT_EN\">the requested menu does not exist!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.nomenu</Col><Col id=\"MSG_TEXT\">해당 Menu가 존재하지 않습니다.</Col><Col id=\"MSG_TEXT_EN\">The specified menu doesn&apos;t exist.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">confirm.logout</Col><Col id=\"MSG_TEXT\">로그아웃 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to log out?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.movepage</Col><Col id=\"MSG_TEXT\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"MSG_TEXT_EN\">There are unsaved data. Would you like to leave now?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.search</Col><Col id=\"MSG_TEXT\">검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Any unsaved data will be discarded. \\nWould you like to continue?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.moveropos</Col><Col id=\"MSG_TEXT\">해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">If you move the selected row, your changes will be discarded. \\nWould you like to continue?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.delete</Col><Col id=\"MSG_TEXT\">선택된 자료를 삭제 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.deletesave</Col><Col id=\"MSG_TEXT\">선택된 자료를 삭제 후 저장하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete and save?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">confirm.before.save</Col><Col id=\"MSG_TEXT\">변경된 내역을 저장 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Would you like to save your changes?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">msg.noselect</Col><Col id=\"MSG_TEXT\">{0} 을(를) 선택해 주십시요.</Col><Col id=\"MSG_TEXT_EN\">Please, select {0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.search.nodata</Col><Col id=\"MSG_TEXT\">지정된 조건에 해당하는 항목을 찾을 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No data found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.nodata</Col><Col id=\"MSG_TEXT\">저장할 데이터가 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No data to save.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.nochange</Col><Col id=\"MSG_TEXT\">변경된 내역이 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No changes found.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.save.success</Col><Col id=\"MSG_TEXT\">저장 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully saved!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.update.success</Col><Col id=\"MSG_TEXT\">수정 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully updated!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.delete.success</Col><Col id=\"MSG_TEXT\">삭제 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully deleted!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.action.success</Col><Col id=\"MSG_TEXT\">처리 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">Successfully processed!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.action.fail</Col><Col id=\"MSG_TEXT\">프로세스가 실패하였습니다.</Col><Col id=\"MSG_TEXT_EN\">Failed process!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.updateafter</Col><Col id=\"MSG_TEXT\">변경된 내역을 저장 후 작업하세요.</Col><Col id=\"MSG_TEXT_EN\">Please, save your changes first!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.delete.child</Col><Col id=\"MSG_TEXT\">하위 자료가 있어 삭제할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">the requested deletion could not be performed because dependent data found!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.grid.noselect</Col><Col id=\"MSG_TEXT\">선택된 항목이 없습니다.</Col><Col id=\"MSG_TEXT_EN\">No item has been selected!</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.before.delete</Col><Col id=\"MSG_TEXT\">정말로 삭제 하시겠습니까?</Col><Col id=\"MSG_TEXT_EN\">Are you sure you want to delete?</Col><Col id=\"MSG_TYPE\">C</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator</Col><Col id=\"MSG_TEXT\">{0}</Col><Col id=\"MSG_TEXT_EN\">{0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.required</Col><Col id=\"MSG_TEXT\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is a required field.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.length</Col><Col id=\"MSG_TEXT\">{0} 의 입력값은 {1} 자리이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.rangelength</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} is between {1} and {2}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.maxlength</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.minlength</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.maxlengthB</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.minlengthB</Col><Col id=\"MSG_TEXT\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.digits</Col><Col id=\"MSG_TEXT\">{0} 은(는) 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.min</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value greater than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.max</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be a numeric value less than or equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.date</Col><Col id=\"MSG_TEXT\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is in invalid date format.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.dateym</Col><Col id=\"MSG_TEXT\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is in invalid year/month format.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.fromto</Col><Col id=\"MSG_TEXT\">{0} 의 날짜가 {1} 의 날짜보다 작습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is less than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.comparebig</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 보다 작습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is less than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.comparesmall</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 보다 큽니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is greater than {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.equalto</Col><Col id=\"MSG_TEXT\">{0} 이(가) {1} 와(과) 일치하지 않습니다.</Col><Col id=\"MSG_TEXT_EN\">{0} is not equal to {1}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.range</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col><Col id=\"MSG_TEXT_EN\">The value of {0} is between {1} and {2}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.declimit</Col><Col id=\"MSG_TEXT\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">The fractional part of {0} must consiste of {1} digits.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.code</Col><Col id=\"MSG_TEXT\">{0} 은(는) {1} 중 하나의 값이어야 합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} must be the value of {1}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.ssn</Col><Col id=\"MSG_TEXT\">{0} 은(는) 올바른 주민번호가 아닙니다.</Col><Col id=\"MSG_TEXT_EN\">The entered Social Security Number is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.email</Col><Col id=\"MSG_TEXT\">e-mail이 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered email address is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.url</Col><Col id=\"MSG_TEXT\">웹사이트 주소가 잘못 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered website address is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.phone</Col><Col id=\"MSG_TEXT\">전화번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered phone number is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.zipcode</Col><Col id=\"MSG_TEXT\">우편번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"MSG_TEXT_EN\">The entered ZIP code is invalid.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.multicombo.maxcnt</Col><Col id=\"MSG_TEXT\">{0}개 이상 선택 할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">You can&apos;t select more than {0}</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.maxdate</Col><Col id=\"MSG_TEXT\">날짜의 입력 가능 범위를 벗어났습니다.</Col><Col id=\"MSG_TEXT_EN\">Invalid date.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.err.validator.date.great</Col><Col id=\"MSG_TEXT\">종료일이 시작일보다 빠릅니다.</Col><Col id=\"MSG_TEXT_EN\">Invalid date range.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.exist</Col><Col id=\"MSG_TEXT\">{0} 은(는) 중복된 파일이 존재합니다.</Col><Col id=\"MSG_TEXT_EN\">{0} duplicate files exist.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.filesize</Col><Col id=\"MSG_TEXT\">첨부 파일의 용량은 최고 {0}MB까지 입니다.</Col><Col id=\"MSG_TEXT_EN\">Maximum allowed attachment size is {0} MB.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.filetotalsize</Col><Col id=\"MSG_TEXT\">첨부 파일의 전체 용량은 최고 {0}MB까지 입니다.</Col><Col id=\"MSG_TEXT_EN\">Maximum allowed attachment total size is {0} MB.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.allowtype</Col><Col id=\"MSG_TEXT\">{0} 은(는) 허용되지 않는 확장자입니다.[{1}]</Col><Col id=\"MSG_TEXT_EN\">{0} is an unacceptable extension.[{1}]</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.itemcount</Col><Col id=\"MSG_TEXT\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col><Col id=\"MSG_TEXT_EN\">Attachments can not be registered in more than {0}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.file.uploadfail</Col><Col id=\"MSG_TEXT\">{0}로(으로) 파일업로드가 실패하였습니다.</Col><Col id=\"MSG_TEXT_EN\">the file upload is failed because {0}.</Col><Col id=\"MSG_TYPE\">A</Col></Row><Row><Col id=\"MSG_ID\">msg.exist.code</Col><Col id=\"MSG_TEXT\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col><Col id=\"MSG_TEXT_EN\">Code already exsits!</Col><Col id=\"MSG_TYPE\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWord", this);
            obj._setContents("<ColumnInfo><Column id=\"WORD\" type=\"STRING\" size=\"256\"/><Column id=\"KO\" type=\"STRING\" size=\"256\"/><Column id=\"EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KO\">스테틱</Col><Col id=\"EN\">static</Col><Col id=\"WORD\">comp.static</Col></Row><Row><Col id=\"KO\">체크</Col><Col id=\"EN\">check</Col><Col id=\"WORD\">comp.check</Col></Row><Row><Col id=\"WORD\">comp.button</Col><Col id=\"KO\">버튼</Col><Col id=\"EN\">button</Col></Row><Row><Col id=\"KO\">박스</Col><Col id=\"EN\">box</Col><Col id=\"WORD\">comp.box</Col></Row><Row><Col id=\"KO\">콤보</Col><Col id=\"EN\">combo</Col><Col id=\"WORD\">comp.combo</Col></Row><Row><Col id=\"KO\">달력</Col><Col id=\"EN\">calendar</Col><Col id=\"WORD\">comp.calendar</Col></Row><Row><Col id=\"KO\">웹브라우저</Col><Col id=\"EN\">web browser</Col><Col id=\"WORD\">comp.webbrowser</Col></Row><Row><Col id=\"KO\">이미지</Col><Col id=\"EN\">image</Col><Col id=\"WORD\">comp.image</Col></Row><Row><Col id=\"KO\">팝업</Col><Col id=\"EN\">popup</Col><Col id=\"WORD\">comp.popup</Col></Row><Row><Col id=\"KO\">라디오</Col><Col id=\"EN\">radio</Col><Col id=\"WORD\">comp.radio</Col></Row><Row><Col id=\"WORD\">comp.number</Col><Col id=\"KO\">숫자</Col><Col id=\"EN\">number</Col></Row><Row><Col id=\"WORD\">comp.text</Col><Col id=\"KO\">텍스트</Col><Col id=\"EN\">text</Col></Row><Row><Col id=\"WORD\">comp.test</Col><Col id=\"KO\">테스트</Col><Col id=\"EN\">test</Col></Row><Row><Col id=\"WORD\">comp.textmode</Col><Col id=\"KO\">텍스트모드</Col><Col id=\"EN\">text mode</Col></Row><Row><Col id=\"WORD\">frame.menu</Col><Col id=\"EN\">menu</Col><Col id=\"KO\">메뉴</Col></Row><Row><Col id=\"KO\">즐겨찾기</Col><Col id=\"EN\">Favorites</Col><Col id=\"WORD\">frame.favorites</Col></Row><Row><Col id=\"WORD\">frame.searchMenu</Col><Col id=\"KO\">메뉴검색</Col><Col id=\"EN\">Search</Col></Row><Row><Col id=\"WORD\">frame.searchMenu.button</Col><Col id=\"KO\">검색</Col><Col id=\"EN\">sch..</Col></Row><Row><Col id=\"WORD\">frame.logOut</Col><Col id=\"KO\">로그아웃</Col><Col id=\"EN\">Log out</Col></Row><Row><Col id=\"WORD\">cmm.no</Col><Col id=\"KO\">순번</Col><Col id=\"EN\">NO</Col></Row><Row><Col id=\"WORD\">cmm.status</Col><Col id=\"KO\">상태</Col><Col id=\"EN\">Status</Col></Row><Row><Col id=\"WORD\">cmm.checkbox</Col><Col id=\"KO\">체크박스</Col><Col id=\"EN\">Checkbox</Col></Row><Row><Col id=\"WORD\">popup.notice</Col><Col id=\"KO\">알림</Col><Col id=\"EN\">notice</Col></Row><Row><Col id=\"WORD\">popup.confirm</Col><Col id=\"KO\">확인</Col><Col id=\"EN\">confirm</Col></Row><Row><Col id=\"WORD\">popup.ok</Col><Col id=\"KO\">확인</Col><Col id=\"EN\">OK</Col></Row><Row><Col id=\"WORD\">popup.close</Col><Col id=\"KO\">닫기</Col><Col id=\"EN\">Close</Col></Row><Row><Col id=\"WORD\">popup.cancel</Col><Col id=\"KO\">취소</Col><Col id=\"EN\">Cancel</Col></Row><Row><Col id=\"WORD\">popup.periodselect</Col><Col id=\"KO\">기간 선택</Col><Col id=\"EN\">Select the time period</Col></Row><Row><Col id=\"WORD\">popup.monthselect</Col><Col id=\"KO\">월 선택</Col><Col id=\"EN\">Select the month</Col></Row><Row><Col id=\"WORD\">popup.dataselect</Col><Col id=\"KO\">데이터 선택</Col><Col id=\"EN\">Select the data</Col></Row><Row><Col id=\"WORD\">popup.columnselect</Col><Col id=\"KO\">컬럼 선택</Col><Col id=\"EN\">Select the column</Col></Row><Row><Col id=\"WORD\">popup.modal</Col><Col id=\"KO\">모달팝업</Col><Col id=\"EN\">modal popup</Col></Row><Row><Col id=\"WORD\">popup.columnname</Col><Col id=\"KO\">컬럼명</Col><Col id=\"EN\">column name</Col></Row><Row><Col id=\"WORD\">popup.filtercriteria</Col><Col id=\"KO\">필터 기준</Col><Col id=\"EN\">filter criteria</Col></Row><Row><Col id=\"WORD\">popup.findcondition</Col><Col id=\"KO\">찾을 조건</Col><Col id=\"EN\">find conditions</Col></Row><Row><Col id=\"WORD\">popup.datafiltersetting</Col><Col id=\"KO\">데이터 필터 설정</Col><Col id=\"EN\">data filter setting</Col></Row><Row><Col id=\"WORD\">popup.apply</Col><Col id=\"KO\">적용</Col><Col id=\"EN\">Apply</Col></Row><Row><Col id=\"WORD\">popup.datafindreplace</Col><Col id=\"KO\">데이터 찾기/바꾸기</Col><Col id=\"EN\">data find/replace</Col></Row><Row><Col id=\"WORD\">popup.targetcolumn</Col><Col id=\"KO\">대상 컬럼</Col><Col id=\"EN\">target column</Col></Row><Row><Col id=\"WORD\">popup.findstring</Col><Col id=\"KO\">찾을 문자열</Col><Col id=\"EN\">find string</Col></Row><Row><Col id=\"WORD\">popup.replacestring</Col><Col id=\"KO\">바꿀 문자열</Col><Col id=\"EN\">replace string</Col></Row><Row><Col id=\"WORD\">popup.finddirection</Col><Col id=\"KO\">찾을 방향</Col><Col id=\"EN\">find direction</Col></Row><Row><Col id=\"WORD\">popup.findposition</Col><Col id=\"KO\">찾을 위치</Col><Col id=\"EN\">find position</Col></Row><Row><Col id=\"WORD\">popup.find</Col><Col id=\"KO\">찾기</Col><Col id=\"EN\">Find</Col></Row><Row><Col id=\"WORD\">popup.replace</Col><Col id=\"KO\">바꾸기</Col><Col id=\"EN\">Replace</Col></Row><Row><Col id=\"WORD\">popup.allchange</Col><Col id=\"KO\">모두바꾸기</Col><Col id=\"EN\">All Replace</Col></Row><Row><Col id=\"WORD\">popup.casesensitive</Col><Col id=\"KO\">대/소문자 구분</Col><Col id=\"EN\">Case sensitive</Col></Row><Row><Col id=\"WORD\">popup.colshwohide</Col><Col id=\"KO\">컬럼 보이기/숨기기</Col><Col id=\"EN\">column show/hide</Col></Row><Row><Col id=\"KO\">조회</Col><Col id=\"EN\">search</Col><Col id=\"WORD\">search</Col></Row><Row><Col id=\"KO\">입력</Col><Col id=\"EN\">insert</Col><Col id=\"WORD\">insert</Col></Row><Row><Col id=\"KO\">삭제</Col><Col id=\"EN\">delete</Col><Col id=\"WORD\">delete</Col></Row><Row><Col id=\"KO\">수정</Col><Col id=\"EN\">modify</Col><Col id=\"WORD\">modify</Col></Row><Row><Col id=\"WORD\">save</Col><Col id=\"KO\">저장</Col><Col id=\"EN\">save</Col></Row><Row><Col id=\"WORD\">print</Col><Col id=\"EN\">print</Col><Col id=\"KO\">출력</Col></Row><Row><Col id=\"WORD\">excel</Col><Col id=\"KO\">엑셀</Col><Col id=\"EN\">excel</Col></Row><Row><Col id=\"KO\">사원</Col><Col id=\"EN\">employee</Col><Col id=\"WORD\">employee</Col></Row><Row><Col id=\"KO\">부서</Col><Col id=\"EN\">department</Col><Col id=\"WORD\">department</Col></Row><Row><Col id=\"KO\">회사</Col><Col id=\"EN\">company</Col><Col id=\"WORD\">company</Col></Row><Row><Col id=\"WORD\">user</Col><Col id=\"KO\">사용자</Col><Col id=\"EN\">user</Col></Row><Row><Col id=\"KO\">주민등록번호</Col><Col id=\"EN\">Social Security Number</Col><Col id=\"WORD\">user.jumin</Col></Row><Row><Col id=\"WORD\">user.id</Col><Col id=\"KO\">아이디</Col><Col id=\"EN\">ID</Col></Row><Row><Col id=\"KO\">명칭</Col><Col id=\"WORD\">designation</Col><Col id=\"EN\">designation</Col></Row><Row><Col id=\"WORD\">useflg</Col><Col id=\"KO\">사용 여부</Col><Col id=\"EN\">use flg</Col></Row><Row><Col id=\"WORD\">reguser</Col><Col id=\"KO\">등록자</Col><Col id=\"EN\">register user</Col></Row><Row><Col id=\"WORD\">description</Col><Col id=\"KO\">설명</Col><Col id=\"EN\">description</Col></Row><Row><Col id=\"KO\">시작일자</Col><Col id=\"EN\">Start date</Col><Col id=\"WORD\">date.start</Col></Row><Row><Col id=\"KO\">종료일</Col><Col id=\"EN\">End date</Col><Col id=\"WORD\">date.end</Col></Row><Row><Col id=\"WORD\">value.max</Col><Col id=\"KO\">최대값</Col><Col id=\"EN\">Maximum value</Col></Row><Row><Col id=\"KO\">금리</Col><Col id=\"EN\">Interest rate</Col><Col id=\"WORD\">value.interest</Col></Row><Row><Col id=\"EN\">1st value</Col><Col id=\"KO\">1번째값</Col><Col id=\"WORD\">value.1st</Col></Row><Row><Col id=\"EN\">2nd value</Col><Col id=\"KO\">2번째값</Col><Col id=\"WORD\">value.2nd</Col></Row><Row><Col id=\"KO\">등록자</Col><Col id=\"EN\">register</Col><Col id=\"WORD\">register</Col></Row><Row><Col id=\"KO\">정보</Col><Col id=\"EN\">info</Col><Col id=\"WORD\">info</Col></Row><Row><Col id=\"KO\">용어</Col><Col id=\"EN\">word</Col><Col id=\"WORD\">word</Col></Row><Row><Col id=\"KO\">사전</Col><Col id=\"EN\">dictionary</Col><Col id=\"WORD\">dictionary</Col></Row><Row><Col id=\"KO\">국가</Col><Col id=\"EN\">nation</Col><Col id=\"WORD\">nation</Col></Row><Row><Col id=\"KO\">언어</Col><Col id=\"EN\">language</Col><Col id=\"WORD\">language</Col></Row><Row><Col id=\"KO\">선택</Col><Col id=\"EN\">select</Col><Col id=\"WORD\">select</Col></Row><Row><Col id=\"KO\">초기화</Col><Col id=\"EN\">initialize</Col><Col id=\"WORD\">initialize</Col></Row><Row><Col id=\"WORD\">tab1</Col><Col id=\"KO\">1번째탭</Col><Col id=\"EN\">First Tab</Col></Row><Row><Col id=\"WORD\">tab2</Col><Col id=\"KO\">2번째탭</Col><Col id=\"EN\">Second Tab</Col></Row><Row><Col id=\"KO\">한글</Col><Col id=\"EN\">Korean</Col><Col id=\"WORD\">korean</Col></Row><Row><Col id=\"KO\">영어</Col><Col id=\"EN\">English</Col><Col id=\"WORD\">english</Col></Row><Row><Col id=\"WORD\">sort</Col><Col id=\"KO\">정렬</Col><Col id=\"EN\">sort</Col></Row><Row><Col id=\"WORD\">colfix</Col><Col id=\"KO\">열고정</Col><Col id=\"EN\">column fix</Col></Row><Row><Col id=\"WORD\">rowfix</Col><Col id=\"KO\">행고정</Col><Col id=\"EN\">row fix</Col></Row><Row><Col id=\"WORD\">excel</Col><Col id=\"KO\">엑셀</Col><Col id=\"EN\">excel</Col></Row><Row><Col id=\"WORD\">basicfunction</Col><Col id=\"KO\">기본기능</Col><Col id=\"EN\">basic function</Col></Row><Row><Col id=\"WORD\">complicatedgrid</Col><Col id=\"KO\">복잡한 그리드</Col><Col id=\"EN\">complicated grid</Col></Row><Row><Col id=\"WORD\">gridpersonal</Col><Col id=\"KO\">그리드개인화</Col><Col id=\"EN\">personalization grid</Col></Row><Row><Col id=\"WORD\">listcount</Col><Col id=\"KO\">목록 갯수</Col><Col id=\"EN\">List count</Col></Row><Row><Col id=\"WORD\">etorangers</Col><Col id=\"EN\">Eto Rangers</Col><Col id=\"KO\">꾸러기수비대</Col></Row><Row><Col id=\"WORD\">sunday</Col><Col id=\"KO\">일요일</Col><Col id=\"EN\">Sunday</Col></Row><Row><Col id=\"WORD\">monday</Col><Col id=\"KO\">월요일</Col><Col id=\"EN\">Monday</Col></Row><Row><Col id=\"WORD\">tuesday</Col><Col id=\"KO\">화요일</Col><Col id=\"EN\">Tuesday</Col></Row><Row><Col id=\"WORD\">wednesday</Col><Col id=\"KO\">수요일</Col><Col id=\"EN\">Wednesday</Col></Row><Row><Col id=\"WORD\">thursday</Col><Col id=\"KO\">목요일</Col><Col id=\"EN\">Thursday</Col></Row><Row><Col id=\"WORD\">friday</Col><Col id=\"KO\">금요일</Col><Col id=\"EN\">Friday</Col></Row><Row><Col id=\"WORD\">saturday</Col><Col id=\"KO\">토요일</Col><Col id=\"EN\">Saturday</Col></Row><Row><Col id=\"KO\">월</Col><Col id=\"WORD\">mon</Col><Col id=\"EN\">MON</Col></Row><Row><Col id=\"KO\">화</Col><Col id=\"WORD\">tue</Col><Col id=\"EN\">TUE</Col></Row><Row><Col id=\"KO\">수</Col><Col id=\"WORD\">wed</Col><Col id=\"EN\">WED</Col></Row><Row><Col id=\"KO\">목</Col><Col id=\"WORD\">thu</Col><Col id=\"EN\">THU</Col></Row><Row><Col id=\"KO\">금</Col><Col id=\"WORD\">fri</Col><Col id=\"EN\">FRI</Col></Row><Row><Col id=\"KO\">토</Col><Col id=\"WORD\">sat</Col><Col id=\"EN\">SAT</Col></Row><Row><Col id=\"KO\">일</Col><Col id=\"WORD\">sun</Col><Col id=\"EN\">SUN</Col></Row><Row><Col id=\"WORD\">week</Col><Col id=\"KO\">주</Col><Col id=\"EN\">WEEK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"captionEN\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">shapefix</Col><Col id=\"level\">0</Col><Col id=\"caption\">틀고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">shape fix</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">열고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">column fix free</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">1</Col><Col id=\"caption\">행고정해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">shapefix</Col><Col id=\"captionEN\">row fix free</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter</Col></Row><Row><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">grid filter free</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">replace</Col><Col id=\"level\">0</Col><Col id=\"caption\">찾기/바꾸기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">find/replace</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">column show/hide</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">excel</Col><Col id=\"level\">0</Col><Col id=\"caption\">엑셀</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">excel</Col></Row><Row><Col id=\"id\">export</Col><Col id=\"level\">1</Col><Col id=\"caption\">내보내기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">export</Col></Row><Row><Col id=\"id\">import</Col><Col id=\"level\">1</Col><Col id=\"caption\">가져오기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\">excel</Col><Col id=\"captionEN\">import</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">-</Col></Row><Row><Col id=\"id\">personal</Col><Col id=\"level\">0</Col><Col id=\"caption\">현재포맷저장</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">saving current format</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">초기상태로</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"captionEN\">initialization</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_LOGIN_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","439","199","400","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("transparent");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Edit("edId","33","99","335","41",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("ID");
            obj.set_cssclass("edt_LOGIN_ID");
            obj.set_value("Admin");
            obj.set_text("Admin");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edPw","33","170","335","41",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Passworld");
            obj.set_cssclass("edt_LOGIN_PW");
            obj.set_password("true");
            obj.set_value("1234");
            obj.set_text("1234");
            this.divLogin.addChild(obj.name, obj);

            obj = new Combo("cboLang","41","421","220","41",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbo_LOGIN_Language");
            obj.set_displaynulltext("Language");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divLogin_form_cboLang_innerdataset = new nexacro.NormalDataset("divLogin_form_cboLang_innerdataset", obj);
            divLogin_form_cboLang_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">KO</Col><Col id=\"datacolumn\">한국어</Col></Row><Row><Col id=\"codecolumn\">EN</Col><Col id=\"datacolumn\">English</Col></Row></Rows>");
            obj.set_innerdataset(divLogin_form_cboLang_innerdataset);
            obj.set_text("한국어");
            obj.set_value("KO");
            obj.set_index("0");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","33","301","335","63",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LOGIN_Login");
            obj.set_text("LOGIN");
            obj.set_font("normal 22px/normal \"Verdana,Malgun Gothic\"");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta03","33","9","335","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LOGIN_Title");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1278,798,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameLogin.xfdl", function() {
        /**
        *  Necacro EduPack
        *  @MenuPath    frame > frameLogin
        *  @FileName 	frameLogin.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.05.02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022.05.02     	Education 	            	최초 생성
        *  2022.08.10     	Education 	            	스크립트 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjEnv 		= nexacro.getEnvironment();
        this.fvObjApp 	  	= this.gfnGetApplication();
        this.fvObjMainframe = this.fvObjApp.mainframe;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();

        	//runmode, runmode에 따른 설정
        	this.fnSetInfo();
        };

        /**
        * form onsize 변경시
        * @return
        * @example
        * @memberOf public
        */
        this.form_onsize = function()
        {
        	var nLeft = (this.fvObjMainframe.width / 2) - Math.round((this.divLogin.form.getOffsetWidth()) / 2);
        	var nTop = (this.fvObjMainframe.height / 2) - Math.round((this.divLogin.form.getOffsetHeight()) / 2);

        	if (nLeft <= 0)	{
        		this.divLogin.form.setOffsetLeft(0);
        	}
        	else {
        		this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        		case "login":
        			if (this.dsList.rowcount == 1 ) {
        				// 사용자 정보 글로벌데이타셋에 저장
        				var dsUser = this.fvObjApp.gdsUserInfo;
        				dsUser.setColumn(0,"USER_ID",    this.dsList.getColumn(0, "USER_ID"));
        				dsUser.setColumn(0,"USER_NAME",  this.dsList.getColumn(0, "USER_NAME"));
        				dsUser.setColumn(0,"USER_NAME_EN",this.dsList.getColumn(0, "USER_ENAM"));
        				this.fnLoginAfter();
        			}
        			else{
        				this.gfnAlert("msg.login.error");	// 해당하는 사용자 정보가 없습니다.
        			}
        			break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 transaction
         * @param {string} reLoginYn
         * @return
         * @example
         *
         * @memberOf
         * 통신 처리 안되어 있음
         */
        this.fnLogin = function()
        {
        	var strSvcId    = "login";
        	var strSvcUrl   = "login.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        /**
        * 로그인 성공시 처리 프레임 변경 등...
        * @return
        * @example
        * @memberOf
        */
        this.fnLoginAfter = function()
        {
        	// Grid 개인화 정보 load
        	var objGds = this.fvObjApp.gdsGridPersonal;
        	var sGdsGridXML = nexacro.getPrivateProfile("gdsGridPersonal");
        	objGds.loadXML(sGdsGridXML);

        	this.fvObjApp.gvLogIn = "Y";
        	this.fvObjApp.gvVFrameSet.set_separatesize("0,50,*,30");

        	//gloval variable 세팅
        	nexacro.setEnvironmentVariable("evUserId", this.fvObjApp.gdsUserInfo.getColumn(0,"USER_ID"));
        	nexacro.setEnvironmentVariable("evUserNm", this.fvObjApp.gdsUserInfo.getColumn(0,"USER_NAME"));

        	// 다국어 처리
        	sLang = this.divLogin.form.cboLang.value;
        	nexacro.setEnvironmentVariable("evLanguage",sLang);
        	nexacro.setEnvironmentVariable("evLanguageChange",sLang);
        	this.fvObjApp.gvLeftFrame.form.gfnInitLang(this.fvObjApp.gvLeftFrame.form);
        	this.fvObjApp.gvLeftFrame.form.fnChangeLang();
        	this.fvObjApp.gvTopFrame.form.gfnInitLang(this.fvObjApp.gvTopFrame.form);

        	// topframe argument setting
        	this.fvObjApp.gvTopFrame.form.fnLoad();
        	this.fvObjApp.gvTopFrame.form.fnSetName();

        	// Topfrmae 메뉴 검색용 dataset
        	this.fvObjApp.gvLeftFrame.form.fnGlobalMenuCopy();

        };



        /**
        * 운영/개발/로컬여부 셋팅(client체크).
         * @param  none
         * @return none
        */
        this.fnSetInfo = function()
        {
            var nRunMode = "S"; // S: Studio, L: local, D: 개발, R: 운영

        	// 런타임 접속
        	if(system.navigatorname == "nexacro"){
        		var xadl = nexacro.getProjectPath();

        		// Local 접속
        		if (xadl.indexOf("file://") != -1) {
        			nRunMode = "S";
        			this.fvObjApp.mainframe.set_titletext("로컬(Studio) - " + this.fvObjApp.mainframe.titletext);
        		}
        		// Local 웹서버 접속
        		else {
        			// service URL 설정
        			var objSrv = this.fvObjEnv.services["SvcUrl"];
        			trace("SvcUrl : " + objSrv.url);

        			// 로컬(웹)
        			if (xadl.indexOf("localhost") > -1 || xadl.indexOf("127.0.0.1") > -1 ) {
        				nRunMode = "L";
        				this.fvObjApp.mainframe.set_titletext("로컬(웹)  - " + this.fvObjApp.mainframe.titletext);
        			}
        			// 운영
        			else if (xadl.indexOf("172.10.11.117") > -1) {
        				nRunMode = "R";
        				// trace 정지 설정
        				this.fnSetTraceMode(false);
        			}
        			// 개발
        			else {
        				nRunMode = "D";
        				this.fvObjApp.mainframe.set_titletext("개발(웹)  - " + this.fvObjApp.mainframe.titletext);
        			}
        		}
        	}
        	// 웹 접속
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;
        		var objSrv = this.fvObjEnv.services["SvcUrl"];
        		trace("urlPath: " + urlPath + " === " + "SvcUrl: " + objSrv.url);

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 || objSrv.url.indexOf("172.10.14.16") > -1) {
        			nRunMode = "L";
        			this.fvObjApp.mainframe.set_titletext("로컬(웹)  - " + this.fvObjApp.mainframe.titletext);
        		}
        		// 운영
        		else if (objSrv.url.indexOf("172.10.11.117") > -1) {
        			nRunMode = "R";
        			// trace 정지 설정
        			this.fnSetTraceMode(false);
        		}
        		// 개발
        		else {
        			nRunMode = "D";
        			this.fvObjApp.mainframe.set_titletext("개발(웹)  - " + this.fvObjApp.mainframe.titletext);
        		}
        	}
        	nexacro.setEnvironmentVariable("evRunMode", nRunMode);

        	// 접속경로 확인 및 설정
        	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + nRunMode);
        }


        /**
         * @description trace 재정의하여 trace로그 생성 방지
        */
        this.fnSetTraceMode = function(bTrace)
        {
        	trace("운영접속시에는 trace 로그를 남기지 않도록 설정.");

            nexacro.setEnvironmentVariable("evTraceMode", bTrace);
            if (bTrace){
        		trace = this.FRAME_REAL_TRACE_FN;
            }
            else {
                trace = function trace(){};
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
            //로컬환경에서 global dataset으로 화면열기
         	if (nexacro.getEnvironmentVariable("evRunMode") == "S" || nexacro.getEnvironmentVariable("evRunMode") == "L")
         	{
         		this.fnLoginAfter();
         	}
         	else {
         		this.fnLogin();	//서버와통신
         	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.sta00.addEventHandler("onclick",this.divLogin_sta00_onclick,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };
        this.loadIncludeScript("FrameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

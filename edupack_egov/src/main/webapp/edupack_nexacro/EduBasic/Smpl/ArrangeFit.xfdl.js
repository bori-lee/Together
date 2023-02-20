(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ArrangeFit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1038,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_movie", this);
            obj._setContents("<ColumnInfo><Column id=\"TITEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"STARRING\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"GENRE\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"RUNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MOVIE_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITEL\">Avatar</Col><Col id=\"STARRING\">Michelle Rodriguez, Sam Worthington, Sigourney Weaver</Col><Col id=\"YEAR\">2009</Col><Col id=\"SUMMARY\">Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth&apos;s energy crisis. Because Pandora&apos;s atmosphere is toxic, they have created the Avatar Program, in which human &quot;drivers&quot; have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na&apos;vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na&apos;vi, who have become a major obstacle to mining the precious ore. But a beautiful Na&apos;vi female, Neytiri, saves Jake&apos;s life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake&apos;s relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na&apos;vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world</Col><Col id=\"PRODUCTION\"> Twentieth Century Fox Film Corporation</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">162 min</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"SITE\">http://www.avatarmovie.com/</Col><Col id=\"MOVIE_IMG\">imagerc::m_avata.png</Col><Col id=\"GRADE\">9.07</Col></Row><Row><Col id=\"TITEL\">Titanic</Col><Col id=\"STARRING\">Kate Winslet, Leonardo DiCaprio</Col><Col id=\"YEAR\">1997</Col><Col id=\"SUMMARY\">A fictional romantic tale of a rich girl (Winslet) and a poor bohemian boy (DiCaprio) who meet on the ill-fated voyage of the &apos;unsinkable&apos; ship.</Col><Col id=\"PRODUCTION\">Paramount Pictures</Col><Col id=\"RUNTIME\">194 min</Col><Col id=\"GENRE\">Drama, Romance</Col><Col id=\"DIRECTOR\">James Cameron</Col><Col id=\"WRITER\">James Cameron</Col><Col id=\"MOVIE_IMG\">imagerc::m_titanic.png</Col><Col id=\"GRADE\">9.86</Col></Row><Row><Col id=\"TITEL\">FROZEN</Col><Col id=\"STARRING\">Idina Menzel, Josh Gad, Kristen Bell</Col><Col id=\"SUMMARY\">Anna sets off on an epic journey—teaming up with rugged mountain man Kristoff and his loyal reindeer Sven—to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom</Col><Col id=\"YEAR\">2013</Col><Col id=\"PRODUCTION\"> Walt Disney Studios Motion Pictures</Col><Col id=\"DIRECTOR\">Chris Buck and Jennifer Lee</Col><Col id=\"GENRE\">Animation, Family, Musical</Col><Col id=\"RUNTIME\">102 min</Col><Col id=\"SITE\">http://movies.disney.com/frozen</Col><Col id=\"WRITER\">Chris Buck and Dean Wellins</Col><Col id=\"MOVIE_IMG\">imagerc::m_frozen.png</Col><Col id=\"GRADE\">9.20</Col></Row><Row><Col id=\"TITEL\">Iron Man 3</Col><Col id=\"STARRING\">Don Cheadle, Guy Pearce, Gwyneth Paltrow, Robert Downey Jr.</Col><Col id=\"PRODUCTION\"> Walt Disney Studios Motion Pictures</Col><Col id=\"YEAR\">2013</Col><Col id=\"SUMMARY\">Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy’s hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?</Col><Col id=\"DIRECTOR\">Shane Black</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Thriller, Fantasy</Col><Col id=\"RUNTIME\">130 min</Col><Col id=\"WRITER\">Adi Granov</Col><Col id=\"SITE\">http://marvel.com/ironman3</Col><Col id=\"MOVIE_IMG\">imagerc::m_ironman.png</Col><Col id=\"GRADE\">8.86</Col></Row><Row><Col id=\"TITEL\">Star Wars</Col><Col id=\"PRODUCTION\"> Twentieth Century Fox Film Corporation</Col><Col id=\"STARRING\">Ewan McGregor, Liam Neeson, Natalie Portman</Col><Col id=\"YEAR\">1999</Col><Col id=\"SUMMARY\">Stranded on the desert planet Tatooine after rescuing young Queen Amidala from the impending invasion of Naboo, Jedi apprentice Obi-Wan Kenobi and his Jedi Master Qui-Gon Jinn discover nine-year-old Anakin Skywalker, a young slave unusually strong in the Force. Anakin wins a thrilling Podrace and with it his freedom as he leaves his home to be trained as a Jedi. The heroes return to Naboo where Anakin and the Queen face massive invasion forces while the two Jedi contend with a deadly foe named Darth Maul. Only then do they realize the invasion is merely the first step in a sinister scheme by the re-emergent forces of darkness known as the Sith.</Col><Col id=\"DIRECTOR\">George Lucas</Col><Col id=\"GENRE\">Action, Adventure, Sci-Fi, Fantasy</Col><Col id=\"RUNTIME\">136 min</Col><Col id=\"SITE\">http://www.starwars.com/films/star-wars-episode-i-the-phantom-menace</Col><Col id=\"WRITER\">George Lucas</Col><Col id=\"MOVIE_IMG\">imagerc::m_starwars.png</Col><Col id=\"GRADE\">7.80</Col></Row><Row><Col id=\"TITEL\">Inception</Col><Col id=\"STARRING\">Ellen Page, Joseph Gordon-Levitt, Ken Watanabe, Leonardo DiCaprio</Col><Col id=\"PRODUCTION\">Warner Bros. Pictures</Col><Col id=\"SUMMARY\">Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb&apos;s rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible—inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. This summer, your mind is the scene of the crime</Col><Col id=\"YEAR\">2010</Col><Col id=\"DIRECTOR\">Christopher Nolan</Col><Col id=\"GENRE\">Action, Sci-Fi, Drama, Mystery, Thriller</Col><Col id=\"RUNTIME\">148 min</Col><Col id=\"WRITER\">Christopher Nolan</Col><Col id=\"MOVIE_IMG\">imagerc::m_inception.png</Col><Col id=\"GRADE\">9.22</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","10","40","29.00%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_movie");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"188\"/></Columns><Rows><Row size=\"40\"/><Row size=\"80\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:MOVIE_IMG\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"1\" text=\"bind:TITEL\"/><Cell row=\"1\" col=\"1\" text=\"bind:DIRECTOR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_summary","grd_list:10","320",null,"85","10",null,null,null,"80",null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("5px");
            obj.set_wordWrap("english");
            obj.set_fittocontents("height");
            obj.set_border("1px solid #bdc2c9");
            obj.set_cssclass("sta_WF_ArrContents");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_image","grd_list:9.980000000000018","40","180","240",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #bdc2c9");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","img_image:10","40","330","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_FrmTitle");
            obj.set_border("1px solid #bdc2c9");
            obj.set_font("normal 700 30px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","img_image:10","120","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #bdc2c9");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:5","120","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_fittocontents("width");
            obj.set_border("1px solid #bdc2c9");
            obj.set_cssclass("sta_WF_ArrContents");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","grd_list:10","st_summary:10",null,"220","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","9","8","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Runtime");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","9","47","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Starring");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","9","86","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Genres");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","9","125","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Direction");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","9","164","140","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Writer");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","148","8",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","148","47",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","148","86",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","148","125",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","148","164",null,"40","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_background("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_font("normal 15px/22px \"Malgun Gothic\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","img_image:9.980000000000018","90","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Production / Year");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","grd_list:10","290","290","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Summary");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","10","0","280","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Fit to Contents & Arrangement");
            obj.set_cssclass("sta_WF_FrmTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1038,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","img_image","image","ds_movie","MOVIE_IMG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","st_title","text","ds_movie","TITEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Static01","text","ds_movie","PRODUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Static02","text","ds_movie","YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","st_summary","text","ds_movie","SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Static04","text","ds_movie","RUNTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Static05","text","ds_movie","STARRING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Static06","text","ds_movie","GENRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Static07","text","ds_movie","DIRECTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.Static09","text","ds_movie","WRITER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ArrangeFit.xfdl", function() {
        this.CompBase_ArrangeFit_onbindingvaluechanged = function(obj,e)
        {
        	this.resetScroll(); // 바인딩에서 해줬을때 이 이벤트와 메소드를 걸어줘야 정상적으로 동작된다

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbindingvaluechanged",this.CompBase_ArrangeFit_onbindingvaluechanged,this);
            this.ds_movie.addEventHandler("onrowsetchanged",this.Dataset00_onrowsetchanged,this);
        };
        this.loadIncludeScript("ArrangeFit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

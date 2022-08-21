module.exports = {
    HTML : function(title, explain, adlistFunc, action_site, contentslistFunc){
        return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>ZEP AD</title>
            <script language="javascript">
                function showPopup() { window.open("08_2_popup.html", "a", "width=400, height=300, left=100, top=50"); }
            </script>
            <script src="https://kit.fontawesome.com/36f1c3ffe5.js" crossorigin="anonymous"></script>
            <style>
            :root{
                --text-color: #f0f4f5;
                --background-color: rgba(36, 173, 114, 0.927);
                --button-color: #ffffff;
            }
            /*here->*/
            .title{
                position: absolute;
                top: 100px;
                left: 150px;
                font-size:30px;
            }
            .explain{
                position: absolute;
                top: 200px;
                left: 150px;
                font-size:15px;
            }
            body{
                margin:0;
            }
            a{
                text-decoration:none;
                color:white;
            }
            .navbar {
                display:flex;
                justify-content: space-between;
                align-items:center;
                background-color: var(--background-color);
                padding:0px 20px;
            }
            .navbar__logo{
                color:white;
                width:10px;
            }
            .navbar__menu{
                display:flex;
                list-style:none;
                padding-left:0;
                font-family: 'Noto Sans KR', sans-serif;
                font-size: 20px;
                font-weight: 600;
                
            }
            .navbar__menu li{
                padding:8px 40px;
            }
            .navbar__icons{
                list-style:none;
                color:white;
                display:flex;
                font-size:25px;
            }
            
            /*<-here*/
            ul{
                padding-left:0; margin-left:0;
            }
            #grid{
                display:grid;
                grid-template-columns: 0px 0px 0px;
                position: absolute;
                top: 320px;
                left: 150px;
                font-size:15px;
            }
            #move1{
                position: absolute;
                top: 300px;
                left: 150px;
                font-size:15px;
            }
            button {
                background: var(--background-color);
                color: var(--button-color);
    
                margin: 0;
                padding: 0.7rem 2rem;
    
                font-family: 'Noto Sans KR', sans-serif;
                font-size: 20px;
                font-weight: 600;
                text-align: center;
                text-decoration: none;
    
                border: none;
                border-radius: 4px;
            }
            .ingroup{
                display:grid;
                grid-template-columns: 150px 1fr;
            }
            .inputbox{
                width:400px;
                height:30px;
                font-size:15px;
    
            }
            #complate{
                position: absolute;
                left: 600px;
                top: 700px;
            }
            /*here*/
            #BSbtn{
                font-size:20px;
            }
            label{
                font-size:20px;
            }
            #total{
                display:grid;
                grid-template-columns: 1fr 1fr ;
            }
            .sns{
                border:5px solid var(--background-color);
                padding:10px 20px;
                position: absolute;
                top: 150px;
                left: 900px;
                font-size:15px;
                font-weight: 350;
            }
            </style>
        </head>
        <body>
            <nav class = "navbar">
            <div class="navbar__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="69.646" height="74.976" viewBox="0 0 69.646 74.976">
                    <g id="logo-zep" transform="translate(23.123 35.099)">
                        <path id="�н�_10" data-name="�н� 10" d="M66.486,31.553c1.319-5.645.855-10.964-1.717-15.133-3.434-5.6-9.956-8.142-17.686-7.741C41.246,2.422,34.157-.491,27.443,1.544,21.953,3.209,17.635,7.9,14.916,14.362,8.365,16.851,3.493,21.323,1.651,27.353.118,32.4.914,37.8,3.574,42.887c-2.13,6.606-1.968,12.924,1,17.766,3.744,6.106,11.172,8.581,19.9,7.567,5.814,6.182,12.852,9.035,19.514,7.014,5.49-1.657,9.816-6.356,12.528-12.818,6.551-2.49,11.415-6.961,13.265-12.984C71.5,43.569,70.156,37.288,66.486,31.553ZM44.5,54.313H26.692a4.546,4.546,0,0,1-2.548-.81,4.728,4.728,0,0,1-1.69-2.119,5.116,5.116,0,0,1-.339-2.772,5.051,5.051,0,0,1,1.164-2.525L33.987,33.724h-7.3a4.706,4.706,0,0,1-3.372-1.434,4.989,4.989,0,0,1,0-6.923,4.706,4.706,0,0,1,3.372-1.434H44.5a4.55,4.55,0,0,1,2.546.808,4.733,4.733,0,0,1,1.692,2.113,5.147,5.147,0,0,1,.333,2.771,5.083,5.083,0,0,1-1.159,2.526L37.208,44.514h7.3a4.706,4.706,0,0,1,3.371,1.434,4.989,4.989,0,0,1,0,6.923A4.705,4.705,0,0,1,44.5,54.305Z" transform="translate(-24 -36)" fill="#fff" fill-rule="evenodd"/>
                    </g>
                </svg>
            </div>
            <ul class="navbar__menu">
                <li><a href="">Home</a></li>
                <li><a href="">Developer</a></li>
                <li><a href="">Tips</a></li>
            </ul>
            <ul class="navbar__icons">
                <li><i class="fa-solid fa-right-to-bracket"></i></li>
            </ul>
        </nav>
        <div id="total">
            <div class = "sbal">
                <h3 class = "title">${title}</h3>
                <div class = "explain">${explain}</div>
                <form action="${action_site}" method="post">
                <div id = "move1">    
                    ${contentslistFunc}
                    <br>
                </div>
                    <div><button type="submit" id = "complate" onclick="">Excute ad</button></div>
                </form>    
                <br>
                <br>
                <br>
            </div>
            <div class="sns">
            <div class="fileform">
                <label>File selection</label>
                <br>
                <br>
                <input type="file" id="BSbtn">
            </div>
            <br>
            <br>
            <br>
            <br>
            <div class="tag">
                <div>write less than 4 tags.(optional)</div>
                <input type="text" class="form-control" placeholder="Text input">
            </div>
            <br>
            <br>
            <br>
            <br>
            <div class="sumtext">
                <div>write less than 100 words.</div>
                <textarea class="form-control" rows="3"></textarea>
            </div>
        </div>
    </div>
</body>
</html>
        `;
    },
    adlist_site: ['?id=text_ad', '?id=image_ad', '?id=special_ad'],
    ko_list: {
        title: 'ZEP Advertising',
        explain : `Execute ads on ZEP.<br>
        Pt. will not be returned if ads deemed inappropriate can be discontinued. <br>
        If you continue to execute advertisements that are deemed inappropriate, they may be blocked.`,
        adlist: ['Image Upload'],
        contentslist: ['SpaceHashID', 'Exposure Frequency', 'Number of days', 'Total Points', 'Text', 'Tag'],
        placeholderlist: ['65jeBA', '2', '6', '12000.PT']
    },
    adlistFunc : function(adlist_site, adlist){
        var list = '';
        var i = 0;
        while (i < adlist.length){
            list = list + `<ul><button type="button"><a href = "${adlist_site[i]}">${adlist[i]}</a></button></ul>`;
            i += 1;
        }
        return list;
    },
    contentslistFunc: function(contentslist, placeholderlist){
        var list = '';
        var i = 0;
        while (i < contentslist.length){
            list = list + `
            <div class = "ingroup">
            <ul class="input">${contentslist[i]}</ul>
            <ul><input type="text" class="inputbox" name="${contentslist[i]}" placeholder="${placeholderlist[i]}"></ul>
            </div>`
            i += 1;
        }
        return list;
    },
}
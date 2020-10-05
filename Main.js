const fs = require("fs");
let fantasyTownName = ["MillerVille","Timeston","Krosstoen","Limesvilles","Cherrytown","Fortaare","Kelna","Strongfair","Solime","Wolfpine","Little Ivywood","Peatsland","Haling Cove","Eastcliff","Emall","Emelle","Holden","Walden","Venzor","Roselake","Beachmarsh","Beachcastle","Butterpond","Snowbush","Fallholt","Ironhaven","Woodpine","Black Crystal","Falcon Haven","Redwick Bush","Clare View Point","Crossroads","Skystead","Everwinter","Wolfwater","Shadowfen","King's Watch","Redwater","Dragontail","Mournstead","Lunaris","Solaris","Aynor","Naporia","Onryx","Aria","Aerilon ","Aquarin ","Aramoor ","Azmar ","Begger's Hole ","Black Hollow ","Blue Field ","Briar Glen ","Brickelwhyte ","Broken Shield ","Boatwright ","Bullmar ","Carran ","City of Fire ","Coalfell ","Cullfield ","Darkwell ","Deathfall ","Doonatel ","Dry Gulch ","Easthaven ","Ecrin ","Erast ","Far Water ","Firebend ","Fool's March ","Frostford ","Goldcrest ","Goldenleaf ","Greenflower ","Garen's Well ","Haran ","Hillfar ","Hogsfeet ","Hollyhead ","Hull ","Hwen ","Icemeet ","Ironforge ","Irragin ","Jarren's Outpost ","Jongvale ","Kara's Vale ","Knife's Edge ","Lakeshore ","Leeside ","Lullin ","Marren's Eve ","Millstone ","Moonbright ","Mountmend ","Nearon ","New Cresthill ","Northpass ","Nuxvar ","Oakheart ","Oar's Rest ","Old Ashton ","Orrinshire ","Ozryn ","Pavv ","Pella's Wish ","Pinnella Pass ","Pran ","Quan Ma ","Queenstown ","Ramshorn ","Red Hawk ","Rivermouth ","Saker Keep ","Seameet ","Ship's Haven ","Silverkeep ","South Warren ","Snake's Canyon ","Snowmelt ","Squall's End ","Swordbreak ","Tarrin ","Three Streams ","Trudid ","Ubbin Falls ","Ula'ree ","Veritas ","Violl's Garden ","Wavemeet ","Whiteridge ","Willowdale ","Windrip ","Wintervale ","Wellspring ","Westwend ","Wolfden ","Xynnar ","Yarrin ","Yellowseed ","Zeffari ","Ormkirk","Dunwich","Anghor Thom","Anghor Wat","Kamouraska","Astrakhan","Arkkukari","Arkala","Halivaara","Hammaslahti","Hankala","Elinmylly","Erstonia","Cappadocia","Grimsby","Aberystwyth","Aberdyfi ","Aberdeen ","Aberuthven","Accrington","Acomb","Acton","Matlock","Glanyrafon","Armagh","Ardglass","Aston","Auchendinny","Auchenshuggle","Achnasheen","Auchtermuchty","Auchterarder","Exeter","Axminster","Westray","Lundy","Orkney","Ballachulish","Balerno","Ballymena","Ballinamallard","Ballater","Balmoral","Holbeck","Beckinsale","Troutbeck","Beckton","Bexley","Blencathra","Blencogo","Blaenau","Ffestiniog","Leurbost","Bournemouth","Eastbourne","Ashbourne","Blackburn","Bannockburn","Bradford","Bredon","Aylesbury","Dewsbury","Bury","Middlesbrough","Edinburgh","Bamburgh","Peterborough","Jedburgh","Grimsby","Tenby","Kincardine","Cardended","Lancaster","Doncaster","Gloucester","Caister","Worcester","Chester","Cirencester","Colchester","Caerdydd","Caerleon","Carlisle","Caerfyrddin","Chepstow","Barcombe","Farncombe","Ilfracombe","Coombe","Ascot","Draycott","Swadlincote","Culcheth","Cumdivock","Dalry","Dalmellington","Airedale","Rochdale","Saxondale","Croydon","Horndean","Todmorden","Abingdon","Bredon","Willesden","Drumchapel","Drumnacanvy","Drumnadrochit","Dundee","Dumbarton","Dungannon","Romsey","Athelney","Ely","Hornsey","Sheffield","Wakefield","Mansfield","Macclesfield","Mirfield","Chesterfield","Murrayfield","Findochty","Holmfirth","Burrafirth","Bradford","Ampleforth","Watford","Fanfoss","Aysgarth","Gillamoor","Garrigill","Rutherglen","Glenarm","Guthram","Rotherham","Newham","Tottenham","Oldham","Newsham","Faversham","Rotherhithe","Hythe","Erith","Holmfirth","Hempholme","Woolhope","Glossop","Howe","Norfolk","Dewhurst","Woodhurst","Spalding","Lockinge","Inverness","Keld","Threlkeld","Penketh","Culcheth","Kilmarnock","Kilead","Kilkenny","Kincardine","Kinallen","Coningsby","Kirkwall","Ormskirk","Colkirk","Falkirk","Lanteglos","Lhanbryde","Lanercost","Llanybydder","Langdale","Tow","Lewes","Barnsley","Hadleigh","Lindow","Llyn","Lingmell","Appleby","Wigston","Windermere","Grasmere","Cromer","Tranmere","Wimborne","Mossley","Bournemouth","Portsmouth","Monmouth","Nancledra","Nantgarw","Nantwich","Skegness","Furness","Norton","Norbury","Norwich","Pantmawr","Penzance","Pendle","Penrith","Putlochry","Pitmedden","Polperro","Poltragow","Pontypridd","Pontheugh","Hartlepool","Blackpool","Porthcawl","Porthaethwy","Davenport","Penshaw","Openshaw","Shepshed","Shipton","Stanmore","Stamford","Stanlow","Hampstead","Berkhamsted","Lybster","Scrabster","Damerel","Padstow","Strathmore","Streatham","Sudbury","Sutton","Swindon","Swinford","Cleethorpes","Thorpeness","Huthwaite","Tregaron","Travercraig","Tillicoultry","Tillydrone","Lowestoft","Tywardreath","Tunstead","Warrington","Coniston","Clacton","Everton","Broughton","Luton","Merton","Stratford","Wealdstone","Southwold","Norwich","Alnwick","Bromwich","Runswick","Lerwick","Wheldrake","Wimborne","Tamworth","Farnworth","Holsworthy","Bredwardine","Orilon ","Aquarine ","Aramore","Azmarin ","Beggar's Hole ","Black Hallows","Briar Glen ","Bracklewhyte","Bellmare ","Cirrane ","Caelfall ","Crullfeld ","Murkwell","Durnatel","Easthallow ","Acrine ","Erostey","Forstford ","Goulcrest ","Hirane","Hillford ","Ilragorn","Leefside","Mirstone ","Nerton","Aroonshire ","Alryne","Pirn","Torrine","Tardide ","Veritas","Whitebridge ","Wallowdale ","Wolford","Yarlford","Zalfari ","Urmkirkey","Dornwich","Kameeraska","Astrakane","Archmouth","Arkaley","Aelinmiley","Myrefall","Garmsby","Aberstwyth","Alderdyfi ","Alderrdeen ","Aeberuthey","Accreton","Alcombey","Arcton","Martslock","Glarnyraefon","Aermagh","Aeston","Auchendale","Archensheen","Auctermunty","Aucteraden","Arkmunster","Arkney","Bellechulish","Baerney","Bailymena","Ballingsmallard","Ballaeter","Bellmoral","Hullbeck","Beckinsdale","Troutberk","Berkton","Berxley","Blancathey","Blencalgo","Bellenau","Larcbost","Fournemouth","Eastborne","Ashborne","Bleakburn","Banrockburn","Bradfordshire","Braedon","Islesbury","Dawsbury","Middlesborough","Edinborourgh","Bamborourgh","Peterbrugh","Jedborourgh","Gramsby","Taernsby","Kingcardine","Cardend","Laencaster","Duncaster","Glanchester","Warcester","Sirencester","Calchester","Caershire","Carleone","Chaepstow","Barncombe","Ferncombe","Ilfreycombe","Graycott","Swindlincote","Calcheth","Cewmann","Dalelry","Dalmerlington","Aeredale","Rachdale","Craydon","Haerndean","Taedmorden","Arbington","Braedon","Willsden","Durmchapel","Domburton","Dangarnon","Gormsey","Aethelney","Eelry","Harnsey","Sherfield","Hardersfield","Waekefield","Mensfield","Marclesfield","Mirefield","Cesterfield","Murlayfield","Addersfield","Ferndochty","Helmfirth","Burrafirth","Bardford","Aempleforth","Warthford","Farnfoss","Iyesgarth","Gilramore","Garigill","Rptherglen","Glaenarm","Garthram","Ruthorham","Eldham","Favorsham","Ritherhithe","Ayrith","Helmfirth","Foolshope","Galssop","Hewe","Narfolk","Dalhurst","Woodhaerst","Larkinge","Eanverness","Kald","Thralkeld","Penkurth","Calcherth","Calmarnock","Kilerth","Kinecardine","Kineallen","Carningsby","Kirekwall","Armskirk","Caelkirk","Fallkirk","Laenteglos","Lhanbyrde","Lanercoast","Llaneybyder","Longdale","Taewe","Laewaes","Burnsley","Haedleigh","Landow","Llyne","Linemell","Wingston","Wandermere","Crasmere","Cromerth","Transmere","Wombourne","Moressley","Barnemouth","Paethsmouth","Marnmouth","Narnclaedra","Nantgarth","Narthwich","Skargness","Northon","Northbury","Northwich","Paentmarwy","Paendley","Pernrith","Perthlochry","Pitmerden","Palperroth","Peltragow","Pontybridge","Hurtlepool","Blackridgepool","Porthcrawl","Porthaethwidge","Doveport","Panshaw","Perlshaw","Sharpton","Stawford","Sanlow","Harmstead","Barkamsted","Daemarrel","Pathstow","Stathmore","Stratham","Satbury","Sarton","Swindmore","Swanford","Claethorpes","Thorpes","Harthwaite","Tergaron","Tylwaerdreath","Tarnstead","Warlington","Conriston","Clarcton","Alverton","Boroughton","Larton","Malrton","Stathford","Waeldestone","Alnerwick","Barmwich","Sharnwick","Larnwick","Whaelrdrake","Wanborne","Tarmsworth","Fernsworth","Halsworthy","Braedwardith"];
const {loadImage,createCanvas,Image} = require("canvas")
const { uniqueNamesGenerator, names } = require('unique-names-generator');
const Discord = require("discord.js");
const client = new Discord.Client();
const deepcopy = require("deepcopy");
const HWDB = require("./libs/hawkwhisper").HWDB;
const HWDBTCP = require("./libs/hawkwhisper").HAWKTCP;
const key = require("./libs/key.json")
const DataBase = new HWDB(["data","data2"],".TEFS",{key:key.key,oldEnc:true,publicExtensionName:true},(res)=>{})
DataBase.newTableSync("users");
DataBase.newTableSync("properties");
DataBase.newTableSync("servers");
DataBase.newTableSync("NPCS");
DataBase.newTableSync("autoINC");
DataBase.newTableSync("ITEMS");
//let DW = new HWDBTCP(25565,DataBase);
const extName = DataBase.getExtensionName();

let HAI,HOI,SHI,HYI,houseIMG,townhallIMG,mapIMG,skyMapImg,grassIMG,boulderIMG,HRC,mountainIMG;

HRC = fs.readFileSync("./images/houseRuleChart.png");
loadImage(fs.readFileSync("./images/grass.png")).then(HI=>{
    grassIMG = HI;
})
loadImage(fs.readFileSync("./images/houseShop.png")).then(HI=>{
    SHI = HI;
})
loadImage(fs.readFileSync("./images/mountain.png")).then(HI=>{
    mountainIMG = HI;
})
loadImage(fs.readFileSync("./images/boulder.png")).then(HI=>{
    boulderIMG = HI;
})
loadImage(fs.readFileSync("./images/houseAvailable.png")).then(HI=>{
    HAI = HI;
})
loadImage(fs.readFileSync("./images/houseOccupied.png")).then(HI=>{
    HOI = HI;
})
loadImage(fs.readFileSync("./images/houseYou.png")).then(HI=>{
    HYI = HI;
})
loadImage(fs.readFileSync("./images/cloudMap.png")).then(HI=>{
    skyMapImg = HI;
})
loadImage("images/townHall.png").then(img3=>{
    loadImage("images/house.png").then(img2=>{
        loadImage("images/toewnMap.png").then(img=>{
            houseIMG = img2;
            townhallIMG = img3;
            mapIMG = img;

        });
    });
});

client.on("ready",()=>{
console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("The Long Con","PLAYING");
let amount = "\n";
});

function getRandomXY(checkAgainst,boundingSize){
    let x = Math.floor(Math.random() * 460) + 20;
    let y = Math.floor(Math.random() * 460) + 20;
    for(let i = 0; i < checkAgainst.length; i++){
        if(!isInsideBoundingBox(checkAgainst[i],{x,y},boundingSize)){
           return getRandomXY(checkAgainst,boundingSize)
        }
    }
    return {x,y}
}

function createBattleSequence(town,userInfo,callback){
}

function getRandomClusterXY(checkAgainst,boundingSize,type){

    let x = Math.floor(Math.random() * 500) + 20;
    let y = Math.floor(Math.random() * 500) + 20;

    //checkAgainst = checkAgainst.filter(e=>e.type != "mountain")

    for(let i = 0; i < checkAgainst.length; i++){

        if(checkAgainst[i].type == "mountain"){
            if(isInsideBoundingBox(checkAgainst[i],{x,y},boundingSize)){
                return getRandomClusterXY(checkAgainst,boundingSize)
             }
        } else {
            if(!isInsideBoundingBox(checkAgainst[i],{x,y},30)){
                return getRandomClusterXY(checkAgainst,boundingSize,type)
             }
        }
    }
    return {x,y}
}

function createMountainCluster(boundingBox1,type){
    let bb = boundingBox1;
    if(bb == undefined) bb = [];
    let cluster = [...bb]
    let returnCluster = []
    for(let i = 0; i < Math.floor(Math.random() * 6) + 3; i++){
        let clust = getRandomClusterXY(cluster,20,type)
        clust.type = type;
        cluster.push(clust);
        returnCluster.push(clust)
    }
    return returnCluster;

}

function isInsideBoundingBox(boundingBox1,boundingBox2,boundingSize){

    let bb1x = boundingBox1.x;
    let bb1y = boundingBox1.y;
    let bb2x = boundingBox2.x;
    let bb2y = boundingBox2.y;
    if(Math.abs(bb1x - bb2x) < boundingSize && Math.abs(bb1y - bb2y) < boundingSize){
        return false;
    }
    return true;

}

// function isNotInsideBoundingBox(boundingBox1,boundingBox2,boundingSize){

//     let bb1x = boundingBox1.x;
//     let bb1y = boundingBox1.y;
//     let bb2x = boundingBox2.x;
//     let bb2y = boundingBox2.y;
//     if(Math.abs(bb1x - bb2x) < boundingSize && Math.abs(bb1y - bb2y) < boundingSize){
//         return true;
//     }
//     return false;

// }

function regenerateTown(town,callback){
    let canvas = createCanvas(540,540);
    let ctx = canvas.getContext("2d");
    ctx.font = "20px Morris Roman";
    ctx.drawImage(mapIMG,0,0)//draw map
    if(town.grassInfo == undefined){
        town.grassInfo = []
        for(let i = 0; i < Math.floor(Math.random() * 200) + 70; i++){
            let getXY = getRandomXY([],0);
            ctx.drawImage(grassIMG,getXY.x,getXY.y)
            town.grassInfo.push(getXY)
        }
        DataBase.newItemSync("properties",town.townName,town)
    } else {
        for(let grass of town.grassInfo){
            ctx.drawImage(grassIMG,grass.x,grass.y)
        }
    }

    if(town.featureInfo != undefined){
        for(let feature of town.featureInfo){
            if(feature.type == "mountain"){
                ctx.drawImage(mountainIMG,feature.x,feature.y)
            }
        }
    }//redraw features if they exist.
    for(let houses of town.houseInfo){
        ctx.beginPath();
        let totalOffset = 10;
        ctx.moveTo(houses.x + totalOffset ,houses.y + totalOffset)
        if(houses.y + totalOffset > (500/2) + (totalOffset + 15)){
            ctx.lineTo((500/2) + (totalOffset + 15),houses.y + totalOffset);
            ctx.lineTo((500/2) + (totalOffset + 15),(500/2) + (totalOffset + 15))
        } else {
            ctx.lineTo((500/2),houses.y + totalOffset);
            ctx.lineTo((500/2),((500/2) + (totalOffset + 15)) + 35)
            ctx.lineTo(((500/2) + (totalOffset + 15)),((500/2) + (totalOffset + 15)) + 35)

        }

        ctx.stroke();
    }//redraw paths.
    for(let houses of town.houseInfo){
        ctx.drawImage(houseIMG,houses.x,houses.y,30,30);
    }//redraw houses.

    ctx.drawImage(townhallIMG,500/2,500/2); //redraw townhall
    ctx.fillText(town.townName,(500/2) - town.townName.length,40); //redraw name.
    fs.writeFileSync(town.townImage,canvas.toDataURL().replace(/^data:image\/png;base64,/, ""),"base64");
    callback(canvas.toBuffer())
}

function generateTown(callback){
let canvas = createCanvas(540,540);
let ctx = canvas.getContext("2d");
ctx.font = "20px Morris Roman";
let townName;
let houseArray = [];
let grassArray = [];
let featureArray = [];
let mountainArray = [];


            ctx.drawImage(mapIMG,0,0)
            for(let i = 0; i < Math.floor(Math.random() * 200) + 70; i++){
                let getXY = getRandomXY([],0);
                ctx.drawImage(grassIMG,getXY.x,getXY.y)
                grassArray.push(getXY)
            }

            for(let i = 0; i < Math.floor(Math.random() * 20) + 12; i++){
                let copyArray = [...houseArray,{type:"townhall",x:500/2,y:500/2}]
                let getRandom = getRandomXY(copyArray,50);
                let x = getRandom.x
                let y = getRandom.y
                houseArray.push({x,y,id:i,owner:null});
            }
            for(let i = 0; i < Math.floor(Math.random() * 3) + 1; i++){
                let mountainCollision = deepcopy(mountainArray);
               // mountainCollision.push(...mountainArray);
                mountainCollision.map(e=>e.type = null);
                mountainArray.push(...createMountainCluster([...houseArray,...mountainCollision],"mountain"));
            }
            console.log(mountainArray)
            featureArray.push(...mountainArray)
            for(let mountains of mountainArray){
                ctx.drawImage(mountainIMG,mountains.x,mountains.y)
            }

            for(let houses of houseArray){
                ctx.beginPath();
                let totalOffset = 10;
                ctx.moveTo(houses.x + totalOffset ,houses.y + totalOffset)
                if(houses.y + totalOffset > (500/2) + (totalOffset + 15)){
                    ctx.lineTo((500/2) + (totalOffset + 15),houses.y + totalOffset);
                    ctx.lineTo((500/2) + (totalOffset + 15),(500/2) + (totalOffset + 15))
                } else {
                    ctx.lineTo((500/2),houses.y + totalOffset);
                    ctx.lineTo((500/2),((500/2) + (totalOffset + 15)) + 35)
                    ctx.lineTo(((500/2) + (totalOffset + 15)),((500/2) + (totalOffset + 15)) + 35)

                }

                ctx.stroke();
            }

            for(let houses of houseArray){
             ctx.drawImage(houseIMG,houses.x,houses.y,30,30);
            }
            
            //DataBase.newItem("properties",name)
            townName = townNameExistsCheck();
            ctx.drawImage(townhallIMG,500/2,500/2);
            ctx.fillText(townName,(500/2) - townName.length,40);
            //ctx.rotate(0.1);
        // ctx.fillText("i ate 20 bagels",30,100)
        let shopOwnerNPC = new NPC(DataBase.viewItemsSync("NPCS",0).val.length,"shopkeeper","kobold",getViableNPCName())
        shopOwnerNPC.setShopParameters();
        shopOwnerNPC.stockShopParameter();
        shopOwnerNPC.saveData(shopOwnerNPC.getData());
        houseArray[Math.floor(Math.random() * (houseArray.length - 1))].owner = shopOwnerNPC.getData().ID;
        console.log(shopOwnerNPC);
        DataBase.newItemSync("properties",townName,{townName,townImage:"./images/towns/"+townName+".png",houseInfo:houseArray,featureInfo:featureArray,grassInfo:grassArray})
        fs.writeFileSync("./images/towns/"+townName+".png",canvas.toDataURL().replace(/^data:image\/png;base64,/, ""),"base64");
        callback(townName,canvas.toBuffer());

}

function getViableNPCName(){
    let name = uniqueNamesGenerator({dictionaries:[names]});
    if(DataBase.viewItemsSync("NPCS",0).val.includes(name)){
        return getViableNPCName();
    }
    console.log(name);
    return name;
}

function townNameExistsCheck(repeatAmount){
    repeatAmount = Number.isInteger(repeatAmount) ? repeatAmount : 0; 
    let random = Math.floor(Math.random() * fantasyTownName.length);
    name = fantasyTownName[random];
    name = name.replace(" ","_")
    let exists = DataBase.viewItemsSync("properties",0).val.includes("TownData_"+name+"_file"+extName);
    if(exists){
        repeatAmount++
        if(repeatAmount > 25){
        let trico = client.users.cache.get("105357779807535104");
        trico.send(JSON.stringify(new Error("repeat limit exceeded!")))
        throw new Error("repeat limit exceeded!")
        }
       return townNameExistsCheck(repeatAmount)
    } else {
        return name;
    }
}

class Registry{

    constructor(identifier){
        this.Registry = {};
        identifier == undefined ? this.identifier = "ID" : this.identifier = identifier;
        Object.defineProperty(this,"length",{
            get:function (){
                let size = 0, key;
                for (key in this.Registry) {
                    if (this.Registry.hasOwnProperty(key)) size++;
                }
                return size;
            }
        })
    }

    get(num){
        return this.Registry[num];
    }

    push(Item){
        this.Registry[Item[this.identifier]] = Item;
    }

    getRegistry(){
        return this.Registry;
    }

}

class itemInstance {
    constructor(item){
    this.item = deepcopy(item); //custom copy
    if(this.item.Quantity == undefined) this.item.Quantity = 1;
    }

    getQuantity(){
        return this.item.Quantity;
    }

    setQuantity(quantity){
        this.item.Quantity = quantity;
        if(this.item.Quantity < 0){
            console.log("you're going below acceptable quantity levels.")
            this.item.Quantity = 0;
        }
    }

    addQuantity(quantity){
        this.item.Quantity += quantity;
        
    }

    removeQuantity(quantity){
        this.item.Quantity -= quantity;
        if(this.item.Quantity < 0){
            console.log("you're going below acceptable quantity levels.")
            this.item.Quantity = 0;
        }
    }

    getInstance(){
        return this.item;
    }

}

class ItemRegistry {

    constructor(){
        this.ItemRegistry = new Registry();
        this.init();
    }

    init(){
        this.registerItem("Iron Ingot",50);
        this.registerItem("Silver Ingot",175);
        this.registerItem("Gold Ingot",50);
        this.registerItem("Diamond",200);
        this.registerItem("Emerald",225);
        this.registerWeapon("Sword",100,50,1.0,175);
        this.registerWeapon("Long Sword",150,100,1.5,120);
        this.registerWeapon("Spear",110,70,2.0,100);
        this.registerWeapon("Bow",230,110,6,180);
        this.registerConsumable("Potion of Healing",50,120,0);
        this.registerConsumable("Potion of Stamina",50,0,120);
        this.registerConsumable("Apple",10,40,50);
        this.registerConsumable("Bread",20,50,60);
        this.registerConsumable("Steak",50,70,65);   
        this.registerSpell("Healing",100,0,1);
        this.registerSpell("Fire Ball",120,10,1);
        this.registerSpell("Fire Storm",120,10,1); 
        this.registerSpell("Ice Ball",120,10,1);
        this.registerSpell("Ice Storm",120,10,1);
        this.registerSpell("Lightning Strike",120,10,1);
        this.registerSpell("Lightning Storm",120,10,1);  
    }

    registerItem(name, value){
        this.ItemRegistry.push(new Item(this.ItemRegistry.length,name,value));
    }
    registerWeapon(name, value, Damage, Range, Durability){
        this.ItemRegistry.push(new Weapon(this.ItemRegistry.length,name,value,Damage,Range,Durability));
    }
    registerConsumable(name, value, HP, AP){
        this.ItemRegistry.push(new Consumable(this.ItemRegistry.length,name,value,HP,AP));
    }
    registerSpell(name,value,range,scope){
        this.ItemRegistry.push(new Spell(this.ItemRegistry.length,name,value,range,scope));
    }

    getRegistry(){
        return this.ItemRegistry;
    }
}

class Item {

    constructor (ID,Name,value){
    this.ID = ID;
    this.Name = Name;
    this.Type = "item"
    this.BaseValue = value;
    }
    getID(){
        return this.ID;
    }

    getName(){
        return this.Name;
    }

    setName(name){
        this.Name = name;
    }

    getBaseValue(){
        return this.BaseValue;
    }

    setBaseValue(value){
        this.BaseValue = value;
    }

}

class Weapon extends Item {

    constructor (ID,Name,value,Damage,Range,Durability){
        super(ID,Name,value);
        this.Type = "weapon"
        this.Damage = Damage;
        this.Range = Range;
        this.Durability = Durability
        this.Enchantments = [];
        
    }

    getDamage(){
        return this.Damage;
    }

    setDamage(damage){
        this.Damage = damage;
    }

    getRange(){
        return this.Range;
    }

    setRange(range){
        this.Range = range;
    }

    getDurability(){
        return this.Durability;
    }

    setDurability(durability){
        this.Durability = durability;
    }

    getEnchantments(){
        return this.Enchantments;
    }

    setEnchantments(enchantments){
        this.Enchantments = enchantments
    }

    addEnchantment(enchantment){
        this.Enchantments.push(enchantment);
    }

}

class Consumable extends Item {

    constructor (ID,Name,value,HP,AP){
        super(ID,Name,value)
        this.Type = "consumable"
        this.HP = HP;
        this.AP = AP;
        this.Effects = [];
    }

    getHP(){
        return this.HP;
    }

    setHP(hp){
        this.HP = hp;
    }

    getAP(){
        return this.AP;
    }

    setHP(ap){
        this.AP = ap;
    }

    getEffects(){
        return this.Effects;
    }

    setEffects(effects){
        this.Effects = effects
    }

    addEffect(effect){
        this.Effects.push(effect)
    }
}

class Spell extends Item {
    constructor(id,name,value,range, scope) {
        super(id,name,value);
        this.Type = "spell";
        this.range = range;
        this.scope = scope;
    }

    getRange(){
        return this.range;
    }

    getScope(){
        return this.scope;
    }
}

let itemRegistry = new ItemRegistry();

class DataInstancer {
    constructor(UID,table,fileLoc,type,race){
        this.table = table;
        this.fileLoc = fileLoc;
        this.UID = UID;
        this.type = type;
        this.race = race;
        this.name = fileLoc;
        DataBase.newTableSync(this.table)
        let exists = DataInstancer.validInstance(this.table,this.fileLoc)
        if(exists){
            this.dataInstance = DataBase.getGuaranteedItemSync(this.table,this.fileLoc).result[1];
        } else {
            this.dataInstance = this.defaultData();
            DataBase.newItemSync(this.table,this.fileLoc,this.dataInstance);
        }
        
    }

    static validInstance(table,fileLoc){
        if(fileLoc.includes(extName)) fileLoc = fileLoc.replace(extName,"")
        return DataBase.viewItemsSync(table,0).val.includes(fileLoc+extName);
    }

    defaultData(){
        return {}
    }

    saveData(data){
        if(data == undefined){
            DataBase.newItemSync(this.table,this.fileLoc,this.dataInstance);
        } else {
            this.dataInstance = data;
            DataBase.newItemSync(this.table,this.fileLoc,this.dataInstance);
        }

    }

    getData(){
        return this.dataInstance
    }

}
class enemyRegister extends Registry{

    constructor() {
        super()
    }

    push(Item){
        this.Registry[Item.name] = Item;
    }

}
class EnemyRegistry {
    
    constructor() {
        this.enemyRegistry = new enemyRegister();
        this.init();
    }

    init(){
        let iRegistry = itemRegistry.getRegistry();
        let goblin = require("./enemies/goblin.json");
        let goblinweapon = []
        this.registerEnemy(goblin.name,goblin.variants,goblin.damage,goblin.baseHP,goblin.nocturnal,goblin.diurnal,goblin.weapons)
        let wolf = require("./enemies/wolf.json");
        this.registerEnemy(wolf.name,wolf.variants,wolf.damage,wolf.baseHP,wolf.nocturnal,wolf.diurnal,wolf.weapons)
        let skeleton = require("./enemies/skeleton.json");
        let skeleweapons = [iRegistry.get(6),iRegistry.get(8),iRegistry.get(9)]
        this.registerEnemy(skeleton.name,skeleton.variants,skeleton.damage,skeleton.baseHP,skeleton.nocturnal,skeleton.diurnal,skeleweapons)
    }

    registerEnemy(name,variants,damage,baseHP,nocturnal,diurnal,weapons){
        let enemy = new Enemy(this.enemyRegistry.length,name)
        let enemyData = enemy.getData()
        if(enemyData.baseHP == 0){
            enemyData.name = name;
            enemyData.variants = variants;
            enemyData.damage = damage;
            enemyData.baseHP = baseHP;
            enemyData.nocturnal = nocturnal;
            enemyData.diurnal = diurnal;
            enemyData.weapons = weapons;
            enemy.saveData(enemyData);
        }
        this.enemyRegistry.push(enemyData)
    }

    getRegistry(){
        return this.enemyRegistry;
    }
}
class Enemy extends DataInstancer{

    constructor(UID,name){
        super(UID,"enemies","enemy_"+name+"_file");
        this.name = name;
        
    }

    defaultData(){
        return {
            "name": this.name,
            "variants": [],
            "damage":0,
            "baseHP": 0,
            "nocturnal":false,
            "diurnal":false,
            "weapons": []
        }
    }

}
class Player extends DataInstancer{

    constructor(UID){
        super(UID,"users","UserData_"+UID+"_file")
    }

    defaultData(){
       return {
            "user":this.UID,
            "data":{
                "currency":0.00,
                "jobs":[],
                "battleSystem": {},
                "isWorking":false,
                "workEfficiency":1.00,
                "Skills": {
                "jobExperience":0.000,
                "animalExperience":0.000,
                "strength":0.000,
                "agility":0.000
                },
                "timeoutData":{
                    "isTimedOut": false,
                    "getTimeoutTimer":null
                    }
                },
                "inventory": [],
                "transports": [],
                "allies": [],
                "enemies": [],
                "party": [],
                "dmPrefix": "**"
            }
    }

    saveData(data){
        if(data != undefined){
        if(data.user != this.UID) throw new Error("Not valid data save attempt."); //if this happens, something's wrong, to prevent corruption, we throw an error.
        }
        super.saveData(data);
    }

    static validateWithDefault(){
        let users = DataBase.viewItemsSync("users",0).val;
        for(let user of users){
                user = user.replace(extName,"")
                if(DataInstancer.validInstance("users",user)){
                let UID = user.replace("UserData_","").replace("_file","");
                let userInstance = new Player(UID);
                let userData = userInstance.getData();
                let DefaultState = userInstance.defaultData();
                let shouldUpdate = false;
                for(let state in DefaultState){
                    if(userData[state] == undefined){
                        userData[state] = DefaultState[state];
                        shouldUpdate = true;
                    }
                }
                if(shouldUpdate){
                    console.log("new Update")
                    userInstance.saveData(userData);
                }
            } else {
                console.log("invalid user",user)
            }

        }
    }

}
class Server extends DataInstancer{

    constructor(UID){
        super(UID,"servers","ServerData_"+UID+"_file")
    }


    defaultData(){
        return {
            "prefix": "**"
        }
    }

    saveData(data){
        if(data.prefix == undefined) throw new Error("Not valid data save attempt."); //if this happens, something's wrong, to prevent corruption, we throw an error.
        super.saveData(data);
    }


}
class NPC extends DataInstancer{

    constructor(id,type,race,name){
        super(id,"NPCS",name,type,race);
    }

    defaultData(){
        return {
            "name": this.name,
            "type": this.type,
            "race": this.race,
            "ID": this.UID
        }
    }

    addDataToNPC(key,value){
        this.dataInstance[key] = value
    }

    setShopParameters(){
        this.type = "shopkeeper"
        this.dataInstance["wares"] = []
        this.dataInstance["made"] = 0;
        this.dataInstance["has"] = 2000;
    }

    stockShopParameter(){
       let NPC = this.dataInstance;
       let coreWares = []
       for(let i = 0; i < Math.floor(Math.random() * itemRegistry.getRegistry().length) + 4; i++){
           let getItem = itemRegistry.getRegistry().get(Math.floor(Math.random() * (itemRegistry.getRegistry().length - 1)) + 0)
           if(!coreWares.includes(getItem)){
           coreWares.push(getItem)
           let bool = Math.round(Math.random() * 1) == 1;
           let nbv = getItem.BaseValue + (bool ? Number.parseInt(getItem.BaseValue / 24) : -Number.parseInt(getItem.BaseValue / 24));
           getItem.BaseValue = nbv
           getItem.Quantity = Math.floor(Math.random() * 5) + 1
           NPC.has = Math.floor(Math.random() * 3500) + 1500
           NPC.wares.push(getItem);
           }
       }
    }

    saveData(data){
        if(data == undefined){
            super.saveData(data);
        } else {
            if(data.race == undefined) throw new Error("Not valid data save attempt."); //if this happens, something's wrong, to prevent corruption, we throw an error.
            super.saveData(data);
        }

    }

}

let enemyRegistry = new EnemyRegistry();
restockShopsOn2HourPass();
let TOD;
let HOD;
function tick(manual) {
    let time = new Date();
    if ((time.getMinutes() == "00" && time.getHours() % 2 == 0) || manual == "stockManually") {
        
        let NPCS = new Registry();
        let NPCNames = DataBase.viewItemsSync("NPCS",0).val;
        for(let npc of NPCNames){
            npc = npc.replace(extName,"");
            NPCS.push(DataBase.getGuaranteedItemSync("NPCS",npc).result[1])
        }


     for(let NPC in NPCS.getRegistry()){
         NPC = NPCS.get(NPC)
         let coreWares = []
         NPC.wares = [];
        for(let i = 0; i < Math.floor(Math.random() * itemRegistry.getRegistry().length) + 4; i++){
            let getItem = itemRegistry.getRegistry().get(Math.floor(Math.random() * (itemRegistry.getRegistry().length - 1)) + 0)
            if(!coreWares.includes(getItem)){
            coreWares.push(getItem)
            let bool = Math.round(Math.random() * 1) == 1;
            let nbv = getItem.BaseValue + (bool ? Number.parseInt(getItem.BaseValue / 24) : -Number.parseInt(getItem.BaseValue / 24));
           // console.log(getItem.Name,bool,nbv)
            getItem.BaseValue = nbv
            getItem.Quantity = Math.floor(Math.random() * 5) + 1
            NPC.has = Math.floor(Math.random() * 3500) + 1500
            NPC.wares.push(getItem);
            }
        }
        
        DataBase.newItemSync("NPCS",NPC.name,NPC);
    
     }
     console.log("socked!",time.getHours())
    }

    if(time.getMinutes() == "00"){
        TOD = time.getHours() % 2 == 0 ? "day" : "night"
    }

    if(time.getMinutes() == "00") HOD = 0; else HOD = (12 / 60) * time.getMinutes();

}
function restockShopsOn2HourPass(){
      setInterval(tick, 60000);
}
Player.validateWithDefault();
client.on("message",async (message)=>{
if(message.author.bot) return;

let date = new Date();
let notDMS = (message.channel.type === "dm");


    


let player;
let prefix;
let serverData;
if(notDMS){
    serverData = new Server(message.guild.id);
    prefix = serverData.getData().prefix
} else {
    player = new Player(message.author.id);
    prefix = player.getData().dmPrefix;
}
if(!message.content.startsWith(prefix)) return;

if(notDMS){
   player = new Player(message.author.id);
}

let NPCS = new Registry();
let NPCNames = DataBase.viewItemsSync("NPCS",0).val;
for(let npc of NPCNames){
    npc = npc.replace(extName,"");
    NPCS.push(DataBase.getGuaranteedItemSync("NPCS",npc).result[1]);
}

if(player.getData() == null){
    let trico = client.users.cache.get("105357779807535104");
    trico.send("user "+message.author.id+" has fully corrupt files and will be defaulted.\n\n" +JSON.stringify(usableData.err));
    message.author.dmChannel.send("your account has been corrupted, my creator has been notified and will contact you shortly.");
    return;
}

let usableData = player.getData();

 if(usableData.data.timeoutData.getTimeoutTimer != null && usableData.data.timeoutData.isTimedOut){
        let getDBDate2 = new Date();
        getDBDate2.setTime(usableData.data.timeoutData.getTimeoutTimer);

    if((((getDBDate2.getTime() - new Date().getTime()) / (1000 * 60 * 60)).toFixed(1) ) <= 0){
        usableData.data.timeoutData.isTimedOut = false;
        usableData.data.timeoutData.getTimeoutTimer = null;
        //DataBase.newItemSync("users",fileLoc,usableData)
        player.saveData(usableData)
        //DataBase.update({user:message.author.id},usableData)
    }
}

let contentArray = message.content.split(" ");

if(contentArray[0].toLowerCase() == prefix+"prefix")
if(notDMS){
if(contentArray.length == 2 && message.member.hasPermission("ADMINISTRATOR")){
    let sData = serverData.getData();
    sData.prefix = contentArray[1];
    serverData.saveData(sData);
    message.channel.send("New prefix "+contentArray[1])    
} else {
    message.channel.send("Current prefix "+prefix)
}
} else {
    if(contentArray.length == 2){
        if(contentArray[1] == "emptyprefix"){
            usableData.dmPrefix = "";
        } else {
            usableData.dmPrefix = contentArray[1];
        }
        player.saveData(usableData);
        message.channel.send("New DM prefix "+contentArray[1])    
    } else {
        message.channel.send("DM Prefix: "+prefix)
    }

}

if(contentArray[0].toLowerCase() == prefix+"battle"){

}

if(contentArray[0].toLowerCase() == prefix+"testdata"){
   message.channel.send({code:"json",content:JSON.stringify(itemRegistry.getRegistry().getRegistry(),null,"\t")});
}

if(contentArray[0].toLowerCase() == prefix+"search"){
    if(contentArray[1] != undefined){
        if(DataBase.itemExistSync("properties",contentArray[1],0)){
          let getTown = DataBase.getItemSync("properties",contentArray[1]).val[0][1];
            let grassAmount = getTown.grassInfo.length;
            let chanceMax = 3;
            let chanceMin = 0;
            let rand = (Math.floor(Math.random() * (chanceMax - (grassAmount/200))) + chanceMin);
           // console.log(rand)
            if(rand == 2){
                let getAmt = (Math.floor(Math.random() * 75) + 10);
                usableData.data.currency += getAmt;
                //DataBase.newItemSync("users",fileLoc,usableData);
                player.saveData(usableData)
                message.channel.send("you found: "+getAmt+" gold")
            } else {
                message.channel.send("nothing found")
            }
        }
    }
}

if(contentArray[0].toLowerCase() == prefix+"help"){
    let modifiedPrefix = prefix.replace("**","\\*\\*");
    let all = `
    ${modifiedPrefix}preifx (OPTIONAL: prefix) {shows or sets prefix};
    ${modifiedPrefix}help {shows you this help section}
    ${modifiedPrefix}balance {shows you your current balance}
    ${modifiedPrefix}town[or towns] (OPTIONAL: "townname") {shows list of towns or map of town (if second argument is given.)}
    ${modifiedPrefix}buyproperty (OPTIONA: "townname" || OPTIONAL: buy || "house ID") {this command has multiple optional arguments, no arguments is a list of all towns and how many houses are available and who owns the occupied houses, 1 argument gives you a modified map of that town that shows you what houses are available, occupied or owned by you. 2 and 3 arguments is buying a house, with argument 2 being buy and 3 the ID of the house you wanna buy (see previous arguments).}
    ${modifiedPrefix}daily {receive daily 100 gold}
    ${modifiedPrefix}lessons (OPTIONAL: "type") {no arguments given shows you a list of the lessons you can take. if argument is given it will raise your skill in that skill if you have sufficient funds.}
    ${modifiedPrefix}me {shows you your status}
    ${modifiedPrefix}payday {if you have finished your job (see jobs) payout along with skill and job experience will be given}
    ${modifiedPrefix}jobs (OPTIONAL: "job") {if no argument is provided it will show you the list of available jobs as well as their given requirements (if they have them), when argument provided it will attempt to give you set job if you meet the requirements.}
    `
    all = all.replace(/\|\|/gms,"\\|\\|");
    for(let i = 0; i < all.length; i+=2000){
        message.channel.send(all.substring(i,i+2000),{split:true})
    }
    
}

if(contentArray[0].toLowerCase() == prefix+"balance"){
        message.channel.send("you have "+usableData.data.currency+" gold")
}

if(contentArray[0].toLowerCase() == prefix+"regeneratealltownmap" && message.author.id == "105357779807535104"){
    let towns = DataBase.viewItemsSync("properties",0).val;
    let readyTowns = towns.map(val=>val.replace(extName,""));
    message.channel.send("WARNING, you are regenerating all town maps, do not overuse this command!")
    for(let town of readyTowns){
        let getTown = DataBase.getGuaranteedItemSync("properties",town).result[1];
        regenerateTown(getTown,(twnIMG)=>{
            let attch = new Discord.MessageAttachment(twnIMG, getTown.townName+".png");
            message.channel.send("Town "+getTown.townName+" map regenerated!",attch)
        });
    }
}

if(contentArray[0].toLowerCase() == prefix+"regeneratetownmap" && message.author.id == "105357779807535104"){
    let towns = DataBase.viewItemsSync("properties",0).val;
    let lowercaseTowns = towns.map(val=>val.toLowerCase().replace(extName.toLowerCase(),""));
    if(contentArray[1] != undefined && lowercaseTowns.indexOf(contentArray[1].toLowerCase()) != -1){
        let getIndexOfLowercase = lowercaseTowns.indexOf(contentArray[1].toLowerCase())
        let getTown = DataBase.getGuaranteedItemSync("properties",towns[getIndexOfLowercase].replace(extName,"")).result[1];
        regenerateTown(getTown,(twnIMG)=>{
            let attch = new Discord.MessageAttachment(twnIMG, getTown.townName+".png");
            message.channel.send("Town "+getTown.townName+" map regenerated!",attch)
        });
    } else {
        message.channel.send("invalid town name")
    }
}

if(contentArray[0].toLowerCase() == prefix+"restock" && message.author.id == "105357779807535104"){
    tick("stockManually");
    message.channel.send("Shops Resocked")

}

if(contentArray[0].toLowerCase() == prefix+"createtown" && message.author.id == "105357779807535104"){
    generateTown((name,img)=>{
        let attat = new Discord.MessageAttachment(img);
        message.channel.send("town generated!\nname: "+name,attat)
    });
}

if(contentArray[0].toLowerCase() == prefix+"towns" || contentArray[0].toLowerCase() == prefix+"town"){
    let towns = DataBase.viewItemsSync("properties",0).val;
    if(contentArray.length == 1){
        towns = towns.map(val=>val.replace(extName,""));
        message.channel.send(towns.join("\n"),{split:true})
        return;
    }
    let lowercaseTowns = towns.map(val=>val.toLowerCase().replace(extName.toLowerCase(),""));
    if(lowercaseTowns.indexOf(contentArray[1].toLowerCase()) != -1){
        let getIndexOfLowercase = lowercaseTowns.indexOf(contentArray[1].toLowerCase())
        let getTown = DataBase.getGuaranteedItemSync("properties",towns[getIndexOfLowercase].replace(extName,"")).result[1];
        if(contentArray.length == 2){
        message.channel.send(getTown.townName,{files:[getTown.townImage]});
        return;
        }
        if(contentArray[2].toLowerCase() == "shop"){
        let shop = getTown.houseInfo.find(e=>typeof(e.owner) == typeof(0) && NPCS.get(e.owner) != undefined);
        if(shop == undefined){
            message.channel.send("this town doesn't have a shop")
            return;
        }
        shop = NPCS.get(shop.owner);
        if(contentArray[3] != undefined){
            let item = shop.wares.find(e=>e.Name.toLowerCase().replace(/ /gsm,"_") == contentArray[3].toLowerCase()); //.slice(3,contentArray.length).join(" ").toLowerCase()
            let indexItem = shop.wares.indexOf(item);
            if(item != undefined){
            let qntt = (contentArray[4] != undefined && Number.isInteger(Number.parseInt(contentArray[4]))) ? Number.parseInt(contentArray[4]) : 1;
            //console.log(qntt)
            if(usableData.data.currency >= (item.BaseValue * qntt)){
                if(shop.wares[indexItem].Quantity < qntt) return message.channel.send("this shop owner does not have enough of this item")
                usableData.data.currency -= (item.BaseValue * qntt);
                if(item.Quantity == undefined) shop.wares[indexItem].Quantity = 1;
                shop.wares[indexItem].Quantity -= qntt;
                if(shop.wares[indexItem].Quantity <= 0){
                    shop.wares.remove(item);
                }
                let boughtItem = new itemInstance(item)//itemRegistry.getRegistry().get(item.ID);
                boughtItem.setQuantity(qntt);
                let getPlayerItem = usableData.inventory.find(e=>e.ID == boughtItem.getInstance().ID);
                if(getPlayerItem != undefined){
                let index = usableData.inventory.indexOf(getPlayerItem);
                usableData.inventory[index].Quantity+=qntt;
                } else {
                    usableData.inventory.push(boughtItem.getInstance())
                }
                shop.has += (item.BaseValue * qntt);
                shop.made += (item.BaseValue * qntt);
                DataBase.newItemSync("NPCS",shop.name,shop);
                player.saveData(usableData)
                message.channel.send("you bought "+qntt+" "+item.Name+" for "+(item.BaseValue * qntt) + " Gold")
            } else {
                message.channel.send("insufficient funds")
            }
            } else {
                message.channel.send("this shop owner does not have this item.")
            }
            return;
        }
        let ATTCH = new Discord.MessageAttachment("./images/houseShop.png","HS.png")
        let msgEmbed = new Discord.MessageEmbed()
        .setAuthor(shop.name)
        .attachFiles(ATTCH)
        .setThumbnail("attachment://HS.png")
        .setDescription(`${shop.name} is the owner of a shop in ${getTown.townName}`)
        
        for(let ware of shop.wares){
            let type = ware.Type == "item" ? "collectable" : ware.Type;
            let enchantments = ware.Enchantments != undefined && ware.Enchantments.length != 0;
            msgEmbed.addField(ware.Name,ware.BaseValue.toString() + " Gold" + "\ntype: " + type + (enchantments ? ("\nEnchantments: {\n" + ware.Enchantments + "\n}") : "") + "\nQuantity: "+ware.Quantity)
        }

        message.channel.send(msgEmbed)
        }
    }


}

if(contentArray[0].toLowerCase() == prefix+"buyproperty"){
    let towns = DataBase.viewItemsSync("properties",0).val;
    if(contentArray.length == 1){
        if(towns == null){
            message.channel.send("issue finding the towns list.")
        return
        } else {
            towns=towns.map((val)=>{
                val = val.substring(0,val.length - extName.length);
                let townInfo = DataBase.getGuaranteedItemSync("properties",val);
                let houseInfo =townInfo.result[1].houseInfo;
               let homesLeft = houseInfo.filter(value=>value.owner == null);
               let occupied = houseInfo.filter(value=>value.owner != null);
                return "town: "+val+"\ninhabitants: "+(houseInfo.length - homesLeft.length) + "\nhomes left " + homesLeft.length + (occupied.length > 0 ? ""+
                (occupied.map((valu)=>{
                    return "\nproperty ID: "+valu.id
                    +"\nowned by: "+ (typeof(valu.owner) == typeof(0) 
                    ? (NPCS.get(valu.owner)["name"] + "\ntype: " + NPCS.get(valu.owner)["type"]) : (client.users.cache.get(valu.owner).username))}).join('')) : ""); 
            })
            message.channel.send(towns.join("\n\n"),{split:true})
        return;
        }
    }
    if(contentArray.length == 2){
        let lowercaseTowns = towns.map(val=>val.toLowerCase().replace(extName.toLowerCase(),""));
        if(lowercaseTowns.indexOf(contentArray[1].toLowerCase()) != -1){
            let getIndexOfLowercase = lowercaseTowns.indexOf(contentArray[1].toLowerCase())
            let getTown = DataBase.getGuaranteedItemSync("properties",towns[getIndexOfLowercase].replace(extName,"")).result[1];
            let canvas = createCanvas(540,540);
            let ctx = canvas.getContext("2d");
            ctx.font = "10px Morris Roman";
            loadImage(fs.readFileSync(getTown.townImage)).then(townImg=>{
            ctx.drawImage(townImg,0,0);
            for(let info of getTown.houseInfo){
                if(info.owner == null){
                    ctx.drawImage(HAI,info.x,info.y,30,30);
                    ctx.fillText("available",(info.x + 10) - "available".length,info.y + -5)
                    ctx.fillText("ID: "+(info.id).toString(),(info.x + 10) - ("ID: "+(info.id).toString()).length,info.y + 45);
                } else
                if(info.owner == message.author.id){
                    ctx.drawImage(HYI,info.x,info.y,30,30);
                    ctx.fillText(message.author.username,(info.x) - message.author.username.length,info.y + -5)
                    ctx.fillText("ID: "+(info.id).toString(),(info.x + 10) - ("ID: "+(info.id).toString()).length,info.y + 45);
                } else {
                    let clientUsername;
                    if(typeof(info.owner) == typeof("")){
                        clientUsername = client.users.cache.get(info.owner).username;
                        ctx.drawImage(HOI,info.x,info.y,30,30)
                    } else {
                        //console.log(info.owner)
                        let ThisNPC = NPCS.get(info.owner);
                        clientUsername = ThisNPC.name;
                        if(ThisNPC.type == "shopkeeper"){
                            ctx.drawImage(SHI,info.x,info.y,30,30)
                        } else {
                            ctx.drawImage(HOI,info.x,info.y,30,30)
                        }
                    }
                    
                    ctx.fillText(clientUsername,(info.x)- clientUsername.length,info.y + -5)
                    ctx.fillText("ID: "+(info.id).toString(),(info.x + 10) - ("ID: "+(info.id).toString()).length,info.y + 45);
                };
            }

            let attachm = new Discord.MessageAttachment(canvas.toBuffer());
            let attachm2 = new Discord.MessageAttachment(HRC);
            message.channel.send(attachm2);
            message.channel.send(attachm);

        })
        return;
        }
    }
    if(contentArray.length > 2){
        let lowercaseTowns = towns.map(val=>val.toLowerCase().replace(extName.toLowerCase(),""));
        if(lowercaseTowns.indexOf(contentArray[1].toLowerCase()) != -1){
            let getIndexOfLowercase = lowercaseTowns.indexOf(contentArray[1].toLowerCase())
            let getTown = DataBase.getGuaranteedItemSync("properties",towns[getIndexOfLowercase].replace(extName,"")).result[1];
            let getHouse = getTown.houseInfo.find(e=>(e.id).toString() == contentArray[3]);
            //let a = [].indexOf
            
            if(contentArray[2] == "buy"){
                if(getHouse.owner == null){
                    if(usableData.data.currency >= 1500){
                      let number = getTown.houseInfo.indexOf(getHouse)
                      getTown.houseInfo[number].owner = message.author.id;
                      usableData.data.currency -= 1500;
                      //towns[getIndexOfLowercase].replace(extName,"")
                      //DataBase.newItemSync("users",fileLoc,usableData);
                      player.saveData(usableData)
                      DataBase.newItemSync("properties",towns[getIndexOfLowercase].replace(extName,""),getTown);
                      message.channel.send("You now own a house in "+getTown.townName)
                    } else {
                        message.channel.send("you have insufficient funds to buy a house.")
                    }
                } else {
                    if(getHouse.owner == message.author.id){
                        message.channel.send("this house is already owned. by you.")
                    } else {
                        message.channel.send("this house is already owned.");
                    }
                }
            }
        } else {
            console.log("???")
        }
    }

}

if(contentArray[0].toLowerCase() == prefix+"daily"){
if(!usableData.data.timeoutData.isTimedOut){
    usableData.data.currency += 100;
    usableData.data.timeoutData.getTimeoutTimer = date.setTime(date.getTime() + 86400000);
    usableData.data.timeoutData.isTimedOut = true;
    //DataBase.update({user:message.author.id},usableData)
    //DataBase.newItemSync("users",fileLoc,usableData);
    player.saveData(usableData);
    message.channel.send("you have received your daily 100 gold!");
   
} else {
    
    let getDBDate = new Date();
    getDBDate.setTime(usableData.data.timeoutData.getTimeoutTimer);
    //86 400 000
    //3600000
    // console.log(new Date().getTime())
    // console.log(getDBDate.getTime())
    message.channel.send("you have " + ( ((getDBDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)).toFixed(2) ) + " hours left")
}}

if(contentArray[0].toLowerCase() == prefix+"lessons"){
    
    if(contentArray.length == 1){
        message.channel.send(`lesson list:
        Agility lessons(profcardio): 100 gold (increases by 100 for each level gained).
        Animal Knowledge lessons (wildlifeclub): 250 gold (increases by 120 for each level gained).
        Gym (Strength) lessons (gym): 120 gold (increases by 100 for every 2 levels gained).
        `)
        return;
    }

    if(contentArray[1].toLowerCase() == "gym"){
        let multiplyBy = usableData.data.Skills.strength < 1 ? 1 : usableData.data.Skills.strength;

        if(usableData.data.currency >= 100 * multiplyBy){//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)){
            usableData.data.Skills.strength += 1;
            usableData.data.currency -= 100 * multiplyBy;//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)
            usableData.data.currency = Number.parseFloat(usableData.data.currency.toFixed(2))
            message.channel.send(`
            new balance: ${usableData.data.currency}
            your strength is now: ${usableData.data.Skills.strength}
            `)
           // DataBase.newItemSync("users",fileLoc,usableData);
           player.saveData(usableData)
            //DataBase.update({user:message.author.id},usableData)
            return;
        } else {
            message.channel.send("you do not have enough gold, you need "+(100 * multiplyBy)+" gold for your next lesson")
            return
        }
    }

    if(contentArray[1].toLowerCase() == "profcardio"){
        let multiplyBy = usableData.data.Skills.agility < 1 ? 1 : usableData.data.Skills.agility;

        if(usableData.data.currency >= 100 * multiplyBy){//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)){
            usableData.data.Skills.agility += 1;
            usableData.data.currency -= 100 * multiplyBy;//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)
            usableData.data.currency = Number.parseFloat(usableData.data.currency.toFixed(2))
            message.channel.send(`
            new balance: ${usableData.data.currency}
            your strength is now: ${usableData.data.Skills.agility}
            `)
            //DataBase.newItemSync("users",fileLoc,usableData);
            player.saveData(usableData)
            //DataBase.update({user:message.author.id},usableData)
            return;
        } else {
            message.channel.send("you do not have enough gold, you need "+(100 * multiplyBy)+" gold for your next lesson")
            return
        }
    }

    if(contentArray[1].toLowerCase() == "wildlifeclub"){
            let multiplyBy = usableData.data.Skills.animalExperience < 1 ? 1 : usableData.data.Skills.animalExperience;

            if(usableData.data.currency >= 100 * multiplyBy){//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)){
                usableData.data.Skills.animalExperience += 1;
                usableData.data.currency -= 100 * multiplyBy;//* usableData.data.Skills.strength == 0 ? 1 : ((usableData.data.Skills.strength) + 1)
                usableData.data.currency = Number.parseFloat(usableData.data.currency.toFixed(2))
                message.channel.send(`
                new balance: ${usableData.data.currency}
                your animal Experience is now: ${usableData.data.Skills.animalExperience}
                `)
                //DataBase.newItemSync("users",fileLoc,usableData);
                player.saveData(usableData)
            //  DataBase.update({user:message.author.id},usableData)
                return;
            } else {
                message.channel.send("you do not have enough gold, you need "+(100 * multiplyBy)+" gold for your next lesson")
                return
            }
    }

    

}

if(contentArray[0].toLowerCase() == prefix+"me"){
let user = usableData.data;
let postables = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setDescription("You:")
.addField("balance:",(user.currency).toString() + " gold")
if(user.jobs.length > 0){
    for(let jobs of user.jobs)
    postables.addField("Current Job:",jobs.jobtype); 
} else {
    postables.addField("Current Job:","none");
}
postables.addField("Job Experience:","level: "+parseInt(user.Skills.jobExperience).toString()+"\n"+(getlevelPercentage(1,user.Skills.jobExperience - parseInt(user.Skills.jobExperience)).toFixed(0)+"/1000"))
.addField("Animal Experience:","level: "+parseInt(user.Skills.animalExperience).toString()+"\n"+(getlevelPercentage(1,user.Skills.animalExperience - parseInt(user.Skills.animalExperience)).toFixed(0)+"/1000"))
.addField("Physical Strength:","level: "+parseInt(user.Skills.strength).toString()+"\n"+(getlevelPercentage(1,user.Skills.strength - parseInt(user.Skills.strength)).toFixed(0)+"/1000"))
.addField("Agility:","level: "+parseInt(user.Skills.agility).toString()+"\n"+(getlevelPercentage(1,user.Skills.agility - parseInt(user.Skills.agility)).toFixed(0)+"/1000"));
for(let obj in user.jobSkills){
    postables.addField(obj,"level: "+parseInt(user.jobSkills[obj]).toString()+"\n"+(getlevelPercentage(1,user.jobSkills[obj] - parseInt(user.jobSkills[obj])).toFixed(0)+"/1000"));
}
message.channel.send(postables);
}

if(contentArray[0].toLowerCase() == prefix+"payday"){
    if(usableData.data.isWorking){
       let getjob = usableData.data.jobs[0];
       let exp = Number.parseFloat((Math.random() * ((0.20 + getjob.complexity) - (0.05 + getjob.complexity)) + 0.15).toFixed(2));
       if(getjob.whenWorkDone < new Date().getTime()){
        usableData.data.isWorking = false;
        usableData.data.currency += getjob.getworkAmount;
        usableData.data.jobSkills[getjob.jobtype] += getjob.workEfficiency;
        usableData.data.Skills.jobExperience += exp;
        usableData.data.jobs.shift();
       let embed = new Discord.MessageEmbed()
       .setAuthor(message.author.username,message.author.avatarURL)
       .setDescription(`PAYDAY!`)
       .addField("earned:",(getjob.getworkAmount).toString() + " gold")
       .addField("work experience added:",getjob.workEfficiency)
       .addField("job experience added:",exp);
       //DataBase.newItemSync("users",fileLoc,usableData);
       player.saveData(usableData)
       message.channel.send(embed)
       } else {
        let thisTime = new Date()
        let workTime = new Date()
        workTime.setTime(getjob.whenWorkDone);
        let timeLeft = new Date(workTime.getTime() - thisTime.getTime());
          message.channel.send("you still have: " + timeLeft.getMinutes().toString() + " left") 
       }
    } else {
        message.channel.send("you are not working")
    }
}

if(contentArray[0].toLowerCase() == prefix+"jobs"){
    if(contentArray.length == 1){
        message.channel.send(`job list:
        Coal Miner (No requirements) {pays 20 gold per work day}
        Wood Cutter (Requires job Experience 1) {pays 50 per work day}
        House Maid (Requires job Experience 2) {pays 100 per work day}
        Hunter (Requires job Experience 4, animal knowledge skill of 2, agility skill of 1) {pays 300 per work day}
        `)
        //Gryphon Farmer (Requires job skill of 5, animal knowledge skill of 6 ,20000 gold startup) {pays 700 gold per work day}
        return
    }

    if(contentArray[1] == "coalmine"){
        if(!usableData.data.isWorking){
            let thisDate = new Date();
            let complexity = 0.00;
            let earnable = 20;
            let minutes = 6;
            usableData.data.jobSkills[contentArray[1].toLowerCase()] == undefined ? usableData.data.jobSkills[contentArray[1].toLowerCase()] = 1 : null;
            usableData.data.isWorking = true;
            usableData.data.jobs.push({"jobtype":contentArray[1].toLowerCase(),complexity,"getworkAmount":Number.parseFloat(toFixed(earnable*usableData.data.jobSkills[contentArray[1].toLowerCase()],2)),"workEfficiency": Number.parseFloat((Math.random() * ((0.50 + complexity) - (0.15 + complexity)) + 0.15).toFixed(2)),"whenWorkDone":thisDate.getTime() + (((minutes * 60)*1000))})
           // DataBase.newItemSync("users",fileLoc,usableData);
            player.saveData(usableData)
            message.channel.send("you are now working in the coal mines. worktime: "+minutes+" minutes.")
        } else {
            message.channel.send("you are already working.")
        }
    }

    if(contentArray[1] == "woodcutting"){
        if(!usableData.data.isWorking && usableData.data.Skills.jobExperience >= 1){
            let thisDate = new Date();
            let complexity = 0.12;
            let earnable = 50;
            let minutes = 8;
            usableData.data.jobSkills[contentArray[1].toLowerCase()] == undefined ? usableData.data.jobSkills[contentArray[1].toLowerCase()] = 1 : null;
            usableData.data.isWorking = true;
            usableData.data.jobs.push({"jobtype":contentArray[1].toLowerCase(),complexity,"getworkAmount":Number.parseFloat(toFixed(earnable*usableData.data.jobSkills[contentArray[1].toLowerCase()],2)),"workEfficiency": Number.parseFloat((Math.random() * ((0.50 + complexity) - (0.15 + complexity)) + 0.15).toFixed(2)),"whenWorkDone":thisDate.getTime() + (((minutes * 60)*1000))})
            //DataBase.newItemSync("users",fileLoc,usableData);
            player.saveData(usableData)
            message.channel.send("you are now working in the forest, chopping down trees. worktime: "+minutes+" minutes.")
        } else if(usableData.data.Skills.jobExperience >= 1){
            message.channel.send("you are already working.")
        } else {
            message.channel.send("you lack the required skill(s)")
        }
    }
        if(contentArray[1] == "housemaid"){
            if(!usableData.data.isWorking && usableData.data.Skills.jobExperience >= 2){
                let thisDate = new Date();
                let complexity = 0.26;
                let earnable = 100;
                let minutes = 12;
                usableData.data.jobSkills[contentArray[1].toLowerCase()] == undefined ? usableData.data.jobSkills[contentArray[1].toLowerCase()] = 1 : null;
                usableData.data.isWorking = true;
                usableData.data.jobs.push({"jobtype":contentArray[1].toLowerCase(),complexity,"getworkAmount":Number.parseFloat(toFixed(earnable*usableData.data.jobSkills[contentArray[1].toLowerCase()],2)),"workEfficiency": Number.parseFloat((Math.random() * ((0.50 + complexity) - (0.15 + complexity)) + 0.15).toFixed(2)),"whenWorkDone":thisDate.getTime() + (((minutes * 60)*1000))})
                //DataBase.newItemSync("users",fileLoc,usableData);
                player.saveData(usableData)
                message.channel.send("you are now working as a housemaid, going from house to house. worktime: "+minutes+" minutes.")
            } else if(usableData.data.Skills.jobExperience >= 2){
                message.channel.send("you are already working.")
            } else {
                message.channel.send("you lack the required skill(s)")
            }
    }
    if(contentArray[1] == "hunter"){
        if(!usableData.data.isWorking && usableData.data.Skills.jobExperience >= 4 && usableData.data.Skills.animalExperience >= 2 && usableData.data.Skills.agility >= 1){
            let thisDate = new Date();
            let complexity = 0.40;
            let earnable = 300;
            let minutes = 16;
            usableData.data.jobSkills[contentArray[1].toLowerCase()] == undefined ? usableData.data.jobSkills[contentArray[1].toLowerCase()] = 1 : null;
            usableData.data.isWorking = true;
            usableData.data.jobs.push({"jobtype":contentArray[1].toLowerCase(),complexity,"getworkAmount":Number.parseFloat(toFixed(earnable*usableData.data.jobSkills[contentArray[1].toLowerCase()],2)),"workEfficiency": Number.parseFloat((Math.random() * ((0.50 + complexity) - (0.15 + complexity)) + 0.15).toFixed(2)),"whenWorkDone":thisDate.getTime() + (((minutes * 60)*1000))})
           // DataBase.newItemSync("users",fileLoc,usableData);
            player.saveData(usableData)
            message.channel.send("you are now working in the forest, hunting deer and elk for their hide and flesh. worktime: "+minutes+" minutes.")
        } else if(usableData.data.Skills.jobExperience >= 4 && usableData.data.Skills.animalExperience >= 2 && usableData.data.Skills.agility >= 1){
            message.channel.send("you are already working.")
        } else {
            message.channel.send("you lack the required skill(s)")
        }
    }
    
}

});

function toFixed( num, precision ) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

function getlevelPercentage(totalValue,partialValue){
    return (1000 * partialValue) / totalValue;

}

Array.prototype.remove = function (value) {
    var index = this.indexOf(value);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
  }

client.login(key.discordKey);

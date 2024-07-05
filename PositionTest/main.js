import {AnimationImage} from '../MagiMira2024/src/js/animations/AnimationImage.js';

const bg_pass = "../MagiMira2024/img/bg_img/";
const bg_tmp = "仮背景.jpg";
const text_A = "../MagiMira2024/img/text_img/A/";
const text_B = "../MagiMira2024/img/text_img/B/";
const text_C = "../MagiMira2024/img/text_img/C/";
const text_L = "../MagiMira2024/img/text_img/LAST/";
const text_S = "../MagiMira2024/img/text_img/サビ/";

var scene_info_index = 1;
const scene_info = [
    {scene_num:0,scene_time:-1000,bg_image_pass:"bg_1_1.png"},
    {scene_num:1_01,scene_time:0,bg_image_pass:"bg_1_1.png"},//轟く123~
    {scene_num:1_02,scene_time:6450,bg_image_pass:"bg_1_2.png"},//はらりと~
    {scene_num:1_03,scene_time:10925,bg_image_pass:"ohoh一面.png"},//ohoh
    {scene_num:2_01,scene_time:11575,bg_image_pass:"bg_2_導入_アニメ.gif"},//いちにさんし~
    {scene_num:2_02,scene_time:11575+1800,bg_image_pass:"bg_2_導入_静止画.png"},
    {scene_num:2_03,scene_time:16675,bg_image_pass:"bg_2_終わり_アニメ.gif"},//心の~
    {scene_num:2_04,scene_time:16675+1300,bg_image_pass:"bg_2_終わり_静止画.png"},
    {scene_num:2_05,scene_time:18900,bg_image_pass:"期待したい一面.png"},//期待したい~
    {scene_num:3_01,scene_time:21150,bg_image_pass:"bg_3_10_導入_ディザリング.gif"},//想定外~
    {scene_num:3_02,scene_time:21150+3000,bg_image_pass:"bg_3_10_静止画_導入.png"},
    {scene_num:3_03,scene_time:26575,bg_image_pass:"bg_3_10_終了_ディザリング.gif"},//伝えたい~
    {scene_num:3_04,scene_time:26575+2000,bg_image_pass:"bg_3_10_静止画_終了.png"},
    {scene_num:4,scene_time:31350,bg_image_pass:"初の音.jpg"},//初の音~
    {scene_num:5_01,scene_time:34550,bg_image_pass:"bg_5_1世界_gif.gif"},//世界~
    {scene_num:5_02,scene_time:34550+1400,bg_image_pass:"bg_5_1世界_静止画.png"},
    {scene_num:5_03,scene_time:35975,bg_image_pass:"bg_5_2彩る.png"},//彩る~
    {scene_num:5_04,scene_time:37100,bg_image_pass:"bg_5_3視界_gif.gif"},//視界~
    {scene_num:5_05,scene_time:37100+1500,bg_image_pass:"bg_5_3視界_静止画.png"},
    {scene_num:6,scene_time:39325,bg_image_pass:"ミライセカイ一面.png"},//世界世界世界
    {scene_num:7_01,scene_time:41100,bg_image_pass:"bg_7_1間違い.png"},//間違いなんか~
    {scene_num:7_02,scene_time:42200,bg_image_pass:"bg_7_2ない_gif.gif"},//ない~
    {scene_num:7_03,scene_time:42200+900,bg_image_pass:"bg_7_2ない_静止画.png"},
    {scene_num:7_04,scene_time:43675,bg_image_pass:"bg_7_3全ては君.png"},//全ては~
    {scene_num:7_05,scene_time:44750,bg_image_pass:"bg_7_4君次第_gif.gif"},//次第~
    {scene_num:7_06,scene_time:44750+1300,bg_image_pass:"bg_7_4君次第_静止画.png"},
    {scene_num:7_07,scene_time:46200,bg_image_pass:"bg_7_5今日は過去.png"},//今日は過去の~
    {scene_num:7_08,scene_time:47300,bg_image_pass:"bg_7_6未来_gif.gif"},//未来~
    {scene_num:7_09,scene_time:47300+1400,bg_image_pass:"bg_7_6未来_静止画.png"},
    {scene_num:8,scene_time:49550,bg_image_pass:"ミライセカイ一面.png"},//未来未来未来
    {scene_num:9_01,scene_time:52425,bg_image_pass:"間奏背景.png"},//間奏 上下移動
    {scene_num:10_01,scene_time:61975,bg_image_pass:"bg_3_10_導入_ディザリング.gif"},//音と音（少し後にずらすなら626）
    {scene_num:10_02,scene_time:61975+3000,bg_image_pass:"bg_3_10_静止画_導入.png"},
    {scene_num:10_03,scene_time:67250,bg_image_pass:"bg_3_10_終了_ディザリング.gif"},//記すノート~
    {scene_num:10_04,scene_time:67250+2000,bg_image_pass:"bg_3_10_静止画_終了.png"},
    {scene_num:11_01,scene_time:72850,bg_image_pass:"bg_11_1.gif"},//ABCから~
    {scene_num:11_02,scene_time:72850+2800,bg_image_pass:"bg_11_1.png"},
    {scene_num:11_03,scene_time:77475,bg_image_pass:"bg_11_2.gif"},//鳴らしたい音~
    {scene_num:11_04,scene_time:77475+2900,bg_image_pass:"bg_11_2.png"},
    {scene_num:12_01,scene_time:82900,bg_image_pass:"側.png"},//側（831）
    {scene_num:13_01,scene_time:92625,bg_image_pass:"移動背景.png"},//初の音（933）上下移動
    {scene_num:14_01,scene_time:102675,bg_image_pass:"2番きみ青背景.png"},//キミ
    {scene_num:14_02,scene_time:103150,bg_image_pass:"2番君次第.png"},//次第
    {scene_num:14_03,scene_time:104925,bg_image_pass:"2番君次第文字なし.png"},//全ては
    {scene_num:15_01,scene_time:108275,bg_image_pass:"bg_15_1.png"},//長い長い~
    {scene_num:15_02,scene_time:109550,bg_image_pass:"bg_15_2.png"},//世界の続き~
    {scene_num:15_03,scene_time:113050,bg_image_pass:"2番ロゴ背景.png"},//ロゴ
    {scene_num:16_01,scene_time:113700,bg_image_pass:"bg_16_1High_gif.gif"},//HIGH
    {scene_num:16_02,scene_time:113700+1300,bg_image_pass:"bg_16_1High_静止画.png"},
    {scene_num:16_03,scene_time:115125,bg_image_pass:"bg_16_2夢見心地の.png"},//夢見心地~
    {scene_num:16_04,scene_time:116250,bg_image_pass:"bg_16_3DIVE_gif.gif"},//DIVE
    {scene_num:16_05,scene_time:116250+1100,bg_image_pass:"bg_16_3DIVE_静止画.png"},
    {scene_num:16_06,scene_time:117675,bg_image_pass:"bg_16_4思うがままの.png"},//思うがまま~
    {scene_num:16_07,scene_time:118800,bg_image_pass:"bg_16_5LIFE_gif.gif"},//LIFE
    {scene_num:16_08,scene_time:118800+1200,bg_image_pass:"bg_16_5LIFE_静止画.png"},
    {scene_num:17,scene_time:121025,bg_image_pass:"ミライセカイ一面.png"},//セカイセカイセカイ
    {scene_num:18_01,scene_time:122775,bg_image_pass:"bg_18_1間違いなんか.png"},//間違いなんか~
    {scene_num:18_02,scene_time:123900,bg_image_pass:"bg_18_2ない_gif.gif"},//ない~
    {scene_num:18_03,scene_time:123900+1200,bg_image_pass:"bg_18_2ない_静止画.png"},
    {scene_num:18_04,scene_time:125350,bg_image_pass:"bg_18_3全ては君.png"},//全ては~
    {scene_num:18_05,scene_time:126450,bg_image_pass:"bg_18_4君次第_gif.gif"},//次第~
    {scene_num:18_06,scene_time:126450+1200,bg_image_pass:"bg_18_4君次第_静止画.png"},
    {scene_num:18_07,scene_time:127900,bg_image_pass:"bg_18_5導くこの.png"},//導くこの~
    {scene_num:18_08,scene_time:129000,bg_image_pass:"bg_18_6未来_gif.gif"},//未来~
    {scene_num:18_09,scene_time:129000+1200,bg_image_pass:"bg_18_6未来_静止画.png"},
    {scene_num:19,scene_time:131250,bg_image_pass:"ミライセカイ一面.png"},//ミライミライミライ
    {scene_num:20,scene_time:133475,bg_image_pass:"初の音.jpg"},//初の音
    {scene_num:21,scene_time:144325,bg_image_pass:"エンディング.png"},
    {scene_num:99,scene_time:9999999,bg_image_pass:"仮背景.jpg"}
];

//テキストや図形の情報を管理する配列
const text_img_info = [
    {id:"A_1_01",pass:"A_1_轟.png",start_time:1975,end_time:3575,pos_x:"7%",pos_y:"5%",size:"42.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_1_02",pass:"A_1_く.png",start_time:2450,end_time:3575,pos_x:"23%",pos_y:"30%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_1_03",pass:"A_1_1.png",start_time:2625,end_time:3575,pos_x:"59%",pos_y:"10%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_1_04",pass:"A_1_2.png",start_time:2950,end_time:3575,pos_x:"60%",pos_y:"40%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_1_05",pass:"A_1_3.png",start_time:3250,end_time:3575,pos_x:"70%",pos_y:"60%",size:"10%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_2_01",pass:"A_2_ほら.png",start_time:3575,end_time:6450,pos_x:"24%",pos_y:"20%",size:"16%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_02",pass:"A_2_よーいどーん.png",start_time:3900,end_time:6450,pos_x:"63%",pos_y:"24%",size:"14%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_03",pass:"A_2_で.png",start_time:5025,end_time:6450,pos_x:"73%",pos_y:"24%",size:"14%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_04",pass:"A_2_飛_飛.png",start_time:5175,end_time:6450,pos_x:"88%",pos_y:"0%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_05",pass:"A_2_飛_び.png",start_time:5350,end_time:6450,pos_x:"88%",pos_y:"18%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_06",pass:"A_2_飛_込.png",start_time:5500,end_time:6450,pos_x:"88%",pos_y:"29%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_07",pass:"A_2_飛_ん.png",start_time:5650,end_time:6450,pos_x:"88%",pos_y:"40%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_2_08",pass:"A_2_飛_で.png",start_time:5825,end_time:6450,pos_x:"88%",pos_y:"51%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_3_01",pass:"A_3_は.png",start_time:7100,end_time:8700,pos_x:"25.5%",pos_y:"40%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_02",pass:"A_3_ら.png",start_time:7250,end_time:8700,pos_x:"32.5%",pos_y:"40%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_03",pass:"A_3_り.png",start_time:7425,end_time:8700,pos_x:"39.5%",pos_y:"40%",size:"5.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_04",pass:"A_3_と.png",start_time:7575,end_time:8700,pos_x:"46.5%",pos_y:"40%",size:"5.8%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_05",pass:"A_3_彩.png",start_time:7725,end_time:8700,pos_x:"53.5%",pos_y:"40%",size:"6.7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_06",pass:"A_3_っ.png",start_time:8225,end_time:8700,pos_x:"60.5%",pos_y:"42%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_07",pass:"A_3_た.png",start_time:8375,end_time:8700,pos_x:"67.5%",pos_y:"39.5%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_011",pass:"A_3_図形.png",start_time:6450,end_time:8700,pos_x:"10%",pos_y:"15%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_012",pass:"A_3_図形.png",start_time:6450,end_time:8700,pos_x:"22%",pos_y:"55%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_013",pass:"A_3_図形.png",start_time:6450,end_time:8700,pos_x:"50%",pos_y:"17%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_014",pass:"A_3_図形.png",start_time:6450,end_time:8700,pos_x:"75%",pos_y:"35%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_015",pass:"A_3_図形2.png",start_time:6450,end_time:8700,pos_x:"45%",pos_y:"12%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_3_016",pass:"A_3_図形2.png",start_time:6450,end_time:8700,pos_x:"50%",pos_y:"65%",size:"15%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_4_01",pass:"A_4_未来_左_中.png",start_time:8700,end_time:10925,pos_x:"20%",pos_y:"53%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_4_02",pass:"A_4_未来_左_中.png",start_time:9325,end_time:10925,pos_x:"35%",pos_y:"48.5%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_4_03",pass:"A_4_未来_右.png",start_time:9975,end_time:10925,pos_x:"50%",pos_y:"44%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_4_011",pass:"A_4_線.png",start_time:8700,end_time:10925,pos_x:"20%",pos_y:"50%",size:"60%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_4_012",pass:"A_4_図形.png",start_time:8700,end_time:10925,pos_x:"72%",pos_y:"38%",size:"15%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_5_01",pass:"A_5_1.png",start_time:11575,end_time:11900,pos_x:"8%",pos_y:"70%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_02",pass:"A_5_2.png",start_time:11900,end_time:12200,pos_x:"7.5%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_03",pass:"A_5_3.png",start_time:12200,end_time:12525,pos_x:"8%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_04",pass:"A_5_4.png",start_time:12525,end_time:13800,pos_x:"8%",pos_y:"71.5%",size:"8.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_05",pass:"A_5_いち.png",start_time:11575,end_time:13800,pos_x:"7%",pos_y:"18%",size:"12%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_06",pass:"A_5_に.png",start_time:11900,end_time:13800,pos_x:"20%",pos_y:"23%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_07",pass:"A_5_さん.png",start_time:12200,end_time:13800,pos_x:"29%",pos_y:"29%",size:"12%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_08",pass:"A_5_し.png",start_time:12525,end_time:13800,pos_x:"42%",pos_y:"35%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_5_09",pass:"A_5_で色めいて.png",start_time:12675,end_time:13800,pos_x:"26%",pos_y:"75%",size:"20%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_6_01",pass:"A_6_この音が.png",start_time:13800,end_time:16675,pos_x:"9%",pos_y:"22%",size:"20%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_6_02",pass:"A_6_めぐる.png",start_time:14750,end_time:16675,pos_x:"15%",pos_y:"40%",size:"5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_6_03",pass:"A_6_巡るとき.png",start_time:15400,end_time:16675,pos_x:"22%",pos_y:"40%",size:"20%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_7_01",pass:"A_7_心.png",start_time:16675,end_time:18900,pos_x:"6%",pos_y:"31%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_02",pass:"A_7_の.png",start_time:17150,end_time:18900,pos_x:"11%",pos_y:"31.5%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_03",pass:"A_7_全.png",start_time:17300,end_time:18900,pos_x:"16%",pos_y:"31%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_04",pass:"A_7_部.png",start_time:17625,end_time:18900,pos_x:"21%",pos_y:"31%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_05",pass:"A_7_が.png",start_time:17775,end_time:18900,pos_x:"26%",pos_y:"31%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_06",pass:"A_7_と.png",start_time:17950,end_time:18900,pos_x:"17.5%",pos_y:"46%",size:"5.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_07",pass:"A_7_き.png",start_time:18100,end_time:18900,pos_x:"22.3%",pos_y:"46%",size:"5.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_08",pass:"A_7_め.png",start_time:18275,end_time:18900,pos_x:"27%",pos_y:"46%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_09",pass:"A_7_い.png",start_time:18425,end_time:18900,pos_x:"32%",pos_y:"46.3%",size:"6.2%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_010",pass:"A_7_て.png",start_time:18575,end_time:18900,pos_x:"37%",pos_y:"46%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_011",pass:"A_7_ハート.png",start_time:16675,end_time:18900,pos_x:"32%",pos_y:"6.5%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_012",pass:"A_7_ハート2.png",start_time:16675,end_time:18900,pos_x:"42%",pos_y:"20%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_013",pass:"A_7_線.png",start_time:16675,end_time:18900,pos_x:"7%",pos_y:"41%",size:"24%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_7_014",pass:"A_7_線.png",start_time:16675,end_time:18900,pos_x:"18%",pos_y:"56%",size:"24%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_8_01",pass:"A_8_期待したい.png",start_time:18900,end_time:21150,pos_x:"35%",pos_y:"25%",size:"30%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_9_01",pass:"A_9_想.png",start_time:21150,end_time:26575,pos_x:"9%",pos_y:"72%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_02",pass:"A_9_定.png",start_time:21450,end_time:26575,pos_x:"13%",pos_y:"72%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_03",pass:"A_9_外.png",start_time:21775,end_time:26575,pos_x:"17%",pos_y:"72%",size:"2.6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_04",pass:"A_9_の.png",start_time:22425,end_time:26575,pos_x:"21%",pos_y:"72.4%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_05",pass:"A_9_不.png",start_time:22725,end_time:26575,pos_x:"25%",pos_y:"72.4%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_06",pass:"A_9_安.png",start_time:22900,end_time:26575,pos_x:"29%",pos_y:"72%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_07",pass:"A_9_要.png",start_time:23225,end_time:26575,pos_x:"33%",pos_y:"72.4%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_08",pass:"A_9_素.png",start_time:23525,end_time:26575,pos_x:"37%",pos_y:"72%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_09",pass:"A_9_も.png",start_time:23700,end_time:26575,pos_x:"41%",pos_y:"72%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_010",pass:"A_9_展.png",start_time:24100,end_time:26575,pos_x:"9%",pos_y:"80%",size:"2.7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_011",pass:"A_9_開.png",start_time:24325,end_time:26575,pos_x:"13%",pos_y:"80%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_012",pass:"A_9_は.png",start_time:24800,end_time:26575,pos_x:"17%",pos_y:"80%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_013",pass:"A_9_低.png",start_time:24975,end_time:26575,pos_x:"21%",pos_y:"80%",size:"2.6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_014",pass:"A_9_解.png",start_time:25450,end_time:26575,pos_x:"25%",pos_y:"80%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_015",pass:"A_9_像.png",start_time:25775,end_time:26575,pos_x:"29%",pos_y:"80%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_9_016",pass:"A_9_度.png",start_time:26100,end_time:26575,pos_x:"33%",pos_y:"80%",size:"2.5%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_10_01",pass:"A_10_伝えたい言の葉が響くまで.png",start_time:26575,end_time:31350,pos_x:"50%",pos_y:"10%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_10_02",pass:"A_10_伝えたい言の葉が響くまで2.png",start_time:26575,end_time:31350,pos_x:"85%",pos_y:"7%",size:"11%",dispTime:0,lifeTime:0,killTime:0},

    {id:"A_11_01",pass:"A_11_初の音が奏でる.png",start_time:31350,end_time:34550,pos_x:"34%",pos_y:"40%",size:"36%",dispTime:0,lifeTime:0,killTime:0},
    {id:"A_11_011",pass:"A_11_〜.png",start_time:31350,end_time:34550,pos_x:"30%",pos_y:"42%",size:"50%",dispTime:0,lifeTime:0,killTime:0},

    {id:"S_1_01",pass:"S_サビ_セカイ.png",start_time:39325,end_time:41100,pos_x:"25%",pos_y:"10%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_02",pass:"S_サビ_セカイ.png",start_time:39975,end_time:41100,pos_x:"25%",pos_y:"38%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_03",pass:"S_サビ_セカイ.png",start_time:40600,end_time:41100,pos_x:"25%",pos_y:"66%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_011",pass:"S_図形白.png",start_time:39325,end_time:41100,pos_x:"3%",pos_y:"29%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_012",pass:"S_図形白.png",start_time:39325,end_time:41100,pos_x:"87%",pos_y:"5%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_013",pass:"S_図形青.png",start_time:39325,end_time:41100,pos_x:"2%",pos_y:"7%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_014",pass:"S_図形青.png",start_time:39325,end_time:41100,pos_x:"76%",pos_y:"78%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_015",pass:"S_図形白抜き.png",start_time:39325,end_time:41100,pos_x:"8%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_016",pass:"S_図形白抜き.png",start_time:39325,end_time:41100,pos_x:"65%",pos_y:"52%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_017",pass:"S_図形青抜き.png",start_time:39325,end_time:41100,pos_x:"6%",pos_y:"13%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_018",pass:"S_図形青抜き.png",start_time:39325,end_time:41100,pos_x:"83%",pos_y:"12%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_1_019",pass:"S_図形青抜き.png",start_time:39325,end_time:41100,pos_x:"80%",pos_y:"71%",size:"9%",dispTime:0,lifeTime:0,killTime:0},

    {id:"S_2_01",pass:"S_サビ_ミライ.png",start_time:49550,end_time:52425,pos_x:"25%",pos_y:"10%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_02",pass:"S_サビ_ミライ.png",start_time:50175,end_time:52425,pos_x:"25%",pos_y:"38%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_03",pass:"S_サビ_ミライ.png",start_time:50825,end_time:52425,pos_x:"25%",pos_y:"66%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_011",pass:"S_図形白.png",start_time:49550,end_time:52425,pos_x:"3%",pos_y:"29%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_012",pass:"S_図形白.png",start_time:49550,end_time:52425,pos_x:"87%",pos_y:"5%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_013",pass:"S_図形青.png",start_time:49550,end_time:52425,pos_x:"2%",pos_y:"7%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_014",pass:"S_図形青.png",start_time:49550,end_time:52425,pos_x:"76%",pos_y:"78%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_015",pass:"S_図形白抜き.png",start_time:49550,end_time:52425,pos_x:"8%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_016",pass:"S_図形白抜き.png",start_time:49550,end_time:52425,pos_x:"65%",pos_y:"52%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_017",pass:"S_図形青抜き.png",start_time:49550,end_time:52425,pos_x:"6%",pos_y:"13%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_018",pass:"S_図形青抜き.png",start_time:49550,end_time:52425,pos_x:"83%",pos_y:"12%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_2_019",pass:"S_図形青抜き.png",start_time:49550,end_time:52425,pos_x:"80%",pos_y:"71%",size:"9%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_1_01",pass:"B_1_音と音の鼓動が.png",start_time:61975,end_time:67250,pos_x:"37.5%",pos_y:"16%",size:"4.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_1_02",pass:"B_1_響き合って.png",start_time:63750,end_time:67250,pos_x:"32.5%",pos_y:"16%",size:"4.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_1_03",pass:"B_1_連なって.png",start_time:64850,end_time:67250,pos_x:"23.5%",pos_y:"16%",size:"4.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_1_04",pass:"B_1_繋いで.png",start_time:65650,end_time:67250,pos_x:"18.5%",pos_y:"16%",size:"4.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_1_05",pass:"B_1_生まれ落ちて.png",start_time:66300,end_time:67250,pos_x:"8.5%",pos_y:"16%",size:"6.5%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_2_01",pass:"B_2_記すノートも.png",start_time:67250,end_time:69800,pos_x:"88%",pos_y:"13%",size:"4.5%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_2_02",pass:"B_2_痛むハートの.png",start_time:68525,end_time:69800,pos_x:"51%",pos_y:"80%",size:"30%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_3_01",pass:"B_3_照らすライトになっていく.png",start_time:69800,end_time:72850,pos_x:"35%",pos_y:"44%",size:"65%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_4_01",pass:"B_4_ABC.png",start_time:72850,end_time:77450,pos_x:"4%",pos_y:"7%",size:"27%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_4_02",pass:"B_4_から.png",start_time:73800,end_time:77450,pos_x:"31%",pos_y:"12%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_4_03",pass:"B_4_XYZ.png",start_time:74125,end_time:77450,pos_x:"5%",pos_y:"30%",size:"27%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_4_04",pass:"B_4_レイアウトは捨て去って.png",start_time:75075,end_time:77450,pos_x:"5%",pos_y:"80%",size:"50%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_5_01",pass:"B_5_鳴らしたい音.png",start_time:77450,end_time:80175,pos_x:"5%",pos_y:"10%",size:"34%",dispTime:0,lifeTime:0,killTime:0},
    {id:"B_5_02",pass:"B_5_伝えたいこと.png",start_time:78750,end_time:80175,pos_x:"5%",pos_y:"35%",size:"28%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_6_01",pass:"B_6_創造も超えて.png",start_time:80175,end_time:81625,pos_x:"8%",pos_y:"15%",size:"40%",dispTime:0,lifeTime:0,killTime:0},

    {id:"B_7_01",pass:"B_7_宇宙の向こう側.png",start_time:81625,end_time:82900,pos_x:"6%",pos_y:"35%",size:"88%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_1_01",pass:"C_1_初.png",start_time:92625,end_time:100600,pos_x:"83%",pos_y:"6%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_02",pass:"C_1_の.png",start_time:93275,end_time:100600,pos_x:"83%",pos_y:"16%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_03",pass:"C_1_音.png",start_time:93575,end_time:100600,pos_x:"83%",pos_y:"26%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_04",pass:"C_1_が.png",start_time:93900,end_time:100600,pos_x:"83%",pos_y:"36%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_05",pass:"C_1_奏.png",start_time:94225,end_time:100600,pos_x:"83%",pos_y:"46%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_06",pass:"C_1_で.png",start_time:94850,end_time:100600,pos_x:"83%",pos_y:"56%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_07",pass:"C_1_る.png",start_time:95175,end_time:100600,pos_x:"83%",pos_y:"66%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_08",pass:"C_1_世.png",start_time:95500,end_time:100600,pos_x:"83%",pos_y:"76%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_09",pass:"C_1_界.png",start_time:95825,end_time:100600,pos_x:"83%",pos_y:"86%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_010",pass:"C_1_彩.png",start_time:97250,end_time:100600,pos_x:"75%",pos_y:"6%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_011",pass:"C_1_る.png",start_time:97725,end_time:100600,pos_x:"75%",pos_y:"16%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_012",pass:"C_1_こ.png",start_time:97900,end_time:100600,pos_x:"75%",pos_y:"26%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_013",pass:"C_1_の.png",start_time:98050,end_time:100600,pos_x:"75%",pos_y:"36%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_014",pass:"C_1_視.png",start_time:98225,end_time:100600,pos_x:"75%",pos_y:"46%",size:"4%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_1_015",pass:"C_1_界.png",start_time:98375,end_time:100600,pos_x:"75%",pos_y:"56%",size:"4%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_2_01",pass:"C_2_セカイ.png",start_time:100600,end_time:102675,pos_x:"20%",pos_y:"33%",size:"3%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_2_02",pass:"C_2_セカイ.png",start_time:101250,end_time:102675,pos_x:"13%",pos_y:"33%",size:"3%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_2_03",pass:"C_2_セカイー。.png",start_time:101875,end_time:102675,pos_x:"5.5%",pos_y:"33%",size:"3%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_3_01",pass:"C_3_きみ.png",start_time:102675,end_time:103150,pos_x:"0%",pos_y:"0%",size:"100%",dispTime:0,lifeTime:0,killTime:0},
    
    {id:"C_4_01",pass:"C_4_君.png",start_time:103150,end_time:104925,pos_x:"0%",pos_y:"36%",size:"19%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_4_02",pass:"C_4_次.png",start_time:103150,end_time:104925,pos_x:"40%",pos_y:"36%",size:"19%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_4_03",pass:"C_4_第.png",start_time:103575,end_time:104925,pos_x:"80%",pos_y:"36%",size:"19%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_5_01",pass:"C_5_全ては君の作り上げた.png",start_time:104925,end_time:108275,pos_x:"0%",pos_y:"73%",size:"100%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_6_01",pass:"C_6_長い1.png",start_time:108275,end_time:109550,pos_x:"0.5%",pos_y:"45%",size:"30%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_6_02",pass:"C_6_長い2.png",start_time:108900,end_time:109550,pos_x:"1%",pos_y:"71%",size:"40%",dispTime:0,lifeTime:0,killTime:0},

    {id:"C_7_01",pass:"C_7_世.png",start_time:109550,end_time:113050,pos_x:"0%",pos_y:"11%",size:"15%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_02",pass:"C_7_界.png",start_time:109850,end_time:113050,pos_x:"7%",pos_y:"36%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_03",pass:"C_7_の.png",start_time:110350,end_time:113050,pos_x:"17%",pos_y:"72%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_04",pass:"C_7_続.png",start_time:110825,end_time:113050,pos_x:"23%",pos_y:"71%",size:"17%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_05",pass:"C_7_き.png",start_time:111450,end_time:113050,pos_x:"44%",pos_y:"74%",size:"6%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_06",pass:"C_7_を.png",start_time:111625,end_time:113050,pos_x:"52%",pos_y:"71%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_07",pass:"C_7_見.png",start_time:112100,end_time:113050,pos_x:"58%",pos_y:"67%",size:"13%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_08",pass:"C_7_よ.png",start_time:112425,end_time:113050,pos_x:"73%",pos_y:"70%",size:"7%",dispTime:0,lifeTime:0,killTime:0},
    {id:"C_7_09",pass:"C_7_う.png",start_time:112425,end_time:113050,pos_x:"82%",pos_y:"67%",size:"15%",dispTime:0,lifeTime:0,killTime:0},

    {id:"S_3_01",pass:"S_サビ_セカイ.png",start_time:121025,end_time:122775,pos_x:"25%",pos_y:"10%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_02",pass:"S_サビ_セカイ.png",start_time:121675,end_time:122775,pos_x:"25%",pos_y:"38%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_03",pass:"S_サビ_セカイ.png",start_time:122300,end_time:122775,pos_x:"25%",pos_y:"66%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_011",pass:"S_図形白.png",start_time:121025,end_time:122775,pos_x:"3%",pos_y:"29%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_012",pass:"S_図形白.png",start_time:121025,end_time:122775,pos_x:"87%",pos_y:"5%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_013",pass:"S_図形青.png",start_time:121025,end_time:122775,pos_x:"2%",pos_y:"7%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_014",pass:"S_図形青.png",start_time:121025,end_time:122775,pos_x:"76%",pos_y:"78%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_015",pass:"S_図形白抜き.png",start_time:121025,end_time:122775,pos_x:"8%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_016",pass:"S_図形白抜き.png",start_time:121025,end_time:122775,pos_x:"65%",pos_y:"52%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_017",pass:"S_図形青抜き.png",start_time:121025,end_time:122775,pos_x:"6%",pos_y:"13%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_018",pass:"S_図形青抜き.png",start_time:121025,end_time:122775,pos_x:"83%",pos_y:"12%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_3_019",pass:"S_図形青抜き.png",start_time:121025,end_time:122775,pos_x:"80%",pos_y:"71%",size:"9%",dispTime:0,lifeTime:0,killTime:0},

    {id:"S_4_01",pass:"S_サビ_ミライ.png",start_time:131250,end_time:133475,pos_x:"25%",pos_y:"10%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_02",pass:"S_サビ_ミライ.png",start_time:131875,end_time:133475,pos_x:"25%",pos_y:"38%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_03",pass:"S_サビ_ミライ.png",start_time:132525,end_time:133475,pos_x:"25%",pos_y:"66%",size:"25%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_011",pass:"S_図形白.png",start_time:131250,end_time:133475,pos_x:"3%",pos_y:"29%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_012",pass:"S_図形白.png",start_time:131250,end_time:133475,pos_x:"87%",pos_y:"5%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_013",pass:"S_図形青.png",start_time:131250,end_time:133475,pos_x:"2%",pos_y:"7%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_014",pass:"S_図形青.png",start_time:131250,end_time:133475,pos_x:"76%",pos_y:"78%",size:"10%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_015",pass:"S_図形白抜き.png",start_time:131250,end_time:133475,pos_x:"8%",pos_y:"70%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_016",pass:"S_図形白抜き.png",start_time:131250,end_time:133475,pos_x:"65%",pos_y:"52%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_017",pass:"S_図形青抜き.png",start_time:131250,end_time:133475,pos_x:"6%",pos_y:"13%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_018",pass:"S_図形青抜き.png",start_time:131250,end_time:133475,pos_x:"83%",pos_y:"12%",size:"9%",dispTime:0,lifeTime:0,killTime:0},
    {id:"S_4_019",pass:"S_図形青抜き.png",start_time:131250,end_time:133475,pos_x:"80%",pos_y:"71%",size:"9%",dispTime:0,lifeTime:0,killTime:0},

    {id:"L_1_01",pass:"L_1_初の音.png",start_time:133475,end_time:138575,pos_x:"5%",pos_y:"45%",size:"90%",dispTime:0,lifeTime:0,killTime:0},

    {id:"L_2_01",pass:"L_2_終わり.png",start_time:138575,end_time:144325,pos_x:"5%",pos_y:"0%",size:"90%",dispTime:0,lifeTime:0,killTime:0}
];

var startDisplayImageTimes = new Map();
var endDisplayImageTimes = new Map();
var text_img_list = new Map();

/* アニメーションイメージを生成・表示タイミングをMAPに格納 */
for(var i = 0;i<text_img_info.length;i++){
    if(startDisplayImageTimes.has(text_img_info[i].start_time)){
        var tmp_array = startDisplayImageTimes.get(text_img_info[i].start_time);
        tmp_array.push(text_img_info[i].id);
        startDisplayImageTimes.set(text_img_info[i].start_time,tmp_array);
    }else{
        startDisplayImageTimes.set(text_img_info[i].start_time,[text_img_info[i].id]);
    }

    if(endDisplayImageTimes.has(text_img_info[i].end_time)){
        var tmp_array = endDisplayImageTimes.get(text_img_info[i].end_time);
        tmp_array.push(text_img_info[i].id);
        endDisplayImageTimes.set(text_img_info[i].end_time,tmp_array);
    }else{
        endDisplayImageTimes.set(text_img_info[i].end_time,[text_img_info[i].id]);
    }

    var tmp_pass = "";
    if(text_img_info[i].id.startsWith("A")){
        tmp_pass = text_A;
    }else if(text_img_info[i].id.startsWith("B")){
        tmp_pass = text_B;
    }else if(text_img_info[i].id.startsWith("C")){
        tmp_pass = text_C;
    }else if(text_img_info[i].id.startsWith("S")){
        tmp_pass = text_S;
    }else if(text_img_info[i].id.startsWith("L")){
        tmp_pass = text_L;
    }
    text_img_info[i].pass = tmp_pass + text_img_info[i].pass;

    var tmp_img = new AnimationImage(text_img_info[i].id,text_img_info[i].pass,text_img_info[i].pos_x,text_img_info[i].pos_y,text_img_info[i].size);
    text_img_list.set(text_img_info[i].id,tmp_img);
}

const bg_image = $('#bg_image');

function setSceneBackGround(pass){
    bg_image.attr('src',bg_pass + pass).show();
}

function showTextImg(startPass){
    const keys = text_img_list.keys();
    for(var key of keys) {
        if(key.startsWith(startPass)){
            text_img_list.get(key).show();
        }else{
            text_img_list.get(key).hide();
        }
    }
}

var scene_num = 0;
var textField = document.getElementById('scene');
var runButton = document.getElementById('RunButton');
runButton.addEventListener('click', () => {
    console.log(textField.value);
    if(textField.value == "A1"){
        scene_num = 1;
    }else if(textField.value == "A2"){
        scene_num = 1;
    }else if(textField.value == "A3"){
        scene_num = 2;
    }else if(textField.value == "A4"){
        scene_num = 2;
    }else if(textField.value == "A5"){
        scene_num = 5;
    }else if(textField.value == "A6"){
        scene_num = 5;
    }else if(textField.value == "A7"){
        scene_num = 7;
    }else if(textField.value == "A8"){
        scene_num = 8;
    }else if(textField.value == "A9"){
        scene_num = 10;
    }else if(textField.value == "A10"){
        scene_num = 12;
    }else if(textField.value == "A11"){
        scene_num = 13;
    }else if(textField.value == "B1"){
        scene_num = 32;
    }else if(textField.value == "B2"){
        scene_num = 34;
    }else if(textField.value == "B3"){
        scene_num = 34;
    }else if(textField.value == "B4"){
        scene_num = 36;
    }else if(textField.value == "B5"){
        scene_num = 38;
    }else if(textField.value == "B6"){
        scene_num = 38;
    }else if(textField.value == "B7"){
        scene_num = 38;
    }else if(textField.value == "C1"){
        scene_num = 2;
    }else if(textField.value == "C2"){
        scene_num = 1;
    }else if(textField.value == "C3"){
        scene_num = 41;
    }else if(textField.value == "C4"){
        scene_num = 42;
    }else if(textField.value == "C5"){
        scene_num = 43;
    }else if(textField.value == "C6"){
        scene_num = 44;
    }else if(textField.value == "C7"){
        scene_num = 45;
    }else if(textField.value == "S1"){
        scene_num = 19;
    }else if(textField.value == "S2"){
        scene_num = 19;
    }else if(textField.value == "S3"){
        scene_num = 19;
    }else if(textField.value == "S4"){
        scene_num = 19;
    }else if(textField.value == "L1"){
        scene_num = 66;
    }else if(textField.value == "L2"){
        scene_num = 66;
    }else{
        scene_num = 0;
    }
    showTextImg(textField.value.slice(0,1)+"_"+textField.value.slice(textField.value.length-(textField.value.length-1),textField.value.length)+"_");
    setSceneBackGround(scene_info[scene_num].bg_image_pass);
});

// const canvas = document.getElementById("bg_canvas");
// const ctx = canvas.getContext("2d");
// const img = new Image();
// img.src = "../MagiMira2024/img/bg_img/移動背景.png";

// img.onload = () => {
//     canvas.height = canvas.scrollHeight;
//     canvas.width = canvas.scrollWidth;
//     const aspectRatio = img.width / img.height;
//     const dy = canvas.width / aspectRatio;
//     console.log(canvas.height,canvas.width,aspectRatio,dy);
//     let yPos = -dy+canvas.height;

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(img, 0, 0, img.width, img.height, 0, yPos, canvas.width, dy);
//         // 画像の移動速度
//         yPos+=0.5;
//         if(yPos < 0){
//             requestAnimationFrame(animate);
//         }else{
//             return;
//         }
//     }

//     animate();
// };

window.onload = function(){
    loadImages();
}

// 画像プリロード用関数
function loadImages(){
    for (i = 1; i < scene_info.length; i++){
        preLoadImage(bg_pass+scene_info[i].bg_image_pass, (err, img) => {
            if (err) {
                console.error('Failed to load image:', err);
            } else {
                console.log('Image loaded:', img);
            }
        });
    }
    for (i = 0;i < text_img_info.length;i++){
        preLoadImage(text_img_info[i].pass, (err, img) => {
            if (err) {
                console.error('Failed to load image:', err);
            } else {
                console.log('Image loaded:', img);
            }
        });
    }
}

function preLoadImage(url,callback){
    const img = document.createElement('img');
    img.onload = () => callback(null, img);
    img.onerror = (err) => {console.log("ロード失敗：",url);callback(err);};
    img.src = url;
}

//以下キャッシュ無効化の処理
window.onbeforeunload = function() {};
window.onunload = function() {};
window.addEventListener("pageshow", function(event){
    if (event.persisted) {
        // ここにキャッシュ有効時の処理を書く
        window.location.reload()
    }
});
const app = getApp()
const {
  formatTime
} = require('../../utils/util.js')

var data = {
  "type_list": [{
    "key": "courier",
    "name": "信使"
  },
    {
      "key": "wearable",
      "name": "可佩带"
    },
    {
      "key": "taunt",
      "name": "嘲讽"
    },
    {
      "key": "terrain",
      "name": "地图"
    },
    {
      "key": "ward",
      "name": "守卫"
    },
    {
      "key": "socket_gem",
      "name": "宝石 / 符文"
    },
    {
      "key": "tool",
      "name": "工具"
    },
    {
      "key": "cursor_pack",
      "name": "指针包"
    },
    {
      "key": "bundle",
      "name": "捆绑包"
    },
    {
      "key": "announcer",
      "name": "播音员"
    },
    {
      "key": "misc",
      "name": "杂项"
    },
    {
      "key": "hud_skin",
      "name": "游戏界面皮肤"
    },
    {
      "key": "treasure_chest",
      "name": "珍藏"
    },
    {
      "key": "key",
      "name": "符印"
    },
    {
      "key": "emblem",
      "name": "纹章"
    },
    {
      "key": "league",
      "name": "联赛"
    },
    {
      "key": "emoticon_tool",
      "name": "表情工具包"
    },
    {
      "key": "loading_screen",
      "name": "载入画面"
    },
    {
      "key": "retired_treasure_chest",
      "name": "过期珍藏"
    },
    {
      "key": "player_card",
      "name": "选手卡牌"
    },
    {
      "key": "pennant",
      "name": "锦旗"
    },
    {
      "key": "music",
      "name": "音乐"
    }],
  "rarity_list": [{
    "key": "common",
    "name": "普通"
  },
    {
      "key": "uncommon",
      "name": "罕见"
    },
    {
      "key": "rare",
      "name": "稀有"
    },
    {
      "key": "mythical",
      "name": "神话"
    },
    {
      "key": "immortal",
      "name": "不朽"
    },
    {
      "key": "ancient",
      "name": "远古"
    },
    {
      "key": "legendary",
      "name": "传说"
    },
    {
      "key": "arcana",
      "name": "至宝"
    }],
  "tag_list": [{
    "key": "菠菜",
    "name": "热门饰品"
  },
    {
      "key": "TI4",
      "name": "TI4"
    },
    {
      "key": "TI5",
      "name": "TI5"
    },
    {
      "key": "TI6",
      "name": "TI6"
    },
    {
      "key": "2015DAC",
      "name": "2015DAC"
    },
    {
      "key": "2015秋季赛",
      "name": "2015秋季赛"
    },
    {
      "key": "2016冬季赛",
      "name": "2016冬季赛"
    },
    {
      "key": "2016秋季赛",
      "name": "2016秋季赛"
    },
    {
      "key": "2017冬季赛",
      "name": "2017冬季赛"
    },
    {
      "key": "TI7",
      "name": "TI7"
    },
    {
      "key": "TI8",
      "name": "TI8"
    },
    {
      "key": "TI9",
      "name": "TI9"
    }],
  "hero_list": [{
    "key": "axe",
    "name": "斧王",
    "image": "https://i.c5game.com/dota2/hero/axe.png@100w.png"
  },
    {
      "key": "earthshaker",
      "name": "撼地者",
      "image": "https://i.c5game.com/dota2/hero/earthshaker.png@100w.png"
    },
    {
      "key": "pudge",
      "name": "帕吉",
      "image": "https://i.c5game.com/dota2/hero/pudge.png@100w.png"
    },
    {
      "key": "sand_king",
      "name": "沙王",
      "image": "https://i.c5game.com/dota2/hero/sand_king.png@100w.png"
    },
    {
      "key": "sven",
      "name": "斯温",
      "image": "https://i.c5game.com/dota2/hero/sven.png@100w.png"
    },
    {
      "key": "tiny",
      "name": "小小",
      "image": "https://i.c5game.com/dota2/hero/tiny.png@100w.png"
    },
    {
      "key": "kunkka",
      "name": "昆卡",
      "image": "https://i.c5game.com/dota2/hero/kunkka.png@100w.png"
    },
    {
      "key": "slardar",
      "name": "斯拉达",
      "image": "https://i.c5game.com/dota2/hero/slark_new.png@100w.png"
    },
    {
      "key": "tidehunter",
      "name": "潮汐猎人",
      "image": "https://i.c5game.com/dota2/hero/tidehunter.png@100w.png"
    },
    {
      "key": "beastmaster",
      "name": "兽王",
      "image": "https://i.c5game.com/dota2/hero/beastmaster.png@100w.png"
    },
    {
      "key": "skeleton_king",
      "name": "冥魂大帝",
      "image": "https://i.c5game.com/dota2/hero/skeleton_king.png@100w.png"
    },
    {
      "key": "dragon_knight",
      "name": "龙骑士",
      "image": "https://i.c5game.com/dota2/hero/dragon_knight.png@100w.png"
    },
    {
      "key": "rattletrap",
      "name": "发条技师",
      "image": "https://i.c5game.com/dota2/hero/rattletrap.png@100w.png"
    },
    {
      "key": "life_stealer",
      "name": "噬魂鬼",
      "image": "https://i.c5game.com/dota2/hero/life_stealer.png@100w.png"
    },
    {
      "key": "omniknight",
      "name": "全能骑士",
      "image": "https://i.c5game.com/dota2/hero/omniknight.png@100w.png"
    },
    {
      "key": "huskar",
      "name": "哈斯卡",
      "image": "https://i.c5game.com/dota2/hero/huskar.png@100w.png"
    },
    {
      "key": "night_stalker",
      "name": "暗夜魔王",
      "image": "https://i.c5game.com/dota2/hero/night_stalker.png@100w.png"
    },
    {
      "key": "doom_bringer",
      "name": "末日使者",
      "image": "https://i.c5game.com/dota2/hero/doom_bringer.png@100w.png"
    },
    {
      "key": "spirit_breaker",
      "name": "裂魂人",
      "image": "https://i.c5game.com/dota2/hero/spirit_breaker.png@100w.png"
    },
    {
      "key": "alchemist",
      "name": "炼金术士",
      "image": "https://i.c5game.com/dota2/hero/alchemist.png@100w.png"
    },
    {
      "key": "lycan",
      "name": "狼人",
      "image": "https://i.c5game.com/dota2/hero/lycan.png@100w.png"
    },
    {
      "key": "brewmaster",
      "name": "酒仙",
      "image": "https://i.c5game.com/dota2/hero/brewmaster.png@100w.png"
    },
    {
      "key": "chaos_knight",
      "name": "混沌骑士",
      "image": "https://i.c5game.com/dota2/hero/chaos_knight.png@100w.png"
    },
    {
      "key": "treant",
      "name": "树精卫士",
      "image": "https://i.c5game.com/dota2/hero/treant.png@100w.png"
    },
    {
      "key": "undying",
      "name": "不朽尸王",
      "image": "https://i.c5game.com/dota2/hero/undying.png@100w.png"
    },
    {
      "key": "wisp",
      "name": "艾欧",
      "image": "https://i.c5game.com/dota2/hero/wisp.png@100w.png"
    },
    {
      "key": "centaur",
      "name": "半人马战行者",
      "image": "https://i.c5game.com/dota2/hero/centaur.png@100w.png"
    },
    {
      "key": "magnataur",
      "name": "马格纳斯",
      "image": "https://i.c5game.com/dota2/hero/magnataur.png@100w.png"
    },
    {
      "key": "shredder",
      "name": "伐木机",
      "image": "https://i.c5game.com/dota2/hero/shredder.png@100w.png"
    },
    {
      "key": "bristleback",
      "name": "钢背兽",
      "image": "https://i.c5game.com/dota2/hero/bristleback.png@100w.png"
    },
    {
      "key": "tusk",
      "name": "巨牙海民",
      "image": "https://i.c5game.com/dota2/hero/tusk.png@100w.png"
    },
    {
      "key": "abaddon",
      "name": "亚巴顿",
      "image": "https://i.c5game.com/dota2/hero/abaddon.png@100w.png"
    },
    {
      "key": "elder_titan",
      "name": "上古巨神",
      "image": "https://i.c5game.com/dota2/hero/elder_titan.png@100w.png"
    },
    {
      "key": "legion_commander",
      "name": "军团指挥官",
      "image": "https://i.c5game.com/dota2/hero/legion_commander.png@100w.png"
    },
    {
      "key": "earth_spirit",
      "name": "大地之灵",
      "image": "https://i.c5game.com/dota2/hero/earth_spirit.png@100w.png"
    },
    {
      "key": "abyssal_underlord",
      "name": "孽主",
      "image": "https://i.c5game.com/dota2/hero/abyssal_underlord.png@100w.png"
    },
    {
      "key": "phoenix",
      "name": "凤凰",
      "image": "https://i.c5game.com/dota2/hero/phoenix.png@100w.png"
    },
    {
      "key": "mars",
      "name": "玛尔斯",
      "image": "https://i.c5game.com/dota2/hero/mars.png@100w.png"
    }, {
      "key": "antimage",
      "name": "敌法师",
      "image": "https://i.c5game.com/dota2/hero/antimage.png@100w.png"
    },
    {
      "key": "bloodseeker",
      "name": "嗜血狂魔",
      "image": "https://i.c5game.com/dota2/hero/bloodseeker.png@100w.png"
    },
    {
      "key": "drow_ranger",
      "name": "卓尔游侠",
      "image": "https://i.c5game.com/dota2/hero/drow_ranger.png@100w.png"
    },
    {
      "key": "juggernaut",
      "name": "主宰",
      "image": "https://i.c5game.com/dota2/hero/juggernaut.png@100w.png"
    },
    {
      "key": "mirana",
      "name": "米拉娜",
      "image": "https://i.c5game.com/dota2/hero/mirana.png@100w.png"
    },
    {
      "key": "morphling",
      "name": "变体精灵",
      "image": "https://i.c5game.com/dota2/hero/morphling.png@100w.png"
    },
    {
      "key": "nevermore",
      "name": "影魔",
      "image": "https://i.c5game.com/dota2/hero/nevermore.png@100w.png"
    },
    {
      "key": "phantom_lancer",
      "name": "幻影长矛手",
      "image": "https://i.c5game.com/dota2/hero/phantom_lancer.png@100w.png"
    },
    {
      "key": "razor",
      "name": "剃刀",
      "image": "https://i.c5game.com/dota2/hero/razor.png@100w.png"
    },
    {
      "key": "vengefulspirit",
      "name": "复仇之魂",
      "image": "https://i.c5game.com/dota2/hero/vengefulspirit.png@100w.png"
    },
    {
      "key": "riki",
      "name": "力丸",
      "image": "https://i.c5game.com/dota2/hero/riki.png@100w.png"
    },
    {
      "key": "sniper",
      "name": "狙击手",
      "image": "https://i.c5game.com/dota2/hero/sniper.png@100w.png"
    },
    {
      "key": "venomancer",
      "name": "剧毒术士",
      "image": "https://i.c5game.com/dota2/hero/venomancer.png@100w.png"
    },
    {
      "key": "faceless_void",
      "name": "虚空假面",
      "image": "https://i.c5game.com/dota2/hero/faceless_void_new.png@100w.png"
    },
    {
      "key": "phantom_assassin",
      "name": "幻影刺客",
      "image": "https://i.c5game.com/dota2/hero/phantom_assassin.png@100w.png"
    },
    {
      "key": "templar_assassin",
      "name": "圣堂刺客",
      "image": "https://i.c5game.com/dota2/hero/templar_assassin.png@100w.png"
    },
    {
      "key": "viper",
      "name": "冥界亚龙",
      "image": "https://i.c5game.com/dota2/hero/viper_new.png@100w.png"
    },
    {
      "key": "luna",
      "name": "露娜",
      "image": "https://i.c5game.com/dota2/hero/luna.png@100w.png"
    },
    {
      "key": "clinkz",
      "name": "克林克兹",
      "image": "https://i.c5game.com/dota2/hero/clinkz.png@100w.png"
    },
    {
      "key": "broodmother",
      "name": "育母蜘蛛",
      "image": "https://i.c5game.com/dota2/hero/broodmother.png@100w.png"
    },
    {
      "key": "bounty_hunter",
      "name": "赏金猎人",
      "image": "https://i.c5game.com/dota2/hero/bounty_hunter.png@100w.png"
    },
    {
      "key": "weaver",
      "name": "编织者",
      "image": "https://i.c5game.com/dota2/hero/weaver.png@100w.png"
    },
    {
      "key": "spectre",
      "name": "幽鬼",
      "image": "https://i.c5game.com/dota2/hero/spectre.png@100w.png"
    },
    {
      "key": "ursa",
      "name": "熊战士",
      "image": "https://i.c5game.com/dota2/hero/ursa.png@100w.png"
    },
    {
      "key": "gyrocopter",
      "name": "矮人直升机",
      "image": "https://i.c5game.com/dota2/hero/gyrocopter.png@100w.png"
    },
    {
      "key": "lone_druid",
      "name": "德鲁伊",
      "image": "https://i.c5game.com/dota2/hero/lone_druid.png@100w.png"
    },
    {
      "key": "meepo",
      "name": "米波",
      "image": "https://i.c5game.com/dota2/hero/meepo.png@100w.png"
    },
    {
      "key": "nyx_assassin",
      "name": "司夜刺客",
      "image": "https://i.c5game.com/dota2/hero/nyx_assassin.png@100w.png"
    },
    {
      "key": "naga_siren",
      "name": "娜迦海妖",
      "image": "https://i.c5game.com/dota2/hero/naga_siren.png@100w.png"
    },
    {
      "key": "slark",
      "name": "斯拉克",
      "image": "https://i.c5game.com/image/u-5995806fde4a1.jpg@100w.png"
    },
    {
      "key": "medusa",
      "name": "美杜莎",
      "image": "https://i.c5game.com/dota2/hero/medusa.png@100w.png"
    },
    {
      "key": "troll_warlord",
      "name": "巨魔战将",
      "image": "https://i.c5game.com/dota2/hero/troll_warlord.png@100w.png"
    },
    {
      "key": "ember_spirit",
      "name": "灰烬之灵",
      "image": "https://i.c5game.com/dota2/hero/ember_spirit.png@100w.png"
    },
    {
      "key": "terrorblade",
      "name": "恐怖利刃",
      "image": "https://i.c5game.com/dota2/hero/terrorblade.png@100w.png"
    },
    {
      "key": "arc_warden",
      "name": "天穹守望者",
      "image": "https://i.c5game.com/dota2/hero/arc_warden.png@100w.png"
    },
    {
      "key": "monkey_king",
      "name": "齐天大圣",
      "image": "https://i.c5game.com/dota2/hero/monkey_king.png@100w.png"
    },
    {
      "key": "pangolier",
      "name": "石鳞剑士",
      "image": "https://i.c5game.com/dota2/hero/pangolier.png@100w.png"
    }, {
      "key": "bane",
      "name": "祸乱之源",
      "image": "https://i.c5game.com/dota2/hero/bane.png@100w.png"
    },
    {
      "key": "crystal_maiden",
      "name": "水晶室女",
      "image": "https://i.c5game.com/dota2/hero/crystal_maiden.png@100w.png"
    },
    {
      "key": "puck",
      "name": "帕克",
      "image": "https://i.c5game.com/dota2/hero/puck.png@100w.png"
    },
    {
      "key": "storm_spirit",
      "name": "风暴之灵",
      "image": "https://i.c5game.com/dota2/hero/storm_spirit.png@100w.png"
    },
    {
      "key": "windrunner",
      "name": "风行者",
      "image": "https://i.c5game.com/dota2/hero/windrunner.png@100w.png"
    },
    {
      "key": "zeus",
      "name": "宙斯",
      "image": "https://i.c5game.com/dota2/hero/zuus.png@100w.png"
    },
    {
      "key": "lina",
      "name": "莉娜",
      "image": "https://i.c5game.com/dota2/hero/lina.png@100w.png"
    },
    {
      "key": "lion",
      "name": "莱恩",
      "image": "https://i.c5game.com/dota2/hero/lion.png@100w.png"
    },
    {
      "key": "shadow_shaman",
      "name": "暗影萨满",
      "image": "https://i.c5game.com/dota2/hero/shadow_shaman.png@100w.png"
    },
    {
      "key": "witch_doctor",
      "name": "巫医",
      "image": "https://i.c5game.com/dota2/hero/witch_doctor.png@100w.png"
    },
    {
      "key": "lich",
      "name": "巫妖",
      "image": "https://i.c5game.com/dota2/hero/lich.png@100w.png"
    },
    {
      "key": "enigma",
      "name": "谜团",
      "image": "https://i.c5game.com/dota2/hero/enigma.png@100w.png"
    },
    {
      "key": "tinker",
      "name": "修补匠",
      "image": "https://i.c5game.com/dota2/hero/tinker.png@100w.png"
    },
    {
      "key": "necrolyte",
      "name": "瘟疫法师",
      "image": "https://i.c5game.com/dota2/hero/necrolyte.png@100w.png"
    },
    {
      "key": "warlock",
      "name": "术士",
      "image": "https://i.c5game.com/dota2/hero/warlock.png@100w.png"
    },
    {
      "key": "queenofpain",
      "name": "痛苦女王",
      "image": "https://i.c5game.com/dota2/hero/queenofpain.png@100w.png"
    },
    {
      "key": "death_prophet",
      "name": "死亡先知",
      "image": "https://i.c5game.com/dota2/hero/death_prophet.png@100w.png"
    },
    {
      "key": "pugna",
      "name": "帕格纳",
      "image": "https://i.c5game.com/dota2/hero/pugna.png@100w.png"
    },
    {
      "key": "dazzle",
      "name": "戴泽",
      "image": "https://i.c5game.com/dota2/hero/dazzle.png@100w.png"
    },
    {
      "key": "leshrac",
      "name": "拉席克",
      "image": "https://i.c5game.com/dota2/hero/leshrac.png@100w.png"
    },
    {
      "key": "furion",
      "name": "先知",
      "image": "https://i.c5game.com/dota2/hero/furion.png@100w.png"
    },
    {
      "key": "dark_seer",
      "name": "黑暗贤者",
      "image": "https://i.c5game.com/dota2/hero/dark_seer.png@100w.png"
    },
    {
      "key": "enchantress",
      "name": "魅惑魔女",
      "image": "https://i.c5game.com/dota2/hero/enchantress.png@100w.png"
    },
    {
      "key": "jakiro",
      "name": "杰奇洛",
      "image": "https://i.c5game.com/dota2/hero/jakiro.png@100w.png"
    },
    {
      "key": "batrider",
      "name": "蝙蝠骑士",
      "image": "https://i.c5game.com/dota2/hero/batrider.png@100w.png"
    },
    {
      "key": "chen",
      "name": "陈",
      "image": "https://i.c5game.com/dota2/hero/chen.png@100w.png"
    },
    {
      "key": "ancient_apparition",
      "name": "远古冰魄",
      "image": "https://i.c5game.com/dota2/hero/ancient_apparition.png@100w.png"
    },
    {
      "key": "invoker",
      "name": "祈求者",
      "image": "https://i.c5game.com/dota2/hero/invoker.png@100w.png"
    },
    {
      "key": "silencer",
      "name": "沉默术士",
      "image": "https://i.c5game.com/dota2/hero/silencer.png@100w.png"
    },
    {
      "key": "obsidian_destroyer",
      "name": "殁境神蚀者",
      "image": "https://i.c5game.com/dota2/hero/obsidian_destroyer.png@100w.png"
    },
    {
      "key": "shadow_demon",
      "name": "暗影恶魔",
      "image": "https://i.c5game.com/dota2/hero/shadow_demon.png@100w.png"
    },
    {
      "key": "ogre_magi",
      "name": "食人魔魔法师",
      "image": "https://i.c5game.com/dota2/hero/ogre_magi.png@100w.png"
    },
    {
      "key": "rubick",
      "name": "拉比克",
      "image": "https://i.c5game.com/dota2/hero/rubick.png@100w.png"
    },
    {
      "key": "disruptor",
      "name": "干扰者",
      "image": "https://i.c5game.com/dota2/hero/disruptor.png@100w.png"
    },
    {
      "key": "keeper_of_the_light",
      "name": "光之守卫",
      "image": "https://i.c5game.com/dota2/hero/keeper_of_the_light.png@100w.png"
    },
    {
      "key": "visage",
      "name": "维萨吉",
      "image": "https://i.c5game.com/dota2/hero/visage.png@100w.png"
    },
    {
      "key": "skywrath_mage",
      "name": "天怒法师",
      "image": "https://i.c5game.com/dota2/hero/skywrath_mage.png@100w.png"
    },
    {
      "key": "techies",
      "name": "工程师",
      "image": "https://i.c5game.com/dota2/hero/techies.png@100w.png"
    },
    {
      "key": "oracle",
      "name": "神谕者",
      "image": "https://i.c5game.com/dota2/hero/oracle.png@100w.png"
    },
    {
      "key": "winter_wyvern",
      "name": "寒冬飞龙",
      "image": "https://i.c5game.com/dota2/hero/winter_wyvern.png@100w.png"
    },
    {
      "key": "dark_willow",
      "name": "邪影芳灵",
      "image": "https://i.c5game.com/dota2/hero/dark_willow.png@100w.png"
    },
    {
      "key": "grimstroke",
      "name": "天涯墨客",
      "image": "http://i.c5game.com/dota2/hero/grimstroke.png@100w.png"
    }]
}

Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    data: [], //数据
    filter_rarity: '', //稀有度
    filter_type: '', //类型
    filter_tag: '', //标签
    filter_hero: '', //hero
    tabTxt: ['类型', '稀有度', '标签','英雄'], //tab文案
    tab: [true, true, true, true],
    page: 1,
    storeList: [],
    optionList: [],
    heroes: [],
  },

  showStores() {
    //提示加载中
    wx.showLoading({
      title: '加载中',
    })

    //请求接口放到storage里
    app.openApiProxy({
      aName: "stores",
      args: {
        "page": this.data.page,
        "type":this.data.filter_type,
        "rarity": this.data.filter_rarity,
        "tag": this.data.filter_tag,
        "hero": this.data.filter_hero
      }
    }).then(res => {
      wx.hideLoading();
      var arr1 = this.data.storeList; //从data获取当前datalist数组
      var arr2 = res.data.list; //从此次请求返回的数据中获取新数组
      arr1 = arr1.concat(arr2); //合并数组
      this.setData({
        storeList: arr1
      })
      }).catch(e => {
        wx.hideLoading()
        wx.showToast({
          title: '没有更多数据了',
          icon: "none",
          duration: 2000
        })
      })
  },

  reloadStores(){
    //提示加载中
    wx.showLoading({
      title: '加载中',
    })

    //请求接口放到storage里
    app.openApiProxy({
      aName: "stores",
      args: {
        "page": this.data.page,
        "type": this.data.filter_type,
        "rarity": this.data.filter_rarity,
        "tag": this.data.filter_tag,
        "hero": this.data.filter_hero
      }
    }).then(res => {
      wx.hideLoading();
      var arr = res.data.list; //从此次请求返回的数据中获取新数组
      this.setData({
        storeList: arr
      })
      }).catch(e => {
        wx.hideLoading()
        wx.showToast({
          title: '暂无相关数据哦～',
          icon: "none",
          duration: 2000
        })
        this.setData({
          storeList:[]
        })
      })
  },

  showOptions() {
    //提示加载中
    wx.showLoading({
      title: '加载中',
    })

    //请求接口放到storage里
    app.openApiProxy({
      aName: "options",
      args: {}
    }).then(res => {
      let heroArr = res.data.list[5];
      let arrStr = heroArr.list[0].list;
      let arrAgi = heroArr.list[1].list;
      let arrInt = heroArr.list[2].list;
      arrStr = arrStr.concat(arrAgi);
      arrStr = arrStr.concat(arrInt);

      this.setData({
        optionList: res.data,
        heroes: arrStr,
      })
      
      wx.hideLoading();
    })
  },

  onReady: function () {
    //初始化数据
    var self = this;
    self.getFilter();
  },

  onShow() {
    this.showStores();
    // this.showOptions();
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function(e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function(e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function(e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function(e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function(e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function(e) {
    this.setData({
      skin: e.detail.value
    });
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },
  navigate(e) {
    // let hero_index = e.currentTarget.dataset.index
    let hero_id = this.data.heroList[e.currentTarget.dataset.index].id
    wx.navigateTo({
      url: `/pages/heroStatus/heroStatus?hero_id=${hero_id}`
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  
  change(e) {
    this.setData({
      TabCur: e.detail.current
    })
    // this.callComponent()
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  onShareAppMessage() {},

  onReachBottom: function() { //触底开始下一页
    var that = this;
    var page = that.data.page + 1; //获取当前页数并+1
    that.setData({
      page: page, //更新当前页数
    })
    that.showStores(); //重新调用请求获取下一页数据
  },


// 选项卡
    filterTab: function(e) {
        var data = [true, true, true, true],
            index = e.currentTarget.dataset.index;
        data[index] = !this.data.tab[index];
        this.setData({
            tab: data
        })
    },
    // 获取筛选项
    getFilter: function() {
        var self = this;
        self.setData({
            filterList: data
        });
    },
    //筛选项点击操作
    filter: function(e) {
        var self = this,
            idx = e.currentTarget.dataset.index,
            key = e.currentTarget.dataset.key,
            txt = e.currentTarget.dataset.txt,
            tabTxt = this.data.tabTxt;
        switch (e.currentTarget.dataset.index) {
            case '0':
                tabTxt[0] = txt;
                self.setData({
                    page: 1,
                    data: [],
                    tab: [true, true, true, true],
                    tabTxt: tabTxt,
                    filter_type: key
                });
                break;
            case '1':
                tabTxt[1] = txt;
                self.setData({
                    page: 1,
                    data: [],
                    tab: [true, true, true, true],
                    tabTxt: tabTxt,
                    filter_rarity: key
                });
                break;
            case '2':
                tabTxt[2] = txt;
                self.setData({
                    page: 1,
                    data: [],
                    tab: [true, true, true, true],
                    tabTxt: tabTxt,
                    filter_tag: key
                });
                break;
            case '3':
                tabTxt[3] = txt;
                self.setData({
                    page: 1,
                    data: [],
                    tab: [true, true, true, true],
                    tabTxt: tabTxt,
                    filter_hero: key
                });
                break;
        }

      this.reloadStores(); //重新调用请求
    }
})
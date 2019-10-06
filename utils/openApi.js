//openApi免费接口
module.exports = function ({
  aName,
  args
}) {
  let {
    url,
    data
  } = getReq(aName, args)

  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: "get",
      success(res) {
        resolve(res.data);
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

function getReq(aName, args) {
  let url = "";
  let data = {};
  //关键字查询
  if (aName == "search") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=search&params=${encodeURIComponent(JSON.stringify(args))}`
    data = args
  }
  //玩家
  else if (aName == "players") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}&params`
  }
  //胜负场
  else if (aName == "playersWl") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/wl&params`
  }
  //英雄场次
  else if (aName == "playersHeroes") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/heroes&params`
  }
  //英雄积分 
  else if (aName == "playersRankings") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/rankings&params`
  }
  //玩家数据统计
  else if (aName == "playersTotals") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/totals&params`
    data = args
  }
  //玩家最近比赛
  else if (aName == "playersRecentMatches") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/recentMatches&params`
  }
  //队友对手
  else if (aName == "playersPeers") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/peers&params`
  }
  //职业选手
  else if (aName == "playersPros") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/pros&params`
  }
  //天梯分趋势
  else if (aName == "playersRatings") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=players/${args.account_id}/ratings&params`
  }
  else if (aName == "matches") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=matches/${args.match_id}&params`
  }
  //英雄信息：英雄属性/英雄头像
  else if (aName == "heroStats") {
    url = 'https://lkd-ykr.top/DO2/open/doTransfer.json?uri=heroStats&params'
  }  //英雄最近比赛
  else if (aName == "heroRecentMatches") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=heroes/${args.hero_id}/matches&params`
  }
  //联赛列表
  else if (aName == "leagueList"){
    url = `https://lkd-ykr.top/DO2/league/getLeagueList.json?pageNum=${args.pageNum}&pageSize=${args.pageSize}`
  } 
  //联赛详情
  else if (aName == "leagueDetail") {
    url = `https://lkd-ykr.top/DO2/league/getLeagueDetail.json?detailId=${args.detailId}`
  } 
  //英雄详细信息
  else if (aName == "heroDetail") {
    url = `https://lkd-ykr.top/DO2/raw/getHeroDetail.json?name=${args.name}`
  } 
  //物品列表
  else if (aName == "items") {
    url = `https://lkd-ykr.top/DO2/raw/getItemList.json`
  } 
  //Top player by hero
  else if (aName == "topPlayers") {
    url = `https://lkd-ykr.top/DO2/open/doTransfer.json?uri=rankings&params=${encodeURIComponent(JSON.stringify(args))}`
  } 
  //英雄详细信息
  else if (aName == "maxHeroDetail") {
    url = `https://lkd-ykr.top/DO2/max/getHeroDetail.json?name=${args.name}`
  } 
  //英雄列表
  else if (aName == "maxHeroStat") {
    url = `https://lkd-ykr.top/DO2/max/getHeroStat.json`
  } 
  //物品列表
  else if (aName == "maxItemDetail") {
    url = `https://lkd-ykr.top/DO2/max/getItemDetail.json?name=${args.name}`
  }
  //英雄列表
  else if (aName == "maxItemStat") {
    url = `https://lkd-ykr.top/DO2/max/getItemStat.json`
  } 
  //联赛列表
  else if (aName == "maxLeagueList") {
    url = `https://lkd-ykr.top/DO2/max/getLeagueList.json?offset=${args.offset}&limit=${args.limit}`
  } 
  //联赛比赛
  else if (aName == "maxLeagueMatches") {
    url = `https://lkd-ykr.top/DO2/max/getLeagueMatches.json?leagueId=${args.leagueId}`
  } 
  //联赛列表
  else if (aName == "maxVerifiedList") {
    url = `https://lkd-ykr.top/DO2/max/getVerifiedList.json?offset=${args.offset}&limit=${args.limit}`
  } 
  //饰品查询选项列表
  else if (aName == "options") {
    url = `https://lkd-ykr.top/DO2/c5/getOptionList.json`
  } 
  //饰品列表
  else if (aName == "stores") {
    url = `https://lkd-ykr.top/DO2/c5/getStoreList.json?page=${args.page}&type=${args.type}&rarity=${args.rarity}&tag=${args.tag}&hero=${args.hero}`
  } 
  return {
    url,
    data
  }
}
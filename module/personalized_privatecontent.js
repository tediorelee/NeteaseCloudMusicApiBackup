// 独家放送

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/personalized/privatecontent`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}

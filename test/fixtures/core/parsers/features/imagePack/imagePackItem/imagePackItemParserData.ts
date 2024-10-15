export const imagePackItemParserData = [
  {
    name: 'aston',
    path: 'core/parsers/features/imagePack/common.aston.html',
    expectedFirst: {
      footer: {
        domain: 'Wikipedia',
        iconPrefixExpected: 'data:image/png;base64',
        text: 'Aston Martin DB12 - Wikipedia',
      },
      img: {
        srcPrefixExpected: 'data:image/gif;base64',
        text: 'Aston Martin DB12 - Wikipedia',
      },
      link: 'https://en.wikipedia.org/wiki/Aston_Martin_DB12',
    },
    expectedLast: {
      footer: {
        domain: 'Auto Trader',
        iconPrefixExpected: 'data:image/png;base64',
        text: 'Aston Martin | View Latest Models | AutoTrader UK',
      },
      img: {
        srcPrefixExpected: 'data:image/gif;base64',
        text: 'Aston Martin | View Latest Models | AutoTrader UK',
      },
      link: 'https://www.autotrader.co.uk/cars/aston-martin',
    },
  },
];

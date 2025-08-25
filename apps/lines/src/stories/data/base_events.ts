export default {
  reveal: {
    type: "reveal",
    board: [
      [
        { name: "L2" },
        { name: "L1" },
        { name: "H3" },
        { name: "L1" },
        { name: "H2" }
      ],
      [
        { name: "L2" },
        { name: "L1" },
        { name: "L1" },
        { name: "L2" },
        { name: "L1" }
      ],
      [
        { name: "L1" },
        { name: "L2" },
        { name: "L1" },
        { name: "L2" },
        { name: "L1" }
      ]
    ],
    paddingPositions: [68, 157, 161],
    gameType: "basegame",
    anticipation: [0, 0, 0]
  },
  setTotalWin: {
    type: "setTotalWin",
    amount: 2000
  },
  finalWin: {
    type: "finalWin",
    amount: 50000
  },
  winInfo: {
    type: "winInfo",
    totalWin: 600,
    wins: [
      {
        symbol: "L1",
        kind: 3,
        win: 200,
        positions: [
          { reel: 0, row: 1 },
          { reel: 1, row: 1 },
          { reel: 2, row: 1 }
        ],
        meta: {
          lineIndex: 1,
          multiplier: 1,
          winWithoutMult: 200,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
      {
        symbol: "L1",
        kind: 3,
        win: 200,
        positions: [
          { reel: 0, row: 1 },
          { reel: 1, row: 2 },
          { reel: 2, row: 3 }
        ],
        meta: {
          lineIndex: 4,
          multiplier: 1,
          winWithoutMult: 200,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
      {
        symbol: "L1",
        kind: 3,
        win: 200,
        positions: [
          { reel: 0, row: 3 },
          { reel: 1, row: 2 },
          { reel: 2, row: 1 }
        ],
        meta: {
          lineIndex: 5,
          multiplier: 1,
          winWithoutMult: 200,
          globalMult: 1,
          lineMultiplier: 1
        }
      }
    ]
  },
  setWin: {
    type: "setWin",
    amount: 600,
    winLevel: 5
  },
  wincap: {
    type: "wincap",
    amount: 5000
  }
}

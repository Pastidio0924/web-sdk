export default {
  reveal: {
    type: "reveal",
    board: [
					[{ name: 'L2' }, { name: 'L1' }, { name: 'L2' }, { name: 'L1' }, { name: 'L2' }],
					[{ name: 'L2' }, { name: 'H2' }, { name: 'H1' }, { name: 'L2' }, { name: 'H3' }],
					[{ name: 'L1' }, { name: 'L2' }, { name: 'L2' }, { name: 'H3' }, { name: 'L1' }],
				],
		paddingPositions: [110, 163, 100],
		gameType: 'basegame',
		anticipation: [0, 0, 0],
},
  setTotalWin: {
    type: "setTotalWin",
		amount: 400,
  },
  winInfo: {
    type: "winInfo",
    totalWin: 600,
		board: [
			[{ name: 'H1' }, { name: 'L1' }, { name: 'H3' }, { name: 'L1' }, { name: 'L1' }],
			[{ name: 'L1' }, { name: 'L1' }, { name: 'L1' }, { name: 'H1' }, { name: 'L2' }],
			[{ name: 'L2' }, { name: 'L1' }, { name: 'H2' }, { name: 'L1' }, { name: 'H3' }],
		],
		paddingPositions: [110, 163, 100],
		gameType: 'basegame',
		anticipation: [0, 0, 0],
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
		totalWin: 5000,
    amount: 5000,
		winLevel: 5,
		board: [
			[{ name: 'H1' }, { name: 'H1' }, { name: 'H1' }, { name: 'H1' }, { name: 'L1' }],
			[{ name: 'L1' }, { name: 'H1' }, { name: 'H1' }, { name: 'H1' }, { name: 'L2' }],
			[{ name: 'L2' }, { name: 'H1' }, { name: 'H1' }, { name: 'H1' }, { name: 'H3' }],
		],
		paddingPositions: [110, 163, 100],
		gameType: 'basegame',
		anticipation: [0, 0, 0],
    wins: [
      {
        symbol: "H1",
        kind: 3,
        win: 1000,
        positions: [
          { reel: 0, row: 1 },
          { reel: 1, row: 1 },
          { reel: 2, row: 1 }
        ],
        meta: {
          lineIndex: 1,
          multiplier: 1,
          winWithoutMult: 1000,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
			{
        symbol: "H1",
        kind: 3,
        win: 1000,
        positions: [
          { reel: 0, row: 2 },
          { reel: 1, row: 2 },
          { reel: 2, row: 2 }
        ],
        meta: {
          lineIndex: 5,
          multiplier: 1,
          winWithoutMult: 1000,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
			{
        symbol: "H1",
        kind: 3,
        win: 1000,
        positions: [
          { reel: 0, row: 3 },
          { reel: 1, row: 3 },
          { reel: 2, row: 3 }
        ],
        meta: {
          lineIndex: 5,
          multiplier: 1,
          winWithoutMult: 1000,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
      {
        symbol: "H1",
        kind: 3,
        win: 1000,
        positions: [
          { reel: 0, row: 1 },
          { reel: 1, row: 2 },
          { reel: 2, row: 3 }
        ],
        meta: {
          lineIndex: 4,
          multiplier: 1,
          winWithoutMult: 1000,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
      {
        symbol: "H1",
        kind: 3,
        win: 1000,
        positions: [
          { reel: 0, row: 3 },
          { reel: 1, row: 2 },
          { reel: 2, row: 1 }
        ],
        meta: {
          lineIndex: 5,
          multiplier: 1,
          winWithoutMult: 1000,
          globalMult: 1,
          lineMultiplier: 1
        }
      },
    ]
  }
};

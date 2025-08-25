export default {
	providerName: 'sample_provider',
	gameName: 'sample_lines',
	gameID: '0_0_lines',
	rtp: 0.96,
	numReels: 3,
	numRows: [3, 3, 3],
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.96,
			max_win: 50.0,
		},
	},
	paylines: {
		'1': [0, 0, 0],
		'2': [1, 1, 1],
		'3': [2, 2, 2],
		'4': [0, 1, 2],
		'5': [2, 1, 0],
	},
	symbols: {
		L2: {
			paytable: [
				{
					'3': 0.5,
				},
			],
		},
		L1: {
			paytable: [
				{
					'3': 2,
				},
			],
		},
		H3: {
			paytable: [
				{
					'3': 4,
				},
			],
		},
		H2: {
			paytable: [
				{
					'3': 6,
				},
			],
		},
		H1: {
			paytable: [
				{
					'3': 10,
				},
			],
		},
	},
	paddingReels: {
		basegame: [
			// Reel 1
			[
				{ name: 'L1' }, { name: 'L2' }, { name: 'H1' }, { name: 'L1' }, { name: 'H2' }, { name: 'L2' }, { name: 'H3' }, { name: 'L1' }, { name: 'H1' }, { name: 'L2' }, { name: 'H2' }, { name: 'L1' }
			],
			// Reel 2
			[
				{ name: 'L2' }, { name: 'H2' }, { name: 'L1' }, { name: 'H3' }, { name: 'L2' }, { name: 'H1' }, { name: 'L1' }, { name: 'H2' }, { name: 'H3' }, { name: 'L1' }, { name: 'L2' }, { name: 'H1' }
			],
			// Reel 3
			[
				{ name: 'H3' }, { name: 'L2' }, { name: 'H1' }, { name: 'L1' }, { name: 'H2' }, { name: 'L2' }, { name: 'H3' }, { name: 'L1' }, { name: 'H2' }, { name: 'L1' }, { name: 'H1' }, { name: 'L2' }
			],
		],
	},
};

<script lang="ts">
	import { Text } from 'pixi-svelte';
	import { WHITE } from 'constants-shared/colors';

	import UiSprite from './UiSprite.svelte';
	import { UI_BASE_FONT_SIZE } from '../constants';

 type ButtonType = 'pill' | 'square' | 'circle' | 'ghost';

	type Props = {
		label: string;
		value: string;
		tiled?: boolean;
		stacked?: boolean;
		buttonType?: ButtonType
	};

	const props: Props = $props();

	const labelStyle = {
		fontFamily: 'Montserrat',
		fontSize: UI_BASE_FONT_SIZE,
		fill: 0xffff00,
	} as const;

	const valueStyle = {
		fontFamily: 'Montserrat',
		fontSize: UI_BASE_FONT_SIZE,
		fill: 0xffff00,
	} as const;
</script>

{#if props.stacked}
	{#if props.tiled}
		<UiSprite
			y={35}
			anchor={{ x: 0.5, y: 0 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 2 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			backgroundColor={0x000080}
			borderRadius={50}
		/>
	{/if}
	<Text anchor={{ x: 0.5, y: -1.2 }} text={props.label} style={labelStyle} />
	<Text anchor={{ x: 0.5, y: -1.2 }} text={props.value} style={valueStyle} y={UI_BASE_FONT_SIZE} />
{:else}
	{#if props.tiled}
		<UiSprite
			x={-90}
			anchor={{ x: 0, y: 0.5 }}
			key="base_ticker"
			width={UI_BASE_FONT_SIZE * 3 * (326 / 73)}
			height={UI_BASE_FONT_SIZE * 3}
			borderRadius={35}
		/>
	{/if}
	<Text anchor={{ x: 0, y: 0.5 }} text={props.label} style={labelStyle} />
	<Text
		anchor={{ x: 1, y: 0.5 }}
		text={props.value}
		style={valueStyle}
		x={UI_BASE_FONT_SIZE * 10}
	/>
{/if}

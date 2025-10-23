export const CONSTANTS = {
	WALLPAPER_URL: '/img/wallpaper.jpg',
	TITLE: 'Battlefield 1 Skins',
}

export const classes = [
	{label: 'Assault', value: 'assault'},
	{label: 'Medic', value: 'medic'},
	{label: 'Support', value: 'support'},
	{label: 'Scout', value: 'scout'},
	{label: 'Handguns', value: 'handguns'}
]

export const delay = ms => new Promise(res => setTimeout(res, ms))
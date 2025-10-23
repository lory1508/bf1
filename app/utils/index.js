export const CONSTANTS = {
	WALLPAPER_URL: '/img/wallpaper.jpg',
	TITLE: 'Battlefield 1 Skins',
}

export const classes = [
	{alt: 'Assault', value: 'assault', icon: "/img/assault.svg"},
	{alt: 'Medic', value: 'medic', icon: "/img/medic.svg"},
	{alt: 'Support', value: 'support', icon: "/img/support.svg"},
	{alt: 'Scout', value: 'scout', icon: "/img/scout.svg"},
	{alt: 'Handguns', value: 'handguns', icon: "/img/handgun.svg"}
]

export const delay = ms => new Promise(res => setTimeout(res, ms))
export const CONSTANTS = {
  WALLPAPER_URL: "/img/wallpaper.jpg",
  TITLE: "Battlefield 1 Skins",
};

export const classes = [
  { alt: "Home", value: "home", icon: "/img/home.svg" },
  { alt: "Assault", value: "assault", icon: "/img/assault.svg" },
  { alt: "Medic", value: "medic", icon: "/img/medic.svg" },
  { alt: "Support", value: "support", icon: "/img/support.svg" },
  { alt: "Scout", value: "scout", icon: "/img/scout.svg" },
  { alt: "Handguns", value: "handguns", icon: "/img/handgun.svg" },
];

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const goTo = (destination) => {
  return navigateTo({
    path: `/${destination}`,
  });
};

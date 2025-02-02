const icons = {
  home: "./patch/home.svg",
  add: "./patch/add.svg",
  remove: "./patch/remove.svg",
};

type TIcon = typeof icons;

const icon: keyof TIcon = "home";

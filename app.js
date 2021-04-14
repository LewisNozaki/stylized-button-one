const container = document.getElementsByClassName("container")[0];

const btns = document.getElementsByTagName("button");

const createShadow = (num, elem) => {
  let shadow = "";

  for (let i = 0; i <= num; i++) {
    if (i === num) {
      shadow += `${i * -1}px ${i * 1}px 0 #000`;
    } else {
      shadow += `${i * -1}px ${i * 1}px 0 #000,`;
    }
  }

  elem.style.boxShadow = shadow;
};

createShadow(30, container);

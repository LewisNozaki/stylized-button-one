const container = document.getElementsByClassName("container")[0];

const createShadow = (num) => {
  let shadow = "";

  for (let i = 0; i <= num; i++) {
    if (i === num) {
      shadow += `${i * -1}px ${i * 1}px 0 #000`;
    } else {
      shadow += `${i * -1}px ${i * 1}px 0 #000,`;
    }
  }

  container.style.boxShadow = shadow;
};

createShadow(30);

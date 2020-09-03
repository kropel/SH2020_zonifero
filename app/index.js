/**
 * Application entry point
 */

// Load application styles
import "styles/index.scss";

// ================================
// START YOUR APP HERE
// ================================
(() => {
  const featuresCards = [
    {
      title: "Hot-desk booking",
      bgImage: "assets/images/mob_features_bg.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique velit id finibus convallis. Fusce eget purus aliquet libero euismod blandit sed eu enim. Curabitur eget arcu ut augue.",
    },
    {
      title: "Status of employees",
      bgImage:
        "http://felixdepass.com/media/thumbnails/disegno-workspace/FelixdePass_DisegnoDinesen_Workspace_02_HR.jpg.1800x1200_q90_upscale.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique velit id finibus convallis. Fusce eget purus aliquet libero euismod blandit sed eu enim. Curabitur eget arcu ut augue.",
    },
    {
      title: "Request management",
      bgImage:
        "http://felixdepass.com/media/thumbnails/disegno-workspace/FelixdePass_DisegnoDinesen_Workspace_20_HR.jpg.1800x1200_q90_upscale.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique velit id finibus convallis. Fusce eget purus aliquet libero euismod blandit sed eu enim. Curabitur eget arcu ut augue.",
    },
  ];

  let currentCard = 0;
  const leftArrow = document.querySelector(".features__cards__nav__arrow-left");
  const rightArrow = document.querySelector(
    ".features__cards__nav__arrow-right"
  );
  const titleHtml = document.querySelector(
    ".features__cards__card__content__header"
  );
  const bgImageHtml = document.querySelector(
    ".features__cards__card__background-image"
  );
  const contentHtml = document.querySelector(
    ".features__cards__card__content__paragraph"
  );

  titleHtml.ontransitionend = () => {
    if (titleHtml.style.opacity == 0) {
      titleHtml.textContent =
        featuresCards[Math.abs(currentCard % featuresCards.length)].title;
      titleHtml.style.opacity = 1;
    }
  };
  contentHtml.ontransitionend = () => {
    if (contentHtml.style.opacity == 0) {
      contentHtml.textContent =
        featuresCards[Math.abs(currentCard % featuresCards.length)].content;
      contentHtml.style.opacity = 1;
    }
  };

  const setNewCard = () => {
    bgImageHtml.style.backgroundImage = `url(${
      featuresCards[Math.abs(currentCard % featuresCards.length)].bgImage
    })`;
    titleHtml.style.opacity = 0;
    contentHtml.style.opacity = 0;
  };

  leftArrow.addEventListener("click", (event) => {
    currentCard--;
    setNewCard();
  });
  rightArrow.addEventListener("click", (event) => {
    currentCard++;
    setNewCard();
  });
})();

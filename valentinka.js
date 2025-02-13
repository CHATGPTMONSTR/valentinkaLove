document.addEventListener('DOMContentLoaded', () => {
    function openModal(modalClass, openButtonClass, closeButtonClass) {
      const modal = document.querySelector(`.${modalClass}`);
      const openButton = document.querySelector(`.${openButtonClass}`);
      const closeButton = document.querySelector(`.${closeButtonClass}`);
      const container = document.getElementById('congratulations-container');
      const closeModalButton = document.querySelector('.close_modal_button');
  
      if (!modal || !openButton || !closeButton || !container || !closeModalButton) {
        console.error(`Element not found: ${!modal ? modalClass : !openButton ? openButtonClass : !closeButton ? closeButtonClass : !container ? 'congratulations-container' : 'close_modal_button'}`);
        return;
      }
  
      const congratulations = [
        "Желаю счастья и любви!",
        "Ты самая лучшая!",
        "Люблю тебя, котик!",
        "Ты мое счастье!",
        "Ты моя радость!",
        "Ты мое вдохновение!",
        "Ты моя любовь!",
        "Ты мое все!",
        "Ты самая красивая!",
        "Ты самая умная!",
        "Ты самая добрая!",
        "Ты самая нежная!",
        "Ты самая заботливая!",
        "Ты самая лучшая!",
        "Ты моя половинка!",
        "Ты мое сердце!",
        "Ты моя душа!",
        "Ты мое сокровище!",
        "Ты мое чудо!",
        "Ты моя мечта!",
        "Ты моя звезда!",
        "Ты мое солнце!",
        "Ты моя луна!",
        "Ты мое небо!",
        "Ты моя вселенная!",
        "Ты мое вдохновение!",
        "Ты моя муза!",
        "Ты моя радость!",
        "Ты мое счастье!",
        "Ты моя любовь!",
        "Ты мое все!",
        "Ты самая красивая!",
        "Ты самая умная!",
        "Ты самая добрая!",
        "Ты самая нежная!",
        "Ты самая заботливая!",
        "Ты самая лучшая!",
        "Ты моя половинка!",
        "Ты мое сердце!",
        "Ты моя душа!",
        "Ты мое сокровище!",
        "Ты мое чудо!",
        "Ты моя мечта!",
        "Ты моя звезда!",
        "Ты мое солнце!",
        "Ты моя луна!",
        "Ты мое небо!",
        "Ты моя вселенная!",
        "Ты мое вдохновение!",
        "Ты моя муза!",
        "Ты моя радость!",
        "Ты мое счастье!",
        "Ты моя любовь!",
        "Ты мое все!",
        "Ты самая красивая!",
        "Ты самая умная!",
        "Ты самая добрая!",
        "Ты самая нежная!",
        "Ты самая заботливая!",
        "Ты самая лучшая!",
        "Ты моя половинка!",
        "Ты мое сердце!",
        "Ты моя душа!",
        "Ты мое сокровище!",
        "Ты мое чудо!",
        "Ты моя мечта!",
        "Ты моя звезда!",
        "Ты мое солнце!",
        "Ты моя луна!",
        "Ты мое небо!",
        "Ты моя вселенная!",
        "Ты мое вдохновение!",
        "Ты моя муза!",
        "Ты моя радость!",
        "Ты мое счастье!",
        "Ты моя любовь!",
        "Ты мое все!",
        "Ты самая красивая!",
        "Ты самая умная!",
        "Ты самая добрая!",
        "Ты самая нежная!",
        "Ты самая заботливая!",
        "Ты самая лучшая!",
        "Ты моя половинка!",
        "Ты мое сердце!",
        "Ты моя душа!",
        "Ты мое сокровище!",
        "Ты мое чудо!",
        "Ты моя мечта!",
        "Ты моя звезда!",
        "Ты мое солнце!",
        "Ты моя луна!",
        "Ты мое небо!",
        "Ты моя вселенная!"
      ];
  
      openButton.onclick = () => {
        modal.style.display = 'flex';
        container.innerHTML = ''; // Очистить контейнер перед добавлением новых поздравлений
        let index = 0;
        const interval = setInterval(() => {
          if (index < congratulations.length) {
            const p = document.createElement('p');
            p.textContent = congratulations[index];
            container.appendChild(p);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 800);
      };
  
      closeButton.onclick = () => {
        modal.style.display = 'none';
      };
  
      closeModalButton.onclick = () => {
        modal.style.display = 'none';
      };
  
      modal.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  
    window.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    };
  
    openModal('I_want_to_remind_you_that_modal', 'I_want_to_remind_you_thatOPEN', 'close_I_want_to_remind_you_that');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const showVideoButton = document.querySelector('.show_video_button');
    const video = document.getElementById('video');

    showVideoButton.addEventListener('click', () => {
        video.style.display = 'block';
        video.play();
    });
});
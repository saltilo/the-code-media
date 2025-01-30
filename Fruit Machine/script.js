function emojiCode() {
  // Удаляем все элементы с классом .inner
  document.querySelectorAll(".inner").forEach((el) => el.remove());

  // Создаем пустые массивы для хранения эмодзи
  let emojiList01 = [];
  let emojiList02 = [];
  let emojiList03 = [];

  // Массив с кодами эмодзи в формате Unicode
  const emojiValue = [
    "1F95D",
    "1F34B",
    "1F350",
    "1F353",
    "1F34A",
    "1F352",
    "1F348",
    "1F347",
    "1F349",
    "1F34F",
    "1F34E",
    "1F34D",
    "1F345",
    "1F951",
    "1F34C",
    "1F351",
    "1F346",
    "1F955",
    "1F344",
    "1F952",
  ];

  // Функция для генерации случайного эмодзи и добавления его в массив
  function generateEmoji(emojiList) {
    // Выбираем случайный код эмодзи из массива emojiValue
    const emojiSingle =
      emojiValue[Math.floor(Math.random() * emojiValue.length)];

    // Добавляем эмодзи в массив, используя HTML-код &#x...; для отображения Unicode-символов
    emojiList.push(`&#x${emojiSingle};`);
  }

  // Количество эмодзи, которые нужно сгенерировать для каждого списка
  const n = 11;

  // Заполняем каждый массив 11 случайными эмодзи
  for (let i = 0; i < n; i++) {
    generateEmoji(emojiList01);
    generateEmoji(emojiList02);
    generateEmoji(emojiList03);
  }

  // Обновляем содержимое элементов с классами .first, .second и .third,
  // вставляя внутрь два дива с классом .inner, содержащие эмодзи из соответствующих массивов
  document.querySelector(".first").innerHTML = `
    <div class="inner">${emojiList01.join("")}</div>
    <div class="inner">${emojiList01.join("")}</div>
  `;
  document.querySelector(".second").innerHTML = `
    <div class="inner">${emojiList02.join("")}</div>
    <div class="inner">${emojiList02.join("")}</div>
  `;
  document.querySelector(".third").innerHTML = `
    <div class="inner">${emojiList03.join("")}</div>
    <div class="inner">${emojiList03.join("")}</div>
  `;
}

// Запуск функции emojiCode после полной загрузки документа
document.addEventListener("DOMContentLoaded", emojiCode);

// Получаем кнопку с классом .controls для управления процессом
const btnReload = document.querySelector(".controls");

// Добавляем обработчик события клика на кнопку
btnReload.addEventListener("click", function (e) {
  // Предотвращаем стандартное поведение кнопки
  e.preventDefault();

  // Удаляем все элементы с классом .reel если есть
  document.querySelectorAll(".reel").forEach((el) => el.remove());

  // Добавляем в .container три новых div-элемента с классами .reel (first, second, third),
  // которые затем будут заполнены эмодзи в emojiCode()
  document.querySelector(".container").innerHTML = `
    <div class="reel first"></div>
    <div class="reel second"></div>
    <div class="reel third"></div>
  `;

  // Повторно запускаем emojiCode для обновления эмодзи
  emojiCode();
});

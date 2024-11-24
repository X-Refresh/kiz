document.addEventListener("DOMContentLoaded", () => {
  // Элементы на странице
  const startScreen = document.getElementById("start-screen")
  const quizScreen = document.getElementById("quiz-screen")
  const resultScreen = document.getElementById("result-screen")
  const startButton = document.getElementById("start-btn")
  const restartButton = document.getElementById("restart-btn")
  const questionText = document.getElementById("question-text")
  const answerButtons = document.getElementById("answer-buttons")
  const scoreText = document.getElementById("score-text")

  // Массив вопросов и ответов
  const questions = [
    {
      question:
        "В 1933 году Гитлер путём демократических выборов пришёл к власти, а его государство стало называться.",
      answers: [
        "Веймарская республика",
        "Германское государство",
        "Третий рейх",
        "Германия",
      ],
      correct: 2,
    },
    {
      question:
        "Какой фактический режим был установлен при правлении Адольфа Гитлера в Третьем рейхе?",
      answers: ["Фашистский", "Ультраправый", "Шовинистский", "Нацистский"],
      correct: 3,
    },
    {
      question: "В 1938 году Адольф Гитлер завершил Аншлюс. Что это?",
      answers: [
        "Мирное включение Чехословакии в состав Германии",
        "Мирное включение Австрии в состав Германии",
        "План подготовки нападения немецких войск на СССР",
        "План подготовки нападения немецких войск на Польшу",
      ],
      correct: 1,
    },
    {
      question:
        "30 сентября 1938 года было подписано позорное Мюнхенское соглашение. А что же в нём позорного?",
      answers: [
        "Австрия полностью утратила свою независимость перед Германией",
        "Чехословакия уступила Германии Судетскую область",
        "Германия полностью утратила свою независимость перед Австрией",
        "Польша уступила Данциг в пользу Германии",
      ],
      correct: 1,
    },
    {
      question:
        "К началу Второй мировой войны Третий рейх мирным путём (без военной агрессии) аннексировал",
      answers: [
        "Австрию, Чехословакию и Польшу",
        "Австрию",
        "Чехословакию",
        "Австрию и Чехословакию",
      ],
      correct: 3,
    },
    {
      question: "Назовите дату Второй мировой войны",
      answers: [
        "22 июня 1941 - 29 августа 1945",
        "22 июня 1941 - 9 мая 1945",
        "1 сентября 1939 - 29 августа 1945",
        "1 сентября 1939 - 2 сентября 1945",
      ],
      correct: 3,
    },
    {
      question: "Назовите дату Великой отечественной войны",
      answers: [
        "22 июля 1939 - 9 мая 1945",
        "22 июня 1941 - 9 мая 1945",
        "22 июня 1939 - 9 мая 1945",
        "22 июля 1941 - 9 мая 1945",
      ],
      correct: 1,
    },
    {
      question:
        "23 августа 1939 года был подписан пакт Молотова - Риббентропа. В чём заключалась его основная суть?",
      answers: [
        "Договор об обмене танковыми технологиями между Германией и Советским Союзом",
        "Договор об обмене советской нефти на немецкую технику между Германией и Советским Союзом",
        "Договор о ненападении между Германией и Советским Союзом",
        "Договор о совместном разделении территории Польши между Германией и Советским Союзом",
      ],
      correct: 2,
    },
    {
      question:
        "Секретный дополнительный протокол к пакту Молотова - Риббентропа между Германией и СССР",
      answers: [
        "Определял «границы сфер интересов» сторон в Прибалтийских государствах и Польше",
        "Обязывал нападать СССР совместно с Третьим рейхом на Польшу",
        "Обязывал СССР объявлять войну любому государству, которое нападёт на Третий рейх",
        "Определял дату и место совместного парада СССР и Третьего рейха после успешного захвата Польши",
      ],
      correct: 0,
    },
    {
      question:
        "Помимо Третьего рейха, Италии и Японской империи, в Ось также входили следующие страны",
      answers: [
        "Румыния, Венгрия, Люксембург, Дания, Норвегия",
        "Словакия, Хорватия, Испания, Румыния, Болгария",
        "Хорватия, Венгрия, Румыния, Болгария, Словакия",
        "Болгария, Испания, Венгрия, Румыния, Португалия",
      ],
      correct: 2,
    },
    {
      question: "1 сентября 1939 года Третий рейх напал на",
      answers: ["СССР", "Чехословакию", "Францию", "Польшу"],
      correct: 3,
    },
    {
      question:
        "Какое кодовое название носил нереализованный план высадки немецких войск на Британские острова?",
      answers: ["Волчья стая", "Жало скорпиона", "Ночная чайка", "Морской лев"],
      correct: 3,
    },
    {
      question:
        "Какая из этих стран капитулировала перед агрессией Третьего рейха наиболее быстро",
      answers: ["Дания", "Франция", "Греция", "Польша"],
      correct: 0,
    },
    {
      question:
        "22 июня 1940 года Франция капитулировала перед Германией, но особенно позорным в этом процессе было",
      answers: [
        "Лидер Франции был вынужден встать на колени перед Гитлером",
        "Капитуляция подписана в том же вагоне, в котором была подписана капитуляция Германии в 1918 году",
        "Капитуляция была подписана кровью французского солдата",
        "Франция обязалась передать Гитлеру весь свой флот, танки и крупные орудия",
      ],
      correct: 1,
    },
    {
      question:
        "В период с 30 ноября 1939 года по 13 марта 1940 года проходила Зимняя война между",
      answers: [
        "Финляндией и СССР",
        "Данией и Третьим рейхом",
        "Японией и СССР",
        "Норвегией и Третьим рейхом",
      ],
      correct: 0,
    },
  ]

  let currentQuestionIndex = 0
  let score = 0

  // Обработчик для кнопки "Начать"
  startButton.addEventListener("click", startQuiz)
  restartButton.addEventListener("click", restartQuiz)

  // Запуск квиза
  function startQuiz() {
    startScreen.classList.add("hidden")
    quizScreen.classList.remove("hidden")
    currentQuestionIndex = 0
    score = 0
    showQuestion()
  }

  // Показать следующий вопрос
  function showQuestion() {
    resetState()
    const question = questions[currentQuestionIndex]
    questionText.innerText = question.question

    question.answers.forEach((answer, index) => {
      const button = document.createElement("button")
      button.innerText = answer
      button.addEventListener("click", () =>
        selectAnswer(index === question.correct),
      )
      answerButtons.appendChild(button)
    })
  }

  // Сброс состояния экрана ответов
  function resetState() {
    answerButtons.innerHTML = ""
  }

  // Выбор ответа
  function selectAnswer(isCorrect) {
    if (isCorrect) score++
    currentQuestionIndex++

    if (currentQuestionIndex < questions.length) {
      showQuestion()
    } else {
      showResult()
    }
  }

  // Показать результат
  function showResult() {
    quizScreen.classList.add("hidden")
    resultScreen.classList.remove("hidden")
    scoreText.innerText = `Вы набрали ${score} из ${questions.length} баллов!`
  }

  // Перезапуск квиза
  function restartQuiz() {
    resultScreen.classList.add("hidden")
    startScreen.classList.remove("hidden")
  }
})

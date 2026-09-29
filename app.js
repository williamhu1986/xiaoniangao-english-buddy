const curriculum = [
  {
    unit: 1,
    question: "What is your family like?",
    words: "grandma · dad · grandpa · mum · brother · sister",
    story: "Grandma's magic pot",
    letters: "Aa · Bb · Cc · Dd",
  },
  {
    unit: 2,
    question: "How are you today?",
    words: "cold · hot · thirsty · hungry",
    story: "On the farm",
    letters: "Ee · Ff · Gg · Hh",
  },
  {
    unit: 3,
    question: "What do you take to school?",
    words: "pencil case · eraser · pencil · ruler · one–four",
    story: "Mary's pencil case",
    letters: "Ii · Jj · Kk · Ll",
  },
  {
    unit: 4,
    question: "What can you do?",
    words: "draw · write · read · sing · dance",
    story: "The talent show",
    letters: "Mm · Nn · Oo · Pp",
  },
  {
    unit: 5,
    question: "What is your favourite animal?",
    words: "dog · cat · fish · bird · hamster · tortoise",
    story: "In the garden",
    letters: "Qq · Rr · Ss · Tt",
  },
  {
    unit: 6,
    question: "What colours can you see?",
    words: "red · white · yellow · green · blue · black",
    story: "In the park",
    letters: "Uu · Vv · Ww · Xx · Yy · Zz",
  },
];

const lessonSets = {
  words: [
    {
      type: "listen",
      title: "听一听，选出你听到的感受",
      audio: "I'm cold.",
      scene: "🥶",
      options: [["🥶", "I'm cold."], ["🥵", "I'm hot."], ["🥤", "I'm thirsty."]],
      answer: 0,
    },
    {
      type: "choice",
      title: "天气很热时，应该怎么说？",
      scene: "☀️",
      speech: "太阳晒得我好热！",
      options: [["❄️", "I'm cold."], ["☀️", "I'm hot."], ["🍞", "I'm hungry."]],
      answer: 1,
    },
    {
      type: "choice",
      title: "选出“我渴了”",
      scene: "🥤",
      options: [["🍎", "I'm hungry."], ["🥤", "I'm thirsty."], ["😊", "I'm happy."]],
      answer: 1,
    },
    {
      type: "speak",
      title: "大声说出这句话",
      phrase: "I'm hungry.",
      hint: "我饿了。",
    },
    {
      type: "order",
      title: "排列成正确的句子",
      translation: "我今天很好。",
      words: ["fine", "I'm", "today"],
      answerText: "I'm fine today",
    },
  ],
  story: [
    {
      type: "listen",
      title: "农场里，兔子怎么了？",
      audio: "I'm hungry.",
      scene: "🐰",
      speech: "How are you?",
      options: [["🥵", "I'm hot."], ["🍎", "I'm hungry."], ["🥶", "I'm cold."]],
      answer: 1,
    },
    {
      type: "choice",
      title: "小牛又热又渴，选出正确表达",
      scene: "🐮",
      options: [["☀️🥤", "I'm hot and thirsty."], ["❄️", "I'm cold."], ["😊", "I'm happy."]],
      answer: 0,
    },
    {
      type: "listen",
      title: "听声音，选出正确回答",
      audio: "I'm cold.",
      scene: "🐷",
      speech: "How are you today?",
      options: [["🥶", "I'm cold."], ["🥵", "I'm hot."], ["🥤", "I'm thirsty."]],
      answer: 0,
    },
    {
      type: "order",
      title: "帮小鸡排好句子",
      translation: "我又饿又渴。",
      words: ["thirsty", "hungry", "I'm", "and"],
      answerText: "I'm hungry and thirsty",
    },
    {
      type: "speak",
      title: "问问农场伙伴",
      phrase: "How are you today?",
      hint: "你今天好吗？",
    },
    {
      type: "choice",
      title: "对方说“I'm thirsty.”，你可以怎么帮助？",
      scene: "🥤",
      options: [["💧", "Have some water."], ["🧣", "Put on your coat."], ["👋", "Goodbye."]],
      answer: 0,
    },
  ],
  game: [
    {
      type: "choice",
      title: "看表情，猜一猜",
      scene: "🥶",
      options: [["", "Are you cold?"], ["", "Are you hungry?"], ["", "Are you happy?"]],
      answer: 0,
    },
    {
      type: "listen",
      title: "听回答，选出对应图片",
      audio: "Yes. I'm thirsty.",
      options: [["🥤", "thirsty"], ["🍜", "hungry"], ["🧥", "cold"]],
      answer: 0,
    },
    {
      type: "speak",
      title: "轮到你来猜",
      phrase: "Are you hot?",
      hint: "你热吗？",
    },
    {
      type: "order",
      title: "排列成正确的回答",
      translation: "是的，我很热。",
      words: ["hot", "Yes", "I'm"],
      answerText: "Yes I'm hot",
    },
    {
      type: "choice",
      title: "选择礼貌回应",
      speech: "Are you hungry?",
      options: [["👍", "Yes, I am."], ["👎", "No, I'm not."], ["👋", "Good morning."]],
      answer: 0,
    },
  ],
  extended: [
    {
      type: "listen",
      title: "故事开始时，兔子感觉怎么样？",
      audio: "I'm happy.",
      scene: "🐇",
      options: [["😊", "happy"], ["🥵", "hot"], ["😴", "tired"]],
      answer: 0,
    },
    {
      type: "choice",
      title: "兔子跑了一会儿，他说什么？",
      scene: "🐇💨",
      options: [["😴", "I'm tired."], ["🥶", "I'm cold."], ["🍎", "I'm hungry."]],
      answer: 0,
    },
    {
      type: "order",
      title: "乌龟准备起跑",
      translation: "一、二、三，跑！",
      words: ["three", "Run", "One", "two"],
      answerText: "One two three Run",
    },
    {
      type: "listen",
      title: "听一听，谁赢了？",
      audio: "Tortoise wins.",
      scene: "🐢🏆",
      options: [["🐢", "The tortoise."], ["🐇", "The rabbit."], ["🐔", "The hen."]],
      answer: 0,
    },
    {
      type: "speak",
      title: "为乌龟加油",
      phrase: "Run! Run! You can do it!",
      hint: "跑呀！你能做到！",
    },
  ],
  letters: [
    {
      type: "listen",
      title: "听音选字母",
      audio: "E. Elephant.",
      options: [["🐘", "Ee"], ["🐸", "Ff"], ["🦒", "Gg"]],
      answer: 0,
    },
    {
      type: "choice",
      title: "frog 以哪个字母开头？",
      scene: "🐸",
      options: [["", "Ee"], ["", "Ff"], ["", "Hh"]],
      answer: 1,
    },
    {
      type: "choice",
      title: "选出 Gg 对应的动物",
      options: [["🐘", "elephant"], ["🦒", "giraffe"], ["🐔", "hen"]],
      answer: 1,
    },
    {
      type: "speak",
      title: "跟读字母和单词",
      phrase: "H. Hen.",
      hint: "Hh · hen 母鸡",
    },
    {
      type: "write",
      title: "写出 elephant 的首字母",
      scene: "🐘",
      answerText: "e",
      placeholder: "输入字母",
    },
  ],
};

const state = {
  page: "learn",
  lessonKey: "",
  questions: [],
  index: 0,
  selected: null,
  ordered: [],
  recorded: false,
  answered: false,
  finished: false,
  correct: 0,
  hearts: 5,
  stars: Number(localStorage.getItem("buddy-stars") || 46),
  unitProgress: Number(localStorage.getItem("buddy-unit2-progress") || 1),
  dailyDone: Number(localStorage.getItem("buddy-daily-count") || 7),
};

const lessonDialog = document.querySelector("#lessonDialog");
const guideDialog = document.querySelector("#guideDialog");
const exercise = document.querySelector("#exercise");
const answerBar = document.querySelector("#answerBar");
const answerMessage = document.querySelector("#answerMessage");
const checkButton = document.querySelector("#checkButton");
const lessonProgress = document.querySelector("#lessonProgress");
let toastTimer;

function init() {
  renderCourse();
  updateDashboard();
  updatePath();
  registerServiceWorker();
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  lessonDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLesson();
  });
  guideDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    guideDialog.close();
  });
  createIcons();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app remains usable online when service-worker registration is unavailable.
    });
  });
}

function handleClick(event) {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    event.preventDefault();
    navigate(nav.dataset.nav);
    return;
  }

  const lesson = event.target.closest("[data-lesson]");
  if (lesson) {
    openPathLesson(lesson.dataset.lesson);
    return;
  }

  const option = event.target.closest("[data-option]");
  if (option && !state.answered) {
    selectOption(option);
    return;
  }

  const word = event.target.closest("[data-word-index]");
  if (word && !state.answered) {
    toggleWord(Number(word.dataset.wordIndex));
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;
  const actions = {
    "unit-guide": () => guideDialog.showModal(),
    "close-guide": () => guideDialog.close(),
    "start-current": () => {
      guideDialog.close();
      startLesson("story", lessonSets.story);
    },
    "close-lesson": closeLesson,
    "play-sound": () => speak(action.dataset.audio),
    "record": () => recordAnswer(action),
    "check-answer": checkOrContinue,
    "daily-practice": startDailyPractice,
    "quick-listen": startListeningPractice,
    "quick-speak": startSpeakingPractice,
    "exam-preview": showExamPreview,
  };
  actions[action.dataset.action]?.();
}

function handleInput(event) {
  if (event.target.matches("#writeAnswer")) {
    checkButton.disabled = !event.target.value.trim();
  }
}

function navigate(page) {
  state.page = page;
  document.querySelectorAll(".page").forEach((item) => item.classList.toggle("active", item.dataset.page === page));
  document.querySelectorAll("[data-nav]").forEach((item) => item.classList.toggle("active", item.dataset.nav === page));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCourse() {
  const list = document.querySelector("#courseList");
  list.innerHTML = curriculum.map((item) => {
    const status = item.unit === 1 ? "done" : item.unit === 2 ? "current" : "locked";
    const icon = status === "done" ? "circle-check-big" : status === "current" ? "play" : "lock";
    const label = status === "done" ? "已完成" : status === "current" ? "正在学习" : "未解锁";
    return `
      <article class="course-unit ${status}">
        <span class="course-number">${item.unit}</span>
        <div class="course-copy">
          <small>UNIT ${item.unit} · ${label}</small>
          <strong>${item.question}</strong>
          <span>${item.words}</span>
        </div>
        <i class="course-state" data-lucide="${icon}"></i>
      </article>`;
  }).join("");
}

function updateDashboard() {
  document.querySelector("#starCount").textContent = state.stars;
  document.querySelector("#goalDone").textContent = state.dailyDone;
  document.querySelector("#unitProgress").textContent = Math.min(state.unitProgress, 5);
}

function updatePath() {
  const keys = ["words", "story", "game", "extended", "letters"];
  document.querySelectorAll(".path-stop").forEach((stop, index) => {
    stop.classList.remove("complete", "current", "locked");
    if (index < state.unitProgress) stop.classList.add("complete");
    else if (index === state.unitProgress) stop.classList.add("current");
    else stop.classList.add("locked");

    const node = stop.querySelector(".lesson-node");
    const icon = index < state.unitProgress ? "check" : getLessonIcon(keys[index]);
    node.innerHTML = `<i data-lucide="${icon}"></i>`;
  });
  document.querySelectorAll(".start-flag").forEach((item) => item.remove());
  const current = document.querySelector(".path-stop.current");
  if (current) current.insertAdjacentHTML("beforeend", '<span class="start-flag">开始</span>');
  createIcons();
}

function getLessonIcon(key) {
  return { words: "message-circle", story: "book-open", game: "gamepad-2", extended: "rabbit", letters: "gift" }[key];
}

function openPathLesson(key) {
  const keys = ["words", "story", "game", "extended", "letters"];
  const index = keys.indexOf(key);
  if (index > state.unitProgress) {
    showToast("先完成前一关，就能解锁这里");
    return;
  }
  startLesson(key, lessonSets[key]);
}

function startLesson(key, questions) {
  state.lessonKey = key;
  state.questions = questions.map((question) => ({ ...question }));
  state.index = 0;
  state.correct = 0;
  state.hearts = 5;
  resetQuestionState();
  renderQuestion();
  lessonDialog.showModal();
  document.body.style.overflow = "hidden";
}

function startDailyPractice() {
  const pool = [...lessonSets.words, ...lessonSets.story, ...lessonSets.game, ...lessonSets.extended, ...lessonSets.letters];
  const questions = Array.from({ length: 20 }, (_, index) => ({ ...pool[index % pool.length] }));
  startLesson("daily", questions);
}

function startListeningPractice() {
  const pool = [...lessonSets.words, ...lessonSets.story, ...lessonSets.extended].filter((item) => item.type === "listen");
  startLesson("listen", Array.from({ length: 5 }, (_, index) => ({ ...pool[index % pool.length] })));
}

function startSpeakingPractice() {
  const pool = [...lessonSets.words, ...lessonSets.story, ...lessonSets.game, ...lessonSets.extended, ...lessonSets.letters].filter((item) => item.type === "speak");
  startLesson("speak", Array.from({ length: 5 }, (_, index) => ({ ...pool[index % pool.length] })));
}

function resetQuestionState() {
  state.selected = null;
  state.ordered = [];
  state.recorded = false;
  state.answered = false;
  state.finished = false;
  answerBar.className = "answer-bar";
  answerMessage.innerHTML = "";
  checkButton.textContent = "检查";
  checkButton.disabled = true;
}

function renderQuestion() {
  resetQuestionState();
  const question = state.questions[state.index];
  lessonProgress.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  document.querySelector("#lessonHearts").textContent = state.hearts;

  let body = "";
  if (question.type === "listen") {
    body = `
      <div class="prompt-scene">
        ${question.scene ? `<span class="scene-emoji">${question.scene}</span>` : ""}
        <button class="sound-button" type="button" data-action="play-sound" data-audio="${escapeAttr(question.audio)}" aria-label="播放音频">
          <i data-lucide="volume-2"></i>
        </button>
        ${question.speech ? `<span class="speech-bubble">${question.speech}</span>` : ""}
      </div>
      ${renderOptions(question.options)}`;
  } else if (question.type === "choice") {
    body = `
      ${question.scene || question.speech ? `
        <div class="prompt-scene">
          ${question.scene ? `<span class="scene-emoji">${question.scene}</span>` : ""}
          ${question.speech ? `<span class="speech-bubble">${question.speech}</span>` : ""}
        </div>` : ""}
      ${renderOptions(question.options)}`;
  } else if (question.type === "speak") {
    body = `
      <div class="record-zone">
        <div class="record-word">${question.phrase}</div>
        <p>${question.hint}</p>
        <button class="record-button" type="button" data-action="record" aria-label="开始录音"><i data-lucide="mic-2"></i></button>
        <p>按一下麦克风，再大声读出来</p>
      </div>`;
  } else if (question.type === "order") {
    body = `
      <div class="prompt-scene"><span class="speech-bubble">${question.translation}</span></div>
      <div class="sentence-line" id="sentenceLine"></div>
      <div class="word-bank">
        ${question.words.map((word, index) => `<button class="word-chip" type="button" data-word-index="${index}">${word}</button>`).join("")}
      </div>`;
  } else {
    body = `
      ${question.scene ? `<div class="prompt-scene"><span class="scene-emoji">${question.scene}</span></div>` : ""}
      <input class="write-input" id="writeAnswer" autocomplete="off" autocapitalize="none" placeholder="${question.placeholder || "输入答案"}" aria-label="输入答案">`;
  }

  exercise.innerHTML = `
    <span class="exercise-kicker">第 ${state.index + 1} / ${state.questions.length} 题</span>
    <h1>${question.title}</h1>
    ${body}`;
  createIcons();
}

function renderOptions(options) {
  return `<div class="answer-options">${options.map(([emoji, label], index) => `
    <button class="answer-option" type="button" data-option="${index}">
      <span class="answer-emoji">${emoji || String.fromCharCode(65 + index)}</span>
      <span>${label}</span>
    </button>`).join("")}</div>`;
}

function selectOption(button) {
  document.querySelectorAll(".answer-option").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  state.selected = Number(button.dataset.option);
  checkButton.disabled = false;
}

function toggleWord(index) {
  const question = state.questions[state.index];
  const existing = state.ordered.indexOf(index);
  if (existing >= 0) state.ordered.splice(existing, 1);
  else state.ordered.push(index);
  document.querySelectorAll("[data-word-index]").forEach((button) => {
    button.classList.toggle("used", state.ordered.includes(Number(button.dataset.wordIndex)));
  });
  document.querySelector("#sentenceLine").innerHTML = state.ordered.map((item) => `<button class="word-chip" type="button" data-word-index="${item}">${question.words[item]}</button>`).join("");
  checkButton.disabled = state.ordered.length === 0;
}

function recordAnswer(button) {
  if (state.recorded) return;
  state.recorded = true;
  button.classList.add("recording");
  button.innerHTML = '<i data-lucide="audio-lines"></i>';
  createIcons();
  speak(state.questions[state.index].phrase);
  setTimeout(() => {
    button.classList.remove("recording");
    button.innerHTML = '<i data-lucide="check"></i>';
    checkButton.disabled = false;
    createIcons();
  }, 1300);
}

function checkOrContinue() {
  if (state.finished) {
    finishLesson();
    return;
  }
  if (state.answered) {
    nextQuestion();
    return;
  }

  const question = state.questions[state.index];
  let correct = false;
  let correctText = "";

  if (question.type === "choice" || question.type === "listen") {
    correct = state.selected === question.answer;
    correctText = question.options[question.answer][1];
    const options = document.querySelectorAll(".answer-option");
    options[question.answer]?.classList.add("correct");
    if (!correct) options[state.selected]?.classList.add("wrong");
  } else if (question.type === "speak") {
    correct = state.recorded;
    correctText = "发音清楚，继续保持";
  } else if (question.type === "order") {
    const response = state.ordered.map((index) => question.words[index]).join(" ");
    correct = normalize(response) === normalize(question.answerText);
    correctText = question.answerText;
  } else {
    const input = document.querySelector("#writeAnswer");
    correct = normalize(input.value) === normalize(question.answerText);
    correctText = question.answerText.toUpperCase();
  }

  state.answered = true;
  if (correct) {
    state.correct += 1;
    answerBar.classList.add("correct");
    answerMessage.innerHTML = `<strong>太棒了！</strong><span>${correctText}</span>`;
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    document.querySelector("#lessonHearts").textContent = state.hearts;
    answerBar.classList.add("wrong");
    answerMessage.innerHTML = `<strong>再记一下</strong><span>正确答案：${correctText}</span>`;
  }
  checkButton.disabled = false;
  checkButton.textContent = state.index === state.questions.length - 1 ? "查看结果" : "继续";
}

function nextQuestion() {
  state.index += 1;
  if (state.index >= state.questions.length) renderResult();
  else renderQuestion();
}

function renderResult() {
  const total = state.questions.length;
  const gained = state.correct * 2;
  state.stars += gained;
  localStorage.setItem("buddy-stars", state.stars);

  if (state.lessonKey === "daily") {
    state.dailyDone = 20;
    localStorage.setItem("buddy-daily-count", "20");
  } else {
    const keys = ["words", "story", "game", "extended", "letters"];
    const completedIndex = keys.indexOf(state.lessonKey);
    if (completedIndex >= 0 && completedIndex >= state.unitProgress) {
      state.unitProgress = Math.min(5, completedIndex + 1);
      localStorage.setItem("buddy-unit2-progress", state.unitProgress);
    }
  }

  lessonProgress.style.width = "100%";
  state.finished = true;
  exercise.innerHTML = `
    <div class="result-screen">
      <div class="result-badge"><i data-lucide="star"></i></div>
      <span class="exercise-kicker">本次练习完成</span>
      <h1>${state.correct >= total * .8 ? "表现出色，小年糕！" : "完成就是进步！"}</h1>
      <p>教材里的内容又熟悉了一遍。</p>
      <div class="result-stats">
        <div><strong>${state.correct}/${total}</strong><span>答对题目</span></div>
        <div><strong>+${gained}</strong><span>获得星星</span></div>
        <div><strong>${state.hearts}</strong><span>剩余爱心</span></div>
      </div>
    </div>`;
  answerBar.className = "answer-bar";
  answerMessage.innerHTML = "";
  checkButton.disabled = false;
  checkButton.textContent = "完成";
  createIcons();
}

function finishLesson() {
  closeLesson();
  updateDashboard();
  updatePath();
  showToast("学习记录已保存，获得新星星");
}

function closeLesson() {
  if (lessonDialog.open) lessonDialog.close();
  speechSynthesis.cancel();
  document.body.style.overflow = "";
}

function showExamPreview() {
  showToast("月度挑战将在完成 Unit 2 后开放");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast(text);
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.72;
  utterance.pitch = 1.05;
  speechSynthesis.speak(utterance);
}

function normalize(value) {
  return String(value).toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " ").trim();
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function createIcons() {
  if (window.lucide) lucide.createIcons();
}

init();

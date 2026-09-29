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
      audio: "F. Frog.",
      scene: "🐸",
      options: [["", "Ee"], ["", "Ff"], ["", "Hh"]],
      answer: 1,
    },
    {
      type: "choice",
      title: "选出 Gg 对应的动物",
      audio: "G. Giraffe.",
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
      audio: "E. Elephant.",
      scene: "🐘",
      answerText: "e",
      placeholder: "输入字母",
    },
  ],
};

const state = {
  page: "learn",
  user: "",
  lessonKey: "",
  questions: [],
  index: 0,
  selected: null,
  ordered: [],
  recorded: false,
  answered: false,
  finished: false,
  reviewMode: false,
  correct: 0,
  hearts: 5,
  stars: 0,
  unitProgress: 0,
  dailyDone: 0,
  responses: [],
  history: {},
};

const lessonDialog = document.querySelector("#lessonDialog");
const guideDialog = document.querySelector("#guideDialog");
const courseDialog = document.querySelector("#courseDialog");
const accountDialog = document.querySelector("#accountDialog");
const coursePreview = document.querySelector("#coursePreview");
const exercise = document.querySelector("#exercise");
const answerBar = document.querySelector("#answerBar");
const answerMessage = document.querySelector("#answerMessage");
const checkButton = document.querySelector("#checkButton");
const lessonProgress = document.querySelector("#lessonProgress");
const authGate = document.querySelector("#authGate");
const authForm = document.querySelector("#authForm");
const authUsername = document.querySelector("#authUsername");
const authPassword = document.querySelector("#authPassword");
const authConfirm = document.querySelector("#authConfirm");
const confirmField = document.querySelector("#confirmField");
const authError = document.querySelector("#authError");
const authSubmit = document.querySelector("#authSubmit");
const authSwitch = document.querySelector("#authSwitch");
const app = document.querySelector("#app");
let toastTimer;
let authMode = "login";
let preferredVoice = null;
let audioContext = null;

function init() {
  renderCourse();
  registerServiceWorker();
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  authForm.addEventListener("submit", handleAuthSubmit);
  authSwitch.addEventListener("click", toggleAuthMode);
  lessonDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLesson();
  });
  guideDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    guideDialog.close();
  });
  courseDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    courseDialog.close();
  });
  accountDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    accountDialog.close();
  });
  prepareVoices();
  if ("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged", prepareVoices);
  restoreSession();
  createIcons();
}

function restoreSession() {
  const username = sessionStorage.getItem("buddy-session-v1");
  const account = getAccounts()[username];
  if (username && account) {
    enterApp(username);
    return;
  }
  showAuth();
}

function showAuth() {
  state.user = "";
  authMode = "login";
  confirmField.hidden = true;
  authConfirm.required = false;
  authPassword.autocomplete = "current-password";
  authSubmit.textContent = "登录";
  authSwitch.textContent = "没有账号？创建账号";
  authError.textContent = "";
  authGate.hidden = false;
  app.classList.add("auth-hidden");
  authPassword.value = "";
  authConfirm.value = "";
  setTimeout(() => authUsername.focus(), 0);
}

function enterApp(username) {
  state.user = username;
  sessionStorage.setItem("buddy-session-v1", username);
  loadUserData();
  document.querySelector("#accountName").textContent = username;
  authGate.hidden = true;
  app.classList.remove("auth-hidden");
  renderCourse();
  updateDashboard();
  updatePath();
  createIcons();
}

function toggleAuthMode() {
  authMode = authMode === "login" ? "register" : "login";
  const registering = authMode === "register";
  confirmField.hidden = !registering;
  authConfirm.required = registering;
  authPassword.autocomplete = registering ? "new-password" : "current-password";
  authSubmit.textContent = registering ? "创建账号" : "登录";
  authSwitch.textContent = registering ? "已有账号？返回登录" : "没有账号？创建账号";
  authError.textContent = "";
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const username = authUsername.value.trim();
  const password = authPassword.value;
  const accounts = getAccounts();
  authError.textContent = "";

  if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,20}$/.test(username)) {
    authError.textContent = "账号需为 2-20 位中文、字母、数字或下划线";
    return;
  }
  if (password.length < 6) {
    authError.textContent = "密码至少需要 6 位";
    return;
  }

  authSubmit.disabled = true;
  try {
    if (authMode === "register") {
      if (accounts[username]) throw new Error("这个账号已经存在");
      if (password !== authConfirm.value) throw new Error("两次输入的密码不一致");
      const salt = createSalt();
      accounts[username] = { salt, hash: await hashPassword(password, salt) };
      localStorage.setItem("buddy-accounts-v1", JSON.stringify(accounts));
    } else {
      const account = accounts[username];
      if (!account || await hashPassword(password, account.salt) !== account.hash) {
        throw new Error("账号或密码不正确");
      }
    }
    authForm.reset();
    enterApp(username);
  } catch (error) {
    authError.textContent = error.message || "暂时无法登录，请稍后重试";
  } finally {
    authSubmit.disabled = false;
  }
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem("buddy-accounts-v1") || "{}");
  } catch {
    return {};
  }
}

function createSalt() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return btoa(String.fromCharCode(...bytes));
}

async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function userStorageKey(name) {
  return `buddy-${name}-v2:${state.user}`;
}

function loadUserData() {
  state.stars = Number(localStorage.getItem(userStorageKey("stars")) || 0);
  state.unitProgress = Number(localStorage.getItem(userStorageKey("unit2-progress")) || 0);
  state.dailyDone = Number(localStorage.getItem(userStorageKey("daily-count")) || 0);
  try {
    state.history = JSON.parse(localStorage.getItem(userStorageKey("history")) || "{}");
  } catch {
    state.history = {};
  }
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

  const unitPreview = event.target.closest("[data-unit-preview]");
  if (unitPreview) {
    openUnitPreview(Number(unitPreview.dataset.unitPreview));
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
    "close-course-preview": () => courseDialog.close(),
    "course-primary": () => handleCoursePrimary(Number(action.dataset.unit), action.dataset.status),
    "start-current": () => {
      guideDialog.close();
      openPathLesson("story");
    },
    "close-lesson": closeLesson,
    "account": () => accountDialog.showModal(),
    "close-account": () => accountDialog.close(),
    "logout": logout,
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
    const status = getUnitStatus(item.unit);
    const icon = status === "done" ? "circle-check-big" : status === "current" ? "play" : "eye";
    const label = status === "done" ? "已完成 · 可回看" : status === "current" ? "正在学习" : "可提前预览";
    return `
      <button class="course-unit ${status}" type="button" data-unit-preview="${item.unit}" aria-label="预览 Unit ${item.unit}：${item.question}">
        <span class="course-number">${item.unit}</span>
        <div class="course-copy">
          <small>UNIT ${item.unit} · ${label}</small>
          <strong>${item.question}</strong>
          <span>${item.words}</span>
        </div>
        <i class="course-state" data-lucide="${icon}"></i>
      </button>`;
  }).join("");
  createIcons();
}

function getUnitStatus(unit) {
  if (unit === 1) return "done";
  if (unit === 2) return state.unitProgress >= 5 ? "done" : "current";
  return "preview";
}

function openUnitPreview(unitNumber) {
  const item = curriculum.find((unit) => unit.unit === unitNumber);
  if (!item) return;
  const status = getUnitStatus(unitNumber);
  const isLocked = status === "preview";
  const isUnitTwo = unitNumber === 2;
  const statusCopy = status === "done"
    ? "本单元已完成，可以随时回看教材内容。"
    : status === "current"
      ? `正在学习第 ${Math.min(state.unitProgress + 1, 5)} 关，共 5 关。`
      : "可提前熟悉主题和词汇，完成前序单元后开放练习。";
  const primaryLabel = isLocked
    ? "未解锁，暂不能做题"
    : isUnitTwo
      ? status === "done" ? "查看学习记录" : "进入学习路径"
      : "完成回看";

  coursePreview.innerHTML = `
    <button class="close-button" type="button" data-action="close-course-preview" aria-label="关闭"><i data-lucide="x"></i></button>
    <div class="course-preview-heading">
      <span class="course-number">${item.unit}</span>
      <div>
        <span class="eyebrow">UNIT ${item.unit} · ${status === "done" ? "已完成" : status === "current" ? "正在学习" : "提前预览"}</span>
        <h2>${item.question}</h2>
      </div>
    </div>
    <p class="course-preview-status ${status}"><i data-lucide="${status === "done" ? "circle-check-big" : status === "current" ? "map-pin" : "eye"}"></i>${statusCopy}</p>
    <div class="course-preview-row">
      <span>重点词汇</span>
      <strong>${item.words}</strong>
      <button class="preview-audio-button" type="button" data-action="play-sound" data-audio="${escapeAttr(item.words.replaceAll(" · ", ", "))}" aria-label="朗读重点词汇"><i data-lucide="volume-2"></i></button>
    </div>
    <div class="course-preview-row"><span>故事</span><strong>${item.story}</strong></div>
    <div class="course-preview-row"><span>字母</span><strong>${item.letters}</strong></div>
    <button class="course-preview-primary ${isLocked ? "locked" : ""}" type="button" data-action="course-primary" data-unit="${item.unit}" data-status="${status}" ${isLocked ? "disabled" : ""}>
      <i data-lucide="${isLocked ? "lock" : isUnitTwo ? "arrow-right" : "check"}"></i>${primaryLabel}
    </button>`;
  courseDialog.showModal();
  createIcons();
}

function handleCoursePrimary(unit, status) {
  courseDialog.close();
  if (unit === 2) {
    navigate("learn");
    showToast(status === "done" ? "点击已完成关卡即可查看答题记录" : "继续完成当前学习关卡");
  }
}

function updateDashboard() {
  document.querySelector("#starCount").textContent = state.stars;
  document.querySelector("#goalDone").textContent = state.dailyDone;
  document.querySelector("#unitProgress").textContent = Math.min(state.unitProgress, 5);
  const ring = document.querySelector(".goal-ring");
  ring.style.setProperty("--progress", Math.min(100, state.dailyDone * 5));
  const remaining = Math.max(0, 20 - state.dailyDone);
  const goal = document.querySelector(".daily-goal h2");
  goal.textContent = remaining ? `再完成 ${remaining} 题` : "今日目标已完成";
}

function updatePath() {
  const keys = ["words", "story", "game", "extended", "letters"];
  document.querySelectorAll(".path-stop").forEach((stop, index) => {
    stop.classList.remove("complete", "current", "locked");
    if (state.history[keys[index]]) stop.classList.add("complete");
    else if (index === state.unitProgress) stop.classList.add("current");
    else stop.classList.add("locked");

    const node = stop.querySelector(".lesson-node");
    const icon = state.history[keys[index]] ? "check" : getLessonIcon(keys[index]);
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
  if (state.history[key]) {
    showReview(key);
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
  state.responses = [];
  state.reviewMode = false;
  resetQuestionState();
  renderQuestion();
  lessonDialog.showModal();
  document.body.style.overflow = "hidden";
}

function startDailyPractice() {
  if (state.history.daily) {
    showReview("daily");
    return;
  }
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
      ${renderQuestionPrompt(question)}
      ${renderOptions(question.options)}`;
  } else if (question.type === "choice") {
    body = `
      ${renderQuestionPrompt(question)}
      ${renderOptions(question.options)}`;
  } else if (question.type === "speak") {
    body = `
      ${renderQuestionPrompt(question, question.phrase)}
      <div class="record-zone">
        <p>${question.hint}</p>
        <button class="record-button" type="button" data-action="record" aria-label="开始录音"><i data-lucide="mic-2"></i></button>
        <p>按一下麦克风，再大声读出来</p>
      </div>`;
  } else if (question.type === "order") {
    body = `
      ${renderQuestionPrompt(question, question.translation)}
      <div class="sentence-line" id="sentenceLine"></div>
      <div class="word-bank">
        ${question.words.map((word, index) => `<button class="word-chip" type="button" data-word-index="${index}">${word}</button>`).join("")}
      </div>`;
  } else {
    body = `
      ${renderQuestionPrompt(question)}
      <input class="write-input" id="writeAnswer" autocomplete="off" autocapitalize="none" placeholder="${question.placeholder || "输入答案"}" aria-label="输入答案">`;
  }

  exercise.innerHTML = `
    <span class="exercise-kicker">第 ${state.index + 1} / ${state.questions.length} 题</span>
    <h1>${question.title}</h1>
    ${body}`;
  createIcons();
}

function renderQuestionPrompt(question, displayText = "") {
  const audio = getQuestionAudio(question);
  return `
    <div class="prompt-scene">
      ${question.scene ? `<span class="scene-emoji">${question.scene}</span>` : ""}
      <button class="sound-button" type="button" data-action="play-sound" data-audio="${escapeAttr(audio)}" aria-label="播放英文读音">
        <i data-lucide="volume-2"></i>
      </button>
      ${displayText ? `<span class="speech-bubble">${displayText}</span>` : ""}
      ${question.speech ? `<span class="speech-bubble">${question.speech}</span>` : ""}
    </div>`;
}

function getQuestionAudio(question) {
  if (question.audio) return question.audio;
  if (question.phrase) return question.phrase;
  if (question.answerText) return question.answerText;
  if (question.options && Number.isInteger(question.answer)) return question.options[question.answer][1];
  return "";
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
  if (state.reviewMode) {
    closeLesson();
    return;
  }
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
  let responseText = "";

  if (question.type === "choice" || question.type === "listen") {
    correct = state.selected === question.answer;
    correctText = question.options[question.answer][1];
    responseText = question.options[state.selected]?.[1] || "未作答";
    const options = document.querySelectorAll(".answer-option");
    options[question.answer]?.classList.add("correct");
    if (!correct) options[state.selected]?.classList.add("wrong");
  } else if (question.type === "speak") {
    correct = state.recorded;
    correctText = "发音清楚，继续保持";
    responseText = question.phrase;
  } else if (question.type === "order") {
    const response = state.ordered.map((index) => question.words[index]).join(" ");
    correct = normalize(response) === normalize(question.answerText);
    correctText = question.answerText;
    responseText = response;
  } else {
    const input = document.querySelector("#writeAnswer");
    correct = normalize(input.value) === normalize(question.answerText);
    correctText = question.answerText.toUpperCase();
    responseText = input.value;
  }

  state.answered = true;
  state.responses.push({
    title: question.title,
    response: responseText,
    answer: correctText,
    correct,
  });
  if (correct) {
    state.correct += 1;
    playFeedback(true);
    answerBar.classList.add("correct");
    answerMessage.innerHTML = `<strong>太棒了！</strong><span>${correctText}</span>`;
  } else {
    playFeedback(false);
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
  localStorage.setItem(userStorageKey("stars"), state.stars);

  if (state.lessonKey === "daily") {
    state.dailyDone = 20;
    localStorage.setItem(userStorageKey("daily-count"), "20");
  } else {
    const keys = ["words", "story", "game", "extended", "letters"];
    const completedIndex = keys.indexOf(state.lessonKey);
    if (completedIndex >= 0 && completedIndex >= state.unitProgress) {
      state.unitProgress = Math.min(5, completedIndex + 1);
      localStorage.setItem(userStorageKey("unit2-progress"), state.unitProgress);
    }
  }
  if (["words", "story", "game", "extended", "letters", "daily"].includes(state.lessonKey)) {
    state.history[state.lessonKey] = {
      completedAt: new Date().toISOString(),
      correct: state.correct,
      total,
      responses: state.responses,
    };
    localStorage.setItem(userStorageKey("history"), JSON.stringify(state.history));
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
  playCompletion();
  createIcons();
}

function finishLesson() {
  closeLesson();
  renderCourse();
  updateDashboard();
  updatePath();
  showToast("学习记录已保存，获得新星星");
}

function showReview(key) {
  const record = state.history[key];
  if (!record) return;
  state.lessonKey = key;
  state.reviewMode = true;
  state.finished = false;
  lessonProgress.style.width = "100%";
  document.querySelector("#lessonHearts").textContent = "—";
  exercise.innerHTML = `
    <div class="review-screen">
      <span class="exercise-kicker">已完成 · 仅供回看</span>
      <h1>答题检查</h1>
      <p class="review-summary">${record.correct}/${record.total} 题正确 · ${formatDate(record.completedAt)}</p>
      <div class="review-list">
        ${record.responses.map((item, index) => `
          <article class="review-item ${item.correct ? "" : "wrong"}">
            <span class="review-status"><i data-lucide="${item.correct ? "check" : "x"}"></i></span>
            <div class="review-copy">
              <strong>${index + 1}. ${escapeHtml(item.title)}</strong>
              <span>你的答案：<b class="review-answer">${escapeHtml(item.response || "未作答")}</b></span>
              ${item.correct ? "" : `<span>正确答案：<b class="review-answer">${escapeHtml(item.answer)}</b></span>`}
            </div>
          </article>`).join("")}
      </div>
    </div>`;
  answerBar.className = "answer-bar";
  answerMessage.innerHTML = '<strong>这组题已完成</strong><span>可以检查答案，但不能再次作答</span>';
  checkButton.disabled = false;
  checkButton.textContent = "关闭";
  lessonDialog.showModal();
  document.body.style.overflow = "hidden";
  createIcons();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function logout() {
  accountDialog.close();
  sessionStorage.removeItem("buddy-session-v1");
  closeLesson();
  showAuth();
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
  utterance.rate = 0.78;
  utterance.pitch = 1.08;
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang;
  }
  speechSynthesis.speak(utterance);
}

function prepareVoices() {
  if (!("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices();
  const names = ["Samantha", "Ava", "Karen", "Moira", "Tessa", "Xiaoxiao", "Zira", "Jenny", "Aria"];
  preferredVoice = names.map((name) => voices.find((voice) => voice.name.includes(name) && voice.lang.startsWith("en"))).find(Boolean)
    || voices.find((voice) => voice.lang.startsWith("en") && /female|woman/i.test(voice.name))
    || voices.find((voice) => voice.lang.startsWith("en"))
    || null;
}

function playFeedback(correct) {
  playTones(correct
    ? [{ frequency: 523, start: 0, duration: .11 }, { frequency: 659, start: .1, duration: .11 }, { frequency: 784, start: .2, duration: .18 }]
    : [{ frequency: 392, start: 0, duration: .15 }, { frequency: 330, start: .14, duration: .22 }], correct ? .12 : .08);
}

function playCompletion() {
  playTones([
    { frequency: 523, start: 0, duration: .1 },
    { frequency: 659, start: .09, duration: .1 },
    { frequency: 784, start: .18, duration: .1 },
    { frequency: 1047, start: .27, duration: .25 },
  ], .1);
}

function playTones(tones, volume) {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    tones.forEach(({ frequency, start, duration }) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.001, now + start);
      gain.gain.exponentialRampToValueAtTime(volume, now + start + .02);
      gain.gain.exponentialRampToValueAtTime(.001, now + start + duration);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(now + start);
      oscillator.stop(now + start + duration + .03);
    });
  } catch {
    // Audio feedback is optional when the browser blocks Web Audio.
  }
}

function normalize(value) {
  return String(value).toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " ").trim();
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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

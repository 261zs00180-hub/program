'use strict';

const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');

assessmentButton.addEventListener(
  'click',
  () => {
    const mood = document.querySelector('input[name="mood"]:checked');
    const state = document.querySelector('input[name="state"]:checked');

    if (mood === null || state === null) {
      resultDivision.innerText = '2つの質問に回答してください。';
      return;
    }

    const moodOptions = document.querySelectorAll('input[name="mood"]');
    const stateOptions = document.querySelectorAll('input[name="state"]');

    const moodIndex = Array.from(moodOptions).indexOf(mood);
    const stateIndex = Array.from(stateOptions).indexOf(state);

    const index = moodIndex * 8 + stateIndex;

    // 診断結果表示エリアの作成
resultDivision.innerText = '';

const card = document.createElement('div');
card.setAttribute('class', 'card mt-4');

const cardHeader = document.createElement('div');
cardHeader.setAttribute('class', 'card-header text-bg-primary');
cardHeader.innerText = '診断結果';
card.appendChild(cardHeader);

const cardBody = document.createElement('div');
cardBody.setAttribute('class', 'card-body');

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'card-text');

const result = answers[index];
paragraph.innerText = result;

cardBody.appendChild(paragraph);
card.appendChild(cardBody);
resultDivision.appendChild(card);
  }
);
const answers = [
  '元気な今は、新しいことに挑戦する絶好の機会です。',
  '元気な今なら、集中して物事に取り組めそうです。',
  '元気な気持ちを誰かと共有してみましょう。',
  '自分の時間を楽しみながら過ごしてみましょう。',
  'その元気を活かして、積極的に行動してみましょう。',
  '無理をせず、自分のペースで過ごしましょう。',
  '元気な気持ちを大切にしながら、リラックスしてみましょう。',
  '気分転換をして、さらに楽しい時間を過ごしましょう。',
  '楽しい気分の今こそ、新しいことに挑戦してみましょう。',
  '楽しみながら集中して取り組んでみましょう。',
  '楽しい気持ちを誰かと共有してみましょう。',
  '自分だけの時間をゆっくり楽しみましょう。',
  'その楽しさを活かして積極的に行動しましょう。',
  '楽しい気分のまま、無理せず過ごしましょう。',
  '好きなことをして、さらにリラックスしましょう。',
  'いつもと違うことをして気分転換しましょう。',  '落ち着いている今こそ、新しいことを始めてみましょう。',
  '落ち着いた気持ちで、集中して取り組めそうです。',
  '穏やかな気持ちを誰かと共有してみましょう。',
  '自分の時間をゆっくり楽しんでみましょう。',
  '落ち着いて周囲を見ながら、積極的に行動しましょう。',
  '今の落ち着いた状態を大切にして、ゆっくり休みましょう。',
  '好きなことをして、さらにリラックスしましょう。',
  '少し違うことをして、新鮮な気分を味わいましょう。',  'いつも通りの今だからこそ、新しいことに挑戦してみましょう。',
  '落ち着いて目の前のことに集中してみましょう。',
  '何気ない会話を誰かと楽しんでみましょう。',
  '自分のペースで自由な時間を過ごしましょう。',
  '少し行動を起こして、充実した一日にしましょう。',
  '無理をせず、ゆっくり過ごしてみましょう。',
  '好きな音楽などを聴いてリラックスしましょう。',
  'いつもと違うことをして気分を変えてみましょう。',  '疲れているときこそ、無理のない範囲で新しいことを考えてみましょう。',
  '短い時間でも、できることに集中してみましょう。',
  '誰かと話して、気持ちを共有してみましょう。',
  '一人でゆっくり過ごして、心と体を休めましょう。',
  '無理のない範囲で、軽く体を動かしてみましょう。',
  '今日は頑張りすぎず、休息を優先しましょう。',
  '好きな音楽などを楽しんで、リラックスしましょう。',
  '気分転換に、少し場所を変えてみましょう。',  '少し気持ちが落ち着いたら、新しいことに挑戦してみましょう。',
  '焦らず、自分のできることに集中してみましょう。',
  '信頼できる人に話を聞いてもらいましょう。',
  '一人で静かに過ごす時間を大切にしましょう。',
  '気持ちが向いたら、少しずつ行動してみましょう。',
  '今は無理をせず、ゆっくり休みましょう。',
  '好きな音楽や趣味で心を落ち着かせましょう。',
  '外の空気を吸って、気分を変えてみましょう。',  '気持ちを切り替えて、新しいことに挑戦してみましょう。',
  '一度深呼吸して、目の前のことに集中してみましょう。',
  '誰かと話して、気持ちを整理してみましょう。',
  '一人で過ごして、気持ちを落ち着かせましょう。',
  '軽く体を動かして、気分をすっきりさせましょう。',
  '無理をせず、少し休憩してみましょう。',
  '好きなことをして、リラックスする時間を作りましょう。',
  '散歩などをして、気分転換してみましょう。',  '小さなことから、新しいことに挑戦してみましょう。',
  '一つずつ順番に、目の前のことに集中してみましょう。',
  '信頼できる人に話して、気持ちを共有してみましょう。',
  '一人で落ち着ける時間を作ってみましょう。',
  'できることから少しずつ行動してみましょう。',
  '焦らず、自分のペースで休んでみましょう。',
  '好きなことをして、心を落ち着かせましょう。',
  '散歩や音楽などで、気分転換してみましょう。'
];

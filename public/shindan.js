let currentStep = 'start';
let scores = {};
let q5Selections = [];
const TOTAL_QUESTIONS = 8;

document.addEventListener("DOMContentLoaded", () => {
    // 1. Back button handling (mobile UX)
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.step) {
            showStep(event.state.step, true);
        }
    });

    // Push initial state
    history.replaceState({ step: 'start' }, document.title, window.location.href);
});

// Navigate to step
function nextStep(stepId) {
    showStep(stepId, false);
}

function showStep(stepId, isBack) {
    document.querySelectorAll('.step-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    const nextPanel = document.getElementById('step-' + stepId);
    if(nextPanel) {
        nextPanel.classList.add('active');
        currentStep = stepId;
        
        if (!isBack) {
            history.pushState({ step: stepId }, document.title, window.location.href);
        }

        // Update Progress Bar
        const qMatch = stepId.match(/q(\d+)/);
        const progressContainer = document.getElementById('progressBarContainer');
        const progressText = document.getElementById('progressText');
        
        if (qMatch) {
            progressContainer.style.display = 'block';
            progressText.style.display = 'block';
            const qNum = parseInt(qMatch[1]);
            document.getElementById('progressBar').style.width = ((qNum - 1) / TOTAL_QUESTIONS * 100) + '%';
            progressText.innerText = `Q${qNum} / ${TOTAL_QUESTIONS}`;
        } else if (stepId === 'start' || stepId === 'load' || stepId === 'result') {
            progressContainer.style.display = 'none';
            progressText.style.display = 'none';
        }

        if (stepId === 'load') {
            setTimeout(calculateResult, 2000); // 2 seconds fake loading for UX
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Single choice logic
function selectSingle(qNum, score, nextStepId) {
    scores['q' + qNum] = score;
    
    // Add visual feedback
    const panel = document.getElementById('step-q' + qNum);
    const buttons = panel.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.currentTarget.classList.add('selected');

    // Slight delay for UX
    setTimeout(() => {
        nextStep(nextStepId);
    }, 300);
}

// Q5 Multiple choice specific logic
function toggleMultiple(btn) {
    const val = btn.getAttribute('data-val');
    
    // Remove "None" selection if exists
    const noneBtn = document.querySelector('.none-btn');
    if (noneBtn.classList.contains('selected')) {
        noneBtn.classList.remove('selected');
        q5Selections = [];
    }

    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        q5Selections = q5Selections.filter(v => v !== val);
    } else {
        btn.classList.add('selected');
        if (!q5Selections.includes(val)) q5Selections.push(val);
    }
}

function toggleMultipleNone(btn) {
    const allBtns = document.querySelectorAll('#q5-options .multiple-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        q5Selections = [];
    } else {
        btn.classList.add('selected');
        q5Selections = ['none'];
    }
}

function submitMultiple(nextStepId) {
    if (q5Selections.length === 0) {
        alert("該当するものを1つ以上選んでください");
        return;
    }

    let q5Score = 0;
    if (q5Selections.includes('none') && q5Selections.length === 1) {
        q5Score = 0;
    } else if (q5Selections.length <= 2) {
        q5Score = 1;
    } else {
        q5Score = 2;
    }
    
    scores['q5'] = q5Score;
    nextStep(nextStepId);
}

// Result Calculation Logic
const resultVoices = {
    type1: {
        text: "「美容液4本、化粧水2種、8工程を続けていた。MINAKOさんに言われた通りにミトコンドリアのちからだけにしたら、3週目から洗顔後の焦りがなくなった。肌が自分のものになった感じ。」",
        meta: "M.K さん ／ スキンケア歴27年 ／ 乾燥肌"
    },
    type2: {
        text: "「朝晩しっかり洗顔していた。引くのが怖かったけど、夜のみに変えてミトコンドリアのちからを使い始めたら赤みが落ち着いた。21日間MINAKOさんが毎日声をかけてくれたから続けられた。」",
        meta: "R.H さん ／ スキンケア歴19年 ／ 肌荒れ繰り返し"
    },
    type3: {
        text: "「重ね塗りをやめるのが怖かった。でもミトコンドリアのちから1本に絞ったら、2週目から肌がもちっとしてきた。娘に『なんか最近肌きれいじゃない？』と言われた。」",
        meta: "A.O さん ／ スキンケア歴35年 ／ 乾燥・ハリ悩み"
    },
    type4: {
        text: "「テカるからオイルフリーを徹底していた。それが逆効果だと知って、ミトコンドリアのちからを使い始めたら、3週目でテカりと乾燥が同時に落ち着いてきた。」",
        meta: "S.N さん ／ スキンケア歴24年 ／ 毛穴・くすみ"
    },
    type5: {
        text: "「敏感肌用のものしか使えなかった。引くのが怖くてMINAKOさんに毎日LINEしていた。ミトコンドリアのちからだけにしたら荒れなくなった。一人だったら絶対やめていた。」",
        meta: "K.M さん ／ スキンケア歴22年 ／ 敏感肌"
    },
    type6: {
        text: "「もう十分と思っていた。でもミトコンドリアのちからを加えたら肌の底力が違うと感じた。何もしていないのに調子がいい日が増えた。」",
        meta: "Y.T さん ／ スキンケア歴32年 ／ 混合肌"
    }
};

const resultTexts = {
    type1: {
        badge: "足しすぎ依存タイプ",
        danger: "丁寧にケアしているほど、肌の自己回復力が静かに低下しています。",
        empathy: "「いいコスメを使っているのに、なぜか改善しない」<br>「毎日頑張っているのに、肌が応えてくれない」<br><br>そう感じていませんか？<br><br>それは、あなたの努力が足りないのではありません。<br>むしろ、やりすぎているのです。",
        body: "<p>肌は本来、自分で潤い、自分で守る力を持っています。</p><p>しかしスキンケアを重ねるほど、肌は「外から補ってもらえる」と学習し、自分で作るのをやめていきます。</p><p>これが「依存肌」の正体です。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 解決策</p><p>引き算スキンケアで、肌本来の力を取り戻しましょう。</p><p style='color:var(--accent-gold); font-size: 0.9rem;'>※ 1週間で体感できる方の割合：約78%</p>"
    },
    type2: {
        badge: "摩擦ダメージタイプ",
        danger: "毎日の洗顔・クレンジングが、肌のバリア機能を削り続けています。",
        empathy: "「しっかり洗った方が毛穴に良いと思っていた」<br>「クレンジングは強い方がメイクが落ちると思っていた」<br><br>多くの方がそう思っています。",
        body: "<p>肌の表面にある「角質層」は、わずか0.02mmの薄さしかありません。</p><p>強いクレンジングや複数回の洗顔は、この薄い盾を毎日削り続けているのです。</p><p>削られた肌は外からの刺激に弱くなり、乾燥・赤み・ニキビの悪循環が始まります。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 解決策</p><p>洗い方を変えるだけで、肌は3日で変化し始めます。</p>"
    },
    type3: {
        badge: "保湿過信タイプ",
        danger: "重ね塗りをするほど、肌が自分で潤いを作れなくなっています。",
        empathy: "「乾燥が気になるから、しっかり保湿している」<br>「保湿は多い方が良いと思っていた」<br><br>その思い込み、実は逆効果かもしれません。",
        body: "<p>肌には「自分でセラミドや天然保湿因子を作る」機能があります。</p><p>しかし外から大量に補給し続けると、「もう自分で作らなくていい」とスイッチが切れます。</p><p>重ね塗りをやめた途端に乾燥が激しくなるのは、この「依存」が起きているサインです。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 解決策</p><p>保湿の量を減らし、肌自身に作らせる習慣に戻しましょう。</p>"
    },
    type4: {
        badge: "インナードライ誤認タイプ",
        danger: "「テカっているから」と油分を避けることで、内部の乾燥がますます進んでいます。",
        empathy: "「テカるから保湿は少なめにしている」<br>「オイルフリーの商品を選んでいる」<br><br>それ、肌が出す「SOS」を読み違えています。",
        body: "<p>テカリの原因が「皮脂過多」とは限りません。</p><p>内部が乾燥した肌は、水分を守ろうと防衛反応で余分な皮脂を分泌します。</p><p>つまり「乾燥しているからテカる」状態がインナードライの正体です。<br>油分を避けるほど、悪化する矛盾が起きています。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 解決策</p><p>正しい成分で内部から潤わせることで、テカリも乾燥も同時に改善できます。</p>"
    },
    type5: {
        badge: "敏感肌こじらせタイプ",
        danger: "「敏感肌だから」と選んだ<br>優しいケアの積み重ねが、肌をさらに過敏にしています。",
        empathy: "「敏感肌用と書いてあるものしか使えない」<br>「少し変えるだけで荒れてしまう」<br><br>もしかしたら、それは本物の敏感肌ではないかもしれません。",
        body: "<p>「敏感肌」の多くは、生まれつきではなくスキンケアの積み重ねによって作られています。</p><p>複数のアイテムを重ねることで、肌はあらゆる刺激に反応しやすい状態にどんどん慣れていきます。</p><p>使えるものが減っていくのは、悪化しているサインです。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 解決策</p><p>思い切ってケアを減らすことが、敏感肌脱出の最短ルートです。</p>"
    },
    type6: {
        badge: "引き算バランス型",
        danger: "素晴らしいです！すでに肌に優しい最低限のケアができています。",
        empathy: "ただし、年齢・季節・環境の変化で<br>肌の状態は変わり続けます。",
        body: "<p>「今のケアが正解」と思って変えないことも、じつは肌にとってリスクになることがあります。</p><p>さらに肌の底力を引き出したい方に、AKINORIOの「引き算スキンケア」は設計されています。</p><br><p style='font-weight:bold; color:var(--accent-gold); font-size:1.1rem; margin-bottom:8px;'>■ 次のステップ</p><p>肌の底力を今よりもっと高める習慣を取り入れましょう。</p>"
    }
};

function calculateResult() {
    let totalScore = 0;
    for (let key in scores) {
        totalScore += scores[key];
    }
    
    let typeKey = 'type6'; // Default

    // Logic Tree (Based on Document Specifications)
    if (totalScore >= 14) {
        typeKey = 'type1'; // 足しすぎ依存（重症）
    } else if (totalScore >= 11) {
        if (q5Selections.includes('sting') || q5Selections.includes('redness')) {
            typeKey = 'type5'; // 敏感肌こじらせ
        } else {
            typeKey = 'type1'; // 足しすぎ依存
        }
    } else if (totalScore >= 8) {
        if (scores['q3'] === 2 || scores['q4'] === 2) {
            typeKey = 'type2'; // 摩擦ダメージ
        } else if (scores['q7'] === 2) {
            typeKey = 'type3'; // 保湿過信
        } else {
            typeKey = 'type3'; // Fallback for 8-10
        }
    } else if (totalScore >= 4) {
        if (q5Selections.includes('dry') && q5Selections.includes('shine')) {
            typeKey = 'type4'; // インナードライ誤認
        } else {
            typeKey = 'type4'; // Fallback for 4-7
        }
    } else {
        typeKey = 'type6'; // 放置型・バランス型 (0-3)
    }

    renderResult(typeKey);
    showStep('result', false);
}

function renderResult(typeKey) {
    const data = resultTexts[typeKey];
    
    document.getElementById('res-badge').innerText = data.badge;
    document.getElementById('res-title').innerHTML = `あなたは<br><span style="color:var(--accent-gold)">「${data.badge}」</span>です`;
    
    const dangerEl = document.getElementById('res-danger');
    dangerEl.innerHTML = data.danger;
    if (typeKey === 'type6') {
        dangerEl.style.color = '#34d399'; // Success green for balanced type
    } else {
        dangerEl.style.color = '#f87171'; // Danger red
    }

    document.getElementById('res-empathy').innerHTML = data.empathy;
    document.getElementById('res-body').innerHTML = data.body;

    // Sophie: タイプ別体験談
    const voice = resultVoices[typeKey];
    if (voice) {
        document.getElementById('res-voice-text').innerText = voice.text;
        document.getElementById('res-voice-meta').innerText = voice.meta;
    }

    // UTM Parameters and Result tracking for LINE link
    const urlParams = new URLSearchParams(window.location.search);
    let lineUrl = new URL("https://lin.ee/Sa4uQuI");
    
    // Pass any UTM or relevant tracking tags
    for (const [key, value] of urlParams) {
        if (key.startsWith('utm_') || key === 'ref' || key === 'ad_id') {
            lineUrl.searchParams.append(key, value);
        }
    }
    // Append the diagnosis result type
    lineUrl.searchParams.append('res', typeKey);
    
    document.querySelectorAll('.utm-link').forEach(link => {
        link.href = lineUrl.toString();
    });
    
    // Smooth fade in result
    document.getElementById('step-result').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('step-result').style.opacity = 1;
    }, 100);
}

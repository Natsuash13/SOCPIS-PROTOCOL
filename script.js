document.addEventListener('DOMContentLoaded', () => {
    const tierSelect = document.getElementById('tierSelect');
    const busdVal = document.getElementById('busdVal');
    const lusdVal = document.getElementById('lusdVal');
    const permVal = document.getElementById('permVal');
    const bioWindow = document.getElementById('biometricAuthWindow');
    const webcamFeed = document.getElementById('webcamFeed');
    const bioStatus = document.getElementById('bioStatus');

    const matrixConfig = {
        '2': { busd: 5000, lusdMult: 0.0, perms: "Tier 2: Privileges Paused | UNCONDITIONAL SURVIVAL RIGHTS LOCKED" },
        '3': { busd: 5000, lusdMult: 1.0, perms: "Full Unconditional Civil Sovereignty (Baseline Floor)" },
        '4': { busd: 6500, lusdMult: 1.2, perms: "Full Civil Sovereignty + Advanced LCI Training Assets" },
        '7': { busd: 5000, lusdMult: 2.5, perms: "Full Civil Sovereignty + Active Contributor Privilege" },
        '11': { busd: 5000, lusdMult: 4.0, perms: "Conditional Administrative Logistical Authority Privilege" },
        '12': { busd: 5000, lusdMult: 5.0, perms: "Conditional Planetary Resource Allocation Signatory Privilege" }
    };

    let localStream = null;
    let wakeWordEngineActive = false;

    function updateSimulation() {
        const selectedTier = tierSelect.value;
        const config = matrixConfig[selectedTier];
        if (config) {
            busdVal.textContent = `$${config.busd.toLocaleString()} / mo (Universal Right Base)`;
            lusdVal.textContent = `${config.lusdMult.toFixed(1)}x (Merit Privilege Pool)`;
            permVal.textContent = `${config.perms} | BST Status: BIOMETRICALLY ACTIVE`;
        }
    }

    window.handleChatKeyPress = function(event) {
        if (event.key === 'Enter') {
            processUserChatPrompt();
        }
    };

    // --- IMMORTAL WAKE-WORD LISTENING ENGINE ---
    window.initializeLiveWakeWordEngine = function() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("❌ Voice Activation Unusable: Web Speech Recognition API not supported in this browser.");
            return;
        }

        const recognizerInstance = new SpeechRecognition();
        recognizerInstance.continuous = true;
        recognizerInstance.interimResults = false;
        recognizerInstance.lang = 'en-US';

        const statusLight = document.getElementById('wakeStatusIndicatorLight');
        const statusText = document.getElementById('wakeStatusLabelText');
        const initButton = document.getElementById('micInitButton');

        recognizerInstance.onstart = () => {
            wakeWordEngineActive = true;
            statusLight.style.backgroundColor = "#238636";
            statusLight.style.boxShadow = "0 0 10px #238636";
            statusText.textContent = "SYSTEM STATUS: ALWAYS-LISTENING ACTIVE. Say: 'Hey SOCPIS...'";
            initButton.style.display = "none";
        };

        recognizerInstance.onresult = (event) => {
            const currentResultIndex = event.resultIndex;
            const liveTranscriptText = event.results[currentResultIndex].transcript.trim().toLowerCase();
            console.log(`🎤 Audio Fragment Logged: "${liveTranscriptText}"`);

            if (liveTranscriptText.includes('socpis') || liveTranscriptText.includes('sock piss') || liveTranscriptText.includes('sotp')) {
                statusLight.style.backgroundColor = "#58a6ff";
                statusLight.style.boxShadow = "0 0 12px #58a6ff";
                statusText.textContent = "🚨 AWAKE STATE TRIGGERED: Extracting Intention Prompt...";

                let cleanCoreCommand = liveTranscriptText.replace(/hey socpis|socpis|sock piss|sotp/gi, "").trim();
                
                setTimeout(() => {
                    if (cleanCoreCommand.length > 2) {
                        document.getElementById('userTextInput').value = cleanCoreCommand;
                        processUserChatPrompt();
                    } else {
                        triggerVoiceInputSimulation();
                    }
                    statusLight.style.backgroundColor = "#238636";
                    statusLight.style.boxShadow = "0 0 10px #238636";
                    statusText.textContent = "SYSTEM STATUS: ALWAYS-LISTENING ACTIVE. Say: 'Hey SOCPIS...'";
                }, 800);
            }
        };

        recognizerInstance.onerror = () => { wakeWordEngineActive = false; };
        recognizerInstance.onend = () => { wakeWordEngineActive = false; recognizerInstance.start(); };
        recognizerInstance.start();
    };

    window.triggerVoiceInputSimulation = function() {
        const voicePrompt = prompt("🎤 [SOCPIS Voice Processing Panel]\nState your prompt or macro update selection:");
        if (voicePrompt) {
            document.getElementById('userTextInput').value = voicePrompt;
            processUserChatPrompt();
        }
    };

    // Main Chat Router (Local Sandbox Preferences vs. External Searches vs. Permanent Self-Rewrites)
    window.processUserChatPrompt = function() {
        const inputEl = document.getElementById('userTextInput');
        const chatWindow = document.getElementById('chatHistoryWindow');
        const promptText = inputEl.value.trim();

        if (!promptText) return;

        const userBubble = document.createElement('div');
        userBubble.className = "chat-bubble user-bubble";
        userBubble.innerHTML = `<strong>👤 User/Admin:</strong> ${promptText}`;
        chatWindow.appendChild(userBubble);
        
        inputEl.value = ""; 
        chatWindow.scrollTop = chatWindow.scrollHeight; 

        const query = promptText.toLowerCase();

        // ROUTE A: High Privilege Master System Rewrite (Launches Webcam Anti-Deepfake Validation)
        if (query.includes('change code') || query.includes('modify system') || query.includes('update blueprint') || query.includes('rewrite')) {
            setTimeout(() => {
                const alertBubble = document.createElement('div');
                alertBubble.className = "chat-bubble ai-bubble";
                alertBubble.style.borderColor = "var(--alert-color)";
                alertBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> High-privilege write directive identified. Booting face mesh anti-clone challenge matrix to verify physical larynx and skin warmth dynamics...`;
                chatWindow.appendChild(alertBubble);
                chatWindow.scrollTop = chatWindow.scrollHeight;

                executeBiometricVerificationChallenge(promptText);
            }, 800);
            return;
        }

        // ROUTE B: Online Database Search Pipeline & General Inquiry
        setTimeout(() => {
            const aiBubble = document.createElement('div');
            aiBubble.className = "chat-bubble ai-bubble";

            // If user explicitly asks to fetch web facts or do a search lookup
            if (query.includes('search') || query.includes('online') || query.includes('google') || query.includes('look up')) {
                aiBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> Query dispatched to backend web-crawler node. Connecting securely to active global data streams...`;
                chatWindow.appendChild(aiBubble);
                chatWindow.scrollTop = chatWindow.scrollHeight;

                // Contact server search endpoint
                fetch('/api/public-web-query', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userPromptText: promptText })
                })
                .then(res => res.json())
                .then(data => {
                    const dynamicBubble = document.createElement('div');
                    dynamicBubble.className = "chat-bubble ai-bubble";
                    dynamicBubble.innerHTML = `<strong>🤖 SOCPIS AI Core (Live Internet Insights):</strong> ${data.responseText}`;
                    chatWindow.appendChild(dynamicBubble);
                    chatWindow.scrollTop = chatWindow.scrollHeight;
                })
                .catch(() => {
                    alert("❌ Search Node Error: Ensure 'Run' is selected in Replit to power up your server framework.");
                });
                return;
            }

            // ROUTE C: Personal Local Customizations & Media Asset Injection
            if (query.includes('background') || query.includes('theme') || query.includes('color')) {
                document.body.style.backgroundColor = "#020617";
                aiBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> Local theme set to Dark Slate Blue. This preference change is localized to your specific device sandbox and has not updated the server files.`;
            } else if (query.includes('picture') || query.includes('image')) {
                aiBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> Generating structural rendering for the BST hardware unit card:<br><br><img src="https://unsplash.com" style="max-width:100%; border-radius:6px; border:1px solid var(--border-color);">`;
            } else if (query.includes('video')) {
                aiBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> Mounting project proposal presentation footage:<br><br><video controls style="width:100%; border-radius:6px; background:#000;"><source src="my-proposal-video.mp4" type="video/mp4"></video>`;
            } else {
                aiBubble.innerHTML = `<strong>🤖 SOCPIS AI Core:</strong> I have processed your inquiry regarding "${promptText}". To map this onto our New York regional infrastructure servers correctly, should we evaluate this rule parameter for Tier 3 universal baseline survival rights, or Tier 11 executive privileges?`;

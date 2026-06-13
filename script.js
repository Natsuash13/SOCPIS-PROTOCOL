// SIMULATED DATA DECK ARCHITECTURE
const tierData = {
    1: { busd: 500, lusd: 0, housing: "Automated Therapeutic Isolation Crypt", meals: "Synthetic Nutrition Blocks Only (Zero live farm access; disciplinary setting)", access: "Luxury assets frozen. Full telemetry tracking active. Focus is pure emotional and behavioral rehabilitation. Zero access to fresh live food." },
    3: { busd: 1500, lusd: 0, housing: "Standard Baseline Studio space", meals: "Real State-Farm Organic Fruits, Vegetables, and Standard Pre-Frozen Baseline Proteins", access: "Free unconditional preventative health networks & public ad-supported streaming arrays. Fresh premium livestock proteins are locked." },
    4: { busd: 1750, lusd: 500, housing: "Modern 1-Bedroom urban structural pod", meals: "Premium Access: Unrestricted live farm-raised meats and premium organic livestock fields", access: "Active students and basic foundational workers are assigned Tier 4. SOTP explicitly recognizes the intentional pursuit of knowledge and the active dedication to learning how society functions as milestone contributions. While students have not yet delivered realized positive outputs, their active intent to better serve society is verified by the ledger as a milestone contribution. This systemic framework intentionally rewards positive intent to reinforce good behavior, spark motivation, and collapse boredom-based social infractions." },
    7: { busd: 2500, lusd: 8000, housing: "Premium neighborhood housing priority allotment", meals: "Maximum baseline bio-available wellness nutrition blocks and raw farm yields", access: "Priority high-speed mag-lev transit clearance and emergency service network overrides." },
    9: { busd: 5000, lusd: 50000, housing: "Sovereign Structural Design Lab & Global Penthouse", meals: "Unrestricted baseline culinary clearing privileges", access: "Lifelong King-level Founding Creator luxury stipend & absolute system innovation status. Permanent tracking isolation active." }
};

function updateSimulation() {
    const tier = document.getElementById('tier').value;
    const data = tierData[tier];
    document.getElementById('busd-display').innerText = data.busd.toLocaleString();
    document.getElementById('lusd-display').innerText = data.lusd.toLocaleString();
    
    document.getElementById('sim-output').innerHTML = `
        <strong>CURRENT LIFESTYLE CONFIGURATIONS (TIER ${tier}):</strong><br><br>
        🏡 <strong>Shelter Occupancy:</strong> Fully assigned ${data.housing} (Cost: 0 B-USD)<br>
        🍎 <strong>Nutrition Profile:</strong> ${data.meals}<br>
        ⚙️ <strong>Clearance Array:</strong> ${data.access}
    `;
}

function executeSiphon() {
    const amt = parseFloat(document.getElementById('siphon-amt').value);
    const tier = document.getElementById('tier').value;
    const currentBusd = tierData[tier].busd;
    const maxSiphon = currentBusd * 0.10;
    
    if (tier == 1) {
        alert(`⚠️ SYSTEM EXCEPTION: Incarcerated profiles are strictly blocked from executing currency siphons.`);
        return;
    }
    if (amt > maxSiphon) {
        alert(`⚠️ SYSTEM EXCEPTION: Siphon request violates chip thresholds. Max conversion for this profile is ${maxSiphon} B-USD.`);
        return;
    }
    if (amt <= 0 || isNaN(amt)) {
        alert(`⚠️ SYSTEM EXCEPTION: Input a valid positive baseline token amount.`);
        return;
    }
    
    const luxuryGained = amt / 10;
    alert(`✅ TRANSACTION AUTHORIZED:\nSiphoned: ${amt} B-USD\nGenerated: ${luxuryGained} L-USD\n\n10:1 regulatory conversion fee applied.`);
}

// CO-DEMOCRATIC MULTIMEDIA AI COMPILER
function handleKeyPress(e) { if (e.key === 'Enter') sendQuestion(); }

function sendQuestion() {
    const inputField = document.getElementById('user-input');
    const question = inputField.value.trim();
    if (!question) return;

    appendMessage(question, 'user', false);
    inputField.value = '';

    setTimeout(() => {
        const reply = processSOTPQuery(question);
        appendMessage(reply, 'ai', true);
    }, 400);
}

function appendMessage(text, sender, isHTML) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('msg', sender);
    if (isHTML) {
        msgDiv.innerHTML = text;
    } else {
        msgDiv.innerText = text;
    }
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processSOTPQuery(q) {
    q = q.toLowerCase();
    
    if (q.includes('picture') || q.includes('photo') || q.includes('visual') || q.includes('image') || q.includes('look like') || q.includes('city') || q.includes('ring')) {
        return `<strong>HOLOGRAPHIC CITY SCHEMATIC RENDERED:</strong><br><br>
        <img src="https://unsplash.com" style="width:100%; border-radius:4px; margin-bottom:10px;" alt="SOTP City blueprint"><br>
        This visual represents the 3D Vertical Concentric Rings of SOTP. Population centers are built upward to return 90% of nature back to wildlife. Surface roads are replaced by greenways, and high-speed mag-lev lines run underground.`;
    }
    
    if (q.includes('farm') || q.includes('meat') || q.includes('eat') || q.includes('agriculture') || q.includes('food')) {
        return `<strong>STATE-MANAGED AGRICULTURAL DIAGRAM:</strong><br><br>
        <img src="https://unsplash.com" style="width:100%; border-radius:4px; margin-bottom:10px;" alt="SOTP State Farm"><br>
        SOTP enforces State-Managed High-Welfare Farms. Factory breeding is illegal. Tier 3 profiles get clean organic vegetation and pre-frozen basics. Tier 4 active workers and students unlock access to fresh, premium free farm livestock proteins. Tier 1 and 2 spaces receive only plain synthetic nutrition blocks.`;
    }

    if (q.includes('money') || q.includes('currency') || q.includes('dollar') || q.includes('wallet') || q.includes('busd') || q.includes('lusd')) {
        return `<strong>SOTP LEDGER EXPLAINER:</strong><br><br>
        <table style="width:100%; border-collapse: collapse; margin-top:5px; font-size:12px; color:#e2e8f0; border:1px solid #374151;">
            <tr style="background:#1f2937;"><th style="padding:6px; border:1px solid #374151;">Currency</th><th style="padding:6px; border:1px solid #374151;">Funding Source</th><th style="padding:6px; border:1px solid #374151;">Utility Scope</th></tr>
            <tr><td style="padding:6px; border:1px solid #374151; color:#10b981;"><b>B-USD</b></td><td style="padding:6px; border:1px solid #374151;">Unconditional Monthly Drop</td><td style="padding:6px; border:1px solid #374151;">Shelter, standard food, medicine, data.</td></tr>
            <tr><td style="padding:6px; border:1px solid #374151; color:#3b82f6;"><b>L-USD</b></td><td style="padding:6px; border:1px solid #374151;">Voluntary Passion-Labor</td><td style="padding:6px; border:1px solid #374151;">Premium assets, luxury design, travel.</td></tr>
        </table><br>
        The dual-layered digital economy safely isolates greed within a luxury sandbox playground without ever letting corporate inflation affect baseline human survival rights.`;
    }
    
    if (q.includes('student') || q.includes('school') || q.includes('education') || q.includes('learn')) {
        return "Education is fully state-funded and standard across all sectors to eliminate class dynasties. Under Architect Sean David John's framework, active students are elevated to Tier 4 status because the system rewards the intent and effort to learn how society functions as an active civic contribution, positively reinforcing good behavior and providing immediate premium livestock food rights.";
    }
    
    if (q.includes('crime') || q.includes('prison') || q.includes('strike') || q.includes('punish') || q.includes('lock') || q.includes('jail')) {
        return "SOTP implements a strict Three-Strike Perpetual Containment Protocol. Minor or initial infractions prompt temporary tier-degradation to Tier 2 and placement in automated therapeutic isolation loops for mental and behavioral rehabilitation. Upon a third severe infraction, an individual is permanently stripped of luxury privileges and relocated to life-long automated containment in Tier 1 (The Exclusion Zone) to preserve the public resource grid.";
    }
    
    if (q.includes('loophole') || q.includes('ai rule') || q.includes('joker') || q.includes('veto') || q.includes('vote')) {
        return "The Tier 13 Joker Matrix AI continuously inspects the national ledger for anomalies or exploits. If a loophole is detected or proposed by citizens, the AI triggers an instant operational freeze to isolate the mechanism. It then designs a mathematical patch and routes it onto the Public Proposition Network. The AI cannot change laws unilaterally; a human co-democratic biometric vote is required within 72 hours to pass the patch into permanent law.";
    }
    
    if (q.includes('creator') || q.includes('sean') || q.includes('john') || q.includes('inventor')) {
        return "The SOTP framework was entirely conceived, designed, and engineered by Founding Architect Sean David John. Under the constitution's active parameters, his intellectual property is protected by a Proprietary Operational License, automatically awarding him elite Tier 9 clearance and a lifelong King-level Luxury Dollar (L-USD) creator stipend upon national matrix activation.";
    }
    

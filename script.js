// SIMULATED DATA DECK ARCHITECTURE
const tierData = {
    1: { busd: 500, lusd: 0, housing: "Automated Therapeutic Isolation Crypt", meals: "Synthetic Nutrition Blocks Only (Zero live farm access; disciplinary setting)", access: "Luxury assets frozen. Full telemetry tracking active. Focus is pure emotional and behavioral rehabilitation. Zero access to fresh live food." },
    3: { busd: 1500, lusd: 0, housing: "Standard Baseline Studio space", meals: "Real State-Farm Organic Fruits, Vegetables, and Standard Pre-Frozen Baseline Proteins", access: "Free unconditional preventative health networks & public ad-supported streaming arrays. Fresh premium livestock proteins are locked." },
    4: { busd: 1750, lusd: 500, housing: "Modern 1-Bedroom urban structural pod", meals: "Premium Access: Unrestricted live farm-raised meats and premium organic livestock fields", access: "Active students and basic foundational workers are assigned Tier 4. SOTP explicitly recognizes the intentional pursuit of knowledge and the active dedication to learning how society functions as milestone contributions. While students have not yet delivered realized positive outputs, their active intent to better serve society is verified by the ledger as a milestone contribution. This systemic framework intentionally rewards positive intent to reinforce good behavior, spark motivation, and collapse boredom-based infractions." },
    7: { busd: 2500, lusd: 8000, housing: "Premium neighborhood housing priority allotment", meals: "Maximum baseline bio-available wellness nutrition blocks and raw farm yields", access: "Priority high-speed mag-lev transit clearance and emergency service network overrides." },
    9: { busd: 5000, lusd: 50000, housing: "Sovereign Structural Design Lab & Global Penthouse", meals: "Unrestricted baseline culinary clearing privileges", access: "Lifelong King-level Founding Creator luxury stipend & absolute system innovation status. Permanent tracking isolation active." }
};

// GLOBAL IMMUTABLE LOOPHOLE & QUESTION LEDGER
let publicQueryArchive = JSON.parse(localStorage.getItem('sotp_public_queries')) || [];

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

// CO-DEMOCRATIC CHAT INTERACTIVE LOGIC
function handleKeyPress(e) { if (e.key === 'Enter') sendQuestion(); }

function sendQuestion() {
    const inputField = document.getElementById('user-input');
    const question = inputField.value.trim();
    if (!question) return;

    // Archive the question permanently in the local data cache
    archiveQuery(question);

    appendMessage(question, 'user', false);
    inputField.value = '';

    setTimeout(() => {
        const reply = processSOTPQuery(question);
        appendMessage(reply, 'ai', true);
    }, 400);
}

function archiveQuery(text) {
    const queryObj = { timestamp: new Date().toISOString(), data: text };
    publicQueryArchive.push(queryObj);
    localStorage.setItem('sotp_public_queries', JSON.stringify(publicQueryArchive));
    console.log("🔒 DATA LOCKED INTO SOTP PUBLIC LEDGER:", queryObj);
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
    
    if (q.includes('send') || q.includes('deploy') || q.includes('text') || q.includes('share') || q.includes('copy') || q.includes('download')) {
        return `<strong>AUTOMATED SOTP DISPATCH DEPLOYED:</strong><br><br>
        The AI Core has generated your localized, ready-to-share distribution pack. Copy the text block below to instantly spread the message via SMS, email, or social media forums:<br><br>
        <textarea style="width:100%; height:100px; background:#0b0f19; color:#10b981; border:1px solid #374151; border-radius:4px; font-family:monospace; padding:5px; font-size:11px;" readonly>
"Hey! You need to look into The Seanocivitasopolis Utopia Project (SOTP) engineered by Sean David John. It's a flaw-free civil design that wipes out rent, medical debt, and starvation by using automated coastline AI systems, while keeping a luxury card market active to reward hard work and creativity out of pure passion. Check out the live interactive website simulator and official manifesto files here to save a copy directly to your phone: [INSERT YOUR LIVE GITHUB PAGES URL HERE]"</textarea><br><br>
        📥 <i>To download the raw text data or use the video creation script to generate further information, copy the Markdown sections directly from the master repository tree folder.</i>`;
    }

    if (q.includes('archive') || q.includes('view questions') || q.includes('see database') || q.includes('loopholes log')) {
        if (publicQueryArchive.length === 0) return "The public query database is currently online and active, but no anomalies or user questions have been logged in this terminal session yet.";
        let list = `<strong>ACTIVE PUBLIC EXCEPTION ARCHIVE (${publicQueryArchive.length} entries):</strong><br><ul style='margin-top:5px; padding-left:20px; font-size:12px;'>`;
        publicQueryArchive.slice(-5).forEach(e => {
            list += `<li><code>[${e.timestamp.substring(11,19)}]</code> ${e.data}</li>`;
        });
        list += "</ul><br><i>This compiled exception data is permanently anchored to the local device data stack. It is open for human architects to download and build legal amendments for city, state, and federal legislatures.</i>";
        return list;
    }

    if (q.includes('contact') || q.includes('reach out') || q.includes('talk to you') || q.includes('get on phone') || q.includes('connect')) {
        return `<strong>SOTP INTERACTIVE LINKING INITIALIZED:</strong><br><br>
        To collaborate directly with the Founding Architect, request consulting parameters, or download a localized copy of this architectural framework directly onto your mobile device, utilize the secure networks below:<br><br>
        📁 <b>Source Code & Manifestos:</b> <a href="https://github.com" target="_blank" style="color:#3b82f6; font-weight:bold;">Access Official GitHub Repo</a><br>
        📡 <b>Immutable Web3 Timestamps:</b> <a href="https://mirror.xyz" target="_blank" style="color:#10b981; font-weight:bold;">Access Mirror Ledger</a><br><br>
        <i>To connect directly with developer <b>Sean David John</b> for municipal scaling projects or media inquiries, please document your structural proposal and submit an interface ticket to his official verified account profiles linked in the portal master dashboard bio.</i>`;
    }

    if (q.includes('disabled') || q.includes('disability') || q.includes('health') || q.includes('trauma') || q.includes('reparations') || q.includes('equitable') || q.includes('equity')) {
        return `<strong>SYSTEM BIO-SOCIAL EQUITABILITY MATRIX ACTIVATED:</strong><br><br>
        SOTP completely rejects simple arithmetic equality in favor of <b>Dynamic Equitability</b>. The system automatically measures stature, historical experience, and baseline deficits:<br><br>
        ♿ <b>Physical Stature:</b> Citizens with disabilities are automatically allocated expanded B-USD multipliers to fund customized medical studio pods, advanced cybernetic mobility prosthetics, and personalized nutrient matrices at zero cost.<br><br>
        ✊ <b>Trauma & Legacy Reparations:</b> Communities or demographics carrying documented footprints of historical or generational exploitation are launched with a permanent <b>Tier 4 Starter Status</b> and immediate regional infrastructure prioritization to perfectly equalize the societal foundation.`;
    }

    if (q.includes('picture') || q.includes('photo') || q.includes('visual') || q.includes('image') || q.includes('look like') || q.includes('city') || q.includes('ring')) {
        return `<strong>HOLOGRAPHIC CITY SCHEMATIC RENDERED:</strong><br><br>
        <img src="https://unsplash.com" style="width:100%; border-radius:4px; margin-bottom:10px;" alt="SOTP City blueprint"><br>

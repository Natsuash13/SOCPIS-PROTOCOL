// SIMULATED DATA DECK ARCHITECTURE (UPDATED TO 14 TIERS)
const tierData = {
    0: { busd: 0, lusd: 0, housing: "Subterranean Crypt-Stasis Capsule (Permanently Sealed)", meals: "Automated Life-Support Intravenous Nutrition (Humane biological maintenance)", access: "Identity profile, token access, and network privileges completely erased from the planet grid. No possibility of rehabilitation or human review core tracking. Permanently isolated to preserve the species." },
    1: { busd: 500, lusd: 0, housing: "Machine-Managed Isolation Biome", meals: "Synthetic Nutrition Blocks Only (Zero live farm access; disciplinary setting)", access: "Severe offenders who verbally state an intent to change. Placed under total machine isolation for decades-long neuro-therapy and biometric empathy tracking arrays." },
    2: { busd: 500, lusd: 0, housing: "Automated Rehabilitation Pod", meals: "Synthetic Nutrition Blocks Only (Zero live farm access; disciplinary setting)", access: "Luxury assets frozen. Full telemetry tracking active. Focus is pure emotional and behavioral rehabilitation. Temporary correction track." },
    3: { busd: 1500, lusd: 0, housing: "Standard Baseline Studio space", meals: "Real State-Farm Organic Fruits, Vegetables, and Standard Pre-Frozen Baseline Proteins", access: "Free unconditional preventative health networks & public ad-supported streaming arrays. Fresh premium livestock proteins are locked." },
    4: { busd: 1750, lusd: 500, housing: "Modern 1-Bedroom urban structural pod", meals: "Premium Access: Unrestricted live farm-raised meats and premium organic livestock fields", access: "Active students and basic foundational workers are assigned Tier 4. SOTP explicitly recognizes the intentional pursuit of knowledge and the active dedication to learning how society functions as milestone contributions. While students have not yet delivered realized positive outputs, their active intent to better serve society is verified by the ledger as a milestone contribution. This systemic framework intentionally rewards positive intent to reinforce good behavior, spark motivation, and collapse boredom-based infractions." },
    7: { busd: 2500, lusd: 8000, housing: "Premium neighborhood housing priority allotment", meals: "Maximum baseline bio-available wellness nutrition blocks and raw farm yields", access: "Priority high-speed mag-lev transit clearance and emergency service network overrides." },
    9: { busd: 5000, lusd: 50000, housing: "Sovereign Structural Design Lab & Global Penthouse", meals: "Unrestricted baseline culinary clearing privileges", access: "Lifelong King-level Founding Creator luxury stipend & absolute system innovation status. Permanent tracking isolation active." }
};

// GLOBAL PUBLIC EXCEPTION LOG (SAVED PERMANENTLY IN BROWSER STORAGE)
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
    
    if (tier <= 2) {
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

// CO-DEMOCRATIC INTERACTIVE COMPILER
function handleKeyPress(e) { if (e.key === 'Enter') sendQuestion(); }

function sendQuestion() {
    const inputField = document.getElementById('user-input');
    const question = inputField.value.trim();
    if (!question) return;

    // Archive the input text permanently to the device database log
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
        The AI Core has generated your localized distribution pack. Copy the text block below to instantly spread the message via SMS or forums:<br><br>
        <textarea style="width:100%; height:90px; background:#0b0f19; color:#10b981; border:1px solid #374151; border-radius:4px; font-family:monospace; padding:5px; font-size:11px;" readonly>
"Look into The Seanocivitasopolis Utopia Project (SOTP) engineered by Sean David John. It's a flaw-free civil design that wipes out rent, medical debt, and starvation by using automated coastline AI systems, while keeping a luxury card market active to reward hard work and creativity out of pure passion. Check out the live interactive website simulator and official manifesto files here: [INSERT YOUR LIVE GITHUB PAGES URL HERE]"</textarea><br><br>
        📥 <i>To download raw system models or use the media creation script, clone the repository tree directly. All original files are protected under Sean David John's Proprietary License.</i>`;
    }

    if (q.includes('archive') || q.includes('view questions') || q.includes('see database') || q.includes('loopholes log')) {
        if (publicQueryArchive.length === 0) return "The public query database is online, but no exceptions have been logged in this terminal session yet.";
        let list = `<strong>ACTIVE PUBLIC EXCEPTION ARCHIVE (${publicQueryArchive.length} entries):</strong><br><ul style='margin-top:5px; padding-left:20px; font-size:12px;'>`;
        publicQueryArchive.slice(-5).forEach(e => {
            list += `<li><code>[${e.timestamp.substring(11,19)}]</code> ${e.data}</li>`;
        });
        list += "</ul><br><i>This compiled exception data is permanently anchored to the local device cache data stack. It is open for human architects to download and build legal amendments for city, state, and federal legislatures.</i>";
        return list;
    }

    if (q.includes('crime') || q.includes('prison') || q.includes('strike') || q.includes('punish') || q.includes('lock') || q.includes('jail') || q.includes('tier 0') || q.includes('tier zero') || q.includes('murder')) {
        return `<strong>SYSTEM CONTAINMENT AIRLOCK RE-ALIGNED:</strong><br><br>
        SOTP operates on a 14-Tier Matrix with an ironclad containment airlock to preserve human life:<br><br>
        🚫 <b>Tier 2:</b> Standard infractions face temporary tier-degradation and placement in automated therapeutic isolation pods under synthetic nutrition blocks.<br><br>
        ⛓️ <b>Tier 1:</b> Severe violent offenders who verbally express an intent to change are isolated for decades of intense machine-managed neuro-therapy and biometric empathy tracking.<br><br>
        🕳️ <b>Tier 0 (The Void):</b> Mass threats completely beyond control or help are permanently placed into a comfortable, automated subterranean crypt-stasis capsule for life. Data profiles are erased, with zero possibility of return, strictly to protect the collective population.`;
    }

    if (q.includes('contact') || q.includes('reach out') || q.includes('talk to you') || q.includes('connect')) {
        return `<strong>SOTP INTERACTIVE LINKING INITIALIZED:</strong><br><br>
        To collaborate directly with the Founding Architect, request consulting parameters, or download a localized copy of this architectural framework directly onto your mobile device, utilize the secure networks below:<br><br>
        📁 <b>Source Code & Manifestos:</b> <a href="https://github.com" target="_blank" style="color:#3b82f6; font-weight:bold;">Access Official GitHub Repo</a><br>
        📡 <b>Immutable Web3 Timestamps:</b> <a href="https://mirror.xyz" target="_blank" style="color:#10b981; font-weight:bold;">Access Mirror Ledger</a><br><br>
        <i>To connect directly with developer <b>Sean David John</b> for municipal scaling projects or media inquiries, submit an interface ticket to his official verified account profiles linked in the portal master dashboard bio.</i>`;
    }

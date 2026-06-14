document.addEventListener('DOMContentLoaded', () => {
    const tierSelect = document.getElementById('tierSelect');
    const busdVal = document.getElementById('busdVal');
    const lusdVal = document.getElementById('lusdVal');
    const permVal = document.getElementById('permVal');
    const aapReason = document.getElementById('aapReason');

    // Structural Configuration Mapping Rights vs Privileges
    const matrixConfig = {
        '2': { busd: 5000, lusdMult: 0.0, perms: "Tier 2: Privileges Paused | UNCONDITIONAL SURVIVAL RIGHTS LOCKED" },
        '3': { busd: 5000, lusdMult: 1.0, perms: "Full Unconditional Civil Sovereignty (Baseline Floor)" },
        '4': { busd: 6500, lusdMult: 1.2, perms: "Full Civil Sovereignty + Advanced LCI Training Assets" },
        '7': { busd: 5000, lusdMult: 2.5, perms: "Full Civil Sovereignty + Active Contributor Privilege" },
        '11': { busd: 5000, lusdMult: 4.0, perms: "Conditional Administrative Logistical Authority Privilege" },
        '12': { busd: 5000, lusdMult: 5.0, perms: "Conditional Planetary Resource Allocation Signatory Privilege" }
    };

    let currentLusdWallet = 500.00;

    function updateSimulation() {
        const selectedTier = tierSelect.value;
        const config = matrixConfig[selectedTier];

        if (config) {
            busdVal.textContent = `$${config.busd.toLocaleString()} / mo (Universal Right Base)`;
            lusdVal.textContent = `${config.lusdMult.toFixed(1)}x (Merit Privilege Pool)`;
            permVal.textContent = `${config.perms} | BST Status: BIOMETRICALLY ACTIVE`;
        }
    }

    // Handlers for Universal Rights Protection vs Privilege Verification
    window.simulateBSTTransaction = function(itemType, isOveruse) {
        const activeTier = tierSelect.value;
        const activeConfig = matrixConfig[activeTier];

        // Absolute Right Validation: Standard baseline never depletes or asks for human currency
        if (itemType === 'baseline' && !isOveruse) {
            alert(`✅ [BST Tap Validated] Pulse & Thermal Verified.\nProcessing B-USD Baseline Asset.\nCost Covered via Systemic Abundance Pool ($0 Net Out-of-Pocket).\n\nResult: Universal human survival right fully guaranteed.`);
            return;
        }

        // Restriction of Privilege Check: Tier 2 cannot bypass privilege boundaries, but survival is never touched
        if (activeTier === '2' && (itemType === 'luxury' || isOveruse)) {
            alert("❌ BST Transaction Denied:\nTier 2 profiles have luxury privilege deviations suspended during active rehabilitation. Universal human survival rights remain completely operational.");
            return;
        }

        // Human Rights Firewall Overuse Handling: AI Sinks the loop, transforms the error to an allocation flex
        if (itemType === 'baseline' && isOveruse) {
            alert(`⚠️ [AI LOOPHOLE SCANNER ACTIVE]\n\nConsumption ceiling alert detected! To preserve planetary equilibrium, the AI has audited this data stream.\n\nFirewall Execution: To guarantee no backdoors deny basic human rights, this spike is classified as an Infrastructure Logistics Deficit.\n\nTransaction: APPROVED automatically at $0 out-of-pocket cost. Your baseline human right cannot be restricted or forced into a luxury expense.`);
            return;
        }

        // Privilege Consumption Flow
        if (itemType === 'luxury') {
            const adjustedCost = 150 / (activeConfig ? activeConfig.lusdMult : 1);
            if (currentLusdWallet >= adjustedCost) {
                currentLusdWallet -= adjustedCost;
                alert(`💳 [BST Tap Validated] Privilege Verified.\nL-USD Account Debited: L$${adjustedCost.toFixed(2)} (Scaled by official merit tier value).\nRemaining Luxury Balance: L$${currentLusdWallet.toFixed(2)}`);
            } else {
                alert(`❌ BST Transaction Denied:\nInsufficient L-USD merit privileges available in your profile. Baseline survival resources remain completely unaffected.`);
            }
        }
    };

    // Simulated Attempted Corporate/Legislative Exploitation Vector
    window.simulateSystemExploit = function() {
        alert("🚨 [ATTACK SIMULATION RUNNING]\nAn elite group of officials is testing a backdoor legal clause to ration regional healthcare or withhold baseline nutritional calories under a capitalistic austerity model...");
        
        setTimeout(() => {
            alert("🛡️ [AI AUTOMATED SECURITY CORE TRIGGERED]\nLoophole fully detected and neutralized! System logic recognizes a violation of the Human Inviolability Mandate.\n\nAction: The hostile legislation is permanently blocked from execution. The offending officials' Tier 11/12 authority privileges have been instantly stripped down to Tier 2 Rehabilitation. Equitable resource management remains fully locked.");
        }, 1500);
    };

    // Adaptive Allocation Portal Handler
    window.submitAAPRequest = function() {
        const activeTier = tierSelect.value;
        const reason = aapReason.value;

        if (activeTier === '2') {
            alert("❌ AAP Access Denied:\nRehabilitation tier profiles must have structural physiological threshold calibrations validated by a Tier 11 Human supervisor.");
            return;
        }

        alert(`🔄 [AAP Biometric Sync Active]\nScanning BST Card skin-galvanic responses...\nTelemetry verified for request type: [${reason.toUpperCase()}]\nSystemic allocation thresholds successfully recalculated and updated.`);
    };

    tierSelect.addEventListener('change', updateSimulation);
    updateSimulation();
});

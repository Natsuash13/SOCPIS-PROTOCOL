document.addEventListener('DOMContentLoaded', () => {
    const tierSelect = document.getElementById('tierSelect');
    const busdVal = document.getElementById('busdVal');
    const lusdVal = document.getElementById('lusdVal');
    const permVal = document.getElementById('permVal');
    const aapReason = document.getElementById('aapReason');

    const matrixConfig = {
        '2': { busd: 5000, lusdMult: 0.0, perms: "Access Restricted to Correction Floor Services" },
        '3': { busd: 5000, lusdMult: 1.0, perms: "Full Unconditional Civil Sovereignty" },
        '4': { busd: 6500, lusdMult: 1.2, perms: "Full Civil Sovereignty + Advanced Training Assets" },
        '7': { busd: 5000, lusdMult: 2.5, perms: "Full Civil Sovereignty + Local Advisory Franchise" },
        '11': { busd: 5000, lusdMult: 4.0, perms: "Administrative Logistical Actions Authorization" },
        '12': { busd: 5000, lusdMult: 5.0, perms: "Planetary Global Resource Allocation Signatory" }
    };

    let currentLusdWallet = 500.00;

    function updateSimulation() {
        const selectedTier = tierSelect.value;
        const config = matrixConfig[selectedTier];

        if (config) {
            busdVal.textContent = `$${config.busd.toLocaleString()} / mo (Universal Base)`;
            lusdVal.textContent = `${config.lusdMult.toFixed(1)}x (Merit Multiplier Pool)`;
            permVal.textContent = `${config.perms} | BST Card Status: BIOMETRICALLY SYNCED`;
        }
    }

    window.simulateBSTTransaction = function(itemType, isOveruse) {
        const activeTier = tierSelect.value;
        const activeConfig = matrixConfig[activeTier];

        if (activeTier === '2' && (itemType === 'luxury' || isOveruse)) {
            alert("❌ BST Transaction Rejected:\nTier 2 accounts have luxury and resource-excess privileges suspended during active rehabilitation.");
            return;
        }

        if (itemType === 'baseline' && !isOveruse) {
            alert(`✅ [BST Tap Validated] Micro-pulse verified.\nProcessing B-USD Baseline Asset.\nCost Covered via Systemic Abundance Pool ($0 Net Out-of-Pocket).`);
            return;
        }

        if (itemType === 'baseline' && isOveruse) {
            const proceedAsLuxury = confirm(
                `⚠️ RESOURCE CEILING WARNING!\n\nThis transaction exceeds standard consumption limits for this period.\nTo preserve planetary equilibrium, this cannot be covered by B-USD credit.\n\nWould you like to convert this into an L-USD Luxury purchase?`
            );

            if (proceedAsLuxury) {
                executeLuxuryDeduction(100, activeConfig);
            } else {
                alert("🛒 Transaction Modified:\nExcess items removed. Your standard baseline balance remains untouched.");
            }
            return;
        }

        if (itemType === 'luxury') {
            executeLuxuryDeduction(150, activeConfig);
        }
    };

    function executeLuxuryDeduction(baseCost, activeConfig) {
        const adjustedCost = baseCost / (activeConfig ? activeConfig.lusdMult : 1);
        if (currentLusdWallet >= adjustedCost) {
            currentLusdWallet -= adjustedCost;
            alert(`💳 [BST Tap Validated] Biometrics Confirmed.\nL-USD Account Debited: L$${adjustedCost.toFixed(2)} (Adjusted by Merit Scale).\nRemaining Luxury Balance: L$${currentLusdWallet.toFixed(2)}`);
        } else {
            alert(`❌ BST Transaction Denied:\nInsufficient L-USD merit tokens available in your hardware profile.`);
        }
    }

    // New Adaptive Allocation Portal Logic
    window.submitAAPRequest = function() {
        const activeTier = tierSelect.value;
        const reason = aapReason.value;

        if (activeTier === '2') {
            alert("❌ AAP Access Denied:\nRehabilitation tier profiles cannot recalibrate baseline allocations autonomously.");
            return;
        }

        alert(`🔄 [AAP Biometric Sync Active]\nScanning BST Card skin-galvanic responses...\nTelemetry verified for request type: [${reason.toUpperCase()}]\nSystemic allocation thresholds successfully recalculated and updated.`);
    };

    tierSelect.addEventListener('change', updateSimulation);
    updateSimulation();
});

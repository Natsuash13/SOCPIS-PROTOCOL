import os
import sys

# 1. SECURITY: Architect Key is stored as a Replit Secret
# Ensure you have added 'ARCHITECT_KEY' to your Replit Tools > Secrets.
ARCHITECT_KEY = os.environ.get('ARCHITECT_KEY', 'default_key')

# 2. CORE SYSTEM: The Moral Lock and Survival Firewall
class HumanGatekeeperProtocol:
    def __init__(self):
        self.moral_lock_active = True

    def verify_transaction(self, user_node, request_type):
        """Ensures the B-USD survival floor is never breached."""
        if not self.moral_lock_active:
            return True
        if user_node.b_usd < 0:
            return False
        return True

# 3. LOGISTICAL ENGINE: Step-by-Step resource processing
class LogisticalControlBus:
    def process_allocation(self, node):
        print(f"STEP 01 [FETCH]: Monitoring regional resource availability for {node.name}...")
        print("STEP 02 [DECODE]: Mapping needs against B-USD baseline...")
        print("STEP 03 [EXECUTE]: Allocation authorized.")

# 4. FLUID MERITOCRACY: Impact-based Tiering
class TieredEngagementProtocol:
    def __init__(self):
        # Thresholds for fluid impact-based tiers (0-14)
        self.tier_thresholds = {
            14: 100000, # Collective Consensus
            13: 50000,  # Joker AI Safety Valve
            12: 10000,  # Strategic Architect
            11: 5000,
            10: 2500,
            5: 500,     # Impact Spectrum entry
            4: 200,     # Legacy Calibration
            3: 100,     # Universal Baseline
            0: 0        # Sovereign Node
        }

    def calculate_tier(self, impact_score):
        # Dynamic calculation: Tiers determined by impact score, not job titles
        for tier in sorted(self.tier_thresholds.keys(), reverse=True):
            if impact_score >= self.tier_thresholds[tier]:
                return tier
        return 0

# 5. USER NODE: The individual entity
class UserNode:
    def __init__(self, name, impact_score, b_usd):
        self.name = name
        self.impact_score = impact_score
        self.b_usd = b_usd
        self.tier = 0

    def update_status(self, tiered_protocol):
        self.tier = tiered_protocol.calculate_tier(self.impact_score)

# 6. INITIALIZATION: Accessing the system
def initialize_protocol():
    print("--- SOCPLISS Protocol Initializing ---")
    key = input("Enter Architect Key to unlock Moral Lock: ")
    # Checks against Replit Environment Secret
    if key == ARCHITECT_KEY:
        print("Moral Lock Unlocked. System Stable.")
        return True
    else:
        print("Invalid Key. Protocol Halted.")
        return False

# 7. EXECUTION
if __name__ == "__main__":
    if initialize_protocol():
        # Instantiate system components
        gatekeeper = HumanGatekeeperProtocol()
        logistics = LogisticalControlBus()
        protocol = TieredEngagementProtocol()
        
        # Example: Citizen_Alpha initialization
        node = UserNode("Citizen_Alpha", 650, 1000) 
        node.update_status(protocol)
        
        # System check
        if gatekeeper.verify_transaction(node, "Allocation"):
            logistics.process_allocation(node)
            print(f"Node: {node.name}")
            print(f"Current Impact Score: {node.impact_score}")
            print(f"Current Fluid Tier: {node.tier}")
        else:
            print("Transaction Rejected: Survival Floor Violation.")
    else:
        sys.exit()

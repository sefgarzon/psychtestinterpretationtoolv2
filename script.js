console.log("Script loaded successfully!");
// Helper for randomization
const shuffle = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Pronoun Formatting
function format(text) {
    const gender = document.getElementById('gender').value;
    if (gender === 'male') return text;
    const map = { "he": "she", "He": "She", "his": "her", "His": "Her", "him": "her" };
    let res = text;
    for (let key in map) {
        res = res.replace(new RegExp(`\\b${key}\\b`, 'g'), map[key]);
    }
    return res;
}

// 1. Mental Ability Logic
function interpretMental() {
    const val = document.getElementById('mentalAbility').value;
    const box = document.getElementById('res_mental');
    if (!val) { box.innerText = "..."; return; }
    
    // Pick a result from the array in data.js
    box.innerText = format(shuffle(WPC_DATA.mentalAbility[val]));
}

// 2. BPI Narrative Logic
function interpretBPI() {
    const selectors = document.querySelectorAll('.bpi-sel');
    const box = document.getElementById('res_bpi');
    let activeInterpretations = [];

    selectors.forEach(sel => {
        const val = sel.value;
        const traitKey = sel.dataset.trait;

        // Only act if the user has picked Low or High
        if (val === 'low' || val === 'high') {
            let text = WPC_DATA.bpi[traitKey][val];
            
            // Trim whitespace and remove any trailing periods to standardize
            let cleanText = text.trim().replace(/\.$/, "");
            activeInterpretations.push(cleanText);
        }
    });

    // Handle the visual display
    if (activeInterpretations.length === 0) {
        box.innerText = "...";
        return;
    }

    // MAP logic to handle paragraph grammar:
    // 1. Keep the first item lowercase to flow with the prefix.
    // 2. Capitalize every item after the first one.
    let paragraphParts = activeInterpretations.map((text, index) => {
        if (index === 0) return text;
        return text.charAt(0).toUpperCase() + text.slice(1);
    });

    // Join with ". " to create a real paragraph and add a final period.
    let finalNarrative = "In terms of his personality, " + paragraphParts.join(". ") + ".";

    box.innerText = format(finalNarrative);
}

// 3. EQ Paragraph Logic
function interpretEQ() {
    const gender = document.getElementById('gender').value;
    const box = document.getElementById('res_eq');
    
    const scales = [
        { id: 'eq_intra', key: 'intrapersonal' },
        { id: 'eq_inter', key: 'interpersonal' },
        { id: 'eq_stres', key: 'stressManagement' },
        { id: 'eq_adapt', key: 'adaptability' }
    ];

    let activeSentences = [];
    let isInvalid = false;

    scales.forEach(s => {
        const dropdown = document.getElementById(s.id);
        const val = dropdown.value;

        // 1. Check if ANY dropdown is set to invalid
        if (val === 'invalid') {
            isInvalid = true;
        } 
        // 2. Otherwise, collect valid interpretations
        else if (val === 'low' || val === 'average' || val === 'high') {
            let text = WPC_DATA.eq[s.key][val][gender];
            if (text) {
                let cleanText = text.trim().replace(/\.$/, "");
                activeSentences.push(cleanText);
            }
        }
    });

    // --- DISPLAY LOGIC ---

    // Priority 1: If any selection is Invalid, show the Invalid message ONCE.
    if (isInvalid) {
        // This pulls the text from your data.js (using 'intrapersonal' as the reference key)
        const invalidText = WPC_DATA.eq.intrapersonal.invalid[gender];
        box.innerText = format(invalidText);
        return; 
    }

    // Priority 2: If nothing is selected, show placeholder
    if (activeSentences.length === 0) {
        box.innerText = "...";
        return;
    }

    // Priority 3: Show the paragraph
    let formattedParagraph = activeSentences.map((text, index) => {
        if (index === 0) return text;
        return text.charAt(0).toUpperCase() + text.slice(1);
    });

    let finalNarrative = formattedParagraph.join(". ") + ".";
    box.innerText = format(finalNarrative);
}

//4. Leadership Logic
function interpretLeadership() {
    const gender = document.getElementById('gender').value;
    const val = document.getElementById('leadership').value;
    const box = document.getElementById('res_leadership');

    // If "Select Result..." is picked, clear the box
    if (!val) {
        box.innerText = "...";
        return;
    }

    const key = val.toLowerCase();

    try {
        const options = WPC_DATA.leadership[key][gender];

        if (Array.isArray(options)) {
            // Math.random() picks a number between 0 and 1 (e.g. 0.5)
            // Multiplying by options.length (4) gives us a range up to 4
            // Math.floor rounds it down to 0, 1, 2, or 3
            const randomIndex = Math.floor(Math.random() * options.length);
            
            box.innerText = format(options[randomIndex]);
        } else {
            // Fallback if there is only one string and not an array
            box.innerText = format(options);
        }
    } catch (e) {
        console.error("Leadership Error:", e);
        box.innerText = "Error: Data for this style or gender is missing.";
    }
}
// 5. Function for Conflict
function interpretConflict() {
    const gender = document.getElementById('gender').value;
    const val = document.getElementById('conflict').value;
    const box = document.getElementById('res_conflict');

    // If "Select Result..." is picked, clear the box
    if (!val) {
        box.innerText = "...";
        return;
    }

    const key = val.toLowerCase();

    try {
        const options = WPC_DATA.conflict[key][gender];

        if (Array.isArray(options)) {
            // Math.random() picks a number between 0 and 1 (e.g. 0.5)
            // Multiplying by options.length (4) gives us a range up to 4
            // Math.floor rounds it down to 0, 1, 2, or 3
            const randomIndex = Math.floor(Math.random() * options.length);
            
            box.innerText = format(options[randomIndex]);
        } else {
            // Fallback if there is only one string and not an array
            box.innerText = format(options);
        }
    } catch (e) {
        console.error("Conflict Error:", e);
        box.innerText = "Error: Data for this style or gender is missing.";
    }
}

// 6. Function for Teaching
function interpretTeaching() {
    const gender = document.getElementById('gender').value;
    const val = document.getElementById('teaching').value; // e.g., "expert" or "formal authority"
    const box = document.getElementById('res_teaching');

    if (!val) {
        box.innerText = "...";
        return;
    }

    try {
        // Access: WPC_DATA.teaching["expert"]["male"]
        const options = WPC_DATA.teaching[val][gender];

        if (Array.isArray(options)) {
            // Picking a random one (currently you have 1, but this allows for 4 later)
            const randomIndex = Math.floor(Math.random() * options.length);
            box.innerText = format(options[randomIndex]);
        } else {
            box.innerText = format(options);
        }
    } catch (e) {
        console.error("Teaching Style Error:", e);
        box.innerText = "Error: Data not found for " + val;
    }
}

//7. Function for Anxiety and Depression (they work the same way, just different data arrays)
function interpretAnxiety() {
    const score = parseInt(document.getElementById('anxietyScore').value);
    const box = document.getElementById('res_anxiety');
    
    if (isNaN(score)) { box.innerText = "..."; return; }

    try {
        // Look for the array in both possible locations
        const dataPath = WPC_DATA.anxiety || (WPC_DATA.beck && WPC_DATA.beck.anxiety);
        
        if (!dataPath || !Array.isArray(dataPath)) {
            box.innerText = "Error: Anxiety data list not found in data.js";
            return;
        }

        const result = dataPath.find(item => score <= item.max);
        box.innerText = result ? format(result.text) : format(dataPath[dataPath.length - 1].text);
    } catch (e) {
        box.innerText = "Error: Check data.js syntax.";
        console.error(e);
    }
}

function interpretDepression() {
    const score = parseInt(document.getElementById('depressionScore').value);
    const box = document.getElementById('res_depression');
    
    if (isNaN(score)) { box.innerText = "..."; return; }

    try {
        // Look for the array in both possible locations
        const dataPath = WPC_DATA.depression || (WPC_DATA.beck && WPC_DATA.beck.depression);
        
        if (!dataPath || !Array.isArray(dataPath)) {
            box.innerText = "Error: Depression data list not found in data.js";
            return;
        }

        const result = dataPath.find(item => score <= item.max);
        box.innerText = result ? format(result.text) : format(dataPath[dataPath.length - 1].text);
    } catch (e) {
        box.innerText = "Error: Check data.js syntax.";
        console.error(e);
    }
}
// 8. Utility: Copy Text
function copyText(id) {
    const text = document.getElementById(id).innerText;
    if (text && text !== "...") {
        navigator.clipboard.writeText(text);
        alert("Copied!");
    }
}

// On Page Load: Generate BPI rows dynamically
// --- ALL INITIALIZATION LOGIC IN ONE PLACE ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup BPI Traits
    const traits = ["hypochondriasis", "depression", "anxiety", "interpersonal", "alienation", "impulse", "persecutory", "thinking", "introversion", "selfDepreciation", "deviation", "denial"];
    const container = document.getElementById('bpiContainer');
    
    if (container && container.innerHTML === "") { // Prevent double-loading
        traits.forEach(t => {
            const div = document.createElement('div');
            div.className = 'bpi-row';
            div.innerHTML = `
                <label>${t.toUpperCase()}</label>
                <select class="bpi-sel" data-trait="${t}" onchange="interpretBPI()">
                    <option value="" selected>Select Result...</option> 
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>`;
            container.appendChild(div);
        });
    }

    // 2. Clear result boxes
    document.querySelectorAll('.result-box').forEach(box => {
        box.innerText = "...";
    });

    // 3. Initialize the view
    switchModule();
});

// --- THE SWITCHER FUNCTION ---
window.switchModule = function() {
    const selectedCategory = document.getElementById('master_switcher').value;
    const allowedTests = categoryMapping[selectedCategory] || [];
    const allSections = document.querySelectorAll('.test-section');

    allSections.forEach(section => {
        const testName = section.id.replace('test_', '');
        // We use 'display: block' for shown and 'none' for hidden
        section.style.display = allowedTests.includes(testName) ? "block" : "none";
    });
};

//8. 16PF
// Verification that script is running
console.log("16PF Script Loaded");

const pfData = {
    'A': { low: "Tends to be reserved, impersonal, distant, cool, aloof; more cautious in involvement and attachments, quite uncomfortable in situations that call for extensive interactions or for emotional closeness.", high: "Tends to be warm, outgoing, attentive to others, easy going, participating." },
    'B': { low: "Tends to be slow to learn and grasp ideas, given to concrete and literal interpretation, unable to handle abstract problems.", high: "Tends to be quick to grasp ideas, has higher general mental capacity, fast learner and intelligent." },
    'C': { low: "Tends to be low in frustration tolerance for unsatisfactory conditions, evading necessary reality demands; easily annoyed and emotionally affected.", high: "Tends to take life on the stride and to manage events and emotions in a balanced adaptive way, emotionally mature, stable, and realistic about life." },
    'E': { low: "Tends to be accommodating of others, avoids conflict, submissive, conforming, humble and obedient.", high: "Tends to be dominant, assertive, self-assured and independent-minded; forceful and vocal in expressing wishes and opinions." },
    'F': { low: "Tends to take life more seriously; quieter, more cautious and less playful.", high: "Tends to be enthusiastic, spontaneous and attention-seeking; lively and drawn to stimulating social situations." },
    'G': { low: "Tends to be expedient and might have difficulty in conforming to strict rules and regulations.", high: "Tends to emphasize the importance of conformance to regulations, depicting oneself as rule-bound, conscientious, and persevering." },
    'H': { low: "Tends to be socially timid, cautious and shy.", high: "Tends to be socially bold, venturesome, initiates social contacts and uninhibited in the face of new social settings." },
    'I': { low: "Tends to be objective and less sentimental; concerned more with how things operate and may exclude people’s feelings from consideration.", high: "Tends to base judgment on personal taste and aesthetic values; relies on empathy and sensitivity in considerations; tends to be more refined in interests and tastes; more sentimental." },
    'L': { low: "Tends to be trusting, unsuspecting and accepting of others.", high: "Tends to be cautious, suspicious, skeptical and on-guard with regards to people’s motives, hence hard to fool." },
    'M': { low: "Tends to be more focused on ones senses, observable data, and the outer realities of ones environment in forming perceptions (practical).", high: "Tends to be more oriented to the internal mental processes and ideas rather than to practicalities; occupied with thinking, imagination, and fantasy and often gets lost in thought; yet thinking often leads to idea-generation and is related to creativity." },
    'N': { low: "Tends to be forthright, genuine, open and unpretentious.", high: "Tends to be personally guarded; may maintain privacy at the expense of developing close relationships with others." },
    'O': { low: "Tends to be self-assured, unworried, complacent, secure and confident.", high: "Tends to worry about things and to feel apprehensive and insecure." },
    'Q1': { low: "Tends to prefer traditional ways of looking at things; conservative.", high: "Tends to think on ways to improve things and to enjoy experimenting; inclined to change things when the status quo is perceived to be unsatisfactory or dull." },
    'Q2': { low: "Tends to be group-oriented, affiliative, a joiner and group adhering.", high: "Tends to enjoy time alone and prefers to make decisions for oneself; likes to do planning alone, without interruptions or suggestions from others; would rather work alone than with a committee." },
    'Q3': { low: "Tends to leave more things to chance and tend to be more comfortable to be in a disorganized setting.", high: "Perfectionistic, organized, compulsive, self-disciplined, and socially précised." },
    'Q4': { low: "Tends to feel relaxed and tranquil; patient and slow to become frustrated.", high: "Tends to have a restless energy, impatient, driven and frustrated." },
   'Extraversion': { 
    low: "Values time spent alone or in solitary pursuits, being generally less inclined to seek out interaction with others.", 
    high: "Tends to be people-oriented and to seek out relationships with others." 
},
'Independence': { 
    low: "Tends to be agreeable and accommodating to other people and external influences rather than being self-determining.", 
    high: "Tends to take charge of situations and to influence others rather than be influenced." 
},
'ToughMindedness': { 
    low: "Open to feelings, imagination, people and new ideas.", 
    high: "Prefers logical, realistic solutions to problems." 
},
'SelfControl': { 
    low: "Tends to follow urges; may be flexible in responses; however, in situations that call for self-control, may find it difficult to restrain one self.", 
    high: "Conscientious and has substantial resources for controlling behavior and meeting responsibilities." 
},
'Anxiety': { 
    low: "Tends to be unperturbed by most events and less easily upset than most people.", 
    high: "Tends to be more easily upset by events, they are more perturbed, both by internal thoughts and feelings as well as external events." 
},
    'IM': { low: "VALID (Fair/Low Impression Management)", high: "VALID (High Impression Management)" }
};

window.interpret16PF = function(factor) {
    // 1. Find the input box and the result box
    const input = document.getElementById('score_' + factor);
    const box = document.getElementById('res_' + factor);
    const score = parseInt(input.value);

    // 2. If the user hasn't typed a number yet, show dots
    if (isNaN(score)) { box.innerText = "..."; return; }

    // 3. Special Rule for IM (Impression Management)
    if (factor === 'IM') {
        box.innerText = (score >= 4 && score <= 20) ? "VALID" : "NOT VALID";
        return; 
    }

    // 4. Standard Rules for Factors A through Q4 (Sten scores 1-10)
    if (score >= 1 && score <= 3) {
        box.innerText = pfData[factor].low;
    } else if (score >= 8 && score <= 10) {
        box.innerText = pfData[factor].high;
    } else if (score >= 4 && score <= 7) {
        box.innerText = "Average/Typical range.";
    } else {
        box.innerText = "Invalid! Enter 1-10.";
    }
};

window.copyText = function(id) {
    const box = document.getElementById(id);
    const text = box.innerText;
    if (text === "..." || text === "") return;
    navigator.clipboard.writeText(text).then(() => {
        box.style.background = "#e2ffeb";
        setTimeout(() => box.style.background = "white", 300);
    });
};


const categoryMapping = {
    '': [],
    'module_gpppe': ['mental', 'bpi', 'leadership', 'conflict'],
    'module_gpppp': ['mental', 'bpi', 'leadership', 'conflict', 'anxiety', 'depression'],
    'module_te': ['mental', 'bpi','teaching', 'conflict'],
    'module_tp': ['mental', 'bpi', 'teaching', 'conflict', 'anxiety', 'depression'],
    'module_ntgdfe': ['mental', 'bpi', 'leadership', 'conflict'],
    'module_ntgdfp': ['mental', 'bpi', 'leadership', 'conflict', 'anxiety', 'depression'],
    'module_stit': ['mental', 'bpi', '16pf', 'eq', 'teaching', 'conflict'],
    'module_stint': ['mental', 'bpi', '16pf', 'eq', 'leadership', 'conflict'],
    'module_sjit': ['mental', 'bpi', '16pf', 'eq', 'teaching', 'conflict'],
    'module_sjint': ['mental', 'bpi', '16pf', 'eq', 'leadership', 'conflict'],
    'module_csaba': ['mental', '16pf', 'eq', 'anxiety', 'depression'],
    'module_wvsue': ['mental', 'bpi', 'arp', 'eq'],
    'module_wvsua': ['mental', 'bpi', 'eq', 'anxiety', 'depression'],
    'module_amosup': ['mental', 'bpi', 'eq', 'leadership', 'conflict', 'anxiety', 'depression'],
    'module_ifi': ['mental', 'bpi', '16pf', 'eq', 'teaching', 'conflict'],
    'module_pga': ['mental', 'bpi', 'eq', 'anxiety', 'depression'],
    'module_baciwa': ['mental', 'bpi', 'eq', 'leadership', 'conflict', 'anxiety', 'depression'],
    'module_usls': ['mental', 'bpi', '16pf', 'eq', 'anxiety', 'depression', 'leadership', 'conflict'],
    'module_napolcom': ['mental', 'bpi', '16pf', 'anxiety', 'depression', 'leadership', 'conflict'],
    'module_bamc': ['mental', 'bpi', 'eq', 'leadership', 'conflict', 'anxiety', 'depression'],
    'module_court': ['mental', 'eq', 'anxiety', 'depression'],
    'module_mobile': ['mental', 'bpi', 'leadership', 'conflict', 'anxiety', 'depression']

};
window.switchModule = function() {
    // 1. Get the value from the dropdown
    const dropdown = document.getElementById('master_switcher');
    const selectedCategory = dropdown.value;
    
    // 2. Get the list of tests for that category
    const allowedTests = categoryMapping[selectedCategory] || [];

    // 3. Find ALL sections that have the 'test-section' class
    const allSections = document.querySelectorAll('.test-section');

    // 4. Loop through every section found
    allSections.forEach(section => {
        // Remove "test_" from the ID (e.g., 'test_mental' -> 'mental')
        const testName = section.id.replace('test_', '');

        if (allowedTests.includes(testName)) {
            // SHOW the test
            section.style.setProperty("display", "block", "important");
        } else {
            // HIDE the test
            section.style.setProperty("display", "none", "important");
        }
    });
};

// RUN ONCE ON LOAD
document.addEventListener('DOMContentLoaded', switchModule);
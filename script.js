const skillData = {
    python: {
        title: "Python",
        description: "Programming fundamentals and concepts I have learned.",
        topics: [
            "Variables and data types",
            "Input and output",
            "Conditional statements",
            "Loops",
            "Functions",
            "Basic problem solving"
        ]
    },

    c: {
        title: "C Programming",
        description: "C programming fundamentals and concepts.",
        topics: [
            "Variables and data types",
            "Input and output",
            "Operators",
            "If-else and switch statements",
            "For, while, and do-while loops",
            "Arrays",
            "Functions"
        ]
    },

    java: {
        title: "Java",
        description: "Java programming fundamentals.",
        topics: [
            "Variables and data types",
            "Input using Scanner",
            "Conditional statements",
            "Switch statements",
            "Loops",
            "Basic object-oriented programming"
        ]
    },

    linux: {
        title: "Linux",
        description: "Linux operating system and command-line fundamentals.",
        topics: [
            "Linux terminal basics",
            "File and directory navigation",
            "File management commands",
            "File permissions",
            "Basic system commands"
        ]
    },

    networking: {
        title: "Networking",
        description: "Computer networking fundamentals.",
        topics: [
            "IP addresses",
            "MAC addresses",
            "DNS",
            "DHCP",
            "OSI model",
            "TCP/IP fundamentals",
            "Basic network troubleshooting"
        ]
    },

    aiml: {
        title: "AI / ML Basics",
        description: "Introduction to artificial intelligence and machine learning.",
        topics: [
            "AI and machine learning fundamentals",
            "Supervised and unsupervised learning",
            "Datasets and features",
            "Basic model training concepts",
            "Introduction to NumPy and Pandas"
        ]
    },

    cybersecurity: {
        title: "Cybersecurity",
        description: "Cybersecurity fundamentals and responsible security practices.",
        topics: [
            "Security fundamentals",
            "Common cyber threats",
            "Authentication and passwords",
            "Network security basics",
            "Ethical hacking fundamentals",
            "Authorized security testing"
        ]
    }
};

const skillButtons = document.querySelectorAll(".skill-btn");
const skillDetails = document.getElementById("skill-details");
const skillTitle = document.getElementById("skill-title");
const skillDescription = document.getElementById("skill-description");
const skillTopics = document.getElementById("skill-topics");

skillButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const skill = skillData[button.dataset.skill];

        if (!skill) return;

        skillButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        skillTitle.textContent = skill.title;
        skillDescription.textContent = skill.description;
        skillTopics.replaceChildren();

        skill.topics.forEach(function (topic) {
            const li = document.createElement("li");
            li.textContent = topic;
            skillTopics.appendChild(li);
        });

        skillDetails.classList.add("visible");
    });
});
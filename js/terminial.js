document.addEventListener("DOMContentLoaded", () => {
    const maximizeButton = document.querySelector('.button.maximize');
    const terminal = document.querySelector('.terminal');

    maximizeButton.addEventListener('click', () => {
        if (terminal.classList.contains('fullscreen')) {
            terminal.classList.remove('fullscreen');
            maximizeButton.style.background = '#0f0'; // Optional: Change color back
        } else {
            terminal.classList.add('fullscreen');
            maximizeButton.style.background = '#f00'; // Optional: Change color to indicate fullscreen
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Update element selectors to match the new HTML structure
    var outputDiv = document.getElementById("output");
    var inputField = document.getElementById("input");
    var terminal = document.querySelector(".terminal-body");

    if (!outputDiv || !inputField || !terminal) {
        console.error("One or more elements are missing from the DOM");
        return;
    }

    var commandHistory = [];
    var historyIndex = 0;

    inputField.addEventListener("keydown", function(e) {
        if (e.key === 'Enter') {
            var inputText = inputField.value.trim();

            if (inputText.length > 0) {
                // Display the command in the output
                addLine(`(host@one-shell) - $ <span class='previous-command'>${inputText}</span>`, "no-animation", 0);

                // Process the command
                processCommand(inputText.toLowerCase());

                // Save command to history
                commandHistory.push(inputText);
                historyIndex = commandHistory.length;
                inputField.value = "";
            }
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                inputField.value = commandHistory[historyIndex] || "";
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length) {
                historyIndex++;
                inputField.value = commandHistory[historyIndex] || "";
            }
        }
    });

    function processCommand(cmd, args) {
        // Normalize command and check for shortcuts
        const commandMap = {
            "achievements": ["achi", "certs"],
            "experience": ["exp"],
            "help": ["h"],
            // Add more mappings as needed
        };
    
        // Normalize the command
        const normalizedCmd = cmd.toLowerCase().trim();
        let fullCommand = normalizedCmd;
    
        // Find the full command based on shortkeys
        for (const [command, shortkeys] of Object.entries(commandMap)) {
            if (shortkeys.includes(normalizedCmd)) {
                fullCommand = command;
                break;
            }
        }
    
        // Process the full command
        switch (fullCommand ) {
            case "achievements":
                loopLines(achievements, "color2 margin", 80);
                break;
            case "clear":
                setTimeout(() => outputDiv.innerHTML = '', 1);
                break;
            case "exit":
                setTimeout(() => outputDiv.innerHTML = '', 1);
                break;
            case "contact":
                loopLines(contact, "color2 margin", 80);
                break;
            case "education":
                loopLines(education, "color2 margin", 80);
                break;
            case "experience":
                loopLines(experience, "color2 margin", 80);
                break;
            case "shell":
                loopLines(shell, "", 80);
                break;
            case "help":
                loopLines(help, "color2 margin", 80);
                break;
            // case "projects":
            //     loopLines(projects, "color2 margin", 80);
            //     break;
            case "resume":
                loopLines(resume, "color2 margin", 80);
                break;
            case "skills":
                loopLines(skills, "color2 margin", 80);
                break;
            case "whoami":
                loopLines(whoami, "color2 margin", 80);
                break;
            case "top":
                    const processes = [
                        "PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND",
                        "1234 host     20   0  162564  20704   8956 S   0.3  1.1   0:04.32 tty1",
                        "5678 chrome   20   0  945692 123620  47156 S   0.2  6.3   0:06.13 chrome",
                        "9102 root     20   0  280204  34000  20400 S   0.1  1.7   0:02.12 apache2",
                        "3456 suhas    20   0  526700  83600  16200 S   0.0  4.3   0:01.11 code",
                    ];
                processes.forEach(line => {
                 addLine(line, "color2 margin", 80);
                });
                break;
            case "echo":
                addLine(args.join(" "), "color2 margin", 80);
                break;
            case "date":
                const currentDate = new Date().toLocaleDateString();
                addLine(`Today's Date: ${currentDate}`, "color2 margin", 80);
                break;
            case "sudo":
                addLine("Nice try, but no dice.", "error", 80);
                break;
            case "hostname":
                addLine("one-shell", "color2 margin", 80);
                break;
            default:
                addLine("<span class='inherit'>Command not found. Please enter a valid command. To view available commands, enter <span class='command'>'help'</span>.</span>", "error", 100);
                break;
        }
    }
    
    // Function to add a line to the terminal
    function addLine(line, className, delay) {
        // Create a new div element with the specified class
        const newLine = document.createElement('div');
        newLine.className = className;
        newLine.innerHTML = line;
    
        // Append the new line to the terminal
        outputDiv.appendChild(newLine);
    
        // Optionally, add delay or animation effects here
    }
    
    // Function to loop lines in terminal (adjust if necessary)// loopLines.js
function loopLines(lines, className, delay) {
    const outputDiv = document.getElementById('output'); // Ensure this matches your output element's ID
    let index = 0;

    function printLine() {
        if (index < lines.length) {
            const line = lines[index];
            const span = document.createElement('span');
            span.className = className;
            span.innerHTML = line;
            outputDiv.appendChild(span);
            outputDiv.appendChild(document.createElement('br'));

            index++;
            setTimeout(printLine, delay);
        }
    }

    printLine();
}


    function addLine(text, style, time) {
        var formattedText = text.replace(/ {2}/g, "&nbsp;&nbsp;"); // Replace double spaces with non-breaking spaces
        setTimeout(function() {
            var newLine = document.createElement("p");
            newLine.innerHTML = formattedText;
            newLine.className = style;
            outputDiv.appendChild(newLine);
            terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom
        }, time);
    }

    function loopLines(lines, style, delay) {
        lines.forEach(function(line, index) {
            addLine(line, style, index * delay);
        });
    }

    window.onload = function() {
            window.scrollTo(0, 0); // Scroll to the top of the page
            const terminalInput = document.getElementById('input');
            if (terminalInput) {
                terminalInput.focus(); // Focus on the terminal input
            }
        };
  
});

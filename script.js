console.log('script.js loaded successfully');

// Dynamically append cache-busting query strings to local assets
document.querySelectorAll('link[href], script[src], img[src]').forEach(element => {
    const url = element.getAttribute('src') || element.getAttribute('href');
    if (url && url.includes('.')) { // Only modify local assets
        element.setAttribute(
            element.tagName === 'IMG' ? 'src' : 'href',
            `${url}?v=${Date.now()}`
        );
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const starryBackground = document.querySelector('.starry-background');
    const starCount = 100; // Adjust number of stars
    const sizes = ['small', 'medium', 'large'];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const sizeClass = `star-${sizes[Math.floor(Math.random() * sizes.length)]}`;
        star.classList.add('star', sizeClass);
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 20}s`; // Randomize start time
        starryBackground.appendChild(star);
    }
});












try {
    // DOM elements
    const chatContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const typingIndicator = document.getElementById('typing-indicator');
    const newChatButton = document.getElementById('new-chat-button');
    const debugMessage = document.getElementById('debug-message');

    // Verify DOM elements
    if (!chatContainer || !userInput || !sendButton || !typingIndicator || !newChatButton) {
        console.error('DOM elements missing:', { chatContainer, userInput, sendButton, typingIndicator, newChatButton });
        if (debugMessage) debugMessage.style.display = 'block';
        throw new Error('Required DOM elements not found');
    }

    // Verify data.js loaded
    console.log('botResponses:', typeof botResponses);
    console.log('phonePricingData:', typeof phonePricingData);
    if (!botResponses || !phonePricingData) {
        console.error('Data from data.js not loaded');
        if (debugMessage) debugMessage.style.display = 'block';
        throw new Error('Data dependencies missing');
    }

    // Helper function to check if any keyword from a list is present in the message
    function containsKeyword(message, keywords) {
        const lowerCaseMessage = message.toLowerCase().trim();
        console.log(`Checking keywords for: ${lowerCaseMessage}`);
        return keywords.some(keyword => {
            const regex = new RegExp(`\\b${keyword.toLowerCase().replace(/[-]/g, '\\s*')}\\b`, 'i');
            const match = regex.test(lowerCaseMessage);
            console.log(`Keyword: ${keyword}, Match: ${match}`);
            return match;
        });
    }

    // Helper function for regex-based lock solution matching
    function matchLockSolution(message) {
        const lowerCaseMessage = message.toLowerCase();
        const lockPatterns = {
            "v-trust": /\b(v-?trust|lock\s*vivo|vivo\s*lock|lock\s*simu\s*vivo)\b/i,
            "pay trigger": /\b(pay\s*trigger|lock\s*(tecno|infinix|itel|phillips)|(tecno|infinix|itel|phillips)\s*lock)\b/i,
            "o-guard": /\b(o-?guard|lock\s*oppo|oppo\s*lock|lock\s*simu\s*oppo)\b/i,
            "trustonic": /\b(trustonic|lock\s*samsung|samsung\s*lock|lock\s*simu\s*samsung)\b/i,
            "think adams": /\b(think\s*adams|lock\s*(realme|honor|zte|hisense)|(realme|honor|zte|hisense)\s*lock)\b/i
        };

        for (const [lockType, pattern] of Object.entries(lockPatterns)) {
            if (pattern.test(lowerCaseMessage)) {
                const match = pattern.exec(lowerCaseMessage);
                const brand = match[1]?.includes('lock') ? match[2] || match[3] : null;
                console.log(`Lock solution matched: ${lockType}, Brand: ${brand}`);
                return { lockType, brand };
            }
        }
        return null;
    }

    // Helper function for brand-specific pricing (without lock keywords)
    function matchBrandForPricing(message) {
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes('lock')) return null;
        const brands = ["oppo", "vivo", "samsung", "infinix", "tecno", "realme", "honor", "hisense", "zte", "itel", "phillips"];
        const brand = brands.find(b => lowerCaseMessage.includes(b));
        console.log(`Brand for pricing: ${brand}`);
        return brand || null;
    }

    // Adjust textarea height dynamically
    function adjustTextareaHeight() {
        userInput.style.height = 'auto';
        userInput.style.height = `${Math.min(userInput.scrollHeight, 128)}px`;
        console.log('Textarea height adjusted');
    }

    // Initialize textarea height and adjust on input
    userInput.addEventListener('input', () => {
        console.log('Input event triggered');
        adjustTextareaHeight();
        sendButton.classList.toggle('active', userInput.value.trim().length > 0);
    });

    // Handle Enter key to send message
    userInput.addEventListener('keypress', (event) => {
        console.log(`Keypress: ${event.key}`);
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (userInput.value.trim()) {
                console.log('Sending via Enter key');
                sendButton.click();
            }
        }
    });

    // Adjust height on page load
    adjustTextareaHeight();

    // Create a table for price data
    function createPriceTable(data) {
        console.log('Creating price table with data:', data);
        const table = document.createElement('table');
        table.classList.add('price-table');
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th scope="col">Modeli</th>
                <th scope="col">Bei ya Kuuzia</th>
                <th scope="col">Kianzio</th>
                <th scope="col">Siku</th>
                <th scope="col">Wiki</th>
                <th scope="col">Mwezi</th>
                <th scope="col">Lock Solution</th>
            </tr>
        `;
        const tbody = document.createElement('tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.model.toUpperCase()}</td>
                <td>TZS ${item.bei.toLocaleString()}</td>
                <td>TZS ${item.kianzio.toLocaleString()}</td>
                <td>TZS ${item.siku.toLocaleString()}</td>
                <td>TZS ${item.wiki.toLocaleString()}</td>
                <td>TZS ${item.mwezi.toLocaleString()}</td>
                <td>${item.lock_solution}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        const container = document.createElement('div');
        container.classList.add('price-table-container');
        container.appendChild(table);
        return container;
    }

    // Add message to chat container
    function addMessage(content, isUser = false) {
        console.log('Adding message, isUser:', isUser, 'Content:', content);
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
        
        // Create profile circle
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-circle');
        profileDiv.innerHTML = isUser
            ? `<img src="./images/logo.png" alt="Picha ya Mtumiaji" onerror="this.style.display='none'">`
            : `<img src="./images/logo.png" alt="Nembo ya Bot ya OnfonMobile TZ" onerror="this.style.display='none'">`;
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        if (isUser || typeof content === 'string') {
            contentDiv.textContent = content;
        } else {
            contentDiv.appendChild(content);
        }
        
        // Append profile circle and content in correct order
        if (isUser) {
            messageDiv.appendChild(contentDiv); // Content first for user messages (to align right)
            messageDiv.appendChild(profileDiv); // Profile circle after
        } else {
            messageDiv.appendChild(profileDiv); // Profile circle first for bot messages
            messageDiv.appendChild(contentDiv);
        }
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Handle new chat button
    newChatButton.addEventListener('click', () => {
        console.log('New chat button clicked');
        chatContainer.innerHTML = '';
        addMessage(botResponses["utter_greet"], false);
        userInput.value = '';
        adjustTextareaHeight();
        sendButton.classList.remove('active');
    });

    // Type message with animation
    async function typeMessage(text) {
        console.log('Typing message:', text);
        typingIndicator.style.display = 'block';
        typingIndicator.textContent = '';
        const words = text.split(' ');
        for (let i = 0; i < words.length; i++) {
            typingIndicator.textContent += (i > 0 ? ' ' : '') + words[i];
            chatContainer.scrollTop = chatContainer.scrollHeight;
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        typingIndicator.style.display = 'none';
        addMessage(text, false);
    }

    // Process user message
    async function processUserMessage(message) {
        const lowerCaseMessage = message.toLowerCase().trim();
        console.log(`Processing message: ${lowerCaseMessage}`);
        if (!lowerCaseMessage) {
            console.log('Empty message received');
            await typeMessage("Tafadhali andika ujumbe wako.");
            return;
        }

        try {
            // Intent: greet
            if (containsKeyword(lowerCaseMessage, greetings)) {
                console.log('Intent: greet');
                await typeMessage(botResponses["utter_greet"]);
                return;
            }

            // Intent: thank_you
            if (containsKeyword(lowerCaseMessage, thankYouKeywords)) {
                console.log('Intent: thank_you');
                await typeMessage(botResponses["utter_thank_you"]);
                return;
            }

            // Intent: ask_bot_identity
            if (containsKeyword(lowerCaseMessage, botIdentityKeywords)) {
                console.log('Intent: ask_bot_identity');
                await typeMessage(botResponses["utter_ask_bot_identity"]);
                return;
            }

            // Intent: ask_sales_process
            if (containsKeyword(lowerCaseMessage, salesProcessKeywords)) {
                console.log('Intent: ask_sales_process');
                await typeMessage(botResponses["utter_ask_sales_process"]);
                return;
            }

            // Intent: ask_payment_methods
            if (containsKeyword(lowerCaseMessage, paymentMethodsKeywords)) {
                console.log('Intent: ask_payment_methods');
                await typeMessage(botResponses["utter_ask_payment_methods"]);
                return;
            }

            // Intent: ask_maintenance
            if (containsKeyword(lowerCaseMessage, maintenanceKeywords)) {
                console.log('Intent: ask_maintenance');
                await typeMessage(botResponses["utter_ask_maintenance"]);
                return;
            }

            // Intent: ask_lost_phone
            if (containsKeyword(lowerCaseMessage, lostPhoneKeywords)) {
                console.log('Intent: ask_lost_phone');
                await typeMessage(botResponses["utter_ask_lost_phone"]);
                return;
            }

            // Intent: all_lock_solutions
            if (containsKeyword(lowerCaseMessage, allLockSolutionsKeywords)) {
                console.log('Intent: all_lock_solutions');
                await typeMessage(botResponses["utter_all_lock_solutions"]);
                return;
            }

            // Intent: specific_lock_phone
            const lockMatch = matchLockSolution(lowerCaseMessage);
            if (lockMatch) {
                console.log('Intent: specific_lock_phone');
                const { lockType, brand } = lockMatch;
                const response = lockSolutionSteps[lockType];
                if (response) {
                    if (brand && brandToLockType[brand] === lockType) {
                        const formattedResponse = response.replace(
                            `Lock Solution ya ${lockType.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} inatumika kwa simu za ${brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : 'brand'}. Hatua za kulock:`,
                            `Ili kulock simu ya ${brand.charAt(0).toUpperCase() + brand.slice(1)} (inatumia ${lockType.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}):`
                        );
                        await typeMessage(formattedResponse + "\nUnahitaji msaada zaidi, nipo kukusaidia.");
                    } else {
                        await typeMessage(response + "\nUnahitaji msaada zaidi, nipo kukusaidia.");
                    }
                    return;
                }
            }

            // Intent: lock_phone
            if (containsKeyword(lowerCaseMessage, lockPhoneKeywords)) {
                console.log('Intent: lock_phone');
                await typeMessage(botResponses["utter_lock_phone"]);
                return;
            }

            // Intent: phone_pricing
            if (containsKeyword(lowerCaseMessage, phonePricingKeywords)) {
                console.log('Intent: phone_pricing');
                const allModelsData = Object.keys(phonePricingData).map(model => {
                    const priceInfo = phonePricingData[model];
                    return {
                        model: model,
                        bei: priceInfo.bei,
                        kianzio: priceInfo.kianzio,
                        siku: priceInfo.siku,
                        wiki: priceInfo.wiki,
                        mwezi: priceInfo.mwezi,
                        lock_solution: priceInfo.lock_solution
                    };
                });
                if (allModelsData.length === 0) {
                    console.error('No pricing data available');
                    await typeMessage("Pole, hakuna bei zilizopatikana. Tafadhali jaribu tena baadaye.");
                    return;
                }
                await typeMessage("Hizi ni bei za simu za OnfonMobile TZ (TZS):");
                addMessage(createPriceTable(allModelsData), false);
                await typeMessage("Unahitaji msaada zaidi, nipo kukusaidia.");
                return;
            }

            // Intent: nida_verification
            if (containsKeyword(lowerCaseMessage, nidaVerificationKeywords)) {
                console.log('Intent: nida_verification');
                await typeMessage(botResponses["utter_nida_verification"]);
                return;
            }

            // Intent: stk_push_otp
            if (containsKeyword(lowerCaseMessage, stkPushOtpKeywords)) {
                console.log('Intent: stk_push_otp');
                await typeMessage(botResponses["utter_stk_push_otp"]);
                return;
            }

            // Intent: ask_specific_price
            let foundSpecificPrice = false;
            for (const model in phonePricingData) {
                if (lowerCaseMessage.includes(model)) {
                    console.log('Intent: ask_specific_price, Model:', model);
                    const pricing = phonePricingData[model];
                    const response = `Bei ya ${model.toUpperCase()} (Lock Solution: ${pricing['lock_solution']}):
- Bei ya Kuuzia: TZS ${pricing['bei'].toLocaleString()}
- Kianzio: TZS ${pricing['kianzio'].toLocaleString()}
- Malipo ya Siku: TZS ${pricing['siku'].toLocaleString()}
- Malipo ya Wiki: TZS ${pricing['wiki'].toLocaleString()}
- Malipo ya Mwezi: TZS ${pricing['mwezi'].toLocaleString()}
Unahitaji msaada zaidi, nipo kukusaidia.`;
                    await typeMessage(response);
                    foundSpecificPrice = true;
                    break;
                }
            }

            if (!foundSpecificPrice) {
                const userBrand = matchBrandForPricing(lowerCaseMessage);
                if (userBrand) {
                    console.log('Intent: ask_specific_price, Brand:', userBrand);
                    const models = Object.keys(phonePricingData).filter(model => phonePricingData[model]["brand"] === userBrand);
                    if (models.length > 0) {
                        const brandModelsData = models.map(model => ({
                            model: model,
                            bei: phonePricingData[model].bei,
                            kianzio: phonePricingData[model].kianzio,
                            siku: phonePricingData[model].siku,
                            wiki: phonePricingData[model].wiki,
                            mwezi: phonePricingData[model].mwezi,
                            lock_solution: phonePricingData[model].lock_solution
                        }));
                        await typeMessage(`Bei za simu za ${userBrand.toUpperCase()}:`);
                        addMessage(createPriceTable(brandModelsData), false);
                        await typeMessage("Unahitaji msaada zaidi, nipo kukusaidia.");
                        foundSpecificPrice = true;
                    }
                }
            }

            if (!foundSpecificPrice) {
                console.log('Intent: fallback');
                await typeMessage(botResponses["utter_fallback"] + "\nTafadhari, wasiliana na huduma kwa wateja ikiwa unahitaji msaada kuhusu suala lingine tofauti.");
            }
        } catch (error) {
            console.error('Error in processUserMessage:', {
                message: error.message,
                stack: error.stack,
                input: message
            });
            await typeMessage(
                "Pole, kuna tatizo la kiufundi wakati wa kuchakata ujumbe wako. " +
                "Tafadhali jaribu tena au wasiliana na huduma kwa wateja kwa msaada zaidi."
            );
        }
    }

    // Send button click handler
    sendButton.addEventListener('click', async () => {
        console.log('Send button clicked, message:', userInput.value);
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            adjustTextareaHeight();
            sendButton.classList.remove('active');
            await processUserMessage(message);
        } else {
            console.log('No message to send');
            addMessage("Tafadhali andika ujumbe.", false);
        }
    });

    // Initialize chat with greeting
    console.log('Initializing chat with greeting');
    addMessage(botResponses["utter_greet"], false);
} catch (error) {
    console.error('Error initializing script.js:', error);
    const debugMessage = document.getElementById('debug-message');
    if (debugMessage) debugMessage.style.display = 'block';
}

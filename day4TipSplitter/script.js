  let currentTip = 18; // Default tip percentage

        // Get DOM elements
        const billInput = document.getElementById('billAmount');
        const customTipInput = document.getElementById('customTip');
        const peopleInput = document.getElementById('peopleCount');
        const tipButtons = document.querySelectorAll('.tip-btn');
        const resultsDiv = document.getElementById('results');

        // Set default active tip button
        document.querySelector('[data-tip="18"]').classList.add('active');

        // Event listeners
        billInput.addEventListener('input', calculate);
        customTipInput.addEventListener('input', handleCustomTip);
        peopleInput.addEventListener('input', calculate);

        // Tip button event listeners
        tipButtons.forEach(button => {
            button.addEventListener('click', () => {
                tipButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentTip = parseInt(button.dataset.tip);
                customTipInput.value = '';
                calculate();
            });
        });

        function handleCustomTip() {
            const customValue = parseFloat(customTipInput.value);
            if (!isNaN(customValue) && customValue >= 0) {
                tipButtons.forEach(btn => btn.classList.remove('active'));
                currentTip = customValue;
                calculate();
            }
        }

        function calculate() {
            const billAmount = parseFloat(billInput.value) || 0;
            const peopleCount = parseInt(peopleInput.value) || 1;

            if (billAmount <= 0) {
                resultsDiv.style.display = 'none';
                return;
            }

            const tipAmount = (billAmount * currentTip) / 100;
            const totalAmount = billAmount + tipAmount;
            const perPersonAmount = totalAmount / peopleCount;

            // Update display
            document.getElementById('subtotal').textContent = `${billAmount.toLocaleString('fr-FR')} FCFA`;
            document.getElementById('tipAmount').textContent = `${Math.round(tipAmount).toLocaleString('fr-FR')} FCFA`;
            document.getElementById('total').textContent = `${Math.round(totalAmount).toLocaleString('fr-FR')} FCFA`;
            document.getElementById('perPerson').textContent = `${Math.round(perPersonAmount).toLocaleString('fr-FR')} FCFA`;

            resultsDiv.style.display = 'block';
        }

        function resetCalculator() {
            billInput.value = '';
            customTipInput.value = '';
            peopleInput.value = '1';
            currentTip = 18;
            
            tipButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('[data-tip="18"]').classList.add('active');
            
            resultsDiv.style.display = 'none';
        }

        // Handle Enter key
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                calculate();
            }
        });
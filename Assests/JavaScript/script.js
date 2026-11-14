// Theme Change logic here
const theme_Change_BTN = document.querySelectorAll('.theme-switcher');
theme_Change_BTN.forEach(btn => {
    btn.addEventListener('click', function () {
        const theme_switcher_PC = document.querySelector('.theme-switcher-pc');
        const theme_Change_BTN_Mobile = document.querySelector('.mobile-theme-switcher')
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
        if (newTheme === 'dark') {
            theme_switcher_PC.innerHTML = `<img src="Assests/Icons light/Dark mode theme icon.svg"  alt="">Dark mode`
            theme_Change_BTN_Mobile.innerHTML = `<img src="Assests/Icons light/Dark mode theme icon.svg"  alt="">`
        }
        else {
            theme_switcher_PC.innerHTML = `<img src="Assests/Icons light/Light mode theme icon.svg"  alt="">Light mode`
            theme_Change_BTN_Mobile.innerHTML = `<img src="Assests/Icons light/Light mode theme icon.svg"  alt="">`
        }
        // Rearramge svg color scheme
        function svgInvert(newTheme) {
            document.querySelectorAll('[data-light][data-dark]').forEach(svg => {
                svg.src = newTheme === 'dark' ? svg.dataset.dark : svg.dataset.light;
            })
        }
        svgInvert(newTheme);
    });
});

// If no profile found then popup will appear
const existingProfile = localStorage.getItem('profileData');
if (existingProfile) {
    const data = (JSON.parse(existingProfile)).profile;
    // Update profile tab
    //get html 
    const display_name = document.querySelector('#profileDisplayName');
    const display_email = document.querySelector('#profileDisplayEmail');
    const display_currency = document.querySelector('#summaryCurrency');
    const display_country = document.querySelector('#summaryCountry');
    const display_name_input = document.querySelector('#profileName');
    const display_email_input = document.querySelector('#profileEmail');
    const display_country_input = document.querySelector('#profileCountry');
    const display_currency_input = document.querySelector('#profileCurrency');
    const profile_icon_display = document.querySelector('#profileAvatarInitials');
    // assign values
    display_name.textContent = data.name;
    display_email.textContent = data.email;
    display_currency.textContent = data.currency;
    display_country.textContent = data.country;
    display_name_input.value = data.name;
    display_email_input.value = data.email;
    display_country_input.value = data.country;
    display_currency_input.value = data.currency;
    profile_icon_display.textContent = data.name.split('')[0];
    if (data.phone) {
        document.querySelector('#profilePhone').value = data.phone;
    }
    if (data.budget) {
        document.querySelector('#profileBudget').value = data.budget;
        document.querySelector('#summaryBudget').textContent = data.budget;
    }
}
if (!existingProfile) {
    // ===================== AUTH POPUP HTML =====================
    const authOverlay = document.createElement('div');
    authOverlay.classList.add('auth-overlay', 'is-open');
    authOverlay.id = 'authOverlay';
    authOverlay.setAttribute('role', 'dialog');
    authOverlay.setAttribute('aria-modal', 'true');
    authOverlay.setAttribute('aria-labelledby', 'authTitle');
    authOverlay.innerHTML = `
        <div class="auth-popup">
            <div class="auth-popup-brand">
                <img src="Assests/images/Logo.png" alt="" class="auth-popup-logo">
                <span>Expense Tracker</span>
            </div>
            <h2 class="auth-popup-title" id="authTitle">Sign in to continue</h2>
            <p class="auth-popup-sub">No account was found in this browser. Create one to keep using the app. Everything stays in localStorage.</p>

            <form class="auth-popup-form" id="signupForm" novalidate>
                <div class="profile-grid">
                    <div class="profile-field">
                        <label for="signupName">Full name</label>
                        <input type="text" class="profile-input" id="signupName" name="name"
                            placeholder="e.g. Ali Khan" autocomplete="name" required>
                        <small class="field-error" id="signupNameError">Please enter your name.</small>
                    </div>

                    <div class="profile-field">
                        <label for="signupEmail">Email</label>
                        <input type="email" class="profile-input" id="signupEmail" name="email"
                            placeholder="you@example.com" autocomplete="email" required>
                        <small class="field-error" id="signupEmailError">Please enter a valid email.</small>
                    </div>

                    <div class="profile-field">
                        <label for="signupPhone">Phone <span class="profile-optional">(optional)</span></label>
                        <input type="tel" class="profile-input" id="signupPhone" name="phone"
                            placeholder="+92 300 1234567" autocomplete="tel">
                    </div>

                    <div class="profile-field">
                        <label for="signupCountry">Country</label>
                        <label class="select-filter">
                            <select class="filter-select" id="signupCountry" name="country">
                                <option value="">Select country</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="India">India</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                <option value="Other">Other</option>
                            </select>
                            <img class="select-chevron" src="Assests/Icons light/Drop down icon.svg"
                                data-light="Assests/Icons light/Drop down icon.svg"
                                data-dark="Assests/Icons dark/Drop down icon.svg" alt="">
                        </label>
                    </div>

                    <div class="profile-field">
                        <label for="signupCurrency">Currency</label>
                        <label class="select-filter">
                            <select class="filter-select" id="signupCurrency" name="currency">
                                <option value="USD" data-symbol="$" data-locale="en-US" selected>USD – US Dollar ($)</option>
                                <option value="PKR" data-symbol="₨" data-locale="en-PK">PKR – Pakistani Rupee (₨)</option>
                                <option value="EUR" data-symbol="€" data-locale="de-DE">EUR – Euro (€)</option>
                                <option value="GBP" data-symbol="£" data-locale="en-GB">GBP – British Pound (£)</option>
                                <option value="INR" data-symbol="₹" data-locale="en-IN">INR – Indian Rupee (₹)</option>
                                <option value="AED" data-symbol="د.إ" data-locale="en-AE">AED – UAE Dirham (د.إ)</option>
                                <option value="SAR" data-symbol="﷼" data-locale="en-SA">SAR – Saudi Riyal (﷼)</option>
                                <option value="CAD" data-symbol="$" data-locale="en-CA">CAD – Canadian Dollar ($)</option>
                                <option value="AUD" data-symbol="$" data-locale="en-AU">AUD – Australian Dollar ($)</option>
                                <option value="JPY" data-symbol="¥" data-locale="ja-JP">JPY – Japanese Yen (¥)</option>
                            </select>
                            <img class="select-chevron" src="Assests/Icons light/Drop down icon.svg"
                                data-light="Assests/Icons light/Drop down icon.svg"
                                data-dark="Assests/Icons dark/Drop down icon.svg" alt="">
                        </label>
                        
                    </div>

                    <div class="profile-field">
                        <label for="signupBudget">Monthly budget <span class="profile-optional">(optional)</span></label>
                        <div class="input-prefix">
                            <input type="number" class="profile-input" id="signupBudget" name="budget"
                                min="0" step="0.01" placeholder="0.00" inputmode="decimal">
                        </div>
                        <small class="field-error" id="signupBudgetError">Budget can't be negative.</small>
                    </div>
                </div>

                <button type="button" class="profile-btn profile-btn-primary auth-popup-submit" id="signupSubmitBtn">
                    Create account
                </button>
            </form>
        </div>
`;
    document.body.appendChild(authOverlay);
}
// ===================== END AUTH POPUP =====================


// Toast
// ShowToast functionality
const ShowToast = (Heading, Text, Type) => {
    if (document.body.querySelector(`.toast-${Type}`)) {
        document.body.querySelector(`.toast-${Type}`).remove();
    }
    let toast = document.createElement('div');
    toast.classList.add('toast')
    toast.classList.add(`toast-${Type}`);
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    switch (Type) {
        case "success":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "error":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM11.25 8a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0V8Zm0 7.5a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "warning":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
        case "info":
            toast.innerHTML = `<div class="Toast-Svg-Div"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM12 10.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 10.5Z" clip-rule="evenodd" />
</svg>
</div><div class="Toast-Content-Div"><span class="Toast-Heading">${Heading}: </span><span class="Toast-Message">${Text}</span></div><button class="Toast-cross-btn"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9CA3AF" width="16" height="16" aria-label="Close notification">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg></button>`;
            break;
    }

    document.body.append(toast);

    setTimeout(() => {
        toast.classList.add('Toast-out-Animation');
        toast.addEventListener('animationend', function () {
            toast.remove();
        }, { once: true })
    }, 5000)
}
document.body.addEventListener('click', function (e) {
    if (e.target.closest('.toast .Toast-cross-btn')) {
        const toast = e.target.closest('.toast')
        toast.classList.add('Toast-out-Animation');
        toast.addEventListener('animationend', function () {
            toast.remove();
        }, { once: true })
    }
});

// Event delegation

document.body.addEventListener('click', function (e) {
    if (e.target.closest('.tab')) {
        tab_switch(e.target.closest('.tab'))
    }
    if (e.target.closest('.panel-switch')) {
        panelswitch(e.target.closest('.panel-switch'))
    }
    if (e.target.closest('.menu-toggle')) {
        document.querySelector('.left').classList.add('open')
    }
    if (e.target.closest('.transaction-all')) {
        tab_switch(document.querySelector('[data-tab="Transactions Tab"]'))
    }
    if (e.target.closest('.addTransactions-btn')) {
        addTransaction();
    }
    if (e.target.closest('.confirm_transaction')) {
        confirmTransaction();
    }
    if (e.target.closest('.cross-btn-transaction')) {
        cross_T()
    }
    if (e.target.closest('#signupSubmitBtn')) {
        e.preventDefault();
        Signup();
    }
    if (e.target.closest('#saveProfileBtn')) {
        ProfileEdit_Save();
    }
    if (e.target.closest('#discardProfileBtn')) {
        ProfileEdit_Discard();
    }
});
document.body.addEventListener('change', function (e) {
    if (e.target.closest('#filterType_add_transaction')) {
        switch_category(e.target.closest('#filterType_add_transaction').value);
    }
})
// Tab swithing

function tab_switch(tab) {
    const tab_name = tab.getAttribute('data-tab');
    // add/ remove tab classes
    const active_tab = document.querySelectorAll('.active-tab');
    active_tab.forEach(tab_active => {
        tab_active.classList.remove('active-tab');
        tab_active.classList.add('tab');
    })
    document.querySelectorAll(`[data-tab="${tab_name}"]`).forEach(tab_toggler => {
        tab_toggler.classList.add('active-tab');
        tab_toggler.classList.remove('tab');
    })
    // Content change
    const old_section = document.querySelector('.active-section')
    old_section.classList.remove('active-section');
    const data_Class = tab.getAttribute('data-section');
    document.body.querySelector(`.${data_Class}`).classList.add('active-section');
    // Content change mobile
    const mobile_header = document.querySelector('.mobile-title');
    const heading = data_Class[0].toUpperCase() + data_Class.slice(1);
    mobile_header.textContent = heading;


}
// panel switch

function panelswitch(panel) {
    const panel_name = panel.getAttribute('data-tab');
    // add/ remove tab classes
    const active_tab = document.querySelector('.active-panel-switch');
    const active_tab_name = active_tab.getAttribute('data-panel');
    active_tab.classList.remove('active-panel-switch');
    panel.classList.add('active-panel-switch');
    // Content Change
    const old_section = document.querySelector('.active-panel')
    old_section.classList.remove('active-panel');
    const data_Class = panel.getAttribute('data-panel');
    document.body.querySelector(`.${data_Class}`).classList.add('active-panel')
}
// Transactions model
const TransactionsData = {
    this_month: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 5200.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 1200.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Redesign - Client A', amount: 1200.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 180.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 180.50 }
            ]
        },
        gifts: {
            type: 'income',
            total: 100.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday Gift from Parents', amount: 100.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 95.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Sold Old Monitor on eBay', amount: 95.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 232.25,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Whole Foods Grocery', amount: 142.75 },
                { transaction: 'Chipotle Lunch', amount: 14.25 },
                { transaction: 'Starbucks Coffee', amount: 6.50 },
                { transaction: 'Pizza Night - Domino\'s', amount: 32.80 },
                { transaction: 'Sushi Dinner - Tokyo Grill', amount: 36.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 165.50,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - Shell', amount: 52.00 },
                { transaction: 'Uber Ride to Airport', amount: 38.50 },
                { transaction: 'Monthly Metro Card', amount: 75.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 279.49,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Nike Running Shoes', amount: 129.99 },
                { transaction: 'Amazon - Household Items', amount: 87.50 },
                { transaction: 'H&M Clothing', amount: 62.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 1149.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00 },
                { transaction: 'Electric Bill - ConEd', amount: 85.00 },
                { transaction: 'Internet - Spectrum', amount: 79.99 },
                { transaction: 'Phone Bill - Verizon', amount: 35.00 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 58.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99 },
                { transaction: 'Spotify Premium', amount: 10.99 },
                { transaction: 'AMC Movie Tickets', amount: 32.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 120.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'CVS Pharmacy - Prescriptions', amount: 45.00 },
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00 },
                { transaction: 'Dental Checkup Copay', amount: 50.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 74.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Pet Food - PetSmart', amount: 45.50 },
                { transaction: 'Dry Cleaning', amount: 29.00 }
            ]
        }
    },

    last_month: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 5200.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 950.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Social Media Graphics - Client C', amount: 450.00 },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 195.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 195.00 }
            ]
        },
        gifts: {
            type: 'income',
            total: 50.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Cash Gift from Grandparents', amount: 50.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 150.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Refund from Amazon Return', amount: 150.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 254.70,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Kroger Grocery', amount: 156.25 },
                { transaction: 'Dinner at Italian Bistro', amount: 68.00 },
                { transaction: 'DoorDash - Thai Food', amount: 30.45 }
            ]
        },
        transport: {
            type: 'expense',
            total: 135.75,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - BP', amount: 48.25 },
                { transaction: 'Lyft Ride Downtown', amount: 22.50 },
                { transaction: 'Parking Garage - Weekend', amount: 65.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 245.50,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Zara - Winter Jacket', amount: 189.50 },
                { transaction: 'Amazon - Kitchen Gadgets', amount: 56.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 1144.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00 },
                { transaction: 'Electric Bill - ConEd', amount: 78.00 },
                { transaction: 'Internet - Spectrum', amount: 79.99 },
                { transaction: 'Water Bill - NYC', amount: 37.00 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 91.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99 },
                { transaction: 'Spotify Premium', amount: 10.99 },
                { transaction: 'Topgolf with Coworkers', amount: 65.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 93.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00 },
                { transaction: 'CVS - Cold Medicine', amount: 18.00 },
                { transaction: 'Eye Exam Copay', amount: 50.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 85.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Pet Grooming - PetSmart', amount: 55.00 },
                { transaction: 'Car Registration Renewal', amount: 30.00 }
            ]
        }
    },

    this_year: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 62400.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 62400.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 12450.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'E-commerce Site - Client E', amount: 2800.00 },
                { transaction: 'Brand Identity Package - Client F', amount: 1500.00 },
                { transaction: 'App UI Design - Client I', amount: 2200.00 },
                { transaction: 'Monthly Retainer - Client J', amount: 1800.00 },
                { transaction: 'Website Redesign - Client A', amount: 1200.00 },
                { transaction: 'Landing Page - Client G', amount: 800.00 },
                { transaction: 'SEO Audit - Client H', amount: 550.00 },
                { transaction: 'Logo Design - Client B', amount: 650.00 },
                { transaction: 'Social Media Graphics - Client C', amount: 450.00 },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 810.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 810.50 }
            ]
        },
        gifts: {
            type: 'income',
            total: 450.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 450.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 1200.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 1200.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 7845.60,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00 },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00 },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00 },
                { transaction: 'Costco Bulk Shopping - Quarterly', amount: 600.00 },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 3890.25,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 180.00 },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 810.00 },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1500.00 },
                { transaction: 'Car Maintenance - Annual', amount: 300.00 },
                { transaction: 'Parking & Tolls', amount: 450.00 },
                { transaction: 'Uber/Lyft - Monthly Avg', amount: 65.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 4250.75,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00 },
                { transaction: 'Amazon - Monthly Avg', amount: 180.00 },
                { transaction: 'Electronics - Annual', amount: 450.00 },
                { transaction: 'Furniture - IKEA', amount: 280.00 },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00 },
                { transaction: 'Samsung - Smart Watch', amount: 299.99 }
            ]
        },
        bills: {
            type: 'expense',
            total: 14940.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00 },
                { transaction: 'Electric Bill - Annual', amount: 1020.00 },
                { transaction: 'Internet - Spectrum (12 months)', amount: 959.88 },
                { transaction: 'Water Bill - Annual', amount: 540.00 },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 1020.12 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1890.50,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Netflix, Spotify, Hulu)', amount: 403.64 },
                { transaction: 'Concert Tickets - Big Artist', amount: 185.00 },
                { transaction: 'Video Games - Annual', amount: 180.00 },
                { transaction: 'Sporting Event Tickets', amount: 150.00 },
                { transaction: 'Comedy Club & Escape Room', amount: 100.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 2150.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00 },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00 },
                { transaction: 'Dental & Eye Exams', amount: 175.00 },
                { transaction: 'Prescriptions - Monthly Avg', amount: 30.00 },
                { transaction: 'Physiotherapy Sessions', amount: 600.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 985.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00 },
                { transaction: 'Charity Donation - Red Cross', amount: 100.00 },
                { transaction: 'Dry Cleaning - Annual', amount: 85.00 },
                { transaction: 'Home Repair - Plumber', amount: 125.00 },
                { transaction: 'Gift Wrap & Cards', amount: 135.00 }
            ]
        }
    },

    last_year: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 58800.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 58800.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 8750.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Build - Client K', amount: 2200.00 },
                { transaction: 'E-commerce Setup - Client O', amount: 1800.00 },
                { transaction: 'App Prototype - Client S', amount: 1200.00 },
                { transaction: 'Landing Page - Client Q', amount: 700.00 },
                { transaction: 'WordPress Maintenance - Client N', amount: 600.00 },
                { transaction: 'Logo & Branding - Client L', amount: 550.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 680.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 680.00 }
            ]
        },
        gifts: {
            type: 'income',
            total: 300.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 300.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 800.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 800.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 6820.30,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00 },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00 },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00 },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 3450.00,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 160.00 },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 780.00 },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1248.00 },
                { transaction: 'Car Maintenance - Annual', amount: 450.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 3850.00,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00 },
                { transaction: 'Amazon - Monthly Avg', amount: 95.00 },
                { transaction: 'Electronics - Annual', amount: 450.00 },
                { transaction: 'Furniture - IKEA', amount: 280.00 },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 14200.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00 },
                { transaction: 'Electric Bill - Annual', amount: 780.00 },
                { transaction: 'Internet - Spectrum (12 months)', amount: 899.88 },
                { transaction: 'Water Bill - Annual', amount: 480.00 },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 960.12 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1650.00,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Annual)', amount: 371.64 },
                { transaction: 'Concert Tickets', amount: 150.00 },
                { transaction: 'Video Games - Annual', amount: 180.00 },
                { transaction: 'Amusement Park Tickets', amount: 120.00 },
                { transaction: 'Sporting Event', amount: 85.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 1850.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00 },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00 },
                { transaction: 'Dental Checkup', amount: 75.00 },
                { transaction: 'Eye Exam & Glasses', amount: 250.00 },
                { transaction: 'Physiotherapy Sessions', amount: 400.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 720.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00 },
                { transaction: 'Charity Donations', amount: 100.00 },
                { transaction: 'Dry Cleaning', amount: 80.00 }
            ]
        }
    }
};
// Chart integration
function Chart_integrate(data_expense) {
    // expense data model
    const data_expen = Object.entries(data_expense);
    let total = 0;
    const colors = [];
    let labels_D = [];
    let amount_D = [];
    // get 
    const Expense_Bycategory = document.querySelector('#expenseChart_bycategory');
    data_expen.forEach(([category, data]) => {
        // add color
        colors.push(data.color);
        // add total
        total += data.total;
        // add labels
        labels_D.push(category);
        // add amount
        amount_D.push(data.total)
    });

    new Chart(Expense_Bycategory, {
        type: "doughnut",

        data: {
            labels: labels_D,

            datasets: [{
                data: amount_D,
                borderWidth: 2,
                borderColor: 'transparent',
                backgroundColor: colors
            }]
        },

        options: {
            responsive: true,

            cutout: "55%",

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const amount = context.raw;
                            const percentage = ((amount / total) * 100).toFixed(1);

                            return ` $${amount} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}
Chart_integrate(TransactionsData.this_month);


// Searchbar
let searchBar = document.querySelector('#searchTransactions');
searchBar.addEventListener('keyup', Filter_Transactins);
// Filter transactions listners
let filter_Date = document.querySelector('#filterDate');
let filter_type = document.body.querySelector('#filterType');
let filter_Category = document.body.querySelector('#filterCategory');
[filter_Category, filter_type, filter_Date].forEach(fil => {
    fil.addEventListener('change', Filter_Transactins)
})

// Filter transactions
function Filter_Transactins() {
    // Main variables
    let box_transactions = document.querySelector('.transaction-table');
    const all = box_transactions.children;
    for (let child of all) {
        child.style.display = 'none'
    }
    // Search Filter
    const value_input = searchBar.value.toLowerCase().trim();
    const Single_transaction_keyword = box_transactions.querySelectorAll('[data-transaction-keyword]');
    Single_transaction_keyword.forEach(eachdoc => {
        const keyword = eachdoc.getAttribute('data-transaction-keyword').toLowerCase();
        const matches = value_input === '' || keyword.includes(value_input);
        eachdoc.style.display = matches ? 'grid' : 'none';
    });
    // Date filter
    const new_filter_date = filter_Date.value;
    const visible_date = [...box_transactions.children].filter(
        el => getComputedStyle(el).display !== 'none'
    );
    visible_date.forEach(el => {
        const date_today = new Date().toISOString().split('T')[0];
        if (new_filter_date === 'this-month') {
            const thisMonth = date_today.split('-')[1] === el.dataset.date.split('-')[1] && date_today.split('-')[0] === el.dataset.date.split('-')[0];
            el.style.display = thisMonth ? 'grid' : 'none';
        }
        if (new_filter_date === 'last-month') {
            const lastMonthDate = new Date().toISOString().split('T')[0].split('-')[1] - 1;
            const lastMonth = lastMonthDate === parseInt(el.dataset.date.split('-')[1]) && date_today.split('-')[0] === el.dataset.date.split('-')[0];
            el.style.display = lastMonth ? 'grid' : 'none';
        }
        if (new_filter_date === 'this-year') {
            const thisYear = date_today.split('-')[0] === el.dataset.date.split('-')[0];
            el.style.display = thisYear ? 'grid' : 'none';
        }
    })
    // Type 
    const new_filter_type = filter_type.value;
    if (new_filter_type === 'income' || new_filter_type === 'expense') {
        const visible_type = [...box_transactions.children].filter(
            el => getComputedStyle(el).display !== 'none'
        );
        visible_type.forEach(el => {
            if (el.dataset.type === new_filter_type) {
                el.style.display = 'grid'
            }
            else {
                el.style.display = 'none'
            }
        })
    }
    // Category filter
    const new_filter_Category = filter_Category.value;
    if (new_filter_Category !== 'all') {
        const visible_Category = [...box_transactions.children].filter(
            el => getComputedStyle(el).display !== 'none'
        );
        visible_Category.forEach(el => {
            if (el.dataset.category === new_filter_Category) {
                el.style.display = 'grid'
            }
            else {
                el.style.display = 'none'
            }
        })
    }
};


// Filter logic for dashboard
let filter_btn_dashboard = document.querySelector('#filterDate_dashboard');
filter_btn_dashboard.addEventListener('change', function () {
    const new_value = filter_btn_dashboard.value;
    if (!new_value) return;
    const parsed_value = new_value.toLowerCase().replace(/-/g, "_");
    const Rawdata = TransactionsData[parsed_value];
    const Designated_data = Rawdata;
    // Chart integration
    const canvas = document.getElementById('expenseChart_bycategory');
    const existingChart = Chart.getChart(canvas);
    if (existingChart) {
        existingChart.destroy();
    }
    Chart_integrate(Designated_data);
    // UI values change
    const container_info = document.querySelector('.right-expense-detail-by-category');
    container_info.innerHTML = ''
    let total = 0;
   Object.entries(Designated_data).forEach(([category, item]) => {
        total += item.total
    })
    Object.entries(Designated_data).forEach(([category, item]) => {
        //  const category = item.category;
        const amount = Math.round(item.total);
        const newli = document.createElement('li');
        const percent = Math.round(((amount / total) * 100).toFixed(1));
        const color = item.color
        newli.innerHTML = `<span class="legend-dot" style="background-color: ${color};"></span>
                                    <span>${category}</span>
                                    <span class="legend-amount">$${amount}</span>
                                    <span class="legend-percent">${percent}%</span>`
        container_info.appendChild(newli)
    })
})



// Add transaction

// main trigger
function addTransaction() {
    const transaction_toast = document.createElement('div');
    transaction_toast.classList.add('Transaction_toast');
    transaction_toast.innerHTML = `
    <div class="header-toast-t">
    <h1 class="heading_toast" > Add Transaction</h1>
    <span class="cross-btn-transaction">✘</span>
    </div>
    <div class="box-toast" > 
            <div class="box-con-toast">
            <h2 class="input-toast-h"> Select Type </h2>
            <label class="toast-container">
                        <select class="filter-select" id="filterType_add_transaction">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                        </select>
                        
                        <img class="select-chevron" src="Assests/Icons light/Drop down icon.svg"
                        data-light="Assests/Icons light/Drop down icon.svg"
                            data-dark="Assests/Icons dark/Drop down icon.svg" alt="">
                            </label>
                            </div>
                            <div class="box-con-toast">
                            <h2 class="input-toast-h"> Select Category </h2>
                            <label class="toast-container">
                            <select class="filter-select" id="filterCategory_add_transaction">
                            <option data-category="income" value="salary">Salary</option>
                            <option data-category="income" value="freelance">Freelance</option>
                            <option data-category="expense" value="food">Food</option>
                            <option data-category="expense" value="transport">Transport</option>
                            <option data-category="expense" value="bills">Bills</option>
                            <option data-category="expense" value="shopping">Shopping</option>
                            <option data-category="expense" value="education">Education</option>
                            <option data-category="neutral" value="others">Others</option>
                            </select>
                            <img class="select-chevron" src="Assests/Icons light/Drop down icon.svg"
                            data-light="Assests/Icons light/Drop down icon.svg"
                            data-dark="Assests/Icons dark/Drop down icon.svg" alt="">
                    </label>
            </div>
            <div class="box-con-toast">
             <h2 class="input-toast-h"> Enter Title </h2>
                    <div class=" toast-container">
                        <input type="search" class="search-input" id="Type_head"
                            placeholder="Type something i.e Freelance">
                            </div>
                    </div>
                  
                    <div class="box-con-toast">
                    <h2 class="input-toast-h"> Enter Amount</h2>
                    <div class="toast-container">
                        <input type="number" class="search-input" id="Type_amount"
                            placeholder="Enter amount i.e 500 RS">
                            </div>
                            </div>
                            </div>
                            <div class="box-btn-toast">
                            <button class="confirm_transaction">Add Transaction
                            </button>
                            </div>
                            
                    
                            `
    document.body.appendChild(transaction_toast);
    // append blur div
    const bckblur = document.createElement('div');
    bckblur.classList.add('backdrop');
    document.body.appendChild(bckblur);
    // rearrange the category fields to show only
    switch_category(document.querySelector('#filterType_add_transaction').value);
}

// cross btn 
function cross_T() {
    // remove toast and background blur
    const toast = document.querySelector('.Transaction_toast');
    if (toast) toast.remove();
    const blurbck = document.querySelector('.backdrop');
    if (blurbck) blurbck.remove()
}
// income/ expense switcher toast transaction
function switch_category(value) {
    const selector = document.querySelector('#filterCategory_add_transaction');
    const visible_option = document.querySelectorAll('#filterCategory_add_transaction option');
    visible_option.forEach(el => {
        if (el.dataset.category === value || el.dataset.category === 'neutral') {
            el.style.display = 'grid'
        }
        else {
            el.style.display = 'none'
        }
    })
    const firstVisible = [...visible_option].find(o => o.style.display !== 'none');
    if (firstVisible) selector.value = firstVisible.value;
}
// Categories src 
const Categories_src = {
    food: 'Assests/Icons light/food.svg',
    transport: 'Assests/Icons light/transport.svg',
    shopping: 'Assests/Icons light/shopping.svg',
    bills: 'Assests/Icons light/electricity-bill.svg',
    entertainment: 'Assests/Icons light/entertainment.svg',
    health: 'Assests/Icons light/health.svg',
    others: 'Assests/Icons light/others.svg'
};

// confirm transaction and proceed

function confirmTransaction() {
    // Take data 
    const Type = document.querySelector('#filterType_add_transaction').value;
    const Category = document.querySelector('#filterCategory_add_transaction').value;
    const Heading = document.querySelector('#Type_head').value;
    const Amount = document.querySelector('#Type_amount').value;
    let PicSrc = Categories_src['others'];
    if (Category && Category !== 'others') {
        PicSrc = Categories_src[Category];
    }
    let Proceed = true;
    [Type, Category, Heading, Amount].forEach(val => {
        if (!val) {
            ShowToast('NO value entered', `Please Enter all values`, 'warning');
            Proceed = false;
        }

    })
    if (Proceed == true) {
        // Hide toast and blur Element
        const toast_existing = document.querySelector('.Transaction_toast');
        toast_existing.remove();
        const blurE = document.querySelector('.backdrop');
        blurE.remove();
        // get today date
        const date = new Date().toISOString().split('T')[0];
        // Append row in and reload balance
        const Transaction_row = document.createElement('li');
        Transaction_row.setAttribute('data-transaction', Heading);
        Transaction_row.setAttribute('data-category', Category);
        Transaction_row.setAttribute('data-type', Type);
        Transaction_row.setAttribute('data-date', date);
        Transaction_row.setAttribute('data-transaction-keyword', Heading);
        Transaction_row.innerHTML = `
                            <span class="cell-icon"><img src="Assests/Icons light/electricity-bill.svg" alt=""></span>
                            <span class="cell-date">
                            <span class="date-main">Sep 10, 2023</span>
                            <span class="date-sub">06:30 PM</span>
                            </span>
                            <span class="cell-desc">
                                <span class="desc-title">${Heading}</span>
                                </span>
                                <span class="cell-category"><span class="pill pill-indigo">${Category}</span></span>
                            <span class="cell-type type-expense">${Type}</span>
                            <span class="cell-amount amount-expense">-${Amount}</span>
                            <span class="cell-actions">
                                <button class="icon-btn delete-btn" aria-label="Delete">
                                <img src="Assests/Icons light/Delete icon.svg" alt="">
                                </button>
                                </span>
                                <span class="cell-chevron"><img src="Assests/Icons light/Drop down icon.svg"
                                data-light="Assests/Icons light/Drop down icon.svg"
                                data-dark="Assests/Icons dark/Drop down icon.svg" alt=""></span>
                       
                                `
        // Data update
        const data_transaction = { transaction: Heading, amount: Amount };
        console.log('Category =', JSON.stringify(Category));
        console.log('key =', JSON.stringify(Category.toLowerCase()));
        console.log('keys =', Object.keys(TransactionsData));
        TransactionsData.this_month[Category.toLowerCase()].Transactions.push(data_transaction);
        TransactionsData.this_month[Category.toLowerCase()].total += Amount;
        console.log(TransactionsData);
    }
}

function Signup() {
    const name = document.querySelector('#signupName').value;
    const email = document.querySelector('#signupEmail').value;
    const phone = document.querySelector('#signupPhone').value;
    const country = document.querySelector('#signupCountry').value;
    const currency = document.querySelector('#signupCurrency').value;
    const budget = document.querySelector('#signupBudget').value;
    if (!name || !email || !country || !currency) {
        ShowToast('Invalid info', 'Please enter all required fields.', 'error');
        return;
    }
    // Set values
    const profileData = {
        profile: {
            name: name,
            email: email,
            country: country,
            currency: currency,
            phone: 'none',
            budget: 'none',
        }
    }
    if (phone) profileData.profile.phone = phone;
    if (budget) profileData.profile.budget = budget;
    //Set localstorage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    // remove overlay
    document.body.querySelector('#authOverlay').remove();
    // Update profile tab
    //get html
    const display_name = document.querySelector('#profileDisplayName');
    const display_email = document.querySelector('#profileDisplayEmail');
    const display_currency = document.querySelector('#summaryCurrency');
    const display_country = document.querySelector('#summaryCountry');
    const display_name_input = document.querySelector('#profileName');
    const display_email_input = document.querySelector('#profileEmail');
    const display_country_input = document.querySelector('#profileCountry');
    const display_currency_input = document.querySelector('#profileCurrency');
    const profile_icon_display = document.querySelector('#profileAvatarInitials');
    // assign values
    display_name.textContent = name;
    display_email.textContent = email;
    display_currency.textContent = currency;
    display_country.textContent = country;
    display_name_input.value = name;
    display_email_input.value = email;
    display_country_input.value = country;
    display_currency_input.value = currency;
    profile_icon_display.textContent = name.split('')[0];
    if (phone) {
        document.querySelector('#profilePhone').value = phone;
    }
    if (budget) {
        document.querySelector('#profileBudget').value = budget;
        document.querySelector('#summaryBudget').textContent = budget;
    }
}

// -------Profile tab editing

// Event listner
document.addEventListener('change', function (e) {
    if (e.target.closest('.filter-profile') || e.target.closest('.profile-input')) {
        const changes_alter_btn = document.querySelector('.profile-form-actions');
        // check if values are same as localstorage
        const display_name_input = document.querySelector('#profileName');
        const display_email_input = document.querySelector('#profileEmail');
        const display_country_input = document.querySelector('#profileCountry');
        const display_currency_input = document.querySelector('#profileCurrency');
        const display_phone_input = document.querySelector('#profilePhone');
        const display_budget_input = document.querySelector('#profileBudget');
        // Make data object
        const data = {
            profile: {
                name: display_name_input.value,
                email: display_email_input.value,
                country: display_country_input.value,
                currency: display_currency_input.value,
                phone: display_phone_input.value,
                budget: display_budget_input.value,
            }
        }
        const localstorageData = localStorage.getItem('profileData');
        if (JSON.stringify(data) === localstorageData) {
            // hide save/ discard bar
            const changes_alter_btn = document.querySelector('.profile-form-actions');
            changes_alter_btn.classList.add('hidden');
            changes_alter_btn.classList.remove('flex');
            return;
        }
        // proceed
        if (changes_alter_btn.classList.contains('hidden')) {
            changes_alter_btn.classList.add('flex');
            changes_alter_btn.classList.remove('hidden');
        }
    }
})
// function for save button
function ProfileEdit_Save() {
    // Get html and check if no value is entered
    const display_name_input = document.querySelector('#profileName');
    if (!display_name_input.value) ShowToast('Enter name', 'Name cannot be empty', 'warning')
    const display_email_input = document.querySelector('#profileEmail');
    if (!display_email_input.value) ShowToast('Enter Email', 'Email cannot be empty', 'warning');
    const display_country_input = document.querySelector('#profileCountry');
    if (!display_country_input.value) ShowToast('Enter country', 'Country is required', 'warning');
    const display_currency_input = document.querySelector('#profileCurrency');
    const display_phone_input = document.querySelector('#profilePhone');
    const display_budget_input = document.querySelector('#profileBudget');
    // Make data object
    const data = {
        profile: {
            name: display_name_input.value,
            email: display_email_input.value,
            country: display_country_input.value,
            currency: display_currency_input.value,
            phone: display_phone_input.value,
            budget: display_budget_input.value,
        }
    }
    //Set localstorage
    localStorage.setItem('profileData', JSON.stringify(data));
    // hide save/ discard bar
    const changes_alter_btn = document.querySelector('.profile-form-actions');
    changes_alter_btn.classList.add('hidden');
    changes_alter_btn.classList.remove('flex');
}
// Function for discard button
function ProfileEdit_Discard() {
    // get localstorage data
    const data = JSON.parse(localStorage.getItem('profileData'));
    // Implement it in html
    const display_name_input = document.querySelector('#profileName');
    const display_email_input = document.querySelector('#profileEmail');
    const display_country_input = document.querySelector('#profileCountry');
    const display_currency_input = document.querySelector('#profileCurrency');
    display_name_input.value = data.profile.name;
    display_email_input.value = data.profile.email;
    display_country_input.value = data.profile.country;
    display_currency_input.value = data.profile.currency;
    // -- additional implementation with checks
    if (data.profile.phone !== 'none') {
        document.querySelector('#profilePhone').value = data.profile.phone;
    }
    if (data.profile.budget !== 'none') {
        document.querySelector('#profileBudget').value = data.profile.budget;
    }
    // hide save/ discard bar
    const changes_alter_btn = document.querySelector('.profile-form-actions');
    changes_alter_btn.classList.add('hidden');
    changes_alter_btn.classList.remove('flex');
}
//NOTE: The System : Add Transaction > Transactions && Categories update > LocatStorage > UI
Object.entries(TransactionsData).forEach(([category, data]) => {

});

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
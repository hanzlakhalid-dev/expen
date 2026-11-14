// If no profile found then popup will appear
const existingProfile = localStorage.getItem('profileData');

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

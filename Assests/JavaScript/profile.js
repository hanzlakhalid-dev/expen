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

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
    if (e.target.closest('.delete-transaction-btn')){
        Delete_Transaction()
    }
});
document.body.addEventListener('change', function (e) {
    if (e.target.closest('#filterType_add_transaction')) {
        switch_category(e.target.closest('#filterType_add_transaction').value);
    }
})

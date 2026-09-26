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
})

// Tab swithing

function tab_switch(tab) {
    const tab_name = tab.getAttribute('data-tab');
    // add/ remove tab classes
    const active_tab = document.querySelectorAll('.active-tab');
    const active_tab_name = active_tab[0].getAttribute('data-tab');
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

// Chart integration

// Categories:
const categories = [
    { name: "Food & Dining", amount: 620 },
    { name: "Transport", amount: 420 },
    { name: "Shopping", amount: 340 },
    { name: "Bills & Utilities", amount: 280 },
    { name: "Others", amount: 200 }
];
function Chart_integrate() {
    // Colours: 
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
    const total = categories.reduce((sum, item) => sum + item.amount, 0);
    // get 
    const Expense_Bycategory = document.querySelector('#expenseChart_bycategory');

    new Chart(Expense_Bycategory, {
        type: "doughnut",

        data: {
            labels: categories.map(item => item.name),

            datasets: [{
                data: categories.map(item => item.amount),
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
Chart_integrate();

// Transactions array
let Transactions_Made = ['Salary', 'Groceries', 'Transport', 'Freelance Project', 'Electricity Bill', ' Dinner', 'Online course'];

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
    let Filter = [];
    let Hidden = [];
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
        const now = new Date();
        const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const thisMonth = date_today.split('-')[1] === el.dataset.date.split('-')[1] && date_today.split('-')[0] === el.dataset.date.split('-')[0];
        const lastMonth = lastMonthDate === parseInt(el.dataset.date.split('-')[1]) && date_today.split('-')[0] === el.dataset.date.split('-')[0];
        const thisYear = date_today.split('-')[2] === el.dataset.date.split('-')[2] && date_today.split('-')[0] === el.dataset.date.split('-')[0];

            if(thisMonth){
                el.style.display = 'grid'
            }
            else{
                el.style.display = 'none'
            }
            if(lastMonth){
                el.style.display = 'grid'
            }
            else{
                el.style.display = 'none'
            }
            if(thisYear){
                el.style.display = 'grid'
            }
            else{
                el.style.display = 'none'
            }

    })
    // Type 
    const new_filter_type = filter_type.value;
    if (new_filter_type === 'income' || new_filter_type === 'expense') {     
        const visible_type = [...box_transactions.children].filter(
            el => getComputedStyle(el).display !== 'none'
        );
        visible_type.forEach(el => {
            if(el.dataset.type === new_filter_type){
                el.style.display = 'grid'
            }
            else{
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
       if(el.dataset.category === new_filter_Category){
                el.style.display = 'grid'
            }
            else{
                el.style.display = 'none'
            }
    })
    }
}





//TODO: know how it is responsive
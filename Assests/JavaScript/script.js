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
const ExpenseData = {
    food: {
        total: 203,
        color: '#3b82f6',
        Transactions: [
            { transaction: 'this', amount: 14250.75 },
            { transaction: 'ewssg', amount: 6890.50 },
            { transaction: 'etetawe', amount: 9240.00 }
        ]
    },
    transport: {
        total: 305,
        color: '#10b981',
        Transactions: [
            { transaction: 'bus', amount: 14250.75 }
        ]
    },
    shopping: {
        total: 305,
        color: '#f59e0b',
        Transactions: [
            { transaction: 'eta', amount: 14250.75 },
            { transaction: 'hghz', amount: 6890.50 },
            { transaction: 'as', amount: 9240.00 },
        ]
    },
    bills: {
        total: 305,
        color: '#ef4444',
        Transactions: [
            { transaction: 'wefwea', amount: 14250.75 },
            { transaction: 'eatg', amount: 6890.50 },
        ]
    },
    entertainment: {
        total: 305,
        color: '#8b5cf6',
        Transactions: [
            { transaction: 'eta', amount: 14250.75 },
            { transaction: 'agsd', amount: 6890.50 },
        ]
    },
    health: {
        total: 305,
        color: '#ec4899',
        Transactions: [
            { transaction: 'aseffa', amount: 14250.75 },
            { transaction: 'fad', amount: 6890.50 },
        ]
    },
    other: {
        total: 33,
        color: '#06b6d4',
        Transactions: [
            { transaction: 'Fhtd', amount: 14250.75 },
            { transaction: 'hsf', amount: 6890.50 },
            { transaction: 'ndgj', amount: 9240.00 },
        ]
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
Chart_integrate(ExpenseData);


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
    const Rawdata = ExpenseData[parsed_value];
    const Designated_data = Rawdata.data;
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
    const total = Rawdata.totalAmount;
    Designated_data.forEach(item => {
        const category = item.category;
        const amount = item.amount;
        const newli = document.createElement('li');
        const percent = ((amount / total) * 100).toFixed(1);
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
                    <h2 class="input-toast-h"> Enter Meta Title </h2>
                    <div class="toast-container">
                        <input type="search" class="search-input" id="Type_meta"
                        placeholder="Type something i.e Website Project">
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
    document.body.appendChild(bckblur)
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
    const Meta_Title = document.querySelector('#Type_meta').value;
    const Amount = document.querySelector('#Type_amount').value;
    let PicSrc = Categories_src['others'];
    console.log(PicSrc)
    if (Category && Category !== 'others') {
        PicSrc = Categories_src[Category];
        console.log(PicSrc)
    }
    let Proceed = true;
    [Type, Category, Heading, Meta_Title, Amount].forEach(val => {
        if (!val) {
            ShowToast('NO value entered', `Please Enter ${val}`, 'warning');
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
        //  const date = new Date().toISOString.split('T')[0];
        // ShowToast('Date', date, 'info')
        // Append row in and reload balance
        const Transaction_row = document.createElement('li');
        Transaction_row.dataset.add('data-transaction', Heading);
        Transaction_row.dataset.add('data-category', Category);
        Transaction_row.dataset.add('data-type', Type);
        Transaction_row.dataset.add('data-date', 'Fake');
        Transaction_row.innerHTML = `
                            <span class="cell-icon"><img src="Assests/Icons light/electricity-bill.svg" alt=""></span>
                            <span class="cell-date">
                            <span class="date-main">Sep 10, 2023</span>
                            <span class="date-sub">06:30 PM</span>
                            </span>
                            <span class="cell-desc">
                                <span class="desc-title">Internet Bill</span>
                                <span class="desc-sub">Fiber optic plan</span>
                                </span>
                                <span class="cell-category"><span class="pill pill-indigo">Bills</span></span>
                            <span class="cell-type type-expense">Expense</span>
                            <span class="cell-amount amount-expense">-$45.00</span>
                            <span class="cell-actions">
                                <button class="icon-btn delete-btn" aria-label="Delete">
                                <img src="Assests/Icons light/Delete icon.svg" alt="">
                                </button>
                                </span>
                                <span class="cell-chevron"><img src="Assests/Icons light/Drop down icon.svg"
                                data-light="Assests/Icons light/Drop down icon.svg"
                                data-dark="Assests/Icons dark/Drop down icon.svg" alt=""></span>
                       
                                `
    }
}
//NOTE: The System : Add Transaction > Transactions && Categories update > LocatStorage > UI
//TODO: Prompt user account settings if no localstorage data of profile is found,
//TODO: remove and stick to one categorie model, stick to one data

Object.entries(ExpenseData).forEach(([category, data]) => {

});
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
                         <option data-category="income" value="investments">Investments</option>
                         <option data-category="income" value="gifts">Gifts</option>
                         <option data-category="expense" value="food">Food</option>
                         <option data-category="expense" value="transport">Transport</option>
                         <option data-category="expense" value="bills">Bills</option>
                         <option data-category="expense" value="shopping">Shopping</option>
                         <option data-category="expense" value="education">Education</option>
                         <option data-category="expense" value="entertainment">Entertainment</option>
                         <option data-category="expense" value="health">Health</option>
                        
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
    let Category = document.querySelector('#filterCategory_add_transaction').value;
    const Heading = document.querySelector('#Type_head').value;
    const Amount = document.querySelector('#Type_amount').value;
    //Handle others
    if (Category == 'others') {
        if (Type === 'income') Category = 'other_income'
        else Category = 'other_expense'
    }
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
        // Check if it is costing more than balance
        if(TransactionsData.totals.this_month.balance < Number(Amount) && Type == 'expense'){
            ShowToast('Error', `The transaction can't exceed our balance`, 'error');
            return;
        }
        // Go forward
        let ParsedAmount = `+${CurrencyFormat(Amount)}`;
        let parsed_Category = Category;
        if (parsed_Category == 'others_expense' || parsed_Category == 'others_income') {
            console.log('ran')
            parsed_Category = 'others'
        }
        if (Type == 'expense') ParsedAmount = `-${CurrencyFormat(Amount)}`;
        // Hide toast and blur Element
        const toast_existing = document.querySelector('.Transaction_toast');
        toast_existing.remove();
        const blurE = document.querySelector('.backdrop');
        blurE.remove();
        // get today date
        const UniqueId = Date.now();
        const dateObj = new Date()
        const date = dateObj.toISOString().split('T')[0];
        const month = dateObj.toLocaleString('en-US', { month: 'short' });
        const day = dateObj.toLocaleString('en-US', { day: 'numeric' });
        const year = dateObj.toLocaleString('en-US', { year: 'numeric' });
        const formattedDate = `${month} ${day}, ${year}`;
        const formattedTime = dateObj.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        // Append row in and reload balance
        const Transaction_row = document.createElement('li');
        Transaction_row.classList.add('transaction-row')
        Transaction_row.setAttribute('data-transaction', Heading);
        Transaction_row.setAttribute('data-category', Category);
        Transaction_row.setAttribute('data-type', Type);
        Transaction_row.setAttribute('data-date', date);
        Transaction_row.setAttribute('data-transaction-keyword', Heading);
        Transaction_row.innerHTML = `
                            <span class="cell-icon"><img src="${PicSrc}" alt=""></span>
                            <span class="cell-date">
                            <span class="date-main">${formattedDate}</span>
                            <span class="date-sub">${formattedTime}</span>
                            </span>
                            <span class="cell-desc">
                                <span class="desc-title">${Heading}</span>
                                </span>
                                <span class="cell-category"><span class="pill pill-indigo">${parsed_Category}</span></span>
                            <span class="cell-type type-${Type}">${Type}</span>
                            <span class="cell-amount amount-${Type}">${ParsedAmount}</span>
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
        const cat = TransactionsData.this_month[Category.toLowerCase()];
        cat.Transactions.push({ transaction: Heading, amount: Number(Amount), id: UniqueId, dateCreation: date });
        cat.total = cat.Transactions.reduce((s, t) => s + t.amount, 0);
        if (Type == 'income') {
            TransactionsData.totals.this_month.income += Number(Amount);
            TransactionsData.totals.this_month.balance += Number(Amount);
        }
        else {
            TransactionsData.totals.this_month.expense += Number(Amount);
            TransactionsData.totals.this_month.balance -= Number(Amount);
        }

        // localstorage update
        localStorage.setItem('Transactions', JSON.stringify(TransactionsData));
        // Append in UI
        document.querySelector('.transaction-table').appendChild(Transaction_row);
        // Update UI in desktop
        // -- Rerun chart
        const canvas = document.getElementById('expenseChart_bycategory');
        const existingChart = Chart.getChart(canvas);
        if (existingChart) {
            existingChart.destroy();
        }
        Chart_integrate(TransactionsData.this_month);
        // --Rerun category distribution near chart
        const new_value = filter_btn_dashboard.value;
        if (!new_value) return;
        const parsed_value = new_value.toLowerCase().replace(/-/g, "_");
        const Rawdata = TransactionsData[parsed_value];
        const Designated_data = Rawdata;
        // UI values change
        const container_info = document.querySelector('.right-expense-detail-by-category');
        container_info.innerHTML = ''
        let total = 0;
        Object.entries(Designated_data).forEach(([category, item]) => {
            total += item.total
        })
        Object.entries(Designated_data).forEach(([category, item]) => {
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
        // -- income, expense, balance cards update
        const income_Card = document.querySelector('.income-f');
        const expense_Card = document.querySelector('.expense-f');
        const balance_Card = document.querySelector('.total-balance-f');
        income_Card.textContent = CurrencyFormat(TransactionsData.totals.this_month.income);
        expense_Card.textContent = CurrencyFormat(TransactionsData.totals.this_month.expense);
        balance_Card.textContent = CurrencyFormat(TransactionsData.totals.this_month.balance);
        // -- recent transactions update
        const recent_html = document.createElement('li');
        recent_html.classList.add('transaction-dashboard');
        recent_html.innerHTML =
            `<span class="icon-category"><img src="${PicSrc}" alt=""></span>
                                <span class="info-transaction-dashboard">
                                    <span class="title-transaction-dashboard">${Heading}</span>
                                    <span class="date-transaction-dashboard">${formattedDate}</span>
                                </span>
                                <span class="money-trasactions amount-${Type}">${ParsedAmount}</span>`
        // delete old
        const firstLi = document.querySelector('.transaction-list-dashboard').lastElementChild;
        firstLi.remove();
        // add new
        document.querySelector('.transaction-list-dashboard').prepend(recent_html);
        // Categories tab update
        // get the corresponding row of category UI from category given
        const Category_li = document.querySelector(`[data-category-tab='${Category}']`);
        const Total_category_Amount = TransactionsData.this_month[Category.toLowerCase()].total;
        let Total_Type_Amount = TransactionsData.totals.this_month.expense;
        if (Type == 'expense') {
            Category_li.querySelector('.amount-expense').innerHTML = `-${CurrencyFormat(Total_category_Amount)}`;
            document.querySelector('.total-category-expense').innerHTML = `-${CurrencyFormat(Total_Type_Amount)}`
        }
        else {
            Total_Type_Amount = TransactionsData.totals.this_month.income
            Category_li.querySelector('.amount-income').innerHTML = `+${CurrencyFormat(Total_category_Amount)}`;
            document.querySelector('.total-category-income').innerHTML = `+${CurrencyFormat(Total_Type_Amount)}`
        }
    }
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
};

// Delete transaction function
function Delete_Transaction() {

}
// TODO: Make a function that gets last 4 transactions from tab and prints on dashboard.
//TODO: reload and display correct data in UI from local storage ( rerun all filters on reload), (data exchange from this_month to others if outdated)

//WIP: On delete transaction logic
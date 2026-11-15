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
        let ParsedAmount = CurrencyFormat(Amount);
        if (Type == 'expense') ParsedAmount = `-${CurrencyFormat(Amount)}`;
        //Handle others
        if (Category == 'others') {
            if (Type === 'income') Category = 'other_income'
            else Category = 'other_expense'
        }
        // Hide toast and blur Element
        const toast_existing = document.querySelector('.Transaction_toast');
        toast_existing.remove();
        const blurE = document.querySelector('.backdrop');
        blurE.remove();
        // get today date
        const dateObj = new Date()
        const date = dateObj.toISOString().split('T')[0];
        const month = dateObj.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Karachi' });
        const day = dateObj.toLocaleString('en-US', { day: 'numeric', timeZone: 'Asia/Karachi' });
        const year = dateObj.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Karachi' });

        const formattedDate = `${month} ${day}, ${year}`;
        const formattedTime = dateObj.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Karachi'
        });
        console.log(formattedDate, formattedTime);
        // Append row in and reload balance
        const Transaction_row = document.createElement('li');
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
                                <span class="cell-category"><span class="pill pill-indigo">${Category}</span></span>
                            <span class="cell-type type-${Type}">${Type}</span>
                            <span class="cell-amount amount-expense">${ParsedAmount}</span>
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
        const data_transaction = { transaction: Heading, amount: Number(Amount) };
        console.log('Category =', JSON.stringify(Category));
        console.log('key =', JSON.stringify(Category.toLowerCase()));
        console.log('keys =', Object.keys(TransactionsData));
        TransactionsData.this_month[Category.toLowerCase()].Transactions.push(data_transaction);
        TransactionsData.this_month[Category.toLowerCase()].total += Number(Amount);
        console.log(TransactionsData);
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

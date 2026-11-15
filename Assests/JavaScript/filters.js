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
// -- Currency formatter
function CurrencyFormat(value) {
    // Get from localstorage
    const currecyFormat = JSON.parse(localStorage.getItem('profileData')).profile.currency;
    if (!currecyFormat) return;
    // Array
    const symbols = {
        USD: '$',
        GBP: '£',
        AUD: 'A$',
        INR: '₹',
        JPY: '¥',
        CAD: 'C$',
        PKR: 'Rs',
        AED: 'د.إ',
        SAR: '﷼',
        EUR: '€'
    };

    const symbol = symbols[currecyFormat] || currecyFormat;
    // Check for grouping and return values
    if (currecyFormat == 'USD' || currecyFormat == 'GBP' || currecyFormat == 'AUD' || currecyFormat == 'INR' || currecyFormat == 'JPY' || currecyFormat == 'CAD') {
        return (`${symbol}${value}`);
    }
    if (currecyFormat == 'PKR' || currecyFormat == 'AED' || currecyFormat == 'SAR') {
        return (`${symbol} ${value}`)
    }
    if (currecyFormat == 'EUR') {
        return (`${value} ${symbol}`)
    }
}
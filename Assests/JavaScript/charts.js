// Filter logic for dashboard
let filter_btn_dashboard = document.querySelector('#filterDate_dashboard');
if (filter_btn_dashboard) {
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
}

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

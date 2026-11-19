// Transactions model
const TransactionsData = {
    totals: {
        this_month: {
            income: 6775.50,
            expense: 2700.71,
            balance: 4074.79
        },
        last_year: {
            income: 69330.00,
            expense: 38590.30,
            balance: 30739.70
        },
        last_month: {
            income: 6545.00,
            expense: 2585.92,
            balance: 3959.08
        },
        this_year: {
            income: 77310.50,
            expense: 40221.50,
            balance: 37089.00
        }
    },
    this_month: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 5200.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00, id: 1795104688554, dateCreation: '2026-11-01' }
            ]
        },
        freelance: {
            type: 'income',
            total: 1200.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Redesign - Client A', amount: 1200.00, id: 1795104688555, dateCreation: '2026-11-05' }
            ]
        },
        investments: {
            type: 'income',
            total: 180.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 180.50, id: 1795104688556, dateCreation: '2026-11-10' }
            ]
        },
        gifts: {
            type: 'income',
            total: 100.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday Gift from Parents', amount: 100.00, id: 1795104688557, dateCreation: '2026-11-12' }
            ]
        },
        other_income: {
            type: 'income',
            total: 95.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Sold Old Monitor on eBay', amount: 95.00, id: 1795104688558, dateCreation: '2026-11-15' }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 232.25,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Whole Foods Grocery', amount: 142.75, id: 1795104688559, dateCreation: '2026-11-03' },
                { transaction: 'Chipotle Lunch', amount: 14.25, id: 1795104688560, dateCreation: '2026-11-07' },
                { transaction: 'Starbucks Coffee', amount: 6.50, id: 1795104688561, dateCreation: '2026-11-09' },
                { transaction: 'Pizza Night - Domino\'s', amount: 32.80, id: 1795104688562, dateCreation: '2026-11-14' },
                { transaction: 'Sushi Dinner - Tokyo Grill', amount: 36.00, id: 1795104688563, dateCreation: '2026-11-18' }
            ]
        },
        transport: {
            type: 'expense',
            total: 165.50,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - Shell', amount: 52.00, id: 1795104688564, dateCreation: '2026-11-02' },
                { transaction: 'Uber Ride to Airport', amount: 38.50, id: 1795104688565, dateCreation: '2026-11-08' },
                { transaction: 'Monthly Metro Card', amount: 75.00, id: 1795104688566, dateCreation: '2026-11-01' }
            ]
        },
        shopping: {
            type: 'expense',
            total: 279.49,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Nike Running Shoes', amount: 129.99, id: 1795104688567, dateCreation: '2026-11-04' },
                { transaction: 'Amazon - Household Items', amount: 87.50, id: 1795104688568, dateCreation: '2026-11-11' },
                { transaction: 'H&M Clothing', amount: 62.00, id: 1795104688569, dateCreation: '2026-11-16' }
            ]
        },
        education: {
            type: 'expense',
            total: 620.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'Udemy - React Course', amount: 19.99, id: 1795104688570, dateCreation: '2026-11-06' },
                { transaction: 'Coursera - Data Science Specialization', amount: 49.00, id: 1795104688571, dateCreation: '2026-11-09' },
                { transaction: 'Textbook - Clean Code', amount: 32.00, id: 1795104688572, dateCreation: '2026-11-13' },
                { transaction: 'University Tuition - Monthly Installment', amount: 519.01, id: 1795104688573, dateCreation: '2026-11-01' }
            ]
        },
        bills: {
            type: 'expense',
            total: 1149.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00, id: 1795104688574, dateCreation: '2026-11-01' },
                { transaction: 'Electric Bill - ConEd', amount: 85.00, id: 1795104688575, dateCreation: '2026-11-05' },
                { transaction: 'Internet - Spectrum', amount: 79.99, id: 1795104688576, dateCreation: '2026-11-05' },
                { transaction: 'Phone Bill - Verizon', amount: 35.00, id: 1795104688577, dateCreation: '2026-11-07' }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 58.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99, id: 1795104688578, dateCreation: '2026-11-02' },
                { transaction: 'Spotify Premium', amount: 10.99, id: 1795104688579, dateCreation: '2026-11-02' },
                { transaction: 'AMC Movie Tickets', amount: 32.00, id: 1795104688580, dateCreation: '2026-11-17' }
            ]
        },
        health: {
            type: 'expense',
            total: 120.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'CVS Pharmacy - Prescriptions', amount: 45.00, id: 1795104688581, dateCreation: '2026-11-06' },
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00, id: 1795104688582, dateCreation: '2026-11-01' },
                { transaction: 'Dental Checkup Copay', amount: 50.00, id: 1795104688583, dateCreation: '2026-11-10' }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 74.50,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food - PetSmart', amount: 45.50, id: 1795104688584, dateCreation: '2026-11-08' },
                { transaction: 'Dry Cleaning', amount: 29.00, id: 1795104688585, dateCreation: '2026-11-15' }
            ]
        }
    },

    last_month: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 5200.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00, id: 1795104688586, dateCreation: '2026-10-01' }
            ]
        },
        freelance: {
            type: 'income',
            total: 950.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Social Media Graphics - Client C', amount: 450.00, id: 1795104688587, dateCreation: '2026-10-09' },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00, id: 1795104688588, dateCreation: '2026-10-21' }
            ]
        },
        investments: {
            type: 'income',
            total: 195.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 195.00, id: 1795104688589, dateCreation: '2026-10-10' }
            ]
        },
        gifts: {
            type: 'income',
            total: 50.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Cash Gift from Grandparents', amount: 50.00, id: 1795104688590, dateCreation: '2026-10-14' }
            ]
        },
        other_income: {
            type: 'income',
            total: 150.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Refund from Amazon Return', amount: 150.00, id: 1795104688591, dateCreation: '2026-10-19' }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 254.70,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Kroger Grocery', amount: 156.25, id: 1795104688592, dateCreation: '2026-10-04' },
                { transaction: 'Dinner at Italian Bistro', amount: 68.00, id: 1795104688593, dateCreation: '2026-10-11' },
                { transaction: 'DoorDash - Thai Food', amount: 30.45, id: 1795104688594, dateCreation: '2026-10-23' }
            ]
        },
        transport: {
            type: 'expense',
            total: 135.75,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - BP', amount: 48.25, id: 1795104688595, dateCreation: '2026-10-05' },
                { transaction: 'Lyft Ride Downtown', amount: 22.50, id: 1795104688596, dateCreation: '2026-10-12' },
                { transaction: 'Parking Garage - Weekend', amount: 65.00, id: 1795104688597, dateCreation: '2026-10-18' }
            ]
        },
        shopping: {
            type: 'expense',
            total: 245.50,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Zara - Winter Jacket', amount: 189.50, id: 1795104688598, dateCreation: '2026-10-07' },
                { transaction: 'Amazon - Kitchen Gadgets', amount: 56.00, id: 1795104688599, dateCreation: '2026-10-16' }
            ]
        },
        education: {
            type: 'expense',
            total: 575.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'Udemy - Node.js Bootcamp', amount: 15.99, id: 1795104688600, dateCreation: '2026-10-03' },
                { transaction: 'Library Late Fees', amount: 4.00, id: 1795104688601, dateCreation: '2026-10-08' },
                { transaction: 'University Tuition - Monthly Installment', amount: 519.01, id: 1795104688602, dateCreation: '2026-10-01' },
                { transaction: 'Notebooks & Stationery', amount: 36.00, id: 1795104688603, dateCreation: '2026-10-20' }
            ]
        },
        bills: {
            type: 'expense',
            total: 1144.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00, id: 1795104688604, dateCreation: '2026-10-01' },
                { transaction: 'Electric Bill - ConEd', amount: 78.00, id: 1795104688605, dateCreation: '2026-10-05' },
                { transaction: 'Internet - Spectrum', amount: 79.99, id: 1795104688606, dateCreation: '2026-10-05' },
                { transaction: 'Water Bill - NYC', amount: 37.00, id: 1795104688607, dateCreation: '2026-10-06' }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 91.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99, id: 1795104688608, dateCreation: '2026-10-02' },
                { transaction: 'Spotify Premium', amount: 10.99, id: 1795104688609, dateCreation: '2026-10-02' },
                { transaction: 'Topgolf with Coworkers', amount: 65.00, id: 1795104688610, dateCreation: '2026-10-17' }
            ]
        },
        health: {
            type: 'expense',
            total: 93.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00, id: 1795104688611, dateCreation: '2026-10-01' },
                { transaction: 'CVS - Cold Medicine', amount: 18.00, id: 1795104688612, dateCreation: '2026-10-13' },
                { transaction: 'Eye Exam Copay', amount: 50.00, id: 1795104688613, dateCreation: '2026-10-22' }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 85.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Grooming - PetSmart', amount: 55.00, id: 1795104688614, dateCreation: '2026-10-09' },
                { transaction: 'Car Registration Renewal', amount: 30.00, id: 1795104688615, dateCreation: '2026-10-25' }
            ]
        }
    },

    this_year: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 62400.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 62400.00, id: 1795104688616, dateCreation: '2026-12-31' }
            ]
        },
        freelance: {
            type: 'income',
            total: 12450.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'E-commerce Site - Client E', amount: 2800.00, id: 1795104688617, dateCreation: '2026-02-14' },
                { transaction: 'Brand Identity Package - Client F', amount: 1500.00, id: 1795104688618, dateCreation: '2026-03-22' },
                { transaction: 'App UI Design - Client I', amount: 2200.00, id: 1795104688619, dateCreation: '2026-05-09' },
                { transaction: 'Monthly Retainer - Client J', amount: 1800.00, id: 1795104688620, dateCreation: '2026-06-15' },
                { transaction: 'Website Redesign - Client A', amount: 1200.00, id: 1795104688621, dateCreation: '2026-11-05' },
                { transaction: 'Landing Page - Client G', amount: 800.00, id: 1795104688622, dateCreation: '2026-07-19' },
                { transaction: 'SEO Audit - Client H', amount: 550.00, id: 1795104688623, dateCreation: '2026-08-03' },
                { transaction: 'Logo Design - Client B', amount: 650.00, id: 1795104688624, dateCreation: '2026-09-11' },
                { transaction: 'Social Media Graphics - Client C', amount: 450.00, id: 1795104688625, dateCreation: '2026-10-09' },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00, id: 1795104688626, dateCreation: '2026-10-21' }
            ]
        },
        investments: {
            type: 'income',
            total: 810.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 810.50, id: 1795104688627, dateCreation: '2026-12-15' }
            ]
        },
        gifts: {
            type: 'income',
            total: 450.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 450.00, id: 1795104688628, dateCreation: '2026-12-25' }
            ]
        },
        other_income: {
            type: 'income',
            total: 1200.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 1200.00, id: 1795104688629, dateCreation: '2026-04-18' }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 1405.00,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00, id: 1795104688630, dateCreation: '2026-01-15' },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00, id: 1795104688631, dateCreation: '2026-02-20' },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00, id: 1795104688632, dateCreation: '2026-03-10' },
                { transaction: 'Costco Bulk Shopping - Quarterly', amount: 600.00, id: 1795104688633, dateCreation: '2026-06-30' },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00, id: 1795104688634, dateCreation: '2026-12-22' }
            ]
        },
        transport: {
            type: 'expense',
            total: 3890.25,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 180.00, id: 1795104688635, dateCreation: '2026-01-20' },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 810.00, id: 1795104688636, dateCreation: '2026-03-01' },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1500.00, id: 1795104688637, dateCreation: '2026-12-31' },
                { transaction: 'Car Maintenance - Annual', amount: 300.00, id: 1795104688638, dateCreation: '2026-05-12' },
                { transaction: 'Parking & Tolls', amount: 450.00, id: 1795104688639, dateCreation: '2026-08-25' },
                { transaction: 'Uber/Lyft - Monthly Avg', amount: 65.00, id: 1795104688640, dateCreation: '2026-09-18' }
            ]
        },
        shopping: {
            type: 'expense',
            total: 4250.75,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00, id: 1795104688641, dateCreation: '2026-02-08' },
                { transaction: 'Amazon - Monthly Avg', amount: 180.00, id: 1795104688642, dateCreation: '2026-04-14' },
                { transaction: 'Electronics - Annual', amount: 450.00, id: 1795104688643, dateCreation: '2026-07-04' },
                { transaction: 'Furniture - IKEA', amount: 280.00, id: 1795104688644, dateCreation: '2026-09-02' },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00, id: 1795104688645, dateCreation: '2026-12-18' },
                { transaction: 'Samsung - Smart Watch', amount: 299.99, id: 1795104688646, dateCreation: '2026-10-27' }
            ]
        },
        education: {
            type: 'expense',
            total: 6850.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'University Tuition - 12 months', amount: 6228.00, id: 1795104688647, dateCreation: '2026-01-10' },
                { transaction: 'Online Courses (Udemy, Coursera)', amount: 350.00, id: 1795104688648, dateCreation: '2026-05-22' },
                { transaction: 'Textbooks - Annual', amount: 172.00, id: 1795104688649, dateCreation: '2026-08-14' },
                { transaction: 'Exam Registration Fees', amount: 100.00, id: 1795104688650, dateCreation: '2026-11-02' }
            ]
        },
        bills: {
            type: 'expense',
            total: 14940.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00, id: 1795104688651, dateCreation: '2026-01-01' },
                { transaction: 'Electric Bill - Annual', amount: 1020.00, id: 1795104688652, dateCreation: '2026-12-05' },
                { transaction: 'Internet - Spectrum (12 months)', amount: 959.88, id: 1795104688653, dateCreation: '2026-12-05' },
                { transaction: 'Water Bill - Annual', amount: 540.00, id: 1795104688654, dateCreation: '2026-12-06' },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 1020.12, id: 1795104688655, dateCreation: '2026-12-07' }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1890.50,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Netflix, Spotify, Hulu)', amount: 403.64, id: 1795104688656, dateCreation: '2026-12-31' },
                { transaction: 'Concert Tickets - Big Artist', amount: 185.00, id: 1795104688657, dateCreation: '2026-07-12' },
                { transaction: 'Video Games - Annual', amount: 180.00, id: 1795104688658, dateCreation: '2026-11-25' },
                { transaction: 'Sporting Event Tickets', amount: 150.00, id: 1795104688659, dateCreation: '2026-04-20' },
                { transaction: 'Comedy Club & Escape Room', amount: 100.00, id: 1795104688660, dateCreation: '2026-09-05' }
            ]
        },
        health: {
            type: 'expense',
            total: 2150.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00, id: 1795104688661, dateCreation: '2026-01-01' },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00, id: 1795104688662, dateCreation: '2026-01-15' },
                { transaction: 'Dental & Eye Exams', amount: 175.00, id: 1795104688663, dateCreation: '2026-03-18' },
                { transaction: 'Prescriptions - Monthly Avg', amount: 30.00, id: 1795104688664, dateCreation: '2026-06-10' },
                { transaction: 'Physiotherapy Sessions', amount: 600.00, id: 1795104688665, dateCreation: '2026-10-14' }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 985.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00, id: 1795104688666, dateCreation: '2026-06-30' },
                { transaction: 'Charity Donation - Red Cross', amount: 100.00, id: 1795104688667, dateCreation: '2026-12-10' },
                { transaction: 'Dry Cleaning - Annual', amount: 85.00, id: 1795104688668, dateCreation: '2026-08-22' },
                { transaction: 'Home Repair - Plumber', amount: 125.00, id: 1795104688669, dateCreation: '2026-05-16' },
                { transaction: 'Gift Wrap & Cards', amount: 135.00, id: 1795104688670, dateCreation: '2026-12-20' }
            ]
        }
    },

    last_year: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 58800.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 58800.00, id: 1795104688671, dateCreation: '2025-12-31' }
            ]
        },
        freelance: {
            type: 'income',
            total: 8750.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Build - Client K', amount: 2200.00, id: 1795104688672, dateCreation: '2025-03-10' },
                { transaction: 'E-commerce Setup - Client O', amount: 1800.00, id: 1795104688673, dateCreation: '2025-05-18' },
                { transaction: 'App Prototype - Client S', amount: 1200.00, id: 1795104688674, dateCreation: '2025-07-24' },
                { transaction: 'Landing Page - Client Q', amount: 700.00, id: 1795104688675, dateCreation: '2025-08-30' },
                { transaction: 'WordPress Maintenance - Client N', amount: 600.00, id: 1795104688676, dateCreation: '2025-10-05' },
                { transaction: 'Logo & Branding - Client L', amount: 550.00, id: 1795104688677, dateCreation: '2025-11-19' }
            ]
        },
        investments: {
            type: 'income',
            total: 680.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 680.00, id: 1795104688678, dateCreation: '2025-12-15' }
            ]
        },
        gifts: {
            type: 'income',
            total: 300.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 300.00, id: 1795104688679, dateCreation: '2025-12-25' }
            ]
        },
        other_income: {
            type: 'income',
            total: 800.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 800.00, id: 1795104688680, dateCreation: '2025-04-20' }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 6820.30,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00, id: 1795104688681, dateCreation: '2025-02-12' },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00, id: 1795104688682, dateCreation: '2025-04-08' },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00, id: 1795104688683, dateCreation: '2025-06-15' },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00, id: 1795104688684, dateCreation: '2025-12-23' }
            ]
        },
        transport: {
            type: 'expense',
            total: 3450.00,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 160.00, id: 1795104688685, dateCreation: '2025-01-25' },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 780.00, id: 1795104688686, dateCreation: '2025-03-05' },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1248.00, id: 1795104688687, dateCreation: '2025-12-31' },
                { transaction: 'Car Maintenance - Annual', amount: 450.00, id: 1795104688688, dateCreation: '2025-09-14' }
            ]
        },
        shopping: {
            type: 'expense',
            total: 3850.00,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00, id: 1795104688689, dateCreation: '2025-02-20' },
                { transaction: 'Amazon - Monthly Avg', amount: 95.00, id: 1795104688690, dateCreation: '2025-05-10' },
                { transaction: 'Electronics - Annual', amount: 450.00, id: 1795104688691, dateCreation: '2025-08-16' },
                { transaction: 'Furniture - IKEA', amount: 280.00, id: 1795104688692, dateCreation: '2025-10-28' },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00, id: 1795104688693, dateCreation: '2025-12-19' }
            ]
        },
        education: {
            type: 'expense',
            total: 6050.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'University Tuition - 12 months', amount: 5480.00, id: 1795104688694, dateCreation: '2025-01-12' },
                { transaction: 'Online Courses', amount: 320.00, id: 1795104688695, dateCreation: '2025-06-22' },
                { transaction: 'Textbooks - Annual', amount: 150.00, id: 1795104688696, dateCreation: '2025-08-30' },
                { transaction: 'Exam Registration Fees', amount: 100.00, id: 1795104688697, dateCreation: '2025-11-08' }
            ]
        },
        bills: {
            type: 'expense',
            total: 14200.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00, id: 1795104688698, dateCreation: '2025-01-01' },
                { transaction: 'Electric Bill - Annual', amount: 780.00, id: 1795104688699, dateCreation: '2025-12-04' },
                { transaction: 'Internet - Spectrum (12 months)', amount: 899.88, id: 1795104688700, dateCreation: '2025-12-04' },
                { transaction: 'Water Bill - Annual', amount: 480.00, id: 1795104688701, dateCreation: '2025-12-06' },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 960.12, id: 1795104688702, dateCreation: '2025-12-07' }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1650.00,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Annual)', amount: 371.64, id: 1795104688703, dateCreation: '2025-12-31' },
                { transaction: 'Concert Tickets', amount: 150.00, id: 1795104688704, dateCreation: '2025-06-14' },
                { transaction: 'Video Games - Annual', amount: 180.00, id: 1795104688705, dateCreation: '2025-11-20' },
                { transaction: 'Amusement Park Tickets', amount: 120.00, id: 1795104688706, dateCreation: '2025-07-04' },
                { transaction: 'Sporting Event', amount: 85.00, id: 1795104688707, dateCreation: '2025-09-21' }
            ]
        },
        health: {
            type: 'expense',
            total: 1850.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00, id: 1795104688708, dateCreation: '2025-01-01' },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00, id: 1795104688709, dateCreation: '2025-01-15' },
                { transaction: 'Dental Checkup', amount: 75.00, id: 1795104688710, dateCreation: '2025-05-11' },
                { transaction: 'Eye Exam & Glasses', amount: 250.00, id: 1795104688711, dateCreation: '2025-08-09' },
                { transaction: 'Physiotherapy Sessions', amount: 400.00, id: 1795104688712, dateCreation: '2025-10-16' }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 720.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00, id: 1795104688713, dateCreation: '2025-06-30' },
                { transaction: 'Charity Donations', amount: 100.00, id: 1795104688714, dateCreation: '2025-12-12' },
                { transaction: 'Dry Cleaning', amount: 80.00, id: 1795104688715, dateCreation: '2025-09-03' }
            ]
        }
    }
};

// Categories src 
const Categories_src = {
    // Income
    salary: 'Assests/Icons light/wallet-icon.svg',
    freelance: 'Assests/Icons light/freelance.svg',
    investments: 'Assests/Icons light/investment.svg',
    gifts: 'Assests/Icons light/gift.svg',
    other_income: 'Assests/Icons light/others.svg',

    // Expense
    food: 'Assests/Icons light/food.svg',
    transport: 'Assests/Icons light/transport.svg',
    shopping: 'Assests/Icons light/shopping.svg',
    education: 'Assests/Icons light/education.svg',
    bills: 'Assests/Icons light/electricity-bill.svg',
    entertainment: 'Assests/Icons light/entertainment.svg',
    health: 'Assests/Icons light/health.svg',
    other_expense: 'Assests/Icons light/others.svg',

    // Fallback
    others: 'Assests/Icons light/others.svg'
};
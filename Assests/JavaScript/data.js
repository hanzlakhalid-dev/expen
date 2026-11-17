// Transactions model
const TransactionsData = {
    totals: {
        this_month: {
           income: 555,
           expense: 433,
           balance: 332
        },
        last_year: {
           income: 555,
           expense: 433,
           balance: 332
        },
        last_month: {
           income: 555,
           expense: 433,
           balance: 332
        },
        this_year: {
           income: 555,
           expense: 433,
           balance: 332
        }
    },
    this_month: {
        // ===== INCOME =====
        salary: {
            type: 'income',
            total: 5200.00,
            color: '#22c55e',
            Transactions: [
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 1200.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Redesign - Client A', amount: 1200.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 180.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 180.50 }
            ]
        },
        gifts: {
            type: 'income',
            total: 100.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday Gift from Parents', amount: 100.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 95.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Sold Old Monitor on eBay', amount: 95.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 232.25,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Whole Foods Grocery', amount: 142.75 },
                { transaction: 'Chipotle Lunch', amount: 14.25 },
                { transaction: 'Starbucks Coffee', amount: 6.50 },
                { transaction: 'Pizza Night - Domino\'s', amount: 32.80 },
                { transaction: 'Sushi Dinner - Tokyo Grill', amount: 36.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 165.50,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - Shell', amount: 52.00 },
                { transaction: 'Uber Ride to Airport', amount: 38.50 },
                { transaction: 'Monthly Metro Card', amount: 75.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 279.49,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Nike Running Shoes', amount: 129.99 },
                { transaction: 'Amazon - Household Items', amount: 87.50 },
                { transaction: 'H&M Clothing', amount: 62.00 }
            ]
        },
        education: {
            type: 'expense',
            total: 620.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'Udemy - React Course', amount: 19.99 },
                { transaction: 'Coursera - Data Science Specialization', amount: 49.00 },
                { transaction: 'Textbook - Clean Code', amount: 32.00 },
                { transaction: 'University Tuition - Monthly Installment', amount: 519.01 }
            ]
        },
        bills: {
            type: 'expense',
            total: 1149.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00 },
                { transaction: 'Electric Bill - ConEd', amount: 85.00 },
                { transaction: 'Internet - Spectrum', amount: 79.99 },
                { transaction: 'Phone Bill - Verizon', amount: 35.00 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 58.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99 },
                { transaction: 'Spotify Premium', amount: 10.99 },
                { transaction: 'AMC Movie Tickets', amount: 32.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 120.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'CVS Pharmacy - Prescriptions', amount: 45.00 },
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00 },
                { transaction: 'Dental Checkup Copay', amount: 50.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 74.50,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food - PetSmart', amount: 45.50 },
                { transaction: 'Dry Cleaning', amount: 29.00 }
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
                { transaction: 'Monthly Salary - TechCorp Inc.', amount: 5200.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 950.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Social Media Graphics - Client C', amount: 450.00 },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 195.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payment - Vanguard', amount: 195.00 }
            ]
        },
        gifts: {
            type: 'income',
            total: 50.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Cash Gift from Grandparents', amount: 50.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 150.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Refund from Amazon Return', amount: 150.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 254.70,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Kroger Grocery', amount: 156.25 },
                { transaction: 'Dinner at Italian Bistro', amount: 68.00 },
                { transaction: 'DoorDash - Thai Food', amount: 30.45 }
            ]
        },
        transport: {
            type: 'expense',
            total: 135.75,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas Station - BP', amount: 48.25 },
                { transaction: 'Lyft Ride Downtown', amount: 22.50 },
                { transaction: 'Parking Garage - Weekend', amount: 65.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 245.50,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Zara - Winter Jacket', amount: 189.50 },
                { transaction: 'Amazon - Kitchen Gadgets', amount: 56.00 }
            ]
        },
        education: {
            type: 'expense',
            total: 575.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'Udemy - Node.js Bootcamp', amount: 15.99 },
                { transaction: 'Library Late Fees', amount: 4.00 },
                { transaction: 'University Tuition - Monthly Installment', amount: 519.01 },
                { transaction: 'Notebooks & Stationery', amount: 36.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 1144.99,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - Apartment 4B', amount: 950.00 },
                { transaction: 'Electric Bill - ConEd', amount: 78.00 },
                { transaction: 'Internet - Spectrum', amount: 79.99 },
                { transaction: 'Water Bill - NYC', amount: 37.00 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 91.98,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Netflix Subscription', amount: 15.99 },
                { transaction: 'Spotify Premium', amount: 10.99 },
                { transaction: 'Topgolf with Coworkers', amount: 65.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 93.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - Planet Fitness', amount: 25.00 },
                { transaction: 'CVS - Cold Medicine', amount: 18.00 },
                { transaction: 'Eye Exam Copay', amount: 50.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 85.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Grooming - PetSmart', amount: 55.00 },
                { transaction: 'Car Registration Renewal', amount: 30.00 }
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
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 62400.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 12450.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'E-commerce Site - Client E', amount: 2800.00 },
                { transaction: 'Brand Identity Package - Client F', amount: 1500.00 },
                { transaction: 'App UI Design - Client I', amount: 2200.00 },
                { transaction: 'Monthly Retainer - Client J', amount: 1800.00 },
                { transaction: 'Website Redesign - Client A', amount: 1200.00 },
                { transaction: 'Landing Page - Client G', amount: 800.00 },
                { transaction: 'SEO Audit - Client H', amount: 550.00 },
                { transaction: 'Logo Design - Client B', amount: 650.00 },
                { transaction: 'Social Media Graphics - Client C', amount: 450.00 },
                { transaction: 'WordPress Bug Fix - Client D', amount: 500.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 810.50,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 810.50 }
            ]
        },
        gifts: {
            type: 'income',
            total: 450.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 450.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 1200.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 1200.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 1405.00,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00 },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00 },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00 },
                { transaction: 'Costco Bulk Shopping - Quarterly', amount: 600.00 },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 3890.25,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 180.00 },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 810.00 },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1500.00 },
                { transaction: 'Car Maintenance - Annual', amount: 300.00 },
                { transaction: 'Parking & Tolls', amount: 450.00 },
                { transaction: 'Uber/Lyft - Monthly Avg', amount: 65.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 4250.75,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00 },
                { transaction: 'Amazon - Monthly Avg', amount: 180.00 },
                { transaction: 'Electronics - Annual', amount: 450.00 },
                { transaction: 'Furniture - IKEA', amount: 280.00 },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00 },
                { transaction: 'Samsung - Smart Watch', amount: 299.99 }
            ]
        },
        education: {
            type: 'expense',
            total: 6850.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'University Tuition - 12 months', amount: 6228.00 },
                { transaction: 'Online Courses (Udemy, Coursera)', amount: 350.00 },
                { transaction: 'Textbooks - Annual', amount: 172.00 },
                { transaction: 'Exam Registration Fees', amount: 100.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 14940.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00 },
                { transaction: 'Electric Bill - Annual', amount: 1020.00 },
                { transaction: 'Internet - Spectrum (12 months)', amount: 959.88 },
                { transaction: 'Water Bill - Annual', amount: 540.00 },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 1020.12 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1890.50,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Netflix, Spotify, Hulu)', amount: 403.64 },
                { transaction: 'Concert Tickets - Big Artist', amount: 185.00 },
                { transaction: 'Video Games - Annual', amount: 180.00 },
                { transaction: 'Sporting Event Tickets', amount: 150.00 },
                { transaction: 'Comedy Club & Escape Room', amount: 100.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 2150.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00 },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00 },
                { transaction: 'Dental & Eye Exams', amount: 175.00 },
                { transaction: 'Prescriptions - Monthly Avg', amount: 30.00 },
                { transaction: 'Physiotherapy Sessions', amount: 600.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 985.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00 },
                { transaction: 'Charity Donation - Red Cross', amount: 100.00 },
                { transaction: 'Dry Cleaning - Annual', amount: 85.00 },
                { transaction: 'Home Repair - Plumber', amount: 125.00 },
                { transaction: 'Gift Wrap & Cards', amount: 135.00 }
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
                { transaction: 'Monthly Salary - TechCorp Inc. (12 months)', amount: 58800.00 }
            ]
        },
        freelance: {
            type: 'income',
            total: 8750.00,
            color: '#14b8a6',
            Transactions: [
                { transaction: 'Website Build - Client K', amount: 2200.00 },
                { transaction: 'E-commerce Setup - Client O', amount: 1800.00 },
                { transaction: 'App Prototype - Client S', amount: 1200.00 },
                { transaction: 'Landing Page - Client Q', amount: 700.00 },
                { transaction: 'WordPress Maintenance - Client N', amount: 600.00 },
                { transaction: 'Logo & Branding - Client L', amount: 550.00 }
            ]
        },
        investments: {
            type: 'income',
            total: 680.00,
            color: '#06b6d4',
            Transactions: [
                { transaction: 'Dividend Payments - Vanguard (Annual)', amount: 680.00 }
            ]
        },
        gifts: {
            type: 'income',
            total: 300.00,
            color: '#a855f7',
            Transactions: [
                { transaction: 'Birthday & Holiday Gifts from Family', amount: 300.00 }
            ]
        },
        other_income: {
            type: 'income',
            total: 800.00,
            color: '#0ea5e9',
            Transactions: [
                { transaction: 'Tax Refund - IRS', amount: 800.00 }
            ]
        },

        // ===== EXPENSE =====
        food: {
            type: 'expense',
            total: 6820.30,
            color: '#3b82f6',
            Transactions: [
                { transaction: 'Grocery Shopping - Monthly Avg', amount: 420.00 },
                { transaction: 'Dining Out - Monthly Avg', amount: 120.00 },
                { transaction: 'Coffee Shops - Monthly Avg', amount: 85.00 },
                { transaction: 'Holiday Dinner Groceries', amount: 180.00 }
            ]
        },
        transport: {
            type: 'expense',
            total: 3450.00,
            color: '#10b981',
            Transactions: [
                { transaction: 'Gas - Monthly Avg', amount: 160.00 },
                { transaction: 'Car Insurance - Geico (Annual)', amount: 780.00 },
                { transaction: 'Monthly Metro Card (12 months)', amount: 1248.00 },
                { transaction: 'Car Maintenance - Annual', amount: 450.00 }
            ]
        },
        shopping: {
            type: 'expense',
            total: 3850.00,
            color: '#f59e0b',
            Transactions: [
                { transaction: 'Clothing - Monthly Avg', amount: 85.00 },
                { transaction: 'Amazon - Monthly Avg', amount: 95.00 },
                { transaction: 'Electronics - Annual', amount: 450.00 },
                { transaction: 'Furniture - IKEA', amount: 280.00 },
                { transaction: 'Holiday Gifts - Shopping', amount: 300.00 }
            ]
        },
        education: {
            type: 'expense',
            total: 6050.00,
            color: '#f97316',
            Transactions: [
                { transaction: 'University Tuition - 12 months', amount: 5480.00 },
                { transaction: 'Online Courses', amount: 320.00 },
                { transaction: 'Textbooks - Annual', amount: 150.00 },
                { transaction: 'Exam Registration Fees', amount: 100.00 }
            ]
        },
        bills: {
            type: 'expense',
            total: 14200.00,
            color: '#ef4444',
            Transactions: [
                { transaction: 'Rent Payment - 12 months', amount: 11400.00 },
                { transaction: 'Electric Bill - Annual', amount: 780.00 },
                { transaction: 'Internet - Spectrum (12 months)', amount: 899.88 },
                { transaction: 'Water Bill - Annual', amount: 480.00 },
                { transaction: 'Phone Bill - Verizon (12 months)', amount: 960.12 }
            ]
        },
        entertainment: {
            type: 'expense',
            total: 1650.00,
            color: '#8b5cf6',
            Transactions: [
                { transaction: 'Streaming Services (Annual)', amount: 371.64 },
                { transaction: 'Concert Tickets', amount: 150.00 },
                { transaction: 'Video Games - Annual', amount: 180.00 },
                { transaction: 'Amusement Park Tickets', amount: 120.00 },
                { transaction: 'Sporting Event', amount: 85.00 }
            ]
        },
        health: {
            type: 'expense',
            total: 1850.00,
            color: '#ec4899',
            Transactions: [
                { transaction: 'Gym Membership - 12 months', amount: 300.00 },
                { transaction: 'Health Insurance Premium (Monthly)', amount: 150.00 },
                { transaction: 'Dental Checkup', amount: 75.00 },
                { transaction: 'Eye Exam & Glasses', amount: 250.00 },
                { transaction: 'Physiotherapy Sessions', amount: 400.00 }
            ]
        },
        other_expense: {
            type: 'expense',
            total: 720.00,
            color: '#64748b',
            Transactions: [
                { transaction: 'Pet Food & Supplies - Monthly', amount: 540.00 },
                { transaction: 'Charity Donations', amount: 100.00 },
                { transaction: 'Dry Cleaning', amount: 80.00 }
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
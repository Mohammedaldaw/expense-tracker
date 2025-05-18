const moment = require('moment');
const Record = require('../models/record');

class BudgetService {
  constructor(userId, budgetLimit) {
    this.userId = userId;
    this.budgetLimit = budgetLimit;
  }

  /**
   * Calculates monthly expenses and checks against budget
   * @returns {Object} { warning: 'near'|'exceeded'|null, totalExpenses: number }
   */
  async checkBudget() {
    const startOfMonth = moment().startOf('month').toDate();
    const endOfMonth = moment().endOf('month').toDate();

    const result = await Record.aggregate([
      {
        $match: {
          userId: this.userId,
          type: "expense",
          date: { $gte: startOfMonth, $lte: endOfMonth }
        }
      },
      {
        $group: {
          _id: null,
          totalExpenses: { $sum: "$amount" }
        }
      }
    ]);

    const totalExpenses = Math.abs(result[0]?.totalExpenses || 0);
    let warning = null;

    if (totalExpenses >= this.budgetLimit) {
      warning = 'exceeded';
    } else if (totalExpenses >= 0.8 * this.budgetLimit) {
      warning = 'near';
    }

    return { warning, totalExpenses };
  }
}

module.exports = BudgetService;
// Rules: 


// Avoid unclear abbreviations
 let ymdt = '20210121cte';

 let dateWithTimeZone = '20210121cte';

// Avoid disinformation
 let allAccounts = accounts.filter((account) => account.status === 'active');

 let activeAccounts = accounts.filter((account) => account.status === 'active');


 // Don’t create methods that sound and look similar, that are also used in the same place
analytics.getDailyData(day)
analytics.getDayData()

analytics.getDailyReport(day)
analytics.getDataForToday()


// Be consistent when naming things across the project
getUsers();
fetchUsers();
retrieveUsers();


// Avoid using slang only the team understands
// no specific example


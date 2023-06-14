const salesData = [
    { department: 'Clothing', day: 'Monday', sales: 100 },
    { department: 'Clothing', day: 'Tuesday', sales: 200 },
    { department: 'Clothing', day: 'Wednesday', sales: 150 },
    { department: 'Electronics', day: 'Monday', sales: 50 },
    { department: 'Electronics', day: 'Tuesday', sales: 300 },
    { department: 'Electronics', day: 'Wednesday', sales: 75 },
  ];
  
  // Function to determine the most profitable department
  function mostProfitableDepartment(salesData) {
    const departmentSales = {};
  
    // Loop through the sales data and add up the sales for each department
    for (let i = 0; i < salesData.length; i++) {
      const department = salesData[i].department;
      const sales = salesData[i].sales;
  
   if (department in departmentSales) {
        departmentSales[department] += sales;
      } else {
        departmentSales[department] = sales;
      }
    }
  
    // Find the department with the highest sales
    let mostProfitable = null;
    let highestSales = 0;
  
    for (const department in departmentSales) {
      if (departmentSales[department] > highestSales) {
        mostProfitable = department;
        highestSales = departmentSales[department];
      }
    }
  
    return mostProfitable;
  }
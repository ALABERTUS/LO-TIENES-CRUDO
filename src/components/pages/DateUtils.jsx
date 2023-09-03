export function formatDate(inputDateStr) {
    const inputDate = new Date(inputDateStr);
  
    // Get the current date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Get tomorrow's date
  
    // Define a mapping of month names
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // Format the time
    const hours = inputDate.getHours().toString().padStart(2, '0');
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');
  
    // Check if the date is today, tomorrow ,or another date
    if (inputDate.toDateString() === today.toDateString()) {
      return (
        <div>
          {hours}:{minutes}<br />
          Today<br />
          {inputDate.getDate()} {monthNames[inputDate.getMonth()]} {inputDate.getFullYear()}
        </div>
      );
    } else if (inputDate.toDateString() === tomorrow.toDateString()) {
      return (
        <div>
          {hours}:{minutes}<br />
          Tomorrow<br />
          {inputDate.getDate()} {monthNames[inputDate.getMonth()]} {inputDate.getFullYear()}
        </div>
      );
    } else {
      return (
        <div>
          {hours}:{minutes}<br />
          {monthNames[inputDate.getMonth()]} {inputDate.getDate()}, {inputDate.getFullYear()}
        </div>
      );
    }
  }
  
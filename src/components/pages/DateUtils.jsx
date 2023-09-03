export function formatDate(inputDateStr) {
    const inputDate = new Date(inputDateStr);
  
    // 获取当前日期
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // 获取明天的日期
  
    // 定义月份名称映射
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // 格式化时间
    const hours = inputDate.getHours().toString().padStart(2, '0');
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');
  
    // 判断日期是否是今天、明天或其他日期
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
  
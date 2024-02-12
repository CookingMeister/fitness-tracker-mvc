// Todays Date
function formatDate() {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${month} ${day}, ${year}`;
  }
  
  const formattedDate = formatDate();
  document.getElementById("date").innerHTML = formattedDate;
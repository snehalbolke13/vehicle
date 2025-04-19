function bookNow(vehicleName) {
  const userName = prompt("Enter your name to book " + vehicleName + ":");
  if (userName) {
    alert(`Thank you, ${userName}! Your booking for ${vehicleName} is confirmed.`);
  } else {
    alert("Booking cancelled.");
  }
}

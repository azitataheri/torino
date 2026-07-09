// Format date
const formatDate = (date) => {
    return new
    Date(date).toLocaleDateString("fa-IR", {
        month: "long",
    })
}

// Format cities
const formatCities = (city) => {
    const cities = {
        Tehran: 'تهران',
        Sananndaj: 'سنندج',
        Madrid: 'مادرید',
        Isfahan: 'اصفهان',
        Sulaymaniyah: 'سلیمانیه',
        Hewler: 'هولر',
        Mazandaran: 'مازنداران',
        Gilan: 'گیلان',
        Italy: 'ایتالیا'
            }
    return cities[city] || city
}
// Format vehicle
const formatVehicle = (vehicle) => {
    const vehicles = {
        bus: "اتوبوس",
        ship: "کشتی",
        airplane: "پرواز",
        train: "قطار",
        SUV: "خودرو"
    }
    return vehicles[vehicle] || vehicle
}


// calculation
const calculateDuration = (date1, date2) => {
    const start = new Date(date1)
    const end = new Date(date2)

    const diffTime = end - start
    const diffDays = diffTime / (1000 * 60 * 60 * 24)

    return diffDays
}

// Format hotel stars
const formatHotel = (options) => {
    const hotel = options ? .find((item) => item.includes("هتل") || item.includes("هفل"));

    if (!hotel) return null;

    const stars = hotel.match(/\d + /);
    if (hotel.includes("پنج")) return "5 س...";
    if (hotel.includes("چهار")) return "4 س...";
    if (hotel.includes("سه")) return "3 س...";
    if (hotel.includes("دو")) return "2 س...";
    if (hotel.includes("یک")) return "1 س...";
    return null
}


// Price formatter
const formatPrice = (price) => {
    return (price * 1000).toLocaleString("fa-IR") 
}

export {
    formatDate,
    formatVehicle,
    formatHotel,
    formatPrice,
    formatCities,
    calculateDuration
}
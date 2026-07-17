// Format date
const formatDate = (date) => {
    return new
    Date(date).toLocaleDateString("fa-IR", {
        month: "long",
    })
}

// Format complete date
const formatCompleteDate = (date) => {
    return new
    Date(date).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: 'numeric',
    })
}

// Format count of day and night
const formatDuration = (startDate, endDate) => {
    const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    return `${days} روز و ${days -1 }شب `
}

// Format cities
const formatCities = (city) => {
    const cities = {
        Tehran: 'تهران',
        Sananndaj: 'کردستان',
        Madrid: 'مادرید',
        Isfahan: 'اصفهان',
        Sulaymaniyah: 'سلیمانیه',
        Hewler: 'هولر',
        Mazandaran: 'مازنداران',
        Gilan: 'آفرود',
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
    const hotel = options ?.find((item) => item.includes("هتل") || item.includes("هفل"));

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



// Status of user tours
const formatToursStatus = (startDate, endDate) => {
    const now = new Date();

    if (now < new Date(startDate)) {
        return {
            text: 'در انتظار شروع',
            className: 'bg-complementry text-sky-600 rounded-xl text-xs px-4 pt-1'
        }
    }

    if (now > new Date(endDate)) {
        return {
            text: 'به اتمام رسیده',
            className: 'bg-primary-300 text-primary rounded-xl text-xs px-4 pt-1'
        }
    }


    return {
        text: 'در حال برگزاری',
        className: 'bg-yellow-100 text-yellow-600 rounded-xl text-xs px-4 pt-1'
    }
}


//Format transactions date
 const formatTransactionDate = (date) => {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .format(new Date(date))
    .replace(",", " -");
};


export {
    formatDate,
    formatCompleteDate,
    formatDuration,
    formatVehicle,
    formatHotel,
    formatPrice,
    formatCities,
    calculateDuration,
    formatToursStatus,
    formatTransactionDate
}
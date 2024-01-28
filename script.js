document.addEventListener('DOMContentLoaded', function() {
    const names = [
        "Ani Sari", "Budi Pratama", "Citra Aulia", "Dewa Rizky", "Eka Wijaya",
        "Feri Agung", "Gita Putri", "Hadi Santoso", "Ina Mawar", "Joko Adi",
        "Karin Pratiwi", "Lukman Hidayat", "Maya Safitri", "Nanda Angga", "Oscar Wijaya",
        "Putri Anggun", "Qori Rizal", "Roni Budi", "Sinta Putri", "Tono Saputra",
        "Umi Khadijah", "Vino Alif", "Wati Dewi", "Xavier Yudhistira", "Yuni Susanti",
        "Zainal Pratama", "Ardi Yudanto", "Bella Nurul", "Cahyo Wibowo", "Dini Ayu",
        "Eko Santoso", "Fani Rahayu", "Guntur Santika", "Hesti Dewi", "Iwan Raharjo",
        "Jenny Mulia", "Koko Budiman", "Lala Aulia", "Mila Haryanti", "Nando Agus",
        "Olive Sari", "Pandu Wibisono", "Qonita Azizah", "Rifan Surya", "Sari Purnama",
        "Tono Raharjo", "Uci Yuliani"
    ];

    // Generate additional 1000 names for Indonesia and Malaysia
    for (let i = 0; i < 1000; i++) {
        const randomNameIndonesia = getRandomName("Indonesia");
        const randomNameMalaysia = getRandomName("Malaysia");

        names.push(randomNameIndonesia, randomNameMalaysia);
    }

    function getRandomName(nationality) {
        const prefixes = nationality === "Indonesia" ? ["Wid", "Tri", "Putr", "Luh", "Bayu"] : ["Mohd", "Ahmad", "Abd", "Muhammad", "Lim"];
        const middleNames = ["Sari", "Pratama", "Aulia", "Rizky", "Wijaya"];
        const lastNamesIndonesia = ["Santoso", "Mawar", "Adi", "Pratiwi", "Hidayat"];
        const lastNamesMalaysia = ["Ali", "Hassan", "Rahman", "Tan", "Lim"];

        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomMiddleName = middleNames[Math.floor(Math.random() * middleNames.length)];
        const randomLastName = nationality === "Indonesia" ? lastNamesIndonesia[Math.floor(Math.random() * lastNamesIndonesia.length)] : lastNamesMalaysia[Math.floor(Math.random() * lastNamesMalaysia.length)];

        return randomPrefix + " " + randomMiddleName + " " + randomLastName;
    }

    function sensorizeName(name) {
        const parts = name.split(' ');
        const firstName = parts[0][0] + '*'.repeat(parts[0].length - 1);
        const middleName = parts[1][0] + '*'.repeat(parts[1].length - 1);
        const lastName = parts[2][0] + '*'.repeat(parts[2].length - 1);
        return `${firstName} ${middleName} ${lastName}`;
    }

    function updateRegistrants() {
        const registrantName = getRandomName(getRandomNationality()); // Pilih acak antara Indonesia dan Malaysia
        const sensorizedName = sensorizeName(registrantName);
        const registrantsCountElement = document.getElementById('registrantsCount');

        const country = registrantName.includes("Mohd") ? "Malaysia" : "Indonesia";

        registrantsCountElement.innerText = `Pendaftar saat ini: ${sensorizedName} | Negara: ${country}`;
        registrantsCountElement.classList.remove('show');

        requestAnimationFrame(function() {
            registrantsCountElement.classList.add('show');
        });

        localStorage.setItem('registrantName', registrantName);
    }

    function getRandomNationality() {
        return Math.random() < 0.5 ? "Indonesia" : "Malaysia"; // Menghasilkan Indonesia atau Malaysia secara acak
    }

    setInterval(updateRegistrants, 1000);

    updateRegistrants();
});
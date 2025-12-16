import { faker } from '@faker-js/faker';

/**
 * Centralized Faker helper for generating common Nepali test data
 * This file generates only common, reusable fields used across multiple test files
 * Form-specific fields should remain in their respective data files
 */

// Nepali first names
const nepaliFirstNames = {
    male: [
        'राम', 'श्याम', 'हरि', 'कृष्ण', 'गोपाल', 'राजेश', 'सुरेश', 'दिनेश',
        'विष्णु', 'शिव', 'गणेश', 'लक्ष्मण', 'भरत', 'अर्जुन', 'युधिष्ठिर',
        'नारायण', 'महेश', 'रमेश', 'उमेश', 'प्रकाश', 'विकास', 'आशिष',
        'मनोज', 'संजय', 'विजय', 'अजय', 'दीपक', 'अनिल', 'सुनिल', 'कमल'
    ],
    female: [
        'सीता', 'गीता', 'रीता', 'अनिता', 'सुनिता', 'मीना', 'रेखा', 'पूजा',
        'राधा', 'लक्ष्मी', 'सरस्वती', 'दुर्गा', 'काली', 'पार्वती', 'गौरी',
        'कविता', 'ममता', 'सविता', 'संगीता', 'निर्मला', 'कमला', 'शान्ति',
        'माया', 'दीपा', 'सुमन', 'सुस्मिता', 'प्रतिभा', 'रञ्जना', 'सुधा', 'उषा'
    ]
};

// Nepali middle names (optional)
const nepaliMiddleNames = [
    'बहादुर', 'प्रसाद', 'कुमार', 'देवी', 'माया', 'लाल', 'सिंह', ''
];

// Nepali last names (surnames)
const nepaliLastNames = [
    'थापा', 'श्रेष्ठ', 'गुरुङ', 'तामाङ', 'राई', 'लिम्बु', 'मगर', 'शाक्य',
    'पौडेल', 'अधिकारी', 'खत्री', 'बस्नेत', 'पन्त', 'भट्टराई', 'सुब्बा',
    'कार्की', 'गिरी', 'पाण्डे', 'रेग्मी', 'ढकाल', 'सापकोटा', 'न्यौपाने',
    'खनाल', 'लामा', 'शेर्पा', 'भुजेल', 'दाहाल', 'पोखरेल', 'रिजाल', 'केसी'
];

// English equivalents of Nepali middle names
const englishMiddleNames = [
    'Bahadur', 'Prasad', 'Kumar', 'Devi', 'Maya', 'Lal', 'Singh', ''
];

// English equivalents of Nepali last names
const englishLastNames = [
    'Thapa', 'Shrestha', 'Gurung', 'Tamang', 'Rai', 'Limbu', 'Magar', 'Shakya',
    'Poudel', 'Adhikari', 'Khatri', 'Basnet', 'Pant', 'Bhattarai', 'Subba',
    'Karki', 'Giri', 'Pande', 'Regmi', 'Dhakal', 'Sapkota', 'Neupane',
    'Khanal', 'Lama', 'Sherpa', 'Bhujel', 'Dahal', 'Pokharel', 'Rijal', 'KC'
];

// Nepali villages/localities (tole)
const nepaliVillages = [
    'बौद्ध', 'स्वयम्भू', 'पशुपति', 'बुढानिलकण्ठ', 'गोकर्णेश्वर', 'चन्द्रागिरी',
    'टोखा', 'कीर्तिपुर', 'महाराजगञ्ज', 'कालिमाटी', 'बालाजु', 'नयाँबजार',
    'धोबीघाट', 'लाजिम्पाट', 'पुतलीसडक', 'कोटेश्वर', 'जोरपाटी', 'बानेश्वर',
    'धापासी', 'चाबहिल', 'गौशाला', 'मैतीदेवी', 'नक्साल', 'लैनचौर', 'ठमेल',
    'ज्ञानेश्वर', 'न्यू रोड', 'धनकुटा बजार'
];

// English villages/localities (tole)
const englishVillages = [
    'Bouddha', 'Swayambhu', 'Pashupatinath', 'Budhanilkantha', 'Gokarneshwor', 'Chandragiri',
    'Tokha', 'Kirtipur', 'Maharajgunj', 'Kalimati', 'Balaju', 'Naya Bazar',
    'Dhobi Ghat', 'Lazimpat', 'Putalisadak', 'Koteshwor', 'Jorpati', 'Baneshwor',
    'Dhapasi', 'Chabahil', 'Gaushala', 'Maitidevi', 'Naxal', 'Lainchaur', 'Thamel',
    'Gyaneshwor', 'New Road', 'Dhankuta Bazar'
];

/**
 * Convert English digits to Nepali digits
 */
const toNepaliDigits = (num) => {
    const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return String(num).split('').map(digit => {
        return /\d/.test(digit) ? nepaliDigits[parseInt(digit)] : digit;
    }).join('');
};

/**
 * Generate random Nepali citizenship number
 * Format: XX-XX-XX-XXXXX (in Nepali digits)
 */
const generateCitizenshipNo = () => {
    const district = faker.number.int({ min: 10, max: 77 });
    const year = faker.number.int({ min: 50, max: 80 });
    const serial = faker.number.int({ min: 10000, max: 99999 });
    const citizenship = `${district}-01-${year}-${serial}`;
    return toNepaliDigits(citizenship);
};

/**
 * Generate random Nepali mobile number
 */
const generateMobileNo = () => {
    const prefix = faker.helpers.arrayElement(['984', '985', '986', '974', '975', '980', '981', '982']);
    const suffix = faker.number.int({ min: 1000000, max: 9999999 });
    return `${prefix}${suffix}`;
};

/**
 * Generate random Nepali national ID
 */
const generateNationalId = () => {
    const id = faker.number.int({ min: 1000000000, max: 9999999999 });
    return toNepaliDigits(id);
};

/**
 * Generate random Nepali email
 */
const generateEmail = (firstName, lastName) => {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
    const domain = faker.helpers.arrayElement(domains);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
};

/**
 * Generate random Nepali text
 */
const generateNepaliText = (words = 5) => {
    const nepaliWords = [
        'नेपाल', 'सरकार', 'नागरिक', 'सेवा', 'आवेदन', 'फारम', 'विवरण',
        'ठेगाना', 'जिल्ला', 'प्रदेश', 'नगरपालिका', 'वडा', 'गाउँ',
        'नाम', 'थर', 'उमेर', 'लिङ्ग', 'सम्पर्क', 'फोन', 'इमेल'
    ];
    return faker.helpers.arrayElements(nepaliWords, words).join(' ');
};

/**
 * Centralized Nepali Faker - generates only common, reusable fields
 */
export const fakerNepali = {
    /**
     * Generate random Nepali person names
     */
    person: {
        // Nepali names
        firstName: (gender = null) => {
            if (gender === 'MALE' || gender === 'male' || gender === 'पुरुष') {
                return faker.helpers.arrayElement(nepaliFirstNames.male);
            } else if (gender === 'FEMALE' || gender === 'female' || gender === 'महिला') {
                return faker.helpers.arrayElement(nepaliFirstNames.female);
            }
            const allNames = [...nepaliFirstNames.male, ...nepaliFirstNames.female];
            return faker.helpers.arrayElement(allNames);
        },

        middleName: () => faker.helpers.arrayElement(nepaliMiddleNames),

        lastName: () => faker.helpers.arrayElement(nepaliLastNames),

        fullName: (gender = null) => {
            const first = fakerNepali.person.firstName(gender);
            const middle = fakerNepali.person.middleName();
            const last = fakerNepali.person.lastName();
            return middle ? `${first} ${middle} ${last}` : `${first} ${last}`;
        },

        // English names
        firstNameEn: (gender = null) => {
            return faker.person.firstName(
                gender === 'MALE' || gender === 'पुरुष' ? 'male' :
                    gender === 'FEMALE' || gender === 'महिला' ? 'female' :
                        undefined
            );
        },

        middleNameEn: () => faker.helpers.arrayElement(englishMiddleNames),

        lastNameEn: () => faker.helpers.arrayElement(englishLastNames),

        fullNameEn: (gender = null) => {
            const first = fakerNepali.person.firstNameEn(gender);
            const middle = fakerNepali.person.middleNameEn();
            const last = fakerNepali.person.lastNameEn();
            return middle ? `${first} ${middle} ${last}` : `${first} ${last}`;
        }
    },

    /**
     * Generate location data
     */
    location: {
        village: () => faker.helpers.arrayElement(nepaliVillages),
        villageEn: () => faker.helpers.arrayElement(englishVillages),
        ward: () => String(faker.number.int({ min: 1, max: 32 }))
    },

    /**
     * Generate contact information
     */
    contact: {
        email: (firstNameEn, lastNameEn) => {
            if (firstNameEn && lastNameEn) {
                return generateEmail(firstNameEn, lastNameEn);
            }
            return faker.internet.email();
        },

        mobileNo: generateMobileNo,

        citizenshipNo: generateCitizenshipNo,

        nationalId: generateNationalId,

        // English versions (without Nepali digits)
        nationalIdEn: () => String(faker.number.int({ min: 1000000000, max: 9999999999 }))
    },

    /**
     * Utility functions
     */
    utils: {
        toNepaliDigits,
        nepaliText: generateNepaliText
    }
};

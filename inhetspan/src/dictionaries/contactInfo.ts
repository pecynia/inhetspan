interface Location {
    street: string;
    number: string;
    city: string;
    zip: string;
}

interface ContactInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    kvk: string;
}

interface SocialMedia {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
}

export const location: Location = {
    street: "van Maerlantstraat",
    number: "1-5",
    city: "Arnhem",
    zip: "6824 KX",
}

export const contactInfo: ContactInfo = {
    name: "Voor beheerszaken",
    address: `${location.street} ${location.number}, ${location.zip} ${location.city}`,
    email: "hetspan@kpnmail.nl",
    phone: "+31655744256",
    kvk: "09068285",
}

export const socialMedia: SocialMedia = {

}
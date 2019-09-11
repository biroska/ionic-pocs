export interface RegistrationData {

    id?: string,
    personalData: PersonalData,
    address: AddressData
}

interface AddressData {
    id?: string;
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
}

interface PersonalData {
    id?: string;
    cpf: string;
    name: string;
    dob: string;
    telephoneNumber: string;
    email: string;
}

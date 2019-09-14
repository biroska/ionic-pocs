export class RegistrationData {

    private id?: string;
    private personalData: PersonalData;
    private address: AddressData;

    RegistrationData(){
        this.address = new AddressData();
        this.personalData = new PersonalData();
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getPersonalData(): PersonalData {
        return this.personalData;
    }

    setPersonalData(value: PersonalData) {
        this.personalData = value;
    }

    getAddress(): AddressData {
        return this.address;
    }

    setAddress(value: AddressData) {
        this.address = value;
    }
}

export class AddressData {
    private id?: string;
    private cep: string;
    private street: string;
    private number: string;
    private district: string;
    private city: string;
    private state: string;

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getCep(): string {
        return this.cep;
    }

    setCep(value: string) {
        this.cep = value;
    }

    getStreet(): string {
        return this.street;
    }

    setStreet(value: string) {
        this.street = value;
    }

    getNumber(): string {
        return this.number;
    }

    setNumber(value: string) {
        this.number = value;
    }

    getDistrict(): string {
        return this.district;
    }

    setDistrict(value: string) {
        this.district = value;
    }

    getCity(): string {
        return this.city;
    }

    setCity(value: string) {
        this.city = value;
    }

    getState(): string {
        return this.state;
    }

    setState(value: string) {
        this.state = value;
    }
}

export class PersonalData {
    private id?: string;
    private cpf: string;
    private name: string;
    private dob: string;
    private telephoneNumber: string;
    private email: string;

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(value: string) {
        this.cpf = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getDob(): string {
        return this.dob;
    }

    setDob(value: string) {
        this.dob = value;
    }

    getTelephoneNumber(): string {
        return this.telephoneNumber;
    }

    setTelephoneNumber(value: string) {
        this.telephoneNumber = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }
}

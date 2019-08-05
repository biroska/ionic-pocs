export class CpfServiceResponse {

    private _cpf: string;
    private _nome: string;
    private _dtNascimento: string;
    private _telefone: string;
    private _email: string;

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get dtNascimento(): string {
        return this._dtNascimento;
    }

    set dtNascimento(value: string) {
        this._dtNascimento = value;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(value: string) {
        this._telefone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    constructor(cpf: string, nome: string, dtNascimento: string, telefone: string, email: string) {
        this._cpf = cpf;
        this._nome = nome;
        this._dtNascimento = dtNascimento;
        this._telefone = telefone;
        this._email = email;
    }
}
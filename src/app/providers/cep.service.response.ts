export class CepServiceResponse {

    private _bairro: string;
    private _cep: string;
    private _cidade: string;
    private _endereco: string;
    private _ibge: number;
    private _uf: string;

    get bairro(): string {
        return this._bairro;
    }

    set bairro(value: string) {
        this._bairro = value;
    }

    get cep(): string {
        return this._cep;
    }

    set cep(value: string) {
        this._cep = value;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    get endereco(): string {
        return this._endereco;
    }

    set endereco(value: string) {
        this._endereco = value;
    }

    get ibge(): number {
        return this._ibge;
    }

    set ibge(value: number) {
        this._ibge = value;
    }

    get uf(): string {
        return this._uf;
    }

    set uf(value: string) {
        this._uf = value;
    }

    constructor( cep: string, endereco: string, bairro: string, cidade: string, uf: string, ibge: number) {
        this._bairro = bairro;
        this._cep = cep;
        this._cidade = cidade;
        this._endereco = endereco;
        this._ibge = ibge;
        this._uf = uf;
    }

}
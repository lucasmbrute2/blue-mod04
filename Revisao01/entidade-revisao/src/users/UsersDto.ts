import { IsString, IsNotEmpty } from "class-validator";


export class UsersDto {
    @IsString({ message: "O texto da mensagem deve ser uma string" })
    @IsNotEmpty({ message: "O texto não pode estar vazio" })
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: string
}
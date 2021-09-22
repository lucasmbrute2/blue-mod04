import { Injectable } from '@nestjs/common';
import { Users } from "./Users"
import { UsersDto } from './UsersDto';

@Injectable()
export class UsersService {
    private eachUser: Users[] = [
        {
            id: 1,
            nome: "Lucas",
            sobrenome: "Victor",
            email: "lucasmbrute614@gmail.com",
            senha: "1234",
            cpf: "2313131"
        },
        {
            id: 2,
            nome: "Lucas",
            sobrenome: "Souza",
            email: "lucasmbrute614@hotmail.com",
            senha: "4321",
            cpf: "2313131"
        }
    ]

    findAll() {
        return this.eachUser.filter(Boolean)
    }
    async findId(id: number) {
        const user = this.eachUser.find(usuario => usuario.id === id)
        if (!user) {
            throw Error(`Usuário com o ID ${id} não foi encontrada.`)
        }
        return user
    }
    create(UsersDto: UsersDto) {
        const id = this.eachUser.length + 1;
        const user: Users = {
            id,
            ...UsersDto,
        }
        this.eachUser.push(user)
        return user
    }

    update(id: number, usersDto: UsersDto) {
        const index = this.eachUser.findIndex(usuario => usuario.id === id)
        const user: Users = {
            id,
            ...usersDto,
        }
        this.eachUser[index] = user
        return user;
    }
    delete(id: number) {
        const index = this.eachUser.findIndex(usuario => usuario.id === id)
        delete this.eachUser[index]
        return true
    }

}


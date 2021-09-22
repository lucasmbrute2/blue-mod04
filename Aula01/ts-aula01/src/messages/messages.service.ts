import { Injectable } from '@nestjs/common';
import { measureMemory } from 'vm';
import { MessageInterface } from './message';
import { MessageDto } from './MessageDto';


@Injectable()
export class MessagesService {
    private messages: MessageInterface[] = [

        {
            id: 1,
            texto: "Primeira mensagem"
        },
        {
            id: 2,
            texto: "Segunda mensagem"
        }
    ]

    findAll() {
        return this.messages.filter(Boolean);
    }

    async findById(id: number) {
        const message = this.messages.find(message => message.id === id);
        if (!message) {
            throw Error(`Mensagem com id ${id} não foi encontrada.`)
        }
        return message
    }

    create(messageDto: MessageDto) {
        const id = this.messages.length + 1;
        const message: MessageInterface = {
            id,
            ...messageDto,
        }
        this.messages.push(message)
        return message
    }

    update(id: number, MessageDto: MessageDto) {
        const index = this.messages.findIndex(msg => msg.id === id)
        const message: MessageInterface = {
            id,
            ...MessageDto,
        }
        this.messages[index] = message
        return message
    }
    delete(id: number) {
        const index = this.messages.findIndex(msg => msg.id === id)
        delete this.messages[index]
    }
}
//teste

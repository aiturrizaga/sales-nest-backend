import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cliente } from "../entities/cliente.entity";

@Injectable()
export class ClienteService {

  constructor(@InjectRepository(Cliente) private clienteRepository: Repository<Cliente>) {
  }

  register(cliente: Cliente) {
    return this.clienteRepository.save(cliente);
  }

  update(cliente: Cliente) {
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find({
      relations: {
        ubigeo: true
      }
    });
  }

  delete(id: string) {
    return this.clienteRepository.delete(id);
  }

  findById(id: string) {
    return this.clienteRepository.find({
      where: {id},
      relations: {
        ubigeo: true
      }
    });
  }

}

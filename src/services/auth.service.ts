import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Vendedor } from "../entities/vendedor.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {

  constructor(@InjectRepository(Vendedor) private vendedorRepository: Repository<Vendedor>) {
  }

  findByUser(user: string, password: string) {
    return this.vendedorRepository.find({
      where: {
        user: user,
        password: password
      }
    })
  }

}

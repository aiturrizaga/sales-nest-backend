import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ubigeo } from "../entities/ubigeo.entity";
import { Repository } from "typeorm";

@Injectable()
export class UbigeoService {

  constructor(@InjectRepository(Ubigeo) private ubigeoRepository: Repository<Ubigeo>) {
  }

  register(ubigeo: Ubigeo) {
    return this.ubigeoRepository.save(ubigeo);
  }

  update(ubigeo: Ubigeo) {
    return this.ubigeoRepository.save(ubigeo)
  }

  findAll() {
    return this.ubigeoRepository.find();
  }

  delete(id: string) {
    return this.ubigeoRepository.delete(id);
  }

  findById(id: string) {
    return this.ubigeoRepository.findBy({id})
  }

}

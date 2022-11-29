import { Injectable } from "@nestjs/common";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Vendedor } from "../entities/vendedor.entity";

@Injectable()
export class VendedorService {

  constructor(@InjectRepository(Vendedor) private vendedorRepository: Repository<Vendedor>,
              @InjectDataSource() private dataSource: DataSource) {
  }

  register(vendedor: Vendedor) {
    return this.vendedorRepository.save(vendedor);
  }

  update(vendedor: Vendedor) {
    return this.vendedorRepository.save(vendedor);
  }

  findAll() {
    return this.vendedorRepository.find({
      where: {
        estado: "A"
      },
      relations: {
        ubigeo: true
      }
    });
  }

  delete(id: string) {
    return this.vendedorRepository.delete(id);
  }

  findById(id: string) {
    return this.vendedorRepository.find({
      where: {
        id
      },
      relations: {
        ubigeo: true
      }
    });
  }

  deleteLogical(id: string) {
    this.findById(id).then(res => {
      const vendedor = res[0];
      vendedor.estado = "I";
      this.vendedorRepository.save(vendedor);
    });
  }

  async executeQuery() {
    return this.dataSource.query(`SELECT count(1) FROM VENDEDOR`);
  }

  finByName(nombre: string) {
    return this.vendedorRepository.findBy({nombre});
  }

}

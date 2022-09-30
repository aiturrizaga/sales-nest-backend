import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UbigeoService } from "../services/ubigeo.service";
import { Ubigeo } from "../entities/ubigeo.entity";

@Controller("ubigeos")
export class UbigeoController {

  constructor(private ubigeoService: UbigeoService) {
  }

  @Post()
  async register(@Body() ubigeo: Ubigeo): Promise<Ubigeo> {
    return this.ubigeoService.register(ubigeo);
  }

  @Put()
  async update(@Body() ubigeo: Ubigeo): Promise<Ubigeo> {
    return this.ubigeoService.update(ubigeo);
  }

  @Get()
  async findAll(): Promise<Ubigeo[]> {
    return this.ubigeoService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Ubigeo[]> {
    return this.ubigeoService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.ubigeoService.delete(id);
  }

}

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { VendedorService } from "../services/vendedor.service";
import { Vendedor } from "../entities/vendedor.entity";

@Controller("vendedores")
export class VendedorController {

  constructor(private vendedorService: VendedorService) {
  }

  @Post()
  async register(@Body() vendedor: Vendedor): Promise<Vendedor> {
    return this.vendedorService.register(vendedor);
  }

  @Put()
  async update(@Body() vendedor: Vendedor): Promise<Vendedor> {
    return this.vendedorService.update(vendedor);
  }

  @Delete("/delete/:id")
  async delete(@Param("id") id: string) {
    this.vendedorService.deleteLogical(id);
  }

  @Get()
  async findAll(): Promise<Vendedor[]> {
    return this.vendedorService.findAll();
  }

  @Get("/query")
  async findQuery() {
    return this.vendedorService.executeQuery();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Vendedor[]> {
    return this.vendedorService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.vendedorService.delete(id);
  }

  @Get("/nombre/:name")
  findByName(@Param("name") name: string) {
    return this.vendedorService.finByName(name);
  }

}

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClienteService } from "../services/cliente.service";
import { Cliente } from "../entities/cliente.entity";

@Controller("clientes")
export class ClienteController {

  constructor(private clienteService: ClienteService) {
  }

  @Post()
  async register(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.register(cliente);
  }

  @Put()
  async update(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.update(cliente);
  }

  @Get()
  async findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Cliente[]> {
    return this.clienteService.findById(id);
  }

  @Delete(":id")
  deleteById(@Param("id") id: string) {
    return this.clienteService.delete(id);
  }

}

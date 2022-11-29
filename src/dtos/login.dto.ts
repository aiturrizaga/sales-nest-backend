import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty({message: "Usuario obligatorio"})
  user: string;

  @IsNotEmpty({message: "Contraseña obligatoria"})
  password: string;
}

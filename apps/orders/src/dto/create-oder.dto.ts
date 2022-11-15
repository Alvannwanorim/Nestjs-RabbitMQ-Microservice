import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsString()
  phoneNumber: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateInsurenceDto } from './create-insurence.dto';

export class UpdateInsurenceDto extends PartialType(CreateInsurenceDto) {}

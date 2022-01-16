// package: petstore.v1
// file: petstore/v1/petstore.proto

import * as jspb from "google-protobuf";
import * as google_type_datetime_pb from "../../google/type/datetime_pb";

export class Order extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPetId(): number;
  setPetId(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasShipDate(): boolean;
  clearShipDate(): void;
  getShipDate(): google_type_datetime_pb.DateTime | undefined;
  setShipDate(value?: google_type_datetime_pb.DateTime): void;

  getStatus(): OrderStatusMap[keyof OrderStatusMap];
  setStatus(value: OrderStatusMap[keyof OrderStatusMap]): void;

  getComplete(): boolean;
  setComplete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: number,
    petId: number,
    quantity: number,
    shipDate?: google_type_datetime_pb.DateTime.AsObject,
    status: OrderStatusMap[keyof OrderStatusMap],
    complete: boolean,
  }
}

export class Category extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class User extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getUserStatus(): number;
  setUserStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    userStatus: number,
  }
}

export class Tag extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class Pet extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearPhotoUrlsList(): void;
  getPhotoUrlsList(): Array<string>;
  setPhotoUrlsList(value: Array<string>): void;
  addPhotoUrls(value: string, index?: number): string;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): Category | undefined;
  setCategory(value?: Category): void;

  clearTagsList(): void;
  getTagsList(): Array<Tag>;
  setTagsList(value: Array<Tag>): void;
  addTags(value?: Tag, index?: number): Tag;

  getStatus(): PetStatusMap[keyof PetStatusMap];
  setStatus(value: PetStatusMap[keyof PetStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pet.AsObject;
  static toObject(includeInstance: boolean, msg: Pet): Pet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pet;
  static deserializeBinaryFromReader(message: Pet, reader: jspb.BinaryReader): Pet;
}

export namespace Pet {
  export type AsObject = {
    id: number,
    name: string,
    photoUrlsList: Array<string>,
    category?: Category.AsObject,
    tagsList: Array<Tag.AsObject>,
    status: PetStatusMap[keyof PetStatusMap],
  }
}

export class ResourceRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRequest): ResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRequest;
  static deserializeBinaryFromReader(message: ResourceRequest, reader: jspb.BinaryReader): ResourceRequest;
}

export namespace ResourceRequest {
  export type AsObject = {
    id: number,
  }
}

export class QueryPetsByStatusRequest extends jspb.Message {
  getStatus(): PetStatusMap[keyof PetStatusMap];
  setStatus(value: PetStatusMap[keyof PetStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPetsByStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPetsByStatusRequest): QueryPetsByStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPetsByStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPetsByStatusRequest;
  static deserializeBinaryFromReader(message: QueryPetsByStatusRequest, reader: jspb.BinaryReader): QueryPetsByStatusRequest;
}

export namespace QueryPetsByStatusRequest {
  export type AsObject = {
    status: PetStatusMap[keyof PetStatusMap],
  }
}

export class QueryPetsByStatusResponse extends jspb.Message {
  clearPetsList(): void;
  getPetsList(): Array<Pet>;
  setPetsList(value: Array<Pet>): void;
  addPets(value?: Pet, index?: number): Pet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPetsByStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPetsByStatusResponse): QueryPetsByStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPetsByStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPetsByStatusResponse;
  static deserializeBinaryFromReader(message: QueryPetsByStatusResponse, reader: jspb.BinaryReader): QueryPetsByStatusResponse;
}

export namespace QueryPetsByStatusResponse {
  export type AsObject = {
    petsList: Array<Pet.AsObject>,
  }
}

export class LoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    id: number,
  }
}

export interface OrderStatusMap {
  ORDER_STATUS_UNSPECIFIED: 0;
  ORDER_STATUS_PLACED: 1;
  ORDER_STATUS_APPROVED: 2;
  ORDER_STATUS_DELIVERED: 3;
}

export const OrderStatus: OrderStatusMap;

export interface PetStatusMap {
  PET_STATUS_UNSPECIFIED: 0;
  PET_STATUS_AVAILABLE: 1;
  PET_STATUS_PENDING: 2;
  PET_STATUS_SOLD: 3;
}

export const PetStatus: PetStatusMap;


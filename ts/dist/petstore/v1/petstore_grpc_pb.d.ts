// GENERATED CODE -- DO NOT EDIT!

// package: petstore.v1
// file: petstore/v1/petstore.proto

import * as petstore_v1_petstore_pb from "../../petstore/v1/petstore_pb";
import * as grpc from "@grpc/grpc-js";

interface IStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOrder: grpc.MethodDefinition<petstore_v1_petstore_pb.Order, petstore_v1_petstore_pb.Order>;
  getOrder: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.Order>;
  deleteOrder: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export const StoreServiceService: IStoreServiceService;

export interface IStoreServiceServer extends grpc.UntypedServiceImplementation {
  createOrder: grpc.handleUnaryCall<petstore_v1_petstore_pb.Order, petstore_v1_petstore_pb.Order>;
  getOrder: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.Order>;
  deleteOrder: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export class StoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOrder(argument: petstore_v1_petstore_pb.Order, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  createOrder(argument: petstore_v1_petstore_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  createOrder(argument: petstore_v1_petstore_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  getOrder(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  getOrder(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  getOrder(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Order>): grpc.ClientUnaryCall;
  deleteOrder(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deleteOrder(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deleteOrder(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
}

interface IPetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createPet: grpc.MethodDefinition<petstore_v1_petstore_pb.Pet, petstore_v1_petstore_pb.Pet>;
  updatePet: grpc.MethodDefinition<petstore_v1_petstore_pb.Pet, petstore_v1_petstore_pb.Pet>;
  queryPetsByStatus: grpc.MethodDefinition<petstore_v1_petstore_pb.QueryPetsByStatusRequest, petstore_v1_petstore_pb.QueryPetsByStatusResponse>;
  getPet: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.Pet>;
  deletePet: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export const PetServiceService: IPetServiceService;

export interface IPetServiceServer extends grpc.UntypedServiceImplementation {
  createPet: grpc.handleUnaryCall<petstore_v1_petstore_pb.Pet, petstore_v1_petstore_pb.Pet>;
  updatePet: grpc.handleUnaryCall<petstore_v1_petstore_pb.Pet, petstore_v1_petstore_pb.Pet>;
  queryPetsByStatus: grpc.handleUnaryCall<petstore_v1_petstore_pb.QueryPetsByStatusRequest, petstore_v1_petstore_pb.QueryPetsByStatusResponse>;
  getPet: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.Pet>;
  deletePet: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export class PetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createPet(argument: petstore_v1_petstore_pb.Pet, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  createPet(argument: petstore_v1_petstore_pb.Pet, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  createPet(argument: petstore_v1_petstore_pb.Pet, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  updatePet(argument: petstore_v1_petstore_pb.Pet, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  updatePet(argument: petstore_v1_petstore_pb.Pet, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  updatePet(argument: petstore_v1_petstore_pb.Pet, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  queryPetsByStatus(argument: petstore_v1_petstore_pb.QueryPetsByStatusRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.QueryPetsByStatusResponse>): grpc.ClientUnaryCall;
  queryPetsByStatus(argument: petstore_v1_petstore_pb.QueryPetsByStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.QueryPetsByStatusResponse>): grpc.ClientUnaryCall;
  queryPetsByStatus(argument: petstore_v1_petstore_pb.QueryPetsByStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.QueryPetsByStatusResponse>): grpc.ClientUnaryCall;
  getPet(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  getPet(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  getPet(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.Pet>): grpc.ClientUnaryCall;
  deletePet(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deletePet(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deletePet(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
}

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: grpc.MethodDefinition<petstore_v1_petstore_pb.User, petstore_v1_petstore_pb.User>;
  getUser: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.User>;
  login: grpc.MethodDefinition<petstore_v1_petstore_pb.LoginRequest, petstore_v1_petstore_pb.LoginResponse>;
  deleteUser: grpc.MethodDefinition<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
  createUser: grpc.handleUnaryCall<petstore_v1_petstore_pb.User, petstore_v1_petstore_pb.User>;
  getUser: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.User>;
  login: grpc.handleUnaryCall<petstore_v1_petstore_pb.LoginRequest, petstore_v1_petstore_pb.LoginResponse>;
  deleteUser: grpc.handleUnaryCall<petstore_v1_petstore_pb.ResourceRequest, petstore_v1_petstore_pb.ResourceRequest>;
}

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createUser(argument: petstore_v1_petstore_pb.User, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  createUser(argument: petstore_v1_petstore_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  createUser(argument: petstore_v1_petstore_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  getUser(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.User>): grpc.ClientUnaryCall;
  login(argument: petstore_v1_petstore_pb.LoginRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: petstore_v1_petstore_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: petstore_v1_petstore_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.LoginResponse>): grpc.ClientUnaryCall;
  deleteUser(argument: petstore_v1_petstore_pb.ResourceRequest, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deleteUser(argument: petstore_v1_petstore_pb.ResourceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
  deleteUser(argument: petstore_v1_petstore_pb.ResourceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<petstore_v1_petstore_pb.ResourceRequest>): grpc.ClientUnaryCall;
}

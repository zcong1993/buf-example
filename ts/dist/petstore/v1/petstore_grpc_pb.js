// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var petstore_v1_petstore_pb = require('../../petstore/v1/petstore_pb.js');
var google_type_datetime_pb = require('../../google/type/datetime_pb.js');

function serialize_petstore_v1_LoginRequest(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.LoginRequest)) {
    throw new Error('Expected argument of type petstore.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_LoginRequest(buffer_arg) {
  return petstore_v1_petstore_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_LoginResponse(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.LoginResponse)) {
    throw new Error('Expected argument of type petstore.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_LoginResponse(buffer_arg) {
  return petstore_v1_petstore_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_Order(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.Order)) {
    throw new Error('Expected argument of type petstore.v1.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_Order(buffer_arg) {
  return petstore_v1_petstore_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_Pet(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.Pet)) {
    throw new Error('Expected argument of type petstore.v1.Pet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_Pet(buffer_arg) {
  return petstore_v1_petstore_pb.Pet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_QueryPetsByStatusRequest(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.QueryPetsByStatusRequest)) {
    throw new Error('Expected argument of type petstore.v1.QueryPetsByStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_QueryPetsByStatusRequest(buffer_arg) {
  return petstore_v1_petstore_pb.QueryPetsByStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_QueryPetsByStatusResponse(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.QueryPetsByStatusResponse)) {
    throw new Error('Expected argument of type petstore.v1.QueryPetsByStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_QueryPetsByStatusResponse(buffer_arg) {
  return petstore_v1_petstore_pb.QueryPetsByStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_ResourceRequest(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.ResourceRequest)) {
    throw new Error('Expected argument of type petstore.v1.ResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_ResourceRequest(buffer_arg) {
  return petstore_v1_petstore_pb.ResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_petstore_v1_User(arg) {
  if (!(arg instanceof petstore_v1_petstore_pb.User)) {
    throw new Error('Expected argument of type petstore.v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_petstore_v1_User(buffer_arg) {
  return petstore_v1_petstore_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var StoreServiceService = exports.StoreServiceService = {
  createOrder: {
    path: '/petstore.v1.StoreService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.Order,
    responseType: petstore_v1_petstore_pb.Order,
    requestSerialize: serialize_petstore_v1_Order,
    requestDeserialize: deserialize_petstore_v1_Order,
    responseSerialize: serialize_petstore_v1_Order,
    responseDeserialize: deserialize_petstore_v1_Order,
  },
  getOrder: {
    path: '/petstore.v1.StoreService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.Order,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_Order,
    responseDeserialize: deserialize_petstore_v1_Order,
  },
  deleteOrder: {
    path: '/petstore.v1.StoreService/DeleteOrder',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.ResourceRequest,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_ResourceRequest,
    responseDeserialize: deserialize_petstore_v1_ResourceRequest,
  },
};

exports.StoreServiceClient = grpc.makeGenericClientConstructor(StoreServiceService);
var PetServiceService = exports.PetServiceService = {
  createPet: {
    path: '/petstore.v1.PetService/CreatePet',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.Pet,
    responseType: petstore_v1_petstore_pb.Pet,
    requestSerialize: serialize_petstore_v1_Pet,
    requestDeserialize: deserialize_petstore_v1_Pet,
    responseSerialize: serialize_petstore_v1_Pet,
    responseDeserialize: deserialize_petstore_v1_Pet,
  },
  updatePet: {
    path: '/petstore.v1.PetService/UpdatePet',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.Pet,
    responseType: petstore_v1_petstore_pb.Pet,
    requestSerialize: serialize_petstore_v1_Pet,
    requestDeserialize: deserialize_petstore_v1_Pet,
    responseSerialize: serialize_petstore_v1_Pet,
    responseDeserialize: deserialize_petstore_v1_Pet,
  },
  queryPetsByStatus: {
    path: '/petstore.v1.PetService/QueryPetsByStatus',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.QueryPetsByStatusRequest,
    responseType: petstore_v1_petstore_pb.QueryPetsByStatusResponse,
    requestSerialize: serialize_petstore_v1_QueryPetsByStatusRequest,
    requestDeserialize: deserialize_petstore_v1_QueryPetsByStatusRequest,
    responseSerialize: serialize_petstore_v1_QueryPetsByStatusResponse,
    responseDeserialize: deserialize_petstore_v1_QueryPetsByStatusResponse,
  },
  getPet: {
    path: '/petstore.v1.PetService/GetPet',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.Pet,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_Pet,
    responseDeserialize: deserialize_petstore_v1_Pet,
  },
  deletePet: {
    path: '/petstore.v1.PetService/DeletePet',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.ResourceRequest,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_ResourceRequest,
    responseDeserialize: deserialize_petstore_v1_ResourceRequest,
  },
};

exports.PetServiceClient = grpc.makeGenericClientConstructor(PetServiceService);
var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/petstore.v1.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.User,
    responseType: petstore_v1_petstore_pb.User,
    requestSerialize: serialize_petstore_v1_User,
    requestDeserialize: deserialize_petstore_v1_User,
    responseSerialize: serialize_petstore_v1_User,
    responseDeserialize: deserialize_petstore_v1_User,
  },
  getUser: {
    path: '/petstore.v1.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.User,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_User,
    responseDeserialize: deserialize_petstore_v1_User,
  },
  login: {
    path: '/petstore.v1.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.LoginRequest,
    responseType: petstore_v1_petstore_pb.LoginResponse,
    requestSerialize: serialize_petstore_v1_LoginRequest,
    requestDeserialize: deserialize_petstore_v1_LoginRequest,
    responseSerialize: serialize_petstore_v1_LoginResponse,
    responseDeserialize: deserialize_petstore_v1_LoginResponse,
  },
  deleteUser: {
    path: '/petstore.v1.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: petstore_v1_petstore_pb.ResourceRequest,
    responseType: petstore_v1_petstore_pb.ResourceRequest,
    requestSerialize: serialize_petstore_v1_ResourceRequest,
    requestDeserialize: deserialize_petstore_v1_ResourceRequest,
    responseSerialize: serialize_petstore_v1_ResourceRequest,
    responseDeserialize: deserialize_petstore_v1_ResourceRequest,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);

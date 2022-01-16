// package: common.v1
// file: common/v1/common.proto

import * as jspb from "google-protobuf";

export class CommonError extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonError.AsObject;
  static toObject(includeInstance: boolean, msg: CommonError): CommonError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonError;
  static deserializeBinaryFromReader(message: CommonError, reader: jspb.BinaryReader): CommonError;
}

export namespace CommonError {
  export type AsObject = {
    code: number,
    reason: string,
    message: string,
    metadataMap: Array<[string, string]>,
  }
}


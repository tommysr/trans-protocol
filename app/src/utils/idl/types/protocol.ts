export type Protocol = {
  "version": "0.1.0",
  "name": "protocol",
  "instructions": [
    {
      "name": "initializeState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerShipper",
      "accounts": [
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerForwarder",
      "accounts": [
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerCarrier",
      "accounts": [
        {
          "name": "carrier",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "availability",
          "type": {
            "option": {
              "defined": "Availability"
            }
          }
        }
      ]
    },
    {
      "name": "createShipment",
      "accounts": [
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "shipment",
          "type": {
            "defined": "ShipmentData"
          }
        }
      ]
    },
    {
      "name": "buyShipment",
      "accounts": [
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "carrier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "availability",
            "type": {
              "defined": "Availability"
            }
          }
        ]
      }
    },
    {
      "name": "forwarder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "shipment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "shipper",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "no",
            "type": "u32"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          }
        ]
      }
    },
    {
      "name": "shipper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Availability",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "time",
            "type": "u64"
          },
          {
            "name": "location",
            "type": {
              "defined": "GeoLocation"
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentDetails",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u16"
          },
          {
            "name": "priority",
            "type": "u8"
          },
          {
            "name": "fragility",
            "type": "u8"
          },
          {
            "name": "access",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentDimensions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "weight",
            "type": "u32"
          },
          {
            "name": "width",
            "type": "u32"
          },
          {
            "name": "height",
            "type": "u32"
          },
          {
            "name": "depth",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "GeoLocation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "latitude",
            "type": "f32"
          },
          {
            "name": "longitude",
            "type": "f32"
          }
        ]
      }
    },
    {
      "name": "Geography",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": {
              "defined": "GeoLocation"
            }
          },
          {
            "name": "to",
            "type": {
              "defined": "GeoLocation"
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "geography",
            "type": {
              "defined": "Geography"
            }
          },
          {
            "name": "details",
            "type": {
              "defined": "ShipmentDetails"
            }
          },
          {
            "name": "dimensions",
            "type": {
              "defined": "ShipmentDimensions"
            }
          },
          {
            "name": "when",
            "type": "u64"
          },
          {
            "name": "deadline",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SignerNotAnAuthority",
      "msg": "Signer is not an authority of the shipper"
    },
    {
      "code": 6001,
      "name": "ShipperNotASigner",
      "msg": "Shipper is not the signer"
    },
    {
      "code": 6002,
      "name": "InvalidShipmentNumber",
      "msg": "Invalid shipment number"
    }
  ]
};

export const IDL: Protocol = {
  "version": "0.1.0",
  "name": "protocol",
  "instructions": [
    {
      "name": "initializeState",
      "accounts": [
        {
          "name": "state",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerShipper",
      "accounts": [
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerForwarder",
      "accounts": [
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerCarrier",
      "accounts": [
        {
          "name": "carrier",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "availability",
          "type": {
            "option": {
              "defined": "Availability"
            }
          }
        }
      ]
    },
    {
      "name": "createShipment",
      "accounts": [
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "u64"
        },
        {
          "name": "shipment",
          "type": {
            "defined": "ShipmentData"
          }
        }
      ]
    },
    {
      "name": "buyShipment",
      "accounts": [
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "carrier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "availability",
            "type": {
              "defined": "Availability"
            }
          }
        ]
      }
    },
    {
      "name": "forwarder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "shipment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "shipper",
            "type": "publicKey"
          },
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "no",
            "type": "u32"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          }
        ]
      }
    },
    {
      "name": "shipper",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Availability",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "time",
            "type": "u64"
          },
          {
            "name": "location",
            "type": {
              "defined": "GeoLocation"
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentDetails",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u16"
          },
          {
            "name": "priority",
            "type": "u8"
          },
          {
            "name": "fragility",
            "type": "u8"
          },
          {
            "name": "access",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentDimensions",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "weight",
            "type": "u32"
          },
          {
            "name": "width",
            "type": "u32"
          },
          {
            "name": "height",
            "type": "u32"
          },
          {
            "name": "depth",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "GeoLocation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "latitude",
            "type": "f32"
          },
          {
            "name": "longitude",
            "type": "f32"
          }
        ]
      }
    },
    {
      "name": "Geography",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "from",
            "type": {
              "defined": "GeoLocation"
            }
          },
          {
            "name": "to",
            "type": {
              "defined": "GeoLocation"
            }
          }
        ]
      }
    },
    {
      "name": "ShipmentData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "geography",
            "type": {
              "defined": "Geography"
            }
          },
          {
            "name": "details",
            "type": {
              "defined": "ShipmentDetails"
            }
          },
          {
            "name": "dimensions",
            "type": {
              "defined": "ShipmentDimensions"
            }
          },
          {
            "name": "when",
            "type": "u64"
          },
          {
            "name": "deadline",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SignerNotAnAuthority",
      "msg": "Signer is not an authority of the shipper"
    },
    {
      "code": 6001,
      "name": "ShipperNotASigner",
      "msg": "Shipper is not the signer"
    },
    {
      "code": 6002,
      "name": "InvalidShipmentNumber",
      "msg": "Invalid shipment number"
    }
  ]
};
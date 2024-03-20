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
      "args": [
        {
          "name": "name",
          "type": {
            "defined": "Name"
          }
        }
      ]
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
      "args": [
        {
          "name": "name",
          "type": {
            "defined": "Name"
          }
        }
      ]
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
          "name": "name",
          "type": {
            "defined": "Name"
          }
        },
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
          "name": "bought",
          "isMut": true,
          "isSigner": false
        },
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
    },
    {
      "name": "makeOffer",
      "accounts": [
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
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
          "name": "payment",
          "type": "u64"
        },
        {
          "name": "timeout",
          "type": "u32"
        }
      ]
    },
    {
      "name": "acceptOffer",
      "accounts": [
        {
          "name": "task",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
          },
          {
            "name": "availability",
            "type": {
              "defined": "Availability"
            }
          },
          {
            "name": "offersCount",
            "type": "u32"
          },
          {
            "name": "tasksCount",
            "type": "u32"
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
          },
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "shipmentOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "details",
            "type": {
              "defined": "OfferDetails"
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          },
          {
            "name": "submitted",
            "type": "i64"
          },
          {
            "name": "timeout",
            "type": "i64"
          },
          {
            "name": "no",
            "type": "u32"
          },
          {
            "name": "shipmentNo",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "acceptedOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "details",
            "type": {
              "defined": "OfferDetails"
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          },
          {
            "name": "accepted",
            "type": "i64"
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
      "name": "boughtShipment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
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
      "name": "Name",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": {
              "array": [
                "u32",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OfferDetails",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payment",
            "type": "u64"
          },
          {
            "name": "collateral",
            "type": "u64"
          },
          {
            "name": "deadline",
            "type": "u64"
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
  "events": [
    {
      "name": "ShipmentTransferred",
      "fields": [
        {
          "name": "seller",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "before",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "after",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ShipmentCreated",
      "fields": [
        {
          "name": "shipper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shipment",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OfferMade",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "offer",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OfferAccepted",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "offer",
          "type": "publicKey",
          "index": false
        }
      ]
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
    },
    {
      "code": 6003,
      "name": "SignerNotAnOwner",
      "msg": "Signer is not an owner of the shipment"
    },
    {
      "code": 6004,
      "name": "ShipmentSold",
      "msg": "Shipment is already sold"
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
      "args": [
        {
          "name": "name",
          "type": {
            "defined": "Name"
          }
        }
      ]
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
      "args": [
        {
          "name": "name",
          "type": {
            "defined": "Name"
          }
        }
      ]
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
          "name": "name",
          "type": {
            "defined": "Name"
          }
        },
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
          "name": "bought",
          "isMut": true,
          "isSigner": false
        },
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
    },
    {
      "name": "makeOffer",
      "accounts": [
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
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
          "name": "payment",
          "type": "u64"
        },
        {
          "name": "timeout",
          "type": "u32"
        }
      ]
    },
    {
      "name": "acceptOffer",
      "accounts": [
        {
          "name": "task",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "offer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "shipment",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "forwarder",
          "isMut": true,
          "isSigner": false
        },
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
          },
          {
            "name": "availability",
            "type": {
              "defined": "Availability"
            }
          },
          {
            "name": "offersCount",
            "type": "u32"
          },
          {
            "name": "tasksCount",
            "type": "u32"
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
          },
          {
            "name": "count",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "shipmentOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "details",
            "type": {
              "defined": "OfferDetails"
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          },
          {
            "name": "submitted",
            "type": "i64"
          },
          {
            "name": "timeout",
            "type": "i64"
          },
          {
            "name": "no",
            "type": "u32"
          },
          {
            "name": "shipmentNo",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "acceptedOffer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "details",
            "type": {
              "defined": "OfferDetails"
            }
          },
          {
            "name": "shipment",
            "type": {
              "defined": "ShipmentData"
            }
          },
          {
            "name": "accepted",
            "type": "i64"
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
      "name": "boughtShipment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "buyer",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
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
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": {
              "defined": "Name"
            }
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
      "name": "Name",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "value",
            "type": {
              "array": [
                "u32",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "OfferDetails",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "payment",
            "type": "u64"
          },
          {
            "name": "collateral",
            "type": "u64"
          },
          {
            "name": "deadline",
            "type": "u64"
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
  "events": [
    {
      "name": "ShipmentTransferred",
      "fields": [
        {
          "name": "seller",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "before",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "after",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ShipmentCreated",
      "fields": [
        {
          "name": "shipper",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "shipment",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OfferMade",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "offer",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "OfferAccepted",
      "fields": [
        {
          "name": "from",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "to",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "offer",
          "type": "publicKey",
          "index": false
        }
      ]
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
    },
    {
      "code": 6003,
      "name": "SignerNotAnOwner",
      "msg": "Signer is not an owner of the shipment"
    },
    {
      "code": 6004,
      "name": "ShipmentSold",
      "msg": "Shipment is already sold"
    }
  ]
};

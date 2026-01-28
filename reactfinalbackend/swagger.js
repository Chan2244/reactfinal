{
  "swagger": "2.0",
  "info": {
    "title": "pathfinder1 API",
    "description": "An API that shows students data.",
    "version": "1.0.0"
  },
  "host": "node-routes-xs4z.onrender.com",
  "basePath": "/",
  "schemes": [
    "https"
  ],
  "paths": {
    "/": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/classes/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "className": {
                  "example": "any"
                },
                "hitpoints": {
                  "example": "any"
                },
                "wealth": {
                  "example": "any"
                },
                "classAlignment": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/classes/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/weapons/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "weaponsName": {
                  "example": "any"
                },
                "weaponDamage": {
                  "example": "any"
                },
                "weaponCost": {
                  "example": "any"
                },
                "weaponClass": {
                  "example": "any"
                },
                "WeapnType": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/weapons/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
     "/monsters/": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      },
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "monstersName": {
                  "example": "any"
                },
                "monsterType": {
                  "example": "any"
                },
                "monsterClimate": {
                  "example": "any"
                },
                "monsterTerrain": {
                  "example": "any"
                },
                "monsterXp": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
   "/monsters/{id}": {
      "get": {
        "description": "",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/auth/home": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/auth/protected": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "authorization",
            "in": "header",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/auth/register": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "fullName": {
                  "example": "any"
                },
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                },
                "userType": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          },
          "400": {
            "description": "Bad Request"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/auth/login": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "email": {
                  "example": "any"
                },
                "password": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "401": {
            "description": "Unauthorized"
          },
          "500": {
            "description": "Internal Server Error"
          }
        }
      }
    },
    "/auth/logout": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}
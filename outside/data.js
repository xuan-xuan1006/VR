var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "正門口",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6430207318741878,
          "pitch": 0.001526316265936245,
          "rotation": 6.283185307179586,
          "target": "1-"
        },
        {
          "yaw": -2.6552750321994694,
          "pitch": 0.09413837412009585,
          "rotation": 0,
          "target": "5-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "側門",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9127821995633916,
          "pitch": -0.07276748253839216,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -2.5019611909694675,
          "pitch": -0.0005256013056147424,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "停車場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.0555841055444057,
        "pitch": -0.25759064028140877,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.781338863537764,
          "pitch": -0.027624601456000875,
          "rotation": 0,
          "target": "3-"
        },
        {
          "yaw": 2.056420284667702,
          "pitch": 0.01723541545647933,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "側面",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.342404599215623,
        "pitch": -0.2541927186859638,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.0951961778473587,
          "pitch": 0.04399663669574316,
          "rotation": 0,
          "target": "4-"
        },
        {
          "yaw": 0.17488773110532208,
          "pitch": 0.09569652071532886,
          "rotation": 0.7853981633974483,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-",
      "name": "從旁邊看",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1664,
      "initialViewParameters": {
        "yaw": 0.7371006990937445,
        "pitch": -0.06838342935839847,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.043030685166121074,
          "pitch": 0.04320137798375967,
          "rotation": 11.780972450961727,
          "target": "3-"
        },
        {
          "yaw": 1.5684995779781907,
          "pitch": 0.061690264267515005,
          "rotation": 6.283185307179586,
          "target": "5-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-",
      "name": "廣場",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8645441018764615,
        "pitch": -0.25354424272069487,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.7279783420502248,
          "pitch": 0.1285402059329801,
          "rotation": 4.71238898038469,
          "target": "4-"
        },
        {
          "yaw": -0.738002130313486,
          "pitch": 0.03265707892512992,
          "rotation": 0.7853981633974483,
          "target": "0-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "outside",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
